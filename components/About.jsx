import { Orbit, Coins, Hammer } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
import ScrollReveal from "./effects/ScrollReveal";

const PILLARS = [
  {
    icon: Orbit,
    title: "Species & Realms",
    body: "A growing universe of yokai-inspired species, each with its own identity, lore, and role in the wider Celestial world.",
  },
  {
    icon: Coins,
    title: "Utility & Participation",
    body: "Yokai Coin, staking, and holder benefits designed around real participation — not empty promises.",
  },
  {
    icon: Hammer,
    title: "Creator-Led Growth",
    body: "Programs like Build The Realm put builders, artists, and writers at the center of what gets made next.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative section-pad">
      <div className="mx-auto max-w-5xl text-center">
        <ScrollReveal>
          <Eyebrow align="center">About The Ecosystem</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="mt-5 font-display text-3xl text-mist sm:text-4xl lg:text-5xl">
            Not just a collection.
            <br className="hidden sm:block" /> A world being built.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist-dim sm:text-lg">
            Celestial Yokais is an expanding ecosystem of yokai-inspired species, realms,
            and lore — connected by Yokai Coin, shaped by creator events, and held
            together by a community that treats holding a Kitsari as the start of
            something, not the end of it. Every realm, species, and tool is built in
            the open, with holders and creators at the center of how it grows.
          </p>
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
        {PILLARS.map((pillar, i) => (
          <ScrollReveal key={pillar.title} delay={0.1 + i * 0.08}>
            <div className="glass group h-full rounded-2xl p-7 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold/20">
                <pillar.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-display text-lg text-mist">{pillar.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mist-dim">{pillar.body}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
