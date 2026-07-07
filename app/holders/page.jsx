import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import StepRail from '@/components/StepRail';
import VeilLink from '@/components/VeilLink';
import { config } from '@/lib/config';

export const metadata = {
  title: 'Holders',
  description: 'You hold a companion. Here is everything that walks with you.',
};

const now = [
  ['Staking rewards', 'Stake your Kitsari to earn Yokai Coin over time.'],
  ['Build The Realm entry', 'One Kitsari is your ticket into the quarterly creator event.'],
  ['Inner Sanctum access', 'Holder-exclusive Discord channels where the world is shaped.'],
  ['Trait customization', 'Customize supported companions as the Trait Store expands.'],
  ['Community events', 'Raffles, competitions, collaborations, and gatherings.'],
  ['Merch opportunities', 'Holder-exclusive and limited-edition releases.'],
];

const sealed = ['Achievement system', 'Holder profiles', 'Quest system', 'Companion progression', 'Game integrations', 'Seasonal events'];

export default function Holders() {
  return (
    <>
      <section className="page-hero">
        <div className="glow" />
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 780 }}>
          <Reveal><SectionLabel center>Holders</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h1 className="h1" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)' }}>
              You hold a companion.<br />
              <span className="grad">Here is what walks with you.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="sub" style={{ margin: '1.4rem auto 0' }}>
              Collectors are not customers here. Collectors are companions of the
              Celestial Realms — and the Realms take care of their own.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: '1rem' }}>
        <div className="wrap">
          <Reveal><SectionLabel>Walking with you now</SectionLabel></Reveal>
          <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', marginTop: '1.5rem' }}>
            {now.map(([t, b], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="card">
                  <div className="h3" style={{ marginBottom: '0.4rem' }}>{t}</div>
                  <p style={{ fontWeight: 300, color: 'rgba(221,184,255,.6)', fontSize: '0.95rem' }}>{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="sl" />

      <section>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Reveal><SectionLabel>How staking works</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <StepRail
              steps={[
                { title: 'Cross to GraveStake', body: 'Staking lives at GraveStake — a trusted keeper of the staking shrine.' },
                { title: 'Stake your Kitsari', body: 'Your companion begins earning Yokai Coin. It stays yours the entire time.' },
                { title: 'Claim the current', body: 'Return to claim your YC and spend it forward into the world.' },
              ]}
            />
          </Reveal>
          <Reveal delay={0.18}>
            <VeilLink href={config.links.staking} label="GraveStake, keeper of the staking shrine" className="btn-p">
              ⟡ Open GraveStake
            </VeilLink>
          </Reveal>
        </div>
      </section>

      <div className="sl" />

      <section>
        <div className="wrap">
          <Reveal><SectionLabel>Still sealed</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <p className="sub" style={{ marginBottom: '1.8rem' }}>
              These benefits are waking, not promised-by-a-date. When a seal breaks,
              it breaks in The Record first.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {sealed.map((x) => (
                <span className="tchip" key={x} style={{ opacity: 0.55 }}>⊘ {x}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
