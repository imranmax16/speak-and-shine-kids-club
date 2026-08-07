"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/data/navigation";

type NavigationLinksProps = {
  onNavigate?: () => void;
  className?: string;
};

export function NavigationLinks({ onNavigate, className = "" }: NavigationLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Ana navigasyon" className={className}>
      {navigationItems.map((item) => {
        const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            onClick={onNavigate}
            className={`rounded-full px-3 py-2 text-sm font-extrabold transition-colors hover:text-coral focus-visible:outline-none ${
              isActive ? "text-coral" : "text-ink/75"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
