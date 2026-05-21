import Link from "next/link";

export function Footer({ lang = "en" }: { lang?: "en" | "ro" }) {
  return (
    <footer className="px-6 pb-10 pt-6 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/40 bg-white/70 px-6 py-6 shadow-[0_24px_80px_rgba(20,20,20,0.08)] backdrop-blur-sm lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold tracking-tight">LuxCanva</div>
            <div className="mt-1 text-sm text-stone-600">B2B Canvas Production • Romania, EU</div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-stone-700">
            <Link href={`/?lang=${lang}`}>Home</Link>
            <Link href={`/about?lang=${lang}`}>About</Link>
            <Link href={`/services?lang=${lang}`}>Services</Link>
            <Link href={`/faq?lang=${lang}`}>FAQ</Link>
            <Link href={`/contact?lang=${lang}`}>Contact</Link>
          </div>
        </div>
        <div className="mt-6 border-t border-stone-900/10 pt-4 text-sm text-stone-500">
          All rights reserved - Copyright Luxcanva® 2026
        </div>
      </div>
    </footer>
  );
}
