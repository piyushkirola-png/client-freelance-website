import { Link } from "react-router-dom";
import { ArrowRight, Landmark, GitBranch, Activity, ShieldCheck, Users, Check, Sparkles, Cpu, Layers, Lock, Zap, CreditCard, Receipt, Smartphone, BadgeCheck, BarChart3, Send, RefreshCw } from "lucide-react";
import { Reveal, Eyebrow, IconBox, GhostLink, TONES, toneText, toneSoft, toneBar, type Tone } from "../components/ui";
import RailOrbit from "../components/RailOrbit";
import CountUp from "../components/CountUp";
import FintechFeatures from "../components/FintechFeatures";
import { BrandLogo, type BrandKey } from "../components/BrandLogo";

const stats = [["30+", "Banks & Fintechs"], ["500M+", "Daily Transactions"], ["99.99%", "Platform Uptime"], ["<50ms", "Avg. Response Time"]];


const capabilities = [
  { icon: CreditCard, tag: "Payments", title: "Payment Gateway", desc: "Coordinate payment providers and transaction operations with routing and retry built in.", to: "/products/payment-orchestration" },
  { icon: Landmark, tag: "Banking", title: "Connected Banking", desc: "One platform for all your banking: account balances, statements and transfers across banks.", to: "/products/shioninxt" },
  { icon: Receipt, tag: "Payments", title: "BBPS & Bill Payments", desc: "5,000+ billers across electricity, gas, water, telecom, insurance, education and more.", to: "/solutions" },
  { icon: Smartphone, tag: "Collections", title: "UPI Collections", desc: "Collect payments via UPI DeepLinks, Intent and QR, with smart reminders and auto-reconciliation.", to: "/products/soundbox" },
  { icon: BadgeCheck, tag: "Compliance", title: "Verification & KYC", desc: "Real-time KYC: PAN, Aadhaar, GST, bank verification and e-sign with legal validity.", to: "/products/verification-suite" },
  { icon: BarChart3, tag: "Operations", title: "Smart Reconciliation", desc: "Organise settlement records, compare transaction data and surface exceptions for review.", to: "/platform" },
  { icon: Send, tag: "Payouts", title: "Payouts & Disbursements", desc: "Instant payouts via UPI, IMPS, NEFT and RTGS. Bulk uploads, API triggers and webhooks for every status.", to: "/products/shioninxt" },
  { icon: RefreshCw, tag: "Escrow", title: "Escrow Management", desc: "Manage escrow transactions with complete trust. Automated release, dispute resolution, audit trails.", to: "/products/shioniexcrow" },
];

const testimonials: { quote: string; name: string; role: string; tone: Tone; metric: string; label: string }[] = [
  { quote: "Our UPI success rate jumped within a week of moving routing to ShioniPay. The dashboard finally shows us why payments fail.", name: "Ritika Menon", role: "VP Payments, NeoLend Finance", tone: "teal", metric: "+9.2%", label: "success rate" },
  { quote: "One integration replaced four vendors. Our engineers now spend their time on product instead of payment plumbing.", name: "Arjun Batra", role: "CTO, KiranaKart", tone: "emerald", metric: "4→1", label: "vendors" },
  { quote: "Reconciliation that used to take our finance team days now happens automatically before anyone logs in.", name: "Sneha Kulkarni", role: "Head of Finance, UrbanEdu", tone: "pink", metric: "3 days", label: "saved monthly" },
];

const challenges = [
  { icon: GitBranch, title: "Fragmented Rails", desc: "UPI, AePS, BBPS, cards, IMPS, RTGS — each with its own switch, reconciliation logic and downtime patterns." },
  { icon: ShieldCheck, title: "Compliance Gravity", desc: "RBI, NPCI, PA/PG norms, digital lending rules, tokenisation, KYC master directions. Change quarterly." },
  { icon: Users, title: "Bharat-Scale Expectations", desc: "500M+ UPI transactions a day, Tier-3 merchants, 12 languages, offline-first flows. Scale is non-negotiable." },
];

