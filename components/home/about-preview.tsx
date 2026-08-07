import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { SectionReveal } from "@/components/common/section-reveal";
import { SectionTitle } from "@/components/common/section-title";

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionReveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <SectionTitle eyebrow="Speak & Shine Kids Club" title="Biz Kimiz?" />
          <div>
            <p className="text-lg font-semibold leading-8 text-ink/70">
              Speak &amp; Shine Kids Club&apos;da çocuklar sadece İngilizce öğrenmiyor; özgüven kazanıyor, yeni arkadaşlıklar kuruyor ve öğrenmeyi seviyor. Oyun temelli yöntemlerimiz ve deneyimli eğitmen kadromuzla her çocuğun kendi hızında gelişmesine destek oluyoruz.
            </p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-1 font-black text-ink transition hover:text-coral">
              Hikâyemizi keşfedin <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
