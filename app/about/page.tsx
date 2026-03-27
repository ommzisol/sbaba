import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="bg-[linear-gradient(180deg,#eef4fb_0%,#ffffff_100%)]">
        <section className="mx-auto max-w-5xl px-4 py-14 lg:px-8 lg:py-16">
          <div className="rounded-[2.2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_55px_rgba(148,163,184,0.16)] lg:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8f1d2c]">About Us</p>

            <div className="mt-5 flex justify-start">
              <div className="max-w-[18rem]">
                <div className="overflow-hidden rounded-[1.4rem] border border-slate-200 bg-slate-100 shadow-[0_16px_30px_rgba(148,163,184,0.12)]">
                  <Image
                    src="/images/aboutus.jpg"
                    alt="About Steel Baba"
                    width={720}
                    height={860}
                    className="h-[6rem] w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div>
                <h1 className="max-w-4xl text-[1.65rem] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 [font-family:var(--font-display)] lg:text-[2.55rem]">
                  Steel Baba delivers trusted market intelligence across steel, metals, raw materials, agriculture,
                  and commodity-linked sectors.
                </h1>

                <div className="mt-8 space-y-6 text-[1.03rem] leading-9 text-slate-600">
                  <p>
                    Steel Baba is a professional pricing and market intelligence platform serving businesses across
                    steel, metal, finished market, raw material, agriculture, and broader commodity ecosystems. We
                    are focused on making critical market information accessible in a timely, organized, and reliable
                    format so that dealers, manufacturers, retailers, traders, distributors, contractors, and
                    procurement teams can take better business decisions with confidence.
                  </p>

                  <p>
                    Our platform provides real-time and future market price coverage across steel prices, metal
                    markets, finished goods, raw material segments, agricultural commodities, and benchmark-linked
                    references such as NCDEX, MCX, and LME. By bringing multiple market segments together under one
                    digital ecosystem, Steel Baba helps users compare rates, track movement, study trends, and
                    improve planning across daily operations and long-term business strategy.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-8 space-y-6 text-[1.03rem] leading-9 text-slate-600">
              <p>
                We deliver this information through our web portal, mobile application, text messages, WhatsApp
                alerts, and social media channels so customers can access dependable updates through the platform
                that works best for them. Every update is designed to support faster response, stronger market
                awareness, and better visibility across Indian and global trade-linked sectors.
              </p>

              <p>
                At Steel Baba, our objective is not only to publish prices, but to create a dependable information
                environment where customers can monitor realtime rates, spot market movement, future trends, and
                product-level changes through a single trusted brand experience.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8f1d2c]">Coverage</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  Steel, metal, finished market, raw material, agriculture, and food-linked market updates.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8f1d2c]">Delivery</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  Web portal, mobile application, text message alerts, WhatsApp updates, and social media channels.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8f1d2c]">Purpose</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  To help businesses make faster and better-informed decisions through dependable market visibility.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] p-8 text-white lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                  <Image
                    src="/images/ceo.png"
                    alt="Chief Executive Officer of Steel Baba"
                    width={520}
                    height={620}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-200">CEO Message</p>
                  <h2 className="mt-4 text-[1.9rem] font-semibold tracking-[-0.035em] [font-family:var(--font-display)] lg:text-[2.35rem]">
                    A message from leadership
                  </h2>
                  <div className="mt-5 space-y-5 text-[1.02rem] leading-8 text-slate-200">
                    <p>
                      At Steel Baba, we recognize that in today&apos;s dynamic and competitive landscape,
                      information is not just an advantage, it is a strategic asset. Precision, speed, and
                      reliability in market intelligence can define the difference between opportunity and missed
                      potential.
                    </p>
                    <p>
                      Our vision is to establish Steel Baba as a benchmark for trust and excellence across steel,
                      metals, raw materials, agriculture, and commodity markets. We are building a platform that
                      delivers not just data, but clarity, empowering businesses to anticipate trends, act
                      decisively, and lead with confidence.
                    </p>
                    <p>
                      We are uncompromising in our commitment to accuracy, accessibility, and continuous innovation.
                      Every insight we provide is guided by our dedication to quality and relevance, ensuring that
                      our users are always equipped to navigate complexity with certainty.
                    </p>
                    <p>
                      At Steel Baba, we do not simply share information, we enable informed leadership, stronger
                      strategies, and sustained growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Disclaimer</p>
              <p className="mt-3 text-[1rem] leading-8 text-amber-900">
                Steel Baba provides market information, pricing references, trend updates, and related business
                content for informational purposes only. While we strive to keep all information reliable and
                up-to-date, market prices and movements are subject to change. Steel Baba does not guarantee any
                trading result, business outcome, profit, or loss, and the company shall not be held liable for any
                financial or commercial decisions taken based on the information provided through our platform or
                communication channels.
              </p>
            </div>

            <div className="mt-10">
              <Link href="/" className="inline-flex rounded-full bg-slate-950 px-6 py-3 font-semibold text-white">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
