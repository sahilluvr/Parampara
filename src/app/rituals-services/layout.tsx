import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ritual Services — Find Pandits and Ritual Experts Near You | OurParampara",
  description: "Find verified pandits, ritual experts, and ceremony specialists across India for pujas, weddings, and family ceremonies.",
  keywords: "pandit near me, ritual experts India, puja services online, find pandit India, OurParampara ritual services",
  alternates: { canonical: "https://www.ourparampara.com/rituals-services" },
  openGraph: {
    title: "OG_Ritual Services — Find Pandits and Ritual Experts Near You | OurParampara",
    description: "Find verified pandits and ritual experts across India for pujas, weddings, and family ceremonies.",
    url: "https://www.ourparampara.com/rituals-services",
    siteName: "OurParampara",
    images: [{ url: "BASE_https://www.ourparampara.com/rituals-services/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OG_Ritual Services — Find Pandits and Ritual Experts Near You | OurParampara",
    description: "Find verified pandits and ritual experts across India for pujas, weddings, and family ceremonies.",
    images: ["BASE_https://www.ourparampara.com/rituals-services/og-image.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
