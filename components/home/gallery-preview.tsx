import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionReveal } from "@/components/common/section-reveal";
import { SectionTitle } from "@/components/common/section-title";
import { galleryImages } from "@/data/gallery";

export function GalleryPreview() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionReveal className="flex flex-wrap items-end justify-between gap-5">
          <SectionTitle eyebrow="Galeri" title="Kulübümüzden Kareler" />
          <Link href="/gallery" className="inline-flex items-center gap-1 font-black text-ink transition hover:text-coral">
            Galeriyi keşfedin <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.5} />
          </Link>
        </SectionReveal>
        <SectionReveal className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {galleryImages.map((image, index) => (
            <div key={image.src} className={`relative overflow-hidden rounded-3xl bg-sky ${index % 3 === 0 ? "aspect-[4/5]" : "aspect-square"}`}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover" />
            </div>
          ))}
        </SectionReveal>
      </Container>
    </section>
  );
}
