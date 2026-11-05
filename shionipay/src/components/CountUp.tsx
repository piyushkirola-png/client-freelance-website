import { useEffect, useRef, useState } from "react";

/** Animates the numeric part of strings like "500M+", "99.99%", "<50ms" when scrolled into view. */
export default function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const m = value.match(/^([^\d]*)([\d.]+)(.*)$/);
  const prefix = m?.[1] ?? "", target = parseFloat(m?.[2] ?? "0"), suffix = m?.[3] ?? "";
  const decimals = (m?.[2].split(".")[1] ?? "").length;
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !m) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(target); return; }
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        setN(target * (1 - Math.pow(1 - p, 4)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [target, duration]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!m) return <span>{value}</span>;
  return <span ref={ref} className="tabular-nums">{prefix}{n.toFixed(decimals)}{suffix}</span>;
}
