import type { Metadata } from "next";
import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { IndustriesWeServe } from "@/components/sections/IndustriesWeServe";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocationCard } from "@/components/cards/LocationCard";
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
  ["Purpose beyond products", "We believe our responsibility extends beyond supplying equipment. Every solution we deliver must create measurable value, improve operational performance, and contribute to our customers' long-term success."],
  ["Trust as our foundation", "Trust is earned through consistency, transparency, and accountability. We build relationships that endure because we place integrity at the center of every business decision."],
  ["Technical excellence", "Our customers rely on us for expertise as much as they rely on us for products. We continuously invest in knowledge, innovation, and professional development to deliver informed recommendations and practical solutions."],
  ["Partnership over transactions", "We do not view our customers, suppliers, or stakeholders as counterparties. We view them as long-term partners whose success is closely connected to our own."],
  ["Continuous advancement", "Markets evolve, technologies improve, and customer expectations grow. We embrace change and continuously seek better ways to serve the industries that depend on us."],
  ["Commitment to performance", "Reliability, efficiency, and operational excellence are principles that guide every aspect of our business. We hold ourselves to the same standards we encourage our customers to achieve."],
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
        eyebrow="About HAPUS"
        title="Building better businesses through world-class automotive & industrial solutions."
        lead={`${company.legalName} was established with a clear purpose: to help businesses across the UAE operate at higher standards by providing access to world-class technologies, equipment, and technical solutions.`}
        image="/assets/hero/hero.jpg"
      />

      {/* Story */}
      <section className="border-b border-line bg-surface">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <span className="eyebrow">Our story</span>
            </div>
            <div className="space-y-6 lg:col-span-9">
              <Reveal
                as="p"
                className="font-display text-2xl font-medium leading-snug tracking-tight text-balance text-bone sm:text-3xl"
              >
                Every company has a beginning. Few have a purpose that continues
                to guide their growth.
              </Reveal>
              <Reveal as="p" delay={80} className="max-w-[68ch] text-base leading-relaxed text-mute">
                HAPUS General Trading L.L.C – S.P.C was founded on the belief that
                businesses perform better when they have access to the right
                technology, the right expertise, and the right partners. From day
                one, our objective was not simply to supply products, but to
                create value by helping automotive and industrial businesses
                operate more efficiently, more competitively, and with greater
                confidence.
              </Reveal>
              <Reveal as="p" delay={140} className="max-w-[68ch] text-base leading-relaxed text-mute">
                Established in 2020 in Abu Dhabi, HAPUS entered the market with a
                focused commitment to serving the UAE&apos;s automotive sector.
                Through consistency, technical knowledge, and customer-centric
                service, the company rapidly gained the trust of workshops,
                service centers, and automotive professionals throughout the
                country.
              </Reveal>
              <Reveal as="p" delay={200} className="max-w-[68ch] text-base leading-relaxed text-mute">
                By 2022, HAPUS had established a strong presence across the UAE
                automotive workshop industry. As market demands evolved, so did
                our capabilities. We expanded beyond traditional product supply
                into professional workshop tools, infrastructure solutions,
                industrial equipment, compressors, lifting systems, and advanced
                operational technologies.
              </Reveal>
              <Reveal as="p" delay={260} className="max-w-[68ch] text-base leading-relaxed text-mute">
                Today, HAPUS continues to grow through strategic partnerships with
                globally respected manufacturers, a commitment to technical
                excellence, and a relentless focus on customer success.
              </Reveal>
              <Reveal as="p" delay={320} className="max-w-[68ch] text-base leading-relaxed text-mute">
                While our portfolio continues to evolve, our purpose remains
                unchanged: connecting global innovation with local industry and
                helping businesses achieve higher standards of performance,
                productivity, and operational excellence.
              </Reveal>
              <Reveal as="p" delay={380} className="max-w-[68ch] text-base leading-relaxed text-mute">
                Looking ahead, HAPUS remains focused on expanding its
                capabilities, strengthening strategic partnerships, and becoming a
                leading regional provider of automotive and industrial solutions
                throughout the Middle East.
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
              <span className="eyebrow">From the founder</span>
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
              <span className="eyebrow">Vision</span>
              <p className="mt-6 font-display text-2xl font-semibold leading-tight tracking-tight text-balance text-bone lg:text-3xl">
                To elevate the standards of automotive and industrial operations
                across the Middle East.
              </p>
              <div className="mt-5 max-w-[52ch] space-y-4 text-sm leading-relaxed text-mute">
                <p>
                  By making world-class technologies, equipment, and expertise
                  accessible to every organization that strives for excellence.
                </p>
                <p>
                  We envision a future where businesses throughout the region can
                  operate with the same efficiency, precision, and technological
                  advantage as the world&apos;s leading organizations. Through
                  innovation, strategic partnerships, and a relentless commitment
                  to quality, HAPUS aims to become a benchmark for trust,
                  reliability, and technical leadership within the industries we
                  serve.
                </p>
                <p>
                  Our vision extends beyond commercial growth. We aspire to
                  contribute to the advancement of regional industry by helping
                  businesses improve performance, increase productivity, and
                  embrace the technologies that will define the future of
                  automotive and industrial operations.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100} className="bg-surface p-8 lg:p-12">
              <span className="eyebrow">Mission</span>
              <p className="mt-6 font-display text-2xl font-semibold leading-tight tracking-tight text-balance text-bone lg:text-3xl">
                To bridge global innovation with local industry.
              </p>
              <div className="mt-5 max-w-[52ch] space-y-4 text-sm leading-relaxed text-mute">
                <p>
                  By delivering trusted brands, advanced technologies, and
                  practical expertise that help businesses operate safer, smarter,
                  and more efficiently.
                </p>
                <p>
                  We are committed to creating measurable value for our customers
                  through carefully selected products, professional technical
                  support, and solution-driven partnerships that address real
                  operational challenges.
                </p>
                <p>
                  By combining international quality standards with deep market
                  understanding, we help our customers improve productivity, reduce
                  downtime, optimize performance, and achieve sustainable growth.
                </p>
                <p>
                  Every relationship we build, every solution we recommend, and
                  every product we supply is guided by our commitment to
                  professionalism, reliability, and long-term partnership. Our
                  mission is not simply to be a supplier, but to become a trusted
                  strategic partner in the success of every organization we serve.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Core values */}
      <section className="on-wine border-b border-line bg-ink">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="Core values"
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
          <SectionHeading eyebrow="Milestones" title="How we got here." />
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
      <IndustriesWeServe />

      {/* Locations */}
      <section className="bg-surface">
        <Container className="py-20 lg:py-28">
          <SectionHeading eyebrow="Where we are" title="Abu Dhabi & Dubai." />
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
