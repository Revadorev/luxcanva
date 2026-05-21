import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://luxcanva-b2b.vercel.app";
  const langs = ["en", "ro"];
  const pages = ["/", "/about", "/services", "/faq", "/contact"];
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const lang of langs) {
      entries.push({
        url: `${base}${page}?lang=${lang}`,
        lastModified: new Date(),
        changeFrequency: page === "/" ? "weekly" : "monthly",
        priority: page === "/" ? 1.0 : 0.8,
      });
    }
  }

  return entries;
}
