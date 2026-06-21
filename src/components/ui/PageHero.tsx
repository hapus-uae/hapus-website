import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

// Standard hero for interior pages. Clears the fixed header and sets the
// asymmetric title/lede rhythm used across the site. Pass `image` for an
// optional background photo (rendered behind a dark wine scrim).
export function PageHero({
  eyebrow,
  title,
  lead,
  aside,
  image,
  imageClassName = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  aside?: ReactNode;
  image?: string;
  /** Extra classes for the background image, e.g. "object-top" to anchor it. */
  imageClassName?: string;
}) {
  return (
    <section className="on-wine relative overflow-hidden border-b border-line bg-ink pt-32 pb-16 lg:pt-44 lg:pb-24">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className={`object-cover ${imageClassName}`}
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,8,9,0.94)_0%,rgba(8,8,9,0.78)_46%,rgba(8,8,9,0.55)_100%)]"
            aria-hidden
          />
        </>
      ) : null}
      <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
      <Container className="relative">
        <Reveal>
          <div className="mb-7">
            <span className="eyebrow">{eyebrow}</span>
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
