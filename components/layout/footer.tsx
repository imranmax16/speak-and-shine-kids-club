import Link from "next/link";
import { Phone } from "lucide-react";

import { Container } from "@/components/common/container";
import { InstagramLink } from "@/components/common/social-icons";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white py-12">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="text-xl font-black tracking-tight text-ink">Speak &amp; Shine Kids Club</p>
            <p className="mt-3 max-w-xs font-semibold leading-7 text-ink/60">Çocuğunuz İngilizceyle Parlasın! ✨</p>
            <div className="mt-5"><InstagramLink /></div>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ink/50">Hızlı Linkler</p>
            <nav aria-label="Alt navigasyon" className="mt-4 grid gap-2">
              {navigationItems.filter((item) => ["/", "/about", "/programs", "/gallery", "/contact"].includes(item.href)).map((item) => (
                <Link key={item.href} href={item.href} className="w-fit font-bold text-ink/70 transition hover:text-coral">{item.label}</Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ink/50">İletişim</p>
            <a href={`tel:${siteConfig.phone}`} className="mt-4 flex w-fit items-center gap-2 font-black text-ink transition hover:text-coral">
              <Phone aria-hidden="true" size={17} /> {siteConfig.phoneDisplay}
            </a>
            <Link href="/privacy-policy" className="mt-4 block w-fit font-bold text-ink/70 transition hover:text-coral">Gizlilik Politikası</Link>
          </div>
        </div>
        <p className="mt-12 border-t border-ink/10 pt-6 text-sm font-bold text-ink/50">© {siteConfig.copyrightYear} Speak &amp; Shine Kids Club</p>
      </Container>
    </footer>
  );
}
