"use client";
import { syncPlanFromSupabase } from "@/lib/plan";
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import { Plus, Copy, Check, Users, Trash2, Settings, Crown, LogIn, LogOut, X } from "lucide-react";
import { type FamilySpace, getAllFamilies, createFamily, joinFamily, deleteFamily, setActiveFamily, getActiveFamily, getInviteLink, canCreateFamily, backfillAllFamilySpaces } from "@/lib/families";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", forest:"#1A5C42", forestLight:"#E8F4EE", gold:"#B8922A", goldLight:"#F9F3E3", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff", cream:"#F5F0E8" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };
const inp: React.CSSProperties = { width:"100%", padding:"10px 14px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:13, fontFamily:F.sans, background:C.ivory, color:C.charcoal, outline:"none", boxSizing:"border-box" };
const lbl: React.CSSProperties = { fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 };

type Modal = "create"|"join"|null;

export default function SpacesPage() {
  const router = useRouter();
  const [families, setFamilies] = useState<FamilySpace[]>([]);
  const [activeId, setActiveId] = useState<string|null>(null);
  const [modal, setModal] = useState<Modal>(null);
  const [copiedId, setCopiedId] = useState<string|null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string|null>(null);
  const [leaveConfirm, setLeaveConfirm] = useState<string|null>(null);

  // Create form
  const [createForm, setCreateForm] = useState({ name:"", religion:"Hindu", region:"Chandigarh" });
  // Join form
  const [joinCode, setJoinCode] = useState("");
  const [creating, setCreating] = useState(false);
  const [joining, setJoining] = useState(false);

  const [canCreate, setCanCreate] = useState({ allowed:true, current:0, limit:2 });
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
    const all = getAllFamilies();
    const active = getActiveFamily();
    setFamilies(all);
    setActiveId(active?.id || null);
    setCanCreate(canCreateFamily());
    syncPlanFromSupabase().then(p => setIsPro(p === "pro"));

    // Discover any families in Supabase not yet registered locally
    // (handles users with multiple families created across sessions/devices)
    backfillAllFamilySpaces().then(updated => {
      if (updated.length !== all.length) {
        setFamilies(updated);
        setActiveId(getActiveFamily()?.id || null);
        setCanCreate(canCreateFamily());
      }
    });
  }, []);

  function refresh() {
    setFamilies(getAllFamilies());
    setActiveId(getActiveFamily()?.id || null);
    setCanCreate(canCreateFamily());
    syncPlanFromSupabase().then(p => setIsPro(p === "pro"));
  }

  function switchFamily(id: string) {
    setActiveFamily(id);
    refresh();
    toast.success("Switched family space ✅");
    router.push("/dashboard");
  }

  function copyInvite(family: FamilySpace) {
    const link = getInviteLink(family);
    navigator.clipboard?.writeText(link)
      .then(()=>{ setCopiedId(family.id); toast.success("Invite link copied! 🔗"); setTimeout(()=>setCopiedId(null), 2500); })
      .catch(()=>toast(link, { icon:"🔗", duration:5000 }));
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!createForm.name.trim()) return toast.error("Family name is required");
    setCreating(true);
    try {
      const family = await createFamily(createForm.name.trim(), createForm.religion, createForm.region);
      toast.success(`${family.name} created! 🎉`);
      setModal(null);
      setCreateForm({ name:"", religion:"Hindu", region:"Chandigarh" });
      refresh();
      router.push("/dashboard");
    } catch(err:unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to create family space. Please try again.");
    }
    setCreating(false);
  }

  async function handleJoin(e: React.FormEvent) {
    e.preventDefault();
    if (!joinCode.trim()) return toast.error("Enter an invite code");
    setJoining(true);
    try {
      const family = await joinFamily(joinCode.trim().toUpperCase(), "");
      toast.success(`Joined ${family.name}! 🎉`);
      setModal(null);
      setJoinCode("");
      refresh();
      router.push("/dashboard");
    } catch(err:unknown) {
      toast.error(err instanceof Error ? err.message : "Invalid invite code");
    }
    setJoining(false);
  }

  async function leaveFamily(id: string) {
    const family = families.find(f => f.id === id);
    // Call API to remove from Supabase and notify admin
    try {
      await fetch("/api/family/leave", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ familyId: id, familyName: family?.name }),
      });
    } catch {
      // Continue with local removal even if API fails
    }
    // Remove from local spaces list
    const all = getAllFamilies();
    const updated = all.filter(f => f.id !== id);
    localStorage.setItem("parampara_family_spaces", JSON.stringify(updated));
    // Switch to another family if this was active
    const active = getActiveFamily();
    if (active?.id === id && updated.length > 0) {
      setActiveFamily(updated[0].id);
    }
    setLeaveConfirm(null);
    setFamilies(updated);
    toast.success("You have left the family space. The admin has been notified.");
  }

  async function confirmDelete(id: string) {
    // Remove from Supabase first
    try {
      await fetch("/api/family/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ familyId: id }),
      });
    } catch {
      // Continue with local removal even if API fails
    }
    deleteFamily(id);
    setDeleteConfirm(null);
    refresh();
    toast.success("Family space deleted");
  }

  const { allowed, current, limit } = canCreate;

  return (
    <AppShell>
      {/* Create modal */}
      {modal === "create" && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div style={{ background:C.white, borderRadius:20, padding:"28px 24px", width:"100%", maxWidth:460, position:"relative" }}>
            <button onClick={()=>setModal(null)} style={{ position:"absolute", top:14, right:14, background:"none", border:"none", cursor:"pointer", color:C.gray, display:"flex" }}><X size={20}/></button>
            <h2 style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:20 }}>Create Family Space</h2>
            <form onSubmit={handleCreate}>
              <label style={lbl}>Family name *</label>
              <input value={createForm.name} onChange={e=>setCreateForm(f=>({...f,name:e.target.value}))} placeholder="e.g., Sharma Family, Patel Parivar" required style={{...inp,marginBottom:14}}/>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:20 }}>
                <div>
                  <label style={lbl}>Religion</label>
                  <select value={createForm.religion} onChange={e=>setCreateForm(f=>({...f,religion:e.target.value}))} style={inp}>
                    {["Hindu","Sikh","Muslim","Christian","Jain","Buddhist","Other"].map(r=><option key={r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label style={lbl}>Region</label>
                  <select value={createForm.region} onChange={e=>setCreateForm(f=>({...f,region:e.target.value}))} style={inp}>
                    {["Chandigarh","North India","South India","Punjab","Gujarat","Maharashtra","Tamil Nadu","Abroad","Other"].map(r=><option key={r}>{r}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ display:"flex", gap:10 }}>
                <button type="button" onClick={()=>setModal(null)} style={{ flex:1, padding:"11px", border:`1px solid ${C.border}`, borderRadius:10, fontSize:13, cursor:"pointer", color:C.gray, background:C.white, fontFamily:F.sans }}>Cancel</button>
                <button type="submit" disabled={creating} style={{ flex:1, padding:"11px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, border:"none", borderRadius:10, fontSize:13, fontWeight:600, cursor:"pointer", color:"#fff", fontFamily:F.sans, opacity:creating?0.7:1 }}>
                  {creating?"Creating…":"Create Space 🪔"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Join modal */}
      {modal === "join" && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div style={{ background:C.white, borderRadius:20, padding:"28px 24px", width:"100%", maxWidth:400, position:"relative" }}>
            <button onClick={()=>setModal(null)} style={{ position:"absolute", top:14, right:14, background:"none", border:"none", cursor:"pointer", color:C.gray, display:"flex" }}><X size={20}/></button>
            <h2 style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Join a Family Space</h2>
            <p style={{ fontSize:13, color:C.gray, marginBottom:20 }}>Enter the invite code shared by a family member.</p>
            <form onSubmit={handleJoin}>
              <label style={lbl}>Invite Code</label>
              <input value={joinCode} onChange={e=>setJoinCode(e.target.value.toUpperCase())} placeholder="e.g. SHARM-X4K2"
                style={{...inp, letterSpacing:3, fontSize:18, textAlign:"center", marginBottom:20, fontFamily:"monospace"}}/>
              <div style={{ display:"flex", gap:10 }}>
                <button type="button" onClick={()=>setModal(null)} style={{ flex:1, padding:"11px", border:`1px solid ${C.border}`, borderRadius:10, fontSize:13, cursor:"pointer", color:C.gray, background:C.white, fontFamily:F.sans }}>Cancel</button>
                <button type="submit" disabled={joining} style={{ flex:1, padding:"11px", background:C.forest, border:"none", borderRadius:10, fontSize:13, fontWeight:600, cursor:"pointer", color:"#fff", fontFamily:F.sans, opacity:joining?0.7:1 }}>
                  {joining?"Joining…":"Join Family →"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleteConfirm && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div style={{ background:C.white, borderRadius:16, padding:28, maxWidth:340, width:"100%" }}>
            <h3 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Remove this family space?</h3>
            <p style={{ fontSize:13, color:C.gray, marginBottom:24 }}>All members, rituals and memories in this space will be removed from your device.</p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={()=>setDeleteConfirm(null)} style={{ flex:1, padding:"11px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:13, cursor:"pointer", color:C.gray, background:C.white, fontFamily:F.sans }}>Cancel</button>
              <button onClick={()=>confirmDelete(deleteConfirm)} style={{ flex:1, padding:"11px", background:"#DC2626", border:"none", borderRadius:9, fontSize:13, fontWeight:600, cursor:"pointer", color:"#fff", fontFamily:F.sans }}>Remove</button>
            </div>
          </div>
        </div>
      )}

      {/* Leave confirm */}
      {leaveConfirm && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div style={{ background:C.white, borderRadius:16, padding:28, maxWidth:340, width:"100%" }}>
            <h3 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Leave this family space?</h3>
            <p style={{ fontSize:13, color:C.gray, marginBottom:24 }}>You will be removed from this space and the admin will be notified. You can rejoin with the invite code.</p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={()=>setLeaveConfirm(null)} style={{ flex:1, padding:"11px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:13, cursor:"pointer", color:C.gray, background:C.white, fontFamily:F.sans }}>Cancel</button>
              <button onClick={()=>leaveFamily(leaveConfirm)} style={{ flex:1, padding:"11px", background:"#DC2626", border:"none", borderRadius:9, fontSize:13, fontWeight:600, cursor:"pointer", color:"#fff", fontFamily:F.sans }}>Leave Space</button>
            </div>
          </div>
        </div>
      )}

      <div style={{ padding:"24px 20px", maxWidth:720, margin:"0 auto" }}>
        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20, flexWrap:"wrap", gap:10 }}>
          <div>
            <h1 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, margin:0 }}>Family Spaces</h1>
            <p style={{ fontSize:13, color:C.gray, marginTop:3 }}>{current} of {isPro?"unlimited":`${limit} (free plan)`} spaces</p>
          </div>
          <div style={{ display:"flex", gap:8 }}>
            <button onClick={()=>setModal("join")}
              style={{ display:"flex", alignItems:"center", gap:5, background:C.forestLight, color:C.forest, border:`1px solid rgba(26,92,66,0.2)`, borderRadius:9, padding:"8px 14px", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:F.sans }}>
              <LogIn size={13}/> Join Space
            </button>
            {allowed ? (
              <button onClick={()=>setModal("create")}
                style={{ display:"flex", alignItems:"center", gap:5, background:C.saffron, color:"#fff", border:"none", borderRadius:9, padding:"8px 14px", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:F.sans }}>
                <Plus size={13}/> Create Space
              </button>
            ) : (
              <Link href="/upgrade"
                style={{ display:"flex", alignItems:"center", gap:5, background:C.goldLight, color:C.gold, border:`1px solid rgba(184,146,42,0.3)`, borderRadius:9, padding:"8px 14px", fontSize:12, fontWeight:600, textDecoration:"none" }}>
                <Crown size={13}/> Upgrade for more
              </Link>
            )}
          </div>
        </div>

        {/* Free plan notice */}
        {!isPro && (
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.15)`, borderRadius:12, padding:"12px 16px", marginBottom:16, display:"flex", alignItems:"center", justifyContent:"space-between", gap:10, flexWrap:"wrap" }}>
            <p style={{ fontSize:13, color:C.saffron, margin:0 }}>Free plan: {current}/{limit} family spaces used</p>
            {!allowed && <Link href="/upgrade" style={{ fontSize:12, fontWeight:600, color:C.saffron, textDecoration:"none" }}>Upgrade to Pro for unlimited →</Link>}
          </div>
        )}

        {/* Empty state */}
        {families.length === 0 && (
          <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:"48px 24px", textAlign:"center" }}>
            <div style={{ fontSize:48, marginBottom:12 }}>👨‍👩‍👧‍👦</div>
            <h2 style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:8 }}>No family spaces yet</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:24 }}>Create your first family space or join one with an invite code.</p>
            <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}>
              <button onClick={()=>setModal("create")} style={{ display:"inline-flex", alignItems:"center", gap:6, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:10, padding:"11px 22px", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:F.sans }}>
                <Plus size={14}/> Create Space
              </button>
              <button onClick={()=>setModal("join")} style={{ display:"inline-flex", alignItems:"center", gap:6, background:C.forestLight, color:C.forest, border:`1px solid rgba(26,92,66,0.2)`, borderRadius:10, padding:"11px 22px", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:F.sans }}>
                <LogIn size={14}/> Join with Code
              </button>
            </div>
          </div>
        )}

        {/* Family spaces list */}
        {families.length > 0 && (
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {families.map(f => {
              const isActive = f.id === activeId;
              const inviteLink = getInviteLink(f);
              return (
                <div key={f.id} style={{ background:C.white, borderRadius:16, border:`2px solid ${isActive?C.saffron:C.border}`, overflow:"hidden" }}>
                  {/* Top bar */}
                  <div style={{ padding:"16px 20px", display:"flex", alignItems:"center", gap:14 }}>
                    {/* Avatar */}
                    <div style={{ width:48, height:48, borderRadius:12, background:isActive?"linear-gradient(135deg,#C8541A,#B8922A)":C.saffronLight, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, fontWeight:700, color:isActive?"#fff":C.saffron, flexShrink:0, fontFamily:F.serif }}>
                      {f.name.charAt(0)}
                    </div>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                        <p style={{ fontSize:15, fontWeight:600, color:C.charcoal, margin:0 }}>{f.name}</p>
                        {isActive && <span style={{ fontSize:10, fontWeight:700, background:C.saffron, color:"#fff", padding:"2px 8px", borderRadius:20 }}>ACTIVE</span>}
                        <span style={{ fontSize:10, fontWeight:600, background:f.role==="Admin"?C.saffronLight:C.forestLight, color:f.role==="Admin"?C.saffron:C.forest, padding:"2px 8px", borderRadius:20 }}>{f.role}</span>
                      </div>
                      <p style={{ fontSize:12, color:C.gray, margin:"3px 0 0" }}>{f.religion} · {f.region} · Code: <span style={{ fontFamily:"monospace", fontWeight:600, color:C.charcoal }}>{f.inviteCode}</span></p>
                    </div>
                    {/* Actions */}
                    <div style={{ display:"flex", gap:6, flexShrink:0 }}>
                      {!isActive && (
                        <button onClick={()=>switchFamily(f.id)}
                          style={{ padding:"7px 14px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:8, fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:F.sans }}>
                          Switch
                        </button>
                      )}
                      {f.role === "Admin" && (
                        <Link href="/family-settings"
                          style={{ padding:"7px 10px", background:C.ivory, border:`1px solid ${C.border}`, borderRadius:8, fontSize:12, color:C.gray, textDecoration:"none", display:"flex", alignItems:"center" }}>
                          <Settings size={13}/>
                        </Link>
                      )}
                      {f.role === "Admin" ? (
                        <button onClick={()=>setDeleteConfirm(f.id)}
                          title="Delete family space"
                          style={{ padding:"7px 10px", background:"#FEF2F2", border:"1px solid rgba(220,38,38,0.15)", borderRadius:8, cursor:"pointer", display:"flex", alignItems:"center", color:"#DC2626" }}>
                          <Trash2 size={13}/>
                        </button>
                      ) : (
                        <button onClick={()=>setLeaveConfirm(f.id)}
                          title="Leave family space"
                          style={{ padding:"7px 12px", background:"#FEF2F2", border:"1px solid rgba(220,38,38,0.15)", borderRadius:8, cursor:"pointer", display:"flex", alignItems:"center", gap:5, color:"#DC2626", fontSize:11, fontWeight:600, fontFamily:F.sans }}>
                          <LogOut size={12}/> Leave
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Invite section */}
                  <div style={{ padding:"12px 20px", borderTop:`1px solid ${C.border}`, background:C.ivory, display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
                    <Users size={13} color={C.gray}/>
                    <span style={{ fontSize:12, color:C.gray, flex:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", fontFamily:"monospace" }}>
                      {inviteLink}
                    </span>
                    <button onClick={()=>copyInvite(f)}
                      style={{ display:"flex", alignItems:"center", gap:5, background:copiedId===f.id?C.forest:C.saffron, color:"#fff", border:"none", borderRadius:7, padding:"6px 12px", fontSize:11, fontWeight:600, cursor:"pointer", fontFamily:F.sans, flexShrink:0, transition:"background 0.2s" }}>
                      {copiedId===f.id?<><Check size={11}/> Copied!</>:<><Copy size={11}/> Copy Invite</>}
                    </button>
                    {/* WhatsApp share */}
                    <button onClick={()=>window.open(`https://wa.me/?text=${encodeURIComponent(`Join our family space "${f.name}" on Parampara 🪔 ${inviteLink}`)}`, "_blank")}
                      style={{ display:"flex", alignItems:"center", gap:5, background:"#25D366", color:"#fff", border:"none", borderRadius:7, padding:"6px 12px", fontSize:11, fontWeight:600, cursor:"pointer", fontFamily:F.sans, flexShrink:0 }}>
                      💬 WhatsApp
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Info */}
        <div style={{ background:C.white, borderRadius:12, border:`1px solid ${C.border}`, padding:16, marginTop:16 }}>
          <p style={{ fontSize:12, fontWeight:600, color:C.charcoal, marginBottom:10 }}>HOW FAMILY SPACES WORK</p>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {[
              ["🪔","Each space is completely separate — rituals, members and memories don't mix between spaces"],
              ["🔗","Share the invite link or code with family members to add them to your space"],
              ["👑","The person who creates the space is the Admin — they can invite and manage members"],
              ["🔄","Switch between spaces anytime from this page"],
              ["🆓","Free plan: up to 2 spaces · Pro plan: unlimited spaces"],
            ].map(([icon,text])=>(
              <div key={text} style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
                <span style={{ fontSize:14, flexShrink:0 }}>{icon}</span>
                <span style={{ fontSize:12, color:C.gray, lineHeight:1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
