"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { NavigationLinks } from "@/components/layout/navigation-links";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
        onClick={() => setIsOpen((current) => !current)}
        className="grid size-11 place-items-center rounded-full border border-ink/10 bg-white text-ink shadow-soft transition hover:border-coral/40 hover:text-coral"
      >
        {isOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-[calc(100%+0.75rem)] rounded-3xl border border-ink/10 bg-cream p-4 shadow-lift"
        >
          <NavigationLinks
            onNavigate={() => setIsOpen(false)}
            className="flex flex-col gap-1"
          />
          <Link
            href="/contact#trial-form"
            onClick={() => setIsOpen(false)}
            className="mt-3 flex items-center justify-center rounded-full bg-ink px-4 py-3 text-sm font-extrabold text-white transition hover:bg-coral"
          >
            Ücretsiz Deneme Dersine Katıl
          </Link>
        </div>
      ) : null}
    </div>
  );
}
