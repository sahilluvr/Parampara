"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import AppShell from "@/components/layout/AppShell";
import { useMembers } from "@/lib/useData";
import { getActiveFamily } from "@/lib/families";
import { buildTreeLayout, type TreeNode } from "@/lib/treeLayout";
import { inferTree, type TreeMember } from "@/lib/autoTree";
import type { FamilyMember } from "@/lib/store";
import { Download, Plus, X, ZoomIn, ZoomOut, Pencil } from "lucide-react";
import toast from "react-hot-toast";

// ── Family Tree ───────────────────────────────────────────────────
// Builds itself from how each person is related to you ("Mother", "Dadi",
// "Son"…). Tap anyone to add their parents, spouse or children; dashed
// cards show the gaps worth filling.

const K = { ink: "#1C1733", muted: "#625C7A", line: "#CFC6E6", rani: "#D6246E", raniSoft: "#FCE8F0", marigold: "#FFB224", indigo: "#1E1546", peacock: "#0F7A73", paper: "#F8F6FC" };
const DISPLAY = "'Bricolage Grotesque',system-ui,sans-serif";

function initials(m: FamilyMember) {
  return (m.initials && m.initials !== "+") ? m.initials : m.name.trim().split(/\s+/).map(w => w[0]).join("").toUpperCase().slice(0, 2) || "?";
}

function Person({ m, onTap }: { m: TreeMember; onTap: (m: TreeMember) => void }) {
  if (m.placeholder) {
    const href = `/members?add=${encodeURIComponent(m.placeholder)}`;
    return (
      <Link href={href} className="ft-person ft-ph">
        <span className="ft-av ft-av-ph"><Plus size={20}/></span>
        <span className="ft-name">{m.name}</span>
      </Link>
    );
  }
  const rel = m.isSelf ? "You" : m.relation;
  return (
    <button type="button" className={`ft-person${m.isSelf ? " ft-self" : ""}${m.deceased ? " ft-gone" : ""}`} onClick={() => onTap(m)}>
      <span className="ft-av" style={m.photoUrl ? { backgroundImage: `url(${m.photoUrl})` } : undefined}>{m.photoUrl ? "" : initials(m)}</span>
      <span className="ft-name">{m.name}{m.deceased ? " 🕊️" : ""}</span>
      {rel && <span className="ft-rel">{rel}</span>}
    </button>
  );
}

