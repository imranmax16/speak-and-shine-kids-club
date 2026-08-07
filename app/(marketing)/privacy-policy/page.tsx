import { Container } from "@/components/common/container";
import { SectionReveal } from "@/components/common/section-reveal";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Gizlilik Politikası",
  description: "Speak & Shine Kids Club web sitesi gizlilik politikası ve kişisel veri işleme açıklamaları.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-4xl">
        <SectionReveal>
          <p className="text-sm font-black uppercase tracking-[0.14em] text-coral">Gizlilik Politikası</p>
          <h1 className="mt-3 text-balance text-4xl font-black tracking-tight text-ink sm:text-5xl">Gizlilik Politikası</h1>
          <p className="mt-5 text-sm font-bold text-ink/50">Son güncelleme: 6 Ağustos 2026</p>
        </SectionReveal>

        <SectionReveal className="mt-10 space-y-10 rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft sm:p-10">
          <section>
            <h2 className="text-2xl font-black tracking-tight text-ink">1. Veri sorumlusu ve iletişim</h2>
            <p className="mt-4 font-semibold leading-8 text-ink/70">
              Bu politika, {siteConfig.name} web sitesini ziyaret eden kişilerin kişisel verilerinin işlenmesine ilişkin açıklamaları içerir. Gizlilikle ilgili talepleriniz için {siteConfig.phoneDisplay} numaralı telefon ve WhatsApp hattı üzerinden bize ulaşabilirsiniz.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black tracking-tight text-ink">2. Toplanan bilgiler</h2>
            <p className="mt-4 font-semibold leading-8 text-ink/70">
              Ücretsiz deneme dersi iletişim formunda veli adı soyadı, telefon numarası, çocuğun yaşı ve mesajınız istenir. Bu bilgiler, talebinize yanıt vermek ve uygun program hakkında iletişim kurmak amacıyla kullanılır.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black tracking-tight text-ink">3. WhatsApp üzerinden iletişim</h2>
            <p className="mt-4 font-semibold leading-8 text-ink/70">
              Formu gönderdiğinizde bilgileriniz, onayınızla önceden doldurulmuş bir WhatsApp mesajı oluşturmak için kullanılır. Web sitesi form verilerinizi kendi veritabanında saklamaz. WhatsApp üzerinden paylaşılan veriler, WhatsApp&apos;ın kendi gizlilik koşullarına da tabidir.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black tracking-tight text-ink">4. Veri güvenliği ve saklama</h2>
            <p className="mt-4 font-semibold leading-8 text-ink/70">
              Kişisel verilere yalnızca iletişim talebini yönetmek için gerekli yetkili kişiler erişir. WhatsApp aracılığıyla iletilen talep verilerinin saklama süresi ve silme süreçleri, kulübün güncel operasyonel ve yasal yükümlülüklerine göre belirlenir.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black tracking-tight text-ink">5. Haklarınız</h2>
            <p className="mt-4 font-semibold leading-8 text-ink/70">
              6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltme veya silme talep etme ve kanuna aykırı işleme nedeniyle zararınızın giderilmesini talep etme haklarına sahipsiniz. Taleplerinizi yukarıdaki iletişim kanallarından iletebilirsiniz.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black tracking-tight text-ink">6. Güncellemeler</h2>
            <p className="mt-4 font-semibold leading-8 text-ink/70">
              Bu politika, hizmetlerimiz veya yasal yükümlülüklerimizdeki değişikliklere göre güncellenebilir. Güncel metin bu sayfada yayımlanır.
            </p>
          </section>
        </SectionReveal>
      </Container>
    </section>
  );
}
