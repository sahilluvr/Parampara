// ── Admin access (server only) ───────────────────────────────────
// Exactly one admin: sahilaggarwal43@gmail.com, signed in with their
// email + password. A Google sign-in for the same address is NOT enough —
// the session must have been created with the password (JWT `amr` claim).
// The password itself lives only in Supabase Auth, never in this code
// (the repository is public).
import { getRouteClient } from "./supabaseServer";

export const ADMIN_EMAIL = "sahilaggarwal43@gmail.com";

function passwordSession(accessToken?: string): boolean {
  if (!accessToken) return false;
  try {
    const payload = JSON.parse(Buffer.from(accessToken.split(".")[1], "base64url").toString("utf8"));
    // No amr claim at all (older token format) → don't lock the admin out
    if (!Array.isArray(payload.amr)) return true;
    const amr: { method?: string }[] = payload.amr;
    return amr.some(a => a.method === "password");
  } catch { return false; }
}

export async function getAdminUser() {
  const sb = await getRouteClient();
  if (!sb) return { user: null, isAdmin: false, needsPassword: false, reason: "signed_out" };
  const { data: { user } } = await sb.auth.getUser(); // verified with Supabase Auth
  const emailOk = !!user?.email && user.email.toLowerCase() === ADMIN_EMAIL;
  if (!emailOk) return { user, isAdmin: false, needsPassword: false, reason: user ? "not_admin" : "signed_out" };
  const { data: { session } } = await sb.auth.getSession();
  const pw = passwordSession(session?.access_token);
  return { user, isAdmin: pw, needsPassword: !pw, reason: pw ? "" : "not_password" };
}
