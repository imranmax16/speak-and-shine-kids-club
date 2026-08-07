import { Instagram } from "lucide-react";

import { siteConfig } from "@/data/site";

export function InstagramLink({ label = "Instagram" }: { label?: string }) {
  return (
    <a
      href={siteConfig.instagram}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label}: ${siteConfig.name}`}
      className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-coral hover:bg-coral hover:text-white"
    >
      <Instagram aria-hidden="true" size={18} />
    </a>
  );
}
