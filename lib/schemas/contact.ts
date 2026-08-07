import { z } from "zod";

export const contactSchema = z.object({
  parentName: z.string().trim().min(2, "Lütfen ad soyadınızı girin.").max(80, "Ad soyad en fazla 80 karakter olabilir."),
  phone: z.string().trim().min(10, "Lütfen geçerli bir telefon numarası girin.").max(20, "Lütfen geçerli bir telefon numarası girin."),
  childAge: z.string().min(1, "Lütfen çocuğunuzun yaşını seçin."),
  message: z.string().trim().min(10, "Mesajınız en az 10 karakter olmalıdır.").max(1000, "Mesajınız en fazla 1000 karakter olabilir."),
});
