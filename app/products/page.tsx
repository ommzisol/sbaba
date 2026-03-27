import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

function buildItems(prefixes: string[], variants: string[]) {
  return prefixes.flatMap((prefix) => variants.map((variant) => `${prefix} ${variant}`));
}

const steelBase = [
  "TMT Bar",
  "Rebar",
  "MS Round Bar",
  "MS Flat",
  "MS Angle",
  "MS Channel",
  "MS Beam",
  "I Beam",
  "H Beam",
  "Steel Plate",
  "Chequered Plate",
  "Boiler Plate",
  "Ship Plate",
  "Mild Steel Sheet",
  "CR Sheet",
  "HR Sheet",
  "GI Sheet",
  "GP Sheet",
  "Color Coated Sheet",
  "Roofing Sheet",
  "Wire Rod",
  "Binding Wire",
  "Spring Steel",
  "Stainless Steel Sheet",
  "Stainless Steel Coil",
  "Stainless Steel Pipe",
  "ERW Pipe",
  "Seamless Pipe",
  "Square Pipe",
  "Rectangular Pipe",
  "Hollow Section",
  "Scaffolding Pipe",
  "MS Pipe",
  "GI Pipe",
  "Black Pipe",
  "Structural Steel",
  "Fabrication Steel",
  "Forged Steel Bar",
  "Steel Billet",
  "Steel Bloom",
  "Steel Slab",
  "Galvanized Coil",
  "Prepainted Coil",
  "Steel Coil",
  "CR Coil",
  "HR Coil",
  "Tin Plate",
  "Tool Steel",
  "Alloy Steel Bar",
  "Alloy Steel Plate",
  "Rail Track Steel",
  "Steel Strip",
  "Steel Mesh",
  "Welded Mesh",
  "Steel Grating",
  "Steel Rod",
  "MS Shaft",
  "Hex Bar",
  "Bright Bar",
  "Steel Section"
];

const steelVariants = ["6mm", "8mm", "10mm", "12mm", "16mm", "20mm"];

const metalBase = [
  "Aluminium Ingot",
  "Aluminium Sheet",
  "Aluminium Coil",
  "Aluminium Scrap",
  "Copper Cathode",
  "Copper Wire",
  "Copper Rod",
  "Copper Scrap",
  "Zinc Ingot",
  "Zinc Scrap",
  "Lead Ingot",
  "Lead Scrap",
  "Nickel Cathode",
  "Nickel Briquette",
  "Tin Ingot",
  "Brass Scrap",
  "Brass Sheet",
  "Bronze Scrap",
  "Silicon Metal",
  "Manganese Metal",
  "Magnesium Ingot",
  "Chromium Metal",
  "Ferro Chrome",
  "Ferro Manganese",
  "Ferro Silicon"
];

const metalVariants = ["Primary", "Commercial Grade", "Industrial Grade", "Premium Grade"];

const rawMaterialBase = [
  "Iron Ore Fines",
  "Iron Ore Lumps",
  "Pellet",
  "Sinter Feed",
  "Coking Coal",
  "PCI Coal",
  "Thermal Coal",
  "Anthracite Coal",
  "Met Coke",
  "Nut Coke",
  "Coke Breeze",
  "Pig Iron",
  "Sponge Iron",
  "DRI",
  "HBI",
  "Steel Scrap HMS 1",
  "Steel Scrap HMS 2",
  "Shredded Scrap",
  "CRC Scrap",
  "Turning Scrap",
  "Cast Iron Scrap",
  "Manganese Ore",
  "Chrome Ore",
  "Limestone",
  "Dolomite",
  "Quartzite",
  "Graphite Electrode",
  "Refractory Material"
];

const rawMaterialVariants = ["Spot", "Ex-Plant", "Delivered", "Bulk Lot"];

const agricultureItems = [
  "Wheat",
  "Rice",
  "Basmati Rice",
  "Maize",
  "Barley",
  "Jowar",
  "Bajra",
  "Chana",
  "Tur Dal",
  "Moong",
  "Urad",
  "Masoor",
  "Soybean",
  "Mustard Seed",
  "Groundnut",
  "Sesame",
  "Castor Seed",
  "Cotton Seed Oil Cake",
  "Guar Seed",
  "Guar Gum",
  "Jeera",
  "Coriander",
  "Turmeric",
  "Red Chilli",
  "Black Pepper",
  "Cardamom",
  "Sugar",
  "Jaggery",
  "Tea",
  "Coffee",
  "Paddy",
  "Cotton",
  "Mentha Oil",
  "Potato",
  "Onion",
  "Tomato",
  "Apple",
  "Banana",
  "Milk Powder",
  "Edible Oil"
];

