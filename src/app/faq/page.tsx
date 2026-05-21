import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Canvas Printing B2B FAQ | LuxCanva White-Label Fulfillment",
};

const copy = {
  en: {
    back: "Back to homepage",
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    faqs: [
      ["What is your daily production capacity?", "Our workshop can produce up to 200 canvas pieces per day."],
      ["What are the maximum canvas sizes you can produce?", "We produce canvas prints up to 170 × 300 cm, including oversized and ultra-large formats."],
      ["Do you offer premium framing options?", "Yes. We offer premium aluminium frames in silver, gold and black finishes."],
      ["Do you offer 3D relief printing?", "Yes. We offer 3D relief embossed printing effects on canvas for selected projects."],
      ["Do you offer white-label fulfillment?", "Yes. We can produce and ship canvas prints without LuxCanva branding, directly to your customer."],
      ["Can you ship directly to my customers?", "Yes. We can ship orders directly to end customers, depending on the agreed workflow."],
      ["Do you work with ecommerce stores?", "Yes. We work with Shopify, WooCommerce, marketplace sellers and other online businesses."],
      ["Can I order samples?", "Yes. We recommend ordering samples before starting a B2B partnership."],
      ["Do you offer custom sizes?", "Yes. We can produce custom sizes depending on the technical requirements of the project."],
      ["Do you handle bulk orders?", "Yes. We can produce canvas prints for hotels, offices, restaurants, interior design projects and large ecommerce campaigns."],
    ],
  },
  ro: {
    back: "Înapoi la homepage",
    eyebrow: "Întrebări frecvente",
    title: "Întrebări frecvente",
    faqs: [
      ["Care este capacitatea voastră de producție zilnică?", "Atelierul nostru poate produce până la 200 tablouri canvas pe zi."],
      ["Care sunt dimensiunile maxime pe care le puteți produce?", "Producem canvas-uri de până la 170 × 300 cm, inclusiv formate oversized și ultra-mari."],
      ["Oferiți opțiuni de rame premium?", "Da. Oferim rame din aluminiu premium în finisaje argintiu, auriu și negru."],
      ["Oferiți print în relief 3D?", "Da. Oferim efecte de print în relief 3D pe canvas pentru proiecte selectate."],
      ["Oferiți fulfillment white-label?", "Da. Putem produce și expedia canvas-uri fără branding LuxCanva, direct către clientul tău."],
      ["Puteți livra direct către clienții mei?", "Da. Putem livra direct către clientul final, în funcție de fluxul agreat."],
      ["Lucrați cu magazine ecommerce?", "Da. Lucrăm cu Shopify, WooCommerce, selleri din marketplace-uri și alte businessuri online."],
      ["Pot comanda mostre?", "Da. Recomandăm comandarea de mostre înainte de începerea unui parteneriat B2B."],
      ["Oferiți dimensiuni custom?", "Da. Putem produce dimensiuni custom în funcție de cerințele tehnice ale proiectului."],
      ["Gestionați comenzi bulk?", "Da. Putem produce canvas-uri pentru hoteluri, birouri, restaurante, proiecte de design interior și campanii ecommerce mari."],
    ],
  },
} as const;

export default async function FaqPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const params = await searchParams;
  const lang = params.lang === "ro" ? "ro" : "en";
  const t = copy[lang];

  return (
    <main className="relative z-[1] mx-auto max-w-6xl px-6 py-20 lg:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href={`/?lang=${lang}`} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-stone-700 shadow-sm">← {t.back}</Link>
        <div className="flex items-center gap-1 rounded-full border border-stone-900/10 bg-white px-1 py-1 shadow-sm">
          <span className="px-2 text-[11px] uppercase tracking-[0.16em] text-stone-500">Language</span>
          <Link href="/faq?lang=en" className={`rounded-full px-3 py-1.5 text-xs font-medium ${lang === "en" ? "lang-active" : "lang-inactive"}`}>EN</Link>
          <Link href="/faq?lang=ro" className={`rounded-full px-3 py-1.5 text-xs font-medium ${lang === "ro" ? "lang-active" : "lang-inactive"}`}>RO</Link>
        </div>
      </div>
      <div className="mt-8 label-premium inline-flex rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-stone-600">{t.eyebrow}</div>
      <h1 className="font-display mt-4 text-5xl tracking-tight">{t.title}</h1>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {t.faqs.map(([q, a]) => (
          <article key={q} className="card-premium rounded-xl p-6 text-stone-900">
            <div className="mb-5 h-px w-12 bg-[var(--gold)]" />
            <h2 className="text-xl font-semibold leading-snug">{q}</h2>
            <p className="mt-4 text-sm leading-7 text-stone-700">{a}</p>
          </article>
        ))}
      </div>
      <Footer lang={lang} />
    </main>
  );
}
