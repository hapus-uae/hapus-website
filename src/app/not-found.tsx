import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="on-wine relative flex min-h-[100dvh] items-center overflow-hidden bg-ink">
      <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
      <Container className="relative">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-mute-2">
          Error 404
        </span>
        <h1 className="mt-6 max-w-[14ch] font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-7xl">
          Nothing here.
        </h1>
        <p className="mt-6 max-w-[48ch] text-base leading-relaxed text-mute">
          The page you are looking for has moved or never existed. Head back to
          the homepage or get in touch.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="primary" size="lg" withArrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/products" variant="outline" size="lg">
            Browse solutions
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
