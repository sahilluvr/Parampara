// ── Email Service via Resend ──────────────────────────────────
// All email templates in one place
// Resend free plan: 3,000 emails/month, no credit card needed
// Sign up at resend.com → get API key → add RESEND_API_KEY to Vercel

const FROM_EMAIL = "OurParampara <noreply@ourparampara.com>";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.ourparampara.com";

function isConfigured(): boolean {
  return !!process.env.RESEND_API_KEY;
}

async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  if (!isConfigured()) {
    console.log(`[EMAIL NOT CONFIGURED] To: ${to} | Subject: ${subject}`);
    console.log("Add RESEND_API_KEY to Vercel environment variables");
    return false;
  }
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({ from: FROM_EMAIL, to, subject, html });
    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return false;
    }
    console.log(`Email sent: ${data?.id} to ${to}`);
    return true;
  } catch (err) {
    console.error("Email exception:", err);
    return false;
  }
}

// ── Base template wrapper ──
function baseTemplate(content: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Parampara</title>
</head>
<body style="margin:0;padding:0;background:#FAF7F2;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF7F2;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#C8541A,#B8922A);border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
            <div style="font-size:32px;margin-bottom:8px;">🪔</div>
            <div style="font-family:Georgia,serif;font-size:26px;font-weight:700;color:#fff;letter-spacing:-0.5px;">Parampara</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.65);letter-spacing:2px;text-transform:uppercase;margin-top:4px;">Heritage Platform</div>
          </td>
        </tr>
        <!-- Content -->
        <tr>
          <td style="background:#fff;padding:40px;border-left:1px solid rgba(184,146,42,0.15);border-right:1px solid rgba(184,146,42,0.15);">
            ${content}
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#F5F0E8;border-radius:0 0 16px 16px;border:1px solid rgba(184,146,42,0.15);border-top:none;padding:24px 40px;text-align:center;">
            <p style="font-size:12px;color:#71717A;margin:0 0 8px;">परंपरा — Preserving India's family traditions</p>
            <p style="font-size:11px;color:#A1A1AA;margin:0;">
              <a href="${APP_URL}" style="color:#C8541A;text-decoration:none;">ourparampara.com</a> &nbsp;·&nbsp;
              <a href="mailto:ourparamparaofficial@gmail.com" style="color:#C8541A;text-decoration:none;">ourparamparaofficial@gmail.com</a> &nbsp;·&nbsp;
              Chandigarh, India
            </p>
            <p style="font-size:10px;color:#D4D4D8;margin:8px 0 0;">You received this email because you are a member of a Parampara family space.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function btn(text: string, url: string, color = "#C8541A"): string {
  return `<div style="text-align:center;margin:28px 0;">
    <a href="${url}" style="display:inline-block;background:linear-gradient(135deg,${color},#B8922A);color:#fff;text-decoration:none;padding:14px 36px;border-radius:12px;font-size:15px;font-weight:600;letter-spacing:0.2px;">${text}</a>
  </div>`;
}

function divider(): string {
  return `<div style="border-top:1px solid rgba(184,146,42,0.15);margin:28px 0;"></div>`;
}

