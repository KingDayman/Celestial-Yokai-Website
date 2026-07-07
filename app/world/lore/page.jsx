import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import LoreFrame from '@/components/LoreFrame';

export const metadata = {
  title: 'Lore Codex',
  description: 'The recorded history of the Celestial Realms — unsealed entry by entry.',
};

const entries = [
  {
    n: '001',
    t: 'The Veil',
    body: 'No one built the Veil. It grew — the way silence grows in a room where something must not be said. On one side, the physical world. On the other, the Celestial Realms: places of moonlight, rooted dark, collapsed stars, and rivers with will. For centuries the guardians kept the two apart, because the last time the worlds touched, neither survived it unchanged.',
  },
  {
    n: '002',
    t: 'The Weakening',
    body: 'It began as flickers. Spirit flame where no flame should burn. Markings appearing on things that had never been marked. The guardians felt it first — the Veil thinning like fabric worn from the inside. Something on the far side is pressing through. The records do not yet say what.',
  },
  {
    n: '003',
    t: 'The First Crossing',
    body: 'The Kitsari crossed first, as they always do — unseen, unhurried, one thousand of them slipping through the thinning places. Each chose a companion on this side. The Archive is clear on one point: they were not fleeing something. They were preparing for it.',
  },
];

export default function Lore() {
  return (
    <>
      <section className="page-hero">
        <div className="glow" />
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 780 }}>
          <Reveal><SectionLabel center>The Lore Codex</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h1 className="h1" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)' }}>
              What the Archive has unsealed
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="sub" style={{ margin: '1.4rem auto 0' }}>
              The Codex grows. New entries unseal in Discord first, then take their
              place here.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: '1rem' }}>
        <div className="wrap" style={{ maxWidth: 820, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {entries.map((e, i) => (
            <Reveal key={e.n} delay={i * 0.08}>
              <LoreFrame>
                <div className="mono" style={{ fontSize: '0.6rem', letterSpacing: '0.28em', color: 'var(--gold)', marginBottom: '0.8rem' }}>
                  ENTRY {e.n}
                </div>
                <div className="h3" style={{ marginBottom: '0.9rem' }}>{e.t}</div>
                <p className="sub" style={{ maxWidth: 'none' }}>{e.body}</p>
              </LoreFrame>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="card sealed-card" style={{ textAlign: 'center', padding: '2.5rem' }}>
              <div className="mono" style={{ fontSize: '0.6rem', letterSpacing: '0.28em', color: 'rgba(155,93,229,.45)', marginBottom: '0.8rem' }}>
                ENTRY 004
              </div>
              <p className="redacted">
                ▓▒░ ████ ▓▒░ ██████ ░▒▓<br />
                ░▒▓ ████████ ▓▒░ ██ ░░▒<br />
                The Archive has not unsealed this record.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
