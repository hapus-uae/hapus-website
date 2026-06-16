import { NextResponse } from "next/server";
import { resend, MAIL_FROM, MAIL_TO, mailConfigured, enquiryHtml } from "@/lib/mail";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_CV_BYTES = 5 * 1024 * 1024; // 5 MB — comfortably within Resend limits

// Receives the careers form as multipart/form-data so the CV file comes with it,
// then emails the application via Resend with the CV as an attachment (no
// external storage needed).
export async function POST(request: Request) {
  if (!mailConfigured()) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 }
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const roleLabel = String(form.get("roleLabel") ?? "General application").trim();
  const message = String(form.get("message") ?? "").trim();
  const cv = form.get("cv");

  if (name.length < 2 || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please check your name and email." },
      { status: 422 }
    );
  }

  const attachments: { filename: string; content: Buffer }[] = [];
  if (cv && typeof cv === "object" && "arrayBuffer" in cv) {
    const file = cv as File;
    if (file.size > MAX_CV_BYTES) {
      return NextResponse.json(
        { error: "Your CV is too large (max 5 MB)." },
        { status: 413 }
      );
    }
    if (file.size > 0) {
      attachments.push({
        filename: file.name || "cv",
        content: Buffer.from(await file.arrayBuffer()),
      });
    }
  }

  try {
    const { error } = await resend!.emails.send({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject: `[Careers] ${roleLabel}`,
      html: enquiryHtml(
        [
          ["Name", name],
          ["Email", email],
          ["Phone", phone || "—"],
          ["Role", roleLabel],
          ["CV", attachments.length ? attachments[0].filename : "Not attached"],
        ],
        message || "—"
      ),
      attachments: attachments.length ? attachments : undefined,
    });

    if (error) {
      console.error("Resend error (careers):", error);
      return NextResponse.json(
        { error: "Could not submit your application. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Careers route error:", err);
    return NextResponse.json(
      { error: "Could not submit your application. Please try again." },
      { status: 502 }
    );
  }
}
