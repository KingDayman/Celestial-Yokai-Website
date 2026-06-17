export default function SpiritMark({ className = "h-3.5 w-3.5 text-gold" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <path d="M12 5.5L15.5 12L12 18.5L8.5 12L12 5.5Z" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}
