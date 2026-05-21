import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const BASE_URL = "https://luxcanva-b2b.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "LuxCanva | White-Label Canvas Printing & B2B Fulfillment Europe",
    template: "%s | LuxCanva",
  },
  description:
    "LuxCanva offers white-label canvas printing, print-on-demand fulfillment and large-format canvas production up to 170×300 cm for ecommerce brands, designers, photographers and resellers across Europe. Based in Romania, EU.",
  keywords: [
    "white label canvas printing",
    "B2B canvas fulfillment",
    "canvas print on demand Europe",
    "large format canvas printing",
    "canvas printing Romania",
    "canvas fulfillment partner",
    "wholesale canvas printing",
    "ecommerce canvas fulfillment",
    "print on demand canvas Europe",
    "aluminium frame canvas",
  ],
  authors: [{ name: "LuxCanva", url: BASE_URL }],
  creator: "LuxCanva",
  publisher: "LuxCanva",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "LuxCanva",
    title: "LuxCanva | White-Label Canvas Printing & B2B Fulfillment Europe",
    description:
      "B2B canvas print production workshop in Romania. White-label fulfillment, print-on-demand, large format up to 170×300 cm, 200 pieces/day capacity.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LuxCanva — B2B Canvas Printing & Fulfillment Europe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxCanva | White-Label Canvas Printing & B2B Fulfillment Europe",
    description:
      "B2B canvas print production workshop in Romania. White-label fulfillment, print-on-demand, large format up to 170×300 cm.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en": `${BASE_URL}/?lang=en`,
      "ro": `${BASE_URL}/?lang=ro`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LuxCanva",
    "description": "B2B canvas print production workshop in Romania. White-label fulfillment, print-on-demand and large-format canvas printing for European brands.",
    "url": "https://luxcanva-b2b.vercel.app",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RO",
      "addressRegion": "Romania"
    },
    "areaServed": "Europe",
    "serviceType": ["Canvas Printing", "White-Label Fulfillment", "Print on Demand", "Large Format Printing"],
    "priceRange": "$$"
  };

  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable} h-full scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
