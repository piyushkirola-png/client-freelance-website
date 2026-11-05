import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { CONTACT, DRAW, NAV_LINKS, SITE, SOCIALS, UDYAM } from "@/data/siteData";
import { SOCIAL_GLYPHS } from "@/components/SocialIcons";
import { UdyamBadge } from "@/components/UdyamBadge";

/** Site footer — brand, quick links, contact info, social icons and legal line. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-gold/20 bg-gradient-to-b from-maroon/40 to-night/90">
      {/* Decorative top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="diya-glow -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 bg-gold/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/25 to-ember/20 text-2xl">
                🪔
              </span>
              <span className="font-display text-xl font-extrabold text-gold-gradient">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-4 font-display text-lg text-gold/90">{SITE.tagline}</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/60">
              {SITE.shortDescription} Live draw on {DRAW.dateLabel}.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              {SOCIALS.map((social) => {
                const Glyph = SOCIAL_GLYPHS[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-gold/25 bg-gold/10 text-gold transition-all duration-200 hover:-translate-y-1 hover:border-gold/60 hover:bg-gold/20"
                  >
                    <Glyph className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>

            <div className="mt-5">
              <UdyamBadge variant="compact" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-lg font-bold text-gold">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-cream/65 transition-colors hover:text-gold"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold/60 transition-all group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/book"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-ember-soft"
                >
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  Book a Ticket
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-bold text-gold">Get in Touch</h3>
            <ul className="mt-4 space-y-3.5 text-sm text-cream/65">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-gold break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
                <span className="leading-relaxed">{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
                <span>{CONTACT.supportHours}</span>
              </li>
            </ul>
          </div>

          {/* Draw info */}
          <div>
            <h3 className="font-display text-lg font-bold text-gold">Draw Details</h3>
            <div className="mt-4 space-y-3 rounded-2xl border border-gold/20 bg-gold/[0.06] p-4 text-sm text-cream/70">
              <p className="font-display font-bold tracking-wider text-gold">
                ड्रॉ की तारीख — {DRAW.dateLabel}
              </p>
              <p>Time: {DRAW.timeLabel}</p>
              <p>Venue: Live draw, Meerut, Uttar Pradesh</p>
              <p className="text-xs text-cream/50">Booking closes {DRAW.ticketCutoff}</p>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-cream/45">
              {SITE.legalName} is a Government-registered Micro Enterprise
              (Udyam No. {UDYAM.registrationNumber}). This is a promotional lucky draw. Please read
              our Terms &amp; Conditions before booking.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/15 pt-6 sm:flex-row">
          <p className="text-center text-xs text-cream/50 sm:text-left">
            © {year} {SITE.legalName} · Udyam {UDYAM.registrationNumber} · All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-cream/50">
            <Link to="/terms" className="transition-colors hover:text-gold">
              Terms &amp; Conditions
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/refund" className="transition-colors hover:text-gold">
              Refund Policy
            </Link>
            <Link to="/contact" className="transition-colors hover:text-gold">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}