import { useSeo } from "@/hooks/useSeo";
import { BookingForm } from "@/components/BookingForm";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DRAW, SITE, TOKEN_PACKS } from "@/data/siteData";
import { ShieldCheck, Clock, Smartphone } from "lucide-react";

/** Booking page — the full ticket booking form. */
export default function Book() {
  useSeo(
    `Book Your ${SITE.name} Ticket`,
    `Book ${SITE.name} tickets from ₹${TOKEN_PACKS[0].price}. Fill the form and get instant WhatsApp confirmation. Draw on ${DRAW.dateLong}.`,
  );

  const highlights = [
    { icon: Smartphone, title: "Instant Confirmation", text: "Ticket number on WhatsApp in minutes" },
    { icon: ShieldCheck, title: "Secure Booking", text: "Your data stays private & protected" },
    { icon: Clock, title: "Takes 60 Seconds", text: "Simple form, no paperwork" },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ticket Booking"
          title={
            <>
              Book Your <span className="text-ember-soft">Diwali Bumper</span> Ticket
            </>
          }
          subtitle={`Fill the form below and send us a WhatsApp message. Booking closes at ${DRAW.ticketCutoff}.`}
        />

        {/* Quick highlights */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="flex items-center gap-3 rounded-2xl border border-gold/20 bg-maroon/30 px-4 py-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-cream">{item.title}</p>
                  <p className="text-xs text-cream/55">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Form */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <Reveal>
            <BookingForm />
          </Reveal>

          {/* Side panel: price summary (sticky on large screens) */}
          <Reveal delay={120} className="lg:sticky lg:top-24">
            <aside className="glass-card gold-border rounded-3xl p-6">
              <h3 className="font-display text-lg font-bold text-gold">Token Options</h3>
              <ul className="mt-4 space-y-3">
                {TOKEN_PACKS.map((pack) => (
                  <li
                    key={pack.id}
                    className="flex items-center justify-between rounded-xl border border-gold/15 bg-night/40 px-4 py-3"
                  >
                    <span className="text-sm text-cream/80">
                      {pack.tokens} Token{pack.tokens > 1 ? "s" : ""}
                      {pack.save && (
                        <span className="ml-2 text-[10px] font-bold text-emerald-300">
                          SAVE ₹{pack.save}
                        </span>
                      )}
                    </span>
                    <span className="font-display text-sm font-bold text-gold">
                      ₹{pack.price.toLocaleString("en-IN")}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl border border-gold/20 bg-gold/[0.06] p-4 text-sm text-cream/70">
                <p className="font-display font-bold text-gold">Draw Details</p>
                <ul className="mt-2 space-y-1.5 text-xs">
                  <li>📅 {DRAW.dateLong}</li>
                  <li>📍 {DRAW.venue}</li>
                  <li>⏰ Booking closes: {DRAW.ticketCutoff}</li>
                </ul>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-cream/45">
                This is a promotional lucky draw. Please read the Terms &amp; Conditions and Refund
                Policy before completing your booking.
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
