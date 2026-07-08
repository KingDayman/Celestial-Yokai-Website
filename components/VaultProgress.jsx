'use client';
import { useEffect, useRef, useState } from 'react';
import { vaultConfig } from '@/content/vault';

const fmt = (n) => n.toLocaleString('en-US');

/**
 * Treasury accumulation tracker. Fills to the real percentage when it
 * scrolls into view. Used on /vault and the homepage teaser.
 */
export default function VaultProgress({ compact = false }) {
  const { progressLabel, progressCurrent, progressGoal, progressUnit, showProgress } = vaultConfig;
  const pct = Math.min(100, (progressCurrent / progressGoal) * 100);
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setOn(true), obs.disconnect())),
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (!showProgress) return null;

  return (
    <div ref={ref} className={`vault-progress ${compact ? 'compact' : ''}`}>
      <div className="vp-head">
        <span className="vp-label">{progressLabel}</span>
        <span className="vp-pct">{pct.toFixed(0)}%</span>
      </div>
      <div
        className="vp-track"
        role="progressbar"
        aria-valuenow={progressCurrent}
        aria-valuemin={0}
        aria-valuemax={progressGoal}
        aria-label={progressLabel}
      >
        <div className="vp-fill" style={{ width: on ? `${pct}%` : '0%' }} />
      </div>
      <div className="vp-nums">
        <span>
          {fmt(progressCurrent)} {progressUnit} sealed
        </span>
        <span>
          goal · {fmt(progressGoal)} {progressUnit}
        </span>
      </div>
    </div>
  );
}
