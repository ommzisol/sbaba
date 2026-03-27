"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { ShareButton } from "@/components/share-button";
import { SiteShell } from "@/components/site-shell";
import { advertisements, newsItems, pricingData } from "@/lib/site-data";

type ViewMode = "item" | "state";

type PricingRow = {
  product: string;
  city: string;
  price: number;
  change: number;
  trend: number[];
};

const bannerSlides = [
  {
    src: "/images/1.jpg",
    alt: "Steel Baba banner 1",
    link: "#packages"
  },
  {
    src: "/images/2.jpg",
    alt: "Steel Baba banner 2",
    link: "#products"
  }
];

function Sparkline({ values, positive }: { values: number[]; positive: boolean }) {
  const width = 110;
  const height = 36;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / range) * (height - 6) - 3;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-9 w-28">
      <polyline
        fill="none"
        stroke={positive ? "#10b981" : "#ef4444"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}

function groupByCity(data: readonly PricingRow[]): PricingRow[] {
  const grouped = new Map<string, { prices: number[]; changes: number[]; trend: number[] }>();

  data.forEach((item) => {
    const existing = grouped.get(item.city) ?? { prices: [], changes: [], trend: [] };
    existing.prices.push(item.price);
    existing.changes.push(item.change);
    existing.trend.push(item.trend[item.trend.length - 1]);
    grouped.set(item.city, existing);
  });

  return Array.from(grouped.entries()).map(([city, entry]) => ({
    product: `${city} Market`,
    city,
    price: Math.round(entry.prices.reduce((sum, value) => sum + value, 0) / entry.prices.length),
    change: Math.round((entry.changes.reduce((sum, value) => sum + value, 0) / entry.changes.length) * 10) / 10,
    trend: entry.trend
  }));
}

