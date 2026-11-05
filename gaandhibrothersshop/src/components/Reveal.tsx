import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay in ms before the element becomes visible */
  delay?: number;
  className?: string;
  /** Direction the element fades in from */
  direction?: "up" | "down" | "left" | "right" | "none";
}

/**
 * Fade-in-on-scroll wrapper driven by IntersectionObserver.
 * Pure CSS animation (no extra animation library needed).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const offset: Record<string, string> = {
    up: "translateY(28px)",
    down: "translateY(-28px)",
    left: "translateX(-28px)",
    right: "translateX(28px)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : offset[direction],
        transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
