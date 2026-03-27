import { SiteShell } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8f1d2c]">Contact Us</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950">Speak with the Steel Baba team.</h1>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-950">Email</h2>
              <p className="mt-2 text-slate-600">steelbabanews@gmail.com</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-950">Phone</h2>
              <p className="mt-2 text-slate-600">+91 7888696401</p>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
