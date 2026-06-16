import { Resend } from "resend";

// Server-only email helper for the contact + careers forms. Reads credentials
// from .env.local (RESEND_API_KEY, RESEND_EMAIL). Never import this into a
// client component — it must stay on the server so the key is not exposed.

const apiKey = process.env.RESEND_API_KEY;

/** Resend client — null when the API key is missing. */
export const resend = apiKey ? new Resend(apiKey) : null;

/** The verified sender + receiving inbox configured in Resend. */
const inbox = process.env.RESEND_EMAIL ?? "";
export const MAIL_FROM = inbox ? `HAPUS Website <${inbox}>` : "";
export const MAIL_TO = inbox;

export const mailConfigured = () => Boolean(resend && inbox);

/** Escape user input before embedding it in the HTML email body (anti-XSS). */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Branded HTML body for an enquiry: a key/value table plus the message. */
export function enquiryHtml(rows: [string, string][], message: string): string {
  const cells = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#8a6b75;font:600 11px/1.4 Arial,sans-serif;text-transform:uppercase;letter-spacing:.06em;white-space:nowrap;vertical-align:top">${escapeHtml(
          k
        )}</td><td style="padding:6px 0;color:#33141c;font:14px/1.5 Arial,sans-serif">${escapeHtml(
          v
        )}</td></tr>`
    )
    .join("");

  return `<div style="background:#f7f3f4;padding:24px;margin:0">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e7dde0;border-radius:10px;overflow:hidden">
    <div style="background:#571930;padding:18px 24px">
      <span style="color:#fff;font:700 16px Arial,sans-serif;letter-spacing:.1em">HAPUS</span>
    </div>
    <div style="padding:24px">
      <table style="border-collapse:collapse;width:100%">${cells}</table>
      <div style="margin-top:18px;padding-top:18px;border-top:1px solid #e7dde0;color:#33141c;font:14px/1.6 Arial,sans-serif;white-space:pre-wrap">${escapeHtml(
        message
      )}</div>
    </div>
  </div>
</div>`;
}
