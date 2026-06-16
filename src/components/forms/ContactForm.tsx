"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { categories } from "@/data/categories";
import { company } from "@/data/company";

type Status = "idle" | "submitting" | "success";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const subjects = [
  { value: "", label: "Select a subject" },
  { value: "general", label: "General enquiry" },
  ...categories.map((c) => ({ value: c.slug, label: `Quote — ${c.name}` })),
  { value: "service", label: "Service & support" },
  { value: "training", label: "Training" },
];

export function ContactForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");

  // Pre-fill subject + message from a category/product enquiry link (read once
  // from the URL at mount — no effect needed).
  const [form, setForm] = useState(() => {
    const category = params.get("category");
    const product = params.get("product");
    const match = categories.find((c) => c.slug === category);
    return {
      name: "",
      email: "",
      phone: "",
      subject: match ? match.slug : "",
      message: product
        ? `I would like a quote for the ${product}${
            match ? ` (${match.name})` : ""
          }.`
        : match
          ? `I would like a quote for ${match.name.toLowerCase()}.`
          : "",
    };
  });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (form.message.trim().length < 10)
      next.message = "A little more detail helps us quote accurately.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setServerError("");
    setStatus("submitting");

    const subjectLabel =
      subjects.find((s) => s.value === form.subject)?.label ?? "General enquiry";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          subjectLabel,
          message: form.message,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("idle");
      setServerError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="border border-line bg-panel/40 p-8 lg:p-10">
        <CheckCircle weight="light" className="size-10 text-bone" />
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-bone">
          Thanks — your message is on its way.
        </h3>
        <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-mute">
          We&apos;ve received your enquiry and will reply within one business
          day. Prefer to talk? Call{" "}
          <a
            href={`tel:${company.phoneHref}`}
            className="text-bone underline-offset-4 hover:underline"
          >
            {company.phoneDisplay}
          </a>
          .
        </p>
        <Button
          type="button"
          variant="outline"
          size="md"
          className="mt-7"
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", phone: "", subject: "", message: "" });
          }}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name} required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            className={inputClass(!!errors.name)}
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update("email")}
            className={inputClass(!!errors.email)}
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Phone" htmlFor="phone" hint="Optional">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update("phone")}
            className={inputClass(false)}
          />
        </Field>
        <Field label="Subject" htmlFor="subject">
          <div className="relative">
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={update("subject")}
              className={`${inputClass(false)} appearance-none pr-10`}
            >
              {subjects.map((s) => (
                <option key={s.value} value={s.value} className="bg-panel">
                  {s.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mute-2">
              ▾
            </span>
          </div>
        </Field>
      </div>

      <Field
        label="Message"
        htmlFor="message"
        error={errors.message}
        required
        hint="Models you are weighing up, bay size, vehicle types"
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          className={`${inputClass(!!errors.message)} resize-y`}
          aria-invalid={!!errors.message}
        />
      </Field>

      {Object.keys(errors).length > 0 ? (
        <p className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-mute">
          <WarningCircle weight="fill" className="size-4" />
          Please check the highlighted fields.
        </p>
      ) : null}

      {serverError ? (
        <p className="flex items-center gap-2 border border-accent/40 bg-accent/5 px-4 py-3 text-sm text-bone">
          <WarningCircle weight="fill" className="size-4 shrink-0 text-accent" />
          {serverError}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-5">
        <Button type="submit" variant="primary" size="lg" withArrow disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send enquiry"}
        </Button>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-mute-2">
          We reply within one business day
        </p>
      </div>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full border bg-panel/40 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-mute-2 focus:bg-panel ${
    hasError ? "border-bone/70" : "border-line focus:border-bone/60"
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="flex items-baseline justify-between font-mono text-[0.62rem] uppercase tracking-[0.16em] text-mute"
      >
        <span>
          {label}
          {required ? <span className="text-mute-2"> *</span> : null}
        </span>
        {hint ? <span className="text-mute-2 normal-case tracking-normal">{hint}</span> : null}
      </label>
      {children}
      {error ? <span className="text-xs text-bone/80">{error}</span> : null}
    </div>
  );
}
