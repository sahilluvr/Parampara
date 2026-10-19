// ── Pending invite ─────────────────────────────────────────────
// When someone opens an invite link while signed out, we remember the code
// so it survives signup, email verification, Google OAuth (which can't carry
// our query string through Supabase's redirect) and "Sign in" detours.
// AppShell picks it up on the first authenticated page and finishes the join.

import { joinFamily, normalizeInviteCode, type JoinResult } from "./families";

const KEY = "parampara_pending_invite";
const LEGACY_KEY = "parampara_pending_join_code";
const MAX_AGE_MS = 14 * 24 * 60 * 60 * 1000;

export type PendingInvite = { code: string; family: string; savedAt: number };

export function savePendingInvite(code: string, family = "") {
  const c = normalizeInviteCode(code);
  if (!c) return;
  try { localStorage.setItem(KEY, JSON.stringify({ code: c, family, savedAt: Date.now() })); } catch { /* ignore */ }
}

export function getPendingInvite(): PendingInvite | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const p = JSON.parse(raw) as PendingInvite;
      if (p?.code && Date.now() - (p.savedAt || 0) < MAX_AGE_MS) return p;
      localStorage.removeItem(KEY);
    }
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy) return { code: normalizeInviteCode(legacy), family: "", savedAt: Date.now() };
  } catch { /* ignore */ }
  return null;
}

export function clearPendingInvite() {
  try { localStorage.removeItem(KEY); localStorage.removeItem(LEGACY_KEY); } catch { /* ignore */ }
}

export type InvitePreview = { valid: boolean | null; familyName?: string; familyId?: string; error?: string };

export async function previewInvite(code: string): Promise<InvitePreview> {
  const c = normalizeInviteCode(code);
  if (!c) return { valid: false, error: "Missing invite code" };
  try {
    const res = await fetch(`/api/family/invite?code=${encodeURIComponent(c)}`, { cache: "no-store" });
    return await res.json();
  } catch {
    return { valid: null };
  }
}

let _processing: Promise<JoinResult | null> | null = null;

/**
 * If a pending invite exists and the user is signed in, complete the join.
 * Returns the joined family (or null if nothing was pending / not signed in).
 * Invalid codes are cleared so the user isn't nagged forever.
 */
export function processPendingInvite(): Promise<JoinResult | null> {
  if (_processing) return _processing;
  _processing = (async () => {
    const pending = getPendingInvite();
    if (!pending) return null;
    try {
      const result = await joinFamily(pending.code, pending.family);
      clearPendingInvite();
      return result;
    } catch (err) {
      const status = (err as Error & { status?: number }).status;
      if (status === 401) return null;           // not signed in yet — keep it for later
      if (status === 404 || status === 400) clearPendingInvite(); // bad code — stop retrying
      throw err;
    }
  })().finally(() => { _processing = null; });
  return _processing;
}
