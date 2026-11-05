import { DRAW, PRIZES } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Trophy } from "lucide-react";

/** Grand prize showcase — three shimmering prize cards. */
export function Prizes() {
  return (
    <section id="prizes" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Prize Showcase"
          title={
            <>
              Prizes That Will Light Up Your{" "}
              <span className="text-ember-soft">Diwali</span>
            </>
          }
          subtitle="Karishma ka asli intezaar — three jackpot tiers, one unforgettable celebration. Every token is a genuine chance at the top prize."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRIZES.map((prize, index) => (
            <Reveal key={prize.title} delay={index * 120}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-b from-maroon-light/50 to-night/80 p-7 text-center shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_34px_80px_-30px_rgba(255,168,0,0.45)]">
                {/* Sheen */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Glow ring */}
                <div
                  className={`mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br ${prize.gradient} text-5xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  {prize.emoji}
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold/80">
                  {prize.title}
                </p>
                <h3 className="mt-2 font-display text-3xl font-extrabold text-gold-gradient sm:text-4xl">
                  {prize.amount}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/65">{prize.description}</p>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-gold/70">
                  <Trophy className="h-3.5 w-3.5" />
                  Live draw · {DRAW.dateLabel}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
