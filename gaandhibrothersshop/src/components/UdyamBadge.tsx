import { BadgeCheck, ExternalLink, ShieldCheck } from "lucide-react";
import { UDYAM, CONTACT } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";

interface UdyamBadgeProps {
    /** "compact" = inline pill; "card" = full certificate card */
    variant?: "compact" | "card";
    className?: string;
}

/**
 * Displays the official Udyam Registration details.
 * Use `variant="compact"` for footers/navbars and `variant="card"`
 * for About Us / Terms / Contact pages.
 */
export function UdyamBadge({ variant = "card", className = "" }: UdyamBadgeProps) {
    if (variant === "compact") {
        return (
            <a
                href={UDYAM.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-200 transition-colors hover:bg-emerald-400/20 ${className}`}
                title="Government of India Udyam Registration — Click to verify"
            >
                <BadgeCheck className="h-3.5 w-3.5" />
                Udyam Registered · {UDYAM.registrationNumber}
            </a>
        );
    }

    return (
        <Reveal className={className}>
            <div className="glass-card gold-border overflow-hidden rounded-3xl">
                {/* Header strip */}
                <div className="flex items-center justify-between gap-3 border-b border-gold/20 bg-gradient-to-r from-emerald-500/15 via-gold/10 to-ember/10 px-6 py-4">
                    <div className="flex items-center gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/20 text-emerald-300">
                            <ShieldCheck className="h-6 w-6" />
                        </span>
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                                Government of India
                            </p>
                            <p className="font-display text-base font-bold text-gold-gradient">
                                Udyam Registration Certificate
                            </p>
                        </div>
                    </div>
                    <a
                        href={UDYAM.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-[11px] font-semibold text-gold transition-colors hover:bg-gold/20"
                    >
                        Verify <ExternalLink className="h-3 w-3" />
                    </a>
                </div>

                {/* Body */}
                <div className="p-6">
                    <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                        <Row label="Udyam Registration No." value={UDYAM.registrationNumber} highlight />
                        <Row label="Name of Enterprise" value={UDYAM.enterpriseName} highlight />
                        <Row label="Enterprise Type" value={`${UDYAM.enterpriseType} (${UDYAM.classificationYear})`} />
                        <Row label="Major Activity" value={UDYAM.majorActivity} />
                        <Row label="Classification Date" value={UDYAM.classificationDate} />
                        <Row label="Date of Registration" value={UDYAM.registrationDate} />
                        <Row label="Date of Incorporation" value={UDYAM.incorporationDate} />
                        <Row label="Social Category" value={UDYAM.socialCategory} />

                        <div className="sm:col-span-2">
                            <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-cream/45">
                                Official Address of Enterprise
                            </dt>
                            <dd className="mt-1 text-sm leading-relaxed text-cream/85">
                                Flat/Door/Block No. 484, Supriya Bharti, New Gobind Puri, Peer Wali Gali,
                                Block Kanker Khera, Meerut, {UDYAM.state} – {UDYAM.pin}
                            </dd>
                        </div>

                        <div className="sm:col-span-2">
                            <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-cream/45">
                                National Industry Classification Code(s)
                            </dt>
                            <dd className="mt-2 space-y-1.5">
                                {UDYAM.nicCodes.map((nic) => (
                                    <p key={nic.code} className="text-sm text-cream/75">
                                        <span className="font-semibold text-gold">{nic.code}</span> — {nic.description}
                                    </p>
                                ))}
                            </dd>
                        </div>

                        <div className="sm:col-span-2 grid gap-4 sm:grid-cols-2">
                            <Row label="Mobile" value={`+91 ${CONTACT.whatsappDisplay.replace("+91 ", "")}`} />
                            <Row label="Email" value={CONTACT.email} />
                        </div>
                    </dl>

                    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-gold/15 pt-4 text-[11px] text-cream/50">
                        <span>District Industries Centre: {UDYAM.districtIndustriesCentre}</span>
                        <span className="hidden sm:inline">·</span>
                        <span>MSME-DFO: {UDYAM.msmeDfo}</span>
                    </div>

                    <p className="mt-3 text-[11px] leading-relaxed text-cream/40">
                        This is a computer-generated statement, no signature required. Printed from{" "}
                        <a
                            href={UDYAM.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold underline underline-offset-2"
                        >
                            udyamregistration.gov.in
                        </a>{" "}
                        — verify the registration number above for authenticity.
                    </p>
                </div>
            </div>
        </Reveal>
    );
}

function Row({
    label,
    value,
    highlight,
}: {
    label: string;
    value: string;
    highlight?: boolean;
}) {
    return (
        <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-cream/45">
                {label}
            </dt>
            <dd
                className={`mt-0.5 text-sm ${highlight ? "font-display font-bold text-gold" : "text-cream/85"
                    }`}
            >
                {value}
            </dd>
        </div>
    );
}