import Image from "next/image";
import { ArrowDown } from "lucide-react";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="overflow-hidden pb-12 pt-10 sm:pb-16 sm:pt-16 lg:pb-24 lg:pt-20">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-mint px-6 py-12 sm:rounded-[2.5rem] sm:px-10 sm:py-16 lg:grid lg:min-h-[37rem] lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-10 lg:px-16">
          <div className="absolute -left-16 -top-16 -z-10 size-56 rounded-full bg-sunshine/45 blur-2xl" />
          <div className="absolute -bottom-28 right-1/3 -z-10 size-72 rounded-full bg-sky/80 blur-2xl" />
          <div className="relative max-w-xl">
            <p className="mb-5 inline-flex rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm font-black text-ink">
              Bursa&apos;da 4-12 yaş çocuklar için
            </p>
            <h1 className="text-balance text-4xl font-black leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Çocuğunuz İngilizceyle Parlasın! <span aria-hidden="true">✨</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg font-semibold leading-8 text-ink/70 sm:text-xl">
              Eğlenceli, güvenli ve etkili bir ortamda çocuklar için İngilizce öğrenme deneyimi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact#trial-form">Ücretsiz Deneme Dersine Katıl</Button>
              <a
                href="#programlar"
                className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-black text-ink transition hover:text-coral"
              >
                Programları keşfedin <ArrowDown aria-hidden="true" size={17} />
              </a>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[2rem] border-8 border-white/60 bg-peach shadow-lift lg:max-w-none">
              <Image
                src="/images/hero/hero-main.svg"
                alt="Speak & Shine Kids Club'da öğrenen çocukları temsil eden illüstrasyon"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-4 py-3 shadow-soft sm:-left-6">
              <p className="text-sm font-black text-ink">Oyunla öğrenme</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
