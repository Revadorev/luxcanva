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

export const metadata: Metadata = {
  title: "White-Label Canvas Printing Europe | LuxCanva B2B Fulfillment",
  description:
    "LuxCanva offers white-label canvas printing, print-on-demand fulfillment and large-format canvas production up to 170×300 cm for ecommerce brands, designers, photographers and resellers across Europe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable} h-full scroll-smooth`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
