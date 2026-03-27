import Link from "next/link";
import { notFound } from "next/navigation";
import { ShareButton } from "@/components/share-button";
import { SiteShell } from "@/components/site-shell";
import { advertisements, newsItems } from "@/lib/site-data";

type NewsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsStoryPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const story = newsItems.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  const relatedStories = newsItems.filter((item) => item.slug !== slug).slice(0, 3);
  const adItem = advertisements[0];

  return (
    <SiteShell>
      <section className="bg-[linear-gradient(180deg,#eef4fb_0%,#ffffff_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-panel lg:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#8f1d2c]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-[#8f1d2c]">
                  {story.category}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    story.tone === "up"
                      ? "bg-emerald-50 text-emerald-700"
                      : story.tone === "down"
                        ? "bg-rose-50 text-rose-700"
                        : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {story.tone === "up" ? "Market Up" : story.tone === "down" ? "Watch Risk" : "Stable View"}
                </span>
              </div>

              <h1 className="mt-5 text-[1.3rem] font-semibold leading-tight tracking-[-0.02em] text-slate-950 [font-family:var(--font-display)] lg:text-[1.8rem]">
                {story.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="font-semibold text-slate-900">{story.author}</span>
                <span>{story.updated}</span>
                <span>{story.time}</span>
              </div>

              <div className="mt-8 rounded-[1.75rem] bg-[linear-gradient(135deg,#4a0d16_0%,#8f1d2c_100%)] p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">Story Summary</p>
                <p className="mt-3 text-xl leading-8 text-white/95">{story.summary}</p>
              </div>

              <div className="mt-8 space-y-6 text-[1.05rem] leading-8 text-slate-700">
                {story.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6">
                <ShareButton
                  title={story.title}
                  text={story.summary}
                  url={`/news/${story.slug}`}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#8f1d2c] hover:text-[#8f1d2c]"
                />
                <button
                  type="button"
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#8f1d2c] hover:text-[#8f1d2c]"
                >
                  Comment {story.comments}
                </button>
                <button
                  type="button"
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
                >
                  Like
                </button>
                <button
                  type="button"
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-rose-300 hover:text-rose-700"
                >
                  Unlike
                </button>
              </div>

              <div className="mt-8">
                <Link href="/" className="font-semibold text-[#8f1d2c] transition hover:text-[#5b1925]">
                  Back to homepage
                </Link>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] shadow-panel">
                <div className={`bg-gradient-to-br ${adItem.palette} p-6 text-white`}>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">Advertisement</p>
                  <h2 className="mt-4 text-3xl font-extrabold">{adItem.title}</h2>
                  <p className="mt-4 text-base leading-8 text-white/90">{adItem.subtitle}</p>
                  <a
                    href={adItem.link}
                    className="mt-6 inline-flex rounded-full border border-white/40 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
                  >
                    View Campaign
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-panel">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8f1d2c]">Related Stories</p>
                <div className="mt-5 space-y-5">
                  {relatedStories.map((item) => (
                    <article key={item.slug} className="border-b border-slate-200 pb-5 last:border-b-0 last:pb-0">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">{item.category}</p>
                      <h3 className="mt-2 text-lg font-extrabold leading-snug text-slate-950">{item.title}</h3>
                      <Link
                        href={`/news/${item.slug}`}
                        className="mt-3 inline-flex text-sm font-semibold text-[#8f1d2c] transition hover:text-[#5b1925]"
                      >
                        Read full story
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
