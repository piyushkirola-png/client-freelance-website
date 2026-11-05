import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FileText, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
  /** Optional call-to-action rendered at the bottom */
  footerNote?: ReactNode;
}

/**
 * Shared layout for the legal pages (Terms, Privacy, Refund).
 * Provides a heading, last-updated stamp and a sticky table of contents.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  sections,
  footerNote,
}: LegalPageProps) {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <FileText className="h-3.5 w-3.5" /> {eyebrow}
            </span>
            <h1 className="mt-5 font-display text-3xl font-extrabold text-gold-gradient sm:text-5xl">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-cream/70 sm:text-base">
              {intro}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-maroon/40 px-4 py-1.5 text-xs text-cream/60">
              <Clock className="h-3.5 w-3.5 text-gold" /> Last updated: {lastUpdated}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[240px_1fr] lg:items-start">
          {/* Table of contents */}
          <Reveal direction="right" className="lg:sticky lg:top-24">
            <nav className="glass-card gold-border rounded-2xl p-5">
              <p className="font-display text-sm font-bold uppercase tracking-[0.15em] text-gold">
                On this page
              </p>
              <ol className="mt-3 space-y-1.5">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm text-cream/65 transition-colors hover:bg-gold/10 hover:text-gold"
                    >
                      <span className="mt-0.5 text-[10px] font-bold text-gold/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-snug">{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>

          {/* Content */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Reveal key={section.id} delay={Math.min(index * 60, 300)}>
                <article
                  id={section.id}
                  className="glass-card gold-border scroll-mt-28 rounded-3xl p-6 sm:p-8"
                >
                  <h2 className="flex items-start gap-3 font-display text-xl font-bold text-gold sm:text-2xl">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold/15 text-sm font-extrabold text-gold">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-3.5 text-sm leading-relaxed text-cream/70">
                    {section.content}
                  </div>
                </article>
              </Reveal>
            ))}

            {footerNote && (
              <Reveal>
                <div className="rounded-2xl border border-gold/25 bg-gold/[0.06] p-6 text-sm text-cream/70">
                  {footerNote}
                </div>
              </Reveal>
            )}
          </div>
        </div>

        {/* Cross links */}
        <Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm">
            <Link
              to="/terms"
              className="btn-ghost rounded-full px-5 py-2.5 text-xs font-semibold"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              to="/privacy"
              className="btn-ghost rounded-full px-5 py-2.5 text-xs font-semibold"
            >
              Privacy Policy
            </Link>
            <Link
              to="/refund"
              className="btn-ghost rounded-full px-5 py-2.5 text-xs font-semibold"
            >
              Refund Policy
            </Link>
            <Link
              to="/contact"
              className="btn-ghost rounded-full px-5 py-2.5 text-xs font-semibold"
            >
              Contact Support
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
