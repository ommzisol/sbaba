import { SiteShell } from "@/components/site-shell";

export default function SupportPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8f1d2c]">Help / Customer Support</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950">We are here when your team needs help.</h1>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-950">Account Help</h2>
              <p className="mt-2 text-slate-600">Sign-in, sign-up, and password recovery support.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-950">Pricing Support</h2>
              <p className="mt-2 text-slate-600">Questions about table filters, reports, and city data.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-950">Customer Care</h2>
              <p className="mt-2 text-slate-600">Call +91 7888696401 or email steelbabanews@gmail.com for direct assistance.</p>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
