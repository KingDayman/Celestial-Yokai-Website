import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import LoreFrame from '@/components/LoreFrame';
import SpeciesCard from '@/components/SpeciesCard';
import StatusChip from '@/components/StatusChip';
import VeilLink from '@/components/VeilLink';
import VaultSeal from '@/components/VaultSeal';
import VaultProgress from '@/components/VaultProgress';
import { species } from '@/content/species';
import { config } from '@/lib/config';

export default function Home() {
  const kitsari = species[0];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="home-hero">
        <div className="bg" />
        <div className="moon" aria-hidden="true">
          <div className="core" />
          <div className="ring" />
        </div>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <Reveal>
                <SectionLabel>The Celestial Archives</SectionLabel>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="h1">
                  Beyond the Veil,
                  <br />
                  <span className="grad">the Realms are waking.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="sub" style={{ marginTop: '1.4rem' }}>
                  Celestial Yokais is a living anime-inspired universe of guardian
                  spirits — where holding a companion is the beginning of the story,
                  not the end of it. The first guardians, the Kitsari, have already
                  crossed over.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="hero-btns">
                  <Link href="/world/species/kitsari" className="btn-p">
                    ⟡ Meet the Kitsari
                  </Link>
                  <Link href="/world" className="btn-s">
                    Explore the World
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="hero-art">
              <Image
                src="/kitsari-hero.webp"
                alt="A Kitsari — celestial fox spirit with sacred markings"
                width={420}
                height={420}
                priority
              />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="sl" />

      {/* ── THE WORLD HOOK ───────────────────────────── */}
      <section>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 860 }}>
          <Reveal>
            <SectionLabel center>The World</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="h2">Not a collection. A world with a door in it.</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <LoreFrame>
              <p className="sub" style={{ maxWidth: 'none' }}>
                Beyond the physical world lie the Celestial Realms, hidden behind the
                Veil for centuries. The Veil is weakening. Ancient guardian species
                are waking, and companions are being chosen to help restore the
                balance. That&rsquo;s where you come in.
              </p>
            </LoreFrame>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="stats" style={{ marginTop: '2.5rem' }}>
              <div className="stat">
                <div className="v">V</div>
                <div className="k">Guardian species recorded</div>
              </div>
              <div className="stat">
                <div className="v">I</div>
                <div className="k">Realm awakening — Tsukivale</div>
              </div>
              <div className="stat">
                <div className="v">∞</div>
                <div className="k">Beyond the Veil</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ marginTop: '2.2rem' }}>
              <Link href="/world" className="btn-s">
                Enter the World
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="sl" />

      {/* ── KITSARI FEATURE ──────────────────────────── */}
      <section>
        <div className="wrap">
          <div className="grid-2">
            <Reveal>
              <Image
                src="/logo-circle.webp"
                alt="Kitsari sigil — the first guardians"
                width={440}
                height={440}
                style={{
                  margin: '0 auto',
                  filter:
                    'drop-shadow(0 0 55px rgba(155,93,229,.45)) drop-shadow(0 0 110px rgba(155,93,229,.18))',
                }}
              />
            </Reveal>
            <div>
              <Reveal>
                <SectionLabel>Species File · 001</SectionLabel>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="h2">
                  The First Guardians: <span className="grad">Kitsari</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <StatusChip status="awakened" />
              </Reveal>
              <Reveal delay={0.16}>
                <p className="sub" style={{ margin: '1.2rem 0 1.6rem' }}>
                  {kitsari.lore[0]}
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.8rem' }}>
                  {kitsari.nature.map((n) => (
                    <span className="tchip" key={n}>
                      {n}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.28}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/world/species/kitsari" className="btn-p">
                    View the Collection
                  </Link>
                  <VeilLink
                    href={config.links.mint}
                    label="Gravemint, keeper of the minting shrine"
                    className="btn-s"
                  >
                    Mint a Companion
                  </VeilLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="sl" />

      {/* ── SPECIES ARCHIVE STRIP ────────────────────── */}
      <section>
        <div className="wrap">
          <Reveal>
            <SectionLabel>The Species Archive</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="h2">Five records. One unsealed.</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="sub" style={{ marginBottom: '2.5rem' }}>
              The Kitsari are only the beginning. As the Veil weakens, more guardian
              species stir — and the Archive unseals their records one by one.
            </p>
          </Reveal>
          <div className="grid-cards">
            {species.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.07}>
                <SpeciesCard s={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="sl" />

      {/* ── YOKAI COIN ───────────────────────────────── */}
      <section>
        <div className="wrap">
          <div className="grid-2">
            <div>
              <Reveal>
                <SectionLabel>Yokai Coin</SectionLabel>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="h2">
                  The current that runs <span className="grad">through the Realms</span>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="sub" style={{ marginBottom: '1.8rem' }}>
                  Yokai Coin is how the world says thank you. Stake your companion,
                  show up, build things — YC flows back to you, and spends forward
                  into mints, events, merch, and experiences still sealed behind the
                  Veil.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <Link href="/yokai-coin" className="btn-s">
                  Learn about YC
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div className="grid-3" style={{ gridTemplateColumns: '1fr', gap: '0.9rem' }}>
                {[
                  ['Hold', 'A Kitsari companion is your place in the world.'],
                  ['Stake', 'Staked companions earn YC over time — long-term holding, rewarded.'],
                  ['Flow', 'Spend YC on mints, raffles, events, merch, and what comes next.'],
                ].map(([t, b]) => (
                  <div className="card" key={t}>
                    <div className="h3" style={{ marginBottom: '0.35rem' }}>{t}</div>
                    <p style={{ fontWeight: 300, color: 'rgba(221,184,255,.6)', fontSize: '0.95rem' }}>{b}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="sl" />

      {/* ── THE CELESTIAL VAULT ──────────────────────── */}
      <section className="vault-teaser">
        <div className="vt-seal" aria-hidden="true">
          <VaultSeal opacity={1} />
        </div>
        <div className="wrap">
          <div style={{ maxWidth: 640, position: 'relative', zIndex: 1 }}>
            <Reveal>
              <SectionLabel>Treasury of the Realms</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="h2">
                The Celestial Vault <span className="grad">is open to see</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="sub">
                Every relic the treasury holds — YC reserves, sealed Kitsari,
                raffle caches, allied gifts — sits in one chamber, on the record.
                A community should never wonder what its world is holding.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <VaultProgress compact />
            </Reveal>
            <Reveal delay={0.28}>
              <div style={{ marginTop: '1.8rem' }}>
                <Link href="/vault" className="btn-p">
                  ⟡ Enter the Vault
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="sl" />

      {/* ── BUILD THE REALM BANNER ───────────────────── */}
      <section>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 780 }}>
          <Reveal>
            <SectionLabel center>Quarterly Creator Event</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="h2">
              The Realm is built <span className="grad">by those who enter it</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="sub" style={{ margin: '0 auto 2rem' }}>
              Builders, artists, writers, and inventors compete across six tracks to
              shape what Celestial Yokais becomes next — with{' '}
              {config.buildTheRealm.prize} on the line. One Kitsari is your ticket in.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <Link href="/build-the-realm" className="btn-p">
              ⟡ Enter Build The Realm
            </Link>
          </Reveal>
        </div>
      </section>

      <div className="sl" />

      {/* ── JOIN ─────────────────────────────────────── */}
      <section>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 700 }}>
          <Reveal>
            <SectionLabel center>The Inner Sanctum</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="h2">The earliest wanderers shape the world</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="sub" style={{ margin: '0 auto 2rem' }}>
              Lore drops first in Discord. Traits are voted on in Discord. Sneak peeks
              surface in Discord. If you want a hand in what this world becomes, that
              is where the work happens.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <VeilLink href={config.links.discord} label="the Celestial Yokais Discord" className="btn-p">
                ⊕ Join the Discord
              </VeilLink>
              <VeilLink href={config.links.twitter} label="Celestial Yokais on X" className="btn-s">
                Follow on X
              </VeilLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
