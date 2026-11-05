import { Link } from "react-router-dom";
import { Sparkles, Ticket, Phone } from "lucide-react";
import { DRAW, SITE, waLink, DEFAULT_WA_MESSAGE } from "@/data/siteData";
import { pad, useCountdown } from "@/hooks/useCountdown";
import heroImage from "@/assets/diwali-hero.jpg";

/* ----------------------------------------------------------------------------
 * Countdown units
 * -------------------------------------------------------------------------- */
function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="glass-card gold-border flex min-w-[4.25rem] flex-1 flex-col items-center rounded-2xl px-2 py-3 sm:min-w-[6rem] sm:py-4">
      <span className="font-display text-2xl font-extrabold tabular-nums text-gold-gradient sm:text-4xl">
        {pad(value)}
      </span>
      <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-cream/55 sm:text-xs">
        {label}
      </span>
    </div>
  );
}

function Countdown() {
  const { days, hours, minutes, seconds, isPast } = useCountdown(DRAW.dateISO);

  if (isPast) {
    return (
      <div className="glass-card gold-border mx-auto max-w-lg rounded-2xl px-6 py-5 text-center">
        <p className="font-display text-lg font-bold text-gold">🎆 The draw has taken place!</p>
        <p className="mt-1 text-sm text-cream/65">
          Winners have been announced — check our WhatsApp channel for results.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/80">
        Draw Countdown
      </p>
      <div className="flex items-stretch gap-2 sm:gap-3">
        <CountdownUnit value={days} label="Days" />
        <CountdownUnit value={hours} label="Hours" />
        <CountdownUnit value={minutes} label="Mins" />
        <CountdownUnit value={seconds} label="Secs" />
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Hero
 * -------------------------------------------------------------------------- */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background artwork + overlays */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/85 to-night" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
      </div>

      {/* Floating decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="absolute left-[8%] top-[18%] text-3xl animate-float">🪔</span>
        <span className="absolute right-[10%] top-[14%] text-2xl animate-float-slow">✨</span>
        <span className="absolute left-[16%] bottom-[16%] text-2xl animate-float-slow">🧨</span>
        <span className="absolute right-[18%] bottom-[22%] text-3xl animate-float">🎆</span>
        <span className="absolute left-1/2 top-[6%] text-xl animate-twinkle">✦</span>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-16 pt-14 text-center sm:px-6 sm:pt-20 lg:pb-24 lg:pt-24">
        {/* Live badge */}
        <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-gold uppercase backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
          </span>
          Bookings Open · Draw {DRAW.dateLabel}
        </div>

        {/* Headline */}
        <h1 className="animate-rise mt-6 font-display text-4xl font-extrabold leading-[1.1] text-gold-gradient text-shadow-glow sm:text-6xl lg:text-7xl">
          <span className="gold-solid"></span> DIWALI BUMPER{" "}
          <span className="gold-solid"></span>
        </h1>

        <p className="animate-rise mx-auto mt-5 max-w-2xl text-lg font-semibold text-ember-soft sm:text-2xl">
          इस दिवाली किस्मत चमकने का सुनहरा मौका!
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-cream/70 sm:text-base">
          India&apos;s most awaited festive lucky draw. Buy a token today, and you could be taking
          home <span className="font-bold text-gold">₹12 Crore</span> this Diwali.
        </p>

        {/* Countdown */}
        <div className="mt-10">
          <Countdown />
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/book"
            className="btn-gold group inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-display text-base font-bold sm:w-auto sm:text-lg"
          >
            <Ticket className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            Book Your Ticket Now
          </Link>
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-display text-base font-semibold sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            Book on WhatsApp
          </a>
        </div>

        {/* Trust strip */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-cream/50">
          <span className="inline-flex items-center gap-1.5">🔒 Secure Payments</span>
          <span className="inline-flex items-center gap-1.5">🇮🇳 All India Booking</span>
          <span className="inline-flex items-center gap-1.5">🎖️ Udyam Registered</span>
          <span className="inline-flex items-center gap-1.5">🎖️ Verified Live Draw</span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> {SITE.tagline}
          </span>
        </div>
      </div>
    </section>
  );
}