const exchangeItems = [
  "MCX Steel Rebar",
  "MCX Steel Billet",
  "MCX Aluminium",
  "MCX Copper",
  "MCX Zinc",
  "MCX Lead",
  "MCX Nickel",
  "MCX Crude Oil",
  "MCX Natural Gas",
  "MCX Gold",
  "MCX Silver",
  "NCDEX Wheat",
  "NCDEX Chana",
  "NCDEX Guar Seed",
  "NCDEX Guar Gum",
  "NCDEX Jeera",
  "NCDEX Coriander",
  "NCDEX Turmeric",
  "NCDEX Cotton Seed Oil Cake",
  "NCDEX Soybean",
  "LME Aluminium",
  "LME Copper",
  "LME Zinc",
  "LME Lead",
  "LME Nickel",
  "LME Tin",
  "LME Steel Scrap",
  "LME Rebar",
  "SHFE Steel",
  "COMEX Copper",
  "COMEX Gold",
  "COMEX Silver",
  "International Iron Ore",
  "International Met Coal",
  "International Scrap CFR",
  "Global HRC Index",
  "Global CRC Index",
  "Global Billet Index",
  "Freight Baltic Dry",
  "Coking Coal Futures"
];

const productSections = [
  {
    title: "Iron and Steel Products",
    description: "Primary and finished steel products tracked across construction, fabrication, and industrial demand.",
    items: buildItems(steelBase, steelVariants)
  },
  {
    title: "Metal Market Products",
    description: "Non-ferrous and industrial metals relevant to manufacturing, fabrication, and commodity trade.",
    items: buildItems(metalBase, metalVariants)
  },
  {
    title: "Raw Material Products",
    description: "Input-side market categories that influence steel manufacturing, conversion cost, and supply movement.",
    items: buildItems(rawMaterialBase, rawMaterialVariants)
  },
  {
    title: "Agriculture and Food Market Products",
    description: "Major agriculture and food-sector products useful for broader commodity and market tracking.",
    items: agricultureItems
  },
  {
    title: "MCX, NCDEX, LME and Global Exchange Products",
    description: "Exchange-linked products, benchmarks, and futures references relevant to steel, metal, and commodity sectors.",
    items: exchangeItems
  }
];

const totalItems = productSections.reduce((sum, section) => sum + section.items.length, 0);

const majorCities = [
  "Ahmedabad",
  "Mumbai",
  "Pune",
  "Nagpur",
  "Raipur",
  "Bilaspur",
  "Kolkata",
  "Durgapur",
  "Howrah",
  "Jamshedpur",
  "Ranchi",
  "Bokaro",
  "Patna",
  "Kanpur",
  "Ghaziabad",
  "Noida",
  "Ludhiana",
  "Mandi Gobindgarh",
  "Jalandhar",
  "Chandigarh",
  "Jaipur",
  "Bhiwadi",
  "Delhi",
  "Faridabad",
  "Sonipat",
  "Panipat",
  "Hisar",
  "Chennai",
  "Coimbatore",
  "Salem",
  "Madurai",
  "Bengaluru",
  "Hosur",
  "Hyderabad",
  "Visakhapatnam",
  "Vijayawada",
  "Surat",
  "Vadodara",
  "Rajkot",
  "Indore",
  "Bhopal"
];

