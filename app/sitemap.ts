import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { conditions } from "@/lib/conditions";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/seo";

const siteLastModified = new Date("2026-05-31");

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/conditions", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/new-patient-special", priority: 0.8, changeFrequency: "monthly" },
  { path: "/shop", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.75, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/book-appointment", priority: 0.85, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.25, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.25, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: siteLastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...conditions.map((condition) => ({
      url: absoluteUrl(`/conditions/${condition.slug}`),
      lastModified: siteLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: siteLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
