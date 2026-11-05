import { useState } from "react";
import type { FormEvent } from "react";
import { useSeo } from "@/hooks/useSeo";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppFloat";
import { UdyamBadge } from "@/components/UdyamBadge";
import { CONTACT, waLink, DEFAULT_WA_MESSAGE, SITE, UDYAM } from "@/data/siteData";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const EMPTY: ContactForm = { name: "", email: "", message: "" };

export default function Contact() {
  useSeo(
    `Contact Us — ${SITE.name}`,
    `Talk to the ${SITE.name} support team on WhatsApp, phone or email. Support hours, office address and quick contact options.`,
  );

  const [form, setForm] = useState<ContactForm>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found: Partial<Record<keyof ContactForm, string>> = {};

    if (form.name.trim().length < 2) found.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      found.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10)
      found.message = "Please tell us a little more (min 10 characters).";

    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }

    setSent(true);
  };

  const contactCards = [
    {
      icon: MessageSquare,
      label: "WhatsApp (Fastest)",
      value: CONTACT.whatsappDisplay,
      href: `https://wa.me/${CONTACT.whatsapp}`,
      note: "Get instant replies & ticket confirmations",
    },
    {
      icon: Phone,
      label: "Phone Support",
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
      note: "Call during support hours",
    },
    {
      icon: Mail,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      note: "Ideal for documents & grievances",
    },
    {
      icon: MapPin,
      label: "Registered Office",
      value: CONTACT.address,
      href: "#",
      note: "Visits by appointment only",
    },
    {
      icon: ShieldCheck,
      label: "Udyam Registration",
      value: UDYAM.registrationNumber,
      href: UDYAM.verificationUrl,
      note: "Government of India · Verify online",
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title={
            <>
              We&apos;re Here to <span className="text-ember-soft">Help</span>
            </>
          }
          subtitle="Any question about tickets, payments, refunds or the draw — reach us on WhatsApp and we will sort it out fast. हमारी टीम आपकी मदद के लिए हाज़िर है।"
        />

        {/* Contact cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card, index) => (
            <Reveal key={card.label} delay={index * 90}>
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex h-full items-start gap-4 rounded-2xl border border-gold/20 bg-maroon/30 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/55 hover:bg-maroon/50"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold/25 to-ember/15 text-gold transition-transform duration-300 group-hover:scale-110">
                  <card.icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/45">
                    {card.label}
                  </p>
                  <p className="mt-1 font-display text-sm font-bold text-cream break-words">
                    {card.value}
                  </p>
                  <p className="mt-1 text-xs text-cream/50">{card.note}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Compact Udyam badge */}
        <Reveal delay={140}>
          <div className="mt-8 flex justify-center">
            <UdyamBadge variant="compact" />
          </div>
        </Reveal>

        {/* Support hours strip */}
        <Reveal delay={160}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-gold/25 bg-gold/[0.06] px-6 py-5 text-center sm:flex-row sm:gap-6 sm:text-left">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
              <Clock className="h-4 w-4" /> Support Hours
            </span>
            <span className="text-sm text-cream/75">{CONTACT.supportHours}</span>
            <span className="text-xs text-cream/45">{CONTACT.responseTime}</span>
          </div>
        </Reveal>

        {/* Form + WhatsApp CTA */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <Reveal>
            {sent ? (
              <div className="glass-card gold-border rounded-3xl p-8 text-center sm:p-12">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-500/15">
                  <CheckCircle2 className="h-11 w-11 text-emerald-400" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold text-gold-gradient">
                  Message received!
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm text-cream/70">
                  Thank you for reaching out to Diwali Bumper 2026. Our support team will get back
                  to you within 2 working hours. For anything urgent, message us on WhatsApp.
                </p>
                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <WhatsAppButton message={DEFAULT_WA_MESSAGE} label="Chat on WhatsApp" />
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setForm(EMPTY);
                    }}
                    className="btn-ghost w-full rounded-full px-7 py-3 font-display text-sm font-semibold sm:w-auto"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="glass-card gold-border rounded-3xl p-6 sm:p-9"
              >
                <h3 className="font-display text-2xl font-extrabold text-gold-gradient">
                  Send us a message
                </h3>
                <p className="mt-2 text-sm text-cream/60">
                  Fill in the form and we will reply to your email shortly.
                </p>

                <div className="mt-7 space-y-5">
                  <div>
                    <label
                      htmlFor="c-name"
                      className="mb-1.5 block text-sm font-semibold text-cream/85"
                    >
                      Your Name <span className="text-ember">*</span>
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full rounded-xl border bg-night/60 px-4 py-3 text-sm text-cream placeholder:text-cream/35 transition-colors focus:outline-none focus:ring-2 ${errors.name
                        ? "border-red-400/70 focus:border-red-400 focus:ring-red-400/30"
                        : "border-gold/25 focus:border-gold focus:ring-gold/30"
                        }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300">
                        <AlertCircle className="h-3.5 w-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="c-email"
                      className="mb-1.5 block text-sm font-semibold text-cream/85"
                    >
                      Email Address <span className="text-ember">*</span>
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@example.com"
                      className={`w-full rounded-xl border bg-night/60 px-4 py-3 text-sm text-cream placeholder:text-cream/35 transition-colors focus:outline-none focus:ring-2 ${errors.email
                        ? "border-red-400/70 focus:border-red-400 focus:ring-red-400/30"
                        : "border-gold/25 focus:border-gold focus:ring-gold/30"
                        }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300">
                        <AlertCircle className="h-3.5 w-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="c-message"
                      className="mb-1.5 block text-sm font-semibold text-cream/85"
                    >
                      Message <span className="text-ember">*</span>
                    </label>
                    <textarea
                      id="c-message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us how we can help — ticket issue, payment, refund, draw details…"
                      className={`w-full resize-none rounded-xl border bg-night/60 px-4 py-3 text-sm text-cream placeholder:text-cream/35 transition-colors focus:outline-none focus:ring-2 ${errors.message
                        ? "border-red-400/70 focus:border-red-400 focus:ring-red-400/30"
                        : "border-gold/25 focus:border-gold focus:ring-gold/30"
                        }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300">
                        <AlertCircle className="h-3.5 w-3.5" /> {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-gold mt-7 flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-display text-base font-bold"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            )}
          </Reveal>

          {/* WhatsApp side panel */}
          <Reveal delay={120} className="lg:sticky lg:top-24">
            <aside className="glass-card gold-border rounded-3xl p-6 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#25D366]/15 text-3xl">
                💬
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-gold">
                Prefer WhatsApp?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">
                The fastest way to book a ticket, raise a refund or get draw updates. Our team
                replies during support hours.
              </p>

              <WhatsAppButton
                message={DEFAULT_WA_MESSAGE}
                label="Chat on WhatsApp"
                className="mt-6 w-full"
              />

              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-xs text-cream/45 underline underline-offset-2 hover:text-gold"
              >
                {CONTACT.whatsappDisplay}
              </a>

              <div className="mt-6 border-t border-gold/15 pt-5 text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/45">
                  Office Address
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-cream/70">{CONTACT.address}</p>
              </div>

              <div className="mt-5 border-t border-gold/15 pt-5 text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/45">
                  Udyam Registration
                </p>
                <a
                  href={UDYAM.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 block font-display text-sm font-bold text-gold hover:underline"
                >
                  {UDYAM.registrationNumber}
                </a>
                <p className="mt-1 text-xs text-cream/50">
                  {UDYAM.enterpriseName} · {UDYAM.enterpriseType} Enterprise
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}