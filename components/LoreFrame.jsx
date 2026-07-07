/** Gold-cornered lore frame for quotes and pull text. */
export default function LoreFrame({ children, className = '' }) {
  return (
    <div className={`frame ${className}`}>
      <span className="fc tl" /><span className="fc tr" />
      <span className="fc bl" /><span className="fc br" />
      {children}
    </div>
  );
}
