'use client'

import { useState } from 'react'
import Link from 'next/link'

interface MobileMenuProps {
  lang: string
  nav: {
    home: string
    about: string
    services: string
    faq: string
    contact: string
  }
  ctaPrimary: string
}

export default function MobileMenu({ lang, nav, ctaPrimary }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center gap-2 md:hidden">
      {/* Language selector */}
      <div className="flex items-center gap-1 rounded-full border border-stone-900/10 bg-white px-1 py-1 shadow-sm">
        <Link href="/?lang=en" className={`rounded-full px-3 py-1.5 text-xs font-medium ${lang === 'en' ? 'lang-active' : 'lang-inactive'}`}>EN</Link>
        <Link href="/?lang=ro" className={`rounded-full px-3 py-1.5 text-xs font-medium ${lang === 'ro' ? 'lang-active' : 'lang-inactive'}`}>RO</Link>
      </div>

      {/* Hamburger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="grid h-10 w-10 place-items-center rounded-xl border border-stone-900/10 bg-white shadow-sm"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="2" y1="2" x2="16" y2="16" />
            <line x1="16" y1="2" x2="2" y2="16" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="2" y1="5" x2="16" y2="5" />
            <line x1="2" y1="9" x2="16" y2="9" />
            <line x1="2" y1="13" x2="16" y2="13" />
          </svg>
        )}
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-stone-900/10 bg-white/95 px-6 py-4 shadow-lg backdrop-blur-xl">
          <nav className="flex flex-col gap-4 text-sm font-medium text-stone-700">
            <Link href={`/?lang=${lang}`} onClick={() => setOpen(false)}>{nav.home}</Link>
            <Link href={`/about?lang=${lang}`} onClick={() => setOpen(false)}>{nav.about}</Link>
            <Link href={`/services?lang=${lang}`} onClick={() => setOpen(false)}>{nav.services}</Link>
            <Link href={`/faq?lang=${lang}`} onClick={() => setOpen(false)}>{nav.faq}</Link>
            <Link href={`/contact?lang=${lang}`} onClick={() => setOpen(false)}>{nav.contact}</Link>
            <Link href={`/contact?lang=${lang}`} className="btn-dark mt-2 text-center" onClick={() => setOpen(false)}>{ctaPrimary}</Link>
          </nav>
        </div>
      )}
    </div>
  )
}
