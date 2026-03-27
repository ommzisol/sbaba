"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { useLanguage } from "@/components/language-provider";
import { LanguageSelector } from "@/components/language-selector";

type SiteShellProps = {
  children: ReactNode;
};

const SUPPORT_PHONE = "+91 7888696401";
const SUPPORT_TEL = "tel:+917888696401";
const SUPPORT_EMAIL = "steelbabanews@gmail.com";
const SUPPORT_MAILTO = "mailto:steelbabanews@gmail.com";
const SUPPORT_WHATSAPP = "917888696401";

function BrandMark({ compact = false, dark = false }: { compact?: boolean; dark?: boolean }) {
  if (compact) {
    return (
      <div className="inline-flex items-center gap-3 rounded-[1.4rem] border border-[#d8e2ea] bg-white px-3 py-2 shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
        <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-[1rem] bg-[linear-gradient(135deg,#4a0d16_0%,#8f1d2c_52%,#c45a68_100%)] text-[1.45rem] font-black tracking-[-0.08em] text-white shadow-[0_14px_28px_rgba(143,29,44,0.3)]">
          SB
        </div>
        <div className="leading-none">
          <div className="text-[1.3rem] font-black uppercase tracking-[-0.05em] text-[#4a0d16]">
            Steel
          </div>
          <div className="mt-1 text-[0.72rem] font-bold uppercase tracking-[0.32em] text-[#a73b49]">
            Baba
          </div>
        </div>
      </div>
    );
  }

  if (dark) {
    return (
      <div className="inline-flex items-center">
        <div className="leading-none">
          <div className="text-[2rem] font-extrabold uppercase tracking-[-0.05em] text-[#8fc0df]">
            Steel
          </div>
          <div className="mt-1 text-[0.9rem] font-bold uppercase tracking-[0.34em] text-[#d9e5ef]">
            Baba
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-3">
      <div
        className={`relative flex items-center justify-center rounded-[1.65rem] ${
          compact ? "h-[4.2rem] w-[4.2rem]" : "h-[5rem] w-[5rem]"
        } bg-[linear-gradient(135deg,#4a0d16_0%,#8f1d2c_52%,#c45a68_100%)] shadow-[0_20px_45px_rgba(143,29,44,0.24)]`}
      >
        <div className="absolute inset-[3px] rounded-[1.45rem] border border-white/20" />
        <div className="absolute -left-1 top-[1.15rem] h-[0.7rem] w-[2.7rem] rotate-[-14deg] rounded-full bg-[#9fb7c8] shadow-[0_10px_20px_rgba(159,183,200,0.35)]" />
        <span
          className={`relative z-10 font-black tracking-[-0.08em] text-white ${
            compact ? "text-[2.2rem]" : "text-[2.55rem]"
          }`}
        >
          SB
        </span>
      </div>

      <div>
        <div
          className={`font-black uppercase leading-none tracking-[-0.05em] ${
            compact ? "text-[1.55rem]" : "text-[1.95rem]"
          } ${dark ? "text-white" : "text-[#4a0d16]"}`}
        >
          Steel
        </div>
        <div
          className={`mt-1 font-semibold uppercase tracking-[0.34em] ${
            compact ? "text-[0.68rem]" : "text-[0.78rem]"
          } ${dark ? "text-[#f0d7dc]" : "text-[#a73b49]"}`}
        >
          Baba
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ kind }: { kind: "facebook" | "linkedin" | "blogger" | "instagram" | "x" }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    className: "h-[1.5rem] w-[1.5rem] fill-current"
  };

  switch (kind) {
    case "facebook":
      return (
        <svg {...commonProps} aria-hidden="true">
          <path d="M13.5 8.5V6.9c0-.7.5-1.1 1.2-1.1H16V3h-2.3C11.5 3 10.5 4.3 10.5 6.2v2.3H8v2.8h2.5V21h3V11.3H16l.4-2.8h-2.9z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...commonProps} aria-hidden="true">
          <path d="M5.4 8.3a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM4 10h2.8v10H4zm4.6 0h2.7v1.4h.1c.4-.7 1.4-1.7 3-1.7 3.2 0 3.7 2.1 3.7 4.8V20h-2.8v-4.8c0-1.2 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V20H8.6z" />
        </svg>
      );
    case "blogger":
      return (
        <svg {...commonProps} aria-hidden="true">
          <path d="M7 4h7a3 3 0 0 1 3 3v1.2a1.8 1.8 0 0 0 .5 1.3l.3.3a1 1 0 0 1 .2.6V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V7a3 3 0 0 1 3-3zm1.5 5.2h4.2a1.1 1.1 0 1 0 0-2.2H8.5a1.1 1.1 0 1 0 0 2.2zm0 5.8h6a1.1 1.1 0 1 0 0-2.2h-6a1.1 1.1 0 1 0 0 2.2z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...commonProps} aria-hidden="true">
          <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7zm9.4 1.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3z" />
        </svg>
      );
    case "x":
      return (
        <svg {...commonProps} aria-hidden="true">
          <path d="M18.9 4H21l-4.7 5.4L22 20h-4.5l-3.6-5.8L8.8 20H6.7l5-5.8L6 4h4.6l3.2 5.4zm-1.6 13.7h1.2L9.9 6.2H8.6z" />
        </svg>
      );
  }
}

function AppPlatformIcon({ kind }: { kind: "ios" | "android" | "windows" }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    className: "h-6 w-6 fill-current"
  };

  switch (kind) {
    case "ios":
      return (
        <svg {...commonProps} aria-hidden="true">
          <path d="M16.7 12.8c0-2 1.7-3 1.8-3.1-1-1.5-2.5-1.7-3-1.7-1.3-.1-2.4.7-3 .7-.6 0-1.5-.7-2.5-.7-1.3 0-2.5.7-3.2 1.9-1.4 2.4-.4 6 1 8 0 .9.8 2 1.7 2 .8 0 1.1-.5 2-.5.9 0 1.2.5 2 .5 1 0 1.6-1 2.2-1.9.7-1 1-2 1-2.1-.1 0-2-.8-2-3.1zm-2-6c.5-.6.9-1.4.8-2.2-.8 0-1.7.5-2.3 1.1-.5.6-.9 1.4-.8 2.2.9.1 1.8-.4 2.3-1.1z" />
        </svg>
      );
    case "android":
      return (
        <svg {...commonProps} aria-hidden="true">
          <path d="M8.1 7.2 6.8 4.9l.7-.4 1.3 2.4a8.4 8.4 0 0 1 6.4 0l1.3-2.4.7.4-1.3 2.3c1.8.9 3 2.4 3 4.1H5c0-1.7 1.2-3.2 3.1-4.1zM8 13H6.5v5.2c0 .7.5 1.3 1.2 1.3h.8V13zm2.7 0H9.2v6.5h1.5V13zm4.1 0h-1.5v6.5h1.5V13zm2.7 0H16v6.5h.8c.7 0 1.2-.6 1.2-1.3V13zm-8.6-2.4a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2zm6.2 0a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2z" />
        </svg>
      );
    case "windows":
      return (
        <svg {...commonProps} aria-hidden="true">
          <path d="M3 5.2 10.4 4v7H3zm8.3-1.3L21 2.5v8.5h-9.7zM3 12.8h7.4v7L3 18.8zm8.3 0H21v8.7l-9.7-1.4z" />
        </svg>
      );
  }
}

function PaymentBadge({ kind }: { kind: "visa" | "mastercard" | "paypal" | "stripe" | "trusted" | "secure" | "verified" }) {
  const baseClass =
    "flex min-h-[3rem] items-center justify-center gap-2 rounded-xl border px-3 py-2 text-[0.72rem] font-semibold shadow-sm";

  switch (kind) {
    case "visa":
      return (
        <div className={`${baseClass} border-sky-200 bg-sky-50 text-sky-700`}>
          <span className="text-[1rem] font-black italic tracking-[-0.05em]">VISA</span>
        </div>
      );
    case "mastercard":
      return (
        <div className={`${baseClass} border-amber-200 bg-amber-50 text-amber-700`}>
          <div className="relative h-4 w-7">
            <span className="absolute left-0 top-0 h-4 w-4 rounded-full bg-[#ea001b]" />
            <span className="absolute right-0 top-0 h-4 w-4 rounded-full bg-[#f79e1b] opacity-90" />
          </div>
          <span>Mastercard</span>
        </div>
      );
    case "paypal":
      return (
        <div className={`${baseClass} border-indigo-200 bg-indigo-50 text-indigo-700`}>
          <div className="relative h-5 w-5">
            <span className="absolute left-0 top-0 text-[0.95rem] font-black leading-none text-[#1f4db8]">P</span>
            <span className="absolute left-[0.33rem] top-[0.16rem] text-[0.95rem] font-black leading-none text-[#3b82f6]">P</span>
          </div>
          <span className="text-[0.85rem] font-bold tracking-[-0.02em]">PayPal</span>
        </div>
      );
    case "stripe":
      return (
        <div className={`${baseClass} border-violet-200 bg-violet-50 text-violet-700`}>
          <span className="rounded-md bg-violet-600 px-2 py-1 text-[0.72rem] font-black uppercase tracking-[0.08em] text-white">
            Stripe
          </span>
        </div>
      );
    case "trusted":
      return (
        <div className={`${baseClass} border-emerald-200 bg-emerald-50 text-emerald-700`}>
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
            <path d="M12 2 4.5 5v6.2c0 5 3.2 9.4 7.5 10.8 4.3-1.4 7.5-5.8 7.5-10.8V5L12 2zm-1.1 13.1-3-3 1.3-1.3 1.7 1.7 4-4 1.3 1.3-5.3 5.3z" />
          </svg>
          <span className="text-[0.82rem] font-bold">Trusted</span>
        </div>
      );
    case "secure":
      return (
        <div className={`${baseClass} border-cyan-200 bg-cyan-50 text-cyan-700`}>
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
            <path d="M17 9V7a5 5 0 0 0-10 0v2H5v11h14V9h-2zm-8 0V7a3 3 0 0 1 6 0v2H9zm3 7.8a1.8 1.8 0 1 1 1.3-3v3c-.3.2-.8.3-1.3.3z" />
          </svg>
          <span className="text-[0.82rem] font-bold">Secure</span>
        </div>
      );
    case "verified":
      return (
        <div className={`${baseClass} border-blue-200 bg-blue-50 text-blue-700`}>
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
            <path d="M12 2 4 5v6c0 5.2 3.4 9.8 8 11 4.6-1.2 8-5.8 8-11V5l-8-3zm-1.2 13.4-3-3 1.4-1.4 1.6 1.6 4.1-4.1 1.4 1.4-5.5 5.5z" />
          </svg>
          <span className="text-[0.82rem] font-bold">Verified</span>
        </div>
      );
  }
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
      <path d="M20.5 11.8c0 4.7-3.8 8.5-8.5 8.5-1.5 0-2.9-.4-4.1-1.1L3 20.7l1.6-4.6a8.4 8.4 0 0 1-1.1-4.3 8.5 8.5 0 1 1 17 0zm-8.5-7a7 7 0 0 0-6 10.7l.2.3-.9 2.6 2.7-.9.3.2a7 7 0 1 0 3.7-12.9zm4.2 8.9c-.2-.1-1.2-.6-1.4-.7s-.3-.1-.4.1-.5.7-.7.8c-.1.1-.2.1-.4 0a5.7 5.7 0 0 1-1.7-1 6.5 6.5 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.3-.3.2-.3v-.3c0-.1-.4-1.1-.6-1.5-.2-.4-.3-.4-.4-.4H9c-.1 0-.3 0-.4.2-.1.1-.5.5-.5 1.3s.5 1.5.6 1.6c.1.1 1.1 1.8 2.7 2.5 1.6.7 1.6.4 1.9.4.3 0 1.1-.4 1.3-.8.2-.4.2-.8.1-.8 0-.1-.2-.1-.4-.2z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
      <path d="M12 3C6.5 3 2 6.8 2 11.5c0 2.5 1.3 4.7 3.4 6.2L4.4 21l4-1.8c1.1.3 2.3.5 3.6.5 5.5 0 10-3.8 10-8.5S17.5 3 12 3zm-4.2 9.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm4.2 0a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm4.2 0a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z" />
    </svg>
  );
}

