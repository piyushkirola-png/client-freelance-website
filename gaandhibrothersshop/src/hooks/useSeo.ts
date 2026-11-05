import { useEffect } from "react";
import { PRIZES, SITE } from "@/data/siteData";

/**
 * Lightweight SEO helper — updates the document title and the meta description
 * (plus Open Graph tags) whenever the route changes.
 *
 * @param title Page specific title (without the brand suffix)
 * @param description Page specific meta description
 */
export function useSeo(title: string, description?: string) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE.name}`
      : `${SITE.name} — ${PRIZES[0].amount} Diwali Lucky Draw`;
    document.title = fullTitle;

    const desc =
      description ??
      "Book your Diwali Bumper 2026 lucky draw ticket. ₹12 Crore top prize, draw on 16 November 2026. Secure, all-India festive draw.";

    const setMeta = (selector: string, attr: string, value: string) => {
      let tag = document.head.querySelector<HTMLMetaElement>(selector);
      if (!tag) {
        tag = document.createElement("meta");
        const [, key, content] = selector.match(/meta\[(\w+)="(.+)"\]/) ?? [];
        if (key) tag.setAttribute(key, content);
        document.head.appendChild(tag);
      }
      tag.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", desc);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta('meta[property="og:type"]', "content", "website");
  }, [title, description]);
}
