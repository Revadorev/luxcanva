import Link from "next/link";
import { Footer } from "@/components/Footer";

const content = {
  en: {
    nav: { home: "Home", about: "About", services: "Services", faq: "FAQ", contact: "Contact" },
    localeLabel: "Language",
    topLabel: "European canvas production partner",
    brandLine: "Romania · European Union",
    heroTitle: "White-Label Canvas Printing & Fulfillment, Designed for Serious Brands",
    heroSubtitle:
      "LuxCanva is a Romania-based B2B canvas production workshop for ecommerce brands, interior designers, photographers and resellers across Europe — with capacity up to 200 pieces per day, production up to 170×300 cm, premium aluminium framing and 3D relief printing.",
    ctaPrimary: "Request B2B Pricing",
    ctaSecondary: "Order Samples",
    trustBadges: ["Made in EU", "Up to 170×300 cm", "200 Pieces / Day", "3D Relief Printing", "Premium Aluminium Frames", "White-Label Fulfillment"],
    heroStats: [
      ["170×300 cm", "Ultra-large format production"],
      ["200/day", "Daily workshop capacity"],
      ["EU based", "Romania production & fulfillment"],
    ],
    servicesTitle: "A Production Setup Built for B2B Growth",
    servicesIntro:
      "We help wall art businesses scale without owning machines, stock or internal production teams.",
    services: [
      ["White-Label Fulfillment", "We print, stretch, pack and ship under your brand, with no LuxCanva branding inside the package unless requested."],
      ["Print-on-Demand", "Orders can be sent one by one through a simple workflow, ideal for online stores and marketplace sellers."],
      ["Large Format & Panoramic", "Oversized canvas production up to 170 × 300 cm for high-impact interior projects and premium collections."],
      ["3D Relief Printing", "Embossed texture effects that add depth and exclusivity to selected wall art products."],
      ["Premium Aluminium Frames", "Silver, gold and black aluminium frames for a refined gallery-grade finish."],
      ["Bulk Production", "Reliable output for hotels, offices, restaurants, decorators and large ecommerce campaigns."],
    ],
    whyTitle: "Why LuxCanva Feels Different",
    whyIntro:
      "Not a generic print shop. A production partner focused on consistency, presentation and operational clarity.",
    why: [
      "Romania-based EU manufacturing",
      "Up to 200 canvas pieces produced per day",
      "Ultra-large sizes up to 170 × 300 cm",
      "3D relief and premium finishing options",
      "Premium aluminium frames in silver, gold and black",
      "White-label shipping and fulfillment",
      "Direct communication with the production team",
      "Suitable for POD, reseller and bulk workflows",
    ],
    premiumTitle: "What Makes Our Production Premium",
    premiumIntro: "Every order goes through the same quality standards — from print to packaging. These are the details that matter to serious B2B clients.",
    premium: [
      "Large format printing up to 170 × 300 cm",
      "Panoramic wall art production",
      "Professional UV print quality",
      "3D relief embossed finish",
      "Premium aluminium framing options",
      "Secure courier-ready packaging",
      "White-label presentation",
      "Capacity up to 200 pieces/day",
    ],
    workflowTitle: "How We Work Together",
    workflow: [
      ["01", "Tell us what you sell", "Share your business model, product range and estimated monthly volume."],
      ["02", "Get B2B pricing", "We quote based on size range, finishing options and expected production needs."],
      ["03", "Order samples", "You test print quality, material, framing, packaging and final presentation."],
      ["04", "Send live orders", "We receive orders manually, by spreadsheet, through a simple agreed workflow, or via your own integrated API connection."],
      ["05", "We produce & ship", "Your orders are produced, checked, packed and shipped to you or your end customer."],
    ],
    contactTitle: "Build a Better Canvas Supply Chain",
    contactText:
      "If you need a reliable European production partner for white-label canvas printing, let’s talk. We’ll send pricing, sample options and next-step details.",
    contactAlt: "Talk to Production Team",
    quoteCta: "Get a Quote",
    formFields: ["Name", "Company", "Email", "Phone", "Website", "Country", "Monthly order estimate"],
    message: "Message",
  },
  ro: {
    nav: { home: "Acasă", about: "Despre", services: "Servicii", faq: "Întrebări", contact: "Contact" },
    localeLabel: "Limbă",
    topLabel: "Partener european de producție canvas",
    brandLine: "România · Uniunea Europeană",
    heroTitle: "Print Canvas White-Label & Fulfillment pentru Branduri Serioase",
    heroSubtitle:
      "LuxCanva este un atelier B2B de producție canvas din România pentru branduri ecommerce, designeri de interior, fotografi și reselleri din Europa — cu o capacitate de până la 200 tablouri pe zi, producție până la 170×300 cm, rame aluminiu premium și print în relief 3D.",
    ctaPrimary: "Solicită prețuri B2B",
    ctaSecondary: "Comandă mostre",
    trustBadges: ["Produs în UE", "Până la 170×300 cm", "200 Tablouri / Zi", "Print Relief 3D", "Rame Aluminiu Premium", "Fulfillment White-Label"],
    heroStats: [
      ["170×300 cm", "Producție ultra-large format"],
      ["200/zi", "Capacitate zilnică în atelier"],
      ["Bază în UE", "Producție și fulfillment din România"],
      ["Relief 3D", "Efect embossed pe canvas"],
      ["Aluminiu", "Rame Gold · Silver · Negru"],
    ],
    servicesTitle: "O infrastructură de producție pentru creștere B2B",
    servicesIntro:
      "Ajutăm businessurile de wall art să scaleze fără să dețină utilaje, stoc sau echipe interne de producție.",
    services: [
      ["Fulfillment White-Label", "Printăm, întindem, ambalăm și livrăm sub brandul tău, fără branding LuxCanva în pachet dacă nu este cerut."],
      ["Print-on-Demand", "Comenzile pot fi trimise individual printr-un workflow simplu, ideal pentru magazine online și marketplace sellers."],
      ["Large Format & Panoramic", "Producție oversized până la 170 × 300 cm pentru proiecte interioare de impact și colecții premium."],
      ["Print în Relief 3D", "Efecte embossed care adaugă profunzime și exclusivitate anumitor produse de wall art."],
      ["Rame Aluminiu Premium", "Rame aluminiu argintii, aurii și negre pentru un finisaj rafinat, de galerie."],
      ["Producție Bulk", "Output fiabil pentru hoteluri, birouri, restaurante, decoratori și campanii ecommerce mari."],
    ],
    whyTitle: "De ce LuxCanva se simte diferit",
    whyIntro:
      "Nu un print shop generic. Un partener de producție axat pe consistență, prezentare și claritate operațională.",
    why: [
      "Producție în România, în UE",
      "Până la 200 tablouri canvas produse pe zi",
      "Dimensiuni ultra-mari până la 170 × 300 cm",
      "Print în relief 3D și finisaje premium",
      "Rame aluminiu premium în argintiu, auriu și negru",
      "Livrare și fulfillment white-label",
      "Comunicare directă cu echipa de producție",
      "Potrivit pentru POD, reselleri și bulk orders",
    ],
    premiumTitle: "Ce face producția noastră premium",
    premiumIntro: "Fiecare comandă trece prin aceleaşi standarde de calitate — de la print la ambalaj. Acestea sunt detaliile care contează pentru clienții B2B seriosi.",
    premium: [
      "Print large format până la 170 × 300 cm",
      "Producție panoramică pentru wall art",
      "Calitate profesională UV",
      "Finisaj embossed în relief 3D",
      "Opțiuni premium de rame aluminiu",
      "Ambalare sigură pentru curier",
      "Prezentare white-label",
      "Capacitate până la 200 tablouri/zi",
    ],
    workflowTitle: "Cum lucrăm împreună",
    workflow: [
      ["01", "Spune-ne ce vinzi", "Trimite-ne modelul businessului, gama de produse și volumul estimat lunar."],
      ["02", "Primești prețuri B2B", "Cotăm în funcție de dimensiuni, finisaje și nevoile reale de producție."],
      ["03", "Comanzi mostre", "Testezi calitatea printului, materialul, ramele, ambalarea și prezentarea finală."],
      ["04", "Trimiți comenzile live", "Primim comenzile manual, prin spreadsheet, printr-un workflow simplu agreat sau prin integrarea propriului tău API."],
      ["05", "Noi producem și livrăm", "Comenzile sunt produse, verificate, ambalate și trimise către tine sau clientul final."],
    ],
    contactTitle: "Construiește un supply chain mai bun pentru canvas",
    contactText:
      "Dacă ai nevoie de un partener european de încredere pentru print canvas white-label, hai să vorbim. Îți trimitem prețuri, opțiuni de mostre și pașii următori.",
    contactAlt: "Vorbește cu echipa de producție",
    quoteCta: "Cere ofertă",
    formFields: ["Nume", "Companie", "Email", "Telefon", "Website", "Țară", "Estimare comenzi lunare"],
    message: "Mesaj",
  },
} as const;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const lang = params.lang === "ro" ? "ro" : "en";
  const t = content[lang];

  return (
    <main className="relative z-[1]">
      <header className="sticky top-0 z-30 border-b border-white/30 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-stone-950 text-sm font-semibold text-white shadow-lg">LC</div>
            <div>
              <div className="text-lg font-semibold tracking-tight">LuxCanva</div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-stone-500">B2B Canvas Production</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-stone-700 md:flex">
            <Link href={`/?lang=${lang}`}>{t.nav.home}</Link>
            <Link href={`/about?lang=${lang}`}>{t.nav.about}</Link>
            <Link href={`/services?lang=${lang}`}>{t.nav.services}</Link>
            <Link href={`/faq?lang=${lang}`}>{t.nav.faq}</Link>
            <Link href={`/contact?lang=${lang}`}>{t.nav.contact}</Link>
            <div className="flex items-center gap-1 rounded-full border border-stone-900/10 bg-white px-1 py-1 shadow-sm">
              <span className="px-2 text-[11px] uppercase tracking-[0.16em] text-stone-500">{t.localeLabel}</span>
              <Link href="/?lang=en" className={`rounded-full px-3 py-1.5 text-xs font-medium ${lang === "en" ? "lang-active" : "lang-inactive"}`}>EN</Link>
              <Link href="/?lang=ro" className={`rounded-full px-3 py-1.5 text-xs font-medium ${lang === "ro" ? "lang-active" : "lang-inactive"}`}>RO</Link>
            </div>
            <Link href={`/contact?lang=${lang}`} className="btn-dark">{t.ctaPrimary}</Link>
          </nav>
        </div>
      </header>

      <section className="px-6 pb-10 pt-8 lg:px-10 lg:pb-16 lg:pt-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="card-premium rounded-2xl p-8 sm:p-10 lg:p-14">
            <div className="label-premium inline-flex rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-stone-600">
              {t.topLabel}
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.28em] text-stone-500">{t.brandLine}</p>
            <h1 className="font-display mt-4 max-w-4xl text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{t.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="btn-dark" href="#contact">{t.ctaPrimary}</a>
              <a className="btn-light" href="#contact">{t.ctaSecondary}</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {t.trustBadges.map((badge) => (
                <span key={badge} className="label-premium rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] text-stone-700">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-[1.1fr_.9fr]">
              <div className="overflow-hidden rounded-xl border border-white/50 shadow-[0_30px_80px_rgba(20,20,20,0.12)]">
                <div className="aspect-[4/5] bg-[linear-gradient(rgba(15,15,16,.18),rgba(15,15,16,.18)),url(https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80)] bg-cover bg-center" />
              </div>
              <div className="grid gap-6">
                <div className="overflow-hidden rounded-xl border border-white/50 shadow-[0_30px_80px_rgba(20,20,20,0.12)]">
                  <div className="aspect-[4/3] bg-[linear-gradient(rgba(15,15,16,.12),rgba(15,15,16,.12)),url(https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=1200&q=80)] bg-cover bg-center" />
                </div>
                <div className="card-premium rounded-2xl p-6">
                  <p className="text-xs uppercase tracking-[0.26em] text-stone-500">Workshop Notes</p>
                  <div className="mt-4 space-y-4">
                    {t.heroStats.map(([value, label]) => (
                      <div key={value} className="border-b border-stone-900/8 pb-4 last:border-b-0 last:pb-0">
                        <div className="font-display text-3xl">{value}</div>
                        <div className="mt-1 text-sm text-stone-600">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
              ].map((url, i) => (
                <div key={url} className="overflow-hidden rounded-xl border border-white/50 shadow-[0_24px_60px_rgba(20,20,20,0.08)]">
                  <div className={`aspect-[5/4] bg-cover bg-center ${i === 0 ? "" : ""}`} style={{ backgroundImage: `linear-gradient(rgba(15,15,16,.14),rgba(15,15,16,.14)), url(${url})` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section title={t.servicesTitle} intro={t.servicesIntro} dark>
        <Grid items={t.services.map(([title, text]) => ({ title, text }))} dark />
      </Section>

      <Section title={t.whyTitle} intro={t.whyIntro}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.why.map((item) => (
            <div key={item} className="card-premium rounded-xl p-5 text-stone-800">
              <div className="mb-4 h-px w-12 bg-[var(--gold)]" />
              <p className="text-sm leading-7">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t.premiumTitle} intro={t.premiumIntro}>
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="overflow-hidden rounded-xl border border-white/50 shadow-[0_30px_80px_rgba(20,20,20,0.12)]">
            <div className="aspect-[4/5] bg-[linear-gradient(rgba(15,15,16,.16),rgba(15,15,16,.16)),url(https://images.unsplash.com/photo-1490127252417-7c393f993ee4?auto=format&fit=crop&w=1400&q=80)] bg-cover bg-center" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.premium.map((item) => (
              <div key={item} className="card-premium rounded-xl px-4 py-3 flex gap-3 items-center">
                <span style={{
                  background: "linear-gradient(135deg, #b9935a 0%, #d9bc8f 100%)",
                  color: "#fff",
                  borderRadius: "0.4rem",
                  padding: "0.25rem 0.5rem",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  flexShrink: 0,
                  boxShadow: "0 2px 8px rgba(185,147,90,0.35)",
                }}>★</span>
                <p className="text-base font-bold leading-6 text-stone-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title={t.workflowTitle} intro="" dark>
        <div className="grid gap-4 lg:grid-cols-5">
          {t.workflow.map(([nr, title, text]) => (
            <div key={nr} className="border-l-2 border-[var(--gold-soft)] bg-white/5 p-6 text-white">
              <div className="font-display text-4xl text-[var(--gold-soft)]">{nr}</div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section id="contact" className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.9fr]">
          <div className="card-premium rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="label-premium inline-flex rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-stone-600">Contact</div>
            <h2 className="font-display mt-6 text-4xl leading-tight sm:text-5xl">{t.contactTitle}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{t.contactText}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="btn-dark" href="mailto:horia.petrutiu@kidgps.ro">{t.ctaPrimary}</a>
              <a className="btn-light" href="mailto:horia.petrutiu@kidgps.ro">{t.contactAlt}</a>
            </div>
          </div>

          <div className="card-premium rounded-2xl p-6 sm:p-8">
            <form className="grid gap-3">
              {t.formFields.map((f) => (
                <input key={f} placeholder={f} className="rounded-[1.2rem] border border-stone-900/10 bg-white/85 px-4 py-3.5 text-sm outline-none" />
              ))}
              <textarea placeholder={t.message} rows={6} className="rounded-[1.2rem] border border-stone-900/10 bg-white/85 px-4 py-3.5 text-sm outline-none" />
              <button className="btn-dark">{t.quoteCta}</button>
            </form>
          </div>
        </div>
      </section>
      <Footer lang={lang} />
    </main>
  );
}

function Section({ title, intro, children, dark = false }: { title: string; intro: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <section style={dark ? { background: '#0f0f10', color: '#ffffff' } : {}} className="px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div style={dark ? { background: 'rgba(255,255,255,0.10)', color: '#d4cfc8' } : {}} className={`${dark ? '' : 'label-premium text-stone-600'} inline-flex rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.28em]`}>
            LuxCanva
          </div>
          <h2 className="font-display mt-6 text-4xl leading-tight tracking-tight sm:text-5xl">{title}</h2>
          {intro ? <p style={dark ? { color: '#a8a29e' } : {}} className={`mt-4 text-lg leading-8 ${dark ? '' : 'text-stone-700'}`}>{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function Grid({ items, dark = false }: { items: { title: string; text?: string }[]; dark?: boolean }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          style={dark ? { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" } : {}}
          className={dark ? "rounded-xl p-6" : "card-premium text-stone-900 rounded-xl p-6"}
        >
          <div style={{ background: dark ? "#d9bc8f" : "#b9935a", height: "1px", width: "3rem", marginBottom: "1.25rem" }} />
          <h3 style={dark ? { color: "#ffffff" } : {}} className="text-xl font-semibold leading-snug">{item.title}</h3>
          {item.text ? <p style={dark ? { color: "#a8a29e" } : {}} className="mt-4 text-sm leading-7 text-stone-700">{item.text}</p> : null}
        </article>
      ))}
    </div>
  );
}
