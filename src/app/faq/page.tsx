import Link from "next/link";

export const metadata = {
  title: "Canvas Printing B2B FAQ | LuxCanva White-Label Fulfillment",
};

const copy = {
  en: {
    back: "Back to homepage",
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    faqs: [
      ["What are the maximum canvas sizes you can produce?", "We produce canvas prints up to 170 × 300 cm, including oversized and ultra-large formats. We also produce panoramic canvas for wide-wall installations. For very large or custom projects, contact us with your specifications."],
      ["Do you offer premium framing options?", "Yes. In addition to standard canvas stretching, we offer premium aluminium frames in silver, gold and black finishes for a gallery-quality presentation."],
      ["Do you offer 3D relief printing?", "Yes. We offer 3D relief (embossed) printing effects on canvas, adding texture and depth to wall art pieces. This is available for select projects — contact us for details."],
      ["Do you offer white-label fulfillment?", "Yes. We can produce and ship canvas prints without LuxCanva branding, directly to your customer."],
      ["Can you ship directly to my customers?", "Yes. We can ship orders directly to end customers, depending on the agreed workflow."],
      ["Do you work with ecommerce stores?", "Yes. We work with Shopify, WooCommerce, marketplace sellers and other online businesses."],
      ["Can I order samples?", "Yes. We recommend ordering samples before starting a B2B partnership."],
      ["Do you offer custom sizes?", "Yes. We can produce custom sizes depending on the technical requirements of the project."],
      ["Do you handle bulk orders?", "Yes. We can produce canvas prints for hotels, offices, restaurants, interior design projects and large ecommerce campaigns."],
      ["Where are you based?", "LuxCanva is based in Romania, European Union."],
      ["What types of businesses do you work with?", "We work with ecommerce brands, photographers, artists, interior designers, hotels, restaurants, offices and resellers."],
      ["Can you include my branding in the package?", "Depending on the project, we can discuss custom inserts or branded packaging options."],
      ["How do I start?", "Contact us with your business details, estimated volume and product requirements. We will send you pricing and sample options."],
    ],
  },
  ro: {
    back: "Înapoi la homepage",
    eyebrow: "Întrebări frecvente",
    title: "Întrebări frecvente",
    faqs: [
      ["Care sunt dimensiunile maxime pe care le puteți produce?", "Producem canvas-uri de până la 170 × 300 cm, inclusiv formate oversized și ultra-mari. Producem și canvas panoramic pentru instalații pe pereți lați. Pentru proiecte mari sau personalizate, contactează-ne cu specificațiile tale."],
      ["Oferiți opțiuni de rame premium?", "Da. Pe lângă întinderea standard pe șasiu, oferim rame din aluminiu premium în finisaje argintiu, auriu și negru pentru o prezentare de tip galerie."],
      ["Oferiți print în relief 3D?", "Da. Oferim efecte de print în relief 3D pe canvas, adăugând textură și profunzime pieselor de wall art. Disponibil pentru anumite proiecte — contactează-ne pentru detalii."],
      ["Oferiți fulfillment white-label?", "Da. Putem produce și expedia canvas-uri fără branding LuxCanva, direct către clientul tău."],
      ["Puteți livra direct către clienții mei?", "Da. Putem livra direct către clientul final, în funcție de fluxul agreat."],
      ["Lucrați cu magazine ecommerce?", "Da. Lucrăm cu Shopify, WooCommerce, selleri din marketplace-uri și alte businessuri online."],
      ["Pot comanda mostre?", "Da. Recomandăm comandarea de mostre înainte de începerea unui parteneriat B2B."],
      ["Oferiți dimensiuni custom?", "Da. Putem produce dimensiuni custom în funcție de cerințele tehnice ale proiectului."],
      ["Gestionați comenzi bulk?", "Da. Putem produce canvas-uri pentru hoteluri, birouri, restaurante, proiecte de design interior și campanii ecommerce mari."],
      ["Unde aveți sediul?", "LuxCanva are baza în România, Uniunea Europeană."],
      ["Cu ce tipuri de businessuri lucrați?", "Lucrăm cu branduri ecommerce, fotografi, artiști, designeri de interior, hoteluri, restaurante, birouri și reselleri."],
      ["Puteți include brandingul meu în pachet?", "În funcție de proiect, putem discuta inserturi personalizate sau opțiuni de ambalare branduită."],
      ["Cum încep?", "Contactează-ne cu detaliile businessului tău, volumul estimat și cerințele produselor. Îți trimitem prețurile și opțiunile de mostre."],
    ],
  },
} as const;

export default async function FaqPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const params = await searchParams;
  const lang = params.lang === "ro" ? "ro" : "en";
  const t = copy[lang];

  return (
    <main className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
      <Link href={`/?lang=${lang}`} className="text-sm text-stone-600">← {t.back}</Link>
      <p className="mt-8 text-sm uppercase tracking-[0.28em] text-stone-500">{t.eyebrow}</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight">{t.title}</h1>
      <div className="mt-10 space-y-4">
        {t.faqs.map(([q, a]) => (
          <article key={q} className="rounded-3xl border border-stone-900/10 bg-white p-6">
            <h2 className="text-lg font-medium">{q}</h2>
            <p className="mt-3 text-stone-700">{a}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
