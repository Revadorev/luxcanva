import Link from "next/link";

export const metadata = {
  title: "About LuxCanva | European Canvas Production Partner",
};

const copy = {
  en: {
    back: "Back to homepage",
    eyebrow: "About",
    title: "About LuxCanva",
    body: [
      "LuxCanva is a Romania-based canvas print production workshop focused on premium wall art manufacturing, white-label fulfillment and B2B canvas printing services.",
      "We work with ecommerce businesses, interior designers, photographers, artists and resellers that need a reliable production partner in Europe.",
      "Our mission is to help brands sell high-quality canvas prints without managing production, logistics or stock. From single print-on-demand orders to bulk interior projects, we provide flexible canvas production tailored to business needs.",
      "We combine professional printing technology, quality materials and careful packaging to deliver canvas products ready for ecommerce, retail and interior design use.",
    ],
  },
  ro: {
    back: "Înapoi la homepage",
    eyebrow: "Despre",
    title: "Despre LuxCanva",
    body: [
      "LuxCanva este un atelier de producție print canvas din România, axat pe producție premium de wall art, fulfillment white-label și servicii B2B de print canvas.",
      "Lucrăm cu afaceri ecommerce, designeri de interior, fotografi, artiști și reselleri care au nevoie de un partener de producție de încredere în Europa.",
      "Misiunea noastră este să ajutăm brandurile să vândă canvas-uri de calitate ridicată fără să gestioneze producția, logistica sau stocul. De la comenzi individuale print-on-demand până la proiecte bulk de interior, oferim producție flexibilă adaptată nevoilor businessului.",
      "Combinăm tehnologie profesională de print, materiale de calitate și ambalare atentă pentru a livra produse canvas pregătite pentru ecommerce, retail și design interior.",
    ],
  },
} as const;

export default async function AboutPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const params = await searchParams;
  const lang = params.lang === "ro" ? "ro" : "en";
  const t = copy[lang];

  return (
    <main className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
      <Link href={`/?lang=${lang}`} className="text-sm text-stone-600">← {t.back}</Link>
      <p className="mt-8 text-sm uppercase tracking-[0.28em] text-stone-500">{t.eyebrow}</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight">{t.title}</h1>
      <div className="mt-8 space-y-6 text-lg leading-8 text-stone-700">
        {t.body.map((p) => <p key={p}>{p}</p>)}
      </div>
    </main>
  );
}
