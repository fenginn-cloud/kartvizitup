// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { BUSINESSES } from "@/data/businesses";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.kartvizitup.com";

  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/demo`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/iletisim`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const businessUrls: MetadataRoute.Sitemap = Object.values(BUSINESSES).map((b) => ({
    url: `${base}/${b.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...businessUrls];
}
