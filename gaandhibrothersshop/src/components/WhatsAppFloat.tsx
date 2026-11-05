import { useEffect, useState } from "react";
import { CONTACT, DEFAULT_WA_MESSAGE, waLink } from "@/data/siteData";

interface WhatsAppFloatProps {
  /** Optional prefilled message for the floating button */
  message?: string;
}

/**
 * Sticky floating WhatsApp button — available on every page.
 * Uses a pulsing green halo to feel alive, and reveals a label on hover.
 */
export function WhatsAppFloat({ message = DEFAULT_WA_MESSAGE }: WhatsAppFloatProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`group fixed bottom-5 right-4 z-50 flex items-center gap-3 rounded-full transition-all duration-300 sm:bottom-7 sm:right-7 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
    >
      {/* Text bubble (hidden on small screens) */}
      <span className="pointer-events-none hidden -translate-x-1 whitespace-nowrap rounded-full border border-emerald-300/30 bg-[#075E54]/95 px-4 py-2 text-sm font-medium text-emerald-50 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Book on WhatsApp
      </span>

      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.75)] transition-transform duration-300 group-hover:scale-110">
        {/* Pulsing halo */}
        <span className="absolute inset-0 animate-pulse-glow rounded-full bg-[#25D366]/70" />
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative h-7 w-7"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.13 8.13 0 0 1-1.25-4.35c0-4.5 3.67-8.17 8.2-8.17 2.19 0 4.25.86 5.8 2.41a8.15 8.15 0 0 1 2.4 5.77c0 4.52-3.67 8.18-8.2 8.18Zm4.49-6.12c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.96-.15.17-.29.19-.53.07-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z" />
        </svg>
      </span>
    </a>
  );
}

/** Small inline WhatsApp link used inside pages (not floating). */
export function WhatsAppButton({
  message = DEFAULT_WA_MESSAGE,
  label = "Chat on WhatsApp",
  className = "",
}: {
  message?: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-display text-sm font-bold text-white shadow-[0_12px_28px_-10px_rgba(37,211,102,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1eb85a] ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm4.49 12.9c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.96-.15.17-.29.19-.53.07-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z" />
      </svg>
      {label}
      <span className="sr-only">({CONTACT.whatsappDisplay})</span>
    </a>
  );
}
