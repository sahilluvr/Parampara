import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { familyName, members, rituals, religion, region } = await req.json();

    // Generate beautiful HTML that can be printed to PDF
    const html = generateHeritageBookHTML({ familyName, members, rituals, religion, region });

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

function generateHeritageBookHTML({ familyName, members, rituals, religion, region }: {
  familyName: string;
  members: Record<string, string>[];
  rituals: Record<string, unknown>[];
  religion: string;
  region: string;
}) {
  const year = new Date().getFullYear();

  const memberRows = (members || []).map((m: Record<string, string>) => `
    <div class="member-card">
      <div class="member-avatar">${m.name?.charAt(0)?.toUpperCase() || "?"}</div>
      <div class="member-info">
        <p class="member-name">${m.name || "Family Member"}</p>
        <p class="member-role">${m.relation || m.role || "Family Member"}</p>
        ${m.birthdate ? `<p class="member-detail">🎂 ${new Date(m.birthdate).toLocaleDateString("en-IN",{day:"numeric",month:"long"})}</p>` : ""}
      </div>
    </div>
  `).join("");

  const ritualPages = (rituals || []).map((r: Record<string, unknown>, i: number) => `
    <div class="ritual-page ${i > 0 ? "page-break" : ""}">
      <div class="ritual-header">
        <span class="ritual-number">${String(i+1).padStart(2,"0")}</span>
        <div>
          <h2 class="ritual-name">${r.name || "Ritual"}</h2>
          ${r.subtitle ? `<p class="ritual-subtitle">${r.subtitle}</p>` : ""}
          <div class="ritual-tags">
            ${r.category ? `<span class="tag">${r.category}</span>` : ""}
            ${Array.isArray(r.religion) ? r.religion.map((rel: string) => `<span class="tag">${rel}</span>`).join("") : r.religion ? `<span class="tag">${r.religion}</span>` : ""}
          </div>
        </div>
      </div>

      ${r.description ? `<p class="ritual-description">${r.description}</p>` : ""}

      ${Array.isArray(r.steps) && r.steps.length > 0 ? `
        <div class="ritual-section">
          <h3 class="section-title">🪔 Ritual Steps</h3>
          ${(r.steps as string[]).map((step: string, si: number) => `
            <div class="step">
              <span class="step-number">${si+1}</span>
              <span class="step-text">${step}</span>
            </div>
          `).join("")}
        </div>
      ` : ""}

      ${Array.isArray(r.samagri) && r.samagri.length > 0 ? `
        <div class="ritual-section">
          <h3 class="section-title">🛒 Samagri Required</h3>
          <div class="samagri-grid">
            ${(r.samagri as string[]).map((item: string) => `<span class="samagri-item">✓ ${item}</span>`).join("")}
          </div>
        </div>
      ` : ""}

      ${Array.isArray(r.mantras) && r.mantras.length > 0 ? `
        <div class="ritual-section mantra-box">
          <h3 class="section-title">🕉️ Mantras</h3>
          ${(r.mantras as string[]).map((m: string) => `<p class="mantra">${m}</p>`).join("")}
        </div>
      ` : ""}

      ${r.elder_notes ? `
        <div class="ritual-section elder-notes">
          <h3 class="section-title">📝 Elder's Notes</h3>
          <p class="notes-text">"${r.elder_notes}"</p>
        </div>
      ` : ""}
    </div>
  `).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${familyName} Heritage Book</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap');

  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:'Inter',sans-serif; background:#FAF7F2; color:#18181B; }

  .cover {
    min-height:100vh; background:linear-gradient(135deg,#1A0A00 0%,#2D1810 50%,#18181B 100%);
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    text-align:center; padding:60px 40px; position:relative; overflow:hidden;
  }
  .cover::before { content:"ॐ"; position:absolute; font-size:400px; color:rgba(200,84,26,0.04); font-family:'Playfair Display',serif; top:50%; left:50%; transform:translate(-50%,-50%); }
  .cover-diya { font-size:80px; margin-bottom:32px; }
  .cover-title { font-family:'Playfair Display',serif; font-size:52px; font-weight:700; color:#fff; line-height:1.1; margin-bottom:16px; }
  .cover-title em { font-style:italic; color:#E8894A; }
  .cover-subtitle { font-size:18px; color:rgba(255,255,255,0.5); margin-bottom:40px; letter-spacing:2px; text-transform:uppercase; }
  .cover-meta { display:flex; gap:24px; font-size:14px; color:rgba(255,255,255,0.4); }
  .cover-meta span { display:flex; align-items:center; gap:6px; }
  .cover-bar { width:60px; height:3px; background:linear-gradient(90deg,#C8541A,#B8922A); border-radius:2px; margin:24px auto; }

  .section-divider { text-align:center; padding:60px 40px 40px; background:#FAF7F2; }
  .section-divider h2 { font-family:'Playfair Display',serif; font-size:32px; color:#18181B; margin-bottom:8px; }
  .section-divider p { font-size:14px; color:#71717A; }
  .divider-line { width:40px; height:2px; background:linear-gradient(90deg,#C8541A,#B8922A); margin:16px auto 0; border-radius:2px; }

  .members-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:16px; padding:0 40px 60px; }
  .member-card { background:#fff; border-radius:16px; padding:20px; border:1px solid rgba(184,146,42,0.15); display:flex; align-items:center; gap:14px; }
  .member-avatar { width:48px; height:48px; border-radius:50%; background:linear-gradient(135deg,#C8541A,#B8922A); display:flex; align-items:center; justify-content:center; font-family:'Playfair Display',serif; font-size:20px; font-weight:700; color:#fff; flex-shrink:0; }
  .member-name { font-size:15px; font-weight:600; color:#18181B; }
  .member-role { font-size:12px; color:#71717A; margin-top:2px; }
  .member-detail { font-size:11px; color:#C8541A; margin-top:3px; }

  .ritual-page { padding:40px; background:#fff; min-height:600px; margin-bottom:0; }
  .page-break { page-break-before:always; }
  .ritual-header { display:flex; gap:20px; align-items:flex-start; margin-bottom:24px; padding-bottom:20px; border-bottom:2px solid #FDF0E6; }
  .ritual-number { font-family:'Playfair Display',serif; font-size:64px; font-weight:700; color:rgba(200,84,26,0.12); line-height:1; flex-shrink:0; }
  .ritual-name { font-family:'Playfair Display',serif; font-size:30px; font-weight:600; color:#18181B; margin-bottom:6px; }
  .ritual-subtitle { font-size:14px; color:#71717A; margin-bottom:10px; }
  .ritual-tags { display:flex; gap:6px; flex-wrap:wrap; }
  .tag { font-size:11px; font-weight:600; background:#FDF0E6; color:#C8541A; padding:3px 10px; border-radius:20px; }
  .ritual-description { font-size:15px; color:#374151; line-height:1.8; margin-bottom:24px; }
  .ritual-section { margin-bottom:24px; }
  .section-title { font-size:13px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#C8541A; margin-bottom:12px; }
  .step { display:flex; gap:12px; align-items:flex-start; margin-bottom:10px; }
  .step-number { width:26px; height:26px; border-radius:50%; background:#FDF0E6; border:1.5px solid #C8541A; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; color:#C8541A; flex-shrink:0; }
  .step-text { font-size:14px; color:#374151; line-height:1.7; padding-top:3px; }
  .samagri-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(180px,1fr)); gap:6px; }
  .samagri-item { font-size:13px; color:#374151; padding:6px 12px; background:#E8F4EE; border-radius:8px; }
  .mantra-box { background:#FFFBEB; border-radius:12px; padding:16px 20px; }
  .mantra { font-family:'Playfair Display',serif; font-size:15px; color:#18181B; line-height:2; margin-bottom:4px; }
  .elder-notes { background:#F5F0E8; border-radius:12px; padding:16px 20px; border-left:3px solid #B8922A; }
  .notes-text { font-family:'Playfair Display',serif; font-style:italic; font-size:15px; color:#374151; line-height:1.8; }

  .footer { text-align:center; padding:40px; background:#18181B; color:rgba(255,255,255,0.3); font-size:12px; }
  .footer strong { color:rgba(255,255,255,0.6); }

  @media print {
    body { background:#fff; }
    .cover { min-height:100vh; }
    .page-break { page-break-before:always; }
    @page { margin:0; }
  }

  /* Print button - hidden on print */
  .print-bar { position:fixed; bottom:20px; right:20px; display:flex; gap:10px; z-index:100; }
  .print-btn { padding:12px 24px; background:linear-gradient(135deg,#C8541A,#B8922A); color:#fff; border:none; border-radius:12px; font-size:14px; font-weight:600; cursor:pointer; font-family:'Inter',sans-serif; box-shadow:0 4px 20px rgba(200,84,26,0.4); }
  @media print { .print-bar { display:none; } }
</style>
</head>
<body>

<!-- Print Button -->
<div class="print-bar">
  <button class="print-btn" onclick="window.print()">🖨️ Print / Save PDF</button>
</div>

<!-- Cover Page -->
<div class="cover">
  <div class="cover-diya">🪔</div>
  <h1 class="cover-title">The <em>${familyName}</em><br/>Heritage Book</h1>
  <div class="cover-bar"></div>
  <p class="cover-subtitle">Preserved with love · ${year}</p>
  <div class="cover-meta">
    <span>🏛️ ${religion || "Hindu"}</span>
    <span>📍 ${region || "India"}</span>
    <span>👥 ${(members||[]).length} members</span>
    <span>📜 ${(rituals||[]).length} rituals</span>
  </div>
  <p style="color:rgba(255,255,255,0.2);font-size:12px;margin-top:40px;">Generated by Parampara · ourparampara.com</p>
</div>

<!-- Members Section -->
${(members||[]).length > 0 ? `
<div class="section-divider">
  <h2>Family Members</h2>
  <p>The people who carry our traditions forward</p>
  <div class="divider-line"></div>
</div>
<div class="members-grid">${memberRows}</div>
` : ""}

<!-- Rituals Section -->
${(rituals||[]).length > 0 ? `
<div class="section-divider page-break" style="background:#FAF7F2;">
  <h2>Our Rituals & Traditions</h2>
  <p>Documented for generations to come</p>
  <div class="divider-line"></div>
</div>
${ritualPages}
` : ""}

<!-- Footer -->
<div class="footer">
  <p>This Heritage Book was created with ❤️ using <strong>Parampara</strong></p>
  <p style="margin-top:6px;">ourparampara.com · Preserving Indian family traditions</p>
</div>

</body>
</html>`;
}