// ─────────────────────────────────────────────────────────────
// 1. WELCOME EMAIL — sent on signup
// ─────────────────────────────────────────────────────────────
export async function sendWelcomeEmail(to: string, userName: string, familyName: string): Promise<boolean> {
  const html = baseTemplate(`
    <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:600;color:#18181B;margin:0 0 8px;">
      Namaste, ${userName}! 🙏
    </h1>
    <p style="font-size:16px;color:#71717A;margin:0 0 24px;">Welcome to Parampara — your family's digital heritage home.</p>

    <div style="background:#FDF0E6;border-radius:12px;padding:20px 24px;margin-bottom:24px;border-left:3px solid #C8541A;">
      <p style="font-size:14px;color:#18181B;margin:0;font-weight:600;">Your family space is ready:</p>
      <p style="font-size:22px;font-family:Georgia,serif;color:#C8541A;margin:6px 0 0;font-weight:700;">${familyName}</p>
    </div>

    <p style="font-size:14px;color:#18181B;font-weight:600;margin:0 0 12px;">Here's what to do first:</p>
    <table cellpadding="0" cellspacing="0" width="100%">
      ${[
        ["📜","Document your first ritual","Add steps, samagri, mantras from your family tradition"],
        ["👨‍👩‍👧‍👦","Add family members","Invite elders and relatives to your space"],
        ["🗓️","Check the festival calendar","See upcoming festivals with ritual guides"],
        ["📸","Upload a memory","Add photos or voice memos from past ceremonies"],
      ].map(([icon, title, desc]) => `
        <tr>
          <td style="padding:8px 0;">
            <table cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td width="44" style="vertical-align:top;padding-top:2px;">
                  <div style="width:36px;height:36px;background:#FDF0E6;border-radius:10px;text-align:center;line-height:36px;font-size:18px;">${icon}</div>
                </td>
                <td style="padding-left:12px;">
                  <p style="font-size:14px;font-weight:600;color:#18181B;margin:0;">${title}</p>
                  <p style="font-size:12px;color:#71717A;margin:2px 0 0;">${desc}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>`).join("")}
    </table>

    ${btn("Go to your family space →", `${APP_URL}/dashboard`)}
    ${divider()}
    <p style="font-size:12px;color:#A1A1AA;text-align:center;margin:0;">
      Questions? Reply to this email or write to <a href="mailto:ourparamparaofficial@gmail.com" style="color:#C8541A;">ourparamparaofficial@gmail.com</a>
    </p>
  `);
  return sendEmail(to, `Welcome to Parampara, ${familyName}! 🪔`, html);
}

// ─────────────────────────────────────────────────────────────
// 2. FAMILY MEMBER INVITE — sent when adding a member
// ─────────────────────────────────────────────────────────────
export async function sendFamilyInviteEmail(
  to: string,
  inviteeName: string,
  inviterName: string,
  familyName: string,
  role: string,
  inviteLink: string,
  inviteCode: string
): Promise<boolean> {
  const html = baseTemplate(`
    <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:600;color:#18181B;margin:0 0 8px;">
      You've been invited! 🎉
    </h1>
    <p style="font-size:16px;color:#71717A;margin:0 0 24px;">
      <strong>${inviterName}</strong> has invited you to join the <strong>${familyName}</strong> heritage space on Parampara.
    </p>

    <div style="background:#FDF0E6;border-radius:12px;padding:20px 24px;margin-bottom:24px;">
      <table cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="font-size:13px;color:#71717A;padding-bottom:8px;">Family</td>
          <td style="font-size:16px;font-weight:700;color:#C8541A;text-align:right;font-family:Georgia,serif;">${familyName}</td>
        </tr>
        <tr>
          <td style="font-size:13px;color:#71717A;padding-top:4px;">Your role</td>
          <td style="text-align:right;padding-top:4px;">
            <span style="background:#E8F4EE;color:#1A5C42;font-size:12px;font-weight:600;padding:3px 10px;border-radius:20px;">${role}</span>
          </td>
        </tr>
      </table>
    </div>

    <!-- Invite code box — prominent -->
    <div style="background:#18181B;border-radius:14px;padding:24px;margin-bottom:24px;text-align:center;">
      <p style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin:0 0 10px;">YOUR INVITE CODE</p>
      <p style="font-family:monospace;font-size:32px;font-weight:700;color:#D4A843;letter-spacing:6px;margin:0;">${inviteCode}</p>
      <p style="font-size:11px;color:rgba(255,255,255,0.3);margin:10px 0 0;">Use this code if asked during sign up</p>
    </div>

    <p style="font-size:14px;color:#18181B;margin:0 0 20px;">Click the button below to accept your invitation — it takes less than 2 minutes:</p>

    ${btn("Accept invitation & join family →", inviteLink)}

    <div style="background:#F5F0E8;border-radius:10px;padding:14px 18px;margin-top:8px;margin-bottom:20px;">
      <p style="font-size:12px;color:#71717A;margin:0;">
        🔒 <strong>Your data is private.</strong> Only members of <strong>${familyName}</strong> can see your family's content.
      </p>
    </div>
    ${divider()}
    <p style="font-size:12px;color:#A1A1AA;text-align:center;margin:0;">
      If you don't know ${inviterName} or received this by mistake, ignore this email.
    </p>
  `);
  return sendEmail(to, `${inviterName} invited you to join ${familyName} on Parampara 🪔`, html);
}

