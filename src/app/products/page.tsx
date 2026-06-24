import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  SprayBottle,
  Car,
  Wind,
  Hammer,
  Broom,
  Truck,
  Drop,
  Factory,
  Flame,
  SealCheck,
  Headset,
  Lifebuoy,
  ChatCircleText,
  Gear,
  Wrench,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { BrandLogo } from "@/components/cards/BrandLogo";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The full HAPUS solutions catalogue, grouped by solution area — automotive refinishing, workshop infrastructure, compressed air, professional tools, cleaning, material handling, lubrication, industrial and welding solutions.",
};

type Icon = typeof Gear;

// Solution-area icon per category slug.
const categoryIcons: Record<string, Icon> = {
  "automotive-refinishing": SprayBottle,
  "workshop-infrastructure": Car,
  "compressed-air": Wind,
  "professional-tools": Hammer,
  "cleaning-maintenance": Broom,
  "material-handling": Truck,
  "lubrication-fluid": Drop,
  "industrial-equipment": Factory,
  "welding-fabrication": Flame,
};

const assurances: { icon: Icon; title: string; body: string }[] = [
  {
    icon: SealCheck,
    title: "Genuine products",
    body: "Original equipment sourced through authorised manufacturers and distribution channels.",
  },
  {
    icon: Headset,
    title: "Expert guidance",
    body: "Our specialists help identify, specify, and implement the most suitable solution for your operational requirements.",
  },
  {
    icon: Lifebuoy,
    title: "After-sales support",
    body: "Installation, training, genuine parts and ongoing technical support.",
  },
];

const supportPoints: { icon: Icon; title: string; body: string }[] = [
  {
    icon: ChatCircleText,
    title: "Technical consultation",
    body: "Expert advice for the right solution.",
  },
  {
    icon: Gear,
    title: "Custom solutions",
    body: "Tailored to your operational needs.",
  },
  {
    icon: Wrench,
    title: "Installation support",
    body: "Professional installation & commissioning.",
  },
  {
    icon: Lifebuoy,
    title: "After-sales care",
    body: "Genuine parts, training and ongoing support.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Complete automotive & industrial solutions. One trusted partner."
        lead={`${categories.length} solution areas across every corner of the automotive and industrial floor — supporting automotive workshops, fleet operators, industrial facilities, manufacturing environments, and technical training centres across the UAE.`}
      />

      {/* Assurances */}
      <section className="border-b border-line bg-surface">
        <Container className="py-8 lg:py-10">
          <div className="grid gap-px border border-line bg-line sm:grid-cols-3">
            {assurances.map((a) => (
              <div key={a.title} className="flex items-start gap-4 bg-surface p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <a.icon weight="fill" className="size-5" />
                </span>
                <div>
                  <p className="font-display text-base font-semibold tracking-tight text-bone">
                    {a.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-mute">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Solution areas */}
      <section className="bg-surface">
        <Container className="py-14 lg:py-20">
          <span className="eyebrow">Explore our solution areas</span>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, i) => {
              const Icon = categoryIcons[category.slug] ?? Gear;
              return (
                <Reveal key={category.slug} delay={(i % 3) * 70}>
                  <Link
                    href={`/products/${category.slug}`}
                    className="group flex h-full flex-col overflow-hidden border border-line bg-white transition-colors hover:border-bone/30"
                  >
                    <div className="relative">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={category.image ?? ""}
                          alt={category.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                        />
                      </div>
                      <span className="absolute -bottom-6 left-5 flex size-12 items-center justify-center rounded-full bg-accent text-white shadow-md ring-4 ring-white">
                        <Icon weight="fill" className="size-6" />
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5 pt-9 lg:p-6 lg:pt-9">
                      <h3 className="font-display text-lg font-bold uppercase tracking-tight text-bone">
                        {category.name}
                      </h3>
                      <ul className="mt-4 space-y-2 text-sm text-mute">
                        {category.groups.map((g) => (
                          <li key={g.name} className="flex gap-2.5">
                            <span
                              className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                              aria-hidden
                            />
                            {g.name}
                          </li>
                        ))}
                      </ul>
                      {category.brands?.length ? (
                        <div className="mt-5 border-t border-line pt-4">
                          <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-mute">
                            Featured brands
                          </span>
                          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-3">
                            {category.brands.map((slug) => {
                              const b = brands.find((x) => x.slug === slug);
                              return b ? (
                                <span
                                  key={slug}
                                  title={b.name}
                                  className="flex h-6 items-center [&_img]:max-h-6! [&_span]:text-base!"
                                >
                                  <BrandLogo brand={b} />
                                </span>
                              ) : null;
                            })}
                          </div>
                        </div>
                      ) : null}
                      <span className="mt-auto pt-6 inline-flex items-center gap-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
                        View products
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Trusted global brands */}
      <section className="on-wine border-y border-line bg-ink">
        <Container className="pt-12 lg:pt-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="eyebrow">Trusted global brands</span>
            <ButtonLink href="/brands" variant="outline" size="md" withArrow>
              See all brands
            </ButtonLink>
          </div>
        </Container>
        <div className="pb-12 pt-8 lg:pb-14">
          <Marquee>
            {brands.map((b) => (
              <Link
                key={b.slug}
                href={`/brands#${b.slug}`}
                className="group mx-2 flex h-16 w-44 shrink-0 items-center justify-center bg-white px-5"
              >
                <BrandLogo brand={b} />
              </Link>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Can't find — CTA */}
      <section className="relative overflow-hidden border-t border-line bg-surface">
        <Container className="relative py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-bold leading-[1.04] tracking-tight text-balance text-bone sm:text-4xl">
                Can&apos;t find what you&apos;re looking for?
              </h2>
              <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-mute">
                Our team can help you find the right equipment for your specific
                application — tell us what you need.
              </p>
              <ButtonLink
                href="/contact"
                variant="primary"
                size="lg"
                withArrow
                className="mt-8"
              >
                Request consultation
              </ButtonLink>
            </div>

            <ul className="grid gap-7 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {supportPoints.map((s) => (
                <li key={s.title} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-accent">
                    <s.icon weight="regular" className="size-5" />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold tracking-tight text-bone">
                      {s.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-mute">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
