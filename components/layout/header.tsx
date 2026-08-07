import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { NavigationLinks } from "@/components/layout/navigation-links";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <div className="relative mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-20 lg:px-10">
        <Link
          href="/"
          aria-label="Speak & Shine Kids Club ana sayfa"
          className="group flex items-center gap-2.5 rounded-full focus-visible:outline-none"
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-[1rem] bg-sunshine text-lg shadow-sm transition-transform group-hover:-rotate-6 sm:size-10"
          >
            ✦
          </span>
          <span className="leading-none">
            <span className="block text-base font-black tracking-tight text-ink sm:text-lg">Speak &amp; Shine</span>
            <span className="mt-0.5 block text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-ink/55">
              Kids Club
            </span>
          </span>
        </Link>

        <NavigationLinks className="hidden items-center gap-0.5 lg:flex" />

        <div className="flex items-center gap-2">
          <Link
            href="/contact#trial-form"
            className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-3 text-sm font-extrabold text-white transition hover:bg-coral lg:inline-flex"
          >
            Ücretsiz Deneme
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.5} />
          </Link>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
