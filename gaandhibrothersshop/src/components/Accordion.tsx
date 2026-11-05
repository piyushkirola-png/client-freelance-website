import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Index of the item opened by default */
  defaultOpen?: number;
}

/** Accessible FAQ accordion with smooth height transitions. */
export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`glass-card gold-border overflow-hidden rounded-2xl transition-colors duration-300 ${
              isOpen ? "bg-gold/[0.08]" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
            >
              <span className="flex items-start gap-3">
                <span className="mt-0.5 text-lg">🪔</span>
                <span
                  className={`font-display text-base font-semibold transition-colors sm:text-lg ${
                    isOpen ? "text-gold" : "text-cream"
                  }`}
                >
                  {item.question}
                </span>
              </span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 border-gold bg-gold text-maroon"
                    : "border-gold/40 text-gold/80"
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>

            <div
              className="grid transition-all duration-500 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 pl-14 text-sm leading-relaxed text-cream/70 sm:px-7 sm:pl-16 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
