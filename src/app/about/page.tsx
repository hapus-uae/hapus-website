import type { Metadata } from "next";
import { Car, Factory, Buildings, Truck, Quotes } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocationCard } from "@/components/cards/LocationCard";
import { CTABand } from "@/components/ui/CTABand";
import { company, locations } from "@/data/company";

const milestones = [
  { year: "2020", text: "HAPUS established in Abu Dhabi, focused on the UAE automotive aftermarket and workshop sector." },
  { year: "2021", text: "Expanded the customer network across independent workshops and strengthened manufacturer relationships." },
  { year: "2022", text: "Established a significant presence in the UAE automotive workshop industry; added professional tools and workshop solutions." },
  { year: "2023", text: "Expanded the portfolio for industrial and maintenance requirements; broadened the customer base across industries." },
  { year: "2024", text: "Introduced compressors, lifting solutions and advanced workshop infrastructure." },
  { year: "2026", text: "Secured multiple strategic distribution partnerships with internationally recognised brands." },
];

const coreValues = [
  ["Purpose beyond products", "Every solution must create measurable value and contribute to our customers' long-term success."],
  ["Trust as our foundation", "Earned through consistency, transparency and accountability — integrity at the centre of every decision."],
  ["Technical excellence", "Customers rely on us for expertise as much as products. We invest continuously in knowledge and innovation."],
  ["Partnership over transactions", "We treat customers and suppliers as long-term partners whose success is connected to our own."],
  ["Continuous advancement", "Markets evolve and expectations grow. We embrace change and seek better ways to serve."],
  ["Commitment to performance", "Reliability, efficiency and operational excellence guide every aspect of our business."],
];

