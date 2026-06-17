import {
  Gem,
  BookOpen,
  Bot,
  Coins,
  Layers,
  ShoppingBag,
  Gamepad2,
  CalendarRange,
  Users,
} from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
import ScrollReveal from "./effects/ScrollReveal";
import { ECOSYSTEM_PILLARS } from "@/lib/siteData";

const ICONS = {
  nfts: Gem,
  lore: BookOpen,
  ai: Bot,
  coin: Coins,
  staking: Layers,
  merch: ShoppingBag,
  games: Gamepad2,
  events: CalendarRange,
  community: Users,
};

export default function EcosystemPillars() {
  return (
    <section id="ecosystem" className="relative section-pad bg-void-deep/40">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <Eyebrow align="center">The Wider Ecosystem</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="mt-5 font-display text-4xl text-mist sm:text-5xl">
            Nine Pillars, One World
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-mist-dim sm:text-lg">
            Celestial Yokais is built from interlocking systems — collectibles,
            lore, tools, and people — each reinforcing the others as the
            ecosystem grows.
          </p>
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ECOSYSTEM_PILLARS.map((pillar, i) => {
          const Icon = ICONS[pillar.key] || Gem;
          return (
            <ScrollReveal key={pillar.key} delay={(i % 3) * 0.08}>
              <div className="glass group relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amethyst/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold/20">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-lg text-mist">
                  {pillar.label}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist-dim">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