// ─────────────────────────────────────────────────────────────
// 3. NEW RITUAL ADDED — notify all family members
// ─────────────────────────────────────────────────────────────
export async function sendRitualAddedEmail(
  to: string,
  memberName: string,
  addedBy: string,
  familyName: string,
  ritualName: string,
  ritualCategory: string,
  stepCount: number,
  ritualId: string
): Promise<boolean> {
  const html = baseTemplate(`
    <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:600;color:#18181B;margin:0 0 8px;">
      New ritual documented 📜
    </h1>
    <p style="font-size:16px;color:#71717A;margin:0 0 24px;">
      <strong>${addedBy}</strong> just added a new ritual to the <strong>${familyName}</strong> heritage space.
    </p>

    <div style="background:#FDF0E6;border-left:3px solid #C8541A;border-radius:0 12px 12px 0;padding:20px 24px;margin-bottom:24px;">
      <p style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#C8541A;margin:0 0 6px;">${ritualCategory}</p>
      <p style="font-family:Georgia,serif;font-size:24px;font-weight:700;color:#18181B;margin:0 0 6px;">${ritualName}</p>
      <p style="font-size:13px;color:#71717A;margin:0;">${stepCount} steps documented</p>
    </div>

    <p style="font-size:14px;color:#18181B;margin:0 0 20px;">
      This ritual is now part of your family's permanent heritage record. 
      You can view all steps, samagri list, mantras, and elder notes inside the app.
    </p>

    ${btn(`View ${ritualName} →`, `${APP_URL}/rituals/${ritualId}`)}
    ${divider()}
    <p style="font-size:12px;color:#A1A1AA;text-align:center;margin:0;">
      You're receiving this because you're a member of <strong>${familyName}</strong> on Parampara.
    </p>
  `);
  return sendEmail(to, `${addedBy} documented "${ritualName}" in ${familyName} 📜`, html);
}

// ─────────────────────────────────────────────────────────────
// 4. BIRTHDAY REMINDER — sent 3 days before
// ─────────────────────────────────────────────────────────────
export async function sendBirthdayReminderEmail(
  to: string,
  recipientName: string,
  birthdayPersonName: string,
  daysUntil: number,
  familyName: string,
  age?: number
): Promise<boolean> {
  const isToday = daysUntil === 0;
  const subject = isToday
    ? `🎂 Today is ${birthdayPersonName}'s birthday!`
    : `🎂 ${birthdayPersonName}'s birthday is in ${daysUntil} day${daysUntil !== 1 ? "s" : ""}`;

  const html = baseTemplate(`
    <div style="text-align:center;margin-bottom:28px;">
      <div style="font-size:56px;">🎂</div>
    </div>
    <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:600;color:#18181B;margin:0 0 8px;text-align:center;">
      ${isToday ? `Today is ${birthdayPersonName}'s birthday!` : `${birthdayPersonName}'s birthday is coming up`}
    </h1>
    <p style="font-size:16px;color:#71717A;margin:0 0 24px;text-align:center;">
      ${isToday
        ? `Don't forget to wish them today!`
        : `Just ${daysUntil} day${daysUntil !== 1 ? "s" : ""} to go — send your wishes early!`
      }
    </p>

    <div style="background:#FFF1F2;border-radius:12px;padding:20px 24px;margin-bottom:24px;text-align:center;">
      <p style="font-size:14px;color:#E11D48;margin:0 0 4px;font-weight:600;">${birthdayPersonName}</p>
      ${age ? `<p style="font-size:13px;color:#71717A;margin:0;">Turning ${age} ${isToday ? "today" : `in ${daysUntil} day${daysUntil !== 1 ? "s" : ""}`}</p>` : ""}
      <p style="font-size:12px;color:#A1A1AA;margin:6px 0 0;">Member of ${familyName}</p>
    </div>

    <div style="background:#F0FDF4;border-radius:10px;padding:16px 20px;margin-bottom:20px;">
      <p style="font-size:13px;color:#18181B;font-weight:600;margin:0 0 8px;">💬 Quick WhatsApp wish:</p>
      <p style="font-size:13px;color:#4B5563;font-style:italic;margin:0;line-height:1.6;">
        "🎂 Happy Birthday ${birthdayPersonName}! Wishing you joy and blessings. With love from all of us at ${familyName} 🪔"
      </p>
    </div>

    ${btn("Open Family Space →", `${APP_URL}/members`, "#1A5C42")}
  `);
  return sendEmail(to, subject, html);
}

// ─────────────────────────────────────────────────────────────
// 5. ANNIVERSARY REMINDER — sent 3 days before
// ─────────────────────────────────────────────────────────────
export async function sendAnniversaryReminderEmail(
  to: string,
  recipientName: string,
  coupleName: string,
  daysUntil: number,
  familyName: string,
  years?: number
): Promise<boolean> {
  const isToday = daysUntil === 0;
  const html = baseTemplate(`
    <div style="text-align:center;margin-bottom:28px;">
      <div style="font-size:56px;">💍</div>
    </div>
    <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:600;color:#18181B;margin:0 0 8px;text-align:center;">
      ${isToday ? `Today is ${coupleName}'s anniversary!` : `${coupleName}'s anniversary in ${daysUntil} day${daysUntil !== 1 ? "s" : ""}`}
    </h1>
    <div style="background:#FFF1F2;border-radius:12px;padding:20px 24px;margin:24px 0;text-align:center;">
      <p style="font-size:18px;font-weight:600;color:#E11D48;margin:0;">${coupleName}</p>
      ${years ? `<p style="font-size:14px;color:#71717A;margin:6px 0 0;">${years} beautiful year${years !== 1 ? "s" : ""} together</p>` : ""}
    </div>
    ${btn("Open Family Space →", `${APP_URL}/members`, "#E11D48")}
  `);
  return sendEmail(to, `💍 ${isToday ? "Today is" : `${daysUntil} days to`} ${coupleName}'s anniversary!`, html);
}

