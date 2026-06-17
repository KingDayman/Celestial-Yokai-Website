// Deterministic pseudo-random so the starfield renders identically on the
// server and client (no hydration mismatch, no useEffect flash).
function seeded(i, salt = 1) {
  const x = Math.sin(i * 999.123 * salt) * 10000;
  return x - Math.floor(x);
}

const STAR_COUNT = 46;

export default function AmbientField({ className = "" }) {
  const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
    left: `${(seeded(i, 1.1) * 100).toFixed(2)}%`,
    top: `${(seeded(i, 2.7) * 100).toFixed(2)}%`,
    size: 1 + seeded(i, 3.4) * 2,
    delay: `${(seeded(i, 4.9) * 6).toFixed(2)}s`,
    duration: `${3 + seeded(i, 5.6) * 4}s`,
    opacity: 0.25 + seeded(i, 6.2) * 0.55,
  }));

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Nebula glow blobs */}
      <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-amethyst/20 blur-[110px] animate-drift-slow" />
      <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-gold/14 blur-[110px] animate-drift-slower" />
      <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-amethyst-deep/40 blur-[120px] animate-drift-slow" />

      {/* Starfield */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-mist animate-twinkle"
          style={{
            left: s.left,
            top: s.top,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}

      {/* Fine grain to soften the gradients */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-grain" />
    </div>
  );
}
