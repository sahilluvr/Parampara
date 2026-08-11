"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { C, F } from "@/lib/constants";
import { getNextFestivals, getCountdown, MUHURAT_CATEGORIES, getUpcomingMuhurats, type ToolFestival } from "@/lib/festivalTools";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

// Small pulsing dot — the visual signal that this card is calculating in
// real time rather than showing a pre-rendered screenshot of a countdown.
function LiveDot({ color = C.saffron }: { color?: string }) {
  return (
    <span style={{ position: "relative", display: "inline-flex", width: 7, height: 7 }}>
      <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: color, opacity: 0.5, animation: "ppLivePulse 1.8s ease-out infinite" }} />
      <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: color }} />
    </span>
  );
}

// A single ticking unit (days/hours/minutes) in the featured countdown —
// re-renders its own number with a brief flash whenever it changes, so the
// "live" feeling comes from something actually visibly moving, not just a
// claim in the copy.
function CountUnit({ value, label }: { value: number; label: string }) {
  const [flash, setFlash] = useState(false);
  const prev = useRef(value);
  useEffect(() => {
    if (prev.current !== value) {
      setFlash(true);
      prev.current = value;
      const t = setTimeout(() => setFlash(false), 280);
      return () => clearTimeout(t);
    }
  }, [value]);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 52 }}>
      <span style={{
        fontSize: 26, fontWeight: 800, color: "#fff", fontFamily: F.serif, lineHeight: 1,
        transition: "transform 0.28s ease, opacity 0.28s ease",
        transform: flash ? "scale(1.12)" : "scale(1)",
        opacity: flash ? 0.75 : 1,
        fontVariantNumeric: "tabular-nums",
      }}>
        {String(value).padStart(2, "0")}
      </span>
      <span style={{ fontSize: 10, color: "rgba(255,255,255,0.65)", letterSpacing: 0.5, textTransform: "uppercase", marginTop: 3 }}>{label}</span>
    </div>
  );
}

function CountdownSkeleton() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ height: 96, borderRadius: 14, background: `linear-gradient(90deg,${C.grayLight},${C.ivory},${C.grayLight})`, backgroundSize: "200% 100%", animation: "ppShimmer 1.6s ease-in-out infinite" }} />
      {[1,2,3].map(i => <div key={i} style={{ height: 44, borderRadius: 10, background: `linear-gradient(90deg,${C.grayLight},${C.ivory},${C.grayLight})`, backgroundSize: "200% 100%", animation: "ppShimmer 1.6s ease-in-out infinite", animationDelay: `${i*0.12}s` }} />)}
    </div>
  );
}