// ─────────────────────────────────────────────────────────────
// 6. FESTIVAL REMINDER — sent 7 days before
// ─────────────────────────────────────────────────────────────
export async function sendFestivalReminderEmail(
  to: string,
  memberName: string,
  festivalName: string,
  festivalDate: string,
  daysUntil: number,
  significance: string,
  familyName: string
): Promise<boolean> {
  const html = baseTemplate(`
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:56px;">🪔</div>
    </div>
    <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:600;color:#18181B;margin:0 0 8px;text-align:center;">
      ${festivalName} is coming up
    </h1>
    <p style="font-size:16px;color:#71717A;margin:0 0 24px;text-align:center;">
      ${daysUntil === 0 ? "Today!" : `${daysUntil} day${daysUntil !== 1 ? "s" : ""} away — time to prepare`}
    </p>

    <div style="background:#FDF0E6;border-radius:12px;padding:20px 24px;margin-bottom:24px;">
      <table cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="font-size:13px;color:#71717A;">Festival</td>
          <td style="font-size:15px;font-weight:700;color:#C8541A;text-align:right;font-family:Georgia,serif;">${festivalName}</td>
        </tr>
        <tr>
          <td style="font-size:13px;color:#71717A;padding-top:8px;">Date</td>
          <td style="font-size:14px;color:#18181B;text-align:right;padding-top:8px;">${festivalDate}</td>
        </tr>
      </table>
    </div>

    <p style="font-size:14px;color:#4B5563;line-height:1.7;margin:0 0 20px;">${significance}</p>

    <div style="background:#F5F0E8;border-radius:10px;padding:14px 18px;margin-bottom:20px;">
      <p style="font-size:13px;color:#18181B;margin:0;">
        📖 Your family has documented rituals for this festival. Open the app to review the steps and samagri list.
      </p>
    </div>

    ${btn("View Festival Guide →", `${APP_URL}/festivals`)}
  `);
  return sendEmail(to, `🪔 ${festivalName} is in ${daysUntil} day${daysUntil !== 1 ? "s" : ""} — ${familyName}`, html);
}

