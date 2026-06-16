import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { CTABand } from "@/components/ui/CTABand";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The full HAPUS solutions catalogue, grouped by category — automotive refinishing, workshop infrastructure, compressed air, professional tools, material handling, cleaning and industrial equipment.",
};

export default function ProductsPage() {
  const totalLines = categories.reduce((n, c) => n + c.products.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        index="P"
        title="A complete ecosystem, one partner."
        lead={`${categories.length} solution areas across ${totalLines} representative product lines. Choose a category to see the range — every product is shown on its category page.`}
      />

      <section className="bg-surface">
        <Container className="py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, i) => (
              <Reveal
                key={category.slug}
                delay={(i % 3) * 70}
                className={i === 0 ? "sm:col-span-2" : ""}
              >
                <div className="h-full">
                  <CategoryCard category={category} feature={i === 0} />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Not sure which solution you need?"
        body="Describe your operation and what you're trying to achieve. We'll specify the right equipment and the brands to deliver it."
      />
    </>
  );
}
