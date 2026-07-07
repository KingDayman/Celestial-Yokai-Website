'use client';
import { useState, useEffect, useCallback } from 'react';

/**
 * The Veil Crossing — signature element.
 * Any link that leaves celestialyokais.xyz passes through a brief
 * in-world interstitial so departures still feel like the world.
 *
 * <VeilLink href="https://gravestake.io" label="GraveStake, keeper of the staking shrine">
 *   Stake your companion
 * </VeilLink>
 */
export default function VeilLink({ href, label, children, className = '' }) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  const cross = () => {
    window.open(href, '_blank', 'noopener,noreferrer');
    close();
  };

  return (
    <>
      <a
        href={href}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        {children}
      </a>
      {open && (
        <div className="veil-overlay" role="dialog" aria-modal="true" aria-label="Leaving Celestial Yokais" onClick={close}>
          <div className="veil-box frame" onClick={(e) => e.stopPropagation()}>
            <span className="fc tl" /><span className="fc tr" />
            <span className="fc bl" /><span className="fc br" />
            <div className="sigil">⟡</div>
            <div className="h3">You are crossing the Veil</div>
            <p>{label ? `Destination: ${label}.` : 'You are leaving Celestial Yokais.'} The Realms will be here when you return.</p>
            <span className="dest mono">{href}</span>
            <div className="veil-actions">
              <button className="btn-p" onClick={cross} autoFocus>Cross over</button>
              <button className="btn-g" onClick={close}>Stay in the Realms</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
