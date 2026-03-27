import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

function SegmentVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#1d4f91_55%,#4aa4ff_100%)] p-6 text-white shadow-[0_30px_70px_rgba(15,23,42,0.26)]">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-rose-300/10 blur-2xl" />
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-200">Market Flow</p>
      <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em]">How segments move through the market</h2>

      <div className="mt-8 grid gap-4">
        {[
          ["Raw Material", "Iron ore, scrap, coal, billets, and input-side cost movement start the pricing chain."],
          ["Steel Production", "Manufacturers process inputs into finished and semi-finished steel products for multiple industries."],
          ["Distribution", "Dealers, distributors, stockists, and regional suppliers move inventory based on demand and logistics."],
          ["End-Market Demand", "Construction, infrastructure, fabrication, agriculture, and food-linked sectors drive buying pressure."]
        ].map(([title, description], index) => (
          <div
            key={title}
            className="grid grid-cols-[3.2rem_1fr] items-start gap-4 rounded-[1.4rem] border border-white/10 bg-white/8 p-4 backdrop-blur"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-lg font-bold text-white">
              0{index + 1}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-200">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SegmentsPage() {
  return (
    <SiteShell>
      <main className="bg-[linear-gradient(180deg,#eef4fb_0%,#ffffff_100%)]">
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8f1d2c]">Segments</p>
              <h1 className="mt-4 max-w-4xl text-[1.32rem] font-semibold leading-tight tracking-[-0.025em] text-slate-950 [font-family:var(--font-display)] lg:text-[2.04rem]">
                Understanding how market segments work in steel and commodity pricing
              </h1>
              <p className="mt-6 max-w-3xl text-[1.05rem] leading-9 text-slate-600">
                In the steel and commodity ecosystem, market segments represent the different layers through which
                pricing, supply, demand, production, and distribution move. Each segment influences how rates are
                formed, how volatility spreads, and how businesses should interpret market information before making
                procurement or trading decisions.
              </p>

              <div className="mt-8 grid gap-5">
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-slate-950">What is a market segment?</h2>
                  <p className="mt-4 text-[1rem] leading-8 text-slate-600">
                    A market segment is a specific part of the overall market grouped by product type, user demand,
                    trade channel, or industrial use. In steel, this can include raw materials, semi-finished goods,
                    finished products, distributors, regional buyers, infrastructure demand, fabrication demand, and
                    sector-linked consumption.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-slate-950">How the process works</h2>
                  <p className="mt-4 text-[1rem] leading-8 text-slate-600">
                    The process usually begins with raw material prices and production-side cost changes. These
                    shifts affect manufacturers, which then influence finished steel pricing. From there, rates move
                    through dealers, distributors, stockists, and end-market buyers. Demand from construction,
                    infrastructure, agriculture, fabrication, and food-linked sectors can then increase or reduce
                    movement in specific segments.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-slate-950">Why segment tracking matters</h2>
                  <p className="mt-4 text-[1rem] leading-8 text-slate-600">
                    Segment-level tracking helps businesses understand where the market is moving and why. A rise in
                    raw material rates may not immediately affect all finished products in the same way. Similarly,
                    strong demand in one region or sector may create faster price movement for a particular segment
                    while another remains stable. This is why segment-based market analysis is important for
                    procurement planning, pricing visibility, and risk awareness.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Business Insight</p>
                <p className="mt-3 text-[1rem] leading-8 text-amber-900">
                  At Steel Baba, segment analysis helps users understand which part of the market is driving
                  change, whether it is raw material cost, finished product demand, regional distribution activity,
                  or industry-specific buying patterns.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/" className="inline-flex rounded-full bg-slate-950 px-6 py-3 font-semibold text-white">
                  Back to Home
                </Link>
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <SegmentVisual />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
