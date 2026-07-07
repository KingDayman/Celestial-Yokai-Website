import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import SpeciesCard from '@/components/SpeciesCard';
import { species } from '@/content/species';

export const metadata = {
  title: 'Species Archive',
  description: 'Guardian species recorded to date. One record unsealed; the rest are waking.',
};

export default function SpeciesArchive() {
  return (
    <>
      <section className="page-hero">
        <div className="glow" />
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 780 }}>
          <Reveal><SectionLabel center>The Species Archive</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h1 className="h1" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)' }}>
              Guardian species recorded to date
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="sub" style={{ margin: '1.4rem auto 0' }}>
              Records unseal as guardians wake. Sealed entries are not empty — they
              are waiting.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: '1rem' }}>
        <div className="wrap">
          <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))' }}>
            {species.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <SpeciesCard s={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
