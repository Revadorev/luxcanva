import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://whitelabelcanvas.eu";
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

  // Also add .ro domain with RO lang
  for (const page of pages) {
    entries.push({
      url: \`https://whitelabelcanvas.ro\${page}?lang=ro\`,
      lastModified: new Date(),
      changeFrequency: page === "/" ? "weekly" : "monthly",
      priority: page === "/" ? 1.0 : 0.8,
    });
  }

  return entries;
}