function HeroGraph() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-10">
      <div className="w-full max-w-[34rem] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(60,72,88,0.96)_0%,rgba(28,39,54,0.98)_100%)] p-5 shadow-[0_35px_80px_rgba(0,0,0,0.45)] backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8ef0ff]">Live Price Graph</p>
            <h3 className="mt-2 text-2xl font-bold text-white">Steel Market Trend</h3>
          </div>
          <div className="rounded-full bg-[linear-gradient(135deg,rgba(16,185,129,0.2),rgba(56,189,248,0.2))] px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-300/20">
            +4.8%
          </div>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-white/5 bg-[#1d2733]/90 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-slate-300">Average steel price</p>
              <p className="mt-1 text-3xl font-extrabold text-white">Rs. 49,500</p>
            </div>
            <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(56,189,248,0.06))] px-4 py-3 text-right ring-1 ring-white/5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Updated</p>
              <p className="mt-1 text-sm font-semibold text-slate-200">Today 10:30 AM</p>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-[1.25rem] border border-white/5 bg-[linear-gradient(180deg,rgba(8,89,165,0.12)_0%,rgba(255,255,255,0.02)_100%)]">
            <div className="relative h-[19.5rem] w-full">
              <Image
                src="/images/12.png"
                alt="Steel market graph"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 544px"
                priority
              />
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(59,130,246,0.16),rgba(34,211,238,0.08))] px-4 py-3 ring-1 ring-cyan-300/10">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Highest</p>
              <p className="mt-2 text-lg font-bold text-white">Rs. 49,500</p>
            </div>
            <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(139,92,246,0.16),rgba(244,114,182,0.08))] px-4 py-3 ring-1 ring-violet-300/10">
              <p className="text-xs uppercase tracking-[0.24em] text-violet-200">Lowest</p>
              <p className="mt-2 text-lg font-bold text-white">Rs. 46,800</p>
            </div>
            <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(16,185,129,0.18),rgba(245,158,11,0.08))] px-4 py-3 ring-1 ring-emerald-300/10">
              <p className="text-xs uppercase tracking-[0.24em] text-emerald-200">Weekly Change</p>
              <p className="mt-2 text-lg font-bold text-emerald-300">+ Rs. 2,700</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentAdSlide, setCurrentAdSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [sortBy, setSortBy] = useState("product");
  const [viewMode, setViewMode] = useState<ViewMode>("item");
  const [newsFilter, setNewsFilter] = useState("All");
  const [likedNews, setLikedNews] = useState<number[]>([]);
  const [unlikedNews, setUnlikedNews] = useState<number[]>([]);
  const [openFaq, setOpenFaq] = useState(1);

  const faqItems = [
    {
      id: 1,
      question: "What is the price of steel in India?",
      answer:
        "Steel prices in India fluctuate regularly based on market demand, raw material movement, transportation costs, and regional supply conditions. For the most accurate view, buyers should track city-wise rates daily through trusted steel pricing platforms."
    },
    {
      id: 2,
      question: "Why steel prices are increasing today?",
      answer:
        "Steel prices can increase because of stronger infrastructure demand, changes in raw material costs, logistics pressure, import-export movement, or supply-side constraints in major markets."
    },
    {
      id: 3,
      question: "Where can I find the latest TMT prices?",
      answer:
        "You can find the latest TMT and steel prices on Steel Baba through regularly updated city-wise pricing views, market trend summaries, and product comparisons."
    },
    {
      id: 4,
      question: "How is the price of iron rods calculated per kg?",
      answer:
        "Iron rod pricing per kg is usually influenced by grade, size, current market rate, transportation charges, GST considerations, and dealer margin depending on the region."
    },
    {
      id: 5,
      question: "What factors influence the price of steel?",
      answer:
        "Major factors include demand from construction and infrastructure, raw material cost, production levels, freight movement, government policy, and regional supply availability."
    },
    {
      id: 6,
      question: "How does the grade of steel affect the price?",
      answer:
        "Higher steel grades often carry different pricing because of strength specifications, manufacturing standards, application suitability, and compliance requirements."
    },
    {
      id: 7,
      question: "Can I lock in the steel price today for future orders?",
      answer:
        "In many cases, dealers and suppliers may offer quote validity for a limited period, but the exact ability to lock rates depends on market conditions and supplier terms."
    },
    {
      id: 8,
      question: "Does the steel price today include delivery costs?",
      answer:
        "Not always. Some listed rates reflect base market price only, while delivery, loading, and local transport may be added separately depending on the supplier and location."
    },
    {
      id: 9,
      question: "How can I stay informed about changes in steel prices?",
      answer:
        "The best way is to follow a dedicated steel pricing platform like Steel Baba, where daily rate changes, trends, and market updates are presented in one place."
    }
  ];

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setCurrentSlide((value) => (value + 1) % bannerSlides.length);
    }, 4000);

    const adTimer = window.setInterval(() => {
      setCurrentAdSlide((value) => (value + 1) % advertisements.length);
    }, 4500);

    return () => {
      window.clearInterval(slideTimer);
      window.clearInterval(adTimer);
    };
  }, []);

  const cityOptions = Array.from(new Set(pricingData.map((item) => item.city)));
  const activeData = viewMode === "item" ? [...pricingData] : groupByCity(pricingData);
  const newsCategories = ["All", ...Array.from(new Set(newsItems.map((item) => item.category)))];
  const filteredNews = newsItems.filter((item) => newsFilter === "All" || item.category === newsFilter);

  const filteredRows = activeData
    .filter((item) => {
      const query = searchTerm.trim().toLowerCase();
      const matchesSearch =
        item.product.toLowerCase().includes(query) || item.city.toLowerCase().includes(query);
      const matchesCity = selectedCity === "all" || item.city === selectedCity;
      return matchesSearch && matchesCity;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "city":
          return a.city.localeCompare(b.city);
        case "price-desc":
          return b.price - a.price;
        case "price-asc":
          return a.price - b.price;
        case "change-desc":
          return b.change - a.change;
        case "change-asc":
          return a.change - b.change;
        default:
          return a.product.localeCompare(b.product);
      }
    });

  return (
    <SiteShell>
      <section className="bg-white">
        <div className="grid min-h-[22rem] lg:grid-cols-[1.05fr_1fr]">
          <div className="flex items-center bg-[linear-gradient(135deg,#17354d_0%,#25567a_55%,#5d89a8_100%)] px-8 py-12 lg:px-16">
            <div className="max-w-[44rem]">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold tracking-[0.16em] text-[#d9e8fb]">
                {t("hero.badge")}
              </span>
              <h1 className="mt-5 text-[1.2rem] font-semibold leading-[1.06] tracking-[-0.03em] text-white [font-family:var(--font-display)] sm:text-[1.45rem] lg:text-[1.8rem]">
                {t("hero.title")}
              </h1>
              <p className="mt-6 max-w-2xl text-[1rem] leading-8 text-[#d8e7fb]">
                {t("hero.description")}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#pricing"
                  className="rounded-md bg-white px-6 py-3 font-semibold text-[#17354d] transition hover:bg-[#dbe5ec]"
                >
                  {t("hero.ctaRates")}
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  {t("hero.ctaContact")}
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden bg-[#1f2a37]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_40%,rgba(255,255,255,0.12),transparent_30%),linear-gradient(135deg,#1f2f3d_0%,#17232e_100%)]"></div>
            <div className="absolute -right-10 top-8 h-52 w-32 rotate-12 rounded-md bg-[linear-gradient(180deg,#bac7d0,#60798c)] opacity-70 shadow-2xl"></div>
            <div className="absolute right-10 top-14 h-56 w-36 rotate-[14deg] rounded-md bg-[linear-gradient(180deg,#d0d9df,#7d91a0)] opacity-80 shadow-2xl"></div>
            <HeroGraph />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-5 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-panel ring-1 ring-slate-200">
          <div className="relative h-[100px]">
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {bannerSlides.map((slide, index) => (
                <a key={slide.src} href={slide.link} className="relative h-full min-w-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1280px"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-4 py-3 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["West India", "Ahemdabad, Bhavnagar, Gandhidham, Mumbai, Goa"],
            ["North India", "Ludhiana, Bhiwari, Jaipur, Mujfernagar, Indore"],
            ["East India", "Durgapur, Kolkatta, Barjora, Purulia, Rourkela"],
            ["Central & South", "Raipur, Raigarh, Hyderabad and active billet markets"]
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-5 shadow-panel ring-1 ring-slate-200 transition hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 py-5 lg:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-panel ring-1 ring-slate-200">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">MS Billet Rate View</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                MS Billet Price (INR/Ton) with city-wise market movement and trend graph
              </h2>
              <p className="mt-3 max-w-3xl text-slate-600">
                Track today&apos;s MS Billet rates across major markets, compare city-wise movement, review price
                change, and monitor short trend direction in one professional table view.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {(["item", "state"] as const).map((mode) => {
                const active = viewMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setViewMode(mode)}
                    className={
                      active
                        ? "rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white"
                        : "rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    }
                  >
                    {mode === "item" ? "Item-wise View" : "State-wise View"}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr_auto]">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Search</span>
              <input
                type="text"
                placeholder="Search by city or MS Billet"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">City Filter</span>
              <select
                value={selectedCity}
                onChange={(event) => setSelectedCity(event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white"
              >
                <option value="all">All Cities</option>
                {cityOptions.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Sort</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white"
              >
                <option value="product">City Name</option>
                <option value="city">City</option>
                <option value="price-desc">Price High to Low</option>
                <option value="price-asc">Price Low to High</option>
                <option value="change-desc">Change High to Low</option>
                <option value="change-asc">Change Low to High</option>
              </select>
            </label>
            <div className="flex items-end">
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCity("all");
                  setSortBy("product");
                  setViewMode("item");
                }}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-left">
                <thead className="bg-slate-950 text-sm uppercase tracking-[0.18em] text-slate-200">
                  <tr>
                    <th className="px-4 py-4">Product Name</th>
                    <th className="px-4 py-4">City Name</th>
                    <th className="px-4 py-4">Price</th>
                    <th className="px-4 py-4">Change Price</th>
                    <th className="px-4 py-4">Trend Graph</th>
                    <th className="px-4 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-sm">
                  {filteredRows.length ? (
                    filteredRows.map((item) => {
                      const positive = item.change >= 0;
                      return (
                        <tr key={`${item.product}-${item.city}`} className="transition hover:bg-slate-50">
                          <td className="px-4 py-4 font-semibold text-slate-950">{item.product}</td>
                          <td className="px-4 py-4 text-slate-600">{item.city}</td>
                          <td className="px-4 py-4 font-semibold text-slate-950">Rs. {item.price}</td>
                          <td className="px-4 py-4">
                            <span className={`${positive ? "text-emerald-600" : "text-rose-600"} font-semibold`}>
                              {positive ? "+" : ""}
                              {item.change}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <Sparkline values={item.trend} positive={positive} />
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                                positive
                                  ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                                  : "bg-rose-50 text-rose-700 ring-rose-200"
                              }`}
                            >
                              <span>{positive ? "Up" : "Down"}</span>
                              <span>{positive ? "Price Up" : "Price Down"}</span>
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-4 py-10 text-center text-slate-500">
                        No matching entries found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="mx-auto max-w-7xl px-4 pt-2 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#eef3f9_0%,#dbe3ef_100%)] px-6 py-4 shadow-[0_22px_50px_rgba(148,163,184,0.18)]">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-400/50"></div>
            <h2 className="text-2xl font-extrabold italic tracking-[-0.02em] text-slate-900">{t("news.title")}</h2>
            <div className="h-px flex-1 bg-slate-400/50"></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-panel">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0859a5]">News Filters</p>
              <p className="mt-2 text-sm text-slate-500">Filter steel news by category just like a business news portal.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {newsCategories.map((category) => {
                const active = newsFilter === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setNewsFilter(category)}
                    className={
                      active
                        ? "rounded-full bg-[#0859a5] px-4 py-2 text-sm font-semibold text-white"
                        : "rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#0859a5] hover:text-[#0859a5]"
                    }
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="border-b border-slate-200 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#0859a5]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-[#0859a5]">
                  Top Story
                </span>
                <span className="text-sm font-medium text-slate-500">Economic desk style coverage</span>
              </div>
              <h3 className="mt-4 max-w-3xl text-[1.9rem] font-bold leading-tight tracking-[-0.03em] text-slate-950">
                Steel rates today: buyers track city-wise movement, distributor demand, and weekly price momentum
              </h3>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                The latest pricing picture shows mixed but closely watched moves across major markets, with
                businesses comparing current rates, trend direction, and local demand before placing the next round
                of purchase orders.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="font-semibold text-slate-800">Steel Baba Bureau</span>
                <span>Updated today</span>
                <span>7 min read</span>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Avg. Rate</p>
                  <p className="mt-2 text-2xl font-extrabold text-slate-950">Rs. 49,500</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Weekly Trend</p>
                  <p className="mt-2 text-2xl font-extrabold text-emerald-600">Positive</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Coverage</p>
                  <p className="mt-2 text-2xl font-extrabold text-slate-950">18 Cities</p>
                </div>
              </div>
            </article>

            <div className="space-y-5">
              {filteredNews.map((item) => {
                const liked = likedNews.includes(item.id);
                const unliked = unlikedNews.includes(item.id);

                return (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#0859a5]">
                      {item.category}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        item.tone === "up"
                          ? "bg-emerald-50 text-emerald-700"
                          : item.tone === "down"
                            ? "bg-rose-50 text-rose-700"
                            : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {item.tone === "up" ? "Market Up" : item.tone === "down" ? "Watch Risk" : "Stable View"}
                    </span>
                  </div>
                  <h4 className="mt-3 text-xl font-extrabold leading-snug tracking-[-0.02em] text-slate-950">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
                    <span className="text-slate-500">{item.time}</span>
                    <Link
                      href={`/news/${item.slug}`}
                      className="font-semibold text-[#0859a5] transition hover:text-[#063f76]"
                    >
                      Read full story
                    </Link>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-4">
                    <ShareButton
                      title={item.title}
                      text={item.summary}
                      url={`/news/${item.slug}`}
                      className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#0859a5] hover:text-[#0859a5]"
                    />
                    <button
                      type="button"
                      className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#0859a5] hover:text-[#0859a5]"
                    >
                      Comment {item.comments}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLikedNews((current) =>
                          current.includes(item.id) ? current.filter((value) => value !== item.id) : [...current, item.id]
                        );
                        setUnlikedNews((current) => current.filter((value) => value !== item.id));
                      }}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        liked
                          ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border border-slate-300 text-slate-700 hover:border-emerald-300 hover:text-emerald-700"
                      }`}
                    >
                      Like
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setUnlikedNews((current) =>
                          current.includes(item.id) ? current.filter((value) => value !== item.id) : [...current, item.id]
                        );
                        setLikedNews((current) => current.filter((value) => value !== item.id));
                      }}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        unliked
                          ? "border border-rose-200 bg-rose-50 text-rose-700"
                          : "border border-slate-300 text-slate-700 hover:border-rose-300 hover:text-rose-700"
                      }`}
                    >
                      Unlike
                    </button>
                  </div>
                </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-5 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-panel">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-300">Advertisement Zone</p>
            <h3 className="mt-3 text-2xl font-bold">Featured promotions and sponsored banners</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              This block now comes right after pricing so users first see product rates, then high-visibility
              advertisement banners, partner campaigns, and premium service promotions.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-panel ring-1 ring-slate-200">
            <div className="relative h-[200px]">
              <div
                className="flex h-full transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentAdSlide * 100}%)` }}
              >
                {advertisements.map((advertisement) => (
                  <a key={advertisement.title} href={advertisement.link} className="h-full min-w-full">
                    <div
                      className={`flex h-full flex-col justify-between bg-gradient-to-r ${advertisement.palette} p-6 text-white transition hover:brightness-105 sm:flex-row sm:items-end`}
                    >
                      <div className="max-w-xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                          Advertisement Slider
                        </p>
                        <h3 className="mt-3 text-2xl font-bold">{advertisement.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-white/90">{advertisement.subtitle}</p>
                      </div>
                      <span className="mt-4 inline-flex rounded-full border border-white/30 px-4 py-2 text-sm font-semibold sm:mt-0">
                        View Campaign
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#eef3fa_0%,#e8edf6_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#25567a]">{t("faq.badge")}</p>
            <h2 className="mt-3 max-w-4xl text-[1.3rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#17354d] [font-family:var(--font-display)] sm:text-[1.62rem]">
              {t("faq.title")}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.95fr]">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-panel">
              {faqItems.map((item) => {
                const active = openFaq === item.id;

                return (
                  <div key={item.id} className="border-b border-slate-200 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(active ? 0 : item.id)}
                      className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50"
                    >
                      <span className="text-[1.1rem] font-bold leading-8 tracking-[-0.02em] text-slate-950">
                        {item.id}. {item.question}
                      </span>
                      <span className="pt-1 text-2xl font-light text-[#25567a]">{active ? "-" : "+"}</span>
                    </button>
                    {active ? (
                      <div className="border-t border-slate-100 px-6 pb-6 pt-2">
                        <p className="max-w-4xl text-[1rem] leading-8 text-slate-600">{item.answer}</p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-panel lg:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#25567a]">{t("faq.enquiry")}</p>
              <p className="mt-2 text-[1rem] leading-7 text-slate-600">
                {t("faq.enquiryDescription")}
              </p>

              <form className="mt-7 space-y-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-800">Contact Person*</span>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-[#8fa5c7] bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#25567a]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-800">Your Email ID*</span>
                  <input
                    type="email"
                    placeholder="Enter your email ID"
                    className="w-full rounded-xl border border-[#8fa5c7] bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#25567a]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-800">Mobile No.*</span>
                  <input
                    type="tel"
                    placeholder="Enter your Phone Number"
                    className="w-full rounded-xl border border-[#8fa5c7] bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#25567a]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-800">City*</span>
                  <select className="w-full rounded-xl border border-[#8fa5c7] bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#25567a]">
                    <option>--Please choose an option--</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Ahmedabad</option>
                    <option>Chennai</option>
                    <option>Bengaluru</option>
                  </select>
                </label>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#25567a] px-6 py-3.5 text-[1rem] font-semibold text-white transition hover:bg-[#17354d]"
                >
                  {t("faq.submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#25567a]">Customer Trust</p>
              <h2 className="mt-4 text-[1.3rem] font-semibold tracking-[-0.025em] text-slate-950 [font-family:var(--font-display)] sm:text-[1.62rem]">
                Trusted by customers who rely on timely pricing, market visibility, and business support
              </h2>
              <p className="mt-4 text-[1.02rem] leading-8 text-slate-600">
                From traders and distributors to manufacturers and procurement teams, Steel Baba helps customers
                stay informed through reliable pricing access and practical market intelligence.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["12,500+", "Happy Customers"],
              ["4.8 / 5", "Average Rating"],
              ["3,200+", "Verified Reviews"],
              ["92%", "Repeat User Satisfaction"]
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-sm"
              >
                <p className="text-[1.3rem] font-semibold tracking-[-0.025em] text-[#25567a] [font-family:var(--font-display)]">{value}</p>
                <p className="mt-3 text-[1rem] font-semibold text-slate-700">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#f7fbff_0%,#eef4fb_100%)] p-6 shadow-panel">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#25567a]">Reviews & Feedback</p>
                <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-950">
                  What customers say about Steel Baba
                </h3>
              </div>
              <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 ring-1 ring-slate-200">
                Auto-scrolling reviews
              </div>
            </div>

            <div className="mt-8 overflow-hidden">
              <div className="flex w-max animate-[marquee_34s_linear_infinite] gap-5">
                {[
                  {
                    name: "Rohit Traders",
                    role: "Steel Distributor",
                    rating: "5.0",
                    feedback:
                      "Steel Baba helps us track daily steel rate movement quickly. The city-wise updates and product coverage are very useful for business decisions."
                  },
                  {
                    name: "Khurana Metals",
                    role: "Metal Market Buyer",
                    rating: "4.8",
                    feedback:
                      "The platform gives us a much clearer picture of metal and raw material price trends. It saves time and improves our buying process."
                  },
                  {
                    name: "Shree Build Infra",
                    role: "Project Procurement Team",
                    rating: "4.9",
                    feedback:
                      "We use Steel Baba for market visibility before placing orders. The information is structured well and easy to compare across products."
                  },
                  {
                    name: "Punjab Rolling Works",
                    role: "Manufacturer",
                    rating: "5.0",
                    feedback:
                      "The combination of market updates, pricing references, and communication channels makes Steel Baba a strong support platform for our team."
                  },
                  {
                    name: "Agarwal Retail Steel",
                    role: "Retailer",
                    rating: "4.7",
                    feedback:
                      "The updates are timely and useful. We especially like the clean dashboard style and the way reviews, news, and product information are presented."
                  }
                ]
                  .concat([
                    {
                      name: "Rohit Traders",
                      role: "Steel Distributor",
                      rating: "5.0",
                      feedback:
                        "Steel Baba helps us track daily steel rate movement quickly. The city-wise updates and product coverage are very useful for business decisions."
                    },
                    {
                      name: "Khurana Metals",
                      role: "Metal Market Buyer",
                      rating: "4.8",
                      feedback:
                        "The platform gives us a much clearer picture of metal and raw material price trends. It saves time and improves our buying process."
                    },
                    {
                      name: "Shree Build Infra",
                      role: "Project Procurement Team",
                      rating: "4.9",
                      feedback:
                        "We use Steel Baba for market visibility before placing orders. The information is structured well and easy to compare across products."
                    },
                    {
                      name: "Punjab Rolling Works",
                      role: "Manufacturer",
                      rating: "5.0",
                      feedback:
                        "The combination of market updates, pricing references, and communication channels makes Steel Baba a strong support platform for our team."
                    },
                    {
                      name: "Agarwal Retail Steel",
                      role: "Retailer",
                      rating: "4.7",
                      feedback:
                        "The updates are timely and useful. We especially like the clean dashboard style and the way reviews, news, and product information are presented."
                    }
                  ])
                  .map((review, index) => (
                    <article
                      key={`${review.name}-${index}`}
                      className="w-[22rem] shrink-0 rounded-[1.8rem] border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-lg font-extrabold text-slate-950">{review.name}</h4>
                          <p className="mt-1 text-sm text-slate-500">{review.role}</p>
                        </div>
                        <div className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
                          {review.rating} ★
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-slate-600">{review.feedback}</p>
                      <div className="mt-5 flex items-center gap-2 text-amber-400">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#031226_0%,#0b2d57_48%,#0f5eaf_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.16),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Featured Highlights</p>
              <h2 className="mt-4 text-[1.3rem] font-semibold tracking-[-0.025em] text-white [font-family:var(--font-display)] sm:text-[1.62rem]">
                Market updates, premium services, and customer-focused offers in one moving showcase
              </h2>
              <p className="mt-4 text-[1.02rem] leading-8 text-slate-200">
                A high-visibility promotional slider designed to keep customers engaged with pricing alerts, business
                support, premium subscriptions, and sector coverage updates.
              </p>
            </div>
            <div className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white/90">
              Auto-scrolling promotions
            </div>
          </div>

          <div className="mt-10 overflow-hidden">
            <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-5">
              {[
                {
                  title: "Premium Steel Alerts",
                  text: "Get instant steel and raw material price changes delivered through dashboard, WhatsApp, and text message.",
                  tone: "from-cyan-500 to-blue-600"
                },
                {
                  title: "Daily Market Intelligence",
                  text: "Track product movement across steel, metal, agriculture, NCDEX, MCX, and LME segments from one platform.",
                  tone: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Dealer Support Access",
                  text: "Designed for dealers, manufacturers, traders, and retailers who need stronger visibility across active markets.",
                  tone: "from-amber-400 to-orange-500"
                },
                {
                  title: "Future Market Tracking",
                  text: "Compare real-time and futures-linked pricing trends to improve planning, procurement timing, and market response.",
                  tone: "from-fuchsia-500 to-pink-600"
                },
                {
                  title: "Sector-Wide Coverage",
                  text: "From iron and steel to metals, food, agriculture, and industrial raw materials, stay connected to every key segment.",
                  tone: "from-violet-500 to-indigo-600"
                }
              ]
                .concat([
                  {
                    title: "Premium Steel Alerts",
                    text: "Get instant steel and raw material price changes delivered through dashboard, WhatsApp, and text message.",
                    tone: "from-cyan-500 to-blue-600"
                  },
                  {
                    title: "Daily Market Intelligence",
                    text: "Track product movement across steel, metal, agriculture, NCDEX, MCX, and LME segments from one platform.",
                    tone: "from-emerald-500 to-teal-600"
                  },
                  {
                    title: "Dealer Support Access",
                    text: "Designed for dealers, manufacturers, traders, and retailers who need stronger visibility across active markets.",
                    tone: "from-amber-400 to-orange-500"
                  },
                  {
                    title: "Future Market Tracking",
                    text: "Compare real-time and futures-linked pricing trends to improve planning, procurement timing, and market response.",
                    tone: "from-fuchsia-500 to-pink-600"
                  },
                  {
                    title: "Sector-Wide Coverage",
                    text: "From iron and steel to metals, food, agriculture, and industrial raw materials, stay connected to every key segment.",
                    tone: "from-violet-500 to-indigo-600"
                  }
                ])
                .map((card, index) => (
                  <article
                    key={`${card.title}-${index}`}
                    className="w-[20rem] shrink-0 rounded-[1.8rem] border border-white/10 bg-white/8 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.24)] backdrop-blur"
                  >
                    <div className={`inline-flex rounded-full bg-gradient-to-r ${card.tone} px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-white`}>
                      Featured
                    </div>
                    <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.03em] text-white">{card.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-200">{card.text}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/80">
                        Steel Baba
                      </span>
                      <Link href="/contact" className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
                        Explore More
                      </Link>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
