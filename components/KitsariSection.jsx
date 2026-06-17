import { Moon, Sparkles, Zap, Check } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
import ScrollReveal from "./effects/ScrollReveal";
import PlaceholderImage from "./ui/PlaceholderImage";
import GlowButton from "./ui/GlowButton";
import StatusBadge from "./ui/StatusBadge";
import { MINT_LINK } from "@/lib/siteData";

const TRAITS = [
  { icon: Moon, label: "Lunar Energy" },
  { icon: Sparkles, label: "Illusion" },
  { icon: Zap, label: "Speed" },
];

const BENEFITS = [
  "Stake your Kitsari on GraveStake to earn Yokai Coin",
  "Eligibility to enter Build The Realm creator events",
  "A companion identity that carries across the Celestial ecosystem",
  "Early access to future species drops and realm expansions",
  "A voice in community direction as the ecosystem grows",
];

export default function KitsariSection() {
  return (
    <section id="kitsari" className="relative section-pad bg-void-deep/40">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <Eyebrow align="center">Genesis Species</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="mt-5 font-display text-4xl text-mist sm:text-5xl">Kitsari</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-mist-dim sm:text-lg">
            Kitsari are fox-like celestial spirits connected to lunar energy, illusion,
            and speed — the first species to awaken in the Celestial Yokai ecosystem,
            and the foundation every future realm is built around.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.22}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {TRAITS.map((trait) => (
              <span
                key={trait.label}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-label text-xs uppercase tracking-wide text-gold"
              >
                <trait.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                {trait.label}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Collection card */}
        <ScrollReveal>
          <div className="gold-edge relative overflow-hidden rounded-3xl bg-void-raised/60">
            <div className="relative aspect-[5/4] w-full">
              <PlaceholderImage
                src="/images/species/kitsari.png"
                alt="Kitsari collection art"
                label="Kitsari — Collection Art"
                fill
                imgClassName="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent" />
              <div className="absolute right-4 top-4">
                <StatusBadge status="Live" />
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-display text-xl text-mist">Kitsari Collection</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-dim">
                The genesis collection of the Celestial Yokai ecosystem, live now on
                Solana.
              </p>
              <div className="mt-6">
                <GlowButton href={MINT_LINK} variant="primary" external showArrow className="w-full sm:w-auto">
                  View Collection
                </GlowButton>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Benefits + companion identity */}
        <div className="flex flex-col gap-8">
          <ScrollReveal delay={0.1}>
            <div className="glass rounded-3xl p-7 sm:p-8">
              <h3 className="font-display text-lg text-mist">Holder Benefits</h3>
              <ul className="mt-5 space-y-3.5">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-mist-dim">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-spirit" strokeWidth={2} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <div className="gold-edge rounded-3xl bg-gradient-to-br from-amethyst-deep/30 to-void-raised/60 p-7 sm:p-8">
              <h3 className="font-display text-lg text-mist">Companion Identity</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-dim">
                Each Kitsari is built to function as a companion identity — a presence
                that represents you across the Celestial ecosystem, from community
                spaces to future tools and experiences, rather than a static image
                you view once and forget.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
