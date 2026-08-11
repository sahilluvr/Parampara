import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog/", "/about", "/pricing", "/contact", "/what-we-do", "/rituals-services"],
        disallow: [
          "/dashboard",
          "/rituals/",
          "/media",
          "/members",
          "/festivals",
          "/ai",
          "/spaces",
          "/account",
          "/upgrade",
          "/join",
          "/api/",
          "/auth/",
          "/family-settings",
          "/heritage-book",
          "/mannats",
          "/voice-archive",
          "/calendar",
        ],
      },
    ],
    sitemap: "https://www.ourparampara.com/sitemap.xml",
    host: "https://www.ourparampara.com",
  };
}
