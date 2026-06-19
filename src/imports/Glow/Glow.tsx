import glowImage from "../../assets/my-glow.webp";

export default function Glow() {
  return (
    <div className="relative h-full w-full overflow-hidden flex items-start justify-center" data-name="Glow">
      <img
        src={glowImage}
        alt=""
        className="w-[2080px] max-w-none h-auto object-top"
        draggable="false"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
