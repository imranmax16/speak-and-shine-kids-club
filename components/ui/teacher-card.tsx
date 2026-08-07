import Image from "next/image";

type TeacherCardProps = {
  teacher: {
    name: string;
    bio: string;
    image: string;
  };
};

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <article className="overflow-hidden rounded-4xl border border-ink/10 bg-white shadow-soft">
      <div className="relative aspect-[4/5] bg-peach">
        <Image src={teacher.image} alt={`${teacher.name} eğitmen fotoğrafı`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black tracking-tight text-ink">{teacher.name}</h3>
        <p className="mt-3 font-semibold leading-7 text-ink/65">{teacher.bio}</p>
      </div>
    </article>
  );
}
