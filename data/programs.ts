import type { Program } from "@/types/content";

export const programs: Program[] = [
  {
    title: "Minik Kâşifler",
    ageRange: "4-6 yaş",
    description: "Şarkılar, oyunlar ve hikayelerle ilk adımlar",
    detailedDescription: "Bu yaş grubunda amacımız İngilizceyi bir oyun gibi sevdirmek. Şarkılar, renkli görseller ve basit hikayelerle çocuklar ilk kelimelerini eğlenerek öğreniyor.",
    duration: "[XX dakika] / hafta",
    groupSize: "[X kişi]",
    image: "/images/programs/minik-kasifler.svg",
    tone: "peach",
  },
  {
    title: "Küçük Maceracılar",
    ageRange: "7-9 yaş",
    description: "Konuşma pratiği ağırlıklı, eğlenceli aktiviteler",
    detailedDescription: "Konuşma pratiğinin ön planda olduğu bu programda çocuklar günlük hayatta kullanabilecekleri cümleler kurmaya başlıyor. Drama ve rol yapma etkinlikleriyle özgüven kazanıyorlar.",
    duration: "[XX dakika] / hafta",
    groupSize: "[X kişi]",
    image: "/images/programs/kucuk-maceracilar.svg",
    tone: "mint",
  },
  {
    title: "Genç Yıldızlar",
    ageRange: "10-12 yaş",
    description: "Akıcılık ve özgüven odaklı ileri seviye program",
    detailedDescription: "Akıcılığı artırmaya odaklanan bu seviyede tartışma, sunum ve yaratıcı yazma etkinlikleriyle çocuklar İngilizceyi özgürce kullanmayı öğreniyor.",
    duration: "[XX dakika] / hafta",
    groupSize: "[X kişi]",
    image: "/images/programs/genc-yildizlar.svg",
    tone: "sky",
  },
];
