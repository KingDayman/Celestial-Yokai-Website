"use client";

import { ChevronDown } from "lucide-react";
import AmbientField from "./effects/AmbientField";
import KitsuneConstellation from "./effects/KitsuneConstellation";
import ScrollReveal from "./effects/ScrollReveal";
import PlaceholderImage from "./ui/PlaceholderImage";
import GlowButton from "./ui/GlowButton";
import { TRUST_BADGES, MINT_LINK } from "@/lib/siteData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100vh] items-center overflow-hidden pt-28 pb-16"
    >
      <AmbientField />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-16">
        {/* Text column */}
        <div className="relative text-center lg:text-left">
          {/* Constellation glows behind the text on large screens */}
          <KitsuneConstellation className="pointer-events-none absolute -top-20 left-1/2 hidden h-[34rem] w-[34rem] -translate-x-1/2 opacity-[0.35] lg:-left-10 lg:top-[-7rem] lg:block lg:translate-x-0" />

          <ScrollReveal>
            <div className="mb-7 flex justify-center lg:justify-start">
              <PlaceholderImage
                src="/images/logo.png"
                alt="Celestial Yokais emblem"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full ring-1 ring-gold/40 shadow-gold"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="eyebrow justify-center lg:justify-start">
              A Solana Yokai Ecosystem
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-mist sm:text-6xl lg:text-7xl">
              Celestial
              <br />
              <span className="bg-gradient-to-r from-gold-bright via-gold to-amethyst-soft bg-clip-text text-transparent">
                Yokais
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-mist-dim sm:text-lg lg:mx-0">
              A multi-species digital ecosystem built around lore, collectibles, AI,
              creator tools, community, and the future of Web3 worldbuilding.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.32}>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <GlowButton href="#kitsari" variant="primary" showArrow>
                Enter The Realm
              </GlowButton>
              <GlowButton href={MINT_LINK} variant="secondary" external showArrow>
                View Kitsari Collection
              </GlowButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge.label}
                  className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-label text-[11px] uppercase tracking-wide text-mist-dim"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    {badge.status === "active" && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spirit opacity-70" />
                    )}
                    <span
                      className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                        badge.status === "active" ? "bg-spirit" : "bg-amethyst-soft"
                      }`}
                    />
                  </span>
                  {badge.label}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Visual column — main Kitsari character */}
        <ScrollReveal delay={0.2} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="gold-edge relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-void-raised/60">
            <div className="absolute -inset-10 -z-10 rounded-full bg-radial-gold opacity-60" />
            <PlaceholderImage
              src="/images/kitsari-hero.png"
              alt="Featured Kitsari character"
              label="Kitsari — Hero Character Art"
              fill
              priority
              className="h-full w-full"
              imgClassName="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl glass-strong px-5 py-3 text-center">
            <p className="font-label text-[11px] uppercase tracking-widest2 text-gold">
              Kitsari · Genesis Species
            </p>
          </div>
        </ScrollReveal>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-mist-dim/60 hover:text-gold transition-colors sm:flex"
        aria-label="Scroll to learn more"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
