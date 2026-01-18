import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    sitemap: [
      "https://memento-academy.com/sitemap.xml",
      "https://memento-academy.com/sitemap-twitter.xml",
    ],
  };
}
