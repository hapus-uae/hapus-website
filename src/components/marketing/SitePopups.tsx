"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "@phosphor-icons/react";
import { ButtonLink } from "@/components/ui/Button";

// Two marketing popups, each shown at most once per browser session:
//  • "scroll" — fires after the visitor scrolls 30% of the page
//  • "exit"   — fires on exit intent (cursor leaves the top of the viewport;
//               desktop / fine-pointer only)
type PopupKey = "scroll" | "exit";

const POPUPS: Record<
  PopupKey,
  {
    image: string;
    eyebrow: string;
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  }
> = {
  scroll: {
    image: "/assets/why/expertise.jpg",
    eyebrow: "HAPUS",
    title: "Specifying equipment for your operation?",
    body: "Tell us what you're working on and we'll recommend the right setup — supplied and supported by one accountable partner.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
  exit: {
    image: "/assets/why/partnerships.jpg",
    eyebrow: "Before you go",
    title: "Let's get you a price.",
    body: "Send us your requirement and our team will come back within one business day with a quote.",
    ctaLabel: "Get in touch",
    ctaHref: "/contact",
  },
};

const SEEN_KEY = "hapus_popups_seen";

export function SitePopups() {
  const [active, setActive] = useState<PopupKey | null>(null);
  const [shown, setShown] = useState(false); // drives the enter/leave transition
  const activeRef = useRef<PopupKey | null>(null);

  const close = useCallback(() => {
    setShown(false);
    activeRef.current = null;
    window.setTimeout(() => setActive(null), 250);
  }, []);

  useEffect(() => {
    let seen: Set<string>;
    try {
      seen = new Set(JSON.parse(sessionStorage.getItem(SEEN_KEY) || "[]"));
    } catch {
      seen = new Set();
    }

    const open = (key: PopupKey) => {
      if (activeRef.current) return;
      // The scroll popup shows once per session; the exit-intent popup re-arms
      // and fires every time the cursor leaves the top of the viewport.
      if (key === "scroll") {
        if (seen.has(key)) return;
        seen.add(key);
        sessionStorage.setItem(SEEN_KEY, JSON.stringify([...seen]));
      }
      activeRef.current = key;
      setActive(key);
      requestAnimationFrame(() => setShown(true));
    };

    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      if (max > 0 && el.scrollTop / max >= 0.3) open("scroll");
    };

    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) open("exit");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (finePointer) document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  // Body scroll-lock + Escape-to-close while a popup is open.
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  if (!active) return null;
  const p = POPUPS[active];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={p.title}
      className={`fixed inset-0 z-200 flex items-center justify-center p-4 transition-opacity duration-300 ${
        shown ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={close}
        aria-hidden
      />

      <div
        className={`relative grid w-full max-w-3xl overflow-hidden border border-line bg-surface shadow-2xl transition-all duration-300 ease-out-expo sm:grid-cols-2 ${
          shown ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.98] opacity-0"
        }`}
      >
        <div className="relative aspect-video w-full sm:aspect-auto sm:min-h-[22rem]">
          <Image
            src={p.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 24rem"
            className="object-cover"
          />
        </div>

        <div className="relative flex flex-col justify-center p-8 lg:p-10">
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-line text-mute transition-colors hover:border-bone/40 hover:text-bone"
          >
            <X className="size-4" />
          </button>

          <span className="eyebrow text-accent">{p.eyebrow}</span>
          <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-balance text-bone lg:text-3xl">
            {p.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-mute">{p.body}</p>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            <ButtonLink
              href={p.ctaHref}
              variant="primary"
              size="md"
              withArrow
              onClick={close}
            >
              {p.ctaLabel}
            </ButtonLink>
            <button
              type="button"
              onClick={close}
              className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mute-2 transition-colors hover:text-bone"
            >
              No thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
