import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CTABand } from "@/components/ui/CTABand";
import { categories, categoryBySlug } from "@/data/categories";
import { brandBySlug } from "@/data/brands";

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
  const brandSlugs = Array.from(new Set(category.products.map((p) => p.brand)));
  const brandTags = brandSlugs
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
              <div className="mt-10 flex flex-wrap items-center gap-2">
                <span className="label mr-2">Brands here</span>
                {brandTags.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/brands#${b.slug}`}
                    className="border border-line px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-mute transition-colors hover:border-bone/60 hover:text-bone"
                  >
                    {b.name}
                  </Link>
                ))}
              </div>
            </Reveal>
          ) : null}
        </Container>
      </section>

      {/* Product catalogue grid (inline specs, no per-product pages) */}
      <section className="bg-surface">
        <Container className="py-14 lg:py-20">
          <ProductGrid
            products={category.products}
            categorySlug={category.slug}
            categoryName={category.name}
          />
        </Container>
      </section>

      <CTABand
        eyebrow="Request a quote"
        title={`Enquire about ${category.name.toLowerCase()}.`}
        body="We will confirm the right configuration for your bay, the lead time and the installed price."
        href={`/contact?category=${category.slug}`}
        cta={`Enquire about these`}
      />
    </>
  );
}
