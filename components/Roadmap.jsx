import { Check } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
import ScrollReveal from "./effects/ScrollReveal";
import { ROADMAP } from "@/lib/siteData";

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative section-pad bg-void-deep/40">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <Eyebrow align="center">The Path Ahead</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="mt-5 font-display text-4xl text-mist sm:text-5xl">
            Roadmap
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-mist-dim sm:text-lg">
            Four phases guide where Celestial Yokais is headed — from
            foundation to long-term worldbuilding.
          </p>
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <div className="relative">
          <div className="absolute bottom-2 left-[27px] top-2 w-px bg-gradient-to-b from-gold/50 via-amethyst/30 to-transparent sm:left-[31px]" />

          <div className="space-y-8">
            {ROADMAP.map((phase, i) => (
              <ScrollReveal key={phase.phase} delay={i * 0.1}>
                <div className="relative flex gap-5 sm:gap-7">
                  <div className="relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-full glass-strong shadow-gold sm:h-16 sm:w-16">
                    <span className="font-display text-xl text-gold sm:text-2xl">
                      {phase.phase}
                    </span>
                  </div>
                  <div className="glass flex-1 rounded-2xl p-6 transition-all duration-300 hover:border-gold/40 sm:p-7">
                    <h3 className="font-display text-xl text-mist sm:text-2xl">
                      {phase.title}
                    </h3>
                    <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-mist-dim"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 flex-none text-spirit"
                            strokeWidth={2}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
