"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// ── Joy: the site-wide motion layer ─────────────────────────────
// 1. Scroll reveals on marketing pages — sections and grid cards rise in with
//    a light stagger; photos settle from a gentle zoom. Applied automatically,
//    so every marketing page gets it without per-page code.
// 2. Petal burst — marigold / rani petals pop from any "start" or "upgrade"
//    button when it's clicked (and on the dashboard after upgrading).
// 3. Photos lean in on hover.
// Everything is skipped when the visitor prefers reduced motion, and content
// is never hidden unless this script is running.

const PETAL_COLORS = ["#FFB224", "#FF8A1F", "#D6246E", "#FFD166", "#7A3FD9", "#ffffff"];

export function petalBurst(x: number, y: number, count = 16) {
  if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = document.createElement("div");
  layer.className = "joy-burst";
  layer.style.left = `${x}px`;
  layer.style.top = `${y}px`;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
    const dist = 50 + Math.random() * 70;
    p.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    p.style.setProperty("--dy", `${Math.sin(angle) * dist - 30}px`);
    p.style.setProperty("--r", `${Math.random() * 540 - 270}deg`);
    p.style.background = PETAL_COLORS[i % PETAL_COLORS.length];
    p.style.animationDelay = `${Math.random() * 60}ms`;
    if (i % 5 === 0) { p.textContent = "🌼"; p.className = "flower"; }
    layer.appendChild(p);
  }
  document.body.appendChild(layer);
  setTimeout(() => layer.remove(), 1100);
}

const BURST_SELECTOR = [
  'a[href^="/auth/signup"]', 'a[href^="/upgrade"]', ".hp-btn-gold", ".hp-btn-rani", ".hp-btn-ink",
  ".pp-btn-primary", ".dash-hero-gold", "[data-joy-burst]",
].join(",");

const REVEAL_SELECTOR = [
  "main section h1", "main section h2", "main section > div > p",
  'main section [style*="grid-template-columns"] > *',
  "main section .hp-bento > *", "main section .hp-steps > *", "main section .hp-quotes > *", "main section .hp-guides > *",
  "main section .pp-grid > *", "main section img",
  "main section .rs-grid > *", "main section .ab-values > *", "main section .ww-row > *", "main section .ab-story > *",
].join(",");

export default function Joy() {
  const pathname = usePathname();

  // Petal bursts (all pages)
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement)?.closest?.(BURST_SELECTOR) as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX || r.left + r.width / 2, y = e.clientY || r.top + r.height / 2;
      petalBurst(x, y);
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  // Celebrate an upgrade
  useEffect(() => {
    if (!pathname?.startsWith("/dashboard")) return;
    if (new URLSearchParams(window.location.search).get("upgraded") !== "1") return;
    const t = setTimeout(() => {
      const w = window.innerWidth;
      [0.25, 0.5, 0.75].forEach((f, i) => setTimeout(() => petalBurst(w * f, 160, 22), i * 180));
    }, 400);
    return () => clearTimeout(t);
  }, [pathname]);

  // Scroll reveals (marketing pages only — the app should feel instant)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let observer: IntersectionObserver | null = null;
    const raf = requestAnimationFrame(() => {
      const inApp = !!document.querySelector(".sidebar-desktop");
      document.body.classList.toggle("joy-site", !inApp);
      if (inApp) return; // inside the app shell — keep it instant
      const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))
        .filter(el => !el.closest(".hp-hero, nav, footer, [data-no-reveal]") && !el.classList.contains("joy-in"));
      const vh = window.innerHeight;
      observer = new IntersectionObserver(entries => {
        const visible = entries.filter(en => en.isIntersecting);
        visible.forEach((en, i) => {
          const el = en.target as HTMLElement;
          el.style.transitionDelay = `${Math.min(i, 6) * 70}ms`;
          el.classList.add("joy-in");
          observer?.unobserve(el);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) return; // already on screen: leave it be
        el.classList.add(el.tagName === "IMG" ? "joy-img" : "joy-pending");
        observer!.observe(el);
      });
    });
    return () => { cancelAnimationFrame(raf); observer?.disconnect(); };
  }, [pathname]);

  return (
    <style>{`
      .joy-pending { opacity:0; transform:translateY(22px) scale(.985); transition:opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1); }
      .joy-pending.joy-in { opacity:1; transform:none; }
      img.joy-img { opacity:0; transform:scale(1.08); transition:opacity .9s ease, transform 1.4s cubic-bezier(.2,.7,.2,1); }
      img.joy-img.joy-in { opacity:1; transform:scale(1); }

      /* photos lean in on hover */
      main section div[style*="overflow: hidden"] > img, main section div[style*="overflow:hidden"] > img { transition:transform .7s cubic-bezier(.2,.7,.2,1), opacity .9s ease; }
      main section div[style*="overflow: hidden"]:hover > img { transform:scale(1.06) !important; }

      /* marketing cards lift on hover */
      .joy-site main section [style*="grid-template-columns"] > a,
      .joy-site main section [style*="grid-template-columns"] > div[style*="overflow: hidden"] { transition:transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s ease, opacity .7s ease; }
      .joy-site main section [style*="grid-template-columns"] > a:hover,
      .joy-site main section [style*="grid-template-columns"] > div[style*="overflow: hidden"]:hover { transform:translateY(-6px) !important; box-shadow:0 26px 50px -26px rgba(30,21,70,0.45); }

      /* petal burst */
      .joy-burst { position:fixed; width:0; height:0; pointer-events:none; z-index:9999; }
      .joy-burst span { position:absolute; left:-5px; top:-4px; width:10px; height:7px; border-radius:60% 40% 60% 40%; animation:joyPetal .95s cubic-bezier(.15,.7,.3,1) forwards; }
      .joy-burst span.flower { background:none !important; width:auto; height:auto; font-size:16px; left:-8px; top:-10px; }
      @keyframes joyPetal {
        0% { transform:translate(0,0) rotate(0) scale(.6); opacity:1; }
        70% { opacity:1; }
        100% { transform:translate(var(--dx), calc(var(--dy) + 60px)) rotate(var(--r)) scale(1); opacity:0; }
      }
      @media (prefers-reduced-motion: reduce) {
        .joy-pending, img.joy-img { opacity:1 !important; transform:none !important; transition:none !important; }
        .joy-burst { display:none; }
      }
    `}</style>
  );
}
