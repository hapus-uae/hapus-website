import { NextResponse } from "next/server";
import { resend, MAIL_FROM, MAIL_TO, mailConfigured, enquiryHtml } from "@/lib/mail";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Receives the contact form (JSON) and emails it via Resend, with the visitor's
// address as reply-to so the team can reply directly.
export async function POST(request: Request) {
  if (!mailConfigured()) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const subjectLabel = String(body.subjectLabel ?? "General enquiry").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2 || !EMAIL_RE.test(email) || message.length < 5) {
    return NextResponse.json(
      { error: "Please check your name, email and message." },
      { status: 422 }
    );
  }

  try {
    const { error } = await resend!.emails.send({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject: `[Website] ${subjectLabel}`,
      html: enquiryHtml(
        [
          ["Name", name],
          ["Email", email],
          ["Phone", phone || "—"],
          ["Subject", subjectLabel],
        ],
        message
      ),
    });

    if (error) {
      console.error("Resend error (contact):", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 }
    );
  }
}
