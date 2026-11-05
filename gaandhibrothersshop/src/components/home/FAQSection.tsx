import { FAQS } from "@/data/siteData";
import { Accordion } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

/** FAQ accordion section on the home page. */
export function FAQSection() {
  return (
    <section id="faq" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before booking your Diwali Bumper 2026 ticket."
        />

        <div className="mt-12">
          <Reveal>
            <Accordion items={FAQS} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
