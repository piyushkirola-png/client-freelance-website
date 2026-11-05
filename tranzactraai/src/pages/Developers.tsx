import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Terminal,
  Copy,
  CheckCircle,
  Zap,
  Shield,
  Lock,
  Globe,
  Users,
  BookOpen,
  Server,
  GitBranch,
  Play,
  BarChart3,
  MessageSquare,
  HelpCircle,
  ExternalLink,
  Sparkles,
  Rocket,
  Cpu,
  Database,
  Layers,
  Settings,
  FileCode,
  Braces,
  GitPullRequest,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import PageHero from '../components/ui/PageHero';

export default function Developers() {
  return (
    <>
      <PageHero
        badge="Developers"
        title={
          <>
            Build payments with{' '}
            <span className="gradient-text">developer-first</span> APIs
          </>
        }
        subtitle="Comprehensive documentation, APIs, and tools to integrate payments in minutes — not weeks."
      />

      {/* Quick Start */}
      <QuickStartSection />

      {/* API Features */}
      <ApiFeaturesSection />

      {/* API Reference */}
      <ApiReferenceSection />

      {/* Webhooks */}
      <WebhooksSection />

      {/* Developer Tools */}
      <DeveloperToolsSection />

      {/* Documentation */}
      <DocumentationSection />

      {/* Support */}
      <SupportSection />

      {/* Community */}
      <CommunitySection />
    </>
  );
}

/* ───────────────────────── QUICK START ───────────────────────── */
function QuickStartSection() {
  const [copied, setCopied] = useState(false);
  const code = `// Install the SDK
npm install Tranzactra  

// Initialize the client
import Tranzactra from 'tranzactra';

const tranzactra = new Tranzactra({
  apiKey: 'sk_live_...',
  environment: 'production'
});

// Create a payment
const payment = await tranzactra.payments.create({
  amount: 1000,
  currency: 'INR',
  method: 'upi',
  customer: {
    email: 'customer@example.com',
    phone: '9876543210'
  }
});

// Handle response
console.log(payment.id);
console.log(payment.status);
console.log(payment.redirect_url);`;

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-pad bg-ink-50">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="Quick Start"
            align="left"
            title={
              <>
                Get started in <span className="gradient-text">5 minutes</span>
              </>
            }
            subtitle="Everything you need to start accepting payments — all in one place."
          />
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              { icon: Rocket, title: 'Get your API keys', desc: 'Sign up and grab your test keys from the dashboard.' },
              { icon: Code2, title: 'Install the SDK', desc: 'npm install tranzactra — it\'s that simple.' },
              { icon: Play, title: 'Make your first call', desc: 'Create a payment and handle the response.' },
              { icon: CheckCircle, title: 'Go live', desc: 'Switch to production keys and start accepting real payments.' },
            ].map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="flex gap-4 p-4 rounded-xl bg-white border border-ink-100 hover:shadow-md transition-all">
                  <div className="shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900">{step.title}</h3>
                    <p className="text-sm text-ink-500">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-3xl blur-xl" />
              <div className="relative bg-ink-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <div className="flex items-center justify-between px-5 py-3.5 bg-white/5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-accent-400" />
                    <span className="text-sm font-mono text-ink-400">quickstart.js</span>
                  </div>
                  <button
                    onClick={copyCode}
                    className="flex items-center gap-1.5 text-xs text-ink-400 hover:text-white transition-colors"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto max-h-[400px]">
                  <code className="text-ink-300">{code}</code>
                </pre>
                <div className="px-5 py-3 bg-accent-500/10 border-t border-white/10 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-400" />
                  <span className="text-xs text-accent-300 font-mono">Payment created successfully</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── API FEATURES ───────────────────────── */
