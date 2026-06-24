import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Wrench,
  Package,
  GraduationCap,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { IndustriesWeServe } from "@/components/sections/IndustriesWeServe";
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
    image: "/assets/why/partnerships.jpg",
  },
  {
    icon: Wrench,
    title: "Industry-focused expertise",
    body: "We understand the operational realities of automotive and industrial businesses, so we recommend solutions that deliver practical results, not just specifications.",
    image: "/assets/why/expertise.jpg",
  },
  {
    icon: Package,
    title: "A complete solution portfolio",
    body: "Refinishing, workshop, compressed air, power tools, material handling, industrial and cleaning solutions — a full ecosystem under one supplier.",
    image: "/assets/why/portfolio.jpg",
  },
  {
    icon: GraduationCap,
    title: "Support beyond the sale",
    body: "Technical consultation, installation, genuine parts and operator support that protect the value of your equipment over its working life.",
    image: "/assets/why/support.jpg",
  },
];

// Trust-bar customers — black monochrome logos in /public/assets/customers.
const trustedBy: { name: string; logo: string; w: number; h: number }[] = [
  { name: "Al-Futtaim", logo: "/assets/customers/al-futtaim.png", w: 288, h: 280 },
  { name: "Al Tayer", logo: "/assets/customers/al-tayer.png", w: 358, h: 106 },
  { name: "Elite Motor Cars", logo: "/assets/customers/elite-cars.png", w: 422, h: 174 },
  { name: "Al Nabooda Automobiles", logo: "/assets/customers/al-nabooda.png", w: 600, h: 432 },
  { name: "Fleet Management", logo: "/assets/customers/fleet.png", w: 159, h: 130 },
  { name: "Industrial Facilities", logo: "/assets/customers/industrial-facilities.png", w: 600, h: 258 },
];

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="on-wine relative flex min-h-[100dvh] items-center overflow-hidden border-b border-line bg-ink">
        {/* Background image (drop a file at /public/assets/hero/hero.jpg) */}
        <Image
          src="/assets/hero/hero.jpg"
          alt="A vehicle raised on a HAPUS workshop lift"
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover"
        />
        {/* Left gradient for headline legibility — neutral dark, no colour cast.
            Plus a short bottom blend into the next section. */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,9,11,0.9)_0%,rgba(10,9,11,0.55)_38%,transparent_68%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-ink)_1%,transparent_34%)]"
          aria-hidden
        />

        <Container className="relative w-full pt-28 pb-12 lg:pt-32">
          <div className="max-w-3xl">
              <Reveal
                as="h1"
                className="font-display text-[2.9rem] font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
              >
                <span className="block text-bone">Engineering Productivity.</span>
                <span className="block text-accent">Delivering <br/>Reliability.</span>
              </Reveal>

              <Reveal
                delay={120}
                as="p"
                className="mt-6 font-display text-lg font-semibold tracking-tight text-bone sm:text-xl"
              >
                Industrial Equipment · Workshop Solutions<br/> Technical Training ·
                After-Sales Support
              </Reveal>

              <Reveal
                delay={180}
                className="mt-5 max-w-[50ch] text-pretty text-base leading-relaxed text-mute"
              >
                HAPUS partners with automotive, industrial, fleet, and
                manufacturing businesses across {company.region}, delivering
                equipment, technical expertise, training, and long-term
                operational support.
              </Reveal>

              <Reveal delay={260} className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/products" variant="primary" size="lg" withArrow>
                  Explore solutions
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline" size="lg">
                  Request consultation
                </ButtonLink>
              </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- Trusted by ---------- */}
      <section className="border-b border-line bg-surface">
        <Container className="py-7 lg:py-9">
          <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:gap-x-12">
            <span className="eyebrow shrink-0 text-center lg:max-w-40 lg:text-left">
              Trusted by industry leaders
            </span>
            <span className="hidden h-10 w-px shrink-0 bg-line lg:block" aria-hidden />
            <Marquee className="min-w-0 flex-1">
              {trustedBy.map((c) => (
                <span key={c.name} className="flex items-center px-8 lg:px-10">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={c.w}
                    height={c.h}
                    className="h-8 w-auto max-w-35 object-contain opacity-100 transition-opacity duration-300 hover:opacity-50 sm:h-9"
                  />
                </span>
              ))}
            </Marquee>
          </div>

          {/* Supporting line — full width, under the logos */}
          <p className="mt-7 text-center text-sm leading-snug text-mute">
            Supporting automotive, fleet, and industrial operations across the UAE.
          </p>
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
                HAPUS General Trading L.L.C – S.P.C was established with a clear purpose: to help businesses across the UAE operate at higher standards by providing access to world-class technologies, equipment, and technical solutions.

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

      {/* ---------- Industries we serve ---------- */}
      <IndustriesWeServe />

      {/* ---------- Category marquee divider ---------- */}
      <div className="on-wine border-b border-line bg-[#171A1C] bg-none py-5">
        <Marquee>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className="group flex items-center gap-5 px-6 text-white transition-colors hover:text-white"
            >
              <span className="font-mono text-[0.6rem] text-white/45">{c.index}</span>
              <span className="font-display text-lg font-medium tracking-tight">
                {c.name}
              </span>
              <span className="text-white/35">/</span>
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
          <Marquee reverse>
            {brands.slice(7).map((b) => (
              <BrandPill key={b.slug} brand={b} />
            ))}
          </Marquee>
        </div>
      </section>

      {/* ---------- Why us ---------- */}
      <section className="border-t border-b border-line bg-surface">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="Why HAPUS"
            title="Performance begins with the right partner."
            description="Access to products is not the same as a partner who understands your operation and stands behind it."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:gap-6">
            {valueProps.map((prop, i) => (
              <Reveal
                key={prop.title}
                delay={(i % 2) * 80}
                from={i % 2 === 0 ? "left" : "right"}
                className="group flex flex-col overflow-hidden border border-line"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                  />
                </div>
                <div className="on-wine flex flex-1 items-start gap-4 bg-[linear-gradient(140deg,#171A1C_0%,#4d1729_34%,#571930_58%,#7e2541_82%,#a33146_100%)] p-5 lg:p-6">
                  <prop.icon
                    weight="light"
                    className="mt-0.5 size-6 shrink-0 text-bone"
                  />
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-bone">
                      {prop.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mute">
                      {prop.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
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
