import { Container } from "@/components/common/container";
import { SectionReveal } from "@/components/common/section-reveal";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/data/testimonials";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Veli Yorumları",
  description: "Speak & Shine Kids Club hakkında velilerimizin deneyimleri ve yorumları.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-sky/55 py-16 sm:py-24">
        <Container>
          <SectionReveal>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-coral">Veli Yorumları</p>
            <h1 className="mt-3 text-balance text-4xl font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">Velilerimiz Ne Diyor?</h1>
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionReveal className="grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial) => <TestimonialCard key={testimonial.quote} testimonial={testimonial} />)}
          </SectionReveal>
        </Container>
      </section>
    </>
  );
}
