import Link from "next/link";

const content = {
  en: {
    nav: { home: "Home", about: "About", services: "Services", faq: "FAQ", contact: "Contact" },
    localeLabel: "Language",
    brandLine: "LuxCanva • Romania, European Union",
    heroTitle: "White-Label Canvas Printing & Fulfillment Partner in Europe",
    heroSubtitle:
      "LuxCanva is a Romania-based canvas production workshop with capacity for up to 200 pieces per day, offering premium canvas printing up to 170×300 cm, 3D relief printing, premium aluminium frames, white-label fulfillment and print-on-demand services for ecommerce brands, interior designers, photographers and resellers across Europe.",
    ctaPrimary: "Request B2B Pricing",
    ctaSecondary: "Order Samples",
    trustBadges: ["Made in EU", "Up to 170×300 cm", "3D Relief Printing", "200 Pieces / Day", "Premium Alu Frames", "White-Label Fulfillment"],
    heroLabels: ["Workshop production", "Secure packaging", "Interior-ready wall art"],
    whoTitle: "Built for Businesses That Sell Wall Art",
    whoIntro:
      "We help businesses scale their canvas print operations without investing in production equipment, stock, staff or logistics. Whether you run an online store, sell custom wall art, manage interior design projects or need a reliable production partner, LuxCanva can produce and ship canvas prints directly to your customers.",
    who: [
      ["Ecommerce Stores", "White-label production and dropshipping for Shopify, WooCommerce, Etsy, Amazon and marketplace sellers."],
      ["Interior Designers & Architects", "Custom canvas sizes and premium wall art production for homes, hotels, offices, restaurants and commercial spaces."],
      ["Photographers", "Professional canvas printing for wedding, family, newborn, portrait and corporate photography clients."],
      ["Hotels, Restaurants & Offices", "Bulk canvas production for hospitality, business interiors, Airbnb apartments and commercial decoration projects."],
      ["Artists & Creators", "Turn digital art, AI art, photography or illustrations into premium physical canvas products."],
    ],
    servicesTitle: "Our B2B Canvas Production Services",
    servicesIntro:
      "LuxCanva offers a complete production and fulfillment solution for businesses that need reliable canvas printing in Europe.",
    services: [
      ["White-Label Canvas Fulfillment", "We produce and ship canvas prints under your brand. No LuxCanva branding is included in the package unless requested."],
      ["Print-on-Demand Production", "Send us orders as they come in. We print, stretch, pack and ship directly to your customer."],
      ["Bulk Canvas Printing", "Ideal for interior projects, hotel rooms, office decoration, retail collections and large-volume campaigns."],
      ["Large Format Canvas Printing", "We produce oversized and panoramic canvas prints up to 170 × 300 cm — ideal for premium wall art collections, hotel lobbies and statement interior pieces."],
      ["Custom Sizes", "Flexible production for standard and custom dimensions, depending on project requirements."],
      ["Professional Packaging", "Each canvas is carefully packed for safe transport across Europe."],
    ],
    whyTitle: "Why Partner With LuxCanva?",
    whyIntro: "Scale with a European production partner that is built for reliability, speed and premium presentation.",
    why: [
      "EU-based production in Romania",
      "Up to 200 canvas pieces produced per day",
      "Ultra-large format printing up to 170 × 300 cm",
      "3D relief (embossed) printing on canvas",
      "Premium aluminium frames: silver, gold and black",
      "White-label shipping available",
      "Premium cotton canvas material",
      "Professional UV printing technology",
      "Panoramic canvas capabilities",
      "Suitable for POD and bulk orders",
      "Custom sizes available",
      "Reliable packaging for courier delivery",
      "Direct communication with the production team",
    ],
    whiteLabelEyebrow: "White Label Fulfillment",
    whiteLabelTitle: "Your Brand. Our Production.",
    whiteLabelText:
      "With our white-label fulfillment service, your customers receive the final product as if it came directly from your brand. We handle production, quality control, packaging and shipping while you focus on sales, marketing and customer acquisition.",
    whiteLabelFeatures: [
      "No LuxCanva branding in the package",
      "Optional custom inserts",
      "Optional branded packaging solutions",
      "Direct shipping to end customers",
      "Suitable for ecommerce and marketplace sellers",
      "Simple order workflow via email, CSV or manual order submission",
    ],
    whiteLabelCta: "Become a White-Label Partner",
    sampleEyebrow: "Sample Kit",
    sampleTitle: "Request a Sample Kit",
    sampleText:
      "Before starting a partnership, we recommend ordering samples to evaluate our canvas material, print quality, finishing and packaging.",
    capabilitiesTitle: "Canvas Products We Can Produce",
    capabilitiesIntro: "We produce premium canvas wall art for both small and large-scale B2B needs.",
    capabilities: [
      "Standard canvas prints",
      "Large format canvas prints",
      "Panoramic canvas prints",
      "Personalized photo canvas",
      "Wall art sets",
      "Interior decoration canvas",
      "Hotel and office canvas decor",
      "Custom size canvas projects",
      "Premium UV printed canvas",
      "3D relief printing effect on canvas",
      "Premium aluminium frames: silver, gold and black",
      "Ultra-large formats up to 170 × 300 cm",
    ],
    workflowTitle: "How It Works",
    workflowIntro: "A simple workflow built for B2B partnerships.",
    workflow: ["Contact Us", "Receive B2B Pricing", "Order Samples", "Send Orders", "We Produce & Ship"],
    qualityTitle: "Premium Canvas Quality",
    qualityIntro:
      "We focus on producing canvas prints that look professional, feel premium and are suitable for both ecommerce customers and high-end interior spaces.",
    quality: [
      "Premium canvas material",
      "Sharp print detail",
      "Rich color reproduction",
      "Durable structure",
      "Carefully stretched canvas",
      "3D relief (embossed) finish available",
      "Premium aluminium framing: silver, gold, black",
      "Professional finishing",
      "Quality control before dispatch",
      "Secure protective packaging",
    ],
    b2bEyebrow: "B2B Benefits",
    b2bTitle: "Scale Your Canvas Business Without Owning Production",
    b2bText:
      "Working with LuxCanva allows you to grow faster without investing in expensive printing equipment, production space, stock, staff or packaging operations.",
    b2b: [
      "Lower operational complexity",
      "No need to hold inventory",
      "Production capacity up to 200 pieces/day",
      "Faster product testing",
      "Easy expansion into new canvas sizes — up to 170×300 cm",
      "Flexible order volume",
      "Better control over European fulfillment",
      "Direct access to production support",
    ],
    contactEyebrow: "Contact",
    contactTitle: "Let’s Build Your Canvas Production Workflow",
    contactText:
      "Looking for a reliable European canvas print partner? Contact LuxCanva and tell us what you need. We will send you B2B pricing, sample options and production details.",
    contactAlt: "Contact Our Production Team",
    quoteCta: "Get a Quote",
    formFields: ["Name", "Company", "Email", "Phone", "Website", "Country", "Monthly order estimate"],
    message: "Message",
  },
  ro: {
    nav: { home: "Acasă", about: "Despre", services: "Servicii", faq: "Întrebări", contact: "Contact" },
    localeLabel: "Limbă",
    brandLine: "LuxCanva • România, Uniunea Europeană",
    heroTitle: "Partener european pentru print canvas white-label și fulfillment",
    heroSubtitle:
      "LuxCanva este un atelier de producție canvas din România cu o capacitate de până la 200 tablouri pe zi, print canvas până la 170×300 cm, print în relief 3D, rame aluminiu premium, fulfillment white-label și servicii print-on-demand pentru branduri ecommerce, designeri de interior, fotografi și reselleri din Europa.",
    ctaPrimary: "Solicită prețuri B2B",
    ctaSecondary: "Comandă mostre",
    trustBadges: ["Produs în UE", "Până la 170×300 cm", "Print Relief 3D", "200 Tablouri / Zi", "Rame Aluminiu Premium", "Fulfillment White-Label"],
    heroLabels: ["Producție în atelier", "Ambalare sigură", "Wall art pregătit pentru interior"],
    whoTitle: "Construit pentru companii care vând wall art",
    whoIntro:
      "Ajutăm companiile să își scaleze operațiunile de print canvas fără investiții în echipamente, stoc, personal sau logistică. Fie că ai un magazin online, vinzi artă decorativă personalizată, gestionezi proiecte de design interior sau ai nevoie de un partener de producție de încredere, LuxCanva poate produce și expedia tablourile canvas direct către clienții tăi.",
    who: [
      ["Magazine Ecommerce", "Producție white-label și dropshipping pentru Shopify, WooCommerce, Etsy, Amazon și selleri din marketplace-uri."],
      ["Designeri de Interior & Arhitecți", "Dimensiuni custom și producție premium de wall art pentru locuințe, hoteluri, birouri, restaurante și spații comerciale."],
      ["Fotografi", "Print profesional pe canvas pentru clienți de wedding, family, newborn, portret și corporate."],
      ["Hoteluri, Restaurante & Birouri", "Producție bulk de canvas pentru HoReCa, spații business, apartamente Airbnb și proiecte comerciale de decor."],
      ["Artiști & Creatori", "Transformă arta digitală, AI art, fotografia sau ilustrațiile în produse canvas premium fizice."],
    ],
    servicesTitle: "Serviciile noastre B2B de producție canvas",
    servicesIntro:
      "LuxCanva oferă o soluție completă de producție și fulfillment pentru companiile care au nevoie de print canvas fiabil în Europa.",
    services: [
      ["Fulfillment Canvas White-Label", "Producem și expediem tablouri canvas sub brandul tău. Pachetul nu include branding LuxCanva decât dacă este solicitat."],
      ["Producție Print-on-Demand", "Ne trimiți comenzile pe măsură ce apar. Noi printăm, întindem pe șasiu, ambalăm și expediem direct către clientul tău."],
      ["Print Canvas Bulk", "Ideal pentru proiecte de interior, camere de hotel, decor office, colecții retail și campanii cu volum mare."],
      ["Print Canvas Large Format", "Producem canvas-uri oversized și panoramice până la 170 × 300 cm — ideale pentru colecții premium de wall art, lobby-uri de hotel și piese statement de interior."],
      ["Dimensiuni Custom", "Producție flexibilă pentru dimensiuni standard și personalizate, în funcție de cerințele proiectului."],
      ["Ambalare Profesională", "Fiecare canvas este ambalat atent pentru transport sigur în toată Europa."],
    ],
    whyTitle: "De ce să colaborezi cu LuxCanva?",
    whyIntro: "Scalează cu un partener european de producție construit pentru fiabilitate, viteză și prezentare premium.",
    why: [
      "Producție în UE, în România",
      "Până la 200 tablouri canvas produse pe zi",
      "Print large format până la 170 × 300 cm",
      "Print în relief 3D (efect embossed) pe canvas",
      "Rame aluminiu premium: argintiu, auriu și negru",
      "Expediere white-label disponibilă",
      "Material canvas premium din bumbac",
      "Tehnologie profesională de print UV",
      "Capabilități panoramice și oversized",
      "Potrivit pentru POD și comenzi bulk",
      "Dimensiuni custom disponibile",
      "Ambalare sigură pentru livrare prin curier",
      "Comunicare directă cu echipa de producție",
    ],
    whiteLabelEyebrow: "Fulfillment White-Label",
    whiteLabelTitle: "Brandul tău. Producția noastră.",
    whiteLabelText:
      "Prin serviciul nostru de fulfillment white-label, clienții tăi primesc produsul final ca și cum ar veni direct de la brandul tău. Noi gestionăm producția, controlul calității, ambalarea și expedierea, iar tu te concentrezi pe vânzări, marketing și achiziție de clienți.",
    whiteLabelFeatures: [
      "Fără branding LuxCanva în pachet",
      "Inserturi personalizate opționale",
      "Soluții de ambalare branduite opționale",
      "Expediere directă către clientul final",
      "Potrivit pentru ecommerce și selleri din marketplace-uri",
      "Flux simplu de comenzi prin email, CSV sau trimitere manuală",
    ],
    whiteLabelCta: "Devino partener White-Label",
    sampleEyebrow: "Kit de mostre",
    sampleTitle: "Solicită un kit de mostre",
    sampleText:
      "Înainte de a începe parteneriatul, recomandăm comandarea de mostre pentru a evalua materialul canvas, calitatea printului, finisajele și ambalarea.",
    capabilitiesTitle: "Produse canvas pe care le putem realiza",
    capabilitiesIntro: "Producem wall art premium pe canvas atât pentru nevoi B2B mici, cât și mari.",
    capabilities: [
      "Printuri canvas standard",
      "Printuri canvas large format",
      "Printuri canvas panoramice",
      "Canvas foto personalizat",
      "Seturi wall art",
      "Canvas pentru decor interior",
      "Decor canvas pentru hoteluri și birouri",
      "Proiecte canvas pe dimensiuni custom",
      "Canvas premium printat UV",
      "Print canvas în relief 3D",
      "Rame aluminiu premium: argintiu, auriu și negru",
      "Formate ultra-mari până la 170 × 300 cm",
    ],
    workflowTitle: "Cum funcționează",
    workflowIntro: "Un flux simplu construit pentru parteneriate B2B.",
    workflow: ["Ne contactezi", "Primești prețuri B2B", "Comanzi mostre", "Trimiți comenzile", "Noi producem și livrăm"],
    qualityTitle: "Calitate premium pentru canvas",
    qualityIntro:
      "Ne concentrăm pe producția unor canvas-uri care arată profesionist, se simt premium și sunt potrivite atât pentru clienți ecommerce, cât și pentru spații interioare high-end.",
    quality: [
      "Material canvas premium",
      "Detaliu clar al printului",
      "Reproducere bogată a culorilor",
      "Structură durabilă",
      "Canvas întins cu grijă",
      "Finisaj în relief 3D disponibil",
      "Rame aluminiu premium: argintiu, auriu, negru",
      "Finisare profesională",
      "Controlul calității înainte de expediere",
      "Ambalare protectivă sigură",
    ],
    b2bEyebrow: "Beneficii B2B",
    b2bTitle: "Scalează businessul tău de canvas fără să deții producția",
    b2bText:
      "Lucrând cu LuxCanva poți crește mai rapid fără investiții în echipamente scumpe de print, spațiu de producție, stoc, personal sau operațiuni de ambalare.",
    b2b: [
      "Complexitate operațională mai mică",
      "Fără nevoie de stoc",
      "Capacitate de producție până la 200 tablouri/zi",
      "Testare mai rapidă a produselor",
      "Extindere ușoară către dimensiuni noi — până la 170×300 cm",
      "Volum flexibil de comenzi",
      "Control mai bun asupra fulfillmentului european",
      "Acces direct la suportul de producție",
    ],
    contactEyebrow: "Contact",
    contactTitle: "Hai să construim fluxul tău de producție canvas",
    contactText:
      "Cauți un partener european de încredere pentru print canvas? Contactează LuxCanva și spune-ne de ce ai nevoie. Îți trimitem prețurile B2B, opțiunile de mostre și detaliile de producție.",
    contactAlt: "Contactează echipa de producție",
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
    <main className="bg-[#f7f2ea] text-stone-950">
      <header className="sticky top-0 z-20 border-b border-stone-900/10 bg-[#fbf7f1]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <div>
            <div className="text-lg font-semibold tracking-tight">LuxCanva</div>
            <div className="text-xs uppercase tracking-[0.22em] text-stone-500">B2B Canvas Production</div>
          </div>
          <nav className="hidden gap-6 text-sm text-stone-700 md:flex">
            <Link href={`/?lang=${lang}`}>{t.nav.home}</Link>
            <Link href={`/about?lang=${lang}`}>{t.nav.about}</Link>
            <Link href={`/services?lang=${lang}`}>{t.nav.services}</Link>
            <Link href={`/faq?lang=${lang}`}>{t.nav.faq}</Link>
            <Link href={`/contact?lang=${lang}`}>{t.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-2 rounded-full border border-stone-900/10 bg-white p-1 text-sm">
            <span className="px-2 text-stone-500">{t.localeLabel}</span>
            <Link href="/?lang=en" className={`rounded-full px-3 py-1 ${lang === "en" ? "bg-stone-950 text-white" : "text-stone-700"}`}>EN</Link>
            <Link href="/?lang=ro" className={`rounded-full px-3 py-1 ${lang === "ro" ? "bg-stone-950 text-white" : "text-stone-700"}`}>RO</Link>
          </div>
        </div>
      </header>

      <section className="border-b border-black/10 bg-[linear-gradient(180deg,#fbf7f1_0%,#f6efe4_100%)]">
        <div className="mx-auto grid min-h-[88vh] max-w-7xl gap-12 px-6 py-10 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-stone-600">{t.brandLine}</p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{t.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white" href="#contact">{t.ctaPrimary}</a>
              <a className="rounded-full border border-stone-900/20 bg-white px-6 py-3 text-sm font-medium text-stone-950" href="#samples">{t.ctaSecondary}</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-stone-700">
              {t.trustBadges.map((badge) => <span key={badge} className="rounded-full border border-stone-900/10 bg-white px-4 py-2">{badge}</span>)}
            </div>
          </div>
          <div className="grid gap-4 self-center">
            {t.heroLabels.map((label, i) => (
              <div key={label} className={`min-h-44 rounded-3xl border border-white/60 bg-cover bg-center shadow-lg ${i === 0 ? 'bg-[linear-gradient(rgba(20,20,20,.20),rgba(20,20,20,.20)),url(https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=80)]' : i === 1 ? 'bg-[linear-gradient(rgba(20,20,20,.18),rgba(20,20,20,.18)),url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80)]' : 'bg-[linear-gradient(rgba(20,20,20,.18),rgba(20,20,20,.18)),url(https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80)]'}`}>
                <div className="flex h-full items-end p-6 text-white">
                  <div className="rounded-2xl bg-black/35 px-4 py-2 text-sm backdrop-blur-sm">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section title={t.whoTitle} intro={t.whoIntro}>
        <Grid items={t.who.map(([title, text]) => ({ title, text }))} />
      </Section>

      <Section title={t.servicesTitle} intro={t.servicesIntro}>
        <Grid items={t.services.map(([title, text]) => ({ title, text }))} />
      </Section>

      <Section title={t.whyTitle} intro={t.whyIntro}>
        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.why.map((item) => <li key={item} className="rounded-3xl border border-stone-900/10 bg-white p-5 text-stone-800">{item}</li>)}
        </ul>
      </Section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-10">
        <div className="rounded-[2rem] border border-stone-900/10 bg-white p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-stone-500">{t.whiteLabelEyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold">{t.whiteLabelTitle}</h2>
          <p className="mt-4 text-stone-700">{t.whiteLabelText}</p>
          <ul className="mt-6 grid gap-3 text-stone-700">
            {t.whiteLabelFeatures.map((x) => <li key={x}>• {x}</li>)}
          </ul>
          <a className="mt-8 inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white" href="#contact">{t.whiteLabelCta}</a>
        </div>
        <div id="samples" className="rounded-[2rem] border border-stone-900/10 bg-[#efe3d3] p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-stone-600">{t.sampleEyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold">{t.sampleTitle}</h2>
          <p className="mt-4 text-stone-700">{t.sampleText}</p>
          <a className="mt-8 inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white" href="#contact">{t.ctaSecondary}</a>
        </div>
      </section>

      <Section title={t.capabilitiesTitle} intro={t.capabilitiesIntro}>
        <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {t.capabilities.map((item) => <li key={item} className="rounded-2xl border border-stone-900/10 bg-white p-4">{item}</li>)}
        </ul>
      </Section>

      <Section title={t.workflowTitle} intro={t.workflowIntro}>
        <div className="grid gap-4 md:grid-cols-5">
          {t.workflow.map((step, idx) => (
            <div key={step} className="rounded-3xl border border-stone-900/10 bg-white p-5">
              <p className="text-sm text-stone-500">Step {idx + 1}</p>
              <h3 className="mt-2 font-medium">{step}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t.qualityTitle} intro={t.qualityIntro}>
        <Grid items={t.quality.map((title) => ({ title }))} compact />
      </Section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] border border-stone-900/10 bg-stone-950 px-8 py-12 text-white">
          <p className="text-sm uppercase tracking-[0.28em] text-stone-300">{t.b2bEyebrow}</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold">{t.b2bTitle}</h2>
          <p className="mt-4 max-w-3xl text-stone-300">{t.b2bText}</p>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {t.b2b.map((x) => <div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-4">{x}</div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-6 rounded-[2rem] border border-stone-900/10 bg-white p-8 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-stone-500">{t.contactEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold">{t.contactTitle}</h2>
            <p className="mt-4 text-stone-700">{t.contactText}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white" href="mailto:hello@luxcanva.ro">{t.ctaPrimary}</a>
              <a className="rounded-full border border-stone-900/10 px-6 py-3 text-sm font-medium" href="mailto:hello@luxcanva.ro">{t.contactAlt}</a>
            </div>
          </div>
          <form className="grid gap-3 rounded-[1.5rem] bg-[#f7f2ea] p-5">
            {t.formFields.map((f) => <input key={f} placeholder={f} className="rounded-2xl border border-stone-900/10 bg-white px-4 py-3 outline-none" />)}
            <textarea placeholder={t.message} rows={5} className="rounded-2xl border border-stone-900/10 bg-white px-4 py-3 outline-none" />
            <button className="rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white">{t.quoteCta}</button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Section({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="mb-8 max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-balance">{title}</h2>
        <p className="mt-3 text-stone-700">{intro}</p>
      </div>
      {children}
    </section>
  );
}

function Grid({ items }: { items: { title: string; text?: string }[]; compact?: boolean }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="rounded-3xl border border-stone-900/10 bg-white p-6">
          <h3 className="text-lg font-medium">{item.title}</h3>
          {item.text ? <p className="mt-3 text-stone-700">{item.text}</p> : null}
        </article>
      ))}
    </div>
  );
}