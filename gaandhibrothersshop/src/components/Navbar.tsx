import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Ticket } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/siteData";

/**
 * Sticky top navigation.
 * Desktop: horizontal links + "Book Ticket" CTA.
 * Mobile: hamburger that expands into a full-width slide-down menu.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [location.pathname]);

  // Add the "scrolled" styling once the user moves down the page
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gold/25 bg-night/90 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="group flex shrink-0 items-center gap-2" aria-label={SITE.name}>
          <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-gold/40 bg-gradient-to-br from-gold/25 to-ember/20 text-xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            🪔
            <span className="absolute -inset-1 rounded-xl bg-gold/20 blur-md" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-extrabold text-gold-gradient sm:text-lg">
              {SITE.name}
            </span>
            <span className="mt-0.5 text-[10px] font-medium tracking-wide text-cream/50">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-gold"
                    : "text-cream/70 hover:text-cream"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold to-transparent transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Link
            to="/book"
            className="btn-gold hidden items-center gap-2 rounded-full px-5 py-2.5 font-display text-sm font-bold sm:inline-flex"
          >
            <Ticket className="h-4 w-4" />
            Book Ticket
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-colors hover:bg-gold/20 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-gold/15 bg-night/95 backdrop-blur-xl transition-[max-height,opacity] duration-400 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-4 py-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 font-medium transition-colors ${
                    isActive
                      ? "bg-gold/15 text-gold"
                      : "text-cream/75 hover:bg-gold/10 hover:text-cream"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <Link
              to="/book"
              className="btn-gold flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-display font-bold"
            >
              <Ticket className="h-4 w-4" />
              Book Ticket
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
