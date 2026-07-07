import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import StatusChip from '@/components/StatusChip';
import LoreFrame from '@/components/LoreFrame';
import VeilLink from '@/components/VeilLink';
import { species, getSpecies } from '@/content/species';
import { config } from '@/lib/config';

export function generateStaticParams() {
  return species.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getSpecies(params.slug);
  if (!s) return {};
  return {
    title: s.status === 'sealed' ? `${s.name} · Record Sealed` : `${s.name} — ${s.epithet}`,
    description: s.short,
  };
}

export default function SpeciesPage({ params }) {
  const s = getSpecies(params.slug);
  if (!s) notFound();
  const sealed = s.status === 'sealed';
  const others = species.filter((o) => o.slug !== s.slug).slice(0, 4);

  return (
    <>
      <section className="page-hero">
        <div className="glow" />
        <div className="wrap">
          <div className="grid-2">
            <div>
              <Reveal><SectionLabel>Species File · {s.name}</SectionLabel></Reveal>
              <Reveal delay={0.08}>
                <h1 className="h1" style={{ fontSize: 'clamp(2.2rem,5vw,3.6rem)' }}>
                  {s.name}
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <div style={{ margin: '0.9rem 0 1.1rem' }}>
                  <StatusChip status={s.status} />
                </div>
              </Reveal>
              {!sealed && (
                <Reveal delay={0.16}>
                  <p className="sub" style={{ fontStyle: 'italic' }}>{s.epithet}</p>
                </Reveal>
              )}
            </div>
            <Reveal delay={0.18}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {s.heroImage || s.image ? (
                  <Image
                    src={s.heroImage || s.image}
                    alt={`${s.name} — ${s.epithet}`}
                    width={420}
                    height={420}
                    style={{
                      filter:
                        'drop-shadow(0 0 45px rgba(155,93,229,.5)) drop-shadow(0 0 100px rgba(155,93,229,.2))',
                    }}
                    priority
                  />
                ) : (
                  <div
                    className={sealed ? 'card sealed-card' : 'card'}
                    style={{
                      width: 'min(380px,100%)',
                      aspectRatio: '1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '5rem',
                        color: 'rgba(155,93,229,.18)',
                        filter: 'blur(3px)',
                      }}
                      aria-hidden="true"
                    >
                      {sealed ? '?' : s.name[0]}
                    </span>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lore */}
      <section style={{ paddingTop: '1rem' }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          {sealed ? (
            <Reveal>
              <LoreFrame className="sealed-card" >
                <p className="redacted" style={{ textAlign: 'center' }}>
                  ▓▒░ ████ ▓▒░ ██████ ░▒▓<br />
                  ░▒▓ ████████ ▓▒░ ██ ░░▒<br />
                  ▓▒░░ ████ ░░▒▓ ██████<br /><br />
                  The Archive has not unsealed this record.<br />
                  {s.short !== 'The Archive has not unsealed this record.' && s.short}
                </p>
              </LoreFrame>
            </Reveal>
          ) : (
            <Reveal>
              <LoreFrame>
                {s.lore.map((p, i) => (
                  <p key={i} className="sub" style={{ maxWidth: 'none', marginTop: i ? '1.2rem' : 0 }}>
                    {p}
                  </p>
                ))}
              </LoreFrame>
            </Reveal>
          )}

          {/* Nature */}
          {s.nature.length > 0 && (
            <Reveal delay={0.12}>
              <div style={{ marginTop: '2rem' }}>
                <SectionLabel>Nature</SectionLabel>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {s.nature.map((n) => (
                    <span className="tchip" key={n}>{n}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Collection */}
      {s.collection && (
        <>
          <div className="sl" />
          <section>
            <div className="wrap" style={{ maxWidth: 820 }}>
              <Reveal><SectionLabel>The Collection</SectionLabel></Reveal>
              <Reveal delay={0.08}>
                <h2 className="h2">One thousand crossings</h2>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="stats" style={{ margin: '1.8rem 0 2.2rem' }}>
                  <div className="stat"><div className="v">{s.collection.supply}</div><div className="k">Supply</div></div>
                  <div className="stat"><div className="v">◎</div><div className="k">{s.collection.chain}</div></div>
                  <div className="stat"><div className="v">⟡</div><div className="k">{s.collection.status}</div></div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <VeilLink href={config.links.mint} label="Gravemint, keeper of the minting shrine" className="btn-p">
                    ⟡ Mint a Companion
                  </VeilLink>
                  <Link href="/holders" className="btn-s">What holding unlocks</Link>
                </div>
              </Reveal>
            </div>
          </section>
        </>
      )}

      <div className="sl" />

      {/* Other guardians */}
      <section>
        <div className="wrap">
          <Reveal><SectionLabel>Other Guardians</SectionLabel></Reveal>
          <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', marginTop: '1.5rem' }}>
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 0.06}>
                <Link href={`/world/species/${o.slug}`} className="sp-card">
                  <StatusChip status={o.status} />
                  <div className="name">{o.name}</div>
                  <div className="epithet">
                    {o.status === 'sealed' ? 'Record sealed' : o.epithet}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
