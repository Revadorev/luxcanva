import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: ["https://whitelabelcanvas.eu/sitemap.xml", "https://whitelabelcanvas.ro/sitemap.xml"],
  };
}
