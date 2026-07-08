'use client';
import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { vaultItems, vaultCategories, categoryGlyph, categoryHue } from '@/content/vault';
import VaultSeal from './VaultSeal';
import VeilLink from './VeilLink';

/**
 * The Vault Chamber — the treasury wheel.
 * A 3D coverflow of sealed relics: drag to spin, arrows / arrow keys to
 * step, click a card to bring it to center. Auto-turns when idle.
 * Physics (momentum → spring snap) runs on refs + rAF so React only
 * re-renders when the centered relic or filter changes.
 */
export default function VaultChamber() {
  const [filter, setFilter] = useState('All');
  const [centerIdx, setCenterIdx] = useState(0);

  const items = useMemo(() => {
    const vis = vaultItems.filter((it) => it.visible);
    return filter === 'All' ? vis : vis.filter((it) => it.category === filter);
  }, [filter]);

  const wheelRef = useRef(null);
  const cardRefs = useRef([]);
  const phys = useRef({
    cur: 0,
    target: 0,
    vel: 0,
    dragging: false,
    dragMoved: false,
    lastX: 0,
    lastT: 0,
    lastCenter: -1,
    lastInteract: Date.now(),
  });
  const reduced = useRef(false);

  const spacing = () => (typeof window !== 'undefined' && window.innerWidth < 640 ? 120 : 190);
  const touch = () => (phys.current.lastInteract = Date.now());

  // Reset wheel to the featured relic whenever the filter changes.
  useEffect(() => {
    const fi = items.findIndex((it) => it.featured);
    const p = phys.current;
    p.cur = p.target = fi >= 0 ? fi : 0;
    p.vel = 0;
    p.lastCenter = -1;
    setCenterIdx(fi >= 0 ? fi : 0);
  }, [items]);

  // Layout + physics loop.
  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const p = phys.current;
    let raf;

    const layout = () => {
      const n = items.length;
      if (!n) return;
      const sp = spacing();
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        let off = i - (((p.cur % n) + n) % n);
        if (off > n / 2) off -= n;
        if (off < -n / 2) off += n;
        const abs = Math.abs(off);
        if (abs > 3.4) {
          el.style.display = 'none';
          return;
        }
        el.style.display = '';
        const isCenter = abs < 0.5;
        el.style.transform = `translate(-50%,-50%) translateX(${(off * sp).toFixed(1)}px) translateZ(${(-abs * 130).toFixed(1)}px) scale(${Math.max(0.55, 1 - abs * 0.22).toFixed(3)})`;
        el.style.opacity = Math.max(0.25, 1 - abs * 0.3).toFixed(2);
        el.style.zIndex = 100 - Math.round(abs * 10);
        el.classList.toggle('center', isCenter);
        el.setAttribute('aria-selected', isCenter ? 'true' : 'false');
      });
      const c = ((Math.round(p.cur) % n) + n) % n;
      if (c !== p.lastCenter) {
        p.lastCenter = c;
        setCenterIdx(c);
      }
    };

    const tick = () => {
      if (!p.dragging) {
        if (Math.abs(p.vel) > 0.0006) {
          p.cur += p.vel * 16;
          p.vel *= 0.95;
          p.target = Math.round(p.cur + p.vel * 60);
        } else {
          p.vel = 0;
          const d = p.target - p.cur;
          if (Math.abs(d) > 0.0008) p.cur += d * 0.11;
          else p.cur = p.target;
        }
      }
      layout();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [items]);

  // Auto-rotate when idle.
  useEffect(() => {
    const iv = setInterval(() => {
      const p = phys.current;
      if (reduced.current || p.dragging || document.hidden) return;
      if (items.length < 2) return;
      if (Date.now() - p.lastInteract > 7000) {
        p.vel = 0;
        p.target = Math.round(p.target) + 1;
      }
    }, 4500);
    return () => clearInterval(iv);
  }, [items]);

  // Keyboard.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const step = (dir) => {
    const p = phys.current;
    p.vel = 0;
    p.target = Math.round(p.target) + dir;
    touch();
  };

  // Drag.
  const onDown = (e) => {
    const p = phys.current;
    p.dragging = true;
    p.dragMoved = false;
    p.lastX = e.clientX;
    p.lastT = performance.now();
    p.vel = 0;
    wheelRef.current?.classList.add('dragging');
    wheelRef.current?.setPointerCapture?.(e.pointerId);
    touch();
  };
  const onMove = (e) => {
    const p = phys.current;
    if (!p.dragging) return;
    const now = performance.now();
    const dx = e.clientX - p.lastX;
    const dt = Math.max(1, now - p.lastT);
    if (Math.abs(dx) > 0) {
      if (Math.abs(dx) > 4) p.dragMoved = true;
      p.cur -= dx / spacing();
      p.vel = -(dx / spacing()) / dt;
      p.lastX = e.clientX;
      p.lastT = now;
    }
    touch();
  };
  const endDrag = useCallback(() => {
    const p = phys.current;
    if (!p.dragging) return;
    p.dragging = false;
    wheelRef.current?.classList.remove('dragging');
    p.vel = Math.max(-0.06, Math.min(0.06, p.vel));
    if (Math.abs(p.vel) <= 0.0006) p.target = Math.round(p.cur);
    touch();
  }, []);

  const onCardClick = (i) => {
    const p = phys.current;
    if (p.dragMoved) return;
    const n = items.length;
    let off = i - (((Math.round(p.cur) % n) + n) % n);
    if (off > n / 2) off -= n;
    if (off < -n / 2) off += n;
    p.vel = 0;
    p.target = Math.round(p.cur) + off;
    touch();
  };

  const item = items[centerIdx] || null;

  return (
    <>
      {/* filters */}
      <nav className="vault-filters" aria-label="Relic categories">
        {['All', ...vaultCategories].map((c) => (
          <button
            key={c}
            className={`vault-chip ${filter === c ? 'on' : ''}`}
            onClick={() => {
              setFilter(c);
              touch();
            }}
          >
            {c}
          </button>
        ))}
      </nav>

      {/* chamber */}
      <div className="vault-chamber">
        <VaultSeal />
        {items.length === 0 ? (
          <p className="vault-empty sub">The chamber is empty. Relics will appear here once sealed.</p>
        ) : (
          <>
            <div
              ref={wheelRef}
              className="vault-wheel"
              role="listbox"
              aria-label="Treasury relics"
              onPointerDown={onDown}
              onPointerMove={onMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
            >
              {items.map((it, i) => (
                <button
                  key={it.id}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="vault-card"
                  role="option"
                  aria-selected="false"
                  aria-label={it.name}
                  onClick={() => onCardClick(i)}
                >
                  <div className="vc-art">
                    {it.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={it.image} alt="" draggable="false" />
                    ) : (
                      <span
                        className="vc-glyph"
                        style={{
                          color: categoryHue[it.category] || 'var(--gold)',
                          textShadow: `0 0 18px ${categoryHue[it.category] || 'var(--gold)'}`,
                        }}
                      >
                        {categoryGlyph[it.category] || '宝'}
                      </span>
                    )}
                  </div>
                  <div className="vc-meta">
                    <span className="vc-name">{it.name}</span>
                    <span className="vc-cat" style={{ color: categoryHue[it.category] || 'var(--gold)' }}>
                      {it.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            {items.length > 1 && (
              <div className="vault-arrows">
                <button aria-label="Previous relic" onClick={() => step(-1)}>‹</button>
                <button aria-label="Next relic" onClick={() => step(1)}>›</button>
              </div>
            )}
          </>
        )}
      </div>

      {/* detail */}
      {item && (
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div className="frame vault-detail" key={item.id}>
            <span className="fc tl" /><span className="fc tr" />
            <span className="fc bl" /><span className="fc br" />
            <div className="vd-chips">
              {item.featured && <span className="chip awakened">Featured relic</span>}
              <span className="vd-cat mono" style={{ color: categoryHue[item.category] || 'var(--gold)' }}>
                {item.category}
              </span>
            </div>
            <h3 className="h2 vd-name">{item.name}</h3>
            <p className="sub" style={{ maxWidth: 'none', marginBottom: '1.4rem' }}>{item.description}</p>
            <div className="vd-grid">
              {[
                ['Collection', item.collection],
                ['Quantity', item.quantity],
                ['Sealed on', item.dateAdded],
              ]
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div className="vd-cell" key={k}>
                    <div className="vd-k mono">{k}</div>
                    <div className="vd-v">{v}</div>
                  </div>
                ))}
            </div>
            <div className="vd-purpose">
              <div className="vd-k mono" style={{ color: 'var(--gold)' }}>Purpose in the vault</div>
              <div className="vd-v">{item.purpose}</div>
            </div>
            {item.link && (
              <div style={{ marginTop: '1.4rem' }}>
                <VeilLink href={item.link} label={`${item.name}, beyond the Veil`} className="btn-s">
                  View this relic
                </VeilLink>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