export default function FamilyTreePage() {
  const { members: raw, loading } = useMembers();
  const [familyName, setFamilyName] = useState("Our Family");
  const [userName, setUserName] = useState("");
  const [selected, setSelected] = useState<TreeMember | null>(null);
  const [zoom, setZoom] = useState(1);
  const [downloading, setDownloading] = useState(false);
  const treeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFamilyName(getActiveFamily()?.name || localStorage.getItem("parampara_family_name") || "Our Family");
    setUserName(localStorage.getItem("parampara_user_name") || "");
  }, []);

  const { people, selfId } = useMemo(
    () => inferTree((raw as unknown as FamilyMember[]).filter(m => m && m.id && m.name), { selfName: userName }),
    [raw, userName]
  );
  const layout = useMemo(() => buildTreeLayout(people), [people]);

  // memberId → id of the tree node (couple) they belong to
  const nodeOf = useMemo(() => {
    const map = new Map<string, string>();
    for (const [nid, n] of Object.entries(layout.nodesById)) { map.set(n.member.id, nid); if (n.spouse) map.set(n.spouse.id, nid); }
    return map;
  }, [layout]);

  // Roots ordered so the branch containing "you" comes first
  const roots = useMemo(() => {
    const r = (layout.generations[0] || []).map(n => n.member.id);
    const contains = (nid: string, target: string, seen = new Set<string>()): boolean => {
      if (seen.has(nid)) return false; seen.add(nid);
      const n = layout.nodesById[nid]; if (!n) return false;
      if (n.member.id === target || n.spouse?.id === target) return true;
      return n.childrenNodeIds.some(c => { const cn = nodeOf.get(c); return cn ? contains(cn, target, seen) : false; });
    };
    return r.sort((a, b) => Number(contains(b, selfId)) - Number(contains(a, selfId)));
  }, [layout, nodeOf, selfId]);

  const onTree = new Set<string>([...nodeOf.keys()]);
  const notOnTree = people.filter(p => !p.placeholder && !onTree.has(p.id) && p.id !== "__self__");
  const realCount = people.filter(p => !p.placeholder && p.id !== "__self__").length;

  function renderUnit(nid: string, rendered: Set<string>): React.ReactNode {
    const n: TreeNode | undefined = layout.nodesById[nid];
    if (!n) return null;
    rendered.add(nid);
    const kids = n.childrenNodeIds
      .map(cid => ({ cid, nid: nodeOf.get(cid) }))
      .filter((k, i, arr) => k.nid && arr.findIndex(x => x.nid === k.nid) === i);
    return (
      <li key={nid}>
        <div className="ft-unit">
          <Person m={n.member as TreeMember} onTap={setSelected}/>
          {n.spouse && <><span className="ft-heart" aria-hidden="true">♥</span><Person m={n.spouse as TreeMember} onTap={setSelected}/></>}
        </div>
        {kids.length > 0 && (
          <ul>
            {kids.map(k => rendered.has(k.nid!)
              ? (() => { const child = people.find(p => p.id === k.cid); return child ? <li key={`ref-${k.cid}-${nid}`}><div className="ft-ref">{child.name}<small>shown in the other branch</small></div></li> : null; })()
              : renderUnit(k.nid!, rendered))}
          </ul>
        )}
      </li>
    );
  }

  async function download() {
    setDownloading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(treeRef.current!, { backgroundColor: "#F8F6FC", scale: 2, useCORS: true, logging: false });
      const a = document.createElement("a");
      a.download = `${familyName.replace(/\s+/g, "-")}-family-tree.png`;
      a.href = canvas.toDataURL("image/png"); a.click();
      toast.success("Family tree saved as a picture 📥");
    } catch { toast.error("Couldn't save the picture. Please try again."); }
    setDownloading(false);
  }

  const sel = selected;
  const ofParam = sel && !sel.isSelf ? `&of=${encodeURIComponent(sel.id)}` : "";
  const forName = sel ? (sel.isSelf ? "your" : `${sel.name.split(" ")[0]}'s`) : "";
  const rendered = new Set<string>();

  return (
    <AppShell>
      <div className="ft-page">
        <header className="ft-head">
          <div>
            <h1>{familyName} family tree</h1>
            <p>{realCount === 0 ? "Add your family and the tree draws itself." : "Tap anyone to add their parents, partner or children."}</p>
          </div>
          <div className="ft-actions">
            <Link href="/members?add=" className="ft-btn ft-btn-primary"><Plus size={18}/> Add family member</Link>
            {realCount > 0 && <button className="ft-btn" onClick={download} disabled={downloading}><Download size={17}/> {downloading ? "Saving…" : "Save picture"}</button>}
          </div>
        </header>

        {loading && realCount === 0 ? (
          <div className="ft-empty"><p>Loading your family…</p></div>
        ) : realCount === 0 ? (
          <div className="ft-empty">
            <div className="ft-empty-art" aria-hidden="true">🌳</div>
            <h2>Start with the people closest to you</h2>
            <p>Pick who you&apos;re adding — Mother, Father, Brother, Dadi… — and their place in the tree is set automatically.</p>
            <div className="ft-quick">
              {[["Mother", "👩"], ["Father", "👨"], ["Wife", "💑"], ["Husband", "💑"], ["Son", "👶"], ["Daughter", "👶"]].map(([r, e]) => (
                <Link key={r} href={`/members?add=${r}`} className="ft-quick-btn"><span>{e}</span>{r}</Link>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="ft-zoom">
              <button onClick={() => setZoom(z => Math.max(0.5, +(z - 0.15).toFixed(2)))} aria-label="Zoom out"><ZoomOut size={18}/></button>
              <span>{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom(z => Math.min(1.6, +(z + 0.15).toFixed(2)))} aria-label="Zoom in"><ZoomIn size={18}/></button>
            </div>
            <div className="ft-scroll">
              <div ref={treeRef} className="ft-canvas" style={{ transform: `scale(${zoom})` }}>
                <div className="ft">
                  {roots.map(r => rendered.has(r) ? null : <ul key={r} className="ft-root">{renderUnit(r, rendered)}</ul>)}
                </div>
              </div>
            </div>
            {notOnTree.length > 0 && (
              <div className="ft-loose">
                <h3>Not placed yet</h3>
                <p>Tell us how they&apos;re related to you and they&apos;ll join the tree.</p>
                <div className="ft-loose-row">
                  {notOnTree.map(m => (
                    <Link key={m.id} href={`/members?edit=${encodeURIComponent(m.id)}`} className="ft-loose-chip">{m.name}<small>{m.relation || "Set relation"} · fix</small></Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {sel && (
        <div className="ft-sheet-bg" onClick={() => setSelected(null)}>
          <div className="ft-sheet" onClick={e => e.stopPropagation()} role="dialog" aria-label={sel.name}>
            <button className="ft-close" onClick={() => setSelected(null)} aria-label="Close"><X size={20}/></button>
            <div className="ft-sheet-top">
              <span className="ft-av ft-av-lg" style={sel.photoUrl ? { backgroundImage: `url(${sel.photoUrl})` } : undefined}>{sel.photoUrl ? "" : initials(sel)}</span>
              <div>
                <h2>{sel.name}</h2>
                <p>{sel.isSelf ? "You" : sel.relation}{sel.birthdate ? ` · 🎂 ${new Date(sel.birthdate).toLocaleDateString("en-IN", { day: "numeric", month: "long" })}` : ""}</p>
              </div>
            </div>
            {sel.id === "__self__" ? (
              <Link href="/members?add=Self" className="ft-btn ft-btn-primary ft-wide">Add yourself with a photo</Link>
            ) : (
              <>
                <p className="ft-sheet-label">Add {forName}…</p>
                <div className="ft-add-grid">
                  {[["Father", "👨"], ["Mother", "👩"], [sel.isSelf ? "Wife" : "Spouse", "💑"], ["Son", "👶"], ["Daughter", "👶"], ["Brother", "👦"], ["Sister", "👧"]].map(([r, e]) => (
                    <Link key={r} href={`/members?add=${r === "Spouse" ? "Wife" : r}${ofParam}`} className="ft-add-btn"><span>{e}</span>{r}</Link>
                  ))}
                </div>
                <Link href={`/members?edit=${encodeURIComponent(sel.id)}`} className="ft-btn ft-wide"><Pencil size={16}/> Edit {sel.isSelf ? "your" : "their"} details</Link>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        .ft-page { padding:24px 18px 80px; max-width:1200px; margin:0 auto; font-family:'Inter',system-ui,sans-serif; color:${K.ink}; }
        .ft-head { display:flex; justify-content:space-between; align-items:flex-end; gap:16px; flex-wrap:wrap; margin-bottom:18px; }
        .ft-head h1 { font-family:${DISPLAY}; font-weight:800; font-size:clamp(26px,3.6vw,36px); letter-spacing:-0.025em; margin:0 0 4px; }
        .ft-head p { color:${K.muted}; margin:0; font-size:16px; }
        .ft-actions { display:flex; gap:10px; flex-wrap:wrap; }
        .ft-btn { display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:13px 18px; border-radius:14px; border:1.5px solid #E6E1F0; background:#fff; color:${K.ink}; font-weight:700; font-size:15px; text-decoration:none; cursor:pointer; font-family:inherit; }
        .ft-btn-primary { background:${K.rani}; border-color:${K.rani}; color:#fff; }
        .ft-btn:focus-visible, .ft-person:focus-visible, .ft-add-btn:focus-visible, .ft-quick-btn:focus-visible { outline:3px solid ${K.marigold}; outline-offset:2px; }
        .ft-wide { width:100%; margin-top:12px; box-sizing:border-box; }
        .ft-zoom { display:flex; align-items:center; gap:8px; justify-content:flex-end; margin-bottom:8px; color:${K.muted}; font-size:13px; font-weight:600; }
        .ft-zoom button { width:36px; height:36px; border-radius:10px; border:1px solid #E6E1F0; background:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; color:${K.ink}; }
        .ft-scroll { overflow:auto; background:#fff; border:1px solid #E6E1F0; border-radius:24px; padding:28px 12px; background-image:radial-gradient(rgba(30,21,70,0.06) 1px, transparent 1.4px); background-size:18px 18px; }
        .ft-canvas { transform-origin:top center; transition:transform .2s ease; width:max-content; min-width:100%; padding:4px 24px 24px; box-sizing:border-box; }
        .ft { display:flex; gap:48px; justify-content:center; align-items:flex-start; }
        .ft ul { padding-top:28px; position:relative; display:flex; justify-content:center; margin:0; padding-left:0; }
        .ft ul.ft-root { padding-top:0; }
        .ft li { list-style:none; position:relative; padding:28px 10px 0; display:flex; flex-direction:column; align-items:center; animation:ftIn .45s cubic-bezier(.2,.7,.2,1) both; }
        .ft ul.ft-root > li { padding-top:0; }
        .ft li::before, .ft li::after { content:""; position:absolute; top:0; right:50%; border-top:2.5px solid ${K.line}; width:50%; height:28px; }
        .ft li::after { right:auto; left:50%; border-left:2.5px solid ${K.line}; }
        .ft li:only-child::before, .ft li:only-child::after { display:none; }
        .ft li:only-child { padding-top:0; }
        .ft li:first-child::before, .ft li:last-child::after { border:0 none; }
        .ft li:last-child::before { border-right:2.5px solid ${K.line}; border-radius:0 10px 0 0; }
        .ft li:first-child::after { border-radius:10px 0 0 0; }
        .ft ul ul::before { content:""; position:absolute; top:0; left:50%; border-left:2.5px solid ${K.line}; height:28px; }
        .ft ul.ft-root > li::before, .ft ul.ft-root > li::after { display:none; }
        .ft-unit { display:flex; align-items:center; gap:6px; background:#fff; border:1.5px solid #E6E1F0; border-radius:20px; padding:10px 12px; box-shadow:0 10px 24px -16px rgba(30,21,70,0.35); }
        .ft-heart { color:${K.rani}; font-size:14px; }
        .ft-person { display:flex; flex-direction:column; align-items:center; gap:4px; width:104px; padding:4px 2px; background:none; border:none; cursor:pointer; font-family:inherit; color:${K.ink}; text-decoration:none; border-radius:14px; transition:transform .2s ease; }
        .ft-person:hover { transform:translateY(-3px); }
        .ft-av { width:62px; height:62px; border-radius:50%; background:${K.raniSoft}; color:${K.rani}; display:flex; align-items:center; justify-content:center; font-family:${DISPLAY}; font-weight:800; font-size:20px; background-size:cover; background-position:center; border:3px solid #fff; box-shadow:0 0 0 2px ${K.line}; }
        .ft-self .ft-av { background:${K.marigold}; color:${K.indigo}; box-shadow:0 0 0 3px ${K.rani}; }
        .ft-gone .ft-av { filter:grayscale(.7); }
        .ft-av-ph { background:#fff; color:${K.muted}; border:2px dashed ${K.line}; box-shadow:none; }
        .ft-ph .ft-name { color:${K.muted}; }
        .ft-name { font-weight:700; font-size:14px; line-height:1.25; text-align:center; overflow-wrap:anywhere; }
        .ft-rel { font-size:12px; color:${K.muted}; background:${K.paper}; border-radius:999px; padding:1px 8px; }
        .ft-self .ft-rel { background:${K.rani}; color:#fff; font-weight:700; }
        .ft-ref { background:${K.paper}; border:1.5px dashed ${K.line}; border-radius:14px; padding:10px 14px; font-weight:700; font-size:14px; display:flex; flex-direction:column; }
        .ft-ref small { font-weight:500; color:${K.muted}; font-size:12px; }
        .ft-empty { text-align:center; background:#fff; border:1px solid #E6E1F0; border-radius:24px; padding:48px 20px; }
        .ft-empty-art { font-size:64px; animation:ftSway 3s ease-in-out infinite; display:inline-block; }
        .ft-empty h2 { font-family:${DISPLAY}; font-size:24px; margin:12px 0 8px; }
        .ft-empty p { color:${K.muted}; max-width:440px; margin:0 auto 22px; line-height:1.6; font-size:16px; }
        .ft-quick { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; max-width:480px; margin:0 auto; }
        .ft-quick-btn, .ft-add-btn { display:flex; flex-direction:column; align-items:center; gap:6px; padding:16px 8px; border-radius:16px; background:${K.paper}; border:1.5px solid #E6E1F0; text-decoration:none; color:${K.ink}; font-weight:700; font-size:15px; transition:transform .15s ease, background .15s ease; }
        .ft-quick-btn span, .ft-add-btn span { font-size:28px; }
        .ft-quick-btn:hover, .ft-add-btn:hover { background:${K.raniSoft}; transform:translateY(-2px); }
        .ft-loose { margin-top:18px; background:#FFF4DC; border-radius:20px; padding:18px 20px; }
        .ft-loose h3 { margin:0 0 4px; font-family:${DISPLAY}; font-size:18px; }
        .ft-loose p { margin:0 0 12px; color:${K.muted}; font-size:15px; }
        .ft-loose-row { display:flex; flex-wrap:wrap; gap:8px; }
        .ft-loose-chip { display:flex; flex-direction:column; background:#fff; border-radius:12px; padding:8px 14px; text-decoration:none; color:${K.ink}; font-weight:700; font-size:14px; }
        .ft-loose-chip small { color:${K.rani}; font-weight:600; font-size:12px; }
        .ft-sheet-bg { position:fixed; inset:0; background:rgba(18,12,46,0.5); z-index:300; display:flex; align-items:flex-end; justify-content:center; animation:ftFade .2s ease; }
        .ft-sheet { background:#fff; width:100%; max-width:480px; border-radius:24px 24px 0 0; padding:24px 20px 28px; position:relative; animation:ftUp .28s cubic-bezier(.2,.8,.2,1); max-height:90vh; overflow:auto; }
        @media (min-width:700px) { .ft-sheet-bg { align-items:center; } .ft-sheet { border-radius:24px; } }
        .ft-close { position:absolute; top:14px; right:14px; background:${K.paper}; border:none; width:36px; height:36px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; color:${K.ink}; }
        .ft-sheet-top { display:flex; gap:14px; align-items:center; margin-bottom:18px; }
        .ft-av-lg { width:72px; height:72px; font-size:24px; }
        .ft-sheet h2 { font-family:${DISPLAY}; font-weight:800; font-size:24px; margin:0; }
        .ft-sheet-top p { margin:2px 0 0; color:${K.muted}; }
        .ft-sheet-label { font-weight:700; margin:0 0 10px; }
        .ft-add-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; }
        .ft-add-btn { padding:12px 4px; font-size:13px; }
        .ft-add-btn span { font-size:24px; }
        @keyframes ftIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }
        @keyframes ftUp { from { transform:translateY(40px); opacity:0; } to { transform:none; opacity:1; } }
        @keyframes ftFade { from { opacity:0; } }
        @keyframes ftSway { 50% { transform:rotate(-6deg); } }
        @media (max-width:520px) { .ft-add-grid { grid-template-columns:repeat(3,1fr); } .ft-person { width:84px; } .ft-av { width:52px; height:52px; font-size:17px; } .ft-actions { width:100%; } .ft-actions > * { flex:1; } }
        @media (prefers-reduced-motion: reduce) { .ft li, .ft-sheet, .ft-sheet-bg, .ft-empty-art { animation:none; } .ft-canvas { transition:none; } }
      `}</style>
    </AppShell>
  );
}
