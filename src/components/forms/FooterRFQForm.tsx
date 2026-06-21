"use client";

import { useState } from "react";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";

// Compact "Send us your requirement" RFQ form for the footer. Posts to the same
// /api/contact endpoint as the full contact form. Email is required because the
// team replies by email (the backend uses it as reply-to).
type Status = "idle" | "submitting" | "success";

export function FooterRFQForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.name.trim().length < 2 || form.requirement.trim().length < 5) {
      setError("Please add your name and a short requirement.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Enter a valid email so we can send your quote.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subjectLabel: "RFQ — Website footer",
          message: `${form.company ? `Company: ${form.company}\n\n` : ""}${form.requirement}`,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-start gap-4 border border-line bg-white/5 p-6">
        <CheckCircle weight="light" className="size-8 shrink-0 text-bone" />
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-bone">
            Request received.
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-mute">
            Thanks — our team will get back to you within one business day with a
            quote.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          aria-label="Your name"
          placeholder="Your name"
          autoComplete="name"
          value={form.name}
          onChange={update("name")}
          className={inputClass}
        />
        <input
          aria-label="Company name"
          placeholder="Company name"
          autoComplete="organization"
          value={form.company}
          onChange={update("company")}
          className={inputClass}
        />
        <input
          aria-label="Email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={form.email}
          onChange={update("email")}
          className={inputClass}
        />
        <input
          aria-label="Phone number"
          type="tel"
          placeholder="Phone number"
          autoComplete="tel"
          value={form.phone}
          onChange={update("phone")}
          className={inputClass}
        />
      </div>
      <textarea
        aria-label="Your requirement"
        placeholder="Your requirement"
        rows={3}
        value={form.requirement}
        onChange={update("requirement")}
        className={`${inputClass} resize-y`}
      />

      {error ? (
        <p className="text-xs text-bone/90">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-1 inline-flex w-full items-center justify-center gap-2 bg-accent px-5 py-3.5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-accent/85 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit RFQ"}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}

const inputClass =
  "w-full border border-line bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:ring-2 focus:ring-bone/40";
