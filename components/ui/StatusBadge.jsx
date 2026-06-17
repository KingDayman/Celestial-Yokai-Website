const STYLES = {
  Live: {
    dot: "bg-spirit",
    ping: true,
    text: "text-spirit",
    ring: "border-spirit/30",
  },
  active: {
    dot: "bg-spirit",
    ping: true,
    text: "text-spirit",
    ring: "border-spirit/30",
  },
  "In Development": {
    dot: "bg-gold",
    ping: true,
    text: "text-gold",
    ring: "border-gold/30",
  },
  "Coming Soon": {
    dot: "bg-amethyst-soft",
    ping: false,
    text: "text-amethyst-soft",
    ring: "border-amethyst-soft/25",
  },
  soon: {
    dot: "bg-amethyst-soft",
    ping: false,
    text: "text-amethyst-soft",
    ring: "border-amethyst-soft/25",
  },
};

export default function StatusBadge({ status = "Coming Soon", className = "" }) {
  const s = STYLES[status] || STYLES["Coming Soon"];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border ${s.ring} bg-void/60 px-3 py-1 font-label text-[10px] uppercase tracking-widest2 ${s.text} ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        {s.ping && (
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${s.dot} opacity-70`} />
        )}
        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${s.dot}`} />
      </span>
      {status === "active" ? "Active" : status}
    </span>
  );
}
