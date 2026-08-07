import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

const routes = ["", "/about", "/programs", "/gallery", "/testimonials", "/faq", "/contact", "/privacy-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route || "/", siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.7,
  }));
}
