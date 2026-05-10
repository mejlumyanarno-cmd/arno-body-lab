import type { MetadataRoute } from "next";
import { programs } from "@/lib/programs";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/programs", "/pricing", "/about", "/contact", "/login", "/register", "/terms", "/privacy"];
  const programRoutes = programs.map((program) => `/programs/${program.slug}`);

  return [...routes, ...programRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
