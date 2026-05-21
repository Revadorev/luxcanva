import Link from "next/link";
import { Footer } from "@/components/Footer";

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
      ["Large Format Canvas Printing", "We produce oversized and panoramic canvas prints up to 170 × 300 cm."],
      ["3D Relief Printing", "Unique embossed effect on canvas surface, adding depth to wall art."],
      ["Premium Aluminium Frames", "Gallery-quality aluminium frames in silver, gold and black finish."],
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
      ["Print Canvas Large Format", "Producem canvas-uri oversized și panoramice până la 170 × 300 cm."],
      ["Print în Relief 3D", "Efect embossed unic pe suprafața canvas-ului, adăugând profunzime pieselor de wall art."],
      ["Rame Aluminiu Premium", "Rame aluminiu de calitate galerie în finisaj argintiu, auriu și negru."],
      ["Ambalare & Livrare", "Ambalăm în siguranță fiecare canvas pentru transport prin curier."],
    ],
  },
} as const;

export default async function ServicesPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const params = await searchParams;
  const lang = params.lang === "ro" ? "ro" : "en";
  const t = copy[lang];

  return (
    <main className="relative z-[1] mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href={`/?lang=${lang}`} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-stone-700 shadow-sm">← {t.back}</Link>
        <div className="flex items-center gap-1 rounded-full border border-stone-900/10 bg-white px-1 py-1 shadow-sm">
          <span className="px-2 text-[11px] uppercase tracking-[0.16em] text-stone-500">Language</span>
          <Link href="/services?lang=en" className={`rounded-full px-3 py-1.5 text-xs font-medium ${lang === "en" ? "lang-active" : "lang-inactive"}`}>EN</Link>
          <Link href="/services?lang=ro" className={`rounded-full px-3 py-1.5 text-xs font-medium ${lang === "ro" ? "lang-active" : "lang-inactive"}`}>RO</Link>
        </div>
      </div>
      <div className="mt-8 label-premium inline-flex rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-stone-600">{t.eyebrow}</div>
      <h1 className="font-display mt-4 text-5xl tracking-tight">{t.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">{t.intro}</p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {t.services.map(([title, text]) => (
          <article key={title} className="card-premium rounded-xl p-6 text-stone-900">
            <div className="mb-5 h-px w-12 bg-[var(--gold)]" />
            <h2 className="text-xl font-semibold leading-snug">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-stone-700">{text}</p>
          </article>
        ))}
      </div>
      <Link className="btn-dark" href={`/contact?lang=${lang}`}>{t.cta}</Link>
      <Footer lang={lang} />
    </main>
  );
}
