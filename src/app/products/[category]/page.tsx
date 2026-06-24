import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { categories, categoryBySlug } from "@/data/categories";
import { brandBySlug } from "@/data/brands";
import { BrandLogo } from "@/components/cards/BrandLogo";

// Pre-render every category at build time (static).
export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[category]">): Promise<Metadata> {
  const { category: slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) return { title: "Products" };
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/products/${category.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: PageProps<"/products/[category]">) {
  const { category: slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) notFound();

  // Brands represented within this category, for the hero tags.
  const brandTags = (category.brands ?? [])
    .map((s) => brandBySlug(s))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  return (
    <>
      {/* Category hero */}
      <section className="on-wine relative overflow-hidden border-b border-line bg-ink pt-32 pb-14 lg:pt-44 lg:pb-20">
        <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
        <Container className="relative">
          <Reveal>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-mute transition-colors hover:text-bone"
            >
              <ArrowLeft className="size-3.5" />
              All products
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <span className="font-mono text-[0.7rem] tracking-[0.2em] text-mute-2">
                  Category {category.index}
                </span>
              </Reveal>
              <Reveal
                as="h1"
                delay={60}
                className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl"
              >
                {category.name}
              </Reveal>
            </div>
            <Reveal
              delay={140}
              className="text-pretty text-base leading-relaxed text-mute lg:col-span-4"
            >
              {category.description}
            </Reveal>
          </div>

          {brandTags.length > 0 ? (
            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <span className="label mr-1">Brands here</span>
                {brandTags.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/brands#${b.slug}`}
                    title={b.name}
                    className="group flex h-12 w-28 items-center justify-center rounded-md bg-white px-3 [&_img]:max-h-7! [&_span]:text-lg!"
                  >
                    <BrandLogo brand={b} />
                  </Link>
                ))}
              </div>
            </Reveal>
          ) : null}
        </Container>
      </section>

      {/* Grouped equipment classes — names only, no per-item pages */}
      <section className="bg-surface">
        <Container className="py-14 lg:py-20">
          <div className="space-y-14 lg:space-y-20">
            {category.groups.map((group, gi) => (
              <Reveal key={group.name} delay={(gi % 2) * 70}>
                <div className="grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <span className="font-mono text-[0.65rem] tracking-[0.2em] text-mute-2">
                      {category.index}.{String(gi + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-bone lg:text-3xl">
                      {group.name}
                    </h2>
                  </div>

                  <ul className="grid gap-px self-start border border-line bg-line sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="bg-surface px-5 py-4 text-sm leading-snug text-bone"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
