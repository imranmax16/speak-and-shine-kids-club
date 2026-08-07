import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionReveal } from "@/components/common/section-reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "İletişim",
  description: "Speak & Shine Kids Club ile iletişime geçin ve çocuğunuz için ücretsiz deneme dersi ayırtın.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-sky/55 py-16 sm:py-24">
        <Container>
          <SectionReveal>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-coral">İletişim</p>
            <h1 className="mt-3 text-balance text-4xl font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">Bize Ulaşın</h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-ink/70">Çocuğunuz için ücretsiz deneme dersi ayırtmak ya da sorularınızı iletmek için formu doldurun, size en kısa sürede dönüş yapalım.</p>
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
            <SectionReveal>
              <h2 className="text-2xl font-black tracking-tight text-ink">Diğer İletişim Kanalları</h2>
              <div className="mt-6 grid gap-4">
                <a href={`https://wa.me/${siteConfig.phone.replace("+", "")}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-ink/10 bg-white p-5 font-black text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-coral">
                  <span className="grid size-11 place-items-center rounded-full bg-mint text-ink"><MessageCircle aria-hidden="true" size={20} /></span>
                  <span><span className="block text-sm text-ink/50">WhatsApp</span>{siteConfig.phoneDisplay}</span>
                </a>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 rounded-3xl border border-ink/10 bg-white p-5 font-black text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-coral">
                  <span className="grid size-11 place-items-center rounded-full bg-peach text-ink"><Phone aria-hidden="true" size={20} /></span>
                  <span><span className="block text-sm text-ink/50">Telefon</span>{siteConfig.phoneDisplay}</span>
                </a>
                <div className="flex items-center gap-4 rounded-3xl border border-ink/10 bg-white p-5 font-black text-ink shadow-soft">
                  <span className="grid size-11 place-items-center rounded-full bg-sky text-ink"><MapPin aria-hidden="true" size={20} /></span>
                  <span><span className="block text-sm text-ink/50">Adres</span>{siteConfig.address}</span>
                </div>
                <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-ink/10 bg-white p-5 font-black text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-coral">
                  <span className="grid size-11 place-items-center rounded-full bg-sunshine/60 text-ink"><Instagram aria-hidden="true" size={20} /></span>
                  <span><span className="block text-sm text-ink/50">Sosyal Medya</span>Instagram</span>
                </a>
              </div>
            </SectionReveal>
            <SectionReveal><ContactForm /></SectionReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
