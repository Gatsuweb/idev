import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://idevstudio.fr",
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: "https://idevstudio.fr/site-web-artisans-bretagne",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: "https://idevstudio.fr/site-web-artisans-cotes-armor",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: "https://idevstudio.fr/site-web-artisans-finistere",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: "https://idevstudio.fr/blog",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: "https://idevstudio.fr/site-web-pour-creatifs",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.5
    }
  ] satisfies MetadataRoute.Sitemap;
}
