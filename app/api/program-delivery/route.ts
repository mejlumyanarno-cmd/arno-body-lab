import { NextResponse } from "next/server";
import { z } from "zod";
import { getResend, resendFrom } from "@/lib/email/resend";
import { welcomeProgramEmail } from "@/lib/email/templates";
import { createClient } from "@/lib/supabase/server";
import { absoluteUrl } from "@/lib/utils";

const deliverySchema = z.object({
  email: z.string().email(),
  fullName: z.string().optional(),
  programTitle: z.string().min(2)
});

export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") {
    return NextResponse.json({ error: "Admin access required" }, { status: 403 });
  }

  const payload = deliverySchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: "Invalid delivery payload" }, { status: 400 });
  }

  const resend = getResend();
  const emailPayload = welcomeProgramEmail({
    fullName: payload.data.fullName,
    programTitle: payload.data.programTitle,
    loginUrl: absoluteUrl("/login"),
    email: payload.data.email
  });

  await resend.emails.send({
    from: resendFrom,
    to: payload.data.email,
    subject: emailPayload.subject,
    html: emailPayload.html
  });

  return NextResponse.json({ ok: true });
}
