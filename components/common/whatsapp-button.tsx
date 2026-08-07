import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.phone.replace("+", "")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp üzerinden bize ulaşın"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 focus-visible:outline-none"
    >
      <MessageCircle aria-hidden="true" size={26} fill="currentColor" strokeWidth={2.2} />
    </a>
  );
}
