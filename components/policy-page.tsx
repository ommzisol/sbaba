import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

type PolicyPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  wide?: boolean;
};

export function PolicyPage({ eyebrow, title, description, wide = false }: PolicyPageProps) {
  return (
    <SiteShell>
      <main className={`mx-auto px-4 py-16 lg:px-8 ${wide ? "max-w-5xl" : "max-w-4xl"}`}>
        <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8f1d2c]">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
          <Link href="/" className="mt-8 inline-flex rounded-full bg-slate-950 px-5 py-3 font-semibold text-white">
            Back to Home
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
