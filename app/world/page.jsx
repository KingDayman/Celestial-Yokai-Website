import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import LoreFrame from '@/components/LoreFrame';
import StatusChip from '@/components/StatusChip';

export const metadata = {
  title: 'The World',
  description: 'The Veil, the Celestial Realms, and the guardians waking behind them.',
};

const phases = [
  {
    n: 'I',
    t: 'The Kitsari Awakening',
    lit: true,
    items: ['The gates open', 'The first lore is written', 'The Trait Lab begins'],
  },
  {
    n: 'II',
    t: 'Spirit Formation',
    lit: true,
    items: ['Yokai Coin enters the world', 'Staking rewards the faithful', 'The community shapes identity'],
  },
  {
    n: 'III',
    t: 'The Realm Expands',
    lit: false,
    items: ['New records unseal', 'Tsukivale fully wakes', 'Build The Realm grows'],
  },
  {
    n: 'IV',
    t: 'Beyond the Veil',
    lit: false,
    items: ['Games and interactive worlds', 'Animated storytelling', 'Realms not yet named'],
  },
];

export default function World() {
  return (
    <>
      <section className="page-hero">
        <div className="glow" />
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 820 }}>
          <Reveal><SectionLabel center>The World</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h1 className="h1" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)' }}>
              Behind the Veil
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="sub" style={{ margin: '1.4rem auto 0' }}>
              Every world has places it keeps from itself. Ours kept the Celestial
              Realms.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Reveal>
            <LoreFrame>
              <p className="sub" style={{ maxWidth: 'none' }}>
                For centuries the Veil held — a boundary between the physical world
                and the realms beyond it, kept in balance by ancient guardian
                species. But balance is not permanence. The Veil is weakening, and
                what waits behind it is waking up.
              </p>
              <p className="sub" style={{ maxWidth: 'none', marginTop: '1.2rem' }}>
                Guardians cross first. Companions are chosen second. The story of
                restoring the balance is written by both — which is why holding a
                companion here has always meant more than owning one.
              </p>
            </LoreFrame>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem', justifyContent: 'center' }}>
              <Link href="/world/lore" className="btn-s">Open the Lore Codex</Link>
              <Link href="/world/species" className="btn-s">Browse the Species Archive</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="sl" />

      {/* Realm: Tsukivale */}
      <section>
        <div className="wrap">
          <Reveal><SectionLabel>Realm File · 001</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h2 className="h2">Tsukivale <span className="grad">· the Moonlit Vale</span></h2>
          </Reveal>
          <Reveal delay={0.12}><StatusChip status="awakening" /></Reveal>
          <Reveal delay={0.18}>
            <p className="sub" style={{ marginTop: '1.2rem' }}>
              The first realm to press against the thinning Veil. A vale of
              perpetual moonlight where the Kitsari were born between worlds — its
              shrines, its spirit flames, and its deeper districts are still
              unsealing. More of Tsukivale is revealed as the world grows.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="sl" />

      {/* The Path Ahead — roadmap as story chapters */}
      <section>
        <div className="wrap">
          <Reveal><SectionLabel>The Path Ahead</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h2 className="h2">Four chapters. Two already burning.</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="sub" style={{ marginBottom: '2.5rem' }}>
              The Realms do not follow a fixed calendar. They progress as the
              community grows, the lore deepens, and spirits continue to wake. What
              has shipped lives in <Link href="/news" style={{ color: 'var(--gold)' }}>The Record</Link>.
            </p>
          </Reveal>
          <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))' }}>
            {phases.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="card" style={p.lit ? { borderColor: 'rgba(201,168,76,.35)' } : { opacity: 0.75 }}>
                  <div
                    className="mono"
                    style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.25em',
                      color: p.lit ? 'var(--gold)' : 'rgba(155,93,229,.4)',
                      marginBottom: '0.7rem',
                    }}
                  >
                    CHAPTER {p.n} {p.lit ? '· BURNING' : '· UNLIT'}
                  </div>
                  <div className="h3" style={{ marginBottom: '0.8rem' }}>{p.t}</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {p.items.map((it) => (
                      <li key={it} style={{ fontWeight: 300, fontSize: '0.9rem', color: 'rgba(221,184,255,.55)' }}>
                        · {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
