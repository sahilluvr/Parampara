import { NextRequest, NextResponse } from "next/server";

export type PricingData = {
  country: string;
  monthly: number;
  yearly: number;
  currency: string;
  symbol: string;
  locale: string;
  yearlySaving: number;
  yearlyPerMonth: number;
};

const PRICING: Record<string, Omit<PricingData, "country"|"yearlySaving"|"yearlyPerMonth">> = {
  IN:  { monthly:49,  yearly:470,  currency:"INR", symbol:"₹",   locale:"en-IN" },
  US:  { monthly:2,   yearly:19,   currency:"USD", symbol:"$",   locale:"en-US" },
  GB:  { monthly:2,   yearly:15,   currency:"GBP", symbol:"£",   locale:"en-GB" },
  AU:  { monthly:3,   yearly:25,   currency:"AUD", symbol:"A$",  locale:"en-AU" },
  CA:  { monthly:3,   yearly:25,   currency:"CAD", symbol:"C$",  locale:"en-CA" },
  SG:  { monthly:3,   yearly:25,   currency:"SGD", symbol:"S$",  locale:"en-SG" },
  AE:  { monthly:7,   yearly:65,   currency:"AED", symbol:"د.إ", locale:"ar-AE" },
  NZ:  { monthly:3,   yearly:28,   currency:"NZD", symbol:"NZ$", locale:"en-NZ" },
  DE:  { monthly:2,   yearly:17,   currency:"EUR", symbol:"€",   locale:"de-DE" },
  FR:  { monthly:2,   yearly:17,   currency:"EUR", symbol:"€",   locale:"fr-FR" },
  NL:  { monthly:2,   yearly:17,   currency:"EUR", symbol:"€",   locale:"nl-NL" },
};
const DEFAULT = { monthly:2, yearly:19, currency:"USD", symbol:"$", locale:"en-US" };

export async function GET(req: NextRequest) {
  const country =
    req.headers.get("x-vercel-ip-country") ||
    req.headers.get("cf-ipcountry") ||
    req.headers.get("x-country-code") ||
    "";

  const p = PRICING[country.toUpperCase()] || DEFAULT;

  return NextResponse.json({
    country: country || "US",
    ...p,
    yearlySaving: Math.round(p.monthly * 12 - p.yearly),
    yearlyPerMonth: +(p.yearly / 12).toFixed(1),
  }, {
    headers: { "Cache-Control": "public, max-age=3600" }
  });
}
