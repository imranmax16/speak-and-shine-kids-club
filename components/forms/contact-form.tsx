"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";

import { InputField, TextareaField } from "@/components/forms/form-field";
import { createWhatsAppInquiryUrl } from "@/lib/contact-submission";
import { contactSchema } from "@/lib/schemas/contact";
import type { ContactFormValues } from "@/types/forms";

const ages = Array.from({ length: 9 }, (_, index) => String(index + 4));

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { parentName: "", phone: "", childAge: "", message: "" },
  });

  const onSubmit = (values: ContactFormValues) => {
    window.open(createWhatsAppInquiryUrl(values), "_blank", "noopener,noreferrer");
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="rounded-[2rem] bg-white p-6 shadow-lift sm:p-9" id="trial-form">
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField id="parentName" label="Veli Adı Soyadı" autoComplete="name" error={errors.parentName?.message} {...register("parentName")} />
        <InputField id="phone" label="Telefon Numarası" type="tel" inputMode="tel" autoComplete="tel" error={errors.phone?.message} {...register("phone")} />
      </div>
      <div className="mt-5">
        <label htmlFor="childAge" className="mb-2 block text-sm font-black text-ink">Çocuğun Yaşı</label>
        <select
          id="childAge"
          aria-invalid={Boolean(errors.childAge)}
          aria-describedby={errors.childAge ? "childAge-error" : undefined}
          className={`w-full rounded-2xl border bg-cream px-4 py-3.5 font-semibold text-ink ${errors.childAge ? "border-coral" : "border-ink/15 focus:border-coral"}`}
          {...register("childAge")}
        >
          <option value="">Yaş seçin</option>
          {ages.map((age) => <option key={age} value={age}>{age}</option>)}
        </select>
        {errors.childAge ? <p id="childAge-error" className="mt-2 text-sm font-bold text-coral">{errors.childAge.message}</p> : null}
      </div>
      <div className="mt-5">
        <TextareaField id="message" label="Mesajınız" placeholder="Mesajınızı yazın" error={errors.message?.message} {...register("message")} />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 text-sm font-black text-white transition hover:bg-coral disabled:cursor-not-allowed disabled:opacity-60"
      >
        <MessageCircle aria-hidden="true" size={18} />
        {isSubmitting ? "Yönlendiriliyor..." : "Ücretsiz Deneme Dersine Katıl"}
      </button>
    </form>
  );
}
