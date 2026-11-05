import { useSeo } from "@/hooks/useSeo";
import { LegalPage } from "@/components/LegalPage";
import type { LegalSection } from "@/components/LegalPage";
import { CONTACT, DRAW, LEGAL, PRIZES, SITE, TOKEN_PACKS, UDYAM } from "@/data/siteData";

/* Helper for bulleted lists inside a legal section. */
const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex gap-2.5">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function Terms() {
  useSeo(
    `Terms & Conditions — ${SITE.name}`,
    `Read the official Terms & Conditions for ${SITE.name}: eligibility, token rules, draw process on ${DRAW.dateLong}, prize claims and governing law.`,
  );

  const sections: LegalSection[] = [
    {
      id: "introduction",
      title: "Introduction & Acceptance",
      content: (
        <>
          <p>
            Welcome to <strong className="text-gold">{UDYAM.enterpriseName}</strong> ("Company",
            "we", "us" or "our"), operator of the <strong className="text-gold">{SITE.name}</strong>{" "}
            promotional lucky draw ("the Draw", "the Scheme" or "the Campaign").
          </p>
          <p>
            The Company is a <strong className="text-gold">Micro Enterprise</strong> registered under
            the Udyam Registration Scheme of the Government of India, with{" "}
            <strong className="text-gold">Udyam Registration Number {UDYAM.registrationNumber}</strong>,
            and operates from {LEGAL.registeredOffice}.
          </p>
          <p>
            By accessing this website, downloading the ticket, creating an account, or otherwise
            participating in the Draw, you ("you", "the Participant" or "the Ticket Holder") agree
            to these Terms &amp; Conditions ("T&amp;C"), the Privacy Policy, the Refund Policy and
            all related policies, which together form an agreement between you and the Company.
          </p>
          <p>
            If you do not agree with any part of these T&amp;C, you must immediately stop using this
            website and refrain from participating. We may modify these T&amp;C at any time, and
            continued participation after a change constitutes acceptance of the revised terms.
          </p>
        </>
      ),
    },
    {
      id: "udyam-registration",
      title: "Udyam Registration Details",
      content: (
        <>
          <p>
            For full transparency, our official business registration details are set out below:
          </p>
          <div className="mt-3 rounded-2xl border border-gold/20 bg-gold/[0.06] p-5 text-sm">
            <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-cream/45">
                  Udyam Registration No.
                </dt>
                <dd className="font-display font-bold text-gold">{UDYAM.registrationNumber}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-cream/45">
                  Name of Enterprise
                </dt>
                <dd className="font-semibold text-cream">{UDYAM.enterpriseName}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-cream/45">
                  Enterprise Type
                </dt>
                <dd className="text-cream/85">
                  {UDYAM.enterpriseType} · {UDYAM.classificationYear} · {UDYAM.majorActivity}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-cream/45">
                  Date of Registration
                </dt>
                <dd className="text-cream/85">{UDYAM.registrationDate}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[11px] uppercase tracking-wider text-cream/45">
                  Registered Office
                </dt>
                <dd className="text-cream/85">{CONTACT.address}</dd>
              </div>
            </dl>
          </div>
          <p>
            Participants can independently verify our registration at{" "}
            <a
              href={UDYAM.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold underline underline-offset-2"
            >
              udyamregistration.gov.in
            </a>{" "}
            using the registration number above.
          </p>
        </>
      ),
    },
    {
      id: "eligibility",
      title: "Eligibility",
      content: (
        <>
          <p>Participation in the Draw is open only to individuals who are:</p>
          <List
            items={[
              `At least ${LEGAL.minAge} years of age on the date of the Draw, and not a minor.`,
              "A permanent resident of India and holder of a valid Indian mobile number and government-issued photo identification.",
              "Not a person with a history of fraudulent, dishonest or illegal conduct relating to any promotional scheme.",
              "Not an employee, promoter, contractor or immediate family member of the Company or its affiliates, or a resident of the same household as such person.",
            ]}
          />
          <p>
            The Company reserves the right to disqualify any Participant, cancel any Ticket and
            withhold any Prize if, in its sole discretion, it determines that a Participant is
            ineligible, has violated these T&amp;C, or has tampered with the booking process.
          </p>
        </>
      ),
    },
    {
      id: "booking-process",
      title: "Booking Process",
      content: (
        <>
          <p>
            The Draw is conducted in a transparent, multi-step process. Participants must follow
            each step in the prescribed manner:
          </p>
          <List
            items={[
              "Step 1 — Select the number of tokens (1 to 5) from the available packs priced at ₹500, ₹900, ₹1,200 and ₹2,000 respectively.",
              `Step 2 — Submit the mandatory details on the booking form: full name, full address, 10-digit mobile number and 6-digit PIN code, along with a preferred payment method.`,
              "Step 3 — Send the booking request through the official WhatsApp number. The Company will respond on the same number with a unique ticket number and a secure payment link.",
              "Step 4 — Pay the applicable amount strictly through the payment link issued by the Company. A booking is confirmed only after the corresponding amount is credited to the Company's registered merchant account.",
              `Step 5 — Ticket confirmation is issued through WhatsApp and/or a confirmation page, which must be retained until the conclusion of the Draw.`,
            ]}
          />
          <p>
            All bookings are subject to acceptance by the Company. The Company may reject or
            cancel a booking where a payment fails, where the information supplied is found to be
            false, or where the booking limit for any single mobile number, address, or payment
            instrument is exceeded. The applicable per-Participant booking limit is five (5)
            tokens per mobile number and per address, and such limits may be revised by the
            Company at its discretion.
          </p>
        </>
      ),
    },
    {
      id: "token-rules",
      title: "Token & Ticket Rules",
      content: (
        <>
          <p>
            A "Token" is a unit of participation in the Draw, and each Token constitutes one
            independent entry into the prize draw. The following rules apply to all Tokens:
          </p>
          <List
            items={[
              "Each Token carries a unique serial number. One Token = one draw entry, regardless of the pack from which it was purchased.",
              "Tokens are personal to the named Ticket Holder and may be used only by the person named on the booking confirmation.",
              "A Ticket may be transferred at most once, and only before the commencement of the Draw, by contacting the Company on WhatsApp. Post-draw transfers are not permitted and will render the Ticket invalid.",
              "Tickets found to be duplicated, forged, tampered with, printed from a shared or leaked booking link, or purchased through fraudulent means will be voided without refund.",
              "The Company reserves the right to void any Ticket where a booking is made from a suspicious IP address, device or payment instrument, or where a single individual is found to have booked multiple times in breach of the stated limits.",
              "The Company is not responsible for any loss of the Ticket confirmation message. Participants are advised to save a screenshot of the confirmation and ticket number immediately upon receipt.",
            ]}
          />
        </>
      ),
    },
    {
      id: "draw-date",
      title: "Draw Date, Time & Venue",
      content: (
        <>
          <p>
            The Draw will be conducted live on <strong className="text-gold">{DRAW.dateLong}</strong>
            . Online and WhatsApp bookings will remain open until {DRAW.ticketCutoff}.
          </p>
          <List
            items={[
              `Venue: ${DRAW.venue}.`,
              "The Draw will be conducted in the presence of an independent auditor / notary appointed by the Company, and may be recorded and streamed live on the Company's social media channels.",
              "Tokens are drawn at random from the complete set of valid, confirmed and paid-for tickets. The order of the draw and the audit process are documented and retained by the Company for a period of twelve (12) months.",
              "If the Draw cannot be held on the stated date for any reason beyond the Company's reasonable control, the Company may reschedule the Draw to another date and will announce the revised date on the website and on WhatsApp. In such a case, all Ticket confirmations and rights of Participants shall automatically apply to the revised date.",
            ]}
          />
        </>
      ),
    },
    {
      id: "prizes",
      title: "Prizes & Prize Claim Process",
      content: (
        <>
          <p>The Draw offers the following prize tiers:</p>
          <ul className="space-y-2">
            {PRIZES.map((prize) => (
              <li key={prize.title} className="flex gap-2.5">
                <span className="mt-0.5">{prize.emoji}</span>
                <span>
                  <strong className="text-gold">
                    {prize.title} — {prize.amount}
                  </strong>
                  {prize.description}
                </span>
              </li>
            ))}
          </ul>
          <p className="pt-2">The prize claim process is as follows:</p>
          <List
            items={[
              "Winners are contacted within 24 hours of the Draw on the registered mobile number and WhatsApp, and are also announced on the Company's official channels.",
              "Each winner must complete KYC verification within seven (7) days of being notified, by submitting a valid PAN card, bank account proof, Aadhaar (or any accepted government photo ID) and proof of address.",
              "Prize amounts are transferred to the winner's verified Indian bank account via NEFT/IMPS/RTGS within 15 working days of successful KYC verification, except where the winner opts for a physical cheque or a gift hamper, which is dispatched within 30 working days.",
              "TDS as applicable under the Income Tax Act, 1961 will be deducted at source on all prizes and the winner will be issued a TDS certificate.",
              "Any prize that is not claimed within 90 days of the Draw shall be deemed forfeited and the Company may, at its sole discretion, award it to the next eligible winner.",
            ]}
          />
        </>
      ),
    },
    {
      id: "verification",
      title: "Winner Verification",
      content: (
        <>
          <p>
            To protect genuine winners and the Company, the following verification steps are
            mandatory:
          </p>
          <List
            items={[
              "Identity verification: the winner must produce a valid government-issued photo ID matching the booking details exactly.",
              "Payment verification: the payment made must be traceable to the participant's own bank account, UPI ID or payment instrument. Payments received from third-party accounts will not be accepted.",
              "Address verification: proof of address (utility bill, bank statement or Aadhaar) may be required before the release of any prize above ₹1,00,000.",
              "Anti-fraud checks: the Company may conduct additional checks, including a video KYC call, where it reasonably suspects a fraudulent booking.",
              "Any false declaration, forged document or misrepresentation on the part of the winner will result in immediate forfeiture of the prize, cancellation of the Ticket, and the Company reserves the right to initiate appropriate legal proceedings.",
            ]}
          />
        </>
      ),
    },
    {
      id: "refunds",
      title: "Refunds & Cancellation",
      content: (
        <>
          <p>
            The Company follows a transparent refund policy designed to protect participants. In
            summary: a confirmed Ticket is refundable if a written refund request is raised on
            WhatsApp within twenty-four (24) hours before the scheduled Draw, provided the Ticket
            has not been drawn, transferred, tampered with, or used in any manner.
          </p>
          <p>
            The full terms, timelines and exclusions are set out in the{" "}
            <a href="/refund" className="font-semibold text-gold underline underline-offset-2">
              Refund Policy
            </a>
            , which forms an integral part of these T&amp;C.
          </p>
        </>
      ),
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      content: (
        <>
          <p>
            <strong className="text-gold">This is a promotional lucky draw.</strong> It is not a
            lottery operated under any State or Central Government scheme, it is not a banking
            product, and it is not an investment, savings or fixed-deposit instrument. Participation
            is purely voluntary and based on chance, with no guaranteed return.
          </p>
          <p>
            Each Token represents a purchase of a chance to win a prize. The Company does not
            guarantee that any Participant will win. The Company reserves the right to modify,
            suspend, postpone or cancel the Draw, or any part of it, at any time and without prior
            notice, in the event of any technical failure, force majeure, government directive,
            public order issue, or any other circumstance beyond its reasonable control. In such
            event, the Company will refund all amounts received and intimate the Participants
            through WhatsApp and on the website.
          </p>
          <p>
            Nothing on this website constitutes financial, legal, tax or investment advice. The
            Company is not responsible for any loss arising from unauthorised use of a Ticket
            confirmation, or from any communication that appears to originate from the Company but
            is made by an impersonator. Participants must verify all payment links received on the
            official WhatsApp number published on this website.
          </p>
        </>
      ),
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: (
        <>
          <p>
            To the maximum extent permitted by law, the Company and its directors, officers,
            employees and agents shall not be liable for any indirect, incidental, special,
            consequential or punitive damages, or for any loss of profits, data, goodwill or
            opportunity, arising out of or in connection with the Draw or the use of this website.
          </p>
          <p>
            The Company's total aggregate liability for any and all claims relating to the Draw
            shall not exceed the total amount paid by the Participant for the relevant Ticket(s),
            except in cases of fraud, wilful misconduct or any liability that cannot be limited
            under applicable law, including under the Consumer Protection Act, 2019.
          </p>
        </>
      ),
    },
    {
      id: "force-majeure",
      title: "Force Majeure & Service Disruption",
      content: (
        <p>
          The Company shall not be in breach of these T&amp;C, nor liable for any failure or delay
          in performance, arising from causes beyond its reasonable control including natural
          disasters, epidemic or pandemic, war, terrorism, civil unrest, government orders,
          internet or telecommunications failures, third-party platform outages, or any act of
          God. The Company will use all reasonable endeavours to notify Participants and, where
          practicable, reschedule the Draw or issue refunds.
        </p>
      ),
    },
    {
      id: "governing-law",
      title: "Governing Law & Jurisdiction",
      content: (
        <p>
          These T&amp;C, the Privacy Policy and the Refund Policy are governed by and construed in
          accordance with {LEGAL.governingLaw}. Any dispute, controversy or claim arising out of
          or in connection with the Draw, including any question regarding its existence,
          interpretation or performance, shall be subject to the exclusive jurisdiction of the
          courts at Meerut, Uttar Pradesh, India. Prior to filing any legal proceedings, the
          Participant agrees to first attempt to resolve the matter through the Company's
          customer grievance process, contact details for which are provided in the Contact section
          of this website.
        </p>
      ),
    },
    {
      id: "changes",
      title: "Changes to These Terms",
      content: (
        <p>
          The Company may update these T&amp;C from time to time to reflect changes in law, the
          Draw process, prize structure or business operations. The revised version will be
          published on this page with an updated "Last updated" date, and Participants who have
          already booked will be notified of any material change through WhatsApp. Your continued
          participation after the effective date of a change constitutes your acceptance of the
          updated T&amp;C.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <>
          <p>
            For any questions, grievances or clarifications regarding these Terms, please reach
            out to us:
          </p>
          <List
            items={[
              `WhatsApp: ${CONTACT.whatsappDisplay}`,
              `Email: ${CONTACT.email}`,
              `Support hours: ${CONTACT.supportHours}`,
              `Registered office: ${LEGAL.registeredOffice}`,
              `Udyam Registration: ${UDYAM.registrationNumber}`,
            ]}
          />
          <p className="pt-1">
            We are committed to resolving every genuine complaint within seven (7) working days of
            receipt.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro={`These Terms & Conditions govern the ${SITE.name} promotional lucky draw conducted by ${UDYAM.enterpriseName} (Udyam Reg. No. ${UDYAM.registrationNumber}). Please read them carefully before booking a ticket. सभी शर्तें पढ़ें — a clear understanding keeps the celebration fair for everyone.`}
      lastUpdated={LEGAL.termsUpdated}
      sections={sections}
      footerNote={
        <>
          <p className="font-display font-bold text-gold">Acknowledgement</p>
          <p className="mt-2">
            By booking a token in the {SITE.name} Draw, you confirm that you have read,
            understood and agreed to these Terms &amp; Conditions, the Privacy Policy and the Refund
            Policy, and that you are at least {LEGAL.minAge} years of age.
          </p>
          <p className="mt-3 text-xs text-cream/55">
            Token packs at the time of publishing: {TOKEN_PACKS.map((p) => `${p.tokens} tokens ₹${p.price}`).join(" • ")}
          </p>
        </>
      }
    />
  );
}