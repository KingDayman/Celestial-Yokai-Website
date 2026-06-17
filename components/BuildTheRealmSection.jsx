import { Code2, CalendarRange, Palette, BookOpen, Bot, ShoppingBag, Crown } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
import ScrollReveal from "./effects/ScrollReveal";
import PlaceholderImage from "./ui/PlaceholderImage";
import GlowButton from "./ui/GlowButton";
import { BUILD_THE_REALM_TRACKS, BUILD_THE_REALM_STEPS } from "@/lib/siteData";

const ICONS = {
  builder: Code2,
  experience: CalendarRange,
  creative: Palette,
  lore: BookOpen,
  ai: Bot,
  commerce: ShoppingBag,
};

const STATS = [
  { value: "1,000,000 YC", label: "Prize Pool" },
  { value: "5", label: "Stone Gods NFTs" },
  { value: "1 Kitsari", label: "Required To Enter" },
  { value: "Summer 2026", label: "Season Window" },
];

export default function BuildTheRealmSection() {
  return (
    <section id="build-the-realm" className="relative section-pad bg-void-deep/40">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <Eyebrow align="center">Quarterly Creator Event</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="mt-5 font-display text-4xl text-mist sm:text-5xl">
            Build The Realm
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-mist-dim sm:text-lg">
            A quarterly creator event where builders, artists, writers, developers,
            AI creators, and innovators compete to help shape the future of
            Celestial Yokais.
          </p>
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <ScrollReveal delay={0.2}>
          <div className="gold-edge relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-3xl bg-void-raised/60">
            <PlaceholderImage
              src="/images/build-the-realm.png"
              alt="Build The Realm event poster"
              label="Build The Realm — Event Poster"
              fill
              imgClassName="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.26}>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl px-4 py-6 text-center">
                <p className="font-display text-xl text-gold sm:text-2xl">{stat.value}</p>
                <p className="mt-1.5 font-label text-[11px] uppercase tracking-wide text-mist-dim">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-16 max-w-5xl">
        <ScrollReveal>
          <p className="eyebrow justify-center">How To Participate</p>
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BUILD_THE_REALM_STEPS.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.06}>
              <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1">
                <span className="flex h-9 w-9 items-center justify-center rounded-full glass-strong font-display text-sm text-gold shadow-gold">
                  {s.step}
                </span>
                <h3 className="mt-4 font-display text-base text-mist">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-dim">{s.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl">
        <ScrollReveal>
          <p className="eyebrow justify-center">Six Tracks, One Realm</p>
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BUILD_THE_REALM_TRACKS.map((track, i) => {
            const Icon = ICONS[track.key] || Code2;
            return (
              <ScrollReveal key={track.key} delay={i * 0.06}>
                <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:border-amethyst-soft/40 hover:-translate-y-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amethyst/15 text-amethyst-soft">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-display text-base text-mist">{track.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-dim">{track.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <ScrollReveal delay={0.1}>
        <div className="gold-edge mx-auto mt-12 max-w-3xl rounded-3xl bg-gradient-to-br from-amethyst-deep/30 to-void-raised/60 p-8 text-center">
          <Crown className="mx-auto h-6 w-6 text-gold" strokeWidth={1.5} />
          <p className="mt-4 text-sm leading-relaxed text-mist-dim sm:text-base">
            Exceptional participants may be invited to become{" "}
            <span className="text-gold">Celestial Yokai Founding Builders</span> — a
            long-term role shaping the ecosystem beyond a single season.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.16}>
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <GlowButton variant="soon">Coming Soon</GlowButton>
          <p className="text-xs text-mist-dim/70">
            Season opens Summer 2026. Hold 1 Kitsari NFT to enter when registration opens.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
