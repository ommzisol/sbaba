"use client";

import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { useLanguage } from "@/components/language-provider";

export default function ForgotPasswordPage() {
  const { t } = useLanguage();

  return (
    <SiteShell>
      <main className="bg-[linear-gradient(180deg,#eef4fb_0%,#ffffff_100%)]">
        <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_70px_rgba(148,163,184,0.18)] lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0859a5]">
              {t("auth.forgotPassword")}
            </p>
            <h1 className="mt-4 text-[1.3rem] font-semibold tracking-[-0.025em] text-slate-950 [font-family:var(--font-display)]">
              {t("forgot.title")}
            </h1>
            <p className="mt-4 text-[1rem] leading-8 text-slate-600">{t("forgot.description")}</p>

            <form className="mt-8 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-800">{t("auth.emailAddress")}</span>
                <input
                  type="text"
                  placeholder="Enter your registered email or mobile number"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0859a5]"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#0859a5] px-6 py-3.5 text-[1rem] font-semibold text-white transition hover:bg-[#074b8a]"
              >
                {t("forgot.button")}
              </button>
            </form>

            <div className="mt-6 text-sm text-slate-600">
              <Link href="/login" className="font-semibold text-[#0859a5]">
                {t("forgot.back")}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
