import { Container } from "@/components/common/container";
import { SectionReveal } from "@/components/common/section-reveal";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { faqItems } from "@/data/faq";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Sıkça Sorulan Sorular",
  description: "Speak & Shine Kids Club dersleri, kayıt süreci ve ücretsiz deneme dersi hakkında sıkça sorulan sorular.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <section className="bg-mint/65 py-16 sm:py-24">
        <Container>
          <SectionReveal>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-coral">Sıkça Sorulan Sorular</p>
            <h1 className="mt-3 max-w-3xl text-balance text-4xl font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">Sıkça Sorulan Sorular</h1>
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-4xl">
          <SectionReveal><FaqAccordion items={faqItems} /></SectionReveal>
          <SectionReveal className="mt-10 rounded-3xl bg-peach p-7 text-center sm:p-10">
            <p className="text-xl font-black tracking-tight text-ink">Çocuğunuz için doğru programı birlikte bulalım.</p>
            <Button href="/contact#trial-form" variant="dark" className="mt-5">Bize Ulaşın</Button>
          </SectionReveal>
        </Container>
      </section>
    </>
  );
}
