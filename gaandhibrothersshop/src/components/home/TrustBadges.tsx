import { TRUST_BADGES } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

/** Trust / credibility strip. */
export function TrustBadges() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Trust Us"
          title="Safe, Transparent & Celebrated"
          subtitle="हमारा वादा — a completely transparent draw, secure payments and a celebration that feels truly yours."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TRUST_BADGES.map((badge, index) => (
            <Reveal key={badge.title} delay={index * 120}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-gold/20 bg-maroon/30 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/55 hover:bg-maroon/50">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-gold/25 bg-gold/10 text-3xl transition-transform duration-300 group-hover:scale-110">
                  {badge.emoji}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-gold">{badge.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/60">
                    {badge.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
