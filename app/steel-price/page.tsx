"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

type RateRow = {
  city: string;
  item: string;
  price: number;
  change: number;
  trend: number[];
  status: "Right" | "Wrong";
};

type SteelPriceData = Record<string, Record<string, RateRow[]>>;

const steelPriceData: SteelPriceData = {
  "Iron and Steel": {
    "TMT Bar 8mm": [
      { city: "Ahmedabad", item: "TMT Bar 8mm", price: 55200, change: 320, trend: [54000, 54320, 54560, 54840, 55010, 55200], status: "Right" },
      { city: "Raipur", item: "TMT Bar 8mm", price: 54800, change: -180, trend: [55400, 55310, 55180, 55090, 54950, 54800], status: "Wrong" },
      { city: "Chennai", item: "TMT Bar 8mm", price: 55750, change: 250, trend: [54840, 55060, 55230, 55410, 55600, 55750], status: "Right" },
      { city: "Ludhiana", item: "TMT Bar 8mm", price: 55390, change: 130, trend: [54720, 54810, 54940, 55110, 55260, 55390], status: "Right" }
    ],
    "TMT Bar 12mm": [
      { city: "Mumbai", item: "TMT Bar 12mm", price: 56100, change: 280, trend: [54920, 55110, 55380, 55640, 55820, 56100], status: "Right" },
      { city: "Delhi", item: "TMT Bar 12mm", price: 55920, change: -120, trend: [56400, 56340, 56210, 56140, 56050, 55920], status: "Wrong" },
      { city: "Jaipur", item: "TMT Bar 12mm", price: 56040, change: 60, trend: [55520, 55640, 55720, 55830, 55910, 56040], status: "Right" },
      { city: "Hyderabad", item: "TMT Bar 12mm", price: 56220, change: 180, trend: [55410, 55570, 55790, 55920, 56080, 56220], status: "Right" }
    ],
    "MS Angle 50x50": [
      { city: "Nagpur", item: "MS Angle 50x50", price: 58700, change: 210, trend: [57820, 58040, 58200, 58390, 58560, 58700], status: "Right" },
      { city: "Kanpur", item: "MS Angle 50x50", price: 58480, change: -90, trend: [58940, 58810, 58700, 58600, 58520, 58480], status: "Wrong" },
      { city: "Surat", item: "MS Angle 50x50", price: 58610, change: 120, trend: [58120, 58260, 58390, 58480, 58520, 58610], status: "Right" }
    ],
    "Steel Billet": [
      { city: "Mandi Gobindgarh", item: "Steel Billet", price: 43850, change: 340, trend: [42400, 42840, 43120, 43400, 43640, 43850], status: "Right" },
      { city: "Raigarh", item: "Steel Billet", price: 43620, change: 140, trend: [43010, 43120, 43240, 43330, 43480, 43620], status: "Right" },
      { city: "Durgapur", item: "Steel Billet", price: 43480, change: -60, trend: [43880, 43810, 43720, 43610, 43540, 43480], status: "Wrong" }
    ]
  },
  "Finished Market": {
    "MS Plate 10mm": [
      { city: "Kolkata", item: "MS Plate 10mm", price: 60200, change: 420, trend: [58940, 59210, 59500, 59740, 60020, 60200], status: "Right" },
      { city: "Bengaluru", item: "MS Plate 10mm", price: 59900, change: -90, trend: [60410, 60310, 60220, 60100, 60010, 59900], status: "Wrong" },
      { city: "Pune", item: "MS Plate 10mm", price: 60140, change: 160, trend: [59520, 59660, 59790, 59900, 60010, 60140], status: "Right" }
    ],
    "Chequered Plate": [
      { city: "Pune", item: "Chequered Plate", price: 61500, change: 380, trend: [60320, 60580, 60890, 61110, 61320, 61500], status: "Right" },
      { city: "Surat", item: "Chequered Plate", price: 61240, change: 120, trend: [60710, 60820, 60980, 61090, 61160, 61240], status: "Right" },
      { city: "Delhi", item: "Chequered Plate", price: 61100, change: -70, trend: [61400, 61320, 61280, 61210, 61180, 61100], status: "Wrong" }
    ],
    "CR Coil": [
      { city: "Mumbai", item: "CR Coil", price: 65400, change: 310, trend: [64100, 64420, 64710, 64960, 65120, 65400], status: "Right" },
      { city: "Chennai", item: "CR Coil", price: 65180, change: 80, trend: [64740, 64820, 64910, 65000, 65090, 65180], status: "Right" },
      { city: "Ahmedabad", item: "CR Coil", price: 64960, change: -110, trend: [65480, 65320, 65200, 65110, 65020, 64960], status: "Wrong" }
    ]
  },
  "Metal Market": {
    Copper: [
      { city: "Delhi", item: "Copper", price: 812, change: 6, trend: [785, 790, 796, 801, 807, 812], status: "Right" },
      { city: "Ahmedabad", item: "Copper", price: 809, change: -2, trend: [818, 816, 814, 812, 810, 809], status: "Wrong" },
      { city: "Mumbai", item: "Copper", price: 814, change: 5, trend: [792, 796, 800, 804, 809, 814], status: "Right" }
    ],
    Aluminium: [
      { city: "Mumbai", item: "Aluminium", price: 248, change: 4, trend: [236, 238, 241, 243, 246, 248], status: "Right" },
      { city: "Chennai", item: "Aluminium", price: 246, change: 1, trend: [241, 242, 243, 244, 245, 246], status: "Right" },
      { city: "Rajkot", item: "Aluminium", price: 244, change: -3, trend: [250, 249, 248, 247, 245, 244], status: "Wrong" }
    ],
    Zinc: [
      { city: "Vadodara", item: "Zinc", price: 266, change: 3, trend: [254, 257, 259, 261, 264, 266], status: "Right" },
      { city: "Kolkata", item: "Zinc", price: 264, change: -1, trend: [269, 268, 267, 266, 265, 264], status: "Wrong" },
      { city: "Ludhiana", item: "Zinc", price: 267, change: 2, trend: [258, 260, 262, 264, 265, 267], status: "Right" }
    ]
  },
  "Raw Material": {
    "Iron Ore Fines": [
      { city: "Raigarh", item: "Iron Ore Fines", price: 4920, change: 75, trend: [4680, 4720, 4780, 4830, 4880, 4920], status: "Right" },
      { city: "Bellary", item: "Iron Ore Fines", price: 4870, change: -35, trend: [4950, 4930, 4910, 4890, 4880, 4870], status: "Wrong" },
      { city: "Barbil", item: "Iron Ore Fines", price: 4900, change: 40, trend: [4800, 4820, 4840, 4860, 4885, 4900], status: "Right" }
    ],
    "Coking Coal": [
      { city: "Haldia", item: "Coking Coal", price: 18250, change: 210, trend: [17500, 17680, 17840, 18000, 18120, 18250], status: "Right" },
      { city: "Visakhapatnam", item: "Coking Coal", price: 18140, change: 90, trend: [17700, 17800, 17920, 18010, 18080, 18140], status: "Right" },
      { city: "Paradip", item: "Coking Coal", price: 18060, change: -60, trend: [18420, 18370, 18290, 18220, 18130, 18060], status: "Wrong" }
    ],
    "Sponge Iron": [
      { city: "Raipur", item: "Sponge Iron", price: 29700, change: 260, trend: [28620, 28910, 29120, 29340, 29520, 29700], status: "Right" },
      { city: "Rourkela", item: "Sponge Iron", price: 29480, change: -80, trend: [29920, 29810, 29720, 29610, 29530, 29480], status: "Wrong" },
      { city: "Hospet", item: "Sponge Iron", price: 29620, change: 140, trend: [28940, 29100, 29280, 29420, 29520, 29620], status: "Right" }
    ]
  },
  Agriculture: {
    Wheat: [
      { city: "Kota", item: "Wheat", price: 2610, change: 18, trend: [2520, 2540, 2560, 2575, 2590, 2610], status: "Right" },
      { city: "Indore", item: "Wheat", price: 2598, change: -6, trend: [2630, 2622, 2616, 2608, 2602, 2598], status: "Wrong" },
      { city: "Ludhiana", item: "Wheat", price: 2624, change: 10, trend: [2550, 2568, 2580, 2595, 2610, 2624], status: "Right" }
    ],
    Soybean: [
      { city: "Nagpur", item: "Soybean", price: 4820, change: 44, trend: [4680, 4700, 4730, 4760, 4790, 4820], status: "Right" },
      { city: "Akola", item: "Soybean", price: 4795, change: -18, trend: [4870, 4850, 4840, 4825, 4810, 4795], status: "Wrong" },
      { city: "Jaipur", item: "Soybean", price: 4810, change: 12, trend: [4720, 4745, 4765, 4780, 4795, 4810], status: "Right" }
    ],
    Jeera: [
      { city: "Unjha", item: "Jeera", price: 28400, change: 320, trend: [27040, 27300, 27640, 27920, 28110, 28400], status: "Right" },
      { city: "Jodhpur", item: "Jeera", price: 28220, change: 90, trend: [27520, 27610, 27780, 27940, 28090, 28220], status: "Right" },
      { city: "Ahmedabad", item: "Jeera", price: 28140, change: -70, trend: [28610, 28520, 28440, 28320, 28220, 28140], status: "Wrong" }
    ]
  },
  "MCX / NCDEX / LME": {
    "MCX Copper": [
      { city: "Mumbai", item: "MCX Copper", price: 811.6, change: 5.2, trend: [792.1, 796.2, 799.8, 804.1, 808.4, 811.6], status: "Right" },
      { city: "Delhi", item: "MCX Copper", price: 810.4, change: -1.8, trend: [817.2, 815.8, 814.1, 812.9, 811.6, 810.4], status: "Wrong" },
      { city: "Ahmedabad", item: "MCX Copper", price: 812.2, change: 3.6, trend: [798.2, 800.4, 803.2, 806.1, 809.5, 812.2], status: "Right" }
    ],
    "NCDEX Wheat": [
      { city: "Jaipur", item: "NCDEX Wheat", price: 2634, change: 22, trend: [2540, 2565, 2580, 2600, 2618, 2634], status: "Right" },
      { city: "Delhi", item: "NCDEX Wheat", price: 2620, change: -4, trend: [2652, 2646, 2638, 2630, 2625, 2620], status: "Wrong" },
      { city: "Kota", item: "NCDEX Wheat", price: 2638, change: 16, trend: [2564, 2580, 2598, 2612, 2624, 2638], status: "Right" }
    ],
    "LME Aluminium": [
      { city: "Chennai", item: "LME Aluminium", price: 248.2, change: 2.8, trend: [238.1, 240.6, 242.4, 244.6, 246.1, 248.2], status: "Right" },
      { city: "Mumbai", item: "LME Aluminium", price: 247.4, change: 0.9, trend: [241.8, 242.9, 244.1, 245.0, 246.2, 247.4], status: "Right" },
      { city: "Kolkata", item: "LME Aluminium", price: 246.1, change: -1.1, trend: [250.5, 249.4, 248.3, 247.4, 246.8, 246.1], status: "Wrong" }
    ]
  }
};

