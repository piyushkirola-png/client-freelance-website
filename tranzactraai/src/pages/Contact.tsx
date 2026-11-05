import { Mail, Phone, MapPin, MessageSquare, Building2 } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/ui/PageHero';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Replace with your email
      const response = await fetch('https://formsubmit.co/ajax/amityadav@tranzactra.com', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: '✅ Message sent successfully! We\'ll get back to you within 24 hours.',
        });
        form.reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: '❌ Failed to send. Please try again or use our contact details below.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        badge="Contact Us"
        title={<>Let's talk <span className="gradient-text">payments</span></>}
        subtitle="Whether you're ready to integrate or just exploring, our team is here to help you find the right solution."
      />

      <section className="section-pad bg-white">
        <div className="container-8xl max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ink-900 mb-4">Get in touch</h2>
              <p className="text-ink-500 max-w-2xl mx-auto">
                Fill out the form and our team will get back to you within 24 hours. For urgent
                matters, use the contact details below.
              </p>
            </div>
          </Reveal>

          {/* Form Section */}
          <Reveal>
            <div className="max-w-2xl mx-auto mb-12">
              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 border border-green-200 text-green-700'
                      : 'bg-red-50 border border-red-200 text-red-700'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot - Prevents spam */}
                <input 
                  type="text" 
                  name="_honey" 
                  style={{ display: 'none' }} 
                />

                {/* Disable CAPTCHA (you can remove this if you want CAPTCHA) */}
                <input 
                  type="hidden" 
                  name="_captcha" 
                  value="false" 
                />

                {/* Custom Subject */}
                <input 
                  type="hidden" 
                  name="_subject" 
                  value="New Contact Form Submission - TranzactraAI" 
                />

                {/* Name and Email - Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-ink-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-ink-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Company and Phone - Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-ink-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-xl border border-ink-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-ink-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ink-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Sales & Partnerships">Sales & Partnerships</option>
                    <option value="Integration Help">Integration Help</option>
                    <option value="Pricing Question">Pricing Question</option>
                    <option value="Enterprise Solution">Enterprise Solution</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button - Fixed without disabled prop */}
                <div className="text-center pt-2">
                  {isSubmitting ? (
                    <Button
                      type="submit"
                      className="px-8 py-4 text-lg opacity-70 cursor-not-allowed"
                    >
                      <span className="inline-block animate-spin mr-2">⟳</span>
                      Sending...
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="px-8 py-4 text-lg"
                    >
                      Send Message
                    </Button>
                  )}
                  <p className="text-sm text-ink-400 mt-3">
                    We'll respond to your message within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </Reveal>

          {/* Contact Details */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              { icon: Mail, label: 'Email', value: 'amityadav@tranzactra.com', href: 'mailto:amityadav@tranzactra.com' },
              { icon: MapPin, label: 'Office', value: 'Noida, Uttar Pradesh, India' },
              { icon: MessageSquare, label: 'Live Chat', value: 'Available 24/7' },
            ].map((item) => (
              <Reveal key={item.label} delay={0.1}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-ink-50 border border-ink-100 hover:border-accent-300 hover:bg-white hover:shadow-md transition-all"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-ink-500">{item.label}</div>
                      <div className="font-semibold text-ink-900">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-ink-50 border border-ink-100">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-ink-500">{item.label}</div>
                      <div className="font-semibold text-ink-900">{item.value}</div>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          {/* Enterprise Sales */}
          <Reveal delay={0.2}>
            <div className="mt-8 max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="h-5 w-5 text-primary-600" />
                <h3 className="font-bold text-ink-900">Enterprise Sales</h3>
              </div>
              <p className="text-sm text-ink-600 mb-4">
                High-volume businesses get custom pricing, dedicated account managers, and 99.99% uptime SLAs.
              </p>
              <Button to="/pricing" variant="outline" size="sm">View Enterprise Plan</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}