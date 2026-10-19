"use client";
import Script from "next/script";

// AdSense used to load in the <head> of EVERY page — including the logged-in
// app — adding hundreds of KB of third-party script and extra requests before
// the dashboard became usable. Ads only appear on blog articles, so the script
// now loads only there, after the page is idle.
export default function AdSenseLoader() {
  const id = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  if (!id) return null;
  return <Script id="adsense" strategy="lazyOnload" crossOrigin="anonymous" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${id}`}/>;
}
