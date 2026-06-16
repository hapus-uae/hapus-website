"use client";

import { useState } from "react";
import type { Brand } from "@/lib/types";

// Renders a brand's logo if a file exists, else falls back to a clean wordmark.
// Tries, in order: the explicit `logo` field, /assets/brands/<slug>.svg, then
// .png. Drop an official logo at one of those paths and it appears automatically
// — no data edit, no broken image if the file is missing. Shown in full colour;
// scales up slightly on hover.
export function BrandLogo({ brand }: { brand: Brand }) {
  const candidates = [
    brand.logo,
    `/assets/brands/${brand.slug}.svg`,
    `/assets/brands/${brand.slug}.png`,
    `/assets/brands/${brand.slug}.jpg`,
  ].filter(Boolean) as string[];

  const [idx, setIdx] = useState(0);

  if (idx >= candidates.length) {
    return (
      <span className="inline-block font-display text-2xl font-semibold tracking-tight text-bone transition-transform duration-300 ease-out-expo group-hover:scale-110">
        {brand.name}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={candidates[idx]}
      alt={`${brand.name} logo`}
      loading="lazy"
      onError={() => setIdx((i) => i + 1)}
      className="max-h-11 w-auto max-w-[80%] transition-transform duration-300 ease-out-expo group-hover:scale-110"
    />
  );
}
