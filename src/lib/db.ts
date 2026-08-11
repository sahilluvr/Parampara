// ── DATABASE LAYER ──────────────────────────────────────────────
// All Supabase queries in one place.
// Falls back gracefully when env vars are not set (dev/demo mode).

import { supabase, type RitualDB, type FamilyMemberDB, type FestivalDB, type MediaItemDB } from "./supabase";

function isConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

// ── AUTH ──────────────────────────────────────────────────────
export async function signUp(email: string, password: string, familyName: string, religion: string, region: string) {
  if (!isConfigured()) throw new Error("SUPABASE_NOT_CONFIGURED");
  
  const { data: authData, error: authError } = await supabase.auth.signUp({ email, password });
  if (authError) throw authError;
  if (!authData.user) throw new Error("Signup failed");

  const inviteCode = familyName.toUpperCase().replace(/[^A-Z]/g,"").slice(0,6) + "-" + Math.random().toString(36).substring(2,6).toUpperCase();
  
  const { data: family, error: famError } = await supabase
    .from("families")
    .insert({ name: familyName, invite_code: inviteCode, religion, region, created_by: authData.user.id })
    .select().single();
  if (famError) throw famError;

  // Add as Admin member
  await supabase.from("family_members").insert({
    family_id: family.id, user_id: authData.user.id,
    name: email.split("@")[0], role: "Admin",
    initials: familyName.split(" ").map((w:string) => w[0]).join("").toUpperCase().slice(0,2),
    color: "saffron",
  });

  // Seed one sample ritual
  await supabase.from("rituals").insert({
    family_id: family.id,
    name: "Namkaran", subtitle: "Naming Ceremony — Sample Template",
    category: "Naming", religion: ["Hindu"], region: "North India",
    language: "Hindi/Sanskrit",
    steps: ["Purify the space with Ganga jal and light the diya","Seat the baby on the mother's lap facing East","Priest performs Ganapati puja","Nakshatra confirmed with horoscope","Father whispers name into baby's right ear","Name announced with conch blow","Priest recites naming mantras","Family feast — kheer and puri"],
    samagri: [{ item:"Ghee", quantity:"500g", purpose:"For havan" },{ item:"Raw rice (akshat)", quantity:"2 kg", purpose:"Offerings" },{ item:"Turmeric powder", quantity:"100g", purpose:"Purification" },{ item:"Flowers — marigold", quantity:"2 kg", purpose:"Decoration" }],
    mantras: [{ devanagari:"ॐ नमः शिवाय। आयुष्मान् भव।", transliteration:"Om Namah Shivaya. Aayushmaan bhava.", meaning:"I bow to Shiva. May you be blessed with long life." }],
    elder_notes: "This is a sample template. Edit it to match your family's tradition, or delete it and create your own.",
    preparation_days: 7, is_template: true, created_by: authData.user.id,
  });

  return { user: authData.user, family };
}

export async function signIn(email: string, password: string) {
  if (!isConfigured()) throw new Error("SUPABASE_NOT_CONFIGURED");
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

// ── FAMILY ────────────────────────────────────────────────────
export async function getMyFamily() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  
  const { data: member } = await supabase
    .from("family_members").select("family_id").eq("user_id", user.id).single();
  if (!member) return null;

  const { data: family } = await supabase
    .from("families").select("*").eq("id", member.family_id).single();
  return family;
}

