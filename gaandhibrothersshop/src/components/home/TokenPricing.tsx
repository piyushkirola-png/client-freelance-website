import { Link } from "react-router-dom";
import { Check, Sparkles, Ticket } from "lucide-react";
import { TOKEN_PACKS } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

/** Ticket pricing cards — the 3-token pack is highlighted as POPULAR. */
export function TokenPricing() {
  return (
    <section id="pricing" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ticket Pricing"
          title={
            <>
              Choose Your <span className="text-ember-soft">Lucky Token</span>
            </>
          }
          subtitle="Har token ek mauka hai. Pick a pack, and the more you play, the bigger your celebration."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TOKEN_PACKS.map((pack, index) => {
            const isPopular = Boolean(pack.popular);

            return (
              <Reveal key={pack.id} delay={index * 100} className="h-full">
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 text-center transition-all duration-300 hover:-translate-y-2 ${
                    isPopular
                      ? "border-gold/70 bg-gradient-to-b from-gold/20 via-maroon-light/50 to-night/90 shadow-[0_26px_70px_-28px_rgba(255,168,0,0.65)] lg:-my-4 lg:py-10"
                      : "border-gold/20 bg-maroon/35 hover:border-gold/50 hover:shadow-[0_26px_60px_-32px_rgba(255,168,0,0.35)]"
                  }`}
                >
                  {isPopular && (
                    <>
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-ember to-gold" />
                      <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold to-ember px-3 py-1 text-[10px] font-extrabold tracking-[0.12em] text-maroon shadow-lg">
                        <Sparkles className="h-3 w-3" /> BEST VALUE
                      </span>
                    </>
                  )}

                  {/* Token icons */}
                  <div className="flex justify-center -space-x-2">
                    {Array.from({ length: pack.tokens }).map((_, i) => (
                      <span
                        key={i}
                        className={`grid h-11 w-11 place-items-center rounded-full border text-lg shadow-md transition-transform duration-300 group-hover:-translate-y-1 ${
                          isPopular
                            ? "border-gold/60 bg-gold/15"
                            : "border-gold/30 bg-gold/5"
                        }`}
                      >
                        🎫
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-cream">
                    {pack.tokens} Token{pack.tokens > 1 ? "s" : ""}
                  </h3>

                  <div className="mt-2 flex items-baseline justify-center gap-1">
                    <span className="font-display text-3xl font-extrabold text-gold-gradient sm:text-4xl">
                      ₹{pack.price.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {pack.save ? (
                    <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-bold text-emerald-300">
                      SAVE ₹{pack.save}
                    </span>
                  ) : (
                    <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full border border-gold/25 px-3 py-1 text-[11px] font-semibold text-cream/60">
                      Entry ticket
                    </span>
                  )}

                  <p className="mt-4 text-xs leading-relaxed text-cream/55">{pack.note}</p>

                  <div className="mt-5 space-y-2 text-left text-xs text-cream/70">
                    {[
                      `${pack.tokens} draw ${pack.tokens > 1 ? "entries" : "entry"}`,
                      "Free WhatsApp confirmation",
                      "Eligible for all 3 prize tiers",
                    ].map((feature) => (
                      <span key={feature} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/book"
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-bold transition-all duration-200 ${
                      isPopular
                        ? "btn-gold"
                        : "btn-ghost"
                    }`}
                  >
                    <Ticket className="h-4 w-4" />
                    Book Now
                  </Link>

                  {isPopular && (
                    <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gold/80">
                      Most Popular
                    </span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <p className="mt-8 text-center text-xs text-cream/45">
            * All prices are inclusive of applicable fees. Tokens are non-transferable once the draw
            begins.{" "}
            <Link to="/terms" className="text-gold hover:underline">
              Read Terms
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
