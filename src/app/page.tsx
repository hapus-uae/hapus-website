import Link from "next/link";
import {
  ShieldCheck,
  Wrench,
  Package,
  GraduationCap,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { HeroVideo } from "@/components/ui/HeroVideo";
import { CTABand } from "@/components/ui/CTABand";
import { LocationCard } from "@/components/cards/LocationCard";
import { BrandLogo } from "@/components/cards/BrandLogo";
import type { Brand } from "@/lib/types";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { company, locations } from "@/data/company";

// The HAPUS advantage — adapted from the company narrative.
const valueProps = [
  {
    icon: ShieldCheck,
    title: "Strategic global partnerships",
    body: "We represent internationally recognised manufacturers whose technologies professionals trust worldwide accessed through one accountable partner.",
  },
  {
    icon: Wrench,
    title: "Industry-focused expertise",
    body: "We understand the operational realities of automotive and industrial businesses, so we recommend solutions that deliver practical results, not just specifications.",
  },
  {
    icon: Package,
    title: "A complete solution portfolio",
    body: "Refinishing, workshop, compressed air, power tools, material handling, industrial and cleaning solutions — a full ecosystem under one supplier.",
  },
  {
    icon: GraduationCap,
    title: "Support beyond the sale",
    body: "Technical consultation, installation, genuine parts and operator support that protect the value of your equipment over its working life.",
  },
];

const supportPoints: [string, string][] = [
  ["Technical consultation", "The right solution for your operation"],
  ["Installation & commissioning", "Set up to manufacturer standard"],
  ["Spare parts & consumables", "For the brands we represent"],
  ["After-sales support", "Well beyond the point of sale"],
];

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="on-wine relative flex min-h-[100dvh] flex-col justify-end overflow-hidden border-b border-line bg-ink pb-12 pt-28 lg:pb-16">
        {/* Background video (drop files in /public/assets/hero/). Desaturated
            and dimmed to stay on-palette and keep the headline readable. */}
        <HeroVideo
          src="/assets/hero/hero.mp4"
          poster="/assets/hero/hero-poster.jpg"
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-70 filter-[grayscale(1)_contrast(1.05)_brightness(0.42)]"
        />
        <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
        {/* Legibility scrim — darkens left/bottom where the text sits. */}
        {/* Wine veil tints the grayscale video toward the brand colour */}
        <div className="absolute inset-0 bg-ink/35" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,transparent,rgba(50,20,28,0.9))]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-ink)_4%,transparent_55%)]"
          aria-hidden
        />

        <Container className="relative flex flex-1 flex-col justify-center pt-12">
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <span className="size-1.5 bg-accent" aria-hidden />
              <span className="eyebrow">Automotive · Industrial · Workshop solutions</span>
            </div>
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="max-w-[18ch] font-display text-[2.7rem] font-semibold leading-[0.94] tracking-tight text-balance sm:text-6xl lg:text-[5rem]"
          >
            More than a supplier. A strategic solutions partner.
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal
              delay={180}
              className="max-w-[56ch] text-pretty text-base leading-relaxed text-mute lg:col-span-6"
            >
              HAPUS connects global innovation with local industry supplying and
              supporting automotive refinishing, workshop, compressed-air,
              power-tool, material-handling and industrial solutions for businesses
              across {company.region}.
            </Reveal>

            <Reveal delay={260} className="flex flex-wrap gap-3 lg:col-span-6 lg:justify-end">
              <ButtonLink href="/products" variant="primary" size="lg" withArrow>
                Explore solutions
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline" size="lg">
                Contact us
              </ButtonLink>
            </Reveal>
          </div>
        </Container>

        {/* Stat readout strip */}
        <Container className="relative mt-14">
          <Reveal delay={320}>
            <dl className="grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
              {company.stats.map((stat) => (
                <div key={stat.label} className="bg-ink p-5 lg:p-6">
                  <dt className="font-display text-3xl font-semibold tracking-tight text-bone lg:text-4xl">
                    {stat.value}
                    <span className="text-mute-2">{stat.unit}</span>
                  </dt>
                  <dd className="mt-1.5 text-xs leading-snug text-mute">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Intro / about snippet ---------- */}
      <section className="border-b border-line bg-surface">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-2">
              <span className="eyebrow">Who we are</span>
            </div>
            <div className="lg:col-span-10">
              <Reveal
                as="p"
                className="font-display text-2xl font-medium leading-snug tracking-tight text-balance text-bone sm:text-3xl lg:text-[2.4rem]"
              >
                Since 2020, HAPUS has helped businesses across the UAE operate at a
                higher standard connecting workshops, dealerships, fleets and
                industrial operators with world-class equipment, trusted brands,
                and the expertise to use them well.
              </Reveal>
              <Reveal delay={120}>
                <ButtonLink href="/about" variant="ghost" size="md" withArrow className="mt-8">
                  Read our story
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Category marquee divider ---------- */}
      <div className="on-wine border-b border-line bg-ink py-5">
        <Marquee>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className="group flex items-center gap-5 px-6 text-mute transition-colors hover:text-bone"
            >
              <span className="font-mono text-[0.6rem] text-mute-2">{c.index}</span>
              <span className="font-display text-lg font-medium tracking-tight">
                {c.name}
              </span>
              <span className="text-mute-2">/</span>
            </Link>
          ))}
        </Marquee>
      </div>

      {/* ---------- Brands ---------- */}
      <section className="on-wine border-b border-line bg-ink">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="Brands"
            title="The brands professionals trust, through one supplier."
            description="We partner with internationally recognised manufacturers and bring them to you under a single accountable relationship."
            action={
              <ButtonLink href="/brands" variant="outline" size="md" withArrow>
                See all brands
              </ButtonLink>
            }
          />
        </Container>

        <div className="space-y-5 pb-20 lg:pb-28">
          <Marquee>
            {brands.slice(0, 7).map((b) => (
              <BrandPill key={b.slug} brand={b} />
            ))}
          </Marquee>
          <Marquee className="[&_.marquee-track]:[animation-duration:46s] [&_.marquee-track]:[animation-direction:reverse]">
            {brands.slice(7).map((b) => (
              <BrandPill key={b.slug} brand={b} />
            ))}
          </Marquee>
        </div>
      </section>

      {/* ---------- Trusted by ---------- */}
      <section className="border-b border-line bg-surface">
        <Container className="py-14 lg:py-16">
          <p className="label mb-8 text-center">Trusted by leading UAE organisations</p>
          <Marquee>
            {company.customers.map((c) => (
              <span
                key={c}
                className="whitespace-nowrap px-8 text-base font-medium text-mute-2 transition-colors hover:text-bone"
              >
                {c}
                <span className="ml-8 text-mute-2/40">—</span>
              </span>
            ))}
          </Marquee>
        </Container>
      </section>

      {/* ---------- Why us ---------- */}
      <section className="border-t border-b border-line bg-surface">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="Why HAPUS"
            title="Performance begins with the right partner."
            description="Access to products is not the same as a partner who understands your operation and stands behind it."
          />

          <div className="mt-14 grid grid-cols-1 border-t border-line md:grid-cols-2">
            {valueProps.map((prop, i) => (
              <Reveal
                key={prop.title}
                delay={(i % 2) * 90}
                className={`border-b border-line p-7 lg:p-9 ${
                  i % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="flex items-start gap-5">
                  <prop.icon
                    weight="light"
                    className="mt-1 size-7 shrink-0 text-bone"
                  />
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-bone">
                      {prop.title}
                    </h3>
                    <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-mute">
                      {prop.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Service highlight ---------- */}
      <section className="on-wine relative overflow-hidden border-b border-line bg-ink">
        <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
        <Container className="relative grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-6">
            <span className="eyebrow">Service &amp; support</span>
            <Reveal
              as="h2"
              delay={60}
              className="mt-6 max-w-[16ch] font-display text-4xl font-semibold leading-none tracking-tight text-balance sm:text-5xl"
            >
              The sale is the start, not the finish.
            </Reveal>
            <Reveal delay={120} className="mt-6 max-w-[50ch] text-base leading-relaxed text-mute">
              Technical consultation, installation, genuine parts and after-sales
              support from a team that knows the equipment so the value you buy
              keeps performing.
            </Reveal>
            <Reveal delay={180}>
              <ButtonLink href="/service" variant="outline" size="lg" withArrow className="mt-9">
                How we support you
              </ButtonLink>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <ul className="divide-y divide-line border-y border-line">
              {supportPoints.map(([title, sub], i) => (
                <Reveal
                  key={title}
                  delay={i * 70}
                  as="li"
                  className="flex items-center justify-between gap-6 py-5"
                >
                  <div>
                    <p className="text-base font-medium text-bone">{title}</p>
                    <p className="mt-1 text-sm text-mute-2">{sub}</p>
                  </div>
                  <ArrowRight className="size-4 text-mute-2" />
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ---------- Locations ---------- */}
      <section className="border-b border-line bg-surface">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="Find us"
            title="Two offices, nationwide reach."
            description="Head office in Abu Dhabi and a branch in Dubai, serving customers across the United Arab Emirates."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {locations.map((loc, i) => (
              <Reveal key={loc.name} delay={i * 80}>
                <div className="h-full">
                  <LocationCard location={loc} />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <CTABand
        title="Let's build better business together."
        body="Whether it's automotive solutions, industrial equipment, compressed air, professional tools or a strategic partnership — tell us what you need and our team will help."
      />
    </>
  );
}

// Brand logo on a white pill — keeps the (dark/colour) logos visible against the
// wine marquee. `on-paper` flips the context so the wordmark fallback (e.g.
// Hunter) renders dark on the white pill.
function BrandPill({ brand }: { brand: Brand }) {
  return (
    <div className="on-paper group mx-3 flex h-20 w-44 shrink-0 items-center justify-center rounded-xl bg-white px-7 lg:h-24 lg:w-52">
      <BrandLogo brand={brand} />
    </div>
  );
}
