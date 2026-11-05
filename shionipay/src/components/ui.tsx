import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="ShioniPay home">
      <span className={`grid place-items-center w-9 h-9 rounded-lg bg-brand text-ink border-[1.5px] ${light ? "border-brand" : "border-ink shadow-[2px_2px_0_#0E1B14]"} group-hover:-rotate-6 transition-transform`}>
        <Zap className="w-5 h-5 fill-ink" />
      </span>
      <span className={`font-display font-extrabold text-[22px] tracking-tight ${light ? "text-white" : "text-fg"}`}>
        shioni<span className={light ? "text-brand" : "text-lime-hl ml-0.5"}>pay</span>
      </span>
    </Link>
  );
}

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: ElementType }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>;
}

const eyebrowDot: Record<string, string> = {
  red: "bg-brand", teal: "bg-teal-500", emerald: "bg-emerald-500", amber: "bg-amber-400", pink: "bg-pink-500", slate: "bg-ink",
};
const EYEBROW_ORDER = ["teal", "amber", "emerald", "pink", "red", "slate"];

export function Eyebrow({ children, tone }: { children: ReactNode; tone?: string }) {
  const key = typeof children === "string" ? children : "";
  const t = tone ?? EYEBROW_ORDER[[...key].reduce((a, c) => a + c.charCodeAt(0), 0) % EYEBROW_ORDER.length];
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/80 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fg">
      <i className={`w-1.5 h-1.5 rounded-full ${eyebrowDot[t] ?? "bg-brand"}`} />{children}
    </span>
  );
}

export type Tone = "red" | "teal" | "emerald" | "amber" | "pink" | "slate";
/** Warm + fresh palette (no blue/violet): teal, amber, emerald, pink, charcoal, red. */
export const TONES: Tone[] = ["teal", "amber", "emerald", "pink", "slate", "teal"];
/** Solid gradient tiles with white glyphs. */
/** Flat tinted tiles with ink-toned glyphs; hover flips to lime. */
const tileHover = " group-hover:bg-brand! group-hover:text-ink! group-hover:ring-ink!";
export const toneBox: Record<Tone, string> = {
  red: "bg-brand text-ink ring-ink/20" + tileHover,
  teal: "bg-teal-100 text-teal-800 ring-teal-800/15" + tileHover,
  emerald: "bg-emerald-100 text-emerald-800 ring-emerald-800/15" + tileHover,
  amber: "bg-amber-100 text-amber-800 ring-amber-800/15" + tileHover,
  pink: "bg-pink-100 text-pink-800 ring-pink-800/15" + tileHover,
  slate: "bg-ink text-brand ring-ink" + tileHover,
};
export const toneText: Record<Tone, string> = { red: "text-teal-700", teal: "text-teal-700", emerald: "text-emerald-700", amber: "text-amber-700", pink: "text-pink-700", slate: "text-fg" };
export const toneBar: Record<Tone, string> = { red: "bg-brand", teal: "bg-teal-600", emerald: "bg-emerald-500", amber: "bg-amber-400", pink: "bg-pink-500", slate: "bg-ink" };
export const toneSoft: Record<Tone, string> = { red: "bg-lime-50", teal: "bg-teal-50", emerald: "bg-emerald-50", amber: "bg-amber-50", pink: "bg-pink-50", slate: "bg-soft" };

const hashTone = (name = "") => TONES[[...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 5];

export function IconBox({ icon: Icon, size = "md", tone }: { icon: ElementType; size?: "md" | "lg"; tone?: Tone }) {
  const s = size === "lg" ? "w-12 h-12 [&>svg]:w-6 [&>svg]:h-6" : "w-10 h-10 [&>svg]:w-5 [&>svg]:h-5";
  const t = tone ?? hashTone((Icon as { displayName?: string }).displayName);
  return (
    <span className={`grid place-items-center ${s} rounded-xl ring-1 ${toneBox[t]} transition-colors duration-200`}>
      <Icon />
    </span>
  );
}

export function PageHeader({ title, subtitle, eyebrow, children }: { title: string; subtitle: string; eyebrow?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-paper border-b border-ink">
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:linear-gradient(90deg,transparent,black_55%,black)]" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-16 md:pt-20 md:pb-20">
        <Reveal className="max-w-4xl">
          {eyebrow && <div className="mb-6"><Eyebrow>{eyebrow}</Eyebrow></div>}
          <h1 className="font-display font-extrabold text-[42px] leading-[1.02] sm:text-6xl md:text-[68px] text-fg">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-sub leading-relaxed border-l-[3px] border-brand pl-5">{subtitle}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function SimpleCard({ title, desc, icon, delay = 0, tone }: { title: string; desc: string; icon?: ElementType; delay?: number; tone?: Tone }) {
  return (
    <Reveal delay={delay} className="group card card-hover h-full p-6 md:p-7">
      {icon && <div className="mb-5"><IconBox icon={icon} tone={tone} /></div>}
      <h3 className="font-display font-semibold text-lg text-fg">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-sub">{desc}</p>
    </Reveal>
  );
}

export function PrimaryLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl btn-grad px-6 py-3.5 font-semibold">
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:[animation:sheen_.8s_ease]" />
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}

export function GhostLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-2 rounded-xl border-[1.5px] border-ink bg-white px-6 py-3.5 font-semibold text-fg hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#0E1B14] transition-all">
      {children}
    </Link>
  );
}
