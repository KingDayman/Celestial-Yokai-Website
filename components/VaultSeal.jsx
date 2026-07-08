/**
 * The Vault Seal — a slowly turning ring of runes behind the chamber.
 * Pure SVG + CSS animation (respects prefers-reduced-motion via globals).
 * `size` caps the rendered width; it scales down responsively.
 */
export default function VaultSeal({ size = 560, opacity = 0.5 }) {
  const runes = '天狐霊月星火水風雷光影夢'.split('');
  const runeTexts = runes.map((r, i) => {
    const a = (i / runes.length) * Math.PI * 2;
    const x = 200 + Math.cos(a) * 150;
    const y = 200 + Math.sin(a) * 150;
    const rot = (a * 180) / Math.PI + 90;
    return (
      <text
        key={i}
        x={x.toFixed(1)}
        y={y.toFixed(1)}
        fill="var(--gold-bright)"
        fillOpacity=".5"
        fontSize="14"
        textAnchor="middle"
        dominantBaseline="middle"
        transform={`rotate(${rot.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})`}
      >
        {r}
      </text>
    );
  });

  const ticks = Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * Math.PI * 2;
    return (
      <line
        key={i}
        x1={(200 + Math.cos(a) * 180).toFixed(1)}
        y1={(200 + Math.sin(a) * 180).toFixed(1)}
        x2={(200 + Math.cos(a) * 190).toFixed(1)}
        y2={(200 + Math.sin(a) * 190).toFixed(1)}
        stroke="var(--spirit-soft)"
        strokeOpacity=".3"
        strokeWidth="1"
      />
    );
  });

  return (
    <div className="vault-seal" style={{ opacity }} aria-hidden="true">
      <svg viewBox="0 0 400 400" style={{ width: '100%', maxWidth: size, height: 'auto' }}>
        <defs>
          <radialGradient id="vseal-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0cc6e" stopOpacity=".85" />
            <stop offset="35%" stopColor="#9b5de5" stopOpacity=".3" />
            <stop offset="100%" stopColor="#9b5de5" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="90" fill="url(#vseal-core)" className="vs-breathe" />
        <g className="vs-spin">
          <circle cx="200" cy="200" r="150" fill="none" stroke="var(--gold)" strokeOpacity=".35" strokeWidth="1" strokeDasharray="4 8" />
          {runeTexts}
        </g>
        <g className="vs-spin-rev">
          <circle cx="200" cy="200" r="185" fill="none" stroke="var(--spirit)" strokeOpacity=".18" strokeWidth="1" />
          {ticks}
        </g>
      </svg>
    </div>
  );
}