function TrendGraph({ values, positive }: { values: number[]; positive: boolean }) {
  const width = 132;
  const height = 42;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const points = values
    .map((value, index) => {
      const x = 6 + (index / (values.length - 1)) * (width - 12);
      const y = height - ((value - min) / range) * (height - 10) - 5;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-10 w-32">
      <polyline
        fill="none"
        stroke={positive ? "#10b981" : "#ef4444"}
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}

function formatPrice(price: number) {
  return `Rs. ${price.toLocaleString("en-IN", {
    minimumFractionDigits: Number.isInteger(price) ? 0 : 1,
    maximumFractionDigits: Number.isInteger(price) ? 0 : 1
  })}`;
}

export default function SteelPricePage() {
  const categories = Object.keys(steelPriceData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openCategory, setOpenCategory] = useState(categories[0]);
  const [activeItem, setActiveItem] = useState(Object.keys(steelPriceData[categories[0]])[0]);

  const rates = useMemo(() => steelPriceData[activeCategory][activeItem] ?? [], [activeCategory, activeItem]);

  const summary = useMemo(() => {
    const prices = rates.map((row) => row.price);
    const positiveMoves = rates.filter((row) => row.change >= 0).length;

    return {
      averagePrice: prices.length ? prices.reduce((sum, value) => sum + value, 0) / prices.length : 0,
      highestPrice: prices.length ? Math.max(...prices) : 0,
      lowestPrice: prices.length ? Math.min(...prices) : 0,
      positiveMoves
    };
  }, [rates]);

  return (
    <SiteShell>
      <main className="bg-[linear-gradient(180deg,#edf4fc_0%,#ffffff_100%)]">
        <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-18">
          <div className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-[0_28px_70px_rgba(148,163,184,0.16)]">
            <div className="bg-[linear-gradient(135deg,#0a4f93_0%,#0f68bf_55%,#1e86e2_100%)] px-8 py-10 text-white lg:px-10 lg:py-12">
              <div className="max-w-5xl">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/80">Steel Price Dashboard</p>
                <h1 className="mt-4 text-[1.3rem] font-semibold leading-tight tracking-[-0.025em] [font-family:var(--font-display)] lg:text-[1.8rem]">
                  Category-wise market rate page with item list on the left and city-wise pricing on the right
                </h1>
                <p className="mt-5 max-w-4xl text-[1rem] leading-8 text-[#d8ebff]">
                  Choose a category, open any item, and instantly view that item&apos;s latest rate table. Each row
                  shows city name, item name, price, change price, graph movement, and a clear right or wrong status
                  column for faster comparison.
                </p>
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[20rem_1fr]">
              <aside className="border-r border-slate-200 bg-[linear-gradient(180deg,#f7fbff_0%,#edf4fb_100%)] p-5 lg:p-6">
                <div className="rounded-[1.6rem] bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8f1d2c]">Category Panel</p>
                  <h2 className="mt-2 text-xl font-extrabold tracking-[-0.03em] text-slate-950">Select Market Category</h2>
                  <div className="mt-4 grid gap-3">
                    {categories.map((category) => {
                      const active = category === activeCategory;
                      const expanded = category === openCategory;
                      const items = Object.keys(steelPriceData[category]);

                      return (
                        <div
                          key={category}
                          className={`overflow-hidden rounded-2xl border ${
                            active ? "border-[#8f1d2c]/30 bg-[#fbf1f3]" : "border-slate-200 bg-white"
                          }`}
                        >
                          <div className="flex items-center gap-2 p-2">
                            <button
                              type="button"
                              onClick={() => {
                                setActiveCategory(category);
                                if (!expanded) {
                                  setOpenCategory(category);
                                }
                              }}
                              className={
                                active
                                  ? "flex-1 rounded-xl bg-[#8f1d2c] px-4 py-3 text-left text-sm font-semibold text-white shadow-sm"
                                  : "flex-1 rounded-xl bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[#8f1d2c]"
                              }
                            >
                              {category}
                            </button>
                            <button
                              type="button"
                              aria-label={expanded ? `Collapse ${category}` : `Expand ${category}`}
                              onClick={() => {
                                if (expanded) {
                                  setOpenCategory("");
                                } else {
                                  setOpenCategory(category);
                                  setActiveCategory(category);
                                  setActiveItem(Object.keys(steelPriceData[category])[0]);
                                }
                              }}
                              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl font-semibold text-slate-700 transition hover:border-[#8f1d2c] hover:text-[#8f1d2c]"
                            >
                              {expanded ? "-" : "+"}
                            </button>
                          </div>

                          {expanded ? (
                            <div className="border-t border-slate-200 bg-white px-3 pb-3 pt-2">
                              <div className="grid gap-2">
                                {items.map((item) => {
                                  const itemActive = active && item === activeItem;

                                  return (
                                    <button
                                      key={item}
                                      type="button"
                                      onClick={() => {
                                        setActiveCategory(category);
                                        setActiveItem(item);
                                      }}
                                      className={
                                        itemActive
                                          ? "rounded-xl bg-slate-950 px-3 py-2.5 text-left text-sm font-semibold text-white"
                                          : "rounded-xl bg-slate-50 px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                                      }
                                    >
                                      {item}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </aside>

              <section className="p-5 lg:p-6">
                <div className="rounded-[1.8rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5 shadow-sm">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8f1d2c]">{activeCategory}</p>
                      <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] text-slate-950">{activeItem}</h2>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                        This view shows selected item rates across active cities, including price movement, trend graph,
                        and rate validation status.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#8f1d2c] hover:text-[#8f1d2c]"
                    >
                      Request detailed rate access
                    </Link>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <div className="rounded-[1.4rem] bg-[#0c1729] px-5 py-4 text-white">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Average Price</p>
                      <p className="mt-3 text-2xl font-extrabold">{formatPrice(summary.averagePrice)}</p>
                    </div>
                    <div className="rounded-[1.4rem] border border-slate-200 bg-white px-5 py-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Highest Price</p>
                      <p className="mt-3 text-2xl font-extrabold text-slate-950">{formatPrice(summary.highestPrice)}</p>
                    </div>
                    <div className="rounded-[1.4rem] border border-slate-200 bg-white px-5 py-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Lowest Price</p>
                      <p className="mt-3 text-2xl font-extrabold text-slate-950">{formatPrice(summary.lowestPrice)}</p>
                    </div>
                    <div className="rounded-[1.4rem] border border-slate-200 bg-white px-5 py-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Positive Moves</p>
                      <p className="mt-3 text-2xl font-extrabold text-emerald-600">{summary.positiveMoves}/{rates.length}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left">
                      <thead className="bg-slate-950 text-xs uppercase tracking-[0.24em] text-slate-200">
                        <tr>
                          <th className="px-5 py-4">City Name</th>
                          <th className="px-5 py-4">Item Name</th>
                          <th className="px-5 py-4">Price</th>
                          <th className="px-5 py-4">Change Price</th>
                          <th className="px-5 py-4">Graph</th>
                          <th className="px-5 py-4">Rate Right / Wrong</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-sm">
                        {rates.map((row) => {
                          const positive = row.change >= 0;

                          return (
                            <tr key={`${row.city}-${row.item}`} className="transition hover:bg-slate-50">
                              <td className="px-5 py-4 font-semibold text-slate-950">{row.city}</td>
                              <td className="px-5 py-4 text-slate-700">{row.item}</td>
                              <td className="px-5 py-4 font-semibold text-slate-950">{formatPrice(row.price)}</td>
                              <td className="px-5 py-4">
                                <span className={`font-semibold ${positive ? "text-emerald-600" : "text-rose-600"}`}>
                                  {positive ? "+" : ""}
                                  {row.change}
                                </span>
                              </td>
                              <td className="px-5 py-4">
                                <TrendGraph values={row.trend} positive={positive} />
                              </td>
                              <td className="px-5 py-4">
                                <span
                                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                                    row.status === "Right"
                                      ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                                      : "bg-rose-50 text-rose-700 ring-rose-200"
                                  }`}
                                >
                                  {row.status}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8f1d2c]">How it works</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      First select a category, then choose an item from the list. The right-side panel updates instantly
                      with city-wise rates and visual trend movement.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8f1d2c]">Rate status</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      The final column marks each row as Right or Wrong so users can quickly understand the latest
                      validation direction for that market rate.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8f1d2c]">Business use</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      This layout is useful for dealers, manufacturers, traders, and retailers who need daily product
                      comparison before planning purchase or sale activity.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
