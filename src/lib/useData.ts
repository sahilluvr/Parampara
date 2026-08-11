// ── Universal data hook ──────────────────────────────────────────
// Source of truth: Supabase (when authenticated)
// localStorage: cache only — never source of truth for deletes

import { useEffect, useState, useCallback } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { getActiveFamily } from "./families";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const HAS_SUPABASE = !!(SUPABASE_URL && SUPABASE_KEY);

function getClient() {
  if (!HAS_SUPABASE) return null;
  return createBrowserClient(SUPABASE_URL!, SUPABASE_KEY!);
}

function lsKey(base: string, familyId?: string) {
  const fid = familyId || getActiveFamily()?.id || "default";
  return `${base}_${fid}`;
}

export async function getCurrentUser() {
  const sb = getClient();
  if (!sb) return null;
  const { data: { user } } = await sb.auth.getUser();
  return user;
}

async function getSupabaseFamily(userId: string) {
  const sb = getClient();
  if (!sb) return null;
  try {
    // If the user has multiple family spaces (created/joined more than one family),
    // they'll have multiple family_members rows. Prefer the one matching the
    // locally-active family space, so switching families actually works.
    const activeId = getActiveFamily()?.id;
    if (activeId) {
      const { data: activeMember } = await sb
        .from("family_members").select("family_id").eq("user_id", userId).eq("family_id", activeId).maybeSingle();
      if (activeMember?.family_id) return activeMember.family_id;
      // Active family might be one the user created but doesn't have a family_members row for
      const { data: activeFamily } = await sb
        .from("families").select("id").eq("id", activeId).maybeSingle();
      if (activeFamily?.id) return activeFamily.id;
    }

    // Fallback: any family_members row for this user
    const { data: member } = await sb
      .from("family_members").select("family_id").eq("user_id", userId).limit(1).maybeSingle();
    if (member?.family_id) return member.family_id;
    const { data: family } = await sb
      .from("families").select("id").eq("created_by", userId).limit(1).maybeSingle();
    return family?.id || null;
  } catch { return null; }
}

// ── MEMBER DELETE — calls Supabase directly ──────────────────────
export async function deleteMemberFromDB(memberName: string, familyId: string): Promise<boolean> {
  const sb = getClient();
  if (!sb) return false;
  try {
    // Delete by name + family_id (the unique key we have)
    const { error } = await sb
      .from("family_members")
      .delete()
      .eq("family_id", familyId)
      .eq("name", memberName);
    if (error) {
      console.error("DB delete error:", error);
      return false;
    }
    return true;
  } catch (e) {
    console.error("DB delete exception:", e);
    return false;
  }
}

// ── MEMBERS ──────────────────────────────────────────────────────
export function useMembers() {
  const [members, setMembersState] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [supabaseFamilyId, setSupabaseFamilyId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const user = await getCurrentUser();
      if (user && HAS_SUPABASE) {
        const sb = getClient()!;
        const famId = await getSupabaseFamily(user.id);
        setSupabaseFamilyId(famId);
        if (famId) {
          const { data } = await sb.from("family_members").select("*").eq("family_id", famId);
          if (data) {
            // Normalize data
            const normalized = data.map((m, i) => ({
              ...m,
              color: m.color || (i % 2 === 0 ? "saffron" : "forest"),
              initials: m.initials || (m.name as string)?.split(" ").map((n:string)=>n[0]).join("").toUpperCase().slice(0,2) || "?",
            }));
            setMembersState(normalized);
            localStorage.setItem(lsKey("parampara_members"), JSON.stringify(normalized));
            setLoading(false);
            return;
          }
        }
      }
    } catch (err) {
      console.warn("Supabase members fetch failed:", err);
    }
    // Fallback to localStorage
    const raw = localStorage.getItem(lsKey("parampara_members"))
      || localStorage.getItem("parampara_members_default");
    setMembersState(raw ? JSON.parse(raw) : []);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  async function saveMembers(updated: Record<string, unknown>[]) {
    localStorage.setItem(lsKey("parampara_members"), JSON.stringify(updated));
    setMembersState(updated);
  }

  return { members, setMembers: saveMembers, loading, supabaseFamilyId, reload: load };
}

// ── RITUALS ──────────────────────────────────────────────────────
export function useRituals() {
  const [rituals, setRitualsState] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [supabaseFamilyId, setSupabaseFamilyId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const user = await getCurrentUser();
      if (user && HAS_SUPABASE) {
        const sb = getClient()!;
        const famId = await getSupabaseFamily(user.id);
        setSupabaseFamilyId(famId);
        if (famId) {
          const { data } = await sb.from("rituals").select("*").eq("family_id", famId).order("created_at", { ascending: false });
          if (data && data.length > 0) {
            setRitualsState(data);
            localStorage.setItem(lsKey("parampara_rituals"), JSON.stringify(data));
            setLoading(false);
            return;
          }
        }
      }
    } catch (err) {
      console.warn("Supabase rituals fetch failed:", err);
    }
    const keys = [lsKey("parampara_rituals"), "parampara_rituals_default", "parampara_rituals"];
    for (const key of keys) {
      const raw = localStorage.getItem(key);
      if (raw && raw !== "[]") { setRitualsState(JSON.parse(raw)); setLoading(false); return; }
    }
    setRitualsState([]);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  function setRituals(updated: Record<string, unknown>[]) {
    localStorage.setItem(lsKey("parampara_rituals"), JSON.stringify(updated));
    setRitualsState(updated);
  }

  return { rituals, setRituals, loading, supabaseFamilyId, reload: load };
}
