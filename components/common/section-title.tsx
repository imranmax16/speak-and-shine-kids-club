type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-coral">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-black tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-lg font-semibold leading-8 text-ink/65">{description}</p> : null}
    </div>
  );
}
