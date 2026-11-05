import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import { LEGAL } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";

/** Promotional-lucky-draw disclaimer shown on the home page. */
export function DisclaimerNote() {
  return (
    <Reveal>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex items-start gap-3 rounded-2xl border border-amber-400/25 bg-amber-400/[0.07] px-5 py-4">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
          <p className="text-sm leading-relaxed text-amber-100/85">
            <span className="font-bold">{LEGAL.disclaimer}</span>{" "}
            <Link to="/terms" className="font-semibold text-gold underline underline-offset-2">
              Terms &amp; Conditions
            </Link>{" "}
            ·{" "}
            <Link to="/refund" className="font-semibold text-gold underline underline-offset-2">
              Refund Policy
            </Link>{" "}
            ·{" "}
            <Link to="/privacy" className="font-semibold text-gold underline underline-offset-2">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </Reveal>
  );
}