// ── RITUALS ───────────────────────────────────────────────────
export async function getRituals(familyId: string): Promise<RitualDB[]> {
  const { data, error } = await supabase
    .from("rituals").select("*").eq("family_id", familyId).order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function getRitual(id: string): Promise<RitualDB | null> {
  const { data, error } = await supabase.from("rituals").select("*").eq("id", id).single();
  if (error) return null;
  return data;
}

export async function createRitual(familyId: string, ritual: Omit<RitualDB, "id"|"family_id"|"created_at"|"updated_at"|"performed_count">) {
  const { data: { user } } = await supabase.auth.getUser();
  const { data, error } = await supabase.from("rituals")
    .insert({ ...ritual, family_id: familyId, created_by: user?.id })
    .select().single();
  if (error) throw error;
  return data;
}

export async function deleteRitual(id: string) {
  const { error } = await supabase.from("rituals").delete().eq("id", id);
  if (error) throw error;
}

export async function markRitualPerformed(ritualId: string, notes?: string) {
  const { data: { user } } = await supabase.auth.getUser();
  // Log performance
  await supabase.from("ritual_performances").insert({ ritual_id: ritualId, performed_by: user?.id, notes });
  // Increment count
  const { data: ritual } = await supabase.from("rituals").select("performed_count").eq("id", ritualId).single();
  if (ritual) {
    await supabase.from("rituals").update({ performed_count: ritual.performed_count + 1 }).eq("id", ritualId);
  }
}

// ── MEMBERS ───────────────────────────────────────────────────
export async function getMembers(familyId: string): Promise<FamilyMemberDB[]> {
  const { data, error } = await supabase
    .from("family_members").select("*").eq("family_id", familyId).order("joined_at");
  if (error) throw error;
  return data || [];
}

export async function addMember(familyId: string, member: Partial<FamilyMemberDB>) {
  const { data, error } = await supabase.from("family_members")
    .insert({ ...member, family_id: familyId }).select().single();
  if (error) throw error;
  return data;
}

export async function deleteMember(id: string) {
  const { error } = await supabase.from("family_members").delete().eq("id", id);
  if (error) throw error;
}

// ── FESTIVALS ─────────────────────────────────────────────────
export async function getFestivals(familyId?: string): Promise<FestivalDB[]> {
  let query = supabase.from("festivals").select("*").order("date");
  if (familyId) {
    // Get both preset (family_id is null) and custom for this family
    query = supabase.from("festivals").select("*")
      .or(`family_id.is.null,family_id.eq.${familyId}`).order("date");
  }
  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}

export async function addCustomFestival(familyId: string, festival: Partial<FestivalDB>) {
  const { data, error } = await supabase.from("festivals")
    .insert({ ...festival, family_id: familyId, is_custom: true }).select().single();
  if (error) throw error;
  return data;
}

export async function deleteCustomFestival(id: string) {
  const { error } = await supabase.from("festivals").delete().eq("id", id);
  if (error) throw error;
}

export async function toggleReminder(festivalId: string, familyId: string, enabled: boolean) {
  const { data: existing } = await supabase.from("festival_reminders")
    .select("id").eq("festival_id", festivalId).eq("family_id", familyId).single();

  if (existing) {
    await supabase.from("festival_reminders").update({ enabled }).eq("id", existing.id);
  } else {
    await supabase.from("festival_reminders").insert({ festival_id: festivalId, family_id: familyId, enabled });
  }
}

// ── MEDIA ─────────────────────────────────────────────────────
export async function getMedia(familyId: string): Promise<MediaItemDB[]> {
  const { data, error } = await supabase
    .from("media_items").select("*").eq("family_id", familyId).order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function addMediaItem(familyId: string, item: Partial<MediaItemDB>) {
  const { data: { user } } = await supabase.auth.getUser();
  const { data, error } = await supabase.from("media_items")
    .insert({ ...item, family_id: familyId, uploaded_by: user?.id }).select().single();
  if (error) throw error;
  return data;
}

export async function deleteMediaItem(id: string) {
  const { error } = await supabase.from("media_items").delete().eq("id", id);
  if (error) throw error;
}

export async function toggleReaction(mediaId: string): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  const { data: existing } = await supabase.from("media_reactions")
    .select("id").eq("media_id", mediaId).eq("user_id", user.id).single();

  if (existing) {
    await supabase.from("media_reactions").delete().eq("id", existing.id);
    await supabase.from("media_items").update({ reactions_count: supabase.rpc("decrement", { x: 1 }) }).eq("id", mediaId);
    return false;
  } else {
    await supabase.from("media_reactions").insert({ media_id: mediaId, user_id: user.id });
    await supabase.rpc("increment_reactions", { item_id: mediaId });
    return true;
  }
}

// ── AI LOGGING ────────────────────────────────────────────────
export async function logAIUsage(familyId: string, feature: string, tokensUsed?: number) {
  const { data: { user } } = await supabase.auth.getUser();
  await supabase.from("ai_usage_log").insert({
    family_id: familyId, user_id: user?.id, feature, tokens_used: tokensUsed,
  });
}
