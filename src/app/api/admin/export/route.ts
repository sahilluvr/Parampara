import { NextResponse } from "next/server";
import { getAdminUser } from "@/lib/adminAuth";
import { loadAdminData } from "@/lib/adminData";

// GET /api/admin/export — all users as CSV
export async function GET() {
  const { isAdmin } = await getAdminUser();
  if (!isAdmin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { users } = await loadAdminData();
  const cols = ["email", "name", "createdAt", "lastSignIn", "confirmed", "plan", "planUntil", "cycle", "subStatus", "autoRenew", "families", "provider"] as const;
  const esc = (v: unknown) => { const s = v == null ? "" : String(v); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
  const csv = [cols.join(","), ...users.map(u => cols.map(c => esc(u[c])).join(","))].join("\n");
  return new NextResponse(csv, { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": `attachment; filename="parampara-users-${new Date().toISOString().slice(0, 10)}.csv"` } });
}
