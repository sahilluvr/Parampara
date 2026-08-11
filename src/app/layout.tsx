import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ourparampara.com"),
  title: {
    default: "OurParampara — Preserve Your Family's Heritage & Rituals",
    template: "%s | OurParampara",
  },
  description: "Parampara helps South Asian families document, preserve and share their ceremonies, traditions and cultural heritage — Hindu, Sikh, Muslim, Christian, Jain, Buddhist and more. Document pujas, festivals, and family ceremonies for generations to come.",
  keywords: ["Indian family heritage", "ritual documentation", "puja guide", "Indian traditions", "family rituals", "Hindu rituals", "cultural heritage", "parampara", "family app India", "ritual samagri", "festival calendar India"],
  authors: [{ name: "Parampara", url: "https://www.ourparampara.com" }],
  creator: "Parampara",
  publisher: "Parampara",
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://www.ourparampara.com",
    siteName: "OurParampara",
    title: "OurParampara — Preserve Your Family's Heritage & Rituals",
    description: "Document your family's rituals, traditions and cultural heritage. Never lose the knowledge your elders carry.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Parampara — Indian Family Heritage Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parampara — Preserve Your Family's Heritage",
    description: "Document your family's rituals and traditions. Never lose the knowledge your elders carry.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    google: "Q1m4MPNZEdQBpYrQ20dK8r2dHBhuKrOnPoJZ675F7YM",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J0X4ZQYXGG"/>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J0X4ZQYXGG');
        `}}/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        {/* hreflang — tell Google to serve this content to Indian diaspora globally */}
        <link rel="alternate" hrefLang="en" href="https://www.ourparampara.com"/>
        <link rel="alternate" hrefLang="en-IN" href="https://www.ourparampara.com"/>
        <link rel="alternate" hrefLang="en-US" href="https://www.ourparampara.com"/>
        <link rel="alternate" hrefLang="en-GB" href="https://www.ourparampara.com"/>
        <link rel="alternate" hrefLang="en-CA" href="https://www.ourparampara.com"/>
        <link rel="alternate" hrefLang="en-AU" href="https://www.ourparampara.com"/>
        <link rel="alternate" hrefLang="en-AE" href="https://www.ourparampara.com"/>
        <link rel="alternate" hrefLang="x-default" href="https://www.ourparampara.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        {/* Critical display font — preloaded for LCP */}
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600;700&display=swap"/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2"/>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png"/>
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="theme-color" content="#C8541A"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Parampara",
            "url": "https://www.ourparampara.com",
            "description": "Parampara helps South Asian families document, preserve and share their ceremonies, traditions and cultural heritage — Hindu, Sikh, Muslim, Christian, Jain, Buddhist and more.",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
            "address": { "@type": "PostalAddress", "addressLocality": "Chandigarh", "addressCountry": "IN" }
          })}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "OurParampara",
            "url": "https://www.ourparampara.com",
            "logo": "https://www.ourparampara.com/logo.png",
            "sameAs": [],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "ourparamparaofficial@gmail.com",
              "availableLanguage": ["English", "Hindi", "Punjabi"]
            },
            "description": "OurParampara helps South Asian families — Hindu, Sikh, Muslim, Christian, Jain, and Buddhist — document ceremonies, preserve cultural heritage, and pass traditions to future generations.",
            "foundingLocation": { "@type": "Place", "name": "Chandigarh, India" },
            "areaServed": ["IN", "US", "GB", "CA", "AU", "AE", "SG"]
          })}}
        />
        {/* Google AdSense — loads after page is interactive */}
        {process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body>
        {children}
        <Analytics />
        </body>
    </html>
  );
}
