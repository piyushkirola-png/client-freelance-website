import { MapPin, Clock, ArrowRight, Briefcase, Heart, Zap, Globe, Users, Mail, Building } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';

const perks = [
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health, dental, and vision insurance for you and your family.' },
  { icon: Zap, title: 'Learning Budget', desc: '$3,000 annual budget for courses, books, and conferences.' },
  { icon: Globe, title: 'Remote-First', desc: 'Work from anywhere. We have a remote-first culture with optional office space.' },
  { icon: Users, title: 'Team Equity', desc: 'Every employee gets equity. We succeed together.' },
];

const values = [
  { title: 'Customer Obsession', desc: 'We build for our merchants first. Every feature starts with a real customer problem.' },
  { title: 'Bias for Speed', desc: 'We move fast without breaking things. Speed is a feature, not a trade-off.' },
  { title: 'Engineering Excellence', desc: 'Bank-grade infrastructure, rigorous testing, and a culture of continuous improvement.' },
  { title: 'Ownership', desc: 'We take ownership of our work end-to-end. No throwing things over the wall.' },
];

export default function Careers() {
  return (
    <>
      <PageHero
        badge="Careers"
        title={<>Build the future of <span className="gradient-text">payments</span></>}
        subtitle="We're on a mission to make payments effortless for every business. Join us and help build the infrastructure that powers global commerce."
      />

      {/* Perks */}
      <section className="section-pad bg-white">
        <div className="container-8xl">
          <Reveal>
            <SectionHeading
              badge="Benefits & Perks"
              title="We take care of our team"
              subtitle="Great work comes from great people. We invest in our team's wellbeing, growth, and happiness."
            />
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 0.1}>
                <div className="h-full bg-ink-50 rounded-2xl p-8 border border-ink-100 hover:border-accent-300 hover:shadow-lg transition-all">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 w-fit mb-5">
                    <perk.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">{perk.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{perk.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-ink-50">
        <div className="container-8xl">
          <Reveal>
            <SectionHeading
              badge="Our Culture"
              title="What we value"
              subtitle="The principles that guide how we work, build, and grow together."
            />
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-ink-100 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-ink-900 mb-2">{v.title}</h3>
                  <p className="text-ink-500 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="section-pad bg-white">
        <div className="container-8xl max-w-3xl">
          <Reveal>
            <SectionHeading
              badge="Our Office"
              title="Come work with us"
              subtitle="Our headquarters is in the heart of Noida's tech hub."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 bg-ink-50 rounded-2xl p-8 border border-ink-100 hover:shadow-lg transition-all text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 mb-5">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ink-900 mb-2">Tranzactra  AI Technologies</h3>
              <div className="flex items-center justify-center gap-2 text-ink-600 mb-4">
                <MapPin className="h-4 w-4" />
                <span>Noida, Uttar Pradesh, India</span>
              </div>
              <p className="text-ink-500 max-w-md mx-auto">
                Modern workspace with high-speed internet, collaboration spaces, and great coffee.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Open Roles - No Current Openings */}
      <section className="section-pad bg-ink-50">
        <div className="container-8xl max-w-3xl">
          <Reveal>
            <SectionHeading
              badge="Open Positions"
              title="Join our talent pool"
              subtitle="We're not actively hiring right now, but we'd love to connect with you for future opportunities."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 bg-white rounded-2xl p-12 border border-ink-100 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 mb-5">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ink-900 mb-3">No Current Openings</h3>
              <p className="text-ink-500 max-w-md mx-auto mb-6">
                We're always looking for exceptional talent. Send us your resume and we'll reach out when a role matches your skills.
              </p>
              <Button to="/contact" variant="primary" size="lg">
                Send Your Resume <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-600/5 via-accent-500/5 to-primary-600/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[120px] rounded-full" />
        <div className="relative container-8xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              Want to shape the future of payments?
            </h2>
            <p className="mt-4 text-lg text-ink-600 max-w-2xl mx-auto">
              Drop us your resume and we'll keep you in the loop for future opportunities.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button to="/contact" variant="primary" size="lg">Connect With Us <ArrowRight className="h-4 w-4" /></Button>
              <Button to="/about" variant="outline" size="lg">About Us</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}