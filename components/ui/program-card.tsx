import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Program } from "@/types/content";

const toneClasses = {
  peach: "bg-peach",
  mint: "bg-mint",
  sky: "bg-sky",
};

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="group overflow-hidden rounded-4xl border border-ink/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className={`relative aspect-[4/3] overflow-hidden ${toneClasses[program.tone]}`}>
        <Image
          src={program.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 sm:p-7">
        <p className="text-sm font-black text-coral">{program.ageRange}</p>
        <h3 className="mt-2 text-2xl font-black tracking-tight text-ink">{program.title}</h3>
        <p className="mt-3 font-semibold leading-7 text-ink/65">{program.description}</p>
        <Link
          href="/programs"
          className="mt-6 inline-flex items-center gap-1 font-black text-ink transition hover:text-coral"
        >
          Programı inceleyin <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.5} />
        </Link>
      </div>
    </article>
  );
}
