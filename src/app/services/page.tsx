import Link from "next/link";

export const metadata = {
  title: "B2B Canvas Printing & Print-on-Demand Fulfillment | LuxCanva",
  description:
    "Partner with LuxCanva for European canvas production, white-label fulfillment, bulk canvas printing, custom sizes and professional packaging.",
};

const copy = {
  en: {
    back: "Back to homepage",
    eyebrow: "B2B Services",
    title: "B2B Canvas Printing Services",
    intro:
      "LuxCanva offers flexible canvas production solutions for companies that need consistent quality, fast turnaround and white-label fulfillment in Europe.",
    cta: "Contact Us for B2B Pricing",
    services: [
      ["White-Label Fulfillment", "We produce and ship orders under your brand."],
      ["Print-on-Demand", "You send orders only when customers buy. We produce and ship them."],
      ["Bulk Production", "For large projects, collections, hotels, offices, restaurants and interior designers."],
      ["Custom Size Production", "We can produce standard and custom canvas formats depending on project requirements."],
      ["Large Format Canvas Printing", "Ideal for premium wall art collections and oversized decor."],
      ["Packaging & Shipping", "We safely package each canvas for courier transport."],
    ],
  },
  ro: {
    back: "Înapoi la homepage",
    eyebrow: "Servicii B2B",
    title: "Servicii B2B de print canvas",
    intro:
      "LuxCanva oferă soluții flexibile de producție canvas pentru companiile care au nevoie de calitate constantă, timp rapid de execuție și fulfillment white-label în Europa.",
    cta: "Contactează-ne pentru prețuri B2B",
    services: [
      ["Fulfillment White-Label", "Producem și expediem comenzile sub brandul tău."],
      ["Print-on-Demand", "Trimiți comenzile doar când clienții cumpără. Noi producem și livrăm."],
      ["Producție Bulk", "Pentru proiecte mari, colecții, hoteluri, birouri, restaurante și designeri de interior."],
      ["Producție pe Dimensiuni Custom", "Putem produce formate standard și personalizate în funcție de cerințele proiectului."],
      ["Print Canvas Large Format", "Ideal pentru colecții premium de wall art și decor oversized."],
      ["Ambalare & Livrare", "Ambalăm în siguranță fiecare canvas pentru transport prin curier."],
    ],
  },
} as const;

export default async function ServicesPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const params = await searchParams;
  const lang = params.lang === "ro" ? "ro" : "en";
  const t = copy[lang];

  return (
    <main className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
      <Link href={`/?lang=${lang}`} className="text-sm text-stone-600">← {t.back}</Link>
      <p className="mt-8 text-sm uppercase tracking-[0.28em] text-stone-500">{t.eyebrow}</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight">{t.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">{t.intro}</p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {t.services.map(([title, text]) => (
          <article key={title} className="rounded-3xl border border-stone-900/10 bg-white p-6">
            <h2 className="text-xl font-medium">{title}</h2>
            <p className="mt-3 text-stone-700">{text}</p>
          </article>
        ))}
      </div>
      <Link className="mt-10 inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white" href={`/contact?lang=${lang}`}>{t.cta}</Link>
    </main>
  );
}
