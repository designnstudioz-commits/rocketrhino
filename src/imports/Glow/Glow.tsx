import glowImage from "../../assets/my-glow.png";

export default function Glow() {
  return (
    <div className="relative h-full w-full overflow-hidden flex items-start justify-center" data-name="Glow">
      <img
        src={glowImage}
        alt="Glow background"
        className="w-[2080px] max-w-none h-auto object-top"
        draggable="false"
      />
    </div>
  );
}
