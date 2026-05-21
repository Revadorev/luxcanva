import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEu = "https://whitelabelcanvas.eu";
  const baseRo = "https://whitelabelcanvas.ro";
  const langs = ["en", "ro"];
  const pages = ["/", "/about", "/services", "/faq", "/contact"];
  const entries: MetadataRoute.Sitemap = [];

  // .eu domain — both languages
  for (const page of pages) {
    for (const lang of langs) {
      entries.push({
        url: `${baseEu}${page}?lang=${lang}`,
        lastModified: new Date(),
        changeFrequency: page === "/" ? "weekly" : "monthly",
        priority: page === "/" ? 1.0 : 0.8,
      });
    }
  }

  // .ro domain — Romanian only
  for (const page of pages) {
    entries.push({
      url: `${baseRo}${page}?lang=ro`,
      lastModified: new Date(),
      changeFrequency: page === "/" ? "weekly" : "monthly",
      priority: page === "/" ? 1.0 : 0.8,
    });
  }

  return entries;
}
