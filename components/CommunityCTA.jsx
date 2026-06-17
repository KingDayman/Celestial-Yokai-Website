import { Send, MessageCircle, Lock, Image as ImageIcon, ShoppingBag, ArrowUpRight } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
import ScrollReveal from "./effects/ScrollReveal";
import { COMMUNITY_LINKS } from "@/lib/siteData";

const ICONS = {
  x: Send,
  discord: MessageCircle,
  gravestake: Lock,
  collection: ImageIcon,
  etsy: ShoppingBag,
};

export default function CommunityCTA() {
  return (
    <section id="community" className="relative section-pad">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <Eyebrow align="center">Join The Ecosystem</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="mt-5 font-display text-4xl text-mist sm:text-5xl">
            Where The Community Builds
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-mist-dim sm:text-lg">
            Celestial Yokais grows in the open. Follow along, talk lore and
            strategy with other holders, stake toward Yokai Coin, and keep an
            eye on the collection as new species awaken.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2}>
        <div className="gold-edge relative mx-auto mt-14 max-w-4xl rounded-3xl bg-void-raised/40 p-2">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {COMMUNITY_LINKS.map((link) => {
              const Icon = ICONS[link.key] || Send;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group flex items-center justify-between gap-3 rounded-xl px-5 py-5 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-amethyst/15 text-amethyst-soft transition-colors duration-300 group-hover:bg-gold/15 group-hover:text-gold">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="font-label text-sm text-mist">{link.label}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 flex-none text-mist-dim transition-colors duration-300 group-hover:text-gold" />
                </a>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
