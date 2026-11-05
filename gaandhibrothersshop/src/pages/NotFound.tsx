import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/useSeo";
import { Home, Ticket, ArrowLeft } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/siteData";

/** 404 — page not found. */
export default function NotFound() {
  useSeo(`Page Not Found — ${SITE.name}`, "The page you are looking for does not exist.");

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <span className="absolute left-[10%] top-[20%] text-3xl animate-float">🪔</span>
        <span className="absolute right-[12%] top-[16%] text-2xl animate-float-slow">✨</span>
        <span className="absolute left-1/2 bottom-[12%] text-2xl animate-twinkle">✦</span>
      </div>

      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="font-display text-7xl font-extrabold text-gold-gradient text-shadow-glow sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-extrabold text-cream sm:text-3xl">
          यह पेज नहीं मिला — Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/65 sm:text-base">
          The diya at this address has gone out. Let&apos;s guide you back to the celebration —
          your lucky ticket is still waiting!
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="btn-gold inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-display text-base font-bold sm:w-auto"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
          <Link
            to="/book"
            className="btn-ghost inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-display text-base font-semibold sm:w-auto"
          >
            <Ticket className="h-5 w-5" />
            Book a Ticket
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">
            Popular pages
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {NAV_LINKS.filter((link) => link.path !== "/").map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-maroon/30 px-4 py-2 text-xs font-medium text-cream/70 transition-colors hover:border-gold/55 hover:text-gold"
              >
                <ArrowLeft className="h-3 w-3 rotate-180" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
