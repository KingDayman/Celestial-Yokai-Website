import Link from 'next/link';
import { config } from '@/lib/config';
import VeilLink from './VeilLink';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="flogo">Celestial Yokais</div>
            <div className="ftag">The archives are open.</div>
            <p className="fdesc">
              A living anime-inspired universe of guardian spirits. Ancient realms.
              Eternal legacy.
            </p>
          </div>
          <div>
            <h4>The World</h4>
            <Link className="fl" href="/world">Enter the World</Link>
            <Link className="fl" href="/world/lore">Lore Codex</Link>
            <Link className="fl" href="/world/species">Species Archive</Link>
            <Link className="fl" href="/news">The Record</Link>
          </div>
          <div>
            <h4>Participate</h4>
            <Link className="fl" href="/yokai-coin">Yokai Coin</Link>
            <Link className="fl" href="/holders">Holder Benefits</Link>
            <Link className="fl" href="/build-the-realm">Build The Realm</Link>
            <Link className="fl" href="/shop">Shop</Link>
          </div>
          <div>
            <h4>Community</h4>
            <VeilLink className="fl" href={config.links.discord} label="Discord">
              Discord
            </VeilLink>
            <VeilLink className="fl" href={config.links.twitter} label="X / Twitter">
              X / Twitter
            </VeilLink>
            <Link className="fl" href="/faq">FAQ</Link>
          </div>
        </div>
        <div className="fbot">
          © {new Date().getFullYear()} Celestial Yokais · All rights reserved · Yokai
          Coin is built for participation, not speculation
        </div>
      </div>
    </footer>
  );
}
