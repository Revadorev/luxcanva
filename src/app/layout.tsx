import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full" style={{ fontFamily: "var(--font-inter), 'Helvetica Neue', Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
