export const siteConfig = {
  name: "Speak & Shine Kids Club",
  description:
    "Bursa'da 4-12 yaş çocuklar için eğlenceli, güvenli ve etkili İngilizce öğrenme deneyimi.",
  locale: "tr_TR",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://speakandshinekidsclub.com",
  phone: "+905015934345",
  phoneDisplay: "0 (501) 593 43 45",
  instagram: "https://www.instagram.com/speakandshinekidsclub/",
  city: "Bursa",
  country: "TR",
  address: "[Varsa fiziksel adres]",
  copyrightYear: 2026,
} as const;