// ─────────────────────────────────────────────────────────────
// 7. MEMORY ADDED — when someone adds a photo/memory
// ─────────────────────────────────────────────────────────────
export async function sendMemoryAddedEmail(
  to: string,
  memberName: string,
  addedBy: string,
  familyName: string,
  memoryLabel: string,
  memoryType: "photo"|"video"|"audio"
): Promise<boolean> {
  const typeEmoji = { photo:"📸", video:"🎥", audio:"🎙" }[memoryType];
  const typeLabel = { photo:"photo", video:"video", audio:"voice memo" }[memoryType];
  const html = baseTemplate(`
    <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:600;color:#18181B;margin:0 0 8px;">
      New memory added ${typeEmoji}
    </h1>
    <p style="font-size:16px;color:#71717A;margin:0 0 24px;">
      <strong>${addedBy}</strong> added a new ${typeLabel} to the <strong>${familyName}</strong> memory vault.
    </p>
    <div style="background:#FDF0E6;border-left:3px solid #C8541A;border-radius:0 12px 12px 0;padding:16px 20px;margin-bottom:24px;">
      <p style="font-size:12px;color:#C8541A;font-weight:600;margin:0 0 4px;text-transform:uppercase;letter-spacing:1px;">${typeLabel}</p>
      <p style="font-size:18px;font-weight:600;color:#18181B;font-family:Georgia,serif;margin:0;">${memoryLabel}</p>
    </div>
    ${btn("View Memory Vault →", `${APP_URL}/media`)}
  `);
  return sendEmail(to, `${addedBy} added a memory to ${familyName} ${typeEmoji}`, html);
}

// ─────────────────────────────────────────────────────────────
// 8. WEEKLY MEMORY DIGEST — sent every Sunday
// ─────────────────────────────────────────────────────────────
export async function sendWeeklyDigestEmail(
  to: string,
  memberName: string,
  familyName: string,
  ritualsCount: number,
  membersCount: number,
  upcomingFestival?: string,
  upcomingDays?: number
): Promise<boolean> {
  const html = baseTemplate(`
    <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:600;color:#18181B;margin:0 0 8px;">
      Your weekly heritage update
    </h1>
    <p style="font-size:15px;color:#71717A;margin:0 0 28px;">Here's what's happening in <strong>${familyName}</strong> this week.</p>

    <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:24px;">
      <tr>
        <td width="48%" style="background:#FDF0E6;border-radius:12px;padding:20px;text-align:center;">
          <p style="font-family:Georgia,serif;font-size:36px;font-weight:700;color:#C8541A;margin:0;">${ritualsCount}</p>
          <p style="font-size:12px;color:#71717A;margin:4px 0 0;">Rituals documented</p>
        </td>
        <td width="4%"></td>
        <td width="48%" style="background:#E8F4EE;border-radius:12px;padding:20px;text-align:center;">
          <p style="font-family:Georgia,serif;font-size:36px;font-weight:700;color:#1A5C42;margin:0;">${membersCount}</p>
          <p style="font-size:12px;color:#71717A;margin:4px 0 0;">Family members</p>
        </td>
      </tr>
    </table>

    ${upcomingFestival ? `
    <div style="background:#FFFBEB;border:1px solid rgba(184,146,42,0.2);border-radius:12px;padding:16px 20px;margin-bottom:24px;">
      <p style="font-size:13px;font-weight:600;color:#B8922A;margin:0 0 4px;">🗓️ Upcoming</p>
      <p style="font-size:15px;font-weight:600;color:#18181B;margin:0;">${upcomingFestival} in ${upcomingDays} days</p>
    </div>` : ""}

    <div style="background:#F5F0E8;border-radius:10px;padding:16px 20px;margin-bottom:24px;">
      <p style="font-size:13px;font-weight:600;color:#18181B;margin:0 0 8px;">💡 This week's suggestion</p>
      <p style="font-size:13px;color:#4B5563;margin:0;line-height:1.6;">
        Ask an elder in your family to describe how they remember a ritual from their childhood. 
        Record it as a voice memo and add it to your Memory Vault — before the memory fades.
      </p>
    </div>

    ${btn("Open Family Space →", `${APP_URL}/dashboard`)}
  `);
  return sendEmail(to, `${familyName} weekly update 🪔 — ${ritualsCount} rituals, ${membersCount} members`, html);
}

