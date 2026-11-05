import { CalendarDays, Clock, MapPin } from "lucide-react";
import { DRAW } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";

/** Full-width banner announcing the draw date. */
export function DrawBanner() {
  return (
    <section className="py-6">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-r from-ember/25 via-maroon-light/60 to-gold/20 px-6 py-7 sm:px-10 sm:py-9">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-ember/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />

          <div className="relative flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/70">
                The Grand Evening
              </p>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-gold-gradient sm:text-4xl">
                ड्रॉ की तारीख — {DRAW.dateLabel}
              </h2>
              <p className="mt-2 text-sm text-cream/70">
                All India Lucky Draw • Watch the live draw with us
              </p>
            </div>

            <div className="flex flex-col gap-2.5 text-sm text-cream/75 sm:flex-row sm:items-center sm:gap-6">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" /> {DRAW.timeLabel}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" /> Live from Meerut, UP
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-gold" /> Booking closes {DRAW.ticketCutoff}
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}