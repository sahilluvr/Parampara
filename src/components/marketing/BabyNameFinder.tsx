"use client";
import { useState } from "react";
import Link from "next/link";
import { C, F } from "@/lib/constants";
import { RASHI_LIST, getRashi, type BabyName } from "@/lib/babyNames";

export default function BabyNameFinder() {
  const [selectedRashi, setSelectedRashi] = useState<string | null>(null);
  const [genderFilter, setGenderFilter] = useState<"all" | "boy" | "girl">("all");

  const rashi = selectedRashi ? getRashi(selectedRashi) : null;
  const filteredNames: BabyName[] = rashi
    ? rashi.names.filter(n => genderFilter === "all" || n.gender === genderFilter || n.gender === "unisex")
    : [];

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", background: C.white, borderRadius: 20, border: `1px solid ${C.border}`, padding: "28px 28px 24px", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
      <style>{`
        @keyframes ppBnfFadeUp { from{opacity:0;transform:translateY(8px);} to{opacity:1;transform:translateY(0);} }
        .pp-rashi-btn { transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease; }
        .pp-rashi-btn:hover { transform: translateY(-2px); }
        .pp-rashi-btn:active { transform: translateY(0) scale(0.97); }
        .pp-name-card { transition: transform 0.15s ease, box-shadow 0.15s ease; }
        .pp-name-card:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.06); }
      `}</style>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
        <span style={{ fontSize: 26 }}>⭐</span>
        <h3 style={{ fontFamily: F.serif, fontSize: 20, fontWeight: 600, color: C.charcoal, margin: 0 }}>Baby Name Finder by Rashi</h3>
      </div>
      <p style={{ fontSize: 13, color: C.gray, marginBottom: 4, lineHeight: 1.6 }}>
        Select your baby&apos;s Rashi (moon sign) to find names starting with auspicious syllables for that sign.
        {" "}Not sure of the Rashi?{" "}
        <Link href="/blog/hindu-baby-naming-rashi-nakshatra-guide" style={{ color: C.saffron, fontWeight: 600 }}>Learn how to find it →</Link>
      </p>
      <p style={{ fontSize: 11, color: C.gold, fontWeight: 600, marginBottom: 18 }}>72 names across all 12 Rashis</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))", gap: 8, marginBottom: 20 }}>
        {RASHI_LIST.map(r => (
          <button
            key={r.id}
            className="pp-rashi-btn"
            onClick={() => setSelectedRashi(r.id)}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "10px 8px", borderRadius: 12, cursor: "pointer",
              border: selectedRashi === r.id ? `1.5px solid ${C.saffron}` : `1px solid ${C.border}`,
              background: selectedRashi === r.id ? C.saffronLight : C.ivory,
              fontFamily: F.sans,
            }}
          >
            <span style={{ fontSize: 22 }}>{r.emoji}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: selectedRashi === r.id ? C.saffron : C.charcoal, textAlign: "center" }}>{r.name.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      {rashi && (
        <div style={{ animation: "ppBnfFadeUp 0.35s ease" }}>
          <div style={{ background: C.goldLight, border: `1px solid rgba(184,146,42,0.2)`, borderRadius: 12, padding: "14px 16px", marginBottom: 16 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: C.charcoal, margin: "0 0 4px" }}>{rashi.emoji} {rashi.name} — {rashi.sanskrit}</p>
            <p style={{ fontSize: 12, color: C.gray, margin: "0 0 2px" }}>Element: {rashi.element}</p>
            <p style={{ fontSize: 12, color: C.gray, margin: 0 }}>Auspicious starting sounds: <strong style={{ color: C.charcoal }}>{rashi.syllables}</strong></p>
          </div>

          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            {(["all", "boy", "girl"] as const).map(g => (
              <button
                key={g}
                onClick={() => setGenderFilter(g)}
                style={{
                  padding: "7px 16px", borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize",
                  border: genderFilter === g ? `1.5px solid ${C.saffron}` : `1px solid ${C.border}`,
                  background: genderFilter === g ? C.saffronLight : C.ivory,
                  color: genderFilter === g ? C.saffron : C.charcoal,
                  fontFamily: F.sans, transition: "all 0.15s ease",
                }}
              >
                {g === "all" ? "All names" : `${g}s`}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 10, marginBottom: 18 }}>
            {filteredNames.map((n, i) => (
              <div key={n.name} className="pp-name-card" style={{ background: C.ivory, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 14px", animation: `ppBnfFadeUp 0.3s ease ${i * 0.04}s both` }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: C.charcoal, margin: "0 0 2px" }}>{n.name}</p>
                <p style={{ fontSize: 12, color: C.gray, margin: 0 }}>{n.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ background: C.saffronLight, border: `1px solid rgba(200,84,26,0.15)`, borderRadius: 10, padding: "10px 14px" }}>
        <p style={{ fontSize: 12, color: C.charcoal, margin: 0, lineHeight: 1.6 }}>💡 For the precise naming letter based on Nakshatra pada (more specific than Rashi), consult a family priest or astrologer with the baby&apos;s exact birth time.</p>
      </div>
    </div>
  );
}
