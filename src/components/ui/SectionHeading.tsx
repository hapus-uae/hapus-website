import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

// Standardised section header block. Eyebrow (mono label + index), a display
// title, and an optional description that sits offset to the right on large
// screens for an asymmetric rhythm.
export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  action,
  className = "",
}: {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow ? (
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            {index ? (
              <span className="font-mono text-[0.7rem] tracking-[0.2em] text-mute-2">
                {index}
              </span>
            ) : null}
            <span className="hairline max-w-[3rem] opacity-60" />
            <span className="label">{eyebrow}</span>
          </div>
        </Reveal>
      ) : null}

      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal
          as="h2"
          delay={60}
          className="font-display text-4xl font-semibold leading-[0.98] tracking-tight text-balance sm:text-5xl lg:col-span-7 lg:text-6xl"
        >
          {title}
        </Reveal>

        {description ? (
          <Reveal
            delay={140}
            className="text-pretty text-base leading-relaxed text-mute lg:col-span-4 lg:col-start-9"
          >
            {description}
          </Reveal>
        ) : null}
      </div>

      {action ? <div className="mt-10">{action}</div> : null}
    </div>
  );
}
