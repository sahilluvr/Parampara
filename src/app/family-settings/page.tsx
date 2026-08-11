"use client";
import { useState, useEffect, useRef } from "react";
import AppShell from "@/components/layout/AppShell";
import { useRouter } from "next/navigation";
import { Camera, Save, Check, Copy } from "lucide-react";
import toast from "react-hot-toast";
import { getActiveFamily, getInviteLink } from "@/lib/families";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", forest:"#1A5C42", forestLight:"#E8F4EE", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff", gold:"#B8922A" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };
const inp = { width:"100%", padding:"11px 14px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:14, fontFamily:F.sans, background:C.ivory, color:C.charcoal, outline:"none", boxSizing:"border-box" as const };
const label = { fontSize:12, fontWeight:600 as const, color:C.charcoal, display:"block" as const, marginBottom:6 };

export default function FamilySettingsPage() {
  const router = useRouter();
  const photoRef = useRef<HTMLInputElement>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [inviteLink, setInviteLink] = useState("https://www.ourparampara.com/join");
  const [inviteCode, setInviteCode] = useState("");
  const [form, setForm] = useState({
    familyName: "",
    religion: "Hindu",
    region: "Chandigarh",
    language: "Hindi",
    established: "",
    description: "",
  });
  const [familyPhoto, setFamilyPhoto] = useState<string | null>(null);

  useEffect(() => {
    try {
      const fn = localStorage.getItem("parampara_family_name") || "";
      const fs = localStorage.getItem("parampara_family_settings");
      const fp = localStorage.getItem("parampara_family_photo");
      if (fn) setForm(f => ({ ...f, familyName: fn }));
      if (fs) setForm(f => ({ ...f, ...JSON.parse(fs) }));
      if (fp) setFamilyPhoto(fp);
      // Load real invite code from active family
      let active = getActiveFamily();
      if (!active) {
        import("@/lib/families").then(({ backfillFamilySpace }) => {
          backfillFamilySpace().then(backfilled => {
            if (backfilled) {
              setInviteCode(backfilled.inviteCode);
              setInviteLink(getInviteLink(backfilled));
            }
          });
        });
      } else {
        setInviteCode(active.inviteCode);
        setInviteLink(getInviteLink(active));
      }
    } catch {}
  }, []);

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { toast.error("Photo must be under 5MB"); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setFamilyPhoto(result);
      localStorage.setItem("parampara_family_photo", result);
      toast.success("Family photo updated! 📸");
    };
    reader.readAsDataURL(file);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!form.familyName.trim()) return toast.error("Family name is required");
    setSaving(true);
    await new Promise(r => setTimeout(r, 700));
    localStorage.setItem("parampara_family_name", form.familyName.trim());
    localStorage.setItem("parampara_family_settings", JSON.stringify({
      religion: form.religion,
      region: form.region,
      language: form.language,
      established: form.established,
      description: form.description,
    }));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
    toast.success("Family space updated! 🏠");
  }

  return (
    <AppShell>
      <div style={{ padding:"24px", maxWidth:680, margin:"0 auto" }}>
        <div style={{ marginBottom:28 }}>
          <h1 style={{ fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, margin:0 }}>Family Settings</h1>
          <p style={{ fontSize:13, color:C.gray, marginTop:4 }}>Manage your family space, photo, and details</p>
        </div>

        <form onSubmit={handleSave}>

          {/* Family Photo */}
          <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:24, marginBottom:16 }}>
            <h2 style={{ fontFamily:F.serif, fontSize:15, fontWeight:600, color:C.charcoal, margin:"0 0 20px" }}>Family Photo</h2>
            <div style={{ display:"flex", alignItems:"center", gap:20 }}>
              <div style={{ position:"relative", flexShrink:0 }}>
                <div style={{ width:100, height:100, borderRadius:16, background:familyPhoto?"transparent":C.saffronLight, border:`2px solid ${C.border}`, overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  {familyPhoto
                    ? <img src={familyPhoto} alt="Family" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
                    : <span style={{ fontSize:36 }}>👨‍👩‍👧‍👦</span>
                  }
                </div>
                <button type="button" onClick={() => photoRef.current?.click()}
                  style={{ position:"absolute", bottom:-6, right:-6, width:28, height:28, borderRadius:"50%", background:C.saffron, border:"2px solid #fff", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
                  <Camera size={13} color="#fff"/>
                </button>
                <input ref={photoRef} type="file" accept="image/*" onChange={handlePhotoChange} style={{ display:"none" }}/>
              </div>
              <div>
                <p style={{ fontSize:14, fontWeight:500, color:C.charcoal, margin:0, marginBottom:4 }}>Upload a family photo</p>
                <p style={{ fontSize:12, color:C.gray, margin:0, lineHeight:1.6 }}>This appears in your family space and sidebar. JPG, PNG — max 5MB.</p>
                <button type="button" onClick={() => photoRef.current?.click()}
                  style={{ marginTop:10, display:"inline-flex", alignItems:"center", gap:6, background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:8, padding:"7px 14px", fontSize:12, fontWeight:500, color:C.saffron, cursor:"pointer", fontFamily:F.sans }}>
                  <Camera size={13}/> {familyPhoto ? "Change photo" : "Add photo"}
                </button>
              </div>
            </div>
          </div>

          {/* Basic info */}
          <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:24, marginBottom:16 }}>
            <h2 style={{ fontFamily:F.serif, fontSize:15, fontWeight:600, color:C.charcoal, margin:"0 0 20px" }}>Family Details</h2>

            <label style={label}>Family name *</label>
            <input value={form.familyName} onChange={e => setForm(f=>({...f,familyName:e.target.value}))} placeholder="e.g., Sharma Family, Patel Parivar" required style={{...inp, marginBottom:16}}/>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:16 }}>
              <div>
                <label style={label}>Religion / Dharma</label>
                <select value={form.religion} onChange={e => setForm(f=>({...f,religion:e.target.value}))} style={inp}>
                  {["Hindu","Sikh","Muslim","Christian","Jain","Buddhist","Other"].map(r=><option key={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label style={label}>Home region</label>
                <select value={form.region} onChange={e => setForm(f=>({...f,region:e.target.value}))} style={inp}>
                  {["Chandigarh","North India","South India","East India","West India","Bengal","Punjab","Gujarat","Maharashtra","Tamil Nadu","Kerala","Rajasthan","Pan India","Diaspora / Abroad","Other"].map(r=><option key={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label style={label}>Primary language</label>
                <select value={form.language} onChange={e => setForm(f=>({...f,language:e.target.value}))} style={inp}>
                  {["Hindi","Punjabi","English","Tamil","Telugu","Bengali","Gujarati","Marathi","Kannada","Malayalam","Other"].map(r=><option key={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label style={label}>Family established (year)</label>
                <input type="number" value={form.established} onChange={e => setForm(f=>({...f,established:e.target.value}))} placeholder="e.g., 1975" min={1800} max={2030} style={inp}/>
              </div>
            </div>

            <label style={label}>Family description (optional)</label>
            <textarea value={form.description} onChange={e => setForm(f=>({...f,description:e.target.value}))} placeholder="A short description of your family, roots, and traditions…" rows={3} style={{...inp, resize:"vertical"}}/>
          </div>

          {/* Invite code */}
          <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:24, marginBottom:16 }}>
            <h2 style={{ fontFamily:F.serif, fontSize:15, fontWeight:600, color:C.charcoal, margin:"0 0 6px" }}>Invite Link</h2>
            <p style={{ fontSize:12, color:C.gray, marginBottom:14 }}>Share this link with family members to invite them to your space.</p>
            <div style={{ display:"flex", alignItems:"center", gap:10, background:C.ivory, borderRadius:9, border:`1px solid ${C.border}`, padding:"10px 14px" }}>
              <span style={{ flex:1, fontSize:12, color:C.charcoal, fontFamily:"monospace", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{inviteLink}</span>
              <button type="button" onClick={() => { navigator.clipboard?.writeText(inviteLink).then(() => toast.success("Invite link copied! 🔗")).catch(()=>{}); }}
                style={{ background:C.saffron, color:"#fff", border:"none", borderRadius:7, padding:"6px 12px", fontSize:11, fontWeight:600, cursor:"pointer", fontFamily:F.sans, flexShrink:0 }}>
                Copy
              </button>
            </div>
          </div>

          {/* Save button */}
          <button type="submit" disabled={saving}
            style={{ width:"100%", background:saved?"#1A5C42":`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:12, padding:"14px", fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:F.sans, display:"flex", alignItems:"center", justifyContent:"center", gap:8, transition:"background 0.3s" }}>
            {saving ? "Saving…" : saved ? <><Check size={16}/> Saved!</> : <><Save size={16}/> Save Changes</>}
          </button>
        </form>
      </div>
    </AppShell>
  );
}
