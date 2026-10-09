"use client";
import { useState, useEffect } from "react";
import type { PricingData } from "@/app/api/pricing/route";

export type { PricingData };

const FALLBACK: PricingData = {
  country: "IN", monthly: 49, yearly: 470,
  currency: "INR", symbol: "₹", locale: "en-IN",
  yearlySaving: 118, yearlyPerMonth: 39.2,
};

export function usePricing(): { pricing: PricingData; loading: boolean } {
  const [pricing, setPricing] = useState<PricingData>(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check cache first
    const cached = sessionStorage.getItem("parampara_pricing");
    if (cached) {
      try {
        setPricing(JSON.parse(cached));
        setLoading(false);
        return;
      } catch {}
    }
    fetch("/api/pricing")
      .then(r => r.json())
      .then((data: PricingData) => {
        setPricing(data);
        sessionStorage.setItem("parampara_pricing", JSON.stringify(data));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { pricing, loading };
}

// Format price with currency symbol
export function formatPrice(amount: number, pricing: PricingData): string {
  return `${pricing.symbol}${amount.toLocaleString(pricing.locale)}`;
}
