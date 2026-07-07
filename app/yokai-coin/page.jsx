import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import LoreFrame from '@/components/LoreFrame';
import StepRail from '@/components/StepRail';
import VeilLink from '@/components/VeilLink';
import { config } from '@/lib/config';

export const metadata = {
  title: 'Yokai Coin',
  description: 'The current that runs through the Realms — earned by participation, spent on what comes next.',
};

const spend = ['Future mints', 'Raffles', 'Community events', 'Merchandise', 'Premium experiences', 'Trait Store', 'Game economies', 'Collaborations'];

export default function YokaiCoin() {
  return (
    <>
      <section className="page-hero">
        <div className="glow" />
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 780 }}>
          <Reveal><SectionLabel center>Yokai Coin · YC</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h1 className="h1" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)' }}>
              The current that runs <span className="grad">through the Realms</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="sub" style={{ margin: '1.4rem auto 0' }}>
              Yokai Coin is how the world says thank you. It rewards showing up —
              holding, staking, building — and spends forward into everything the
              Realms become.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: '1rem' }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Reveal>
            <LoreFrame>
              <p className="sub" style={{ maxWidth: 'none' }}>
                YC exists to connect every part of the world — not to be traded, but
                to be <em>used</em>. It is deliberately built for ecosystem
                participation, not financial speculation, and it is never positioned
                as an investment.
              </p>
            </LoreFrame>
          </Reveal>
        </div>
      </section>

      <div className="sl" />

      <section>
        <div className="wrap">
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div>
              <Reveal><SectionLabel>How YC flows to you</SectionLabel></Reveal>
              <Reveal delay={0.1}>
                <StepRail
                  steps={[
                    { title: 'Hold a companion', body: 'A Kitsari is your place in the world — and your key to the current.' },
                    { title: 'Stake through GraveStake', body: 'Staked companions earn YC over time. Long-term holding, rewarded. Your companion stays yours.' },
                    { title: 'Show up and build', body: 'Events, competitions, and Build The Realm all flow YC to the people shaping the world.' },
                  ]}
                />
              </Reveal>
              <Reveal delay={0.18}>
                <VeilLink href={config.links.staking} label="GraveStake, keeper of the staking shrine" className="btn-p">
                  ⟡ Stake your companion
                </VeilLink>
              </Reveal>
            </div>
            <div>
              <Reveal><SectionLabel>Where YC spends</SectionLabel></Reveal>
              <Reveal delay={0.1}>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                  {spend.map((x) => (
                    <span className="tchip" key={x}>{x}</span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <SectionLabel>The contract</SectionLabel>
                <div className="contract">
                  <span>{config.yc.contract}</span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <VeilLink href={config.links.solscan} label="Solscan, the public ledger" className="btn-s">
                    View on Solscan
                  </VeilLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="sl" />

      <section>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Reveal>
            <div className="card" style={{ borderColor: 'rgba(201,168,76,.3)' }}>
              <div className="h3" style={{ marginBottom: '0.6rem', color: 'var(--gold-bright)' }}>
                A note on what YC is not
              </div>
              <p style={{ fontWeight: 300, color: 'rgba(221,184,255,.65)', fontSize: '0.97rem' }}>
                Yokai Coin is built for ecosystem participation, not financial
                speculation. It is never positioned as an investment, carries no
                promise of value, and nothing on this site is financial advice.
                Participate because the world is worth participating in.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
