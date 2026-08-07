import { siteConfig } from "@/data/site";
import type { ContactFormValues } from "@/types/forms";

export function createWhatsAppInquiryUrl(values: ContactFormValues) {
  const message = [
    "Merhaba, ücretsiz deneme dersi hakkında bilgi almak istiyorum.",
    "",
    `Veli Adı Soyadı: ${values.parentName}`,
    `Telefon Numarası: ${values.phone}`,
    `Çocuğun Yaşı: ${values.childAge}`,
    `Mesaj: ${values.message}`,
  ].join("\n");

  return `https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(message)}`;
}
