"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";

type AuthMode = "email" | "mobile" | "password";

const modeLabels: Record<AuthMode, string> = {
  email: "Login with Email",
  mobile: "Mobile OTP",
  password: "Password Login"
};

type AuthCardProps = {
  type: "login" | "signup";
};

export function AuthCard({ type }: AuthCardProps) {
  const { t } = useLanguage();
  const [mode, setMode] = useState<AuthMode>(type === "signup" ? "email" : "email");

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_70px_rgba(148,163,184,0.18)] lg:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0859a5]">
        {type === "login" ? t("header.login") : t("auth.createAccount")}
      </p>
      <h1 className="mt-4 text-[1.3rem] font-semibold tracking-[-0.025em] text-slate-950 [font-family:var(--font-display)]">
        {type === "login" ? t("auth.loginTitle") : t("auth.signupTitle")}
      </h1>
      <p className="mt-4 text-[1rem] leading-8 text-slate-600">
        {type === "login"
          ? t("auth.loginDescription")
          : t("auth.signupDescription")}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {(type === "signup" ? (["email", "mobile"] as AuthMode[]) : (["email", "mobile", "password"] as AuthMode[])).map(
          (item) => {
            const active = mode === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setMode(item)}
                className={
                  active
                    ? "rounded-full bg-[#0859a5] px-4 py-2.5 text-sm font-semibold text-white"
                    : "rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#0859a5] hover:text-[#0859a5]"
                }
              >
                {item === "email"
                  ? t("auth.loginEmail")
                  : item === "mobile"
                    ? t("auth.mobileOtp")
                    : t("auth.passwordLogin")}
              </button>
            );
          }
        )}
      </div>

      <form className="mt-8 space-y-5">
        {type === "signup" ? (
          <>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">{t("auth.fullName")}</span>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0859a5]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">{t("auth.mobileNumber")}</span>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0859a5]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">{t("auth.businessType")}</span>
              <select className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0859a5]">
                <option>Select business category</option>
                <option>Dealer</option>
                <option>Manufacturer</option>
                <option>Retailer</option>
                <option>Distributor</option>
                <option>Trader</option>
                <option>Contractor</option>
                <option>Fabricator</option>
                <option>Builder</option>
                <option>Other</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">{t("auth.businessName")}</span>
              <input
                type="text"
                placeholder="Enter your business or firm name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0859a5]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">{t("auth.address")}</span>
              <textarea
                placeholder="Enter your complete business address"
                rows={4}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0859a5]"
              />
            </label>
          </>
        ) : null}

        {mode === "email" ? (
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-800">
              {t("auth.emailAddress")}
            </span>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0859a5]"
            />
          </label>
        ) : null}

        {mode === "mobile" ? (
          <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">{t("auth.mobileNumber")}</span>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0859a5]"
            />
          </label>
        ) : null}

        {mode === "password" ? (
          <>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">{t("auth.emailAddress")}</span>
              <input
                type="text"
                placeholder="Enter your email or mobile number"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0859a5]"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">{t("auth.password")}</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0859a5]"
              />
            </label>
          </>
        ) : null}

        {type === "signup" && mode !== "mobile" ? (
          <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">{t("auth.createPassword")}</span>
            <input
              type="password"
              placeholder="Create a secure password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0859a5]"
            />
          </label>
        ) : null}

        {mode === "mobile" ? (
          <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">{t("auth.otp")}</span>
            <input
              type="text"
              placeholder={type === "login" ? "Enter OTP received on mobile" : "Enter OTP to verify mobile number"}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0859a5]"
            />
          </label>
        ) : null}

        {type === "login" ? (
          <div className="flex items-center justify-between gap-4 text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="rounded border-slate-300" />
              <span>{t("auth.rememberMe")}</span>
            </label>
            <Link href="/forgot-password" className="font-semibold text-[#0859a5] transition hover:text-[#063f76]">
              {t("auth.forgotPassword")}
            </Link>
          </div>
        ) : null}

        <button
          type="submit"
          className="w-full rounded-xl bg-[#0859a5] px-6 py-3.5 text-[1rem] font-semibold text-white transition hover:bg-[#074b8a]"
        >
          {type === "login"
            ? mode === "mobile"
              ? t("auth.verifyLogin")
              : t("auth.loginButton")
            : mode === "mobile"
              ? t("auth.verifyContinue")
              : t("auth.createAccountButton")}
        </button>
      </form>

      <div className="mt-6 text-sm text-slate-600">
        {type === "login" ? (
          <p>
            {t("auth.newToBalaji")}{" "}
            <Link href="/signup" className="font-semibold text-[#0859a5]">
              {t("auth.createAccount")}
            </Link>
          </p>
        ) : (
          <p>
            {t("auth.alreadyAccount")}{" "}
            <Link href="/login" className="font-semibold text-[#0859a5]">
              {t("header.login")}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
