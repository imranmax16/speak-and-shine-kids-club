import Image from "next/image";
import { Heart, Music2, Puzzle, UsersRound } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionReveal } from "@/components/common/section-reveal";
import { SectionTitle } from "@/components/common/section-title";
import { TeacherCard } from "@/components/ui/teacher-card";
import { teachers } from "@/data/teachers";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Hakkımızda",
  description: "Speak & Shine Kids Club'ın hikâyesini, eğitim felsefesini ve eğitmen yaklaşımını keşfedin.",
  path: "/about",
});

const principles = [
  { icon: Puzzle, label: "Oyun" },
  { icon: Music2, label: "Müzik" },
  { icon: UsersRound, label: "Drama" },
  { icon: Heart, label: "Etkileşimli aktiviteler" },
];

const reasons = [
  "Deneyimli ve çocuk gelişimi konusunda eğitimli kadro",
  "Küçük grup büyüklükleri",
  "Oyun temelli, stressiz öğrenme ortamı",
  "Düzenli veli bilgilendirmeleri",
  "Güvenli ve sevgi dolu bir atmosfer",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-sky/55 py-16 sm:py-24">
        <Container>
          <SectionReveal>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-coral">Speak &amp; Shine Kids Club</p>
            <h1 className="mt-3 max-w-3xl text-balance text-4xl font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">Biz Kimiz?</h1>
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionReveal className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <SectionTitle eyebrow="Hikâyemiz" title="İngilizceyi doğal bir deneyime dönüştürüyoruz." />
              <p className="mt-6 text-lg font-semibold leading-8 text-ink/70">
                Speak &amp; Shine Kids Club, çocukların yeni bir dili en doğal şekilde öğrenebileceği bir ortam yaratma fikriyle kuruldu. Amacımız sadece kelime ve gramer öğretmek değil; çocuklarımızın İngilizceyi gerçek hayatta kullanma özgüveni kazanmasını sağlamak.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-peach shadow-soft">
              <Image src="/images/gallery/gallery-01.svg" alt="Kulüp ortamını temsil eden görsel" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </SectionReveal>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <SectionReveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionTitle eyebrow="Eğitim Felsefemiz" title="Her çocuk farklı öğrenir." />
            <div>
              <p className="text-lg font-semibold leading-8 text-ink/70">
                Bu yüzden derslerimizi oyun, müzik, drama ve etkileşimli aktivitelerle zenginleştiriyor; küçük gruplarla her çocuğa bireysel ilgi gösteriyoruz.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {principles.map(({ icon: Icon, label }) => (
                  <div key={label} className="rounded-3xl bg-mint p-4 text-center">
                    <span className="mx-auto grid size-10 place-items-center rounded-full bg-white text-coral"><Icon aria-hidden="true" size={20} /></span>
                    <p className="mt-3 text-sm font-black text-ink">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionReveal className="rounded-[2rem] bg-peach px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
            <SectionTitle eyebrow="Neden Biz?" title="Çocukların gelişimine özenle eşlik ediyoruz." />
            <ul className="mt-9 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => (
                <li key={reason} className="rounded-2xl bg-white/70 p-4 font-extrabold leading-6 text-ink">{reason}</li>
              ))}
            </ul>
          </SectionReveal>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <SectionReveal><SectionTitle eyebrow="Eğitmen Kadromuz" title="Çocukların yolculuğuna sevgiyle eşlik eden ekip." /></SectionReveal>
          <SectionReveal className="mt-10 grid gap-5 md:grid-cols-3">
            {teachers.map((teacher) => <TeacherCard key={teacher.id} teacher={teacher} />)}
          </SectionReveal>
        </Container>
      </section>
    </>
  );
}