const statewiseMarkets = [
  {
    state: "Maharashtra",
    cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    focus: "Steel trading, metal distribution, industrial fabrication, and raw material movement"
  },
  {
    state: "Gujarat",
    cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    focus: "Pipe, coil, structural steel, engineering metal products, and commodity-linked trade"
  },
  {
    state: "Punjab",
    cities: ["Ludhiana", "Mandi Gobindgarh", "Jalandhar", "Amritsar", "Batala"],
    focus: "Rolling mills, re-rolling units, dealers, scrap trade, and steel processing"
  },
  {
    state: "Tamil Nadu",
    cities: ["Chennai", "Coimbatore", "Salem", "Tiruppur", "Madurai"],
    focus: "Manufacturing, stainless steel, engineering supply chains, and finished goods"
  },
  {
    state: "Karnataka",
    cities: ["Bengaluru", "Bellary", "Mysuru", "Hubballi", "Hosapete"],
    focus: "Steel consumption, fabrication demand, alloys, and industrial project supply"
  },
  {
    state: "Chhattisgarh",
    cities: ["Raipur", "Bhilai", "Bilaspur", "Raigarh", "Durg"],
    focus: "Sponge iron, billets, raw material conversion, rolling mills, and integrated steel activity"
  },
  {
    state: "Jharkhand",
    cities: ["Jamshedpur", "Bokaro", "Ranchi", "Dhanbad", "Chaibasa"],
    focus: "Integrated steel manufacturing, ore-linked activity, and industrial trade"
  },
  {
    state: "West Bengal",
    cities: ["Kolkata", "Howrah", "Durgapur", "Asansol", "Haldia"],
    focus: "Metal trading, industrial supply, fabrication, and regional steel distribution"
  },
  {
    state: "Haryana",
    cities: ["Faridabad", "Panipat", "Sonipat", "Hisar", "Gurugram"],
    focus: "Engineering demand, steel service centers, pipe markets, and manufacturing supply"
  },
  {
    state: "Uttar Pradesh",
    cities: ["Kanpur", "Ghaziabad", "Noida", "Lucknow", "Varanasi"],
    focus: "Construction demand, infrastructure buying, steel trading, and project supply"
  },
  {
    state: "Andhra Pradesh",
    cities: ["Visakhapatnam", "Vijayawada", "Kakinada", "Guntur", "Tirupati"],
    focus: "Port-linked steel movement, coastal trade, and industrial material distribution"
  },
  {
    state: "Rajasthan",
    cities: ["Jaipur", "Bhiwadi", "Udaipur", "Jodhpur", "Kota"],
    focus: "Infrastructure steel consumption, fabrication, and regional market distribution"
  }
];

