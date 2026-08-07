import Image from "next/image";
import { Clock3, UsersRound } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionReveal } from "@/components/common/section-reveal";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/programs";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Programlar",
  description: "4-12 yaş çocuklar için yaşa ve seviyeye uygun Speak & Shine Kids Club İngilizce programları.",
  path: "/programs",
});

const toneClasses = ["bg-peach", "bg-mint", "bg-sky"] as const;

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-mint/65 py-16 sm:py-24">
        <Container>
          <SectionReveal>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-coral">Programlarımız</p>
            <h1 className="mt-3 max-w-4xl text-balance text-4xl font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Yaş ve seviyeye uygun, özenle tasarlanmış programlarımızla çocuğunuzun İngilizce yolculuğu doğru adımlarla başlıyor.
            </h1>
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:gap-12">
            {programs.map((program, index) => (
              <SectionReveal
                key={program.title}
                className={`overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-soft lg:grid lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className={`relative min-h-72 ${toneClasses[index]}`}>
                  <Image src={program.image} alt={`${program.title} programını temsil eden görsel`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <p className="text-sm font-black text-coral">{program.ageRange}</p>
                  <h2 className="mt-2 text-3xl font-black tracking-tight text-ink sm:text-4xl">{program.title}</h2>
                  <p className="mt-5 text-lg font-semibold leading-8 text-ink/70">{program.detailedDescription}</p>
                  <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-cream p-4">
                      <dt className="flex items-center gap-2 text-sm font-black text-ink/55"><Clock3 aria-hidden="true" size={16} /> Süre</dt>
                      <dd className="mt-2 font-black text-ink">{program.duration}</dd>
                    </div>
                    <div className="rounded-2xl bg-cream p-4">
                      <dt className="flex items-center gap-2 text-sm font-black text-ink/55"><UsersRound aria-hidden="true" size={16} /> Grup büyüklüğü</dt>
                      <dd className="mt-2 font-black text-ink">{program.groupSize}</dd>
                    </div>
                  </dl>
                </div>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <SectionReveal className="rounded-[2rem] bg-ink px-6 py-10 text-center text-white sm:px-10 sm:py-14">
            <h2 className="text-balance text-3xl font-black tracking-tight sm:text-4xl">Hangi program çocuğunuza uygun emin değil misiniz?</h2>
            <p className="mt-4 text-lg font-semibold text-white/70">Ücretsiz danışmanlık için bize ulaşın.</p>
            <Button href="/contact#trial-form" variant="light" className="mt-7">Bize Ulaşın</Button>
          </SectionReveal>
        </Container>
      </section>
    </>
  );
}
