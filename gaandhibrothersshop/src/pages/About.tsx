import { useSeo } from "@/hooks/useSeo";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { UdyamBadge } from "@/components/UdyamBadge";
import { CONTACT, DRAW, SITE, UDYAM } from "@/data/siteData";
import {
  Heart,
  Users,
  HandCoins,
  Eye,
  ShieldCheck,
  Sparkles,
  MapPin,
} from "lucide-react";
import celebrationImage from "@/assets/festival-celebration.jpg";

const WHY_CHOOSE_US = [
  {
    icon: Eye,
    title: "100% Transparent Draw",
    text: "Every token is physically drawn in front of an independent auditor and streamed live. Nothing hidden, nothing rigged.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Verified",
    text: "Registered merchant accounts, verified ticket numbers and KYC-based winner verification for every single prize.",
  },
  {
    icon: HandCoins,
    title: "Instant Payouts",
    text: "Winners are contacted within 24 hours of the draw and prize amounts are released without unnecessary delay.",
  },
  {
    icon: Users,
    title: "All India Reach",
    text: "From Srinagar to Kanyakumari — our booking network reaches 28 states and 8 union territories.",
  },
];

export default function About() {
  useSeo(
    `About Us — ${SITE.name}`,
    `Learn about ${SITE.name} — our story, our mission and why thousands of families trust us for India's biggest festive lucky draw.`,
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 -z-10">
          <img
            src={celebrationImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night/85 via-night/90 to-night" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <Sparkles className="h-3.5 w-3.5" /> About Us
          </span>
          <h1 className="mt-6 font-display text-3xl font-extrabold text-gold-gradient sm:text-5xl">
            Celebrating India&apos;s Festivals, One Big Dream at a Time
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/70">
            {SITE.name} was born from a simple belief — the festival season should bring not just
            joy, but a chance for every family to be part of something extraordinary.
          </p>
        </div>
      </section>

      {/* Story + mission */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal direction="right">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Our Story"
                  title="From a Small Idea to a Nationwide Celebration"
                />
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-cream/70">
                  <p>
                    In 2021, a small group of friends in Meerut sat together during Diwali and
                    wondered why the biggest festival of the year had no truly exciting, fair,
                    nationwide draw. What started as a simple question became{" "}
                    <span className="font-semibold text-gold">Diwali Bumper</span> — a lucky draw
                    designed around trust, celebration and genuine excitement.
                  </p>
                  <p>
                    Year after year, families across India have joined us to light lamps, share
                    sweets and hope for a little extra luck. This year, our biggest draw yet comes
                    with a <span className="font-semibold text-gold">₹12 Crore</span> jackpot, a
                    live audited draw on{" "}
                    <span className="font-semibold text-gold">{DRAW.dateLong}</span> and a promise
                    that every winner is treated like family.
                  </p>
                  <p>
                    We are not a casino, and we do not sell dreams. We sell a transparent,
                    well-governed festive draw where every token is a real chance and every rupee
                    is accounted for.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-gold/20 bg-maroon/30 p-5">
                    <Heart className="h-6 w-6 text-ember-soft" />
                    <h3 className="mt-3 font-display text-base font-bold text-gold">Our Mission</h3>
                    <p className="mt-1.5 text-sm text-cream/65">
                      To make the joy of Diwali bigger, brighter and more inclusive for every
                      Indian family — fairly and transparently.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gold/20 bg-maroon/30 p-5">
                    <Sparkles className="h-6 w-6 text-ember-soft" />
                    <h3 className="mt-3 font-display text-base font-bold text-gold">Our Vision</h3>
                    <p className="mt-1.5 text-sm text-cream/65">
                      To become India&apos;s most trusted festive draw brand, known for honesty,
                      celebration and happy winners.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={120}>
              <div className="relative overflow-hidden rounded-3xl border border-gold/25">
                <img
                  src={celebrationImage}
                  alt="Family celebrating Diwali with diyas and sparklers"
                  className="h-full min-h-[380px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display text-xl font-bold text-gold-gradient">
                    {SITE.tagline}
                  </p>
                  <p className="mt-1 text-sm text-cream/70">
                    Lighting lamps, celebrating together — since 2021.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "50,000+", label: "Tickets Sold" },
                  { value: "28", label: "States & UTs" },
                  { value: "2021", label: "Established" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-gold/20 bg-maroon/30 px-3 py-4"
                  >
                    <p className="font-display text-xl font-extrabold text-gold-gradient sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-cream/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A Brand Built on Trust, Not Hype"
            subtitle="We publish our rules upfront, honour our refund promises and celebrate every winner like family."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="group flex h-full gap-4 rounded-2xl border border-gold/20 bg-maroon/30 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/55">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold/25 to-ember/15 text-gold transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-gold">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/65">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Udyam Registration — trust proof */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Government Verified"
            title="Registered & Recognised"
            subtitle={`${SITE.legalName} is officially registered under the Udyam Registration Scheme of the Ministry of Micro, Small and Medium Enterprises, Government of India.`}
          />

          <div className="mt-10">
            <UdyamBadge variant="card" />
          </div>

          <Reveal>
            <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-cream/50">
              Verify our registration number{" "}
              <a
                href={UDYAM.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold underline underline-offset-2"
              >
                {UDYAM.registrationNumber}
              </a>{" "}
              on the official Government of India portal.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Trust message */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="glass-card gold-border rounded-3xl p-7 text-center sm:p-10">
              <span className="text-4xl">🪔</span>
              <h2 className="mt-4 font-display text-2xl font-extrabold text-gold-gradient sm:text-3xl">
                Our Promise to You
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream/70">
                We know that handing over your hard-earned money deserves more than a hopeful
                promise. That is why every booking carries a verifiable ticket number, every draw
                is independently supervised, and every rupee is refunded if the draw cannot be
                held as promised. If you ever feel we have not kept our word, call us — a human
                will pick up.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold rounded-full px-7 py-3 font-display text-sm font-bold"
                >
                  Talk to Us on WhatsApp
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="btn-ghost rounded-full px-7 py-3 font-display text-sm font-semibold break-all"
                >
                  {CONTACT.email}
                </a>
              </div>
              <p className="mt-6 flex items-center justify-center gap-2 text-xs text-cream/45">
                <MapPin className="h-3.5 w-3.5" /> {CONTACT.addressShort}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}