export function SiteShell({ children }: SiteShellProps) {
  const { t } = useLanguage();
  const [chatOpen, setChatOpen] = useState(false);
  const whatsappMessage = encodeURIComponent(
    "Hello Steel Baba, I want the latest steel prices and support information."
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="sticky top-0 z-50">
        <div className="bg-[#4a0d16] text-[#f0d7dc]">
          <div className="mx-auto flex max-w-[1920px] flex-wrap items-center justify-between gap-4 px-6 py-3 lg:px-12">
            <div className="flex flex-wrap items-center gap-6 text-[0.95rem] md:gap-10">
              <a href={SUPPORT_MAILTO} className="transition hover:text-white">
                {t("header.email")}
              </a>
              <a href={SUPPORT_TEL} className="transition hover:text-white">
                {t("header.call")}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 text-sm font-semibold">
                <Link
                  href="/login"
                className="rounded-md border border-[#d5969f] px-4 py-2 text-[#f6dde1] transition hover:border-white hover:text-white"
                >
                  {t("header.login")}
                </Link>
                <Link
                  href="/signup"
                  className="rounded-md bg-white/12 px-4 py-2 text-[#eef4ff] transition hover:bg-white/20"
                >
                  {t("header.signup")}
                </Link>
              </div>

              <div className="flex items-center gap-2 text-lg">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition hover:text-[#f8dde1]"
                  aria-label="Facebook"
                >
                  <SocialIcon kind="facebook" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition hover:text-[#f8dde1]"
                  aria-label="LinkedIn"
                >
                  <SocialIcon kind="linkedin" />
                </a>
                <a
                  href="https://www.blogger.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition hover:text-[#f8dde1]"
                  aria-label="Blogger"
                >
                  <SocialIcon kind="blogger" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition hover:text-[#f8dde1]"
                  aria-label="Instagram"
                >
                  <SocialIcon kind="instagram" />
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition hover:text-[#f8dde1]"
                  aria-label="X"
                >
                  <SocialIcon kind="x" />
                </a>
              </div>

              <LanguageSelector />
            </div>
          </div>
        </div>

        <div className="border-b border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]">
          <div className="mx-auto flex max-w-[1920px] flex-wrap items-center justify-between gap-6 px-6 py-2.5 lg:px-12 lg:py-3">
            <Link href="/" className="shrink-0">
              <BrandMark compact />
            </Link>

            <nav className="flex flex-1 flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[0.95rem] font-semibold text-[#2d3c5c]">
              <Link href="/about" className="transition hover:text-[#8f1d2c]">
                {t("nav.about")}
              </Link>
              <Link href="/products" className="transition hover:text-[#8f1d2c]">
                {t("nav.products")}
              </Link>
              <Link href="/service" className="transition hover:text-[#8f1d2c]">
                Service
              </Link>
              <Link href="/steel-price" className="transition hover:text-[#8f1d2c]">
                {t("nav.steelPrice")}
              </Link>
              <Link href="/applications" className="transition hover:text-[#8f1d2c]">
                {t("nav.applications")}
              </Link>
              <a href="/#news" className="transition hover:text-[#8f1d2c]">
                {t("nav.news")}
              </a>
              <Link href="/segments" className="transition hover:text-[#8f1d2c]">
                {t("nav.segments")}
              </Link>
              <Link href="/media" className="transition hover:text-[#8f1d2c]">
                {t("nav.media")}
              </Link>
            </nav>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/request-demo"
                className="rounded-xl bg-[#6f2330] px-5 py-3 text-[0.95rem] font-semibold text-white transition hover:bg-[#5b1925]"
              >
                Request for Demo
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-[#8f1d2c] px-6 py-3 text-[0.95rem] font-semibold text-white transition hover:bg-[#4a0d16]"
              >
                {t("header.contact")}
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div>{children}</div>

      <section className="bg-[linear-gradient(180deg,#f7eff1_0%,#edd9de_100%)]">
        <div className="mx-auto max-w-[1660px] px-6 py-6 lg:px-12 lg:py-7">
          <div className="rounded-[1.6rem] border border-slate-200 bg-white px-5 py-5 shadow-[0_18px_45px_rgba(148,163,184,0.12)]">
            <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
              <div>
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-[#8f1d2c]">Applications and Trust</p>
                <h3 className="mt-2 text-[1.15rem] font-bold text-slate-950">Download apps and view trusted payment badges before the footer</h3>
                <p className="mt-2 text-[0.875rem] leading-7 text-slate-600">
                  Access Steel Baba across iOS, Android, and Windows, and see platform trust and payment verification badges in one highlighted section.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="flex flex-wrap gap-2">
                  <a
                    href="/applications"
                    className="flex min-w-[10.2rem] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-2.5 transition hover:border-[#8f1d2c] hover:bg-white"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8f1d2c] text-white">
                      <AppPlatformIcon kind="ios" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Download on</p>
                      <p className="mt-0.5 text-[0.75rem] font-semibold text-slate-900">iOS App Store</p>
                    </div>
                  </a>
                  <a
                    href="/applications"
                    className="flex min-w-[10.2rem] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-2.5 transition hover:border-[#8f1d2c] hover:bg-white"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8f1d2c] text-white">
                      <AppPlatformIcon kind="android" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Get it on</p>
                      <p className="mt-0.5 text-[0.75rem] font-semibold text-slate-900">Android Play Store</p>
                    </div>
                  </a>
                  <a
                    href="/applications"
                    className="flex min-w-[10.2rem] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-2.5 transition hover:border-[#8f1d2c] hover:bg-white"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8f1d2c] text-white">
                      <AppPlatformIcon kind="windows" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Available for</p>
                      <p className="mt-0.5 text-[0.75rem] font-semibold text-slate-900">Windows App</p>
                    </div>
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  <PaymentBadge kind="visa" />
                  <PaymentBadge kind="mastercard" />
                  <PaymentBadge kind="paypal" />
                  <PaymentBadge kind="stripe" />
                  <PaymentBadge kind="verified" />
                  <PaymentBadge kind="secure" />
                  <PaymentBadge kind="trusted" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative mt-6 overflow-hidden bg-[#32131a] text-[#f1d6db]">
        <div className="mx-auto max-w-[1660px] px-6 py-14 lg:px-12 lg:py-16">
          <div className="grid gap-10 xl:grid-cols-[1.65fr_0.75fr_0.75fr_0.75fr_0.9fr]">
            <div className="max-w-[34rem]">
              <BrandMark dark />
              <p className="mt-6 text-[1.08rem] leading-[1.85] text-[#bfd0ff]">
                {t("footer.about")}
              </p>
            </div>

            <div className="space-y-4 pt-8 lg:pt-16">
              <h3 className="text-[1.15rem] font-bold text-[#d4deff]">Home</h3>
              <div className="grid gap-3 text-[1rem]">
                <Link href="/about" className="transition hover:text-white">
                  About Us
                </Link>
                <Link href="/refund-policy" className="transition hover:text-white">
                  Refund Policies
                </Link>
                <Link href="/terms" className="transition hover:text-white">
                  Terms and Condition
                </Link>
                <Link href="/cookies-policy" className="transition hover:text-white">
                  Cookies
                </Link>
                <a href="#" className="transition hover:text-white">
                  Disclaimer
                </a>
              </div>
            </div>

            <div className="space-y-8 pt-8 lg:pt-16">
              <div className="space-y-4">
                <h3 className="text-[1.15rem] font-bold text-[#d4deff]">Service</h3>
                <div className="grid gap-3 text-[1rem]">
                  <a href="#" className="transition hover:text-white">
                    Spot Price
                  </a>
                  <a href="#" className="transition hover:text-white">
                    Live Price
                  </a>
                  <a href="#" className="transition hover:text-white">
                    Expert Team
                  </a>
                  <a href="#" className="transition hover:text-white">
                    Support
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-[1.15rem] font-bold text-[#d4deff]">Buy</h3>
                <div className="grid gap-3 text-[1rem]">
                  <a href="#" className="transition hover:text-white">
                    Dealer locator / Retailer
                  </a>
                  <a href="#" className="transition hover:text-white">
                    Tmt Steel Calculator
                  </a>
                  <a href="#" className="transition hover:text-white">
                    TMT Steel Price Today
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8 lg:pt-16">
              <h3 className="text-[1.15rem] font-bold text-[#d4deff]">Products</h3>
              <div className="grid gap-3 text-[1rem]">
                <a href="#" className="transition hover:text-white">
                  Steel Rates
                </a>
                <a href="#" className="transition hover:text-white">
                  Finished Market
                </a>
                <a href="#" className="transition hover:text-white">
                  Metal Market
                </a>
                <a href="#" className="transition hover:text-white">
                  Steel Testing
                </a>
                <a href="#" className="transition hover:text-white">
                  8mm
                </a>
                <a href="#" className="transition hover:text-white">
                  10mm
                </a>
                <a href="#" className="transition hover:text-white">
                  12mm
                </a>
                <a href="#" className="transition hover:text-white">
                  16mm
                </a>
                <a href="#" className="transition hover:text-white">
                  20mm
                </a>
                <a href="#" className="transition hover:text-white">
                  25mm
                </a>
                <a href="#" className="transition hover:text-white">
                  32mm
                </a>
              </div>
            </div>

            <div className="space-y-8 pt-8 lg:pt-16">
              <div className="space-y-4">
                <h3 className="text-[1.15rem] font-bold text-[#d4deff]">Applications</h3>
                <div className="grid gap-3 text-[1rem]">
                  <a href="#" className="transition hover:text-white">
                    Bridges and Flyovers
                  </a>
                  <a href="#" className="transition hover:text-white">
                    Institutions
                  </a>
                  <a href="#" className="transition hover:text-white">
                    Road Projects
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-[1.15rem] font-bold text-[#d4deff]">Contact Us</h3>
                <div className="grid gap-3 text-[1rem]">
                  <a href="#" className="transition hover:text-white">
                    Enquire Now
                  </a>
                  <a href="#" className="transition hover:text-white">
                    Become a Distributor
                  </a>
                  <Link href="/privacy-policy" className="transition hover:text-white">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-10 xl:grid-cols-[1.05fr_1fr_0.9fr_0.95fr]">
            <div className="max-w-[29rem]">
              <h3 className="text-[1.1rem] font-bold text-[#d4deff]">{t("footer.subscribe")}</h3>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-[0.6rem] border border-[#97a7d5] bg-transparent px-5 py-4 text-[1rem] text-[#d8e3ff] outline-none placeholder:text-[#b3c1e8]"
                />
                <button
                  type="submit"
                  className="mt-6 rounded-xl bg-[#b8c9f1] px-7 py-4 text-[1rem] font-semibold text-[#394156] transition hover:bg-[#d0dcfb]"
                >
                  {t("footer.subscribeButton")}
                </button>
              </form>
            </div>

            <div className="max-w-[35rem]">
              <h3 className="text-[1.1rem] font-bold text-[#d4deff]">{t("footer.platform")}</h3>
              <p className="mt-4 text-[1rem] leading-[1.8] text-[#bfd0ff]">
                {t("footer.platformDescription")}
              </p>
            </div>

            <div className="max-w-[22rem]">
              <h3 className="text-[1.1rem] font-bold text-[#d4deff]">{t("footer.helpLine")}</h3>
              <div className="mt-4 grid gap-3 text-[1rem] text-[#bfd0ff]">
                <a href={SUPPORT_TEL} className="transition hover:text-white">
                  {t("header.call")}
                </a>
                <a href={SUPPORT_MAILTO} className="transition hover:text-white">
                  {t("header.email")}
                </a>
              </div>
            </div>

            <div className="max-w-[28rem]">
              <h3 className="text-[1.1rem] font-bold text-[#d4deff]">Platform Access</h3>
              <p className="mt-4 text-[1rem] leading-[1.8] text-[#bfd0ff]">
                Steel Baba is available across web, mobile, and desktop channels for faster updates, customer support, and market visibility.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col items-end gap-4">
          {chatOpen ? (
            <div className="pointer-events-auto w-[20rem] rounded-[1.5rem] border border-slate-200 bg-white p-4 text-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f1d2c]">Live Support</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-950">Steel Baba Chat</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setChatOpen(false)}
                  className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
                >
                  Close
                </button>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Choose a quick action to contact our team for rates, app support, or platform help.
              </p>

              <div className="mt-4 grid gap-2">
                <a
                  href={`https://wa.me/${SUPPORT_WHATSAPP}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-[#25d366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1fb95a]"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="/contact"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#8f1d2c] hover:text-[#8f1d2c]"
                >
                  Contact Support Team
                </a>
                <a
                  href={SUPPORT_TEL}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#8f1d2c] hover:text-[#8f1d2c]"
                >
                  Call {SUPPORT_PHONE}
                </a>
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=Steel%20Baba%20Support`}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#8f1d2c] hover:text-[#8f1d2c]"
                >
                  Email Support
                </a>
              </div>
            </div>
          ) : null}

          <a
            href={`https://wa.me/${SUPPORT_WHATSAPP}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#32d851] text-white shadow-xl transition hover:scale-105"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <button
            type="button"
            onClick={() => setChatOpen((value) => !value)}
            className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#8f1d2c] text-white shadow-xl transition hover:scale-105"
            aria-label="Chat"
          >
            <ChatIcon />
          </button>
        </div>
      </footer>
    </div>
  );
}