// ─────────────────────────────────────────────────────────────
// 9. PRO UPGRADE CONFIRMATION
// ─────────────────────────────────────────────────────────────
export async function sendUpgradeConfirmationEmail(
  to: string,
  userName: string,
  familyName: string,
  billingCycle: "monthly"|"yearly",
  amount: string
): Promise<boolean> {
  const html = baseTemplate(`
    <div style="text-align:center;margin-bottom:28px;">
      <div style="font-size:56px;">✨</div>
    </div>
    <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:600;color:#18181B;margin:0 0 8px;text-align:center;">
      Welcome to Pro, ${userName}!
    </h1>
    <p style="font-size:16px;color:#71717A;margin:0 0 28px;text-align:center;">
      Your upgrade is confirmed. All Pro features are now unlocked.
    </p>

    <div style="background:#18181B;border-radius:16px;padding:24px;margin-bottom:24px;">
      <div style="border-top:2px solid;border-image:linear-gradient(90deg,#C8541A,#B8922A) 1;margin-bottom:20px;"></div>
      <table cellpadding="0" cellspacing="0" width="100%">
        ${[
          ["Plan","Parampara Pro"],
          ["Family",""+familyName],
          ["Billing",billingCycle === "yearly" ? "Annual" : "Monthly"],
          ["Amount",amount],
        ].map(([k,v]) => `
          <tr>
            <td style="font-size:13px;color:rgba(255,255,255,0.4);padding:6px 0;">${k}</td>
            <td style="font-size:13px;color:#fff;text-align:right;font-weight:500;padding:6px 0;">${v}</td>
          </tr>`).join("")}
      </table>
    </div>

    <p style="font-size:14px;color:#18181B;font-weight:600;margin:0 0 12px;">Your Pro features:</p>
    ${["✨ AI Ritual Explainer — unlimited","🛒 AI Samagri Generator — unlimited","🔍 AI Gap Finder — unlimited","Unlimited family spaces & rituals","10GB media storage","PDF export","Voice memo recording"].map(f =>
      `<p style="font-size:14px;color:#4B5563;margin:6px 0;padding-left:4px;">✓ ${f}</p>`
    ).join("")}

    ${btn("Start using Pro features →", `${APP_URL}/ai`)}
    ${divider()}
    <p style="font-size:12px;color:#A1A1AA;text-align:center;margin:0;">
      Questions about billing? <a href="mailto:ourparamparaofficial@gmail.com" style="color:#C8541A;">ourparamparaofficial@gmail.com</a>
    </p>
  `);
  return sendEmail(to, `✨ You're now on Parampara Pro — ${familyName}`, html);
}

// ─────────────────────────────────────────────────────────────
// 10. PASSWORD RESET (backup — Supabase handles this natively)
// ─────────────────────────────────────────────────────────────
export async function sendPasswordResetEmail(
  to: string,
  userName: string,
  resetLink: string
): Promise<boolean> {
  const html = baseTemplate(`
    <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:600;color:#18181B;margin:0 0 8px;">
      Reset your password
    </h1>
    <p style="font-size:15px;color:#71717A;margin:0 0 24px;">
      We received a request to reset your Parampara password. Click the button below to create a new one.
    </p>
    ${btn("Reset password →", resetLink, "#1A5C42")}
    <div style="background:#FEF2F2;border-radius:10px;padding:14px 18px;margin-top:8px;">
      <p style="font-size:12px;color:#DC2626;margin:0;">
        ⚠️ This link expires in 1 hour. If you didn't request this, please ignore this email.
      </p>
    </div>
  `);
  return sendEmail(to, "Reset your Parampara password", html);
}

