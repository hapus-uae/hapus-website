"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, WarningCircle, Paperclip } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { jobs } from "@/data/jobs";

type Status = "idle" | "submitting" | "success";
type Errors = Partial<Record<"name" | "email" | "role", string>>;

export function CareersForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const fileName = cvFile?.name ?? "";
  // Pre-select the role from a ?role= apply link (read once at mount).
  const [form, setForm] = useState(() => {
    const role = params.get("role");
    return {
      name: "",
      email: "",
      phone: "",
      role: role && jobs.some((j) => j.id === role) ? role : "",
      message: "",
    };
  });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.role) next.role = "Choose the role you are applying for.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setServerError("");
    setStatus("submitting");

    const roleLabel =
      jobs.find((j) => j.id === form.role)?.title ??
      (form.role === "speculative" ? "Speculative application" : "General application");

    try {
      const fd = new FormData();
      fd.set("name", form.name);
      fd.set("email", form.email);
      fd.set("phone", form.phone);
      fd.set("role", form.role);
      fd.set("roleLabel", roleLabel);
      fd.set("message", form.message);
      if (cvFile) fd.set("cv", cvFile);

      const res = await fetch("/api/careers", { method: "POST", body: fd });
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
          Application received — thank you.
        </h3>
        <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-mute">
          We&apos;ve got your details{cvFile ? " and CV" : ""}. We read every
          application and reply to those that fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="c-name" error={errors.name} required>
          <input
            id="c-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Email" htmlFor="c-email" error={errors.email} required>
          <input
            id="c-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update("email")}
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Phone" htmlFor="c-phone" hint="Optional">
          <input
            id="c-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update("phone")}
            className={inputClass(false)}
          />
        </Field>
        <Field label="Role" htmlFor="c-role" error={errors.role} required>
          <div className="relative">
            <select
              id="c-role"
              value={form.role}
              onChange={update("role")}
              className={`${inputClass(!!errors.role)} appearance-none pr-10`}
            >
              <option value="" className="bg-panel">
                Select a role
              </option>
              {jobs.map((j) => (
                <option key={j.id} value={j.id} className="bg-panel">
                  {j.title} — {j.location}
                </option>
              ))}
              <option value="speculative" className="bg-panel">
                Speculative application
              </option>
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mute-2">
              ▾
            </span>
          </div>
        </Field>
      </div>

      <Field label="CV" htmlFor="c-cv" hint="PDF or DOC">
        <label
          htmlFor="c-cv"
          className="flex cursor-pointer items-center gap-3 border border-line bg-panel/40 px-4 py-3 text-sm text-mute transition-colors hover:border-bone/50"
        >
          <Paperclip className="size-4 text-mute-2" />
          {fileName || "Attach your CV"}
        </label>
        <input
          id="c-cv"
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={(e) => setCvFile(e.target.files?.[0] ?? null)}
        />
      </Field>

      <Field label="Message" htmlFor="c-message" hint="Optional — tell us why you'd be a fit">
        <textarea
          id="c-message"
          rows={4}
          value={form.message}
          onChange={update("message")}
          className={`${inputClass(false)} resize-y`}
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

      <Button type="submit" variant="primary" size="lg" withArrow disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit application"}
      </Button>
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
