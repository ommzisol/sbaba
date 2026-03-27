import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

type Platform = "android" | "ios" | "windows";

type AppInfo = {
  name: string;
  subtitle: string;
  summary: string;
  audience: string;
  availability: string;
  features: string[];
  products: string[];
  cta: string;
};

const applications: Record<Platform, AppInfo> = {
  android: {
    name: "Android Application",
    subtitle: "Fast mobile access for live steel and commodity tracking",
    summary:
      "The Steel Baba Android application is built for customers who need quick market access on the go. It gives dealers, traders, manufacturers, and retailers a practical mobile dashboard for steel price checks, alerts, and product-wise rate comparison.",
    audience: "Dealers, distributors, retailers, procurement teams, and field sales users",
    availability: "Android phones and tablets",
    features: [
      "Live steel price tracking by city and item",
      "Product-wise market comparison dashboard",
      "Instant notifications for rate changes",
      "News, updates, and promotional highlights",
      "Fast search across steel, metal, raw material, and agriculture categories",
      "Easy mobile-first interface for day-to-day market use"
    ],
    products: [
      "TMT Bars, billets, pipes, plates, coils, and structural steel",
      "Copper, aluminium, zinc, and metal market products",
      "Iron ore, coal, sponge iron, scrap, and raw materials",
      "MCX, NCDEX, and LME linked references"
    ],
    cta: "Open Android Access"
  },
  ios: {
    name: "iOS Application",
    subtitle: "Premium Apple-device experience for market intelligence",
    summary:
      "The Steel Baba iOS application is designed for business owners and decision makers who want a polished, professional experience on iPhone and iPad. It focuses on premium usability, quick reporting, and cleaner product visibility for active markets.",
    audience: "Business owners, senior buyers, market analysts, and enterprise users",
    availability: "iPhone and iPad devices",
    features: [
      "Premium interface with clean market overview",
      "Live and future-linked price visibility",
      "Saved product watchlist and city follow-up flow",
      "Quick access to market trend graphs and validation status",
      "In-app news and category-based product discovery",
      "Fast contact and enquiry access for premium customers"
    ],
    products: [
      "Finished market products and steel rates",
      "Metal and industrial inputs",
      "Agriculture and food commodity references",
      "Global exchange and benchmark-linked products"
    ],
    cta: "View iOS Experience"
  },
  windows: {
    name: "Windows Application",
    subtitle: "Desktop productivity for detailed price review and reporting",
    summary:
      "The Steel Baba Windows application is created for office teams that need a larger workspace for product review, city-wise comparison, and operational decision support. It gives users a strong desktop environment for detailed analysis and internal coordination.",
    audience: "Back-office teams, pricing analysts, manufacturers, and enterprise operations",
    availability: "Windows desktops and laptops",
    features: [
      "Wide-screen dashboard for multi-market monitoring",
      "Detailed product lists and category-wise navigation",
      "Better city comparison and operational analysis",
      "Graph-based movement view for pricing trends",
      "Easy access to reports, enquiries, and customer communication",
      "Useful for team-based market review in office setups"
    ],
    products: [
      "Bulk steel product monitoring and category review",
      "Raw material and input tracking for manufacturing teams",
      "Metal market and benchmark coverage",
      "Daily business support for product, market, and pricing teams"
    ],
    cta: "Explore Windows App"
  }
};

