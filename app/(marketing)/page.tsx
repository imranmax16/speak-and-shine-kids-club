import { createMetadata } from "@/lib/metadata";
import { AboutPreview } from "@/components/home/about-preview";
import { FinalCtaBanner } from "@/components/home/final-cta-banner";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { Hero } from "@/components/home/hero";
import { InstagramCta } from "@/components/home/instagram-cta";
import { ProgramsPreview } from "@/components/home/programs-preview";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { TrustSection } from "@/components/home/trust-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export const metadata = createMetadata({
  title: "Çocuğunuz İngilizceyle Parlasın!",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <AboutPreview />
      <ProgramsPreview />
      <WhyChooseUs />
      <TestimonialsPreview />
      <GalleryPreview />
      <InstagramCta />
      <FinalCtaBanner />
    </>
  );
}
