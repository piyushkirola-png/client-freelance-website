/**
 * FestiveBackdrop — decorative ambient layer (diya glow, sparkles, fireworks)
 * placed behind page content. Purely visual, pointer-events are disabled.
 */
export function FestiveBackdrop() {
  const sparkles = [
    { top: "12%", left: "8%", size: "text-xl", delay: "0s" },
    { top: "22%", left: "82%", size: "text-lg", delay: "0.6s" },
    { top: "48%", left: "18%", size: "text-sm", delay: "1.2s" },
    { top: "64%", left: "90%", size: "text-xl", delay: "0.3s" },
    { top: "78%", left: "28%", size: "text-base", delay: "1.8s" },
    { top: "34%", left: "58%", size: "text-xs", delay: "0.9s" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Warm diya glows */}
      <div className="diya-glow top-[-10rem] left-[-8rem] h-[26rem] w-[26rem] bg-ember/25 animate-float-slow" />
      <div className="diya-glow top-[28%] right-[-10rem] h-[30rem] w-[30rem] bg-gold/15 animate-float" />
      <div className="diya-glow bottom-[-14rem] left-[35%] h-[32rem] w-[32rem] bg-maroon-light/40" />

      {/* Twinkling sparkles */}
      {sparkles.map((s, i) => (
        <span
          key={i}
          className={`sparkle animate-twinkle ${s.size}`}
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        >
          ✦
        </span>
      ))}

      {/* Faint rangoli-inspired grid */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[60%] w-full opacity-[0.07]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="diyaGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M30 4 L56 30 L30 56 L4 30 Z"
              fill="none"
              stroke="#FFD700"
              strokeWidth="1.2"
            />
            <circle cx="30" cy="30" r="4" fill="#FFD700" />
          </pattern>
        </defs>
        <rect width="1200" height="400" fill="url(#diyaGrid)" />
      </svg>
    </div>
  );
}
