import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import VeilLink from '@/components/VeilLink';
import { config } from '@/lib/config';

export const metadata = {
  title: 'Shop',
  description: 'Artifacts from the Realms, made physical. Fulfilled through our Etsy shrine.',
};

export default function Shop() {
  return (
    <>
      <section className="page-hero">
        <div className="glow" />
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 780 }}>
          <Reveal><SectionLabel center>The Shop</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h1 className="h1" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)' }}>
              Artifacts made physical
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="sub" style={{ margin: '1.4rem auto 0' }}>
              Official Celestial Yokais merchandise — designed in the Realms,
              fulfilled honestly through our Etsy shrine. Holder-exclusive and
              community-designed releases are on the path ahead.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div style={{ marginTop: '2rem' }}>
              <VeilLink href={config.links.shop} label="our Etsy shrine" className="btn-p">
                ⟡ Browse the Shop
              </VeilLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: '1rem' }}>
        <div className="wrap">
          <Reveal>
            <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))' }}>
              {[
                ['Current drops', 'Live now in the shop — apparel and artifacts bearing the marks of the Realms.'],
                ['Limited editions', 'Small runs tied to moments in the world. When they seal, they seal.'],
                ['Holder exclusives', 'Sealed. Releases reserved for companions of the Realms are waking.'],
              ].map(([t, b], i) => (
                <div className={`card ${i === 2 ? 'sealed-card' : ''}`} key={t}>
                  <div className="h3" style={{ marginBottom: '0.4rem' }}>{t}</div>
                  <p style={{ fontWeight: 300, color: 'rgba(221,184,255,.6)', fontSize: '0.95rem' }}>{b}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
