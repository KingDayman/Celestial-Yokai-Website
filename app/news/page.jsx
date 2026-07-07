import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { news } from '@/content/news';

export const metadata = {
  title: 'The Record',
  description: 'What has actually shipped — announcements, lore drops, and the living history of the Realms.',
};

const tagLabel = { shipped: 'Shipped', lore: 'Lore', event: 'Event', announcement: 'Announcement' };

export default function News() {
  return (
    <>
      <section className="page-hero">
        <div className="glow" />
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 780 }}>
          <Reveal><SectionLabel center>The Record</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h1 className="h1" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)' }}>
              What the Realms remember
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="sub" style={{ margin: '1.4rem auto 0' }}>
              Promises live on roadmaps. This page keeps score of what actually
              happened.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: '1rem' }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          {news.map((n, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="news-item">
                <div className="nd">{n.date}</div>
                <div>
                  <div className="nt">
                    {n.title}
                    <span className="news-tag">{tagLabel[n.type] || n.type}</span>
                  </div>
                  <p className="nb">{n.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
