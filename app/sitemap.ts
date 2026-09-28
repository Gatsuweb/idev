import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";
import { siteUrl } from "@/lib/site";

const paths = [
  "/",
  "/creation-site-internet-carhaix",
  "/site-web-artistes-carhaix",
  "/site-web-association-carhaix",
  "/site-web-artisans-bretagne",
  "/site-web-artisans-finistere",
  "/site-web-artisans-cotes-armor",
  "/site-web-pour-creatifs",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = paths.map((path) => ({ url: siteUrl + path }));
  const posts = getAllPosts().map((post) => ({
    url: siteUrl + "/blog/" + post.slug,
    lastModified: new Date(post.frontmatter.date),
  }));
  return [...pages, ...posts];
}
