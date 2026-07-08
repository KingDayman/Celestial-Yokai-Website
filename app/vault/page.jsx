import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import VaultChamber from '@/components/VaultChamber';
import VaultProgress from '@/components/VaultProgress';
import LoreFrame from '@/components/LoreFrame';
import { vaultTimeline, vaultItems } from '@/content/vault';

export const metadata = {
  title: 'The Celestial Vault',
  description:
    'A living showcase of the Celestial Yokais treasury — every relic, token, and reward sealed under starlight, on the record.',
};

export default function Vault() {
  const relicCount = vaultItems.filter((i) => i.visible).length;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="page-hero" style={{ paddingBottom: '1.5rem' }}>
        <div className="glow" />
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 780 }}>
          <Reveal><SectionLabel center>Treasury of the Realms</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h1 className="h1" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)' }}>
              The Celestial <span className="grad">Vault</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="sub" style={{ margin: '1.4rem auto 0' }}>
              Everything the treasury holds, sealed under starlight and on the
              record — {relicCount} relics and counting. Drag the wheel. Nothing
              here is hidden from the community it belongs to.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── THE CHAMBER ──────────────────────────────── */}
      <section style={{ paddingTop: '1rem' }}>
        <VaultChamber />
      </section>

      <div className="sl" />

      {/* ── TREASURY TRACKER ─────────────────────────── */}
      <section>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <Reveal><SectionLabel center>The Accumulation</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h2 className="h2" style={{ textAlign: 'center' }}>
              Sealed toward <span className="grad">the next threshold</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <VaultProgress />
          </Reveal>
          <Reveal delay={0.22}>
            <LoreFrame>
              <p className="sub" style={{ maxWidth: 'none' }}>
                The vault grows so the world can give back — staking rewards,
                raffles, event prizes, and utility still sealed behind the Veil.
                When a threshold is reached, the Chronicle below records what it
                unlocked.
              </p>
            </LoreFrame>
          </Reveal>
        </div>
      </section>

      <div className="sl" />

      {/* ── VAULT CHRONICLE ──────────────────────────── */}
      <section>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <Reveal><SectionLabel center>The Record of Sealings</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h2 className="h2" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              Vault <span className="grad">Chronicle</span>
            </h2>
          </Reveal>
          <div className="vault-chronicle">
            {vaultTimeline.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.08}>
                <div className="vch-item">
                  <div className="vch-dot" aria-hidden="true" />
                  <div className="vch-date mono">{t.date}</div>
                  <div>
                    <div className="vch-title">{t.title}</div>
                    <p className="vch-body">{t.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p
              className="mono"
              style={{
                textAlign: 'center',
                marginTop: '3rem',
                fontSize: '0.57rem',
                letterSpacing: '0.24em',
                color: 'rgba(155,93,229,.35)',
                textTransform: 'uppercase',
              }}
            >
              Sealed under starlight
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div style={{ textAlign: 'center', marginTop: '1.6rem' }}>
              <Link href="/holders" className="btn-s">
                How relics flow back to holders
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
