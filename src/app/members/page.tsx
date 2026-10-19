"use client";
import { useState, useEffect, useRef } from "react";
import { getActiveFamily, getInviteLink, migrateLegacyData, backfillFamilySpace, isRealFamilyId, canShareInvite } from "@/lib/families";
import { notifyMemberAdded } from "@/lib/notifications";
import { fullSync } from "@/lib/autoSync";
import { useMembers, deleteMemberFromDB, getCurrentUser } from "@/lib/useData";
import AppShell from "@/components/layout/AppShell";
import VoiceInput from "@/components/ui/VoiceInput";
import { type FamilyMember } from "@/lib/store";
import { RELATION_TILES, canonRelation } from "@/lib/autoTree";
import { announceMilestone } from "@/components/billing/UpgradeNudge";
import { Copy, UserPlus, X, Check, Trash2, GitBranch, Camera, Settings, Pencil, Gift } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

const C = { saffron:"#D6246E", saffronLight:"#FCE8F0", border:"rgba(122,63,217,0.15)", forest:"#0F7A73", forestLight:"#E3F4F2", gold:"#7A3FD9", goldLight:"#FFF4DC", ivory:"#F8F6FC", charcoal:"#1C1733", gray:"#625C7A", white:"#fff" };
const F = { serif:"'Bricolage Grotesque',system-ui,sans-serif", sans:"'Inter',system-ui,sans-serif" };
const ROLE_STYLE: Record<string,{bg:string;color:string}> = {
  Admin:{bg:"#FCE8F0",color:"#D6246E"}, Elder:{bg:"#FFFBEB",color:"#B45309"},
  Parent:{bg:"#E3F4F2",color:"#0F7A73"}, Contributor:{bg:"#EFF6FF",color:"#1D4ED8"},
  Viewer:{bg:"#F4F4F5",color:"#625C7A"},
};
const RELATIONS = ["Self","Father","Mother","Son","Daughter","Husband","Wife","Brother","Sister","Grandfather","Grandmother","Grandson","Granddaughter","Father-in-law","Mother-in-law","Son-in-law","Daughter-in-law","Brother-in-law","Sister-in-law","Uncle","Aunt","Cousin","Friend","Papa","Maa","Dada","Dadi","Nana","Nani","Bhai","Didi","Beta","Beti","Chacha","Chachi","Bua","Fufa","Mama","Maami","Maasi","Masad","Other"];
const inp: React.CSSProperties = { width:"100%", padding:"10px 13px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:13, fontFamily:F.sans, background:C.ivory, color:C.charcoal, outline:"none", boxSizing:"border-box" };
const lbl: React.CSSProperties = { fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 };

type MemberWithPhoto = FamilyMember & { photoUrl?: string };
type MemberForm = {
  name:string; relation:string; customRelation:string; role:string; religion:string; region:string;
  email:string; birthdate:string; anniversary:string;
  // Family Tree — tree relationships. Two separate parent slots in the
  // form (rather than one multi-select) because in practice a person has
  // at most two parents and a simple pair of dropdowns is far less
  // confusing on mobile than a searchable multi-select would be.
  parentId1:string; parentId2:string; spouseId:string; deceased:boolean;
};
const EMPTY_FORM: MemberForm = { name:"", relation:"", customRelation:"", role:"Contributor", religion:"Hindu", region:"Chandigarh", email:"", birthdate:"", anniversary:"", parentId1:"", parentId2:"", spouseId:"", deceased:false };

function getDaysUntilDate(dateStr?: string): number|null {
  if (!dateStr) return null;
  const today = new Date(); today.setHours(0,0,0,0);
  const d = new Date(dateStr);
  const next = new Date(today.getFullYear(), d.getMonth(), d.getDate());
  if (next < today) next.setFullYear(today.getFullYear()+1);
  return Math.ceil((next.getTime()-today.getTime())/(1000*60*60*24));
}

function getAge(dateStr?: string): number|null {
  if (!dateStr) return null;
  const today = new Date(); const d = new Date(dateStr);
  let age = today.getFullYear()-d.getFullYear();
  if (today.getMonth()<d.getMonth()||(today.getMonth()===d.getMonth()&&today.getDate()<d.getDate())) age--;
  return age;
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-IN",{day:"numeric",month:"short"});
}

// Family-space-aware storage keys
function getStorageKeys(familyId: string) {
  return {
    members: `parampara_members_${familyId}`,
    familyName: "parampara_family_name",
    familyPhoto: `parampara_family_photo_${familyId}`,
  };
}

export default function MembersPage() {
  const [members, setMembers] = useState<MemberWithPhoto[]>([]);
  const [familyName, setFamilyName] = useState("Your Family");
  const [familyPhoto, setFamilyPhoto] = useState<string|null>(null);
  const [showInvite, setShowInvite] = useState(false);
  const [activeFamilyId, setActiveFamilyId] = useState<string|null>(null);
  const [noFamily, setNoFamily] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string|null>(null);
  const [saving, setSaving] = useState(false);
  const [currentUserRole, setCurrentUserRole] = useState<"Admin"|"Member">("Member");
  const [currentUserId, setCurrentUserId] = useState<string>("");
  const [showBirthdays, setShowBirthdays] = useState(false);
  const [copied, setCopied] = useState(false);
  const [deleteId, setDeleteId] = useState<string|null>(null);
  const [showOtherRelation, setShowOtherRelation] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string|null>(null);
  const photoRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<MemberForm>(EMPTY_FORM);
  // Simple add flow: 1) "Who are you adding?" tiles → 2) name & a few details
  const [step, setStep] = useState<"who" | "details">("who");
  const [relOf, setRelOf] = useState<{ id: string; rel: string } | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [contactSupported, setContactSupported] = useState(false);
  const membersRef = useRef<MemberWithPhoto[]>([]);
  function u<K extends keyof MemberForm>(k: K, v: MemberForm[K]) { setForm(f=>({...f,[k]:v})); }

  useEffect(() => {
    migrateLegacyData();
    let active = getActiveFamily();
    if (!active) {
      // Existing user from before family-spaces existed — backfill from Supabase
      backfillFamilySpace().then(backfilled => {
        if (backfilled) {
          setCurrentUserRole((backfilled.role as "Admin"|"Member") || "Member");
          setActiveFamilyId(backfilled.id);
        }
      });
    }
    // Track current user role for permission checks
    setCurrentUserRole((active?.role as "Admin"|"Member") || "Member");
    const userId = localStorage.getItem("parampara_user_id") || localStorage.getItem("parampara_user_email") || "";
    setCurrentUserId(userId);
    const fid = active?.id || "default";
    const keys = getStorageKeys(fid);
    setActiveFamilyId(fid);
    // Skip cloud pull if locally modified (handles deletions)
    // Flag stores either: Date.now() (recent edit) or Date.now()+30min (deletion)
    const localModified = localStorage.getItem("parampara_members_local_modified");
    const skipCloudPull = !!localModified && parseInt(localModified) > Date.now();
    // ↑ true only while a local write is still being pushed (short guard)

    if (skipCloudPull) {
      // Just push local to cloud, don't pull
      import("@/lib/autoSync").then(({ autoSyncToCloud }) => autoSyncToCloud());
    } else {
      fullSync(fid).then(() => {
        // Legacy keys only when no real family is active — otherwise another
        // family's members were copied into this one.
        const possibleKeys = isRealFamilyId(fid)
          ? [keys.members]
          : [keys.members, `parampara_members_default`, `parampara_members_family-default`, `parampara_members`];
        for (const k of possibleKeys) {
          const raw2 = localStorage.getItem(k);
          if (raw2 && raw2 !== "[]") {
            try {
              const parsed = JSON.parse(raw2);
              if (parsed.length > 0) {
                setMembers(parsed);
                localStorage.setItem(keys.members, raw2);
                break;
              }
            } catch {}
          }
        }
      });
    }
    try {
      const s = localStorage.getItem(keys.members);
      const fn = localStorage.getItem(keys.familyName) || active?.name;
      const fp = localStorage.getItem(keys.familyPhoto);
      if (s) setMembers(JSON.parse(s));
      if (fn) setFamilyName(fn);
      if (fp) setFamilyPhoto(fp);
    } catch {}
  }, []);

  // Birthday & anniversary toasts on load
  useEffect(() => {
    if (!members.length) return;
    members.forEach(m => {
      const bd = getDaysUntilDate(m.birthdate);
      const an = getDaysUntilDate(m.anniversary);
      if (bd === 0) toast(`🎂 Today is ${m.name}'s birthday!`, { duration:8000, icon:"🎂" });
      else if (bd !== null && bd <= 3) toast(`🎂 ${m.name}'s birthday in ${bd} days`, { duration:5000 });
      if (an === 0) toast(`💍 Today is ${m.name}'s wedding anniversary!`, { duration:8000, icon:"💍" });
      else if (an !== null && an <= 3) toast(`💍 ${m.name}'s anniversary in ${an} days`, { duration:5000 });
    });
  }, [members]);

  function persist(updated: MemberWithPhoto[], changedMember?: MemberWithPhoto, previousName?: string) {
    setMembers(updated);
    // Write to multiple keys so all pages find the data
    const key = getStorageKeys(activeFamilyId || "default").members;
    const json = JSON.stringify(updated);
    try {
      localStorage.setItem(key, json);
      // Short guard so a cloud pull can't overwrite this change before the
      // Supabase write below lands. It used to be 24 HOURS — which meant
      // anyone who joined via invite didn't show up for the admin for a day.
      localStorage.setItem("parampara_members_local_modified", String(Date.now() + 60 * 1000));
      window.dispatchEvent(new StorageEvent("storage", { key }));
    // Also fire custom event with count for dashboard
    window.dispatchEvent(new CustomEvent("parampara_members_changed", { detail: { count: updated.length } }));
    } catch (e) {
      // Storage quota — try without photos
      const slim = updated.map(m => ({ ...m, photoUrl: undefined }));
      localStorage.setItem(key, JSON.stringify(slim));
      console.warn("Storage quota hit — photos not saved");
    }
    // Push the add/edit to Supabase so it survives the next cloud sync
    if (changedMember) syncMemberToCloud(changedMember, previousName, updated);
  }

  // ── Resolve local member id -> Supabase row id ──────────────────
  // The parent/spouse pickers in the form work off `members` (the local,
  // already-loaded list), storing whatever `id` those members currently
  // have. For members synced before this feature existed, or added in the
  // same session before their own cloud sync completes, that local id can
  // differ from the UUID Supabase assigns. We look the referenced member
  // up by name (the same key the upsert itself uses) to find their real
  // Supabase row id, so tree links don't silently point at nothing.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function resolveTreeId(sb: any, famId: string, localId: string | undefined, allMembers: MemberWithPhoto[]): Promise<string | null> {
    if (!localId) return null;
    const referenced = allMembers.find(m => m.id === localId);
    if (!referenced) return null;
    const { data } = await sb.from("family_members").select("id").eq("family_id", famId).eq("name", referenced.name).maybeSingle();
    return data?.id || null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function resolveTreeIds(sb: any, famId: string, localIds: string[] | undefined, allMembers: MemberWithPhoto[]): Promise<string[]> {
    if (!localIds || !localIds.length) return [];
    const resolved = await Promise.all(localIds.map(id => resolveTreeId(sb, famId, id, allMembers)));
    return resolved.filter((id): id is string => !!id);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function resolveCloudFamilyId(sb: any, userId: string): Promise<string | null> {
    const fid = getActiveFamily()?.id || activeFamilyId;
    if (isRealFamilyId(fid)) return fid;
    // Legacy (pre family-spaces) users only
    const { data: mRow } = await sb.from("family_members").select("family_id").eq("user_id", userId).limit(1).maybeSingle();
    if (mRow?.family_id) return mRow.family_id;
    const { data: fRow } = await sb.from("families").select("id").eq("created_by", userId).limit(1).maybeSingle();
    return fRow?.id || null;
  }

  async function syncMemberToCloud(member: MemberWithPhoto, previousName?: string, list?: MemberWithPhoto[]) {
    try {
      const user = await getCurrentUser();
      if (!user) return;
      const { createBrowserClient } = await import("@supabase/ssr");
      const sb = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );
      // The ACTIVE family — previously the user's first family, so adding a
      // relative while viewing family B saved them into family A.
      const famId = await resolveCloudFamilyId(sb, user.id);
      if (!famId) return;

      // If the member's name changed, remove the old row first so we don't
      // end up with a duplicate (onConflict is keyed on family_id + name)
      if (previousName && previousName !== member.name) {
        await sb.from("family_members").delete().eq("family_id", famId).eq("name", previousName);
      }

      const { error: upsertError } = await sb.from("family_members").upsert({
        family_id: famId,
        name: member.name,
        role: member.role || "Contributor",
        relation: member.relation || null,
        religion: member.religion || "Hindu",
        region: member.region || "Chandigarh",
        email: member.email || null,
        birthdate: member.birthdate || null,
        anniversary: member.anniversary || null,
        photo_url: member.photoUrl || null,
        // Family Tree tree fields. parentIds/spouseId on the client refer
        // to other members' local `id` values — but Supabase's primary key
        // is a UUID generated server-side, which may differ from the local
        // id for members created before cloud sync existed. We resolve
        // local id -> Supabase row id by name lookup here so links don't
        // silently break for older data; see resolveTreeIds() below.
        parent_ids: await resolveTreeIds(sb, famId, member.parentIds, list || members),
        spouse_id: member.spouseId ? await resolveTreeId(sb, famId, member.spouseId, list || members) : null,
        deceased: !!member.deceased,
      }, { onConflict: "family_id,name" });

      // This previously failed silently (caught below, only console.warn)
      // if the family_id+name unique constraint was missing in the
      // database — the exact bug that caused members to "save" locally
      // but never actually appear in Supabase, breaking Family Tree and
      // multi-device sync. Now surfaced to the user so a real failure is
      // never invisible again. See supabase/migrations/002_fix_member_sync_constraint.sql.
      if (upsertError) {
        console.error("syncMemberToCloud upsert failed:", upsertError);
        toast.error(`${member.name} saved on this device, but cloud sync failed. They may not appear for other family members yet.`, { duration: 6000 });
      } else {
        localStorage.removeItem("parampara_members_local_modified");
      }
    } catch (e) {
      console.warn("syncMemberToCloud failed:", e);
      toast.error(`${member.name} saved on this device, but cloud sync failed. Please check your connection and try again.`, { duration: 6000 });
    }
  }

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = ""; // reset so same file can be re-selected
    if (file.size > 10*1024*1024) { toast.error("Photo must be under 10MB"); return; }
    toast.loading("Loading photo…", { id:"photo-load" });
    const img = new window.Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      // Compress to max 400x400 for mobile storage efficiency
      const canvas = document.createElement("canvas");
      const MAX = 400;
      let w = img.width, h = img.height;
      if (w > h) { if (w > MAX) { h = h * MAX / w; w = MAX; } }
      else { if (h > MAX) { w = w * MAX / h; h = MAX; } }
      canvas.width = Math.round(w);
      canvas.height = Math.round(h);
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
      const compressed = canvas.toDataURL("image/jpeg", 0.75);
      URL.revokeObjectURL(objectUrl);
      setPhotoPreview(compressed);
      toast.success("Photo added ✅", { id:"photo-load" });
    };
    img.onerror = () => { URL.revokeObjectURL(objectUrl); toast.error("Failed to load photo", { id:"photo-load" }); };
    img.src = objectUrl;
  }

  function openAdd(preset?: string, ofId?: string) {
    setEditId(null);
    const known = preset && RELATIONS.includes(preset);
    setForm({ ...EMPTY_FORM, relation: preset ? (known ? preset : "Other") : "", customRelation: preset && !known ? preset : "",
      name: preset === "Self" ? (localStorage.getItem("parampara_user_name") || "") : "" });
    setShowOtherRelation(!!preset && !known);
    setRelOf(ofId ? { id: ofId, rel: preset || "" } : null);
    setStep(preset ? "details" : "who");
    setShowMore(false);
    setPhotoPreview(null);
    setShowForm(true);
  }

  function chooseRelation(rel: string) {
    const known = RELATIONS.includes(rel);
    setForm(f => ({ ...f, relation: known ? rel : "Other", customRelation: known ? "" : "", name: rel === "Self" && !f.name ? (localStorage.getItem("parampara_user_name") || "") : f.name }));
    setShowOtherRelation(rel === "Other");
    setStep("details");
  }

  // Phone contact picker (Android Chrome) — fills name and email
  async function pickContact() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const nav = navigator as any;
      const [c] = await nav.contacts.select(["name", "email"], { multiple: false });
      if (!c) return;
      setForm(f => ({ ...f, name: f.name || (c.name?.[0] || ""), email: c.email?.[0] || f.email }));
      if (c.email?.[0]) setShowMore(true);
    } catch { /* cancelled */ }
  }

  // Deep links from the tree / dashboard: ?add=Mother, ?add=Son&of=<id>, ?edit=<id>
  membersRef.current = members;
  useEffect(() => {
    setContactSupported(typeof navigator !== "undefined" && "contacts" in navigator && "select" in ((navigator as unknown as { contacts: object }).contacts || {}));
    const sp = new URLSearchParams(window.location.search);
    if (!sp.has("add") && !sp.has("edit")) return;
    const t = setTimeout(() => {
      const editTarget = sp.get("edit");
      if (editTarget) {
        const m = membersRef.current.find(x => x.id === editTarget);
        if (m) openEdit(m); else toast.error("Couldn't find that person — they may have been removed.");
      } else {
        const of = sp.get("of") || undefined;
        openAdd(sp.get("add") || undefined, of && membersRef.current.some(x => x.id === of) ? of : undefined);
      }
      window.history.replaceState(null, "", "/members");
    }, 450);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function openEdit(m: MemberWithPhoto) {
    setEditId(m.id);
    const parentIds = m.parentIds || [];
    setForm({
      name:m.name, relation:RELATIONS.includes(m.relation)?m.relation:"Other", customRelation:RELATIONS.includes(m.relation)?"":m.relation,
      role:m.role, religion:m.religion||"Hindu", region:m.region||"Chandigarh", email:m.email||"",
      birthdate:m.birthdate||"", anniversary:m.anniversary||"",
      parentId1: parentIds[0] || "", parentId2: parentIds[1] || "", spouseId: m.spouseId || "", deceased: !!m.deceased,
    });
    setPhotoPreview(m.photoUrl||null);
    setShowOtherRelation(!RELATIONS.includes(m.relation)||m.relation==="Other");
    setShowForm(true);
  }

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) { toast.error("Name is required"); return; }
    const finalRelation = form.relation==="Other"?(form.customRelation.trim()||"Family Member"):form.relation||"Family Member";
    const initials = form.name.trim().split(" ").map(n=>n[0]).join("").toUpperCase().slice(0,2);
    // Build parentIds from the two parent dropdowns — filter out blanks and
    // accidentally selecting the same person twice.
    const parentIds = [form.parentId1, form.parentId2].filter(Boolean);
    const dedupedParentIds = [...new Set(parentIds)];

    setSaving(true);

    if (editId) {
      const oldMember = members.find(m=>m.id===editId) as MemberWithPhoto;
      const oldName = oldMember?.name;
      const editedMember = {
        ...oldMember,
        name: form.name.trim(),
        relation: finalRelation,
        role: form.role,
        religion: form.religion,
        region: form.region,
        email: form.email.trim()||undefined,
        initials,
        birthdate: form.birthdate||undefined,
        anniversary: form.anniversary||undefined,
        photoUrl: photoPreview||oldMember?.photoUrl||undefined,
        parentIds: dedupedParentIds.length ? dedupedParentIds : undefined,
        spouseId: form.spouseId || undefined,
        deceased: form.deceased || undefined,
      };
      const updated = members.map(m => m.id===editId ? editedMember : m);
      persist(updated, editedMember, oldName);
      toast.success(`${form.name.trim()} updated ✅`);
    } else {
      const member: MemberWithPhoto = {
        id: `member-${Date.now()}`,
        name: form.name.trim(),
        role: form.role,
        relation: finalRelation,
        religion: form.religion,
        region: form.region,
        initials,
        color: members.length%2===0?"saffron":"forest",
        email: form.email.trim()||undefined,
        birthdate: form.birthdate||undefined,
        anniversary: form.anniversary||undefined,
        photoUrl: photoPreview||undefined,
        joinedAt: new Date().toISOString(),
        addedBy: currentUserId,
        parentIds: dedupedParentIds.length ? dedupedParentIds : undefined,
        spouseId: form.spouseId || undefined,
        deceased: form.deceased || undefined,
      };
      // "Add Rohit's son" from the tree → set the links explicitly
      let list: MemberWithPhoto[] = [...members, member];
      const changed: MemberWithPhoto[] = [];
      if (relOf) {
        const target = members.find(x => x.id === relOf.id);
        if (target && canonRelation(target.relation) !== "self") {
          const r = canonRelation(relOf.rel);
          member.relation = `${target.name.split(" ")[0]}'s ${relOf.rel === "Wife" || relOf.rel === "Husband" ? "spouse" : relOf.rel.toLowerCase()}`;
          const upd = (id: string, patch: Partial<MemberWithPhoto>) => {
            list = list.map(x => x.id === id ? { ...x, ...patch } : x);
            const c = list.find(x => x.id === id); if (c) changed.push(c);
          };
          if (r === "father" || r === "mother") {
            const existing = (target.parentIds || []).filter(id => id !== member.id);
            upd(target.id, { parentIds: [...existing, member.id].slice(-2) });
            if (existing[0]) { member.spouseId = existing[0]; upd(existing[0], { spouseId: member.id }); }
          } else if (r === "spouse") {
            member.spouseId = target.id; upd(target.id, { spouseId: member.id });
          } else if (r === "son" || r === "daughter") {
            member.parentIds = [target.id, target.spouseId].filter(Boolean) as string[];
          } else if (r === "brother" || r === "sister") {
            if (target.parentIds?.length) member.parentIds = [...target.parentIds];
          }
          list = list.map(x => x.id === member.id ? member : x);
        }
      }
      persist(list, member);
      announceMilestone();
      if (changed.length) setTimeout(() => changed.forEach(c => syncMemberToCloud(c, undefined, list)), 1500);
      if (form.email.trim()) {
        try { const rec = JSON.parse(localStorage.getItem("parampara_recent_emails") || "[]"); localStorage.setItem("parampara_recent_emails", JSON.stringify([form.email.trim(), ...rec.filter((x: string) => x !== form.email.trim())].slice(0, 30))); } catch { /* ignore */ }
        const active = getActiveFamily();
        const inviteLink = canShareInvite(active) ? getInviteLink(active!) : "https://www.ourparampara.com/join";
        fetch("/api/email", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ type:"family_invite", to:form.email.trim(), inviteeName:member.name, inviterName:(localStorage.getItem("parampara_user_name") || familyName), familyName, role:form.role, inviteLink, inviteCode:active?.inviteCode||"" }) }).catch(()=>{});
      }
      toast.success(`${member.name} added to family! 🎉`);
      const activeF = getActiveFamily();
      notifyMemberAdded(member.name, localStorage.getItem('parampara_user_name')||'Someone', activeF?.id||'default', familyName);
    }

    setTimeout(() => {
      setShowForm(false);
      setEditId(null);
      setPhotoPreview(null);
      setSaving(false);
    }, 400);
  }

  async function deleteMember(id: string) {
    const target = members.find(m => m.id === id);
    if (!target) return;

    const isAdmin = currentUserRole === "Admin";
    const t = target as MemberWithPhoto & { addedBy?: string; userId?: string; user_id?: string };
    const linkedUserId = t.userId || t.user_id;
    if (linkedUserId && linkedUserId === currentUserId) {
      toast.error("To leave this family, use Leave on the Family Spaces page.", { duration: 5000 });
      setDeleteId(null);
      return;
    }
    // Contributors may only remove relatives THEY added (not people with
    // accounts). Previously any member without an addedBy — i.e. everyone
    // loaded from the cloud, including the Admin — could be deleted by anyone.
    const addedByMe = !!t.addedBy && t.addedBy === currentUserId && !linkedUserId;
    const canDelete = isAdmin || addedByMe;

    if (!canDelete) {
      toast.error("Only the Admin can remove this member 🔒", { duration: 4000 });
      setDeleteId(null);
      return;
    }

    setDeleteId(null);

    // 1. Update UI immediately (optimistic)
    const updated = members.filter(m => m.id !== id);
    setMembers(updated);

    // 2. Write to localStorage — set far-future modified flag so cloud pull never overwrites
    const json = JSON.stringify(updated);
    const key = getStorageKeys(activeFamilyId || "default").members;
    localStorage.setItem(key, json);
    localStorage.setItem("parampara_members_local_modified", String(Date.now() + 60 * 1000));

    window.dispatchEvent(new StorageEvent("storage", { key }));
    window.dispatchEvent(new CustomEvent("parampara_members_changed", { detail: { count: updated.length } }));

    // 3. Delete from Supabase — THE CRITICAL STEP
    try {
      // Get the Supabase family ID
      const user = await getCurrentUser();
      if (user) {
        const { createBrowserClient } = await import("@supabase/ssr");
        const sb = createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );
        const famId = await resolveCloudFamilyId(sb, user.id);
        if (famId) {
          // Delete by name from Supabase
          const { error: dbErr } = await sb.from("family_members")
            .delete()
            .eq("family_id", famId)
            .eq("name", target.name);
          if (dbErr) {
            console.error("Supabase delete error:", dbErr);
            toast.error(`Delete error: ${dbErr.message}`);
          } else {
            localStorage.removeItem("parampara_members_local_modified");
            toast.success(`${target.name} removed permanently ✅`);
          }
        } else {
          toast.success("Member removed from this device");
        }
      } else {
        toast.success("Member removed");
      }
    } catch (err) {
      console.error("Delete exception:", err);
      toast.success("Removed locally");
    }
  }

  function copyInvite() {
    const active = getActiveFamily();
    if (!canShareInvite(active)) { toast.error("This family space isn't synced yet — open Family Spaces to finish setting it up."); return; }
    const link = getInviteLink(active!);
    navigator.clipboard?.writeText(link)
      .then(()=>{ setCopied(true); toast.success("Copied! 🔗"); setTimeout(()=>setCopied(false),2500); })
      .catch(()=>toast(link,{icon:"📋",duration:8000}));
  }

  const upcomingEvents = members
    .flatMap(m => {
      const events = [];
      const bd = getDaysUntilDate(m.birthdate);
      const an = getDaysUntilDate(m.anniversary);
      if (bd !== null && bd <= 30) events.push({ member:m, days:bd, type:"birthday" as const });
      if (an !== null && an <= 30) events.push({ member:m, days:an, type:"anniversary" as const });
      return events;
    })
    .sort((a,b)=>a.days-b.days)
    .slice(0,6);

  return (
    <AppShell>
      {/* Delete confirm */}
      {deleteId && (
        <div style={{ position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:24 }}>
          <div style={{ background:C.white,borderRadius:16,padding:28,maxWidth:340,width:"100%" }}>
            <h3 style={{ fontFamily:F.serif,fontSize:18,fontWeight:600,color:C.charcoal,marginBottom:8 }}>Remove member?</h3>
            <p style={{ fontSize:13,color:C.gray,marginBottom:24 }}>They will be removed from your family space.</p>
            <div style={{ display:"flex",gap:10 }}>
              <button onClick={()=>setDeleteId(null)} style={{ flex:1,padding:"11px",border:`1px solid ${C.border}`,borderRadius:9,fontSize:13,cursor:"pointer",color:C.gray,background:C.white,fontFamily:F.sans }}>Cancel</button>
              <button onClick={()=>deleteMember(deleteId)} style={{ flex:1,padding:"11px",background:"#DC2626",border:"none",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",color:"#fff",fontFamily:F.sans }}>Remove</button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit modal */}
      {showForm && (
        <div style={{ position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:16 }}>
          <div style={{ background:C.white,borderRadius:24,padding:"26px 22px",width:"100%",maxWidth:520,position:"relative",maxHeight:"94vh",overflowY:"auto",animation:"mfPop .25s cubic-bezier(.2,.8,.2,1)" }}>
            <style>{`@keyframes mfPop{from{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:none}}`}</style>
            <button onClick={()=>setShowForm(false)} style={{ position:"absolute",top:14,right:14,background:"none",border:"none",cursor:"pointer",color:C.gray,display:"flex" }}><X size={20}/></button>
            {!editId && step === "who" ? (
              <div>
                <h2 className="mf-title">Who are you adding?</h2>
                <p className="mf-sub">Pick how they&apos;re related to you. We&apos;ll place them in the family tree automatically.</p>
                <div className="mf-tiles">
                  {!members.some(m => canonRelation(m.relation) === "self") && (
                    <button type="button" className="mf-tile mf-tile-me" onClick={() => chooseRelation("Self")}><span>🙋</span>Me</button>
                  )}
                  {RELATION_TILES.map(t => (
                    <button key={t.rel} type="button" className="mf-tile" onClick={() => chooseRelation(t.rel)}>
                      <span>{t.emoji}</span>{t.label}{t.hint && <small>{t.hint}</small>}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
            <form onSubmit={submitForm}>
              <div className="mf-head">
                {!editId && <button type="button" className="mf-back" onClick={() => setStep("who")} aria-label="Back">←</button>}
                <h2 className="mf-title" style={{ margin: 0 }}>
                  {editId ? "Edit details"
                    : relOf ? `Add ${(members.find(x => x.id === relOf.id)?.name || "").split(" ")[0]}'s ${relOf.rel.toLowerCase()}`
                    : form.relation === "Self" ? "Add yourself"
                    : `Add your ${(form.relation === "Other" ? (form.customRelation || "relative") : form.relation).toLowerCase()}`}
                </h2>
              </div>

              <div className="mf-photo-row">
                <button type="button" className="mf-photo" onClick={() => photoRef.current?.click()} aria-label="Add photo">
                  {photoPreview ? <img src={photoPreview} alt=""/> : <Camera size={24}/>}
                </button>
                <input ref={photoRef} type="file" accept="image/*" onChange={handlePhoto} style={{ display:"none" }}/>
                <div style={{ flex: 1 }}>
                  <label className="mf-label" htmlFor="mf-name">Name</label>
                  <VoiceInput value={form.name} onChange={v=>u("name",v)} placeholder="e.g., Kamla Devi" required/>
                </div>
              </div>
              {contactSupported && !editId && (
                <button type="button" className="mf-contact" onClick={pickContact}>📇 Pick from my phone contacts</button>
              )}

              {(form.relation === "Other" || editId) && (
                <>
                  <label className="mf-label">How are they related to you?</label>
                  <select value={form.relation} onChange={e=>{ u("relation",e.target.value); setShowOtherRelation(e.target.value==="Other"); }} className="mf-input">
                    <option value="">Choose…</option>
                    {RELATIONS.map(r=><option key={r} value={r}>{r === "Self" ? "This is me" : r}</option>)}
                  </select>
                  {showOtherRelation && (
                    <div style={{ marginTop: 8 }}><VoiceInput value={form.customRelation} onChange={v=>u("customRelation",v)} placeholder="e.g., Family friend"/></div>
                  )}
                </>
              )}

              <label className="mf-label">Birthday <span className="mf-opt">optional · we&apos;ll remind the family 🎂</span></label>
              <input type="date" value={form.birthdate} onChange={e=>u("birthdate",e.target.value)} className="mf-input" max={new Date().toISOString().split("T")[0]}/>

              <label className="mf-check">
                <input type="checkbox" checked={form.deceased} onChange={e=>u("deceased", e.target.checked)}/>
                <span>No longer with us 🕊️</span>
              </label>

              <button type="button" className="mf-more" onClick={() => setShowMore(v => !v)} aria-expanded={showMore}>
                {showMore ? "− Hide extra details" : "+ More details (email, anniversary…)"}
              </button>

              {showMore && (
                <div className="mf-more-box">
                  <label className="mf-label">Email <span className="mf-opt">to invite them</span></label>
                  <input type="email" list="mf-email-suggest" autoComplete="email" value={form.email} onChange={e=>u("email",e.target.value)} placeholder="name@email.com" className="mf-input"/>
                  <datalist id="mf-email-suggest">
                    {Array.from(new Set([
                      ...members.map(m => m.email).filter(Boolean) as string[],
                      ...(typeof window !== "undefined" ? (JSON.parse(localStorage.getItem("parampara_recent_emails") || "[]") as string[]) : []),
                    ])).map(e => <option key={e} value={e}/>)}
                  </datalist>
                  <p className="mf-hint">No email? Use <b>Invite</b> on the Members page to send your family link on WhatsApp instead.</p>

                  <label className="mf-label">Wedding anniversary</label>
                  <input type="date" value={form.anniversary} onChange={e=>u("anniversary",e.target.value)} className="mf-input" max={new Date().toISOString().split("T")[0]}/>

                  <div className="mf-two">
                    <div>
                      <label className="mf-label">Role</label>
                      <select value={form.role} onChange={e=>u("role",e.target.value)} className="mf-input">
                        {["Admin","Elder","Parent","Contributor","Viewer"].map(r=><option key={r}>{r}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="mf-label">City / region</label>
                      <input value={form.region} onChange={e=>u("region",e.target.value)} className="mf-input" placeholder="e.g., Chandigarh"/>
                    </div>
                  </div>

                  {members.length > 0 && editId && (
                    <details className="mf-adv">
                      <summary>Fix tree position manually</summary>
                      <p className="mf-hint">Usually not needed — the tree uses the relation above. Use this only if someone shows in the wrong place.</p>
                      <div className="mf-two">
                        <div>
                          <label className="mf-label">Parent</label>
                          <select value={form.parentId1} onChange={e=>u("parentId1", e.target.value)} className="mf-input">
                            <option value="">Automatic</option>
                            {members.filter(m=>m.id!==editId && m.id!==form.parentId2).map(m=><option key={m.id} value={m.id}>{m.name}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="mf-label">Other parent</label>
                          <select value={form.parentId2} onChange={e=>u("parentId2", e.target.value)} className="mf-input">
                            <option value="">Automatic</option>
                            {members.filter(m=>m.id!==editId && m.id!==form.parentId1).map(m=><option key={m.id} value={m.id}>{m.name}</option>)}
                          </select>
                        </div>
                      </div>
                      <label className="mf-label">Husband / wife</label>
                      <select value={form.spouseId} onChange={e=>u("spouseId", e.target.value)} className="mf-input">
                        <option value="">Automatic</option>
                        {members.filter(m=>m.id!==editId).map(m=><option key={m.id} value={m.id}>{m.name}</option>)}
                      </select>
                    </details>
                  )}
                </div>
              )}

              <button type="submit" className="mf-save" disabled={saving}>
                {saving ? "Saving…" : editId ? "Save changes" : "Add to family"}
              </button>
            </form>
            )}
            <style>{`
              .mf-title { font-family:'Bricolage Grotesque',system-ui,sans-serif; font-weight:800; font-size:26px; letter-spacing:-0.02em; color:#1C1733; margin:0 0 6px; }
              .mf-sub { color:#625C7A; font-size:16px; line-height:1.5; margin:0 0 18px; }
              .mf-tiles { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
              .mf-tile { display:flex; flex-direction:column; align-items:center; gap:4px; padding:14px 6px; border-radius:16px; border:1.5px solid #E6E1F0; background:#F8F6FC; cursor:pointer; font-family:inherit; font-size:15px; font-weight:700; color:#1C1733; transition:transform .15s ease, background .15s ease, border-color .15s ease; }
              .mf-tile span { font-size:30px; line-height:1.1; }
              .mf-tile small { font-size:11px; font-weight:500; color:#625C7A; }
              .mf-tile:hover { background:#FCE8F0; border-color:#D6246E; transform:translateY(-2px); }
              .mf-tile-me { background:#FFF4DC; border-color:#FFB224; }
              .mf-tile:focus-visible, .mf-save:focus-visible, .mf-more:focus-visible, .mf-photo:focus-visible { outline:3px solid #FFB224; outline-offset:2px; }
              .mf-head { display:flex; align-items:center; gap:10px; margin-bottom:18px; padding-right:28px; }
              .mf-back { width:40px; height:40px; border-radius:12px; border:1px solid #E6E1F0; background:#fff; font-size:20px; cursor:pointer; flex-shrink:0; }
              .mf-photo-row { display:flex; gap:14px; align-items:flex-end; margin-bottom:8px; }
              .mf-photo { width:72px; height:72px; border-radius:50%; border:2px dashed #CFC6E6; background:#F8F6FC; color:#625C7A; display:flex; align-items:center; justify-content:center; cursor:pointer; overflow:hidden; flex-shrink:0; padding:0; }
              .mf-photo img { width:100%; height:100%; object-fit:cover; }
              .mf-label { display:block; font-size:15px; font-weight:700; color:#1C1733; margin:16px 0 6px; }
              .mf-photo-row .mf-label { margin-top:0; }
              .mf-opt { font-weight:500; color:#625C7A; font-size:13px; }
              .mf-input { width:100%; box-sizing:border-box; padding:13px 14px; border:1.5px solid #E6E1F0; border-radius:12px; font-size:16px; font-family:inherit; background:#F8F6FC; color:#1C1733; outline:none; }
              .mf-input:focus { border-color:#D6246E; background:#fff; }
              .mf-contact { margin-top:8px; background:none; border:none; color:#D6246E; font-weight:700; font-size:14px; cursor:pointer; padding:4px 0; font-family:inherit; }
              .mf-check { display:flex; align-items:center; gap:10px; margin-top:16px; font-size:15px; color:#1C1733; cursor:pointer; }
              .mf-check input { width:20px; height:20px; accent-color:#D6246E; }
              .mf-more { margin-top:16px; background:none; border:none; color:#7A3FD9; font-weight:700; font-size:15px; cursor:pointer; padding:4px 0; font-family:inherit; }
              .mf-more-box { background:#F8F6FC; border-radius:16px; padding:4px 14px 14px; margin-top:8px; }
              .mf-more-box .mf-input { background:#fff; }
              .mf-two { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
              .mf-hint { font-size:13px; color:#625C7A; line-height:1.5; margin:6px 0 0; }
              .mf-adv { margin-top:16px; }
              .mf-adv summary { cursor:pointer; font-weight:700; font-size:14px; color:#625C7A; }
              .mf-save { width:100%; margin-top:22px; padding:16px; border:none; border-radius:14px; background:#D6246E; color:#fff; font-size:17px; font-weight:800; cursor:pointer; font-family:inherit; }
              .mf-save:hover { background:#B0175A; }
              .mf-save:disabled { opacity:.65; }
              @media (max-width:420px) { .mf-tiles { grid-template-columns:repeat(2,1fr); } .mf-two { grid-template-columns:1fr; } }
            `}</style>

          </div>
        </div>
      )}

      <div style={{ padding:"20px 16px",maxWidth:720,margin:"0 auto" }}>
        {/* Header */}
        <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,flexWrap:"wrap",gap:10 }}>
          <div>
            <h1 style={{ fontFamily:F.serif,fontSize:22,fontWeight:600,color:C.charcoal,margin:0 }}>Family Members</h1>
            <p style={{ fontSize:13,color:C.gray,marginTop:3 }}>{familyName} · {members.length} member{members.length!==1?"s":""}</p>
          </div>
          <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
            <button onClick={()=>setShowBirthdays(v=>!v)} style={{ display:"flex",alignItems:"center",gap:5,background:"#FFF1F2",color:"#E11D48",border:"1px solid rgba(225,29,72,0.2)",borderRadius:9,padding:"8px 12px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:F.sans }}>
              <Gift size={13}/> Reminders
            </button>
            <Link href="/family-tree" style={{ display:"flex",alignItems:"center",gap:5,background:C.goldLight,color:C.gold,border:`1px solid rgba(122,63,217,0.3)`,borderRadius:9,padding:"8px 12px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:F.sans,textDecoration:"none" }}>
              <GitBranch size={13}/> Family Tree
            </Link>
            <button onClick={()=>setShowInvite(v=>!v)} style={{ display:"flex",alignItems:"center",gap:5,background:C.white,color:C.charcoal,border:`1px solid ${C.border}`,borderRadius:9,padding:"8px 12px",fontSize:12,cursor:"pointer",fontFamily:F.sans }}>
              <Copy size={13}/> Invite
            </button>
            <button onClick={()=>openAdd()} style={{ display:"flex",alignItems:"center",gap:5,background:C.saffron,color:"#fff",border:"none",borderRadius:9,padding:"8px 14px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:F.sans }}>
              <UserPlus size={13}/> Add
            </button>
          </div>
        </div>

        {/* Shared rituals notice */}
        <div style={{ background:"linear-gradient(135deg,#E3F4F2,#F5FBF7)",border:"1px solid rgba(15,122,115,0.15)",borderRadius:12,padding:"12px 16px",marginBottom:14,display:"flex",gap:10,alignItems:"center" }}>
          <span style={{ fontSize:18 }}>🔗</span>
          <div>
            <p style={{ fontSize:13,fontWeight:600,color:C.forest,margin:0 }}>Family-shared space</p>
            <p style={{ fontSize:11,color:C.gray,margin:0,marginTop:2 }}>All rituals, members, and reminders are shared with your entire family. Invite members below to give them access.</p>
          </div>
        </div>

        {/* Upcoming reminders panel */}
        {showBirthdays && (
          <div style={{ background:"#FFF1F2",border:"1px solid rgba(225,29,72,0.15)",borderRadius:12,padding:16,marginBottom:14 }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12 }}>
              <p style={{ fontSize:13,fontWeight:600,color:"#E11D48",margin:0 }}>🎉 Upcoming Birthdays &amp; Anniversaries</p>
              <button onClick={()=>setShowBirthdays(false)} style={{ background:"none",border:"none",cursor:"pointer",color:C.gray,display:"flex" }}><X size={15}/></button>
            </div>
            {upcomingEvents.length === 0 ? (
              <p style={{ fontSize:13,color:C.gray,margin:0 }}>No upcoming events in the next 30 days. Add birthdates and anniversaries to members.</p>
            ) : (
              <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
                {upcomingEvents.map((ev,i) => (
                  <div key={i} style={{ display:"flex",alignItems:"center",gap:12,background:C.white,borderRadius:10,padding:"10px 12px" }}>
                    <div style={{ width:40,height:40,borderRadius:"50%",background:ev.days===0?"linear-gradient(135deg,#E11D48,#F43F5E)":"#FFF1F2",display:"flex",alignItems:"center",justifyContent:"center",fontSize:ev.days===0?18:11,fontWeight:700,color:ev.days===0?"#fff":"#E11D48",flexShrink:0 }}>
                      {ev.days===0?(ev.type==="birthday"?"🎂":"💍"):`${ev.days}d`}
                    </div>
                    <div style={{ flex:1 }}>
                      <p style={{ fontSize:13,fontWeight:600,color:C.charcoal,margin:0 }}>{ev.member.name}</p>
                      <p style={{ fontSize:11,color:C.gray,margin:0 }}>
                        {ev.type==="birthday"?`Birthday · ${formatDate(ev.member.birthdate)}`:`Anniversary · ${formatDate(ev.member.anniversary)}`}
                        {ev.type==="birthday" && getAge(ev.member.birthdate) !== null && ` · Turning ${getAge(ev.member.birthdate)!+1}`}
                      </p>
                    </div>
                    {ev.days===0 && (
                      <button onClick={()=>{
                        const msg = ev.type==="birthday"
                          ? `🎂 Happy Birthday ${ev.member.name}! 🎉 Wishing you joy and blessings from ${familyName} 🪔`
                          : `💍 Happy Anniversary ${ev.member.name}! 🎊 Many more years of togetherness — with love from ${familyName} 🪔`;
                        navigator.clipboard?.writeText(msg).then(()=>toast.success("Message copied! Share on WhatsApp 📱"));
                      }} style={{ background:"#25D366",color:"#fff",border:"none",borderRadius:8,padding:"6px 10px",fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:F.sans,flexShrink:0 }}>
                        Wish 💬
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Family card */}
        <div style={{ background:C.white,borderRadius:14,border:`1px solid ${C.border}`,padding:16,marginBottom:14,display:"flex",alignItems:"center",gap:14 }}>
          <div style={{ width:56,height:56,borderRadius:12,background:familyPhoto?"transparent":C.saffronLight,border:`2px solid ${C.border}`,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0 }}>
            {familyPhoto?<img src={familyPhoto} alt={familyName} style={{ width:"100%",height:"100%",objectFit:"cover" }}/>:"👨‍👩‍👧‍👦"}
          </div>
          <div style={{ flex:1 }}>
            <p style={{ fontSize:14,fontWeight:600,color:C.charcoal,margin:0 }}>{familyName}</p>
            <p style={{ fontSize:11,color:C.gray,margin:"2px 0 0" }}>{members.length} members · {members.filter(m=>m.birthdate).length} birthdates · {members.filter(m=>m.anniversary).length} anniversaries</p>
          </div>
          <Link href="/family-settings" style={{ display:"flex",alignItems:"center",gap:5,background:C.ivory,border:`1px solid ${C.border}`,borderRadius:9,padding:"7px 12px",fontSize:12,fontWeight:500,color:C.charcoal,textDecoration:"none" }}>
            <Settings size={12}/> Edit
          </Link>
        </div>

        {/* Invite */}
        {showInvite && (
          <div style={{ background:C.saffronLight,border:`1px solid rgba(214,36,110,0.2)`,borderRadius:12,padding:14,marginBottom:14 }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8 }}>
              <p style={{ fontSize:13,fontWeight:600,color:C.charcoal,margin:0 }}>Share family invite link</p>
              <button onClick={()=>setShowInvite(false)} style={{ background:"none",border:"none",cursor:"pointer",color:C.gray,display:"flex" }}><X size={15}/></button>
            </div>
            <div style={{ display:"flex",alignItems:"center",gap:8,background:C.white,borderRadius:9,border:`1px solid rgba(214,36,110,0.2)`,padding:"9px 12px" }}>
              <span style={{ flex:1,fontSize:11,color:C.gray,fontFamily:"monospace",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{typeof window!=="undefined"?(canShareInvite(getActiveFamily())?getInviteLink(getActiveFamily()!):"Set up your family space to get an invite link"):"Loading..."}</span>
              <button onClick={copyInvite} style={{ display:"flex",alignItems:"center",gap:4,background:copied?C.forest:C.saffron,color:"#fff",border:"none",borderRadius:7,padding:"6px 10px",fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:F.sans,flexShrink:0 }}>
                {copied?<><Check size={11}/> Copied!</>:<><Copy size={11}/> Copy</>}
              </button>
            </div>
          </div>
        )}

        {/* Members list */}
        {members.length === 0 ? (
          <div style={{ background:C.white,borderRadius:16,border:`1px solid ${C.border}`,padding:"40px 20px",textAlign:"center" }}>
            <div style={{ fontSize:40,marginBottom:10 }}>👨‍👩‍👧‍👦</div>
            <h2 style={{ fontFamily:F.serif,fontSize:18,fontWeight:600,color:C.charcoal,marginBottom:6 }}>No members yet</h2>
            <p style={{ fontSize:13,color:C.gray,maxWidth:300,margin:"0 auto 20px",lineHeight:1.6 }}>Add family members with their birthdate and anniversary for automatic reminders.</p>
            <button onClick={()=>openAdd()} style={{ display:"inline-flex",alignItems:"center",gap:6,background:C.saffron,color:"#fff",border:"none",borderRadius:10,padding:"11px 22px",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:F.sans }}>
              <UserPlus size={14}/> Add first member
            </button>
          </div>
        ) : (
          <div style={{ background:C.white,borderRadius:12,border:`1px solid ${C.border}`,overflow:"hidden",marginBottom:14 }}>
            {members.map((m,i) => {
              const rs = ROLE_STYLE[m.role]||ROLE_STYLE.Viewer;
              const bdDays = getDaysUntilDate(m.birthdate);
              const anDays = getDaysUntilDate(m.anniversary);
              const isBdToday = bdDays===0;
              const isAnToday = anDays===0;
              const isSoon = (bdDays!==null&&bdDays<=7)||(anDays!==null&&anDays<=7);
              return (
                <div key={m.id} style={{ display:"flex",alignItems:"center",gap:12,padding:"12px 16px",borderBottom:i<members.length-1?`1px solid ${C.border}`:"none",background:isBdToday||isAnToday?"#FFF8F8":"transparent" }}>
                  <div style={{ position:"relative",flexShrink:0 }}>
                    <div style={{ width:42,height:42,borderRadius:"50%",background:m.color==="saffron"?"#FAD3E3":C.forestLight,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:600,color:m.color==="saffron"?C.saffron:C.forest }}>
                      {m.photoUrl
                        ? <img src={m.photoUrl} alt={m.name}
                            style={{ width:"100%",height:"100%",objectFit:"cover",display:"block" }}
                            onError={e=>{ (e.target as HTMLImageElement).style.display="none"; }}
                          />
                        : (m.initials || m.name?.split(" ").map((n:string)=>n[0]).join("").toUpperCase().slice(0,2) || "?")}
                    </div>
                    {isBdToday && <span style={{ position:"absolute",top:-4,right:-4,fontSize:12 }}>🎂</span>}
                    {isAnToday && <span style={{ position:"absolute",top:-4,right:-4,fontSize:12 }}>💍</span>}
                  </div>
                  <div style={{ flex:1,minWidth:0 }}>
                    <p style={{ fontSize:13,fontWeight:500,color:C.charcoal,margin:0 }}>{m.name}</p>
                    <p style={{ fontSize:11,color:C.gray,margin:0,marginTop:1,display:"flex",gap:6,flexWrap:"wrap" }}>
                      <span>{m.relation}{m.region?` · ${m.region}`:""}</span>
                      {m.birthdate && <span style={{ color:isBdToday?"#E11D48":bdDays!==null&&bdDays<=7?"#F59E0B":C.gray }}>🎂 {isBdToday?"Today!":bdDays!==null&&bdDays<=7?`${bdDays}d`:formatDate(m.birthdate)}</span>}
                      {m.anniversary && <span style={{ color:isAnToday?"#E11D48":anDays!==null&&anDays<=7?"#F59E0B":C.gray }}>💍 {isAnToday?"Today!":anDays!==null&&anDays<=7?`${anDays}d`:formatDate(m.anniversary)}</span>}
                    </p>
                  </div>
                  <span style={{ fontSize:10,fontWeight:600,padding:"3px 8px",borderRadius:20,background:rs.bg,color:rs.color,flexShrink:0 }}>{m.role}</span>
                  <button onClick={()=>openEdit(m)} style={{ background:"none",border:"none",cursor:"pointer",color:C.gray,padding:4,display:"flex",flexShrink:0 }}><Pencil size={13}/></button>
                  <button onClick={()=>setDeleteId(m.id)} style={{ background:"none",border:"none",cursor:"pointer",color:"#DDD",padding:4,display:"flex",flexShrink:0 }}><Trash2 size={13}/></button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </AppShell>
  );
}
