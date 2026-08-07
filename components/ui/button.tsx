import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "coral";
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children" | "className">;

const variantClasses = {
  dark: "bg-ink text-white hover:bg-coral",
  light: "bg-white text-ink hover:bg-sunshine",
  coral: "bg-coral text-white hover:bg-ink",
};

export function Button({ href, children, variant = "dark", className = "", ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-black transition focus-visible:outline-none ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
