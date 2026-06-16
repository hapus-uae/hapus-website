import type { Metadata } from "next";
import {
  Wrench,
  Gauge,
  ClipboardText,
  Gear,
  Truck,
  Headset,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABand } from "@/components/ui/CTABand";
import { serviceOfferings, serviceCommitments, successStories } from "@/data/services";
import { locations } from "@/data/company";

type IconType = typeof Gear;

const iconMap: Record<string, IconType> = {
  Wrench,
  Gauge,
  ClipboardText,
  Gear,
  Truck,
  Headset,
};

export const metadata: Metadata = {
  title: "Service & Support",
  description:
    "Technical consultation, installation, calibration, genuine parts and after-sales support for automotive and industrial equipment across the UAE — from the HAPUS team.",
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Service & support"
        index="S"
        title="Supplied by us, supported by us."
        lead="Our value is not in the box — it's in the expertise around it. We help you specify, install and support the right solution for your operation."
        aside={
          <dl className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
            {serviceCommitments.map((c) => (
              <div key={c.label} className="bg-ink p-6">
                <dt className="font-display text-4xl font-semibold tracking-tight text-bone">
                  {c.value}
                  <span className="text-mute-2">{c.unit}</span>
                </dt>
                <dd className="mt-2 text-sm leading-snug text-mute">{c.label}</dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* Offerings */}
      <section className="bg-surface">
        <Container className="py-20 lg:py-28">
          <Reveal>
            <span className="label">What we do</span>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 border-t border-line md:grid-cols-2">
            {serviceOfferings.map((offering, i) => {
              const Ico = iconMap[offering.icon] ?? Gear;
              return (
                <Reveal
                  key={offering.title}
                  delay={(i % 2) * 80}
                  className={`flex gap-6 border-b border-line p-7 lg:p-9 ${
                    i % 2 === 0 ? "md:border-r" : ""
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <span className="font-mono text-[0.6rem] text-mute-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Ico weight="light" className="size-7 text-bone" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-bone">
                      {offering.title}
                    </h3>
                    <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-mute">
                      {offering.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Coverage */}
      <section className="on-wine relative overflow-hidden border-y border-line bg-ink">
        <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
        <Container className="relative grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <span className="label">Coverage</span>
            <Reveal
              as="h2"
              delay={60}
              className="mt-6 max-w-[16ch] font-display text-4xl font-semibold leading-none tracking-tight text-balance sm:text-5xl"
            >
              Close to where you operate.
            </Reveal>
            <Reveal delay={120} className="mt-6 max-w-[48ch] text-base leading-relaxed text-mute">
              We work out of Abu Dhabi and Dubai and support customers right across
              the Emirates — with the parts and technical backup to keep your
              equipment productive.
            </Reveal>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            <li className="border-t border-line" />
            {locations.map((loc, i) => (
              <Reveal
                key={loc.name}
                as="li"
                delay={i * 70}
                className="flex items-center justify-between gap-6 border-b border-line py-6"
              >
                <div>
                  <p className="font-display text-xl font-semibold tracking-tight text-bone">
                    {loc.name}
                  </p>
                  <p className="mt-1 text-sm text-mute">{loc.role}</p>
                </div>
                <a
                  href={`tel:${loc.phone.replace(/\s/g, "")}`}
                  className="font-mono text-sm text-mute transition-colors hover:text-bone"
                >
                  {loc.phone}
                </a>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Success stories */}
      <section className="bg-surface">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="Success stories"
            index="01"
            title="Practical solutions, measurable outcomes."
            description="A few examples of how the right equipment and support changed how our customers operate."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {successStories.map((story, i) => (
              <Reveal key={story.title} delay={(i % 3) * 80}>
                <article className="flex h-full flex-col border border-line bg-panel/30 p-7">
                  <span className="font-mono text-[0.6rem] text-mute-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-bone">
                    {story.title}
                  </h3>
                  <dl className="mt-6 space-y-4">
                    {[
                      ["Challenge", story.challenge],
                      ["Solution", story.solution],
                      ["Outcome", story.outcome],
                    ].map(([label, text]) => (
                      <div key={label}>
                        <dt className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-mute-2">
                          {label}
                        </dt>
                        <dd className="mt-1.5 text-sm leading-relaxed text-mute">
                          {text}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Get in touch"
        title="Need support or a spare part?"
        body="Tell us the equipment, the brand and the issue. Our team will help you get back to full performance."
        href="/contact?category=service"
        cta="Request support"
      />
    </>
  );
}
