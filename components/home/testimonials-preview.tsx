import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionReveal } from "@/components/common/section-reveal";
import { SectionTitle } from "@/components/common/section-title";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/data/testimonials";

export function TestimonialsPreview() {
  return (
    <section className="bg-peach/45 py-16 sm:py-24">
      <Container>
        <SectionReveal className="flex flex-wrap items-end justify-between gap-5">
          <SectionTitle eyebrow="Veli Yorumları" title="Velilerimiz Ne Diyor?" />
          <Link href="/testimonials" className="inline-flex items-center gap-1 font-black text-ink transition hover:text-coral">
            Tüm yorumlar <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.5} />
          </Link>
        </SectionReveal>
        <SectionReveal className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => <TestimonialCard key={testimonial.quote} testimonial={testimonial} />)}
        </SectionReveal>
      </Container>
    </section>
  );
}
