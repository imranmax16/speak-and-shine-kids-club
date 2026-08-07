import { Check } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionReveal } from "@/components/common/section-reveal";
import { SectionTitle } from "@/components/common/section-title";

const reasons = [
  "Deneyimli ve çocuk gelişimi konusunda eğitimli kadro",
  "Küçük grup büyüklükleri",
  "Oyun temelli, stressiz öğrenme ortamı",
  "Düzenli veli bilgilendirmeleri",
  "Güvenli ve sevgi dolu bir atmosfer",
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionReveal className="rounded-[2rem] bg-sky px-6 py-10 sm:px-10 sm:py-14 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-16">
          <SectionTitle eyebrow="Neden Biz?" title="Her çocuk kendi ışığıyla öğrenir." />
          <ul className="mt-9 grid gap-4 lg:mt-0">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3 rounded-2xl bg-white/65 p-4 font-extrabold text-ink">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-sunshine"><Check aria-hidden="true" size={15} strokeWidth={3} /></span>
                {reason}
              </li>
            ))}
          </ul>
        </SectionReveal>
      </Container>
    </section>
  );
}
