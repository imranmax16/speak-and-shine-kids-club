import { Heart, ShieldCheck, Sparkles } from "lucide-react";

import { Container } from "@/components/common/container";

const trustItems = [
  { label: "Oyun temelli", icon: Sparkles },
  { label: "Güvenli ve sevgi dolu", icon: Heart },
  { label: "Küçük gruplar", icon: ShieldCheck },
];

export function TrustSection() {
  return (
    <section aria-label="Öne çıkan değerler" className="pb-16 sm:pb-24">
      <Container>
        <div className="grid overflow-hidden rounded-3xl border border-ink/10 bg-white sm:grid-cols-3">
          {trustItems.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3 border-b border-ink/10 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:p-6">
              <span className="grid size-10 place-items-center rounded-full bg-sunshine/45 text-ink"><Icon aria-hidden="true" size={19} /></span>
              <p className="font-black text-ink">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
