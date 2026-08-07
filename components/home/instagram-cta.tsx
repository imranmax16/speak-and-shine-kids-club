import { Instagram } from "lucide-react";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function InstagramCta() {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <div className="rounded-[2rem] bg-ink px-6 py-10 text-center text-white sm:px-10 sm:py-14">
          <Instagram aria-hidden="true" className="mx-auto text-sunshine" size={32} />
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Instagram&apos;da Bizi Takip Edin</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-semibold leading-8 text-white/70">
            Derslerimizden, etkinliklerimizden ve mutlu anlardan kesitler. Instagram sayfamızdan daha fazlasını keşfedebilirsiniz.
          </p>
          <Button href={siteConfig.instagram} target="_blank" rel="noreferrer" variant="light" className="mt-7">
            Instagram&apos;da Bizi Takip Edin
          </Button>
        </div>
      </Container>
    </section>
  );
}
