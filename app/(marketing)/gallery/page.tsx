import Image from "next/image";
import { Instagram, Play } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionReveal } from "@/components/common/section-reveal";
import { Button } from "@/components/ui/button";
import { galleryImages } from "@/data/gallery";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Galeri",
  description: "Speak & Shine Kids Club derslerinden, etkinliklerinden ve mutlu anlarından kesitler.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <section className="bg-peach/60 py-16 sm:py-24">
        <Container>
          <SectionReveal>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-coral">Galeri</p>
            <h1 className="mt-3 text-balance text-4xl font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">Kulübümüzden Kareler</h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-ink/70">
              Derslerimizden, etkinliklerimizden ve mutlu anlardan kesitler. Instagram sayfamızdan daha fazlasını keşfedebilirsiniz.
            </p>
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionReveal className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
            {galleryImages.map((image, index) => (
              <figure
                key={image.src}
                className={`relative overflow-hidden rounded-3xl bg-sky shadow-soft ${
                  index === 0 || index === 5 ? "col-span-2 aspect-[16/10] sm:col-span-1 sm:aspect-[4/5]" : "aspect-square"
                }`}
              >
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover transition duration-500 hover:scale-105" />
              </figure>
            ))}
          </SectionReveal>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <SectionReveal className="grid overflow-hidden rounded-[2rem] bg-ink text-white lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-64 bg-coral p-8 sm:p-12">
              <span className="grid size-14 place-items-center rounded-full bg-white text-coral shadow-soft"><Play aria-hidden="true" size={23} fill="currentColor" /></span>
              <p className="mt-7 text-sm font-black uppercase tracking-[0.14em] text-white/75">Instagram Reels</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Daha fazla anı keşfedin.</h2>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <Instagram aria-hidden="true" className="text-sunshine" size={30} />
              <p className="mt-5 text-lg font-semibold leading-8 text-white/70">
                Derslerimizden, etkinliklerimizden ve mutlu anlardan kesitler. Instagram sayfamızdan daha fazlasını keşfedebilirsiniz.
              </p>
              <Button href={siteConfig.instagram} target="_blank" rel="noreferrer" variant="light" className="mt-7 w-fit">
                Instagram&apos;da Bizi Takip Edin →
              </Button>
            </div>
          </SectionReveal>
        </Container>
      </section>
    </>
  );
}
