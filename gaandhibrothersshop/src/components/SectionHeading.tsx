import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

interface SectionHeadingProps {
  /** Small label above the title, e.g. "How It Works" */
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

/** Consistent section title block used across every page. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
          <span className="text-base leading-none">✦</span>
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-extrabold text-gold-gradient sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg">
          {subtitle}
        </p>
      )}

      <div
        className={`mt-6 h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </Reveal>
  );
}