export default function ProductsPage() {
  return (
    <SiteShell>
      <main className="bg-[linear-gradient(180deg,#eef4fb_0%,#ffffff_100%)]">
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-[0_30px_70px_rgba(148,163,184,0.16)] lg:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8f1d2c]">Products</p>
                <h1 className="mt-4 text-[1.32rem] font-semibold leading-tight tracking-[-0.025em] text-slate-950 [font-family:var(--font-display)] lg:text-[2.04rem]">
                  Complete product coverage across steel, metal, raw material, agriculture, and exchange markets
                </h1>
                <p className="mt-6 text-[1.05rem] leading-9 text-slate-600">
                  This dedicated product page is designed to give users a broad view of all major product categories
                  tracked through Steel Baba. It includes iron and steel items, metal market products, raw
                  material inputs, agriculture sector products, and exchange-linked references from MCX, NCDEX,
                  LME, and related global benchmarks.
                </p>
              </div>

              <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#4a0d16_0%,#8f1d2c_100%)] px-6 py-5 text-white shadow-lg">
                <p className="text-sm uppercase tracking-[0.22em] text-white/80">Catalog Size</p>
                <p className="mt-2 text-[1.3rem] font-semibold [font-family:var(--font-display)]">{totalItems}+</p>
                <p className="mt-2 text-sm text-white/80">Tracked item names across major market segments</p>
              </div>
            </div>

            <div className="mt-10 grid gap-6">
              {productSections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-[1.9rem] border border-slate-200 bg-slate-50/70 p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-slate-950">{section.title}</h2>
                      <p className="mt-2 max-w-4xl text-[1rem] leading-8 text-slate-600">{section.description}</p>
                    </div>
                    <div className="rounded-full bg-[#8f1d2c]/10 px-4 py-2 text-sm font-semibold text-[#8f1d2c]">
                      {section.items.length} items
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {section.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-12 rounded-[1.9rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef4fb_100%)] p-6 shadow-sm">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-slate-950">
                    Major Cities for Manufacturing, Trading, and Dealing
                  </h2>
                  <p className="mt-2 max-w-4xl text-[1rem] leading-8 text-slate-600">
                    These are some of the key cities in India where iron, steel, metals, raw materials, and related
                    market products are commonly manufactured, traded, stocked, processed, or dealt in through dealer
                    and distributor networks.
                  </p>
                </div>
                <div className="rounded-full bg-[#8f1d2c]/10 px-4 py-2 text-sm font-semibold text-[#8f1d2c]">
                  {majorCities.length} major cities
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {majorCities.map((city) => (
                  <div
                    key={city}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-slate-950">State-Wise Market Presence</h2>
                  <p className="mt-2 max-w-4xl text-[1rem] leading-8 text-slate-600">
                    After the product categories, this state-wise section gives a clearer view of where major steel,
                    metal, raw material, and commodity market activity is concentrated across India.
                  </p>
                </div>
                <div className="rounded-full bg-[#8f1d2c]/10 px-4 py-2 text-sm font-semibold text-[#8f1d2c]">
                  {statewiseMarkets.length} states covered
                </div>
              </div>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                {statewiseMarkets.map((market) => (
                  <article
                    key={market.state}
                    className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-extrabold tracking-[-0.02em] text-slate-950">{market.state}</h3>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                        {market.cities.length} cities
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{market.focus}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {market.cities.map((city) => (
                        <span
                          key={city}
                          className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/" className="inline-flex rounded-full bg-slate-950 px-6 py-3 font-semibold text-white">
                Back to Home
              </Link>
              <Link href="/contact" className="inline-flex rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700">
                Contact for Full Product Access
              </Link>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#031226_0%,#0b2d57_48%,#0f5eaf_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.16),transparent_24%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-16">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-rose-200">Product Highlights</p>
                <h2 className="mt-4 text-[1.3rem] font-semibold tracking-[-0.025em] text-white [font-family:var(--font-display)] sm:text-[1.62rem]">
                  Explore product coverage, segment intelligence, and premium market access in one showcase
                </h2>
                <p className="mt-4 text-[1.02rem] leading-8 text-slate-200">
                  A moving highlight section built to attract customers with key product categories, exchange-linked
                  tracking, and premium Steel Baba services.
                </p>
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white/90">
                Auto-scrolling product highlights
              </div>
            </div>

            <div className="mt-10 overflow-hidden">
              <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-5">
                {[
                  {
                    title: "Iron and Steel Coverage",
                    text: "Track a broad list of steel products including TMT, rebar, coils, pipes, plates, rods, and structural segments.",
                    tone: "from-rose-600 to-red-800"
                  },
                  {
                    title: "Metal Market Tracking",
                    text: "Follow aluminium, copper, zinc, nickel, tin, brass, lead, and industrial metal-linked movement from one place.",
                    tone: "from-[#7a1826] to-[#a92f40]"
                  },
                  {
                    title: "Raw Material Visibility",
                    text: "Monitor iron ore, coal, coke, pellet, sponge iron, scrap, alloys, and other inputs connected to steel production.",
                    tone: "from-amber-400 to-orange-500"
                  },
                  {
                    title: "Agriculture and Food Segments",
                    text: "Get broader sector visibility through tracked commodity categories across agriculture and food-linked products.",
                    tone: "from-fuchsia-500 to-pink-600"
                  },
                  {
                    title: "MCX, NCDEX and LME References",
                    text: "Stay connected to futures and benchmark-linked products across steel, metals, and commodity exchanges.",
                    tone: "from-[#4a0d16] to-[#8f1d2c]"
                  }
                ]
                  .concat([
                    {
                      title: "Iron and Steel Coverage",
                      text: "Track a broad list of steel products including TMT, rebar, coils, pipes, plates, rods, and structural segments.",
                      tone: "from-rose-600 to-red-800"
                    },
                    {
                      title: "Metal Market Tracking",
                      text: "Follow aluminium, copper, zinc, nickel, tin, brass, lead, and industrial metal-linked movement from one place.",
                      tone: "from-[#7a1826] to-[#a92f40]"
                    },
                    {
                      title: "Raw Material Visibility",
                      text: "Monitor iron ore, coal, coke, pellet, sponge iron, scrap, alloys, and other inputs connected to steel production.",
                      tone: "from-amber-400 to-orange-500"
                    },
                    {
                      title: "Agriculture and Food Segments",
                      text: "Get broader sector visibility through tracked commodity categories across agriculture and food-linked products.",
                      tone: "from-fuchsia-500 to-pink-600"
                    },
                    {
                      title: "MCX, NCDEX and LME References",
                      text: "Stay connected to futures and benchmark-linked products across steel, metals, and commodity exchanges.",
                      tone: "from-[#4a0d16] to-[#8f1d2c]"
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
                        <Link href="/contact" className="text-sm font-semibold text-rose-200 transition hover:text-rose-100">
                          Explore More
                        </Link>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
