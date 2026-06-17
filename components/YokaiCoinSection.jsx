import { Gem, Ticket, Gift, Sparkles, ShoppingBag, PackageOpen, Award } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
import ScrollReveal from "./effects/ScrollReveal";
import PlaceholderImage from "./ui/PlaceholderImage";
import GlowButton from "./ui/GlowButton";
import CopyableAddress from "./ui/CopyableAddress";
import { COMMUNITY_LINKS, YOKAI_COIN, YC_EARN_STEPS } from "@/lib/siteData";

const USE_CASES = [
  { icon: Gem, label: "Future Mints" },
  { icon: Ticket, label: "Raffles" },
  { icon: Gift, label: "Giveaways" },
  { icon: Sparkles, label: "Experiences" },
  { icon: ShoppingBag, label: "Merch" },
  { icon: PackageOpen, label: "Airdrops" },
  { icon: Award, label: "Ecosystem Rewards" },
];

export default function YokaiCoinSection() {
  const gravestake = COMMUNITY_LINKS.find((l) => l.key === "gravestake")?.href;

  return (
    <section id="yokai-coin" className="relative section-pad">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <div className="relative mx-auto mb-8 h-28 w-28">
            <div className="absolute inset-0 animate-pulse-soft rounded-full bg-radial-gold" />
            <PlaceholderImage
              src="/images/yokai-coin.png"
              alt="Yokai Coin"
              label="Yokai Coin"
              fill
              className="rounded-full ring-1 ring-gold/40 shadow-gold"
              imgClassName="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <Eyebrow align="center">Ecosystem Currency</Eyebrow>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <h2 className="mt-5 flex items-center justify-center gap-3 font-display text-4xl text-mist sm:text-5xl">
            Yokai Coin
            <span className="rounded-full border border-gold/40 px-3 py-1 font-label text-sm tracking-widest text-gold">
              YC
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-base leading-relaxed text-mist-dim sm:text-lg">
            YC is the token of the Celestial Yokai ecosystem. Kitsari holders can
            stake their NFTs on GraveStake.io to earn YC — turning participation
            into the fuel behind everything the ecosystem builds next.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.26}>
          <div className="mt-8 flex flex-col items-center gap-4">
            <GlowButton href={gravestake} variant="secondary" external showArrow>
              Stake On GraveStake
            </GlowButton>
            <CopyableAddress
              address={YOKAI_COIN.address}
              explorerUrl={YOKAI_COIN.explorerUrl}
            />
          </div>
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-16 max-w-4xl">
        <ScrollReveal>
          <p className="eyebrow justify-center">How YC Works</p>
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {YC_EARN_STEPS.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6 text-center transition-all duration-300 hover:border-gold/40 hover:-translate-y-1">
                <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full glass-strong font-display text-sm text-gold shadow-gold">
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
          <p className="eyebrow justify-center">Use YC For</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {USE_CASES.map((useCase) => (
              <div
                key={useCase.label}
                className="glass flex flex-col items-center gap-3 rounded-2xl px-4 py-7 text-center transition-all duration-300 hover:border-gold/40 hover:-translate-y-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amethyst/15 text-amethyst-soft">
                  <useCase.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="font-label text-xs uppercase tracking-wide text-mist-dim">
                  {useCase.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.16}>
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold/15 bg-void-raised/40 px-6 py-5 text-center">
          <p className="text-sm leading-relaxed text-mist-dim">
            YC is built for ecosystem participation, not financial speculation. It is
            earned through engagement with Celestial Yokais and spent within the
            ecosystem — never positioned as an investment or a promise of returns.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
