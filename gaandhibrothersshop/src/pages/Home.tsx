import { useSeo } from "@/hooks/useSeo";
import { Hero } from "@/components/home/Hero";
import { DrawBanner } from "@/components/home/DrawBanner";
import { Prizes } from "@/components/home/Prizes";
import { TokenPricing } from "@/components/home/TokenPricing";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TrustBadges } from "@/components/home/TrustBadges";
import { FAQSection } from "@/components/home/FAQSection";
import { DisclaimerNote } from "@/components/home/DisclaimerNote";
import { CTABand } from "@/components/CTABand";
import { UdyamBadge } from "@/components/UdyamBadge";
import { DRAW, PRIZES, SITE } from "@/data/siteData";

/**
 * Home page — hero + countdown, prizes, draw banner, pricing, how it works,
 * trust badges, FAQ and the promotional disclaimer.
 */
export default function Home() {
  useSeo(
    `${SITE.name} — ${PRIZES[0].amount} Diwali Lucky Draw`,
    `Book your ${SITE.name} ticket online. Top prize ${PRIZES[0].amount}, second prize ${PRIZES[1].amount}, third prize ${PRIZES[2].amount}. Live draw on ${DRAW.dateLong}.`,
  );

  return (
    <>
      <Hero />
      <DrawBanner />
      <Prizes />
      <TokenPricing />
      <HowItWorks />
      <TrustBadges />
      <CTABand />
      <FAQSection />
      <DisclaimerNote />
      <div className="mx-auto max-w-4xl px-4 pb-10 pt-2 text-center sm:px-6">
        <UdyamBadge variant="compact" />
      </div>
    </>
  );
}