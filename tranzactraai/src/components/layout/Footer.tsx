import { Link } from 'react-router-dom';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import { label } from 'framer-motion/client';

const footerLinks = {
  Products: [
    { label: 'Payment Gateway', href: '/payment-gateway' },
    { label: 'Merchant Solutions', href: '/merchant-solutions' },
    { label: 'Routing', href: '/routing' },
    { label: 'Payouts', href: '/payouts' },
    { label: 'Settlement', href: '/settlement' },
    { label: 'Risk Engine', href: '/risk-engine' },
  ],
  Developers: [
    { label: 'API Documentation', href: '/api-docs' },
    { label: 'Developer Portal', href: '/developers' },
    { label: 'Webhooks', href: '/api-docs' },
    { label: 'SDKs', href: '/developers' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Partners', href: '/partners' },
    { label: 'Security & Compliance', href: '/security' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Industries', href: '/industries' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 text-ink-300 overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[120px] rounded-full" />

      <div className="relative container-8xl pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/assets/images/logo.png" alt="Tranzactra AI" className="h-10 w-10 rounded-lg" />
              <span className="text-xl font-bold text-white">
                Tranzactra <span className="text-primary-600">AI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-ink-400 max-w-sm">
              The unified payment orchestration platform. Connect once, route payments across
              7+ gateways, and scale globally with a single API.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/Tranzactra-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-ink-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:amityadav@tranzactra.com"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-ink-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-white mb-4">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-ink-400 hover:text-accent-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            &copy; 2024 TranzactraAI Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-ink-500">
            <span>PCI DSS Compliant</span>
            <span className="w-1 h-1 rounded-full bg-ink-600" />
            <span>SOC 2 Type II</span>
            <span className="w-1 h-1 rounded-full bg-ink-600" />
            <span>ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}