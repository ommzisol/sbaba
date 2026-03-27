import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

type ServiceChannel = {
  name: string;
  description: string;
  benefit: string;
  rateAccess: string;
  products: string[];
};

const services: ServiceChannel[] = [
  {
    name: "WhatsApp",
    description:
      "Customers receive quick rate updates, selected product alerts, and market movement summaries directly on WhatsApp.",
    benefit:
      "Best for traders, dealers, and busy buyers who want fast communication without opening the full platform every time.",
    rateAccess:
      "Realtime market alerts and spot market rates can be shared quickly for active purchase decisions.",
    products: ["TMT Bars", "Steel Billet", "Steel Plates", "Pipes and Tubes", "Metal Market", "Raw Material"]
  },
  {
    name: "Email",
    description:
      "Detailed product lists, market summaries, comparison sheets, and service updates are delivered through email reports.",
    benefit:
      "Useful for managers, procurement teams, and business owners who prefer documented updates and structured review.",
    rateAccess:
      "Both realtime updates and spot market rate summaries can be shared in a more detailed format for internal discussion.",
    products: ["CR Coil", "Chequered Plate", "Copper", "Aluminium", "Iron Ore Fines", "Sponge Iron"]
  },
  {
    name: "Web",
    description:
      "The web platform gives customers live access to dashboard views, item search, category browsing, news, and pricing tables.",
    benefit:
      "Ideal for daily monitoring, side-by-side comparison, and broader product visibility across cities and categories.",
    rateAccess:
      "Customers can review realtime price movement and spot market rates in a detailed business-friendly interface.",
    products: ["Steel Price Dashboard", "Product Catalog", "Segments", "News Section", "Media Section", "Demo Flow"]
  },
  {
    name: "Text Message",
    description:
      "Important rate changes and product-specific alerts are delivered as SMS for quick reading on any mobile device.",
    benefit:
      "Best for users who want short-format updates and instant communication even without opening apps or web pages.",
    rateAccess:
      "Realtime alerts and spot market updates can be pushed instantly to help customers act quickly during buying windows.",
    products: ["Live Price Alerts", "Spot Price Update", "Daily Change Summary", "Rate Validation Status"]
  },
  {
    name: "Mobile Application",
    description:
      "The mobile app combines product tracking, notifications, news, and customer support in one platform-driven experience.",
    benefit:
      "Ideal for customers who want regular access to products, alerts, and market decisions while traveling or working on-site.",
    rateAccess:
      "Realtime market rates and spot market views are available inside the app with quick access to selected products.",
    products: ["Android App", "iOS App", "Push Notifications", "Saved Watchlist", "Rate Graphs", "Customer Support"]
  }
];

const allProducts = [
  "TMT Bars",
  "Steel Billet",
  "MS Plates",
  "Chequered Plate",
  "CR Coil",
  "Pipes and Tubes",
  "Copper",
  "Aluminium",
  "Zinc",
  "Iron Ore Fines",
  "Coking Coal",
  "Sponge Iron",
  "Agriculture Products",
  "MCX / NCDEX / LME",
  "News and Alerts",
  "Applications Module"
];

export default function ServicePage() {
  return (
    <SiteShell>
      <main className="bg-[linear-gradient(180deg,#edf4fc_0%,#ffffff_100%)]">
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2.3rem] border border-slate-200 bg-white p-8 shadow-[0_28px_70px_rgba(148,163,184,0.16)] lg:p-10">
            <div className="max-w-5xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8f1d2c]">Service</p>
              <h1 className="mt-4 text-[1.32rem] font-semibold leading-tight tracking-[-0.025em] text-slate-950 [font-family:var(--font-display)] lg:text-[2.04rem]">
                Service channels for products, items, and market updates with customer benefits and buying support
              </h1>
              <p className="mt-6 text-[1rem] leading-9 text-slate-600">
                This page explains how Steel Baba services work across WhatsApp, email, web, text message, and mobile
                application channels. Customers can understand product coverage, service-wise benefits, and how realtime
                and spot market rates help them take a business decision before buying a package.
              </p>
            </div>

            <section className="mt-10 rounded-[1.8rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-sm">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h2 className="text-[1.1rem] font-semibold tracking-[-0.02em] text-slate-950 [font-family:var(--font-display)]">Products and Item Coverage</h2>
                  <p className="mt-2 text-[0.98rem] leading-8 text-slate-600">
                    The service system supports multiple product categories and item names across steel, metal, raw material,
                    agriculture, and exchange-linked markets.
                  </p>
                </div>
                <div className="rounded-full bg-[#8f1d2c]/10 px-4 py-2 text-sm font-semibold text-[#8f1d2c]">
                  {allProducts.length} items covered
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {allProducts.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-10 grid gap-6">
              {services.map((service) => (
                <section
                  key={service.name}
                  className="overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-sm"
                >
                  <div className="bg-[linear-gradient(135deg,#0f5fae_0%,#0a4280_100%)] px-6 py-5 text-white">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">Service Channel</p>
                        <h2 className="mt-2 text-3xl font-bold tracking-[-0.03em]">{service.name}</h2>
                      </div>
                      <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
                        Realtime + Spot Market Support
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left">
                      <tbody className="divide-y divide-slate-200 text-sm">
                        <tr>
                          <th className="w-[18rem] bg-slate-50 px-6 py-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
                            Product / Item Names
                          </th>
                          <td className="px-6 py-5">
                            <div className="flex flex-wrap gap-2">
                              {service.products.map((product) => (
                                <span
                                  key={product}
                                  className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                                >
                                  {product}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th className="bg-slate-50 px-6 py-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
                            Service Detail
                          </th>
                          <td className="px-6 py-5 text-[0.98rem] leading-8 text-slate-700">{service.description}</td>
                        </tr>
                        <tr>
                          <th className="bg-slate-50 px-6 py-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
                            Customer Benefit
                          </th>
                          <td className="px-6 py-5 text-[0.98rem] leading-8 text-slate-700">{service.benefit}</td>
                        </tr>
                        <tr>
                          <th className="bg-slate-50 px-6 py-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
                            Rate Access
                          </th>
                          <td className="px-6 py-5 text-[0.98rem] leading-8 text-slate-700">{service.rateAccess}</td>
                        </tr>
                        <tr>
                          <th className="bg-slate-50 px-6 py-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
                            Buying Discussion
                          </th>
                          <td className="px-6 py-5 text-[0.98rem] leading-8 text-slate-700">
                            This service helps customers compare realtime and spot market movement, evaluate product coverage,
                            and then take a better discussion internally before buying a plan or package.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/request-demo" className="inline-flex rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-[#8f1d2c]">
                Request Service Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-[#8f1d2c] hover:text-[#8f1d2c]"
              >
                Contact to Buy Package
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
