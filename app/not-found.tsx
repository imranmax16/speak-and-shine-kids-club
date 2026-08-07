import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/common/container";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | Speak & Shine Kids Club",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-cream py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl rounded-[2rem] bg-sky/55 px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-7xl font-black tracking-tight text-coral sm:text-8xl">404</p>
          <h1 className="mt-5 text-3xl font-black tracking-tight text-ink sm:text-4xl">Aradığınız sayfayı bulamadık.</h1>
          <p className="mt-4 font-semibold leading-7 text-ink/65">Belki de aradığınız sayfa başka bir yerde parlıyordur.</p>
          <Link href="/" className="mt-8 inline-flex items-center rounded-full bg-ink px-5 py-3.5 text-sm font-black text-white transition hover:bg-coral">
            Ana Sayfaya Dön
          </Link>
        </div>
      </Container>
    </main>
  );
}
