"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";

const languageOptions = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "pa", label: "Punjabi" },
  { code: "gu", label: "Gujarati" },
  { code: "ta", label: "Tamil" }
];

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  function handleChange(nextLanguage: string) {
    setLanguage(nextLanguage as "en" | "hi" | "pa" | "gu" | "ta");
    setOpen(false);
  }

  const selectedLabel =
    languageOptions.find((option) => option.code === language)?.label ?? "English";

  return (
    <div ref={wrapperRef} className="relative min-w-[230px]">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between rounded-md border border-[#8ab1dd] bg-[#0a5aa8] px-4 py-2.5 text-[0.98rem] text-[#eef4ff] transition hover:border-white"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="font-serif text-[1rem] tracking-[0.02em] text-[#d7e4f7]">{t("header.selectLanguage")}</span>
        <span className="flex items-center gap-2 font-semibold text-white">
          {selectedLabel}
          <span className={`text-xs transition ${open ? "rotate-180" : ""}`}>v</span>
        </span>
      </button>

      {open ? (
        <div className="absolute right-0 top-[calc(100%+0.45rem)] z-50 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
          <div className="border-b border-slate-100 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Choose language
          </div>
          <div className="py-2">
            {languageOptions.map((option) => {
              const active = option.code === language;

              return (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => handleChange(option.code)}
                  className={`flex w-full items-center justify-between px-4 py-3 text-left text-[0.98rem] transition ${
                    active
                      ? "bg-[#0859a5] text-white"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                  role="option"
                  aria-selected={active}
                >
                  <span>{option.label}</span>
                  {active ? <span className="text-sm">Selected</span> : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
