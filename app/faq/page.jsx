import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { faq } from '@/content/faq';

export const metadata = {
  title: 'FAQ',
  description: 'Answers for new wanderers, holders, and builders of the Realms.',
};

export default function FAQ() {
  return (
    <>
      <section className="page-hero">
        <div className="glow" />
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 780 }}>
          <Reveal><SectionLabel center>Questions</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h1 className="h1" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)' }}>
              Asked at the gate
            </h1>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: '1rem' }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          {faq.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.05}>
              <div style={{ marginBottom: '2.8rem' }}>
                <SectionLabel>{g.group}</SectionLabel>
                {g.items.map((it) => (
                  <details className="acc" key={it.q}>
                    <summary>{it.q}</summary>
                    <div className="acc-body">{it.a}</div>
                  </details>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
