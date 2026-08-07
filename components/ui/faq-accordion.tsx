"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const idPrefix = useId();

  return (
    <div className="divide-y divide-ink/10 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${idPrefix}-${index}`;

        return (
          <div key={item.question}>
            <h2>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-lg font-black text-ink transition hover:bg-cream sm:px-7 sm:py-6"
              >
                {item.question}
                <ChevronDown aria-hidden="true" size={22} className={`shrink-0 text-coral transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
            </h2>
            <div id={panelId} hidden={!isOpen} className="px-5 pb-5 sm:px-7 sm:pb-6">
              <p className="max-w-3xl font-semibold leading-7 text-ink/70">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
