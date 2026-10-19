import { NextRequest, NextResponse } from "next/server";
import { getAdmin } from "@/lib/billing";

// ── Daily birthday & anniversary reminders (vercel.json cron, 8:00 IST) ──
// Before this, birthday "reminders" only appeared if someone happened to open
// the dashboard. Now every family member with an account gets an email
// 7 days before, the day before, and on the day — for every relative in the
// family space with a birthdate (and anniversaries the same way).
// Protected by CRON_SECRET.

const REMIND_DAYS = [7, 1, 0];

// Today's date in India (the cron runs at 02:30 UTC = 08:00 IST)
function todayIST(): Date {
  const now = new Date(Date.now() + 5.5 * 3600 * 1000);
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}

function daysUntilNext(dateStr: string, today: Date): { days: number; years: number } | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateStr);
  if (!m) return null;
  const y = +m[1], mo = +m[2] - 1, d = +m[3];
  let next = new Date(Date.UTC(today.getUTCFullYear(), mo, d));
  // 29 Feb in non-leap years → celebrate on 28 Feb
  if (mo === 1 && d === 29 && next.getUTCMonth() !== 1) next = new Date(Date.UTC(today.getUTCFullYear(), 1, 28));
  if (next < today) next = new Date(Date.UTC(today.getUTCFullYear() + 1, mo, mo === 1 && d === 29 ? 28 : d));
  const days = Math.round((next.getTime() - today.getTime()) / 86400000);
  return { days, years: next.getUTCFullYear() - y };
}

type Member = { id: string; family_id: string; name: string; birthdate: string | null; anniversary: string | null; user_id: string | null; email: string | null };

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.get("authorization") !== `Bearer ${secret}`) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const admin = await getAdmin();
  if (!admin) return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });

  const today = todayIST();
  const result = { families: 0, events: 0, emails: 0, errors: [] as string[] };

  try {
    const members: Member[] = [];
    for (let from = 0; ; from += 1000) {
      const { data, error } = await admin.from("family_members")
        .select("id,family_id,name,birthdate,anniversary,user_id,email").range(from, from + 999);
      if (error) throw error;
      members.push(...((data || []) as Member[]));
      if (!data || data.length < 1000) break;
    }

    const byFamily = new Map<string, Member[]>();
    for (const m of members) { if (!byFamily.has(m.family_id)) byFamily.set(m.family_id, []); byFamily.get(m.family_id)!.push(m); }

    const famNames = new Map<string, string>();
    const emailCache = new Map<string, { email: string; name: string } | null>();
    const { sendBirthdayReminderEmail, sendAnniversaryReminderEmail } = await import("@/lib/email");

    for (const [familyId, list] of byFamily) {
      const events: { kind: "birthday" | "anniversary"; person: Member; days: number; years: number }[] = [];
      for (const m of list) {
        for (const kind of ["birthday", "anniversary"] as const) {
          const date = kind === "birthday" ? m.birthdate : m.anniversary;
          if (!date) continue;
          const r = daysUntilNext(date, today);
          if (r && REMIND_DAYS.includes(r.days)) events.push({ kind, person: m, days: r.days, years: r.years });
        }
      }
      if (!events.length) continue;
      result.families++; result.events += events.length;

      if (!famNames.has(familyId)) {
        const { data } = await admin.from("families").select("name").eq("id", familyId).maybeSingle();
        famNames.set(familyId, data?.name || "your family");
      }
      const familyName = famNames.get(familyId)!;

      // Recipients: everyone in this family who has an account
      const recipients: { email: string; name: string; userId: string }[] = [];
      for (const m of list) {
        if (!m.user_id) continue;
        if (!emailCache.has(m.user_id)) {
          const { data } = await admin.auth.admin.getUserById(m.user_id);
          const u = data?.user;
          emailCache.set(m.user_id, u?.email ? { email: u.email, name: (u.user_metadata?.full_name || u.user_metadata?.name || m.name || u.email.split("@")[0]) as string } : null);
        }
        const r = emailCache.get(m.user_id);
        if (r && !recipients.some(x => x.email === r.email)) recipients.push({ ...r, userId: m.user_id });
      }

      for (const ev of events) {
        for (const rcp of recipients) {
          if (ev.kind === "birthday" && ev.person.user_id === rcp.userId) continue; // don't remind people of their own birthday
          try {
            const sent = ev.kind === "birthday"
              ? await sendBirthdayReminderEmail(rcp.email, rcp.name, ev.person.name, ev.days, familyName, ev.years > 0 && ev.years < 130 ? ev.years : undefined)
              : await sendAnniversaryReminderEmail(rcp.email, rcp.name, ev.person.name, ev.days, familyName, ev.years > 0 && ev.years < 100 ? ev.years : undefined);
            if (sent) result.emails++;
          } catch (e) {
            result.errors.push(`${familyId}/${ev.person.id}: ${e instanceof Error ? e.message : String(e)}`);
          }
        }
      }
    }
  } catch (e) {
    result.errors.push(e instanceof Error ? e.message : String(e));
  }

  console.log("birthday reminders:", result);
  return NextResponse.json({ ok: true, ...result });
}
