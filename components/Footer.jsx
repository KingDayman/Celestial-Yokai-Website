import { Send, MessageCircle, Lock, Image as ImageIcon, ShoppingBag } from "lucide-react";
import PlaceholderImage from "./ui/PlaceholderImage";
import { SITE, COMMUNITY_LINKS, NAV_LINKS } from "@/lib/siteData";

const ICONS = {
  x: Send,
  discord: MessageCircle,
  gravestake: Lock,
  collection: ImageIcon,
  etsy: ShoppingBag,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-void-deep">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <PlaceholderImage
              src="/images/logo.png"
              alt={SITE.name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full ring-1 ring-gold/40"
            />
            <div>
              <p className="font-display text-lg text-mist">{SITE.name}</p>
              <p className="text-xs text-mist-dim">{SITE.tagline}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {COMMUNITY_LINKS.map((link) => {
              const Icon = ICONS[link.key] || Send;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full glass text-mist-dim transition-all duration-300 hover:border-gold/40 hover:text-gold hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 hidden flex-wrap gap-x-6 gap-y-2 border-t border-white/5 pt-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label text-xs uppercase tracking-wide text-mist-dim transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-mist-dim/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>Built on Solana. Not financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
