import { Link } from "react-router-dom";
import { MapPin, Award, ArrowRight } from "lucide-react";
import { TONES, toneBar, toneSoft, toneText } from "../components/ui";
import { Target, Heart, ShieldCheck, Lightbulb } from "lucide-react";
import { PageHeader, SimpleCard, Reveal, Eyebrow } from "../components/ui";

const team = [["Aarav Shioni", "Co-founder & CEO"], ["Meera Iyer", "Co-founder & CTO"], ["Rohan Kapoor", "Head of Payments"], ["Ananya Rao", "Head of Compliance"]];

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About us" title="Building the rails for Bharat's digital economy" subtitle="ShioniPay was founded with a simple belief: every business in India deserves world-class payment infrastructure — without the complexity." />
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Eyebrow>Our story</Eyebrow>
          <h2 className="mt-5 font-display font-extrabold text-3xl md:text-4xl tracking-tight">From one API to an entire payments stack</h2>
          <p className="mt-5 text-lg text-sub leading-relaxed">We started by solving our own pain — stitching together a dozen payment providers. Today, ShioniPay powers payments, verification, banking and business workflows for 30+ banks and fintechs, processing hundreds of millions of transactions every day.</p>
        </Reveal>
        <Reveal delay={120} className="grid grid-cols-2 gap-4">
          {[["2021", "Founded"], ["30+", "Bank partners"], ["500M+", "Daily transactions"], ["250+", "Team members"]].map(([v, l], i) => (
            <div key={l} className={`group card relative overflow-hidden p-6 ${["hover:bg-teal-600", "hover:bg-emerald-600", "hover:bg-pink-600", "hover:bg-amber-500"][i]} hover:border-transparent`}>
              <span className={`absolute inset-x-0 top-0 h-1 ${["bg-teal-600", "bg-emerald-600", "bg-pink-600", "bg-amber-500"][i]}`} />
              <p className={`font-display font-extrabold text-3xl group-hover:text-white transition-colors ${["text-teal-600", "text-emerald-600", "text-pink-600", "text-amber-600"][i]}`}>{v}</p>
              <p className="mt-1 text-sm text-sub group-hover:text-white/90 transition-colors">{l}</p>
            </div>
          ))}
        </Reveal>
      </section>
      <section className="wash-peach border-y border-line py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center"><Eyebrow>Our values</Eyebrow><h2 className="mt-5 font-display font-extrabold text-3xl md:text-4xl tracking-tight">What drives us</h2></Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <SimpleCard icon={Target} title="Customer obsessed" desc="We measure success by our customers' success rates." />
            <SimpleCard icon={ShieldCheck} delay={80} title="Trust first" desc="Security and compliance are never an afterthought." />
            <SimpleCard icon={Lightbulb} delay={160} title="Build boldly" desc="We tackle hard infrastructure problems head-on." />
            <SimpleCard icon={Heart} delay={240} title="Made for Bharat" desc="Designed for every language, network and business size." />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <Reveal><h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Leadership</h2></Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(([n, r], i) => (
            <Reveal key={n} delay={i * 80} className="group">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-soft border border-line grid place-items-center group-hover:border-teal-300 transition-colors">
                <div className="absolute inset-0 red-glow opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-5xl font-display font-extrabold text-fg">{n.split(" ").map((x) => x[0]).join("")}</span>
              </div>
              <p className="mt-4 font-semibold">{n}</p>
              <p className="text-sm text-sub">{r}</p>
            </Reveal>
          ))}
        </div>
      </section>
      {/* Milestones */}
      <section className="wash-sunrise border-y border-line py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center"><Eyebrow>Our journey</Eyebrow><h2 className="mt-5 font-display font-extrabold text-3xl md:text-4xl tracking-tight">Milestones along the way</h2></Reveal>
          <div className="relative mt-12">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-line md:-translate-x-1/2" />
            {[["2021", "ShioniPay is founded in Bengaluru with a single payments API."], ["2022", "First bank partner goes live. UPI and BBPS added to the platform."], ["2023", "Soundbox and PoS launch. 10,000 merchants onboarded."], ["2024", "Verification Suite and ShioniVerify launch. 10 bank partners."], ["2025", "ShioniNXT, ShioniEXcrow and ShioniPGX join the platform."], ["2026", "500M+ daily transactions. ShioniContractX launches."]].map(([y, t], i) => (
              <Reveal key={y} delay={i * 60} className={`relative pl-12 md:pl-0 pb-10 last:pb-0 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"}`}>
                <span className={`absolute left-4 md:left-auto ${i % 2 ? "md:left-0" : "md:right-0"} top-1 -translate-x-1/2 ${i % 2 ? "" : "md:translate-x-1/2"} w-3.5 h-3.5 rounded-full ring-4 ring-soft ${toneBar[TONES[i % 6]]}`} />
                <p className={`font-display font-extrabold text-2xl ${toneText[TONES[i % 6]]}`}>{y}</p>
                <p className="mt-1 text-fg/80">{t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offices + recognition */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-24 grid lg:grid-cols-2 gap-12">
        <div>
          <Reveal><Eyebrow>Offices</Eyebrow><h2 className="mt-5 font-display font-extrabold text-3xl tracking-tight">Where we work</h2></Reveal>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[["Bengaluru", "Headquarters", "pink"], ["Mumbai", "Banking & compliance", "teal"], ["Gurugram", "Enterprise sales", "emerald"], ["Singapore", "International partnerships", "amber"]].map(([c, r, t]) => (
              <Reveal key={c} className="card card-hover p-5 flex items-start gap-3">
                <span className={`grid place-items-center w-10 h-10 rounded-xl ${toneSoft[t as "red"]} ${toneText[t as "red"]}`}><MapPin className="w-5 h-5" /></span>
                <div><p className="font-semibold">{c}</p><p className="text-sm text-sub">{r}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <Reveal><Eyebrow>Recognition</Eyebrow><h2 className="mt-5 font-display font-extrabold text-3xl tracking-tight">Recognised by the industry</h2></Reveal>
          <ul className="mt-8 space-y-3">
            {["Fintech Infrastructure Startup of the Year, 2025", "Top 50 Payments Innovators in Asia, 2025", "Best Payment Orchestration Platform, India Fintech Awards 2024", "Great Place to Work certified, 2024–2026"].map((a, i) => (
              <Reveal as="li" key={a} delay={i * 60} className="card p-4 flex items-center gap-3">
                <Award className={`w-5 h-5 shrink-0 ${toneText[TONES[(i + 1) % 6]]}`} /><span className="text-sm text-fg/85">{a}</span>
              </Reveal>
            ))}
          </ul>
          <Link to="/company/careers" className="group mt-8 inline-flex items-center gap-2 font-semibold text-teal-600 hover:text-pink-600">See open roles <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></Link>
        </div>
      </section>
    </>
  );
}