export async function sendUpgradeEmail(
  to: string,
  userName: string,
  familyName: string,
  billingCycle: string,
  amount: string
): Promise<boolean> {
  const appUrl = "https://www.ourparampara.com";
  const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#FAF7F2;font-family:Inter,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td align="center" style="padding:40px 20px;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.1);">

  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#18181B,#2D1810);padding:40px 36px;text-align:center;position:relative;">
    <img src="${appUrl}/logo.png" width="72" height="72" alt="OurParampara" style="border-radius:50%;object-fit:cover;display:block;margin:0 auto 16px;box-shadow:0 8px 28px rgba(200,84,26,0.4);"/>
    <h1 style="font-family:Georgia,serif;font-size:26px;font-weight:600;color:#fff;margin:0 0 8px;">Welcome to Pro, ${userName}! 🪔</h1>
    <p style="font-size:14px;color:rgba(255,255,255,0.6);margin:0;">Your heritage is now fully preserved.</p>
  </td></tr>

  <!-- Gold bar -->
  <tr><td style="background:linear-gradient(90deg,#C8541A,#B8922A,#C8541A);height:3px;font-size:0;line-height:0;">&nbsp;</td></tr>

  <!-- Confirmation -->
  <tr><td style="padding:36px 36px 28px;text-align:center;background:linear-gradient(180deg,#FFFBF5,#fff);">
    <div style="display:inline-block;background:linear-gradient(135deg,#FDF0E6,#FAF7F2);border:1.5px solid rgba(200,84,26,0.2);border-radius:16px;padding:20px 32px;margin-bottom:24px;">
      <p style="font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#C8541A;margin:0 0 8px;">✨ PRO PLAN ACTIVATED</p>
      <p style="font-family:Georgia,serif;font-size:28px;font-weight:700;color:#18181B;margin:0 0 4px;">${amount}</p>
      <p style="font-size:13px;color:#71717A;margin:0;">${billingCycle === "yearly" ? "Billed annually" : "Billed monthly"} · Cancel anytime</p>
    </div>
    <p style="font-size:15px;color:#374151;line-height:1.8;margin:0 0 24px;">
      ${familyName}'s heritage is now fully unlocked. Every ritual, every memory, every tradition — preserved forever.
    </p>
  </td></tr>

  <!-- Features -->
  <tr><td style="padding:0 36px 32px;">
    <p style="font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#18181B;margin:0 0 16px;">Everything you've unlocked:</p>
    <table width="100%" cellpadding="0" cellspacing="0">
    ${[
      ["🤖", "AI Ritual Assistant", "Ask anything about rituals, samagri, and traditions — unlimited"],
      ["📖", "Heritage Book PDF", "Export your family's complete heritage as a printable book"],
      ["🎙️", "Elder Voice Archive", "Record your elders' wisdom — preserve their voice forever"],
      ["☁️", "Cross-device Sync", "Web, mobile, tablet — all in perfect sync"],
      ["🙏", "Unlimited Rituals", "Document every tradition — no limits"],
      ["👥", "Unlimited Spaces", "Multiple family branches, all connected"],
      ["📅", "WhatsApp Reminders", "Never miss a birthday, anniversary or festival"],
    ].map(([emoji, title, desc]) => `
    <tr><td style="padding:10px 0;border-bottom:1px solid #F5F0E8;">
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td width="40" style="vertical-align:top;font-size:22px;padding-top:2px;">${emoji}</td>
        <td style="vertical-align:top;">
          <p style="font-size:14px;font-weight:600;color:#18181B;margin:0 0 2px;">${title}</p>
          <p style="font-size:12px;color:#71717A;margin:0;line-height:1.5;">${desc}</p>
        </td>
        <td width="24" style="vertical-align:top;text-align:right;color:#1A5C42;font-weight:700;font-size:16px;">✓</td>
      </tr></table>
    </td></tr>`).join("")}
    </table>
  </td></tr>

  <!-- CTA -->
  <tr><td style="padding:0 36px 36px;text-align:center;">
    <a href="${appUrl}/dashboard" style="display:inline-block;background:linear-gradient(135deg,#C8541A,#B8922A);color:#fff;text-decoration:none;padding:15px 48px;border-radius:14px;font-size:15px;font-weight:700;letter-spacing:-0.2px;box-shadow:0 8px 28px rgba(200,84,26,0.35);">
      Open OurParampara →
    </a>
    <p style="font-size:12px;color:#9CA3AF;margin:16px 0 0;line-height:1.6;">
      Questions? Reply to this email or WhatsApp us at <a href="https://wa.me/919878966563" style="color:#C8541A;text-decoration:none;">+91 98789 66563</a>
    </p>
  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#1A0800;padding:24px 36px;text-align:center;">
    <p style="font-family:Georgia,serif;font-size:14px;color:rgba(255,255,255,0.6);margin:0 0 6px;">🪔 OurParampara</p>
    <p style="font-size:11px;color:rgba(255,255,255,0.3);margin:0;line-height:1.6;">
      © ${new Date().getFullYear()} OurParampara · ourparampara.com<br/>
      Preserving Indian family traditions for generations
    </p>
  </td></tr>

</table></td></tr></table>
</body></html>`;
  return sendEmail(to, `✨ Welcome to Pro, ${userName}! Your heritage is now fully unlocked`, html);
}

// ─────────────────────────────────────────────────────────────
// 12. PRO EXPIRING SOON — sent ~3 days before plan_expires_at
//     (Razorpay is one-time payment, not auto-renewing, so this is
//     the only nudge a user gets before losing Pro access)
// ─────────────────────────────────────────────────────────────
export async function sendPlanExpiringEmail(
  to: string,
  userName: string,
  familyName: string,
  expiresAt: string
): Promise<boolean> {
  const expiryDate = new Date(expiresAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  const html = baseTemplate(`
    <div style="text-align:center;margin-bottom:28px;">
      <div style="font-size:48px;">⏳</div>
    </div>
    <h1 style="font-family:Georgia,serif;font-size:26px;font-weight:600;color:#18181B;margin:0 0 8px;text-align:center;">
      Your Pro plan expires soon
    </h1>
    <p style="font-size:15px;color:#71717A;margin:0 0 24px;text-align:center;line-height:1.7;">
      Hi ${userName}, your Parampara Pro access for <strong style="color:#18181B;">${familyName}</strong> ends on <strong style="color:#C8541A;">${expiryDate}</strong>. Renew now to keep everything unlocked without interruption.
    </p>

    <div style="background:#FFF7ED;border:1px solid rgba(200,84,26,0.2);border-radius:14px;padding:18px 22px;margin-bottom:24px;">
      <p style="font-size:13px;font-weight:600;color:#18181B;margin:0 0 10px;">What you'll lose if Pro expires:</p>
      ${["AI Ritual Assistant","Heritage Book PDF export","Elder Voice Archive","Unlimited rituals & family spaces","10GB media storage"].map(f =>
        `<p style="font-size:13px;color:#71717A;margin:5px 0;padding-left:4px;">· ${f}</p>`
      ).join("")}
    </div>

    <p style="font-size:13px;color:#71717A;margin:0 0 4px;text-align:center;">Your family's data is always safe — Pro features simply pause until you renew.</p>

    ${btn("Renew Pro now →", `${APP_URL}/upgrade`)}
    ${divider()}
    <p style="font-size:12px;color:#A1A1AA;text-align:center;margin:0;">
      Questions about billing? <a href="mailto:ourparamparaofficial@gmail.com" style="color:#C8541A;">ourparamparaofficial@gmail.com</a>
    </p>
  `);
  return sendEmail(to, `⏳ Your Parampara Pro plan expires on ${expiryDate}`, html);
}

// ─────────────────────────────────────────────────────────────
// 13. PRO PLAN EXPIRED — sent the moment the daily cron downgrades
//     a user from pro → free because plan_expires_at has passed
// ─────────────────────────────────────────────────────────────
export async function sendPlanExpiredEmail(
  to: string,
  userName: string,
  familyName: string
): Promise<boolean> {
  const html = baseTemplate(`
    <div style="text-align:center;margin-bottom:28px;">
      <div style="font-size:48px;">🔓</div>
    </div>
    <h1 style="font-family:Georgia,serif;font-size:26px;font-weight:600;color:#18181B;margin:0 0 8px;text-align:center;">
      Your Pro plan has ended
    </h1>
    <p style="font-size:15px;color:#71717A;margin:0 0 24px;text-align:center;line-height:1.7;">
      Hi ${userName}, ${familyName}'s Parampara Pro subscription has ended and the account is now on the Free plan.
    </p>

    <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:14px;padding:18px 22px;margin-bottom:24px;">
      <p style="font-size:13px;font-weight:600;color:#15803D;margin:0 0 6px;">Good news — nothing is deleted.</p>
      <p style="font-size:13px;color:#374151;margin:0;line-height:1.7;">Every ritual, member, and memory you've added stays exactly where it is. You just won't be able to add beyond the free plan's limits or use Pro-only features like AI assistance and Heritage Book export until you renew.</p>
    </div>

    ${btn("Reactivate Pro →", `${APP_URL}/upgrade`)}
    ${divider()}
    <p style="font-size:12px;color:#A1A1AA;text-align:center;margin:0;">
      Questions about billing? <a href="mailto:ourparamparaofficial@gmail.com" style="color:#C8541A;">ourparamparaofficial@gmail.com</a>
    </p>
  `);
  return sendEmail(to, `Your Parampara Pro plan has ended — ${familyName}`, html);
}
