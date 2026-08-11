import { NextRequest, NextResponse } from "next/server";

const KNOLLI_COPILOT_ID = "45963";

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();
    if (!message?.trim()) return NextResponse.json({ error: "Message required" }, { status: 400 });

    // Try multiple Knolli API endpoint formats
    const endpoints = [
      `https://chat.knolli.ai/api/knolli/${KNOLLI_COPILOT_ID}/chat`,
      `https://chat.knolli.ai/api/chat/${KNOLLI_COPILOT_ID}`,
      `https://chat.knolli.ai/knolli/${KNOLLI_COPILOT_ID}/api/chat`,
      `https://chat.knolli.ai/api/v1/copilots/${KNOLLI_COPILOT_ID}/chat`,
    ];

    const body = JSON.stringify({
      message: message.trim(),
      question: message.trim(),
      query: message.trim(),
      messages: [
        ...(history || []).map((h: { role: string; content: string }) => ({
          role: h.role,
          content: h.content,
        })),
        { role: "user", content: message.trim() },
      ],
      session_id: "parampara-session",
    });

    for (const url of endpoints) {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body,
          signal: AbortSignal.timeout(15000),
        });

        if (res.ok) {
          const data = await res.json();
          const answer = data.answer || data.response || data.message ||
            data.content || data.text || data.reply ||
            (data.choices?.[0]?.message?.content) ||
            (data.choices?.[0]?.text);
          if (answer) {
            return NextResponse.json({ answer, source: "knolli" });
          }
        }
      } catch { continue; }
    }

    // All endpoints failed — return helpful message
    return NextResponse.json({
      answer: "I'm connecting to the knowledge base. Please check your Knolli API configuration at chat.knolli.ai — make sure the copilot is set to 'Public' or 'Embedded' scope.",
      source: "knolli-config-needed"
    });

  } catch (err) {
    console.error("Knolli error:", err);
    return NextResponse.json({
      answer: "Connection error. Please try again.",
    }, { status: 500 });
  }
}