const why = [
  { icon: Cpu, title: "AI-Powered Routing", desc: "Machine learning models pick the optimal rail for every transaction in real-time." },
  { icon: Layers, title: "Unified API Layer", desc: "One integration, every rail. Switch on new payment methods without touching your code." },
  { icon: Lock, title: "Bank-Grade Security", desc: "PCI-DSS compliant, tokenised, encrypted end-to-end with SOC 2 Type II certification." },
  { icon: Zap, title: "Sub-50ms Response", desc: "Edge-deployed infrastructure ensures your transactions never wait." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-bg-dark [mask-image:radial-gradient(ellipse_80%_70%_at_70%_40%,black,transparent)]" />
        <div className="absolute -left-40 top-1/3 w-[520px] h-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(47,127,88,.35),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-14 md:pt-16 md:pb-16 grid items-center gap-10 lg:gap-12 lg:grid-cols-[1.05fr_1fr]">
          <Reveal className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.04] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/80">
              <span className="w-2 h-2 rounded-full bg-brand pulse-dot" />
              Trusted by 30+ banks &amp; fintechs across Asia
            </div>
            <h1 className="mt-7 font-display font-extrabold text-[44px] leading-[0.98] sm:text-6xl lg:text-[70px]">
              <span className="line-mask"><span>The Payment Engine</span></span>
              <span className="line-mask text-white/55"><span style={{ animationDelay: ".12s" }}>Behind India's</span></span>
              <span className="stamp mt-2 inline-block rounded-xl bg-brand px-3 pb-1 text-ink">Boldest Businesses</span>
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
              Payment infrastructure for banks, fintechs and digital businesses. Connect providers, coordinate payment flows, and monitor activity from one platform.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl btn-grad px-6 py-3.5 font-semibold !shadow-[3px_3px_0_#C8F04A55]">
                Talk to our team <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/platform" className="group inline-flex items-center gap-2 rounded-xl border-[1.5px] border-white/25 px-6 py-3.5 font-semibold text-white hover:border-brand hover:text-brand transition-colors">
                Explore the Platform <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              {[{ icon: Landmark, label: "Multi-rail payments" }, { icon: GitBranch, label: "Flexible routing" }, { icon: Activity, label: "Payment visibility" }].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/[.03] p-3 text-left hover:border-brand/50 transition-colors">
                  <item.icon className="w-4 h-4 text-brand" />
                  <p className="mt-2 text-[13px] font-medium leading-tight text-white/85">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150} className="relative"><RailOrbit /></Reveal>
        </div>
        <div className="relative border-y border-white/10 bg-brand text-ink overflow-hidden">
          <div className="marquee flex w-max gap-10 py-3 font-mono text-sm font-semibold uppercase tracking-wider">
            {[0, 1].map((k) => (
              <div key={k} className="flex gap-10" aria-hidden={k === 1}>
                {["UPI", "IMPS", "NEFT", "RTGS", "BBPS", "Cards", "Wallets", "Net banking", "eNACH", "UPI AutoPay"].map((r) => (
                  <span key={r} className="flex items-center gap-10">{r}<span className="w-1.5 h-1.5 rounded-full bg-ink" /></span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border-[1.5px] border-ink bg-white overflow-hidden shadow-[6px_6px_0_#0E1B14]">
            {stats.map(([v, l], i) => (
              <Reveal key={l} delay={i * 80} className={`group p-6 md:p-8 border-ink ${i % 2 ? "border-l-[1.5px]" : ""} ${i > 1 ? "border-t-[1.5px] md:border-t-0" : ""} ${i === 2 ? "md:border-l-[1.5px]" : ""} hover:bg-brand transition-colors`}>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-sub group-hover:text-ink">0{i + 1} / {l}</p>
                <p className="mt-3 font-display font-extrabold text-4xl md:text-[52px] leading-none text-fg"><CountUp value={v} /></p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="bg-paper border-b border-line">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <p className="shrink-0 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-sub">Accept every way India pays →</p>
          <div className="flex-1 w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {([["visa", "Visa"], ["mastercard", "Mastercard"], ["amex", "Amex"], ["googlepay", "Google Pay"], ["phonepe", "PhonePe"], ["paytm", "Paytm"], ["applepay", "Apple Pay"]] as [BrandKey, string][]).map(([k, n]) => (
              <div key={k} className="group flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-3 py-3 hover:border-ink hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#0E1B14] transition-all">
                <BrandLogo name={k} className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-fg/70 group-hover:text-fg">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="wash-sand py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow>The Challenge</Eyebrow>
            <h2 className="mt-5 font-display font-extrabold text-3xl md:text-5xl tracking-tight">Payments in Asia aren't like payments anywhere else</h2>
            <p className="mt-5 text-lg text-sub">Building for Bharat means solving for fragmentation, regulation, and scale — all at once.</p>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {challenges.map((c, i) => (
              <Reveal key={c.title} delay={i * 100} className="group card card-hover relative overflow-hidden p-7">
                <span className={`absolute inset-x-0 top-0 h-1 ${toneBar[(["pink", "amber", "teal"] as Tone[])[i]]}`} />
                <IconBox icon={c.icon} tone={TONES[i % 6]} />
                <h3 className="mt-6 font-display font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-sub">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="wash-peach py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow>One Infrastructure</Eyebrow>
            <h2 className="mt-5 font-display font-extrabold text-3xl md:text-5xl tracking-tight">Every way money moves, in one platform</h2>
            <p className="mt-5 text-lg text-sub">From regulated banks to fast-moving fintechs, ShioniPay provides the payment infrastructure behind every transaction — without forcing businesses to rebuild their stack for every new rail.</p>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 80}>
                <Link to={c.to} className="group flex flex-col h-full rounded-2xl bg-white border border-line p-6 card-hover transition-all duration-300">
                  <IconBox icon={c.icon} tone={TONES[i % 6]} />
                  <span className={`mt-4 text-[11px] font-semibold uppercase tracking-wider ${toneText[TONES[i % 6]]}`}>{c.tag}</span>
                  <h3 className="mt-1 font-semibold text-fg">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sub flex-1">{c.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-fg group-hover:text-teal-600 transition-colors">Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 rounded-2xl border border-pink-100 bg-gradient-to-r from-pink-50 via-white to-teal-50 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-pink-600"><Sparkles className="w-3.5 h-3.5" /> Roadmap</p>
              <h3 className="mt-2 font-display font-semibold text-xl md:text-2xl max-w-2xl">Explore predictive routing, failure insights, and reconciliation assistance.</h3>
              <p className="mt-2 text-sm text-sub">Planned capabilities depend on integrations, data availability, and implementation scope.</p>
            </div>
            <GhostLink to="/platform">View roadmap <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></GhostLink>
          </Reveal>
        </div>
      </section>

      {/* FINTECH CAPABILITIES */}
      <FintechFeatures />

      {/* WHY */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28 border-y border-line">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <Eyebrow tone="emerald">Why ShioniPay</Eyebrow>
            <h2 className="mt-6 font-display font-extrabold text-4xl md:text-[56px] leading-[1.02] text-fg">Built ground-up for Asia's scale, compliance & speed</h2>
            <p className="mt-6 text-lg text-sub leading-relaxed">We obsess over the infrastructure so you can obsess over your customers. Every rail, every regulation, every edge case — handled.</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-[15px] text-fg/85">
              {["Single API for UPI, IMPS, NEFT, RTGS, BBPS, cards", "Real-time webhooks for every transaction state", "White-label dashboards for your merchants", "Built-in fraud detection & risk scoring", "Automated settlement reconciliation", "Dedicated sandbox with full test coverage"].map((t) => (
                <li key={t} className="flex gap-3 border-b border-line pb-3"><span className="mt-0.5 grid place-items-center w-5 h-5 shrink-0 rounded-md bg-teal-100 text-teal-700"><Check className="w-3 h-3" /></span>{t}</li>
              ))}
            </ul>
            <Link to="/contact" className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-sm font-semibold text-white hover:bg-charcoal transition-colors">Talk to our team <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></Link>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 100} className={`group card card-hover bg-paper p-6 ${i % 2 ? "sm:translate-y-8" : ""}`}>
                <div className="flex items-center justify-between">
                  <span className={`grid place-items-center w-11 h-11 rounded-lg ${["bg-teal-100 text-teal-700", "bg-amber-100 text-amber-700", "bg-pink-100 text-pink-700", "bg-emerald-100 text-emerald-700"][i]}`}><w.icon className="w-5 h-5" /></span>
                  <span className="font-mono text-xs text-sub">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display font-extrabold text-lg">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sub">{w.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="wash-warm border-t border-line py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow>Customer stories</Eyebrow>
            <h2 className="mt-5 font-display font-extrabold text-3xl md:text-5xl tracking-tight">Teams that moved faster with ShioniPay</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100} className="card card-hover relative overflow-hidden p-7 flex flex-col">
                <span className={`absolute inset-x-0 top-0 h-1 ${toneBar[t.tone]}`} />
                <div className="flex items-baseline gap-2">
                  <span className={`font-display font-extrabold text-3xl ${toneText[t.tone]}`}>{t.metric}</span>
                  <span className="text-sm text-sub">{t.label}</span>
                </div>
                <p className="mt-5 text-fg/85 leading-relaxed flex-1">“{t.quote}”</p>
                <div className="mt-6 pt-5 border-t border-line flex items-center gap-3">
                  <span className={`grid place-items-center w-10 h-10 rounded-full font-semibold text-sm ${toneSoft[t.tone]} ${toneText[t.tone]}`}>{t.name.split(" ").map((x) => x[0]).join("")}</span>
                  <div><p className="font-semibold text-sm">{t.name}</p><p className="text-xs text-sub">{t.role}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
