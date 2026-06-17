import { MapPin } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
import SpiritMark from "./ui/SpiritMark";
import ScrollReveal from "./effects/ScrollReveal";
import PlaceholderImage from "./ui/PlaceholderImage";
import StatusBadge from "./ui/StatusBadge";
import { SPECIES, REALMS } from "@/lib/siteData";

export default function SpeciesGrid() {
  return (
    <section id="species" className="relative section-pad">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <Eyebrow align="center">Species &amp; Realms</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="mt-5 font-display text-4xl text-mist sm:text-5xl">
            One Ecosystem, Many Species
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-mist-dim sm:text-lg">
            Celestial Yokais will expand across multiple species and realms, each
            carrying its own identity, lore, and place in the wider world.
          </p>
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {SPECIES.map((species, i) => (
          <ScrollReveal key={species.slug} delay={(i % 3) * 0.08}>
            <div className="group relative rounded-2xl">
              <div className="glass relative overflow-visible rounded-2xl transition-all duration-300 group-hover:border-gold/40 group-hover:-translate-y-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
                  <PlaceholderImage
                    src={species.image}
                    alt={species.name}
                    label={`${species.name} — Species Art`}
                    fill
                    imgClassName={`object-cover transition-transform duration-500 group-hover:scale-105 ${species.focal || ""}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-raised via-transparent to-transparent" />
                  <div className="absolute right-3 top-3">
                    <StatusBadge status={species.status} />
                  </div>
                  {/* Talisman seal tag, anchored to the image wrapper's bottom edge */}
                  <div className="absolute -bottom-[18px] left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full glass-strong shadow-gold">
                    <SpiritMark className="h-4 w-4 text-gold" />
                  </div>
                </div>
                <div className="rounded-b-2xl px-6 pb-7 pt-9">
                  <h3 className="font-display text-xl text-mist">{species.name}</h3>
                  <p className="mt-1 font-label text-xs uppercase tracking-wide text-gold/80">
                    {species.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-mist-dim">
                    {species.description}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-5xl">
        <ScrollReveal>
          <p className="mb-6 text-center font-label text-xs uppercase tracking-widest2 text-mist-dim">
            First Realm
          </p>
        </ScrollReveal>
        {REALMS.map((realm) => (
          <ScrollReveal key={realm.slug}>
            <div className="gold-edge grid overflow-hidden rounded-3xl bg-void-raised/60 sm:grid-cols-2">
              <div className="relative aspect-[16/10] sm:aspect-auto">
                <PlaceholderImage
                  src={realm.image}
                  alt={realm.name}
                  label={`${realm.name} — Realm Art`}
                  fill
                  imgClassName="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void-raised/80 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-void-raised/50" />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-9">
                <span className="flex items-center gap-2 font-label text-xs uppercase tracking-wide text-amethyst-soft">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {realm.title}
                </span>
                <h3 className="mt-2 font-display text-2xl text-mist sm:text-3xl">
                  {realm.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-dim sm:text-base">
                  {realm.description}
                </p>
                <div className="mt-5">
                  <StatusBadge status={realm.status} />
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
