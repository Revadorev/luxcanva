"use client";
import { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

const copy = {
  en: {
    back: "Back to homepage",
    eyebrow: "Contact",
    title: "Let's Build Your Canvas Production Workflow",
    intro:
      "Looking for a reliable European canvas print partner? Contact LuxCanva and tell us what you need. We will send you B2B pricing, sample options and production details.",
    fields: [
      { name: "name", label: "Name" },
      { name: "company", label: "Company" },
      { name: "email", label: "Email", type: "email" },
      { name: "phone", label: "Phone", type: "tel" },
      { name: "website", label: "Website" },
      { name: "country", label: "Country" },
      { name: "monthly_volume", label: "Monthly order estimate" },
    ],
    message: "Message",
    cta: "Request B2B Pricing",
    sending: "Sending...",
    successTitle: "Message sent!",
    successText: "We will get back to you within 24 hours.",
    errorText: "Something went wrong. Please try again or email us directly.",
  },
  ro: {
    back: "Înapoi la homepage",
    eyebrow: "Contact",
    title: "Hai să construim fluxul tău de producție canvas",
    intro:
      "Cauți un partener european de încredere pentru print canvas? Contactează LuxCanva și spune-ne de ce ai nevoie. Îți trimitem prețurile B2B, opțiunile de mostre și detaliile de producție.",
    fields: [
      { name: "name", label: "Nume" },
      { name: "company", label: "Companie" },
      { name: "email", label: "Email", type: "email" },
      { name: "phone", label: "Telefon", type: "tel" },
      { name: "website", label: "Website" },
      { name: "country", label: "Țară" },
      { name: "monthly_volume", label: "Estimare comenzi lunare" },
    ],
    message: "Mesaj",
    cta: "Solicită prețuri B2B",
    sending: "Se trimite...",
    successTitle: "Mesaj trimis!",
    successText: "Îți răspundem în maxim 24 de ore.",
    errorText: "A apărut o eroare. Încearcă din nou sau scrie-ne direct pe email.",
  },
} as const;

type Lang = "en" | "ro";

export default function ContactPage({ searchParams }: { searchParams: { lang?: string } }) {
  const lang: Lang = searchParams?.lang === "ro" ? "ro" : "en";
  const t = copy[lang];
  const [form, setForm] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, form_type: "contact" }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="relative z-[1] mx-auto max-w-6xl px-6 py-20 lg:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href={`/?lang=${lang}`} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-stone-700 shadow-sm">← {t.back}</Link>
        <div className="flex items-center gap-1 rounded-full border border-stone-900/10 bg-white px-1 py-1 shadow-sm">
          <span className="px-2 text-[11px] uppercase tracking-[0.16em] text-stone-500">Language</span>
          <Link href="/contact?lang=en" className={`rounded-full px-3 py-1.5 text-xs font-medium ${lang === "en" ? "lang-active" : "lang-inactive"}`}>EN</Link>
          <Link href="/contact?lang=ro" className={`rounded-full px-3 py-1.5 text-xs font-medium ${lang === "ro" ? "lang-active" : "lang-inactive"}`}>RO</Link>
        </div>
      </div>
      <div className="mt-8 label-premium inline-flex rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-stone-600">{t.eyebrow}</div>
      <h1 className="font-display mt-4 text-5xl tracking-tight">{t.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">{t.intro}</p>

      {status === "success" ? (
        <div className="card-premium mt-10 rounded-[2rem] p-10 text-center">
          <p className="text-2xl font-semibold text-stone-900">{t.successTitle}</p>
          <p className="mt-3 text-stone-600">{t.successText}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="card-premium mt-10 grid gap-3 rounded-[2rem] p-6">
          {t.fields.map((f) => (
            <input
              key={f.name}
              name={f.name}
              type={(f as { name: string; label: string; type?: string }).type || "text"}
              placeholder={f.label}
              value={form[f.name] || ""}
              onChange={handleChange}
              required={f.name === "email"}
              className="rounded-[1.2rem] border border-stone-900/10 bg-white/85 px-4 py-3.5 text-sm outline-none"
            />
          ))}
          <textarea
            name="message"
            placeholder={t.message}
            rows={6}
            value={form.message || ""}
            onChange={handleChange}
            className="rounded-[1.2rem] border border-stone-900/10 bg-white/85 px-4 py-3.5 text-sm outline-none"
          />
          {status === "error" && <p className="text-sm text-red-600">{t.errorText}</p>}
          <button type="submit" disabled={status === "sending"} className="btn-dark">
            {status === "sending" ? t.sending : t.cta}
          </button>
        </form>
      )}
      <Footer lang={lang} />
    </main>
  );
}
