import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

type VideoCard = {
  title: string;
  tagline: string;
  publishedOn: string;
  duration: string;
  summary: string;
  category: string;
  tone: string;
  source: "YouTube" | "System Video";
};

const youtubeVideos: VideoCard[] = [
  {
    title: "Latest Steel Price Update Across Major Cities",
    tagline: "Daily market movement and city-wise steel rate overview",
    publishedOn: "March 18, 2026",
    duration: "08:42",
    summary:
      "A market-focused YouTube update covering daily steel price movement, TMT rates, and major city comparison for active buyers and dealers.",
    category: "Steel Rates",
    tone: "from-red-500 to-rose-600",
    source: "YouTube"
  },
  {
    title: "Metal Market Weekly Trend Report",
    tagline: "Copper, aluminium, zinc, and benchmark direction in one report",
    publishedOn: "March 15, 2026",
    duration: "11:06",
    summary:
      "A professional video summary of weekly metal market performance with quick highlights for industrial buyers and pricing teams.",
    category: "Metal Market",
    tone: "from-amber-500 to-orange-600",
    source: "YouTube"
  },
  {
    title: "NCDEX and MCX Commodity Market Review",
    tagline: "Exchange-linked movement explained in a simple business format",
    publishedOn: "March 12, 2026",
    duration: "09:34",
    summary:
      "This video explains major commodity movement across MCX and NCDEX and how rate changes can affect business planning.",
    category: "Commodities",
    tone: "from-fuchsia-500 to-pink-600",
    source: "YouTube"
  }
];

const systemVideos: VideoCard[] = [
  {
    title: "Platform Dashboard Walkthrough",
    tagline: "See how Steel Baba helps users track product and market prices",
    publishedOn: "March 20, 2026",
    duration: "06:25",
    summary:
      "An internal platform walkthrough showing category navigation, item selection, news sections, and market trend visibility.",
    category: "System Demo",
    tone: "from-[#8f1d2c] to-[#c45a68]",
    source: "System Video"
  },
  {
    title: "Applications and Alerts Feature Demo",
    tagline: "A closer look at app-based alerts and customer notification tools",
    publishedOn: "March 17, 2026",
    duration: "07:18",
    summary:
      "This system video explains mobile and desktop application features, notifications, and customer engagement tools.",
    category: "Applications",
    tone: "from-[#7a1826] to-[#a92f40]",
    source: "System Video"
  },
  {
    title: "Product Search and Rate Comparison Flow",
    tagline: "Understand how users compare city-wise pricing across categories",
    publishedOn: "March 14, 2026",
    duration: "05:51",
    summary:
      "A structured system video for users who want to understand category filtering, rate tables, and comparison-based usage.",
    category: "Product Experience",
    tone: "from-[#4a0d16] to-[#8f1d2c]",
    source: "System Video"
  }
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
      <path d="M8 6.5v11l9-5.5z" />
    </svg>
  );
}

function VideoShowcase({
  sectionTitle,
  sectionSubtitle,
  videos
}: {
  sectionTitle: string;
  sectionSubtitle: string;
  videos: VideoCard[];
}) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(148,163,184,0.12)] lg:p-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-950">{sectionTitle}</h2>
          <p className="mt-3 text-[1rem] leading-8 text-slate-600">{sectionSubtitle}</p>
        </div>
        <div className="rounded-full bg-[#8f1d2c]/10 px-4 py-2 text-sm font-semibold text-[#8f1d2c]">
          {videos.length} videos
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {videos.map((video) => (
          <article
            key={video.title}
            className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] shadow-sm"
          >
            <div className={`relative flex h-52 items-end bg-gradient-to-br ${video.tone} p-5 text-white`}>
              <div className="absolute right-5 top-5 rounded-full bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                {video.source}
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                    {video.category}
                  </span>
                  <span className="text-sm font-semibold text-white/90">{video.duration}</span>
                </div>
                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                  <PlayIcon />
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                  Published {video.publishedOn}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.03em] text-slate-950">{video.title}</h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8f1d2c]">{video.tagline}</p>
              <p className="mt-4 text-[0.98rem] leading-8 text-slate-600">{video.summary}</p>
              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-slate-500">{video.source} Library</span>
                <Link href="/contact" className="text-sm font-semibold text-[#8f1d2c] transition hover:text-[#5b1925]">
                  Request full media access
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function MediaPage() {
  return (
    <SiteShell>
      <main className="bg-[linear-gradient(180deg,#f7eff1_0%,#ffffff_100%)]">
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2.3rem] border border-slate-200 bg-white p-8 shadow-[0_28px_70px_rgba(148,163,184,0.16)] lg:p-10">
            <div className="max-w-5xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8f1d2c]">Media</p>
              <h1 className="mt-4 text-[1.32rem] font-semibold leading-tight tracking-[-0.025em] text-slate-950 [font-family:var(--font-display)] lg:text-[2.04rem]">
                Dedicated media page for YouTube videos and Steel Baba system videos
              </h1>
              <p className="mt-6 text-[1.04rem] leading-9 text-slate-600">
                This media page is designed as a full video showcase for Steel Baba. It presents YouTube-based market
                videos and system platform videos in dedicated sections, with every video showing a publish date,
                professional tagline, and short summary for users.
              </p>
            </div>

            <div className="mt-10 grid gap-8">
              <VideoShowcase
                sectionTitle="YouTube Video Section"
                sectionSubtitle="Market updates, weekly reports, and exchange-linked video content designed for public and business-facing viewers."
                videos={youtubeVideos}
              />

              <VideoShowcase
                sectionTitle="System Video Section"
                sectionSubtitle="Internal and product-focused videos that explain dashboard usage, application features, and the Steel Baba platform workflow."
                videos={systemVideos}
              />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/" className="inline-flex rounded-full bg-slate-950 px-6 py-3 font-semibold text-white">
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-[#8f1d2c] hover:text-[#8f1d2c]"
              >
                Contact for Media Collaboration
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
