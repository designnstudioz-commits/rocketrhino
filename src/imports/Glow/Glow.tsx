export default function Glow() {
  return (
    <div className="relative h-full w-full overflow-hidden flex items-start justify-center" data-name="Glow">
      <div
        className="w-full pointer-events-none"
        style={{
          height: "450px",
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(191,0,255,0.40) 0%, rgba(34,57,191,0.18) 45%, transparent 72%)",
        }}
      />
    </div>
  );
}
