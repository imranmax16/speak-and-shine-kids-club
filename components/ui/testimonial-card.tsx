import { Quote } from "lucide-react";

import type { Testimonial } from "@/types/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="rounded-4xl border border-ink/10 bg-white p-7 shadow-soft sm:p-8">
      <Quote aria-hidden="true" className="text-coral" size={28} fill="currentColor" />
      <blockquote className="mt-5 text-xl font-extrabold leading-8 tracking-tight text-ink">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6">
        <p className="text-sm font-black text-ink/55">— {testimonial.author}</p>
        {testimonial.childDetails ? <p className="mt-1 text-sm font-bold text-ink/45">{testimonial.childDetails}</p> : null}
      </figcaption>
    </figure>
  );
}
