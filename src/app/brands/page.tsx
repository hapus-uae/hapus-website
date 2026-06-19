import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { BrandTile } from "@/components/cards/BrandTile";
import { CTABand } from "@/components/ui/CTABand";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Brands",
  description:
    "The internationally recognised manufacturers HAPUS represents — 3M, Rupes, Anest Iwata, DeVilbiss, ATS ELGi, Kirloskar, Milwaukee, Bosch, Kärcher, Lifmex, Hunter, VSG Group and Dura.",
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands"
        title="The brands the world's professionals trust."
        lead={`We partner with ${brands.length} internationally recognised manufacturers, giving customers direct access to proven technologies through one accountable relationship.`}
      />

      <section className="bg-soft">
        <Container className="py-16 lg:py-24">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {brands.map((brand, i) => (
              <Reveal key={brand.slug} delay={(i % 4) * 60}>
                <div id={brand.slug} className="h-full scroll-mt-28">
                  <BrandTile brand={brand} />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-16 max-w-[68ch] text-base leading-relaxed text-mute">
              Our partnerships are built on a shared commitment to quality,
              innovation and customer success. Looking for a brand not listed
              here? We add lines as our customers need them ask, and we&apos;ll
              tell you whether we can source it.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABand
        eyebrow="Brand enquiry"
        title="Want to know who carries what?"
        body="Tell us the brand or the equipment you have in mind and we'll point you to the right solution and price."
      />
    </>
  );
}
