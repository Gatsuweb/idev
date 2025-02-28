import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://idevstudio.fr",
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0
    }
  ] satisfies MetadataRoute.Sitemap;
}