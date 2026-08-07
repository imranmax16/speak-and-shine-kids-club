import { Container } from "@/components/common/container";
import { SectionReveal } from "@/components/common/section-reveal";
import { SectionTitle } from "@/components/common/section-title";
import { ProgramCard } from "@/components/ui/program-card";
import { programs } from "@/data/programs";

export function ProgramsPreview() {
  return (
    <section id="programlar" className="bg-white py-16 sm:py-24">
      <Container>
        <SectionReveal><SectionTitle eyebrow="Programlarımız" title="Her yaş için doğru başlangıç" /></SectionReveal>
        <SectionReveal className="mt-10 grid gap-5 md:grid-cols-3">
          {programs.map((program) => <ProgramCard key={program.title} program={program} />)}
        </SectionReveal>
      </Container>
    </section>
  );
}
