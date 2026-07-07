'use client';
import { useEffect, useRef } from 'react';

/** Ambient spirit-particle canvas. Transform-only, ≤90 points, honors reduced motion. */
export default function Particles() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let W, H, raf;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const COLORS = ['rgba(155,93,229,', 'rgba(76,201,240,', 'rgba(201,168,76,', 'rgba(192,132,252,'];
    const pts = Array.from({ length: 90 }, () => spawn(true));

    function spawn(scatter) {
      const op = Math.random() * 0.4 + 0.08;
      return {
        x: Math.random() * window.innerWidth,
        y: scatter ? Math.random() * window.innerHeight : window.innerHeight + 10,
        r: Math.random() * 1.7 + 0.3,
        vy: -(Math.random() * 0.5 + 0.1),
        vx: (Math.random() - 0.5) * 0.25,
        c: COLORS[Math.floor(Math.random() * COLORS.length)] + op + ')',
      };
    }

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.y += p.vy;
        p.x += p.vx;
        if (p.y < -10) pts[i] = spawn(false);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="particles" aria-hidden="true" />;
}
