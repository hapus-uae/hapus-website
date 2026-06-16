import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

// Closing call-to-action band. `href` lets category pages pre-fill the contact
// form with their slug. Rendered on a wine surface to break the light rhythm,
// with a crimson primary CTA.
export function CTABand({
  eyebrow = "Request a quote",
  title = "Tell us what your operation needs.",
  body,
  href = "/contact",
  cta = "Start an enquiry",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <section className="on-wine relative overflow-hidden bg-ink">
      <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
      <Container className="relative py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-pink">
                {eyebrow}
              </span>
            </Reveal>
            <Reveal
              as="h2"
              delay={60}
              className="mt-5 max-w-[18ch] font-display text-4xl font-semibold leading-[0.98] tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              {title}
            </Reveal>
            <Reveal delay={120} className="mt-6 max-w-[52ch] text-base leading-relaxed text-mute">
              {body ??
                "Tell us the equipment you're weighing up, your operation, or just the problem you're trying to solve. We'll come back with a specification and a price."}
            </Reveal>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
            <ButtonLink href={href} variant="primary" size="lg" withArrow>
              {cta}
            </ButtonLink>
            <a
              href={`tel:${company.phoneHref}`}
              className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mute transition-colors hover:text-bone"
            >
              or call {company.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
