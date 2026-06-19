import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, dirname, basename, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "..", "src");

// Only convert files larger than 100KB — small ones aren't worth it
const MIN_SIZE = 100 * 1024;

async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await findImages(full)));
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      const s = await stat(full);
      if (s.size >= MIN_SIZE) results.push({ path: full, size: s.size });
    }
  }
  return results;
}

const images = await findImages(SRC);
console.log(`Found ${images.length} images >= 100KB to convert\n`);

let saved = 0;
for (const { path: imgPath, size: origSize } of images) {
  const ext = extname(imgPath);
  const webpPath = imgPath.replace(new RegExp(`${ext}$`, "i"), ".webp");
  try {
    await sharp(imgPath).webp({ quality: 82 }).toFile(webpPath);
    const { size: newSize } = await stat(webpPath);
    const reduction = Math.round((1 - newSize / origSize) * 100);
    saved += origSize - newSize;
    console.log(
      `✓ ${basename(imgPath).padEnd(55)} ${(origSize / 1024).toFixed(0).padStart(6)}KB → ${(newSize / 1024).toFixed(0).padStart(6)}KB  (-${reduction}%)`
    );
  } catch (e) {
    console.error(`✗ ${basename(imgPath)}: ${e.message}`);
  }
}

console.log(`\nTotal saved: ${(saved / 1024 / 1024).toFixed(1)} MB`);