function PlatformIcon({ kind }: { kind: Platform }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    className: "h-9 w-9 fill-current"
  };

  switch (kind) {
    case "ios":
      return (
        <svg {...commonProps} aria-hidden="true">
          <path d="M16.7 12.8c0-2 1.7-3 1.8-3.1-1-1.5-2.5-1.7-3-1.7-1.3-.1-2.4.7-3 .7-.6 0-1.5-.7-2.5-.7-1.3 0-2.5.7-3.2 1.9-1.4 2.4-.4 6 1 8 .4.9.8 2 1.7 2 .8 0 1.1-.5 2-.5.9 0 1.2.5 2 .5 1 0 1.6-1 2.2-1.9.7-1 1-2 1-2.1-.1 0-2-.8-2-3.1zm-2-6c.5-.6.9-1.4.8-2.2-.8 0-1.7.5-2.3 1.1-.5.6-.9 1.4-.8 2.2.9.1 1.8-.4 2.3-1.1z" />
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

function ApplicationTable({
  kind,
  info,
  tone
}: {
  kind: Platform;
  info: AppInfo;
  tone: string;
}) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(148,163,184,0.14)]">
      <div className={`bg-gradient-to-r ${tone} px-6 py-6 text-white`}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-white/12 text-white ring-1 ring-white/20">
              <PlatformIcon kind={kind} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">Application Platform</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em]">{info.name}</h2>
            </div>
          </div>
          <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
            {info.availability}
          </div>
        </div>
        <p className="mt-4 max-w-4xl text-[1rem] leading-8 text-white/90">{info.subtitle}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <tbody className="divide-y divide-slate-200 text-sm">
            <tr>
              <th className="w-[19rem] bg-slate-50 px-6 py-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
                About Application
              </th>
              <td className="px-6 py-5 text-[1rem] leading-8 text-slate-700">{info.summary}</td>
            </tr>
            <tr>
              <th className="bg-slate-50 px-6 py-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
                Best For
              </th>
              <td className="px-6 py-5 text-[1rem] leading-8 text-slate-700">{info.audience}</td>
            </tr>
            <tr>
              <th className="bg-slate-50 px-6 py-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
                Key Features
              </th>
              <td className="px-6 py-5">
                <div className="grid gap-3 lg:grid-cols-2">
                  {info.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-[0.98rem] leading-7 text-slate-700"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
            <tr>
              <th className="bg-slate-50 px-6 py-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
                Product Coverage
              </th>
              <td className="px-6 py-5">
                <div className="grid gap-3">
                  {info.products.map((product) => (
                    <div
                      key={product}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[0.98rem] leading-7 text-slate-700"
                    >
                      {product}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
            <tr>
              <th className="bg-slate-50 px-6 py-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
                Access
              </th>
              <td className="px-6 py-5">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8f1d2c]"
                >
                  {info.cta}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function ApplicationsPage() {
  return (
    <SiteShell>
      <main className="bg-[linear-gradient(180deg,#f7eff1_0%,#ffffff_100%)]">
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2.3rem] border border-slate-200 bg-white p-8 shadow-[0_28px_70px_rgba(148,163,184,0.16)] lg:p-10">
            <div className="max-w-5xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8f1d2c]">Applications</p>
              <h1 className="mt-4 text-[1.32rem] font-semibold leading-tight tracking-[-0.025em] text-slate-950 [font-family:var(--font-display)] lg:text-[2.04rem]">
                Steel Baba applications for Android, iOS, and Windows with full platform details
              </h1>
              <p className="mt-6 text-[1.04rem] leading-9 text-slate-600">
                This dedicated page gives a complete view of Steel Baba&apos;s platform applications. Each application
                is presented in a separate table so users can clearly understand the logo, supported platform, core
                features, and product coverage for Android, iOS, and Windows.
              </p>
            </div>

            <div className="mt-10 grid gap-6">
              <ApplicationTable kind="android" info={applications.android} tone="from-[#7a1826] to-[#a92f40]" />
              <ApplicationTable kind="ios" info={applications.ios} tone="from-[#8f1d2c] to-[#c45a68]" />
              <ApplicationTable kind="windows" info={applications.windows} tone="from-[#4a0d16] to-[#8f1d2c]" />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/" className="inline-flex rounded-full bg-slate-950 px-6 py-3 font-semibold text-white">
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-[#8f1d2c] hover:text-[#8f1d2c]"
              >
                Contact for Application Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
