import { HOW_IT_WORKS } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

/** Three step "How It Works" timeline. */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              Simple <span className="text-ember-soft">3-Step</span> Booking
            </>
          }
          subtitle="No complicated forms, no hidden charges — just three quick steps between you and the jackpot."
        />

        <div className="relative mt-14">
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {HOW_IT_WORKS.map((step, index) => (
              <Reveal key={step.title} delay={index * 150}>
                <div className="group relative text-center">
                  {/* Step number */}
                  <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-full border border-gold/30 bg-gradient-to-br from-maroon-light/70 to-night text-4xl shadow-[0_18px_40px_-20px_rgba(255,168,0,0.7)] transition-all duration-300 group-hover:scale-110 group-hover:border-gold/70">
                    {step.emoji}
                    <span className="absolute -right-1 -top-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-gold to-ember font-display text-sm font-extrabold text-maroon shadow-lg">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-gold-gradient">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-cream/65">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