const industries = [
  {
    icon: Car,
    title: "Automotive",
    items: ["Dealerships", "Body & paint centres", "Luxury vehicle service", "Independent workshops", "Fleet operations"],
  },
  {
    icon: Factory,
    title: "Industrial",
    items: ["Manufacturing facilities", "Engineering contractors", "Maintenance providers", "Production facilities"],
  },
  {
    icon: Buildings,
    title: "Commercial & infrastructure",
    items: ["Facility management", "Logistics operators", "Transport organisations", "Government entities"],
  },
  {
    icon: Truck,
    title: "Heavy equipment & technical",
    items: ["Construction equipment centres", "Industrial machinery operators", "Equipment maintenance providers"],
  },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "HAPUS General Trading was founded in 2020 to connect global innovation with local industry supplying and supporting automotive and industrial solutions across the UAE.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        index="A"
        title="Building better businesses since 2020."
        lead={`${company.legalName} connects global innovation with local industry — helping UAE organisations operate more efficiently, compete more effectively, and grow with confidence.`}
      />

      {/* Story */}
      <section className="border-b border-line bg-surface">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <span className="label">Our story</span>
            </div>
            <div className="space-y-6 lg:col-span-9">
              <Reveal
                as="p"
                className="font-display text-2xl font-medium leading-snug tracking-tight text-balance text-bone sm:text-3xl"
              >
                HAPUS was founded on a simple belief: businesses perform better
                when they have the right technology, the right expertise, and the
                right partners.
              </Reveal>
              <Reveal as="p" delay={80} className="max-w-[68ch] text-base leading-relaxed text-mute">
                Established in 2020 in Abu Dhabi, HAPUS entered the market with a
                focused commitment to the UAE&apos;s automotive sector. Through
                consistency, technical knowledge and customer-centric service, we
                quickly earned the trust of workshops, service centres and
                automotive professionals across the country.
              </Reveal>
              <Reveal as="p" delay={140} className="max-w-[68ch] text-base leading-relaxed text-mute">
                As demands evolved, so did our capabilities — expanding into
                professional tools, infrastructure, compressors, lifting systems
                and industrial equipment. While our portfolio continues to grow,
                our purpose remains unchanged: connecting global innovation with
                local industry and helping businesses reach higher standards of
                performance.
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder message */}
      <section className="on-wine relative overflow-hidden border-b border-line bg-ink">
        <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
        <Container className="relative py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="label">From the founder</span>
              <Quotes weight="fill" className="mt-8 size-10 text-mute-2" />
              <Reveal
                as="p"
                delay={60}
                className="mt-6 font-display text-xl font-medium leading-snug tracking-tight text-balance text-bone lg:text-2xl"
              >
                {company.founder.quote}
              </Reveal>
              <div className="mt-8">
                <p className="font-display text-lg font-semibold tracking-tight text-bone">
                  {company.founder.name}
                </p>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mute-2">
                  {company.founder.role}
                </p>
              </div>
            </div>
            <div className="space-y-5 lg:col-span-7 lg:col-start-6 lg:border-l lg:border-line lg:pl-12">
              {company.founder.message.map((para, i) => (
                <Reveal
                  key={i}
                  as="p"
                  delay={i * 70}
                  className="max-w-[64ch] text-base leading-relaxed text-mute"
                >
                  {para}
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="border-b border-line bg-surface">
        <Container className="py-20 lg:py-28">
          <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
            <Reveal className="bg-surface p-8 lg:p-12">
              <span className="label">Vision</span>
              <p className="mt-6 font-display text-2xl font-semibold leading-tight tracking-tight text-balance text-bone lg:text-3xl">
                To elevate the standards of automotive and industrial operations
                across the Middle East.
              </p>
              <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-mute">
                Making world-class technologies, equipment and expertise accessible
                to every organisation that strives for excellence — and becoming a
                benchmark for trust, reliability and technical leadership.
              </p>
            </Reveal>
            <Reveal delay={100} className="bg-surface p-8 lg:p-12">
              <span className="label">Mission</span>
              <p className="mt-6 font-display text-2xl font-semibold leading-tight tracking-tight text-balance text-bone lg:text-3xl">
                To bridge global innovation with local industry.
              </p>
              <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-mute">
                Delivering trusted brands, advanced technologies and practical
                expertise that help businesses operate safer, smarter and more
                efficiently — creating measurable, long-term value.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Core values */}
      <section className="on-wine border-b border-line bg-ink">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="Core values"
            index="01"
            title="What guides every decision."
          />
          <div className="mt-14 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map(([title, body], i) => (
              <Reveal
                key={title}
                delay={(i % 3) * 70}
                className="border-b border-line p-7 lg:border-r lg:p-8 nth-[3n]:lg:border-r-0"
              >
                <span className="font-mono text-[0.6rem] text-mute-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-bone">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Milestones */}
      <section className="border-b border-line bg-surface">
        <Container className="py-20 lg:py-28">
          <SectionHeading eyebrow="Milestones" index="02" title="How we got here." />
          <ul className="mt-14 border-t border-line">
            {milestones.map((m, i) => (
              <Reveal
                key={m.year}
                as="li"
                delay={(i % 2) * 60}
                className="grid grid-cols-1 gap-2 border-b border-line py-7 sm:grid-cols-12 sm:items-baseline"
              >
                <span className="font-display text-3xl font-semibold tracking-tight text-bone sm:col-span-2">
                  {m.year}
                </span>
                <p className="max-w-[64ch] text-base leading-relaxed text-mute sm:col-span-9 sm:col-start-4">
                  {m.text}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Industries we serve */}
      <section className="on-wine border-b border-line bg-ink">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="Industries we serve"
            index="03"
            title="Across automotive and industry."
            description="From dealerships and bodyshops to manufacturing, logistics and government — wherever performance matters."
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 4) * 60}>
                <div className="on-paper flex h-full flex-col border border-line bg-surface p-6">
                  <ind.icon weight="light" className="size-8 text-bone" />
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-bone">
                    {ind.title}
                  </h3>
                  <ul className="mt-4 space-y-1.5">
                    {ind.items.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-mute">
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

      {/* Locations */}
      <section className="bg-surface">
        <Container className="py-20 lg:py-28">
          <SectionHeading eyebrow="Where we are" index="04" title="Abu Dhabi & Dubai." />
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

      <CTABand />
    </>
  );
}
