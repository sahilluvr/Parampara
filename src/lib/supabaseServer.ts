// ── Server-side Supabase helpers (route handlers only) ─────────
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { SupabaseClient } from "@supabase/supabase-js";

/** Supabase client acting as the signed-in user (reads auth cookies). */
export async function getRouteClient(): Promise<SupabaseClient | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  const cookieStore = await cookies();
  return createServerClient(url, key, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (cs) => {
        try { cs.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); } catch { /* read-only context */ }
      },
    },
  }) as unknown as SupabaseClient;
}

/** Service-role client (bypasses RLS). Returns null when the key isn't configured. */
export async function getAdminClient(): Promise<SupabaseClient | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return null;
  const { createClient } = await import("@supabase/supabase-js");
  return createClient(url, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } });
}

/** Invite codes are stored upper-case (e.g. SHARM-X4K2). Accepts a pasted link too. */
export function normalizeInviteCode(raw: unknown): string {
  let s = String(raw ?? "").trim();
  if (!s) return "";
  if (s.includes("code=")) {
    try { s = new URL(s.startsWith("http") ? s : `https://x.y/${s.replace(/^\/+/, "")}`).searchParams.get("code") || s; } catch { /* keep */ }
  }
  return s.replace(/\s+/g, "").toUpperCase().slice(0, 40);
}

/** Escape % and _ so a value can be used as an exact, case-insensitive ilike pattern. */
export function likeExact(v: string): string {
  return v.replace(/[\\%_]/g, m => "\\" + m);
}
