import { NextResponse } from "next/server";
import { getResend, resendFrom } from "@/lib/email/resend";
import { rateLimit } from "@/lib/rate-limit";
import { contactSchema } from "@/lib/validators/contact";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const limit = rateLimit(`contact:${ip}`, 5, 60_000);

  if (!limit.allowed) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const payload = contactSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: "Invalid contact request" }, { status: 400 });
  }

  const resend = getResend();
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    return NextResponse.json({ error: "ADMIN_EMAIL is missing" }, { status: 500 });
  }

  await resend.emails.send({
    from: resendFrom,
    to: adminEmail,
    replyTo: payload.data.email,
    subject: `New coaching request: ${payload.data.goal}`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h1>New coaching request</h1>
        <p><strong>Name:</strong> ${escapeHtml(payload.data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.data.email)}</p>
        <p><strong>Goal:</strong> ${escapeHtml(payload.data.goal)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(payload.data.message)}</p>
      </div>
    `
  });

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
