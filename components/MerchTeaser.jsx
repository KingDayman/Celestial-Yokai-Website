import { ArrowUpRight } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
import ScrollReveal from "./effects/ScrollReveal";
import PlaceholderImage from "./ui/PlaceholderImage";
import GlowButton from "./ui/GlowButton";
import { MERCH_PRODUCTS, COMMUNITY_LINKS } from "@/lib/siteData";

export default function MerchTeaser() {
  const etsy = COMMUNITY_LINKS.find((l) => l.key === "etsy")?.href;

  return (
    <section id="shop" className="relative section-pad">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <Eyebrow align="center">From The Shop</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="mt-5 font-display text-4xl text-mist sm:text-5xl">
            Wear The Ecosystem
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-mist-dim sm:text-lg">
            Physical pieces that carry the Celestial identity into the real
            world, available now on Etsy.
          </p>
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {MERCH_PRODUCTS.map((product, i) => (
          <ScrollReveal key={product.slug} delay={i * 0.1}>
            <a
              href={etsy}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group block overflow-hidden rounded-3xl transition-all duration-300 hover:border-gold/40 hover:-translate-y-1"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-mist/5">
                <PlaceholderImage
                  src={product.image}
                  alt={product.name}
                  label={`${product.name} — Product Photo`}
                  fill
                  imgClassName="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-3 p-6">
                <div>
                  <h3 className="font-display text-base text-mist">{product.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist-dim">
                    {product.description}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 flex-none text-mist-dim transition-colors duration-300 group-hover:text-gold" />
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.2}>
        <div className="mt-10 text-center">
          <GlowButton href={etsy} variant="secondary" external showArrow>
            Visit The Etsy Shop
          </GlowButton>
        </div>
      </ScrollReveal>
    </section>
  );
}
