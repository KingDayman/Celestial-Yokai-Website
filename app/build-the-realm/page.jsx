import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import StepRail from '@/components/StepRail';
import VeilLink from '@/components/VeilLink';
import { config } from '@/lib/config';

export const metadata = {
  title: 'Build The Realm',
  description: 'The quarterly creator event. Six tracks, 1,000,000 YC, and a path to becoming a Founding Builder.',
};

const tracks = [
  ['Art', 'Illustration, character design, and visual worldbuilding for the Realms.'],
  ['Lore & Writing', 'Stories, histories, and Codex entries that deepen the world.'],
  ['Games & Interactive', 'Playable experiences, prototypes, and mechanics set in the universe.'],
  ['Tools & Builds', 'Software, bots, and utilities that serve holders and the community.'],
  ['Video & Animation', 'Motion work, edits, trailers, and animated storytelling.'],
  ['Community & Events', 'Gatherings, competitions, and initiatives that grow the Realms.'],
];

export default function BuildTheRealm() {
  return (
    <>
      <section className="page-hero">
        <div className="glow" />
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 820 }}>
          <Reveal><SectionLabel center>{config.buildTheRealm.cadence} Creator Event</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h1 className="h1" style={{ fontSize: 'clamp(2rem,5.5vw,3.8rem)' }}>
              Build <span className="grad">The Realm</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="sub" style={{ margin: '1.4rem auto 2rem' }}>
              The Realm is built by those who enter it. Builders, artists, writers,
              and inventors compete to shape what Celestial Yokais becomes next.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="stats" style={{ maxWidth: 640, margin: '0 auto' }}>
              <div className="stat"><div className="v">{config.buildTheRealm.prize.split(' ')[0]}</div><div className="k">YC prize pool</div></div>
              <div className="stat"><div className="v">VI</div><div className="k">Tracks</div></div>
              <div className="stat"><div className="v">I</div><div className="k">Kitsari to enter</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: '1rem' }}>
        <div className="wrap">
          <Reveal><SectionLabel>The six tracks</SectionLabel></Reveal>
          <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', marginTop: '1.5rem' }}>
            {tracks.map(([t, b], i) => (
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
          <Reveal><SectionLabel>How a season works</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <StepRail
              steps={[
                { title: 'Hold your ticket', body: 'One Kitsari companion is your entry into the season.' },
                { title: 'Choose a track', body: 'Enter any of the six tracks — or more than one, if you have the ambition.' },
                { title: 'Build during the window', body: 'Each season runs on a set window. Ship what you can defend.' },
                { title: 'Present to the Realms', body: 'Work is showcased to the community and judged in the open.' },
                { title: 'The current flows', body: `Winners share ${config.buildTheRealm.prize} and standing in the world.` },
                { title: 'Founding Builders rise', body: 'Standout builders earn a long-term place: recognition, collaboration, and a hand in the world itself.' },
              ]}
            />
          </Reveal>
          <Reveal delay={0.18}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <VeilLink href={config.links.discord} label="the Celestial Yokais Discord" className="btn-p">
                ⟡ Register in Discord
              </VeilLink>
            </div>
            <p className="mono" style={{ fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(155,93,229,.45)', marginTop: '1rem' }}>
              {config.buildTheRealm.nextSeason.toUpperCase()}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
