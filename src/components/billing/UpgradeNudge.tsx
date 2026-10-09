"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocalPlan } from "@/lib/plan";
import { getActiveFamily } from "@/lib/families";
import HeritageBookCover from "@/components/pricing/HeritageBookCover";

// ── Upgrade nudge ────────────────────────────────────────────────
// A friendly card (never a blocking popup) that appears when a free family
// has saved enough for Pro to mean something to them — e.g. 3+ members or a
// ritual — and again on milestones (3rd/5th/10th member or ritual).
// Throttled: at most once every 4 days, never on the first day, never on
// billing pages, and "Don't show again" is respected for 30 days.

const KEY_LAST = "parampara_nudge_last";
const KEY_MUTE = "parampara_nudge_muted_until";
const KEY_FIRST = "parampara_first_seen";
const HIDE_ON = ["/upgrade", "/account", "/pricing", "/auth"];

function counts() {
  const id = getActiveFamily()?.id || "default";
  const read = (k: string) => { try { const v = JSON.parse(localStorage.getItem(k) || "[]"); return Array.isArray(v) ? v : []; } catch { return []; } };
  return { members: read(`parampara_members_${id}`).length, rituals: read(`parampara_rituals_${id}`).filter((r: { isTemplate?: boolean }) => !r.isTemplate).length };
}

export function announceMilestone() {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("parampara_milestone"));
}

export default function UpgradeNudge() {
  const pathname = usePathname() || "";
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({ members: 0, rituals: 0, family: "Your Family" });

  useEffect(() => {
    if (HIDE_ON.some(p => pathname.startsWith(p))) { setShow(false); return; }
    const now = Date.now();
    if (!localStorage.getItem(KEY_FIRST)) localStorage.setItem(KEY_FIRST, String(now));

    const eligible = (force: boolean) => {
      if (getLocalPlan() === "pro") return false;
      if (now < parseInt(localStorage.getItem(KEY_MUTE) || "0")) return false;
      const last = parseInt(localStorage.getItem(KEY_LAST) || "0");
      const firstSeen = parseInt(localStorage.getItem(KEY_FIRST) || String(now));
      if (!force && now - firstSeen < 24 * 3600 * 1000) return false;
      if (now - last < (force ? 2 : 4) * 24 * 3600 * 1000) return false;
      const c = counts();
      return force ? true : (c.members >= 3 || c.rituals >= 1);
    };
    const open = (force = false) => {
      if (!eligible(force)) return;
      const c = counts();
      setInfo({ ...c, family: getActiveFamily()?.name || localStorage.getItem("parampara_family_name") || "Your Family" });
      localStorage.setItem(KEY_LAST, String(Date.now()));
      setShow(true);
    };
    const t = setTimeout(() => open(false), 4000);
    const onMilestone = () => {
      const c = counts();
      if ([3, 5, 10, 20].includes(c.members) || [1, 3, 5, 10].includes(c.rituals)) setTimeout(() => open(true), 1200);
    };
    window.addEventListener("parampara_milestone", onMilestone);
    return () => { clearTimeout(t); window.removeEventListener("parampara_milestone", onMilestone); };
  }, [pathname]);

  if (!show) return null;
  const line = info.rituals > 0
    ? `${info.rituals} ritual${info.rituals === 1 ? "" : "s"} and ${info.members} family member${info.members === 1 ? "" : "s"} saved — ready to become a book.`
    : `${info.members} family members saved. Give them a Heritage Book to keep.`;

  return (
    <div className="un" role="dialog" aria-label="Upgrade to Pro">
      <button className="un-x" onClick={() => setShow(false)} aria-label="Close">×</button>
      <div className="un-book"><HeritageBookCover familyName={info.family} width={74}/></div>
      <div className="un-body">
        <p className="un-title">Turn this into {info.family}&apos;s Heritage Book</p>
        <p className="un-text">{line} Pro also adds the AI ritual assistant.</p>
        <div className="un-row">
          <Link href="/upgrade?billing=yearly" className="un-cta" onClick={() => setShow(false)}>See Pro</Link>
          <button className="un-later" onClick={() => { localStorage.setItem(KEY_MUTE, String(Date.now() + 30 * 24 * 3600 * 1000)); setShow(false); }}>Don&apos;t show again</button>
        </div>
      </div>
      <style>{`
        .un { position:fixed; right:20px; bottom:20px; z-index:250; width:min(400px, calc(100vw - 32px)); background:#1E1546; color:#fff; border-radius:22px; padding:18px 18px 18px 16px; display:flex; gap:14px; align-items:center; box-shadow:0 30px 70px -20px rgba(18,12,46,0.7); animation:unIn .45s cubic-bezier(.2,.8,.2,1); font-family:'Inter',system-ui,sans-serif; }
        .un-x { position:absolute; top:8px; right:10px; background:none; border:none; color:rgba(255,255,255,0.6); font-size:22px; cursor:pointer; line-height:1; }
        .un-book { flex-shrink:0; }
        .un-title { font-family:'Bricolage Grotesque',system-ui,sans-serif; font-weight:800; font-size:17px; margin:0 18px 4px 0; line-height:1.25; }
        .un-text { margin:0 0 12px; font-size:13px; color:rgba(255,255,255,0.75); line-height:1.5; }
        .un-row { display:flex; gap:10px; align-items:center; flex-wrap:wrap; }
        .un-cta { background:#FFB224; color:#120C2E; font-weight:800; font-size:14px; padding:9px 16px; border-radius:10px; text-decoration:none; }
        .un-later { background:none; border:none; color:rgba(255,255,255,0.6); font-size:13px; cursor:pointer; font-family:inherit; }
        .un-cta:focus-visible, .un-later:focus-visible, .un-x:focus-visible { outline:3px solid #FFB224; outline-offset:2px; }
        @keyframes unIn { from { opacity:0; transform:translateY(24px) scale(.97); } to { opacity:1; transform:none; } }
        @media (max-width:520px) { .un { right:16px; bottom:16px; } }
        @media (prefers-reduced-motion: reduce) { .un { animation:none; } }
      `}</style>
    </div>
  );
}
