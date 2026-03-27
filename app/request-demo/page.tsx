"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site-shell";

const productOptions = [
  "TMT Bars",
  "Steel Billet",
  "Steel Plates",
  "Pipes and Tubes",
  "Metal Market",
  "Raw Material",
  "Agriculture",
  "MCX / NCDEX / LME",
  "Applications Module",
  "News and Alerts"
];

const serviceOptions = [
  "WhatsApp",
  "Email",
  "Web",
  "Text Message",
  "Mobile Application"
];

export default function RequestDemoPage() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const canOpenPopup = mobileNumber.trim().length >= 10;
  const selectedSummary = useMemo(() => selectedProducts.join(", "), [selectedProducts]);

  function toggleProduct(product: string) {
    setSelectedProducts((current) =>
      current.includes(product) ? current.filter((item) => item !== product) : [...current, product]
    );
  }

  function handleProductSubmit() {
    if (!selectedProducts.length) {
      return;
    }

    setPopupOpen(false);
  }

  function handleFinalSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    window.setTimeout(() => {
      setSubmitted(false);
    }, 2200);
  }

  return (
    <SiteShell>
      <main className="bg-[linear-gradient(180deg,#edf4fc_0%,#ffffff_100%)]">
        <section className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2.2rem] border border-slate-200 bg-white p-8 shadow-[0_28px_70px_rgba(148,163,184,0.16)] lg:p-10">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8f1d2c]">Request for Demo</p>
              <h1 className="mt-4 text-[1.32rem] font-semibold leading-tight tracking-[-0.025em] text-slate-950 [font-family:var(--font-display)] lg:text-[2rem]">
                Book a Steel Baba product demo with mobile number, product selection, and service preference
              </h1>
              <p className="mt-5 text-[1rem] leading-8 text-slate-600">
                Enter your mobile number first, then open the product popup to select the products you want in your
                demo. After product selection, choose the preferred service channel and submit the request from the same
                page.
              </p>
            </div>

            <form onSubmit={handleFinalSubmit} className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-6 rounded-[1.8rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-sm">
                <div>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-800">1. Mobile Number</span>
                    <input
                      type="tel"
                      value={mobileNumber}
                      onChange={(event) => setMobileNumber(event.target.value)}
                      placeholder="Enter your mobile number"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#8f1d2c]"
                    />
                  </label>
                </div>

                <div>
                  <span className="mb-2 block text-sm font-semibold text-slate-800">2. Product Selection</span>
                  <button
                    type="button"
                    onClick={() => {
                      if (canOpenPopup) {
                        setPopupOpen(true);
                      }
                    }}
                    className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                      canOpenPopup
                        ? "bg-[#8f1d2c] text-white hover:bg-[#5b1925]"
                        : "cursor-not-allowed bg-slate-200 text-slate-500"
                    }`}
                  >
                    Open Product Popup
                  </button>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {selectedProducts.length
                      ? `Selected Products: ${selectedSummary}`
                      : "Select one or more demo products from the popup."}
                  </p>
                </div>

                <div>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-800">3. Service</span>
                    <select
                      value={service}
                      onChange={(event) => setService(event.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#8f1d2c]"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8f1d2c]"
                >
                  Submit Demo Request
                </button>

                {submitted ? (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                    Demo request submitted successfully.
                  </div>
                ) : null}
              </div>

              <div className="rounded-[1.8rem] bg-[linear-gradient(135deg,#0b1527_0%,#1b3f73_100%)] p-6 text-white shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-200">Demo Flow</p>
                <div className="mt-6 space-y-4">
                  {[
                    "Enter customer mobile number",
                    "Open popup and select products with checkbox",
                    "Submit product popup and return to the same page",
                    "Choose service channel from dropdown",
                    "Submit final request for demo"
                  ].map((step, index) => (
                    <div key={step} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-100">Step {index + 1}</p>
                      <p className="mt-2 text-[0.98rem] leading-7 text-white/90">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/8 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-100">Current Selection</p>
                  <p className="mt-2 text-sm text-white/90">Mobile: {mobileNumber || "Not entered"}</p>
                  <p className="mt-1 text-sm text-white/90">Products: {selectedProducts.length ? selectedSummary : "Not selected"}</p>
                  <p className="mt-1 text-sm text-white/90">Service: {service}</p>
                </div>
              </div>
            </form>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/" className="inline-flex rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-[#8f1d2c] hover:text-[#8f1d2c]">
                Back to Home
              </Link>
            </div>
          </div>
        </section>

        {popupOpen ? (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/50 px-4">
            <div className="w-full max-w-2xl rounded-[1.8rem] bg-white p-6 shadow-[0_28px_70px_rgba(15,23,42,0.28)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8f1d2c]">Product Popup</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-slate-950">Select Demo Products</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setPopupOpen(false)}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
                >
                  Close
                </button>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {productOptions.map((product) => {
                  const checked = selectedProducts.includes(product);

                  return (
                    <label
                      key={product}
                      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                        checked
                          ? "border-[#8f1d2c] bg-[#fbf1f3] text-[#8f1d2c]"
                          : "border-slate-200 bg-slate-50 text-slate-700"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleProduct(product)}
                        className="h-4 w-4 accent-[#8f1d2c]"
                      />
                      <span>{product}</span>
                    </label>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-slate-600">
                  {selectedProducts.length ? `${selectedProducts.length} product(s) selected` : "No product selected yet"}
                </p>
                <button
                  type="button"
                  onClick={handleProductSubmit}
                  className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    selectedProducts.length
                      ? "bg-[#8f1d2c] text-white hover:bg-[#5b1925]"
                      : "cursor-not-allowed bg-slate-200 text-slate-500"
                  }`}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </SiteShell>
  );
}