function ApiFeaturesSection() {
  const features = [
    { icon: Zap, title: 'RESTful API', desc: 'Clean, predictable endpoints with consistent error handling.' },
    { icon: Shield, title: 'HMAC Signatures', desc: 'Every webhook is signed and verified for security.' },
    { icon: Lock, title: 'JWT Authentication', desc: 'Secure, stateless authentication with API keys.' },
    { icon: Globe, title: 'Global Infrastructure', desc: 'Low-latency endpoints with 99.98% uptime SLA.' },
    { icon: Users, title: 'Team Management', desc: 'Role-based access control for your entire team.' },
    { icon: BarChart3, title: 'Analytics', desc: 'Real-time dashboards and transaction insights.' },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="API Features"
            title="Built for modern developers"
            subtitle="Everything you need to build, test, and deploy payment integrations at scale."
          />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.1}>
              <div className="group p-6 rounded-2xl bg-ink-50 border border-ink-100 hover:border-accent-300 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-ink-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-ink-500">{feature.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── API REFERENCE ───────────────────────── */
function ApiReferenceSection() {
  const endpoints = [
    { method: 'POST', path: '/v1/payments', desc: 'Create a new payment', color: 'bg-green-500' },
    { method: 'GET', path: '/v1/payments/{id}', desc: 'Get payment details', color: 'bg-blue-500' },
    { method: 'POST', path: '/v1/payments/{id}/refund', desc: 'Refund a payment', color: 'bg-orange-500' },
    { method: 'GET', path: '/v1/payments', desc: 'List all payments', color: 'bg-purple-500' },
    { method: 'POST', path: '/v1/payouts', desc: 'Create a payout', color: 'bg-pink-500' },
    { method: 'GET', path: '/v1/balance', desc: 'Get account balance', color: 'bg-cyan-500' },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-8xl max-w-4xl">
        <Reveal>
          <SectionHeading
            badge="API Reference"
            align="left"
            title="Simple, predictable endpoints"
            subtitle="Every endpoint is designed to be intuitive, consistent, and well-documented."
          />
        </Reveal>

        <div className="mt-8 space-y-3">
          {endpoints.map((endpoint, i) => (
            <Reveal key={endpoint.path} delay={i * 0.05}>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-ink-50 border border-ink-100 hover:border-accent-200 transition-all group">
                <span className={`shrink-0 px-3 py-1 rounded-lg text-xs font-bold text-white ${endpoint.color}`}>
                  {endpoint.method}
                </span>
                <code className="flex-1 text-sm font-mono text-ink-700 group-hover:text-primary-600 transition-colors">
                  {endpoint.path}
                </code>
                <span className="text-sm text-ink-500 hidden sm:block">{endpoint.desc}</span>
                <ArrowRight className="h-4 w-4 text-ink-400 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 text-center">
            <Button to="/api-docs" variant="primary" size="lg">
              <BookOpen className="h-4 w-4" />
              View Full API Docs
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── WEBHOOKS ───────────────────────── */
function WebhooksSection() {
  const [copied, setCopied] = useState(false);
  const webhookCode = `{
  "id": "evt_123456789",
  "type": "payment.succeeded",
  "data": {
    "payment_id": "pay_123456789",
    "amount": 1000,
    "currency": "INR",
    "status": "succeeded",
    "customer": {
      "email": "customer@example.com",
      "phone": "9876543210"
    },
    "gateway": "razorpay"
  },
  "timestamp": "2024-01-15T12:00:00Z"
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(webhookCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <section className="section-pad bg-ink-50">
      <div className="container-8xl grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <Badge>Webhooks</Badge>
            <h2 className="text-3xl font-bold text-ink-900 mt-4 sm:text-4xl">
              Real-time <span className="gradient-text">event notifications</span>
            </h2>
            <p className="mt-4 text-lg text-ink-500 leading-relaxed">
              Get notified instantly when payments succeed, fail, or are refunded. Every webhook is HMAC-signed for security.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { icon: ShieldCheck, title: 'HMAC-Signed', desc: 'Every event is cryptographically signed' },
                { icon: Clock, title: 'Retry Logic', desc: 'Automatic retries with exponential backoff' },
                { icon: Zap, title: 'Sub-second Delivery', desc: 'Real-time notifications for your business' },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-ink-100">
                  <div className="p-2 rounded-lg bg-accent-50">
                    <item.icon className="h-4 w-4 text-accent-600" />
                  </div>
                  <div>
                    <div className="font-medium text-ink-900 text-sm">{item.title}</div>
                    <div className="text-xs text-ink-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-3xl blur-xl" />
            <div className="relative bg-ink-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="flex items-center justify-between px-5 py-3.5 bg-white/5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-accent-400" />
                  <span className="text-sm font-mono text-ink-400">webhook_payload.json</span>
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1.5 text-xs text-ink-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto">
                <code className="text-ink-300">{webhookCode}</code>
              </pre>
              <div className="px-5 py-3 bg-success-500/10 border-t border-white/10 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success-400" />
                <span className="text-xs text-success-300 font-mono">Webhook verified & delivered</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── DEVELOPER TOOLS ───────────────────────── */
function DeveloperToolsSection() {
  const tools = [
    { icon: Terminal, title: 'API Playground', desc: 'Test API calls directly in your browser with live responses.' },
    { icon: FileCode, title: 'Webhook Tester', desc: 'Receive and inspect webhooks before going live.' },
    { icon: Database, title: 'Test Data Generator', desc: 'Generate realistic test transactions in seconds.' },
    { icon: Settings, title: 'SDK Config Generator', desc: 'Get ready-to-use configuration for your language.' },
    { icon: Layers, title: 'Multi-Gateway Simulator', desc: 'Test routing and fallback logic across all gateways.' },
    { icon: Braces, title: 'OpenAPI Spec', desc: 'Fully documented OpenAPI specification for your tools.' },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="Developer Tools"
            title="Tools to accelerate your integration"
            subtitle="We've built everything you need to test, debug, and deploy payment integrations."
          />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <Reveal key={tool.title} delay={(i % 3) * 0.1}>
              <div className="group p-6 rounded-2xl bg-ink-50 border border-ink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 rounded-xl bg-accent-50 w-fit mb-4 group-hover:bg-accent-100 transition-colors">
                  <tool.icon className="h-5 w-5 text-accent-600" />
                </div>
                <h3 className="font-semibold text-ink-900 mb-2">{tool.title}</h3>
                <p className="text-sm text-ink-500">{tool.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── DOCUMENTATION ───────────────────────── */
function DocumentationSection() {
  const sections = [
    { icon: BookOpen, title: 'Getting Started', desc: 'Setup, authentication, and your first API call.', items: 5 },
    { icon: Server, title: 'API Reference', desc: 'Complete reference for all endpoints and parameters.', items: 12 },
    { icon: GitPullRequest, title: 'Webhooks', desc: 'Receive real-time notifications for events.', items: 8 },
    { icon: ShieldCheck, title: 'Security', desc: 'Authentication, encryption, and best practices.', items: 6 },
    { icon: Zap, title: 'Guides', desc: 'Payment flows, integrations, and use cases.', items: 10 },
    { icon: HelpCircle, title: 'FAQ', desc: 'Common questions and troubleshooting.', items: 15 },
  ];

  return (
    <section className="section-pad bg-ink-50">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="Documentation"
            title="Everything you need to know"
            subtitle="Comprehensive guides, API references, and examples to help you build faster."
          />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={(i % 3) * 0.1}>
              <div className="group p-6 rounded-2xl bg-white border border-ink-100 hover:border-accent-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary-50">
                    <section.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-ink-900">{section.title}</h3>
                </div>
                <p className="text-sm text-ink-500 mb-2">{section.desc}</p>
                <div className="text-xs text-ink-400">
                  {section.items} articles
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── SUPPORT ───────────────────────── */
function SupportSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-8xl max-w-4xl">
        <Reveal>
          <div className="text-center">
            <Badge>Support</Badge>
            <h2 className="text-3xl font-bold text-ink-900 mt-4 sm:text-4xl">
              We're here to <span className="gradient-text">help</span>
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Get the support you need to build faster. We're available on multiple channels.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {[
            { icon: MessageSquare, title: 'Live Chat', desc: 'Chat with our team in real-time' },
            { icon: BookOpen, title: 'Documentation', desc: 'Search our comprehensive guides' },
            { icon: HelpCircle, title: 'Email Support', desc: 'Get help within 24 hours' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="text-center p-6 bg-ink-50 rounded-2xl border border-ink-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex p-3 rounded-xl bg-accent-50 mb-4">
                  <item.icon className="h-6 w-6 text-accent-600" />
                </div>
                <h3 className="font-semibold text-ink-900">{item.title}</h3>
                <p className="text-sm text-ink-500 mt-1">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 text-center">
            <Button to="/contact" variant="primary" size="lg">
              <MessageSquare className="h-4 w-4" />
              Contact Support
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
/* ───────────────────────── COMMUNITY ───────────────────────── */
function CommunitySection() {
  return (
    <section className="py-20 lg:py-28 bg-ink-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-accent-500/15 to-primary-500/15 blur-[130px] rounded-full" />

      <div className="relative container-8xl text-center">
        <Reveal>
          <Badge variant="dark">Community</Badge>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Join our <span className="gradient-text-light">developer community</span>
          </h2>
          <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
            Connect with other developers, share your projects, and help shape the future of Tranzactra.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              { 
                icon: '💼', 
                label: 'LinkedIn', 
                desc: 'Follow for updates',
                url: 'https://www.linkedin.com/company/tranzactra-ai'
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-accent-400 transition-all flex items-center gap-2"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="mt-8 text-sm text-ink-400">
            Built with ❤️ by developers, for developers
          </div>
        </Reveal>
      </div>
    </section>
  );
}