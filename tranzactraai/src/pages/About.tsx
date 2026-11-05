import { Target, Eye, Heart, Users, TrendingUp, Globe, Award, Zap } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import Counter from '../components/animations/Counter';
import Button from '../components/ui/Button';

const values = [
  { icon: Heart, title: 'Customer Obsession', desc: 'We build for our merchants first. Every feature starts with a customer problem.' },
  { icon: Zap, title: 'Bias for Speed', desc: 'From integration to settlement, we optimize for velocity without compromising reliability.' },
  { icon: Award, title: 'Engineering Excellence', desc: 'Bank-grade infrastructure, rigorous testing, and a culture of continuous improvement.' },
  { icon: Globe, title: 'Global Mindset', desc: 'We design for cross-border from day one, supporting 180+ countries and multi-currency.' },
];

const team: { name: string; role: string; bio: string }[] = [
  // { 
  //   name: 'Amit Yadav', 
  //   role: 'Founder & CEO', 
  //   bio: 'Visionary leader building Tranzactra AI to revolutionize payment orchestration with intelligent routing and AI-powered solutions.' 
  // },
];

const milestones = [
  { year: '2023', event: 'Tranzactra  AI founded with a vision to simplify payment orchestration' },
  { year: '2024', event: 'Launched with 3 gateway integrations and first 50 merchants' },
  { year: '2025', event: 'Expanded to 7 gateways, processing $2.5B+ annually' },
  { year: '2026', event: 'Serving 180+ countries with 99.98% uptime SLA' },
];

export default function About() {
  return (
    <>
      <PageHero
        badge="About Us"
        title={<>The team behind the <span className="gradient-text">orchestration layer</span></>}
        subtitle="We're on a mission to make payments effortless for every business, everywhere. One API, every gateway, zero complexity."
      />

      {/* Mission & Vision */}
      <section className="section-pad bg-white">
        <div className="container-8xl grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="h-full rounded-3xl p-10 bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100">
              <div className="p-3 rounded-xl bg-primary-600 w-fit mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ink-900 mb-4">Our Mission</h3>
              <p className="text-ink-600 leading-relaxed">
                To democratize payment infrastructure by giving every business — from startups
                to enterprises — access to the same powerful, reliable, and intelligent payment
                orchestration layer used by the world's leading fintechs.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl p-10 bg-gradient-to-br from-accent-50 to-primary-50 border border-accent-100">
              <div className="p-3 rounded-xl bg-accent-500 w-fit mb-6">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ink-900 mb-4">Our Vision</h3>
              <p className="text-ink-600 leading-relaxed">
                A world where accepting a payment is as simple as making an API call — regardless
                of geography, currency, or gateway. No integrations to maintain, no edge cases
                to handle, no complexity to manage.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent-500/10 blur-[130px] rounded-full" />
        <div className="relative container-8xl grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: 2.5, prefix: '$', suffix: 'B+', label: 'Annual Volume', decimals: 1 },
            { value: 50000, suffix: '+', label: 'Merchants' },
            { value: 180, suffix: '+', label: 'Countries' },
            { value: 99.98, suffix: '%', label: 'Uptime SLA', decimals: 2 },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text-light">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="mt-2 text-sm text-ink-300 font-medium">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-ink-50">
        <div className="container-8xl">
          <Reveal>
            <SectionHeading
              badge="Our Values"
              title="What drives us forward"
              subtitle="The principles that shape every decision we make, every line of code we ship."
            />
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="group h-full bg-white rounded-2xl p-8 border border-ink-100 hover:border-accent-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 w-fit mb-5 group-hover:scale-110 transition-transform">
                    <v.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-white">
        <div className="container-8xl max-w-3xl">
          <Reveal>
            <SectionHeading
              badge="Our Journey"
              title="From idea to infrastructure"
              subtitle="Key milestones in our mission to simplify payments globally."
            />
          </Reveal>
          <div className="mt-16 space-y-0">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.1}>
                <div className="flex gap-6 pb-12 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {m.year}
                    </div>
                    {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-ink-200 mt-4" />}
                  </div>
                  <div className="pt-3">
                    <p className="text-ink-700 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-ink-50">
        <div className="container-8xl">
          <Reveal>
            <SectionHeading
              badge="Leadership"
              title="Built by payment veterans"
              subtitle="Decades of combined experience at Razorpay, Stripe, PayU, and Cashfree."
            />
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="group text-center bg-white rounded-2xl p-8 border border-ink-100 hover:shadow-xl transition-all duration-300">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 mx-auto mb-5 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                    {member.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-bold text-ink-900">{member.name}</h3>
                  <p className="text-sm text-primary-600 font-medium mt-1">{member.role}</p>
                  <p className="text-sm text-ink-500 mt-3 leading-relaxed">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[120px] rounded-full" />
        <div className="relative container-8xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
              Want to join us on this mission?
            </h2>
            <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
              We're always looking for exceptional people who share our passion for payments.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button to="/careers" variant="primary" size="lg">View Open Roles</Button>
              <Button to="/contact" variant="dark" size="lg">Get in Touch</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}