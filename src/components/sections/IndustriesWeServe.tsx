import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

// "Industries we serve" card row — shared between the home and brands pages.
const industries = [
  {
    title: "Automotive",
    items: ["Workshop Equipment", "Lifts", "Wheel Service Equipment", "Compressors"],
    image: "/assets/industries/automotive.jpg",
    href: "/products/automotive-refinishing",
  },
  {
    title: "Industrial",
    items: ["Compressed Air", "Material Handling", "Productivity Solutions"],
    image: "/assets/industries/industrial.jpg",
    href: "/products/industrial-equipment",
  },
  {
    title: "Fleet Operations",
    items: ["Maintenance Equipment", "Diagnostics", "Workshop Infrastructure"],
    image: "/assets/industries/fleet.jpg",
    href: "/products/professional-tools",
  },
  {
    title: "Training & Safety",
    items: ["Operator Training", "Safety Programs", "Technical Certification"],
    image: "/assets/industries/training.jpg",
    href: "/training",
  },
];

export function IndustriesWeServe() {
  return (
    <section className="border-b border-line bg-surface">
      <Container className="py-20 lg:py-28">
        <SectionHeading
          eyebrow="Industries we serve"
          title="Built for the operations that keep the UAE moving."
          description="From automotive workshops to industrial plants, fleets and training floors equipment and support specified for each."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={(i % 4) * 70}>
              <Link
                href={ind.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white"
              >
                {/* Image band — clear 16:9, fully visible */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
                  />
                </div>

                {/* Content panel — white, dark text */}
                <div className="flex flex-1 flex-col px-5 py-4 lg:px-6 lg:py-5">
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-bone">
                    {ind.title}
                  </h3>
                  <ul className="mt-2.5 space-y-1.5 text-sm text-mute">
                    {ind.items.map((it) => (
                      <li key={it} className="flex gap-2.5">
                        <span
                          className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                          aria-hidden
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-3.5 inline-flex items-center gap-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    Explore more
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
