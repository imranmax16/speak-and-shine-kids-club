import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

export function FinalCtaBanner() {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <div className="rounded-[2rem] bg-coral px-6 py-10 text-center text-white sm:px-10 sm:py-14">
          <h2 className="text-balance text-3xl font-black tracking-tight sm:text-4xl">Çocuğunuz için doğru programı birlikte bulalım.</h2>
          <Button href="/contact#trial-form" variant="light" className="mt-7 gap-1.5">
            Bize Ulaşın <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.5} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
