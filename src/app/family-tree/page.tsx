"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import AppShell from "@/components/layout/AppShell";
import { useMembers } from "@/lib/useData";
import { getActiveFamily } from "@/lib/families";
import { buildTreeLayout, type TreeNode } from "@/lib/treeLayout";
import type { FamilyMember } from "@/lib/store";
import { Download, Share2, X, Info, Users } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.18)", forest:"#1A5C42", forestLight:"#E8F4EE", gold:"#B8922A", goldLight:"#F9F3E3", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff", parchment:"#F3E9D2" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };

function safeName(m?: FamilyMember): string {
  return m?.name?.trim() || "Unknown";
}
function safeInitials(m?: FamilyMember): string {
  if (!m) return "?";
  if (m.initials) return m.initials;
  return safeName(m).split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) || "?";
}

// One person's portrait — used both standalone and inside a couple card.
function Portrait({ member, size = 56 }: { member?: FamilyMember; size?: number }) {
  if (!member) return null;
  return (
    <div style={{ position:"relative", flexShrink:0 }}>
      <div style={{
        width:size, height:size, borderRadius:"50%",
        background: member.photoUrl ? "transparent" : `linear-gradient(135deg,${C.saffronLight},${C.goldLight})`,
        border:`2.5px solid ${member.deceased ? C.gray : C.gold}`,
        overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center",
        fontSize:size*0.32, fontWeight:700, color:C.gold, filter: member.deceased ? "grayscale(0.6)" : "none",
      }}>
        {member.photoUrl
          ? <img src={member.photoUrl} alt={safeName(member)} style={{ width:"100%", height:"100%", objectFit:"cover" }} onError={e=>{(e.target as HTMLImageElement).style.display="none";}}/>
          : safeInitials(member)
        }
      </div>
      {member.deceased && (
        <div title="In loving memory" style={{ position:"absolute", bottom:-2, right:-2, width:18, height:18, borderRadius:"50%", background:C.white, border:`1.5px solid ${C.gray}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10 }}>🪔</div>
      )}
    </div>
  );
}

// A couple (or single person) card — the basic visual unit of the tree.
function CoupleCard({ node, onSelect }: { node: TreeNode; onSelect: (m: FamilyMember) => void }) {
  const hasSpouse = !!node.spouse;
  return (
    <div style={{
      background: C.white, borderRadius:14, border:`1.5px solid ${C.border}`,
      padding: hasSpouse ? "12px 16px" : "10px 14px",
      display:"flex", alignItems:"center", gap:10,
      boxShadow:"0 2px 10px rgba(0,0,0,0.05)", minWidth: hasSpouse ? 200 : 130,
    }}>
      <button onClick={()=>onSelect(node.member)} style={{ background:"none", border:"none", padding:0, cursor:"pointer", display:"flex" }}>
        <Portrait member={node.member} size={hasSpouse ? 50 : 48}/>
      </button>
      {hasSpouse && <div style={{ width:1, alignSelf:"stretch", background:C.border }}/>}
      {hasSpouse && (
        <button onClick={()=>onSelect(node.spouse!)} style={{ background:"none", border:"none", padding:0, cursor:"pointer", display:"flex" }}>
          <Portrait member={node.spouse} size={50}/>
        </button>
      )}
      <div style={{ display:"flex", flexDirection:"column", gap:hasSpouse?6:2, minWidth:0 }}>
        <button onClick={()=>onSelect(node.member)} style={{ background:"none", border:"none", padding:0, cursor:"pointer", textAlign:"left" }}>
          <p style={{ fontSize:12.5, fontWeight:700, color:C.charcoal, margin:0, lineHeight:1.25, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:120 }}>{safeName(node.member)}</p>
        </button>
        {hasSpouse && (
          <button onClick={()=>onSelect(node.spouse!)} style={{ background:"none", border:"none", padding:0, cursor:"pointer", textAlign:"left" }}>
            <p style={{ fontSize:12.5, fontWeight:700, color:C.charcoal, margin:0, lineHeight:1.25, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:120 }}>{safeName(node.spouse)}</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default function FamilyTreePage() {
  const { members: rawMembers, loading } = useMembers();
  const members = rawMembers as unknown as FamilyMember[];
  const [familyName, setFamilyName] = useState("Our Family");
  const [creatorName, setCreatorName] = useState("");
  const [selected, setSelected] = useState<FamilyMember | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const active = getActiveFamily();
    setFamilyName(active?.name || localStorage.getItem("parampara_family_name") || "Our Family");
    setCreatorName(localStorage.getItem("parampara_user_name") || "");
  }, []);

  const layout = useMemo(() => buildTreeLayout(members.filter(m => m && m.id)), [members]);
  const hasAnyLinks = useMemo(() => members.some(m => (m.parentIds && m.parentIds.length) || m.spouseId), [members]);
  const totalShown = useMemo(() => {
    const ids = new Set<string>();
    layout.generations.flat().forEach(n => { ids.add(n.member.id); if (n.spouse) ids.add(n.spouse.id); });
    return ids.size;
  }, [layout]);
  const unlinkedCount = Math.max(0, members.length - totalShown);

  async function downloadAsImage() {
    setDownloading(true);
    try {
      const node = contentRef.current;
      if (!node) { toast.error("Could not capture tree"); setDownloading(false); return; }
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(node, { backgroundColor:"#F3E9D2", scale:2, useCORS:true, allowTaint:true, logging:false });
      const link = document.createElement("a");
      link.download = `${familyName.replace(/\s+/g,"-")}-Vansh-Vriksha.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      toast.success("Family tree downloaded! 📥");
    } catch { toast.error("Download failed. Try again."); }
    setDownloading(false);
  }

  const shareUrl = "https://www.ourparampara.com";
  const shareText = `Our ${familyName} family tree — ${totalShown} family members across ${layout.generations.length} generation${layout.generations.length!==1?"s":""}. Built with Vansh Vriksha on Parampara 🌳`;

  const SHARE_OPTIONS = [
    { id:"whatsapp", label:"WhatsApp", emoji:"💬", action:()=>window.open(`https://wa.me/?text=${encodeURIComponent(shareText+" "+shareUrl)}`, "_blank") },
    { id:"copy", label:"Copy Link", emoji:"🔗", action:()=>{ navigator.clipboard?.writeText(shareUrl).then(()=>toast.success("Link copied! 🔗")); } },
    { id:"native", label:"More apps…", emoji:"📤", action: async ()=>{ if (navigator.share) { try { await navigator.share({ title:`${familyName} — Vansh Vriksha`, text:shareText, url:shareUrl }); } catch {} } else { navigator.clipboard?.writeText(shareUrl).then(()=>toast.success("Copied!")); } } },
  ];

  return (
    <AppShell>
      <div style={{ padding:"20px 16px 80px", maxWidth:1100, margin:"0 auto" }}>

        {/* Page header */}
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:18, flexWrap:"wrap", gap:12 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ fontSize:22 }}>🌳</span>
              <h1 style={{ fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, margin:0 }}>Vansh Vriksha</h1>
              <button onClick={()=>setShowInfo(true)} style={{ background:"none", border:"none", cursor:"pointer", color:C.gray, display:"flex", padding:2 }}><Info size={15}/></button>
            </div>
            <p style={{ fontSize:13, color:C.gray, marginTop:3 }}>वंश वृक्ष · Your family&apos;s generational tree</p>
          </div>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            <button onClick={downloadAsImage} disabled={downloading || totalShown===0}
              style={{ display:"flex", alignItems:"center", gap:6, background:C.goldLight, color:C.gold, border:`1px solid rgba(184,146,42,0.3)`, borderRadius:9, padding:"8px 14px", fontSize:12, fontWeight:600, cursor: totalShown===0?"not-allowed":"pointer", opacity: totalShown===0?0.5:1, fontFamily:F.sans }}>
              <Download size={13}/> {downloading ? "Saving…" : "Download"}
            </button>
            <button onClick={()=>setShowShare(true)} disabled={totalShown===0}
              style={{ display:"flex", alignItems:"center", gap:6, background:C.saffronLight, color:C.saffron, border:`1px solid rgba(200,84,26,0.25)`, borderRadius:9, padding:"8px 14px", fontSize:12, fontWeight:600, cursor: totalShown===0?"not-allowed":"pointer", opacity: totalShown===0?0.5:1, fontFamily:F.sans }}>
              <Share2 size={13}/> Share
            </button>
          </div>
        </div>

        {/* Linking nudge — only shown if members exist but none are linked yet */}
        {!loading && members.length > 1 && !hasAnyLinks && (
          <div style={{ background:"#FFF7ED", border:"1px solid rgba(200,84,26,0.2)", borderRadius:14, padding:"16px 20px", marginBottom:20, display:"flex", alignItems:"center", gap:14, flexWrap:"wrap" }}>
            <span style={{ fontSize:24 }}>🌱</span>
            <div style={{ flex:1, minWidth:220 }}>
              <p style={{ fontSize:13, fontWeight:700, color:C.charcoal, margin:"0 0 2px" }}>Link your family to see the tree</p>
              <p style={{ fontSize:12, color:C.gray, margin:0, lineHeight:1.6 }}>Edit each family member and set their parents and spouse — Vansh Vriksha builds itself automatically from those links.</p>
            </div>
            <Link href="/members" style={{ padding:"9px 18px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:9, fontSize:12, fontWeight:700, color:"#fff", textDecoration:"none", whiteSpace:"nowrap" }}>Link members →</Link>
          </div>
        )}

        {/* Partially linked nudge */}
        {!loading && hasAnyLinks && unlinkedCount > 0 && (
          <div style={{ background:C.ivory, border:`1px solid ${C.border}`, borderRadius:12, padding:"10px 16px", marginBottom:16, display:"flex", alignItems:"center", gap:10 }}>
            <Users size={14} color={C.gray}/>
            <p style={{ fontSize:12, color:C.gray, margin:0 }}>{unlinkedCount} member{unlinkedCount!==1?"s":""} not yet linked to the tree. <Link href="/members" style={{ color:C.saffron, fontWeight:600, textDecoration:"none" }}>Add their parents/spouse →</Link></p>
          </div>
        )}

        {/* The tree itself — parchment poster styling, like a printed family tree */}
        <div
          ref={contentRef}
          style={{
            background: "radial-gradient(ellipse at top, #F8EFD8, #EFE0BC 60%, #E8D7AE 100%)",
            borderRadius:20, border:`2px solid ${C.gold}`, padding:"36px 24px 28px", position:"relative", overflow:"hidden",
          }}
        >
          {/* Decorative corner flourishes, echoing the reference poster's ornate border */}
          <div style={{ position:"absolute", top:14, left:14, fontSize:22, opacity:0.35, color:C.gold, fontFamily:F.serif }}>❦</div>
          <div style={{ position:"absolute", top:14, right:14, fontSize:22, opacity:0.35, color:C.gold, fontFamily:F.serif, transform:"scaleX(-1)" }}>❦</div>

          {/* Banner title */}
          <div style={{ textAlign:"center", marginBottom:28 }}>
            <p style={{ fontFamily:F.serif, fontSize:13, letterSpacing:3, textTransform:"uppercase", color:C.gold, margin:"0 0 4px" }}>Our Family Legacy</p>
            <h2 style={{ fontFamily:F.serif, fontSize:28, fontWeight:700, color:C.charcoal, margin:0 }}>{familyName}</h2>
          </div>

          {loading ? (
            <div style={{ textAlign:"center", padding:"60px 20px" }}>
              <p style={{ fontSize:13, color:C.gray }}>Loading your family tree…</p>
            </div>
          ) : totalShown === 0 ? (
            <div style={{ textAlign:"center", padding:"50px 20px" }}>
              <p style={{ fontSize:44, marginBottom:14 }}>🌳</p>
              <p style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Your tree is waiting to grow</p>
              <p style={{ fontSize:13, color:C.gray, maxWidth:340, margin:"0 auto 20px", lineHeight:1.6 }}>
                {members.length === 0 ? "Add family members, then link their parents and spouse to see them appear here." : "Link parents and spouses for your family members to build the tree."}
              </p>
              <Link href="/members" style={{ display:"inline-flex", alignItems:"center", gap:8, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", padding:"12px 28px", borderRadius:12, fontSize:13, fontWeight:700, textDecoration:"none" }}>
                Go to Family Members →
              </Link>
            </div>
          ) : (
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:0 }}>
              {layout.generations.map((row, gi) => {
                if (!row.length) return null;
                return (
                  <div key={gi} style={{ width:"100%", display:"flex", flexDirection:"column", alignItems:"center" }}>
                    {/* Connector from generation above */}
                    {gi > 0 && (
                      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", height:26 }}>
                        <div style={{ width:2, height:18, background:`${C.gold}80` }}/>
                        <div style={{ width:7, height:7, borderRadius:"50%", background:C.gold }}/>
                      </div>
                    )}
                    <div style={{
                      display:"flex", flexWrap:"wrap", gap:18, justifyContent:"center",
                      padding:"10px 0 20px", borderBottom: gi < layout.generations.length-1 ? `1px dashed ${C.gold}40` : "none",
                      marginBottom: gi < layout.generations.length-1 ? 8 : 0, width:"100%",
                    }}>
                      {row.map(node => (
                        <CoupleCard key={node.member.id} node={node} onSelect={setSelected}/>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Roots quote + creator attribution, echoing the reference poster's footer */}
          {totalShown > 0 && (
            <div style={{ marginTop:32, paddingTop:20, borderTop:`1px solid ${C.gold}30`, display:"flex", flexDirection:"column", alignItems:"center", gap:14 }}>
              <p style={{ fontFamily:F.serif, fontSize:13, fontStyle:"italic", color:C.charcoal, textAlign:"center", maxWidth:380, margin:0, lineHeight:1.7 }}>
                &ldquo;Like branches on a tree, we all grow in different directions, yet our roots remain as one.&rdquo;
              </p>
              <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:10, padding:"8px 18px", display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ fontSize:11, color:C.gray }}>Created by</span>
                <span style={{ fontSize:12, fontWeight:700, color:C.charcoal }}>{creatorName || "Your Family"}</span>
                <span style={{ fontSize:11, color:"rgba(184,146,42,0.5)" }}>· OurParampara</span>
              </div>
            </div>
          )}
        </div>

        {/* Generation legend */}
        {totalShown > 0 && (
          <p style={{ fontSize:11, color:C.gray, textAlign:"center", marginTop:14 }}>
            {totalShown} member{totalShown!==1?"s":""} shown across {layout.generations.length} generation{layout.generations.length!==1?"s":""} · Tap anyone for details
          </p>
        )}
      </div>

      {/* Member detail drawer */}
      {selected && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", zIndex:300, display:"flex", alignItems:"flex-end", justifyContent:"center" }} onClick={()=>setSelected(null)}>
          <div style={{ background:C.white, borderRadius:"20px 20px 0 0", width:"100%", maxWidth:480, padding:24, position:"relative" }} onClick={e=>e.stopPropagation()}>
            <button onClick={()=>setSelected(null)} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", cursor:"pointer", color:C.gray }}><X size={18}/></button>
            <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:18 }}>
              <Portrait member={selected} size={64}/>
              <div>
                <p style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, margin:0 }}>{safeName(selected)}</p>
                <p style={{ fontSize:12, color:C.gray, margin:"2px 0 0" }}>{selected.relation || "Family Member"}{selected.deceased ? " · In loving memory 🪔" : ""}</p>
              </div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:18 }}>
              {selected.birthdate && <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>🎂 Born {new Date(selected.birthdate).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})}</p>}
              {selected.region && <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>📍 {selected.region}</p>}
              {selected.religion && <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>🪔 {selected.religion}</p>}
            </div>
            <Link href="/members" style={{ display:"block", textAlign:"center", padding:"11px", background:C.ivory, border:`1px solid ${C.border}`, borderRadius:10, fontSize:13, fontWeight:600, color:C.charcoal, textDecoration:"none" }}>
              Edit in Family Members →
            </Link>
          </div>
        </div>
      )}

      {/* Info modal — explains how the tree is built */}
      {showInfo && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", zIndex:300, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }} onClick={()=>setShowInfo(false)}>
          <div style={{ background:C.white, borderRadius:18, padding:28, maxWidth:420, width:"100%", position:"relative" }} onClick={e=>e.stopPropagation()}>
            <button onClick={()=>setShowInfo(false)} style={{ position:"absolute", top:14, right:14, background:"none", border:"none", cursor:"pointer", color:C.gray }}><X size={18}/></button>
            <p style={{ fontSize:28, marginBottom:10 }}>🌳</p>
            <h3 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:10 }}>How Vansh Vriksha works</h3>
            <p style={{ fontSize:13, color:C.gray, lineHeight:1.8, marginBottom:10 }}>
              Vansh Vriksha (वंश वृक्ष — &ldquo;lineage tree&rdquo;) draws your real family tree from the parent and spouse links you set on each member&apos;s profile.
            </p>
            <p style={{ fontSize:13, color:C.gray, lineHeight:1.8, marginBottom:0 }}>
              Go to <strong style={{ color:C.charcoal }}>Family Members</strong>, edit a person, and set their parents and spouse under &ldquo;Family Tree Links&rdquo;. The tree updates itself automatically — no manual drawing, ever.
            </p>
          </div>
        </div>
      )}

      {/* Share modal */}
      {showShare && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", zIndex:300, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }} onClick={()=>setShowShare(false)}>
          <div style={{ background:C.white, borderRadius:18, padding:28, width:"100%", maxWidth:400, position:"relative" }} onClick={e=>e.stopPropagation()}>
            <button onClick={()=>setShowShare(false)} style={{ position:"absolute", top:14, right:14, background:"none", border:"none", cursor:"pointer", color:C.gray }}><X size={18}/></button>
            <h3 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:6 }}>Share your family tree</h3>
            <p style={{ fontSize:12, color:C.gray, marginBottom:20, lineHeight:1.6 }}>{shareText}</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:12 }}>
              {SHARE_OPTIONS.map(opt=>(
                <button key={opt.id} onClick={()=>{ opt.action(); if (opt.id!=="copy") setShowShare(false); }}
                  style={{ display:"flex", alignItems:"center", gap:10, padding:"12px 14px", borderRadius:12, border:`1px solid ${C.border}`, background:C.ivory, cursor:"pointer", fontFamily:F.sans, textAlign:"left" }}>
                  <span style={{ fontSize:20 }}>{opt.emoji}</span>
                  <span style={{ fontSize:12, fontWeight:500, color:C.charcoal }}>{opt.label}</span>
                </button>
              ))}
            </div>
            <button onClick={downloadAsImage} style={{ width:"100%", padding:"12px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, border:"none", borderRadius:12, fontSize:13, fontWeight:600, cursor:"pointer", color:"#fff", fontFamily:F.sans, display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>
              <Download size={14}/> Download as Image (.PNG)
            </button>
          </div>
        </div>
      )}
    </AppShell>
  );
}
