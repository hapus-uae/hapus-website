import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

// Standard hero for interior pages. Clears the fixed header and sets the
// asymmetric title/lede rhythm used across the site.
export function PageHero({
  eyebrow,
  index,
  title,
  lead,
  aside,
}: {
  eyebrow: string;
  index?: string;
  title: ReactNode;
  lead?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="on-wine relative overflow-hidden border-b border-line bg-ink pt-32 pb-16 lg:pt-44 lg:pb-24">
      <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
      <Container className="relative">
        <Reveal>
          <div className="mb-7 flex items-center gap-4">
            {index ? (
              <span className="font-mono text-[0.7rem] tracking-[0.2em] text-mute-2">
                {index}
              </span>
            ) : null}
            <span className="hairline max-w-[3rem] opacity-60" />
            <span className="label">{eyebrow}</span>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal
            as="h1"
            delay={60}
            className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-6xl lg:col-span-8 lg:text-7xl"
          >
            {title}
          </Reveal>
          {lead ? (
            <Reveal
              delay={140}
              className="text-pretty text-base leading-relaxed text-mute lg:col-span-4 lg:col-start-9"
            >
              {lead}
            </Reveal>
          ) : null}
        </div>

        {aside ? <div className="mt-12">{aside}</div> : null}
      </Container>
    </section>
  );
}
