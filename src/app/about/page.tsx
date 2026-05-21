import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About LuxCanva | European Canvas Production Partner",
  description:
    "Learn about LuxCanva — a Romania-based B2B canvas print production workshop. White-label fulfillment, large format production and print-on-demand for European brands.",
  alternates: { canonical: "https://whitelabelcanvas.eu/about" },
  openGraph: {
    title: "About LuxCanva | European Canvas Production Partner",
    description: "Romania-based B2B canvas print workshop. White-label fulfillment and large format production for European brands.",
    url: "https://whitelabelcanvas.eu/about",
  },
};

const copy = {
  en: {
    back: "Back to homepage",
    eyebrow: "About",
    title: "About LuxCanva",
    intro:
      "LuxCanva is a Romania-based canvas print production workshop focused on premium wall art manufacturing, white-label fulfillment and B2B canvas printing services for European companies.",
    body: [
      "We work with ecommerce businesses, interior designers, photographers, artists and resellers that need a reliable production partner in Europe.",
      "Our mission is to help brands sell high-quality canvas prints without managing production, logistics or stock.",
      "From single print-on-demand orders to bulk interior projects, we provide flexible canvas production tailored to business needs.",
      "We combine professional printing technology, quality materials and careful packaging to deliver canvas products ready for ecommerce, retail and interior design use.",
    ],
  },
  ro: {
    back: "Înapoi la homepage",
    eyebrow: "Despre",
    title: "Despre LuxCanva",
    intro:
      "LuxCanva este un atelier de producție print canvas din România, axat pe producție premium de wall art, fulfillment white-label și servicii B2B de print canvas pentru companii din Europa.",
    body: [
      "Lucrăm cu afaceri ecommerce, designeri de interior, fotografi, artiști și reselleri care au nevoie de un partener de producție de încredere în Europa.",
      "Misiunea noastră este să ajutăm brandurile să vândă canvas-uri de calitate ridicată fără să gestioneze producția, logistica sau stocul.",
      "De la comenzi individuale print-on-demand până la proiecte bulk de interior, oferim producție flexibilă adaptată nevoilor businessului.",
      "Combinăm tehnologie profesională de print, materiale de calitate și ambalare atentă pentru a livra produse canvas pregătite pentru ecommerce, retail și design interior.",
    ],
  },
} as const;

export default async function AboutPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const params = await searchParams;
  const lang = params.lang === "ro" ? "ro" : "en";
  const t = copy[lang];

  return (
    <main className="relative z-[1] mx-auto max-w-5xl px-6 py-20 lg:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href={`/?lang=${lang}`} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-stone-700 shadow-sm">← {t.back}</Link>
        <div className="flex items-center gap-1 rounded-full border border-stone-900/10 bg-white px-1 py-1 shadow-sm">
          <span className="px-2 text-[11px] uppercase tracking-[0.16em] text-stone-500">Language</span>
          <Link href="/about?lang=en" className={`rounded-full px-3 py-1.5 text-xs font-medium ${lang === "en" ? "lang-active" : "lang-inactive"}`}>EN</Link>
          <Link href="/about?lang=ro" className={`rounded-full px-3 py-1.5 text-xs font-medium ${lang === "ro" ? "lang-active" : "lang-inactive"}`}>RO</Link>
        </div>
      </div>
      <div className="mt-8 label-premium inline-flex rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-stone-600">{t.eyebrow}</div>
      <h1 className="font-display mt-4 text-5xl tracking-tight">{t.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">{t.intro}</p>
      <div className="mt-10 grid gap-4 rounded-2xl bg-white/70 p-6 shadow-[0_24px_80px_rgba(20,20,20,0.08)] backdrop-blur-sm">
        {t.body.map((p) => <p key={p} className="text-lg leading-8 text-stone-700">{p}</p>)}
      </div>
      <Footer lang={lang} />
    </main>
  );
}
