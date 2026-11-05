import { Link } from "react-router-dom";
import { Ticket, Phone } from "lucide-react";
import { DEFAULT_WA_MESSAGE, DRAW, SITE, waLink } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";

interface CTABandProps {
  title?: string;
  subtitle?: string;
}

/** Reusable "book now" call-to-action band, used across several pages. */
export function CTABand({
  title = "आज ही अपना टिकट बुक करें!",
  subtitle = `${SITE.name} — the draw is on ${DRAW.dateLong}. Don't let your luck expire.`,
}: CTABandProps) {
  return (
    <section className="py-10 sm:py-16">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-ember/25 via-maroon-light/60 to-gold/15 px-6 py-10 text-center sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -left-12 -top-12 h-44 w-44 rounded-full bg-ember/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-0 h-48 w-48 rounded-full bg-gold/25 blur-3xl" />
          <span className="pointer-events-none absolute left-8 top-6 text-2xl animate-float">🪔</span>
          <span className="pointer-events-none absolute right-10 bottom-8 text-2xl animate-float-slow">🧨</span>

          <div className="relative">
            <h2 className="font-display text-2xl font-extrabold text-gold-gradient sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-cream/70 sm:text-base">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/book"
                className="btn-gold inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-display text-base font-bold sm:w-auto"
              >
                <Ticket className="h-5 w-5" />
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
          </div>
        </div>
      </Reveal>
    </section>
  );
}