export default function FestivalTools() {
  const [festivals, setFestivals] = useState<ToolFestival[]>([]);
  const [activeCategory, setActiveCategory] = useState(MUHURAT_CATEGORIES[0].id);
  const [now, setNow] = useState<Date | null>(null); // null until mount — avoids server/client clock mismatch
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  useEffect(() => {
    setFestivals(getNextFestivals(6));
    setNow(new Date());
    // Tick every 60s — enough for the minutes digit to visibly move without
    // re-rendering so often it feels gimmicky or burns battery.
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const muhurats = getUpcomingMuhurats(activeCategory, 4);
  const activeCat = MUHURAT_CATEGORIES.find(c => c.id === activeCategory)!;
  const featured = festivals[0];
  const countdown = featured && now ? getCountdown(featured.date, now) : null;
  const loading = !now;

  return (
    <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 32 }}>
      <style>{`
        @keyframes ppLivePulse { 0%{transform:scale(1);opacity:0.5;} 70%{transform:scale(2.6);opacity:0;} 100%{opacity:0;} }
        @keyframes ppShimmer { 0%{background-position:200% 0;} 100%{background-position:-200% 0;} }
        @keyframes ppFadeUp { from{opacity:0;transform:translateY(6px);} to{opacity:1;transform:translateY(0);} }
        .pp-row { transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease; }
        .pp-row:hover { transform: translateX(3px); }
      `}</style>

      {/* ── Festival Countdown ── */}
      <div style={{ background: C.white, borderRadius: 20, border: `1px solid ${C.border}`, padding: "28px 28px 24px", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 26 }}>🗓️</span>
            <h3 style={{ fontFamily: F.serif, fontSize: 20, fontWeight: 600, color: C.charcoal, margin: 0 }}>Festival Countdown</h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <LiveDot />
            <span style={{ fontSize: 10.5, fontWeight: 700, color: C.gray, letterSpacing: 0.4, textTransform: "uppercase" }}>Live</span>
          </div>
        </div>

        {loading ? (
          <CountdownSkeleton />
        ) : (
          <>
            {featured && countdown && (
              <div style={{ background: `linear-gradient(135deg,${C.saffron},#9A3E10)`, borderRadius: 14, padding: "18px 20px", marginBottom: 18, position: "relative", overflow: "hidden", animation: "ppFadeUp 0.4s ease" }}>
                {/* subtle moving sheen — purely decorative, reinforces "alive" without being distracting */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(115deg,transparent 30%,rgba(255,255,255,0.08) 45%,transparent 60%)", backgroundSize: "200% 100%", animation: "ppShimmer 5s linear infinite" }} />
                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                    <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.75)", margin: 0, letterSpacing: 0.5, textTransform: "uppercase", fontWeight: 700 }}>Coming up next</p>
                    <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.65)" }}>{formatDate(featured.date)}</span>
                  </div>
                  <p style={{ fontSize: 21, fontWeight: 700, color: "#fff", margin: "0 0 14px", fontFamily: F.serif }}>{featured.emoji} {featured.name}</p>

                  {countdown.isToday ? (
                    <p style={{ fontSize: 18, fontWeight: 800, color: "#fff", margin: 0, fontFamily: F.serif }}>🎉 Today!</p>
                  ) : (
                    <div style={{ display: "flex", gap: 18 }}>
                      <CountUnit value={countdown.days} label="days" />
                      <span style={{ fontSize: 24, color: "rgba(255,255,255,0.3)", lineHeight: "44px" }}>:</span>
                      <CountUnit value={countdown.hours} label="hrs" />
                      <span style={{ fontSize: 24, color: "rgba(255,255,255,0.3)", lineHeight: "44px" }}>:</span>
                      <CountUnit value={countdown.minutes} label="min" />
                    </div>
                  )}
                </div>
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {festivals.slice(1).map((f, idx) => {
                const c = now ? getCountdown(f.date, now) : null;
                const isHovered = hoveredRow === f.name;
                const content = (
                  <div
                    className="pp-row"
                    onMouseEnter={() => setHoveredRow(f.name)}
                    onMouseLeave={() => setHoveredRow(null)}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px",
                      background: isHovered ? C.saffronLight : C.ivory, borderRadius: 10,
                      border: `1px solid ${isHovered ? "rgba(200,84,26,0.3)" : C.border}`,
                      animation: `ppFadeUp 0.35s ease ${idx * 0.05}s both`,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 18 }}>{f.emoji}</span>
                      <div>
                        <span style={{ fontSize: 14, fontWeight: 600, color: C.charcoal, display: "block" }}>{f.name}</span>
                        <span style={{ fontSize: 10.5, color: C.gray }}>{formatDateShort(f.date)}</span>
                      </div>
                    </div>
                    <span style={{ fontSize: 12, color: isHovered ? C.saffron : C.gray, fontWeight: 700, whiteSpace: "nowrap" }}>
                      {c ? (c.days === 0 ? "Today" : c.days === 1 ? "Tomorrow" : `${c.days} days`) : ""}
                    </span>
                  </div>
                );
                return f.blogSlug ? (
                  <Link key={f.name} href={`/blog/${f.blogSlug}`} style={{ textDecoration: "none" }}>{content}</Link>
                ) : (
                  <div key={f.name}>{content}</div>
                );
              })}
            </div>
          </>
        )}

        <Link href="/calendar" style={{ display: "block", textAlign: "center", marginTop: 16, fontSize: 13, fontWeight: 700, color: C.saffron, textDecoration: "none" }}>
          See full family calendar →
        </Link>
      </div>

      {/* ── Muhurat Finder ── */}
      <div style={{ background: C.white, borderRadius: 20, border: `1px solid ${C.border}`, padding: "28px 28px 24px", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <span style={{ fontSize: 26 }}>🧭</span>
          <h3 style={{ fontFamily: F.serif, fontSize: 20, fontWeight: 600, color: C.charcoal, margin: 0 }}>Muhurat Finder</h3>
        </div>

        <p style={{ fontSize: 13, color: C.gray, marginBottom: 14 }}>What are you planning?</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
          {MUHURAT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: "8px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: "pointer",
                border: activeCategory === cat.id ? `1.5px solid ${C.saffron}` : `1px solid ${C.border}`,
                background: activeCategory === cat.id ? C.saffronLight : C.ivory,
                color: activeCategory === cat.id ? C.saffron : C.charcoal,
                fontFamily: F.sans, transition: "all 0.15s ease",
              }}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        <p style={{ fontSize: 12, color: C.gray, marginBottom: 12, lineHeight: 1.6 }}>{activeCat.description}</p>

        <div key={activeCategory} style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
          {muhurats.length > 0 ? muhurats.map((m, i) => {
            const c = now ? getCountdown(m.date, now) : null;
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: C.goldLight, borderRadius: 10, border: `1px solid rgba(184,146,42,0.2)`, gap: 12, animation: `ppFadeUp 0.3s ease ${i * 0.06}s both` }}>
                <div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: C.charcoal, whiteSpace: "nowrap", display: "block" }}>{formatDate(m.date)}</span>
                  {c && c.days >= 0 && <span style={{ fontSize: 10.5, color: C.gold, fontWeight: 600 }}>{c.days === 0 ? "Today" : c.days === 1 ? "Tomorrow" : `In ${c.days} days`}</span>}
                </div>
                {m.note && <span style={{ fontSize: 12, color: C.gray, textAlign: "right" }}>{m.note}</span>}
              </div>
            );
          }) : (
            <p style={{ fontSize: 13, color: C.gray, textAlign: "center", padding: "16px 0" }}>No upcoming dates in this cycle — check back soon.</p>
          )}
        </div>

        <div style={{ background: C.saffronLight, border: `1px solid rgba(200,84,26,0.15)`, borderRadius: 10, padding: "10px 14px", marginBottom: 16 }}>
          <p style={{ fontSize: 12, color: C.charcoal, margin: 0, lineHeight: 1.6 }}>💡 These are general guidance dates. For personalized muhurat based on your birth details, consult your family priest or astrologer.</p>
        </div>

        {activeCat.blogSlug && (
          <Link href={`/blog/${activeCat.blogSlug}`} style={{ display: "block", textAlign: "center", fontSize: 13, fontWeight: 700, color: C.saffron, textDecoration: "none" }}>
            Read the full {activeCat.label} guide →
          </Link>
        )}
      </div>
    </div>
  );
}
