import Link from "next/link";

export const metadata = {
  title: "Contact LuxCanva | Request B2B Canvas Printing Prices",
};

const copy = {
  en: {
    back: "Back to homepage",
    eyebrow: "Contact",
    title: "Let’s Build Your Canvas Production Workflow",
    intro:
      "Looking for a reliable European canvas print partner? Contact LuxCanva and tell us what you need. We will send you B2B pricing, sample options and production details.",
    fields: ["Name", "Company", "Email", "Phone", "Website", "Country", "Monthly order estimate"],
    message: "Message",
    cta: "Request B2B Pricing",
  },
  ro: {
    back: "Înapoi la homepage",
    eyebrow: "Contact",
    title: "Hai să construim fluxul tău de producție canvas",
    intro:
      "Cauți un partener european de încredere pentru print canvas? Contactează LuxCanva și spune-ne de ce ai nevoie. Îți trimitem prețurile B2B, opțiunile de mostre și detaliile de producție.",
    fields: ["Nume", "Companie", "Email", "Telefon", "Website", "Țară", "Estimare comenzi lunare"],
    message: "Mesaj",
    cta: "Solicită prețuri B2B",
  },
} as const;

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const params = await searchParams;
  const lang = params.lang === "ro" ? "ro" : "en";
  const t = copy[lang];

  return (
    <main className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
      <Link href={`/?lang=${lang}`} className="text-sm text-stone-600">← {t.back}</Link>
      <p className="mt-8 text-sm uppercase tracking-[0.28em] text-stone-500">{t.eyebrow}</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight">{t.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">{t.intro}</p>
      <form className="mt-10 grid gap-3 rounded-[2rem] border border-stone-900/10 bg-white p-6">
        {t.fields.map((f) => <input key={f} placeholder={f} className="rounded-2xl border border-stone-900/10 bg-[#f7f2ea] px-4 py-3 outline-none" />)}
        <textarea placeholder={t.message} rows={6} className="rounded-2xl border border-stone-900/10 bg-[#f7f2ea] px-4 py-3 outline-none" />
        <button className="w-fit rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white">{t.cta}</button>
      </form>
    </main>
  );
}
