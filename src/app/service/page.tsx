import type { Metadata } from "next";
import Image from "next/image";
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
import { serviceOfferings, serviceCommitments, successStories, maintenanceProgramme } from "@/data/services";
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

// Reuse the matching category images for each success story (by order).
const storyImages = [
  "/assets/categories/workshop-infrastructure.jpg",
  "/assets/categories/compressed-air.jpg",
  "/assets/categories/automotive-refinishing.jpg",
];

// Image per AMC component (Unsplash), by order.
const amcImages = [
  "/assets/service/amc/1.jpg", // scheduled inspections
  "/assets/service/amc/2.jpg", // preventive maintenance
  "/assets/service/amc/3.jpg", // performance reporting
  "/assets/service/amc/4.jpg", // emergency support coordination
  "/assets/service/amc/5.jpg", // periodic performance reviews
];

// A fitting (reused) image for each "What we do" offering, by order.
const offeringImages = [
  "/assets/why/partnerships.jpg", // technical consultation
  "/assets/categories/workshop-infrastructure.jpg", // installation & commissioning
  "/assets/categories/professional-tools.jpg", // calibration & certification
  "/assets/why/portfolio.jpg", // genuine spare parts & consumables
  "/assets/why/expertise.jpg", // maintenance & after-sales
  "/assets/industries/training.jpg", // operator support
];

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
        title="Supplied by us, supported by us."
        lead="Our value is not in the box. It is in the expertise around it. We help customers specify, install, commission, maintain, and support the right solution for their operation."
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
            <span className="eyebrow">What we do</span>
          </Reveal>
          <div className="mt-12 border-t border-line">
            {serviceOfferings.map((offering, i) => {
              const Ico = iconMap[offering.icon] ?? Gear;
              const flip = i % 2 === 1;
              return (
                <Reveal
                  key={offering.title}
                  className="grid items-center gap-8 border-b border-line py-10 lg:grid-cols-12 lg:gap-12 lg:py-12"
                >
                  <div
                    className={`relative aspect-video overflow-hidden border border-line lg:col-span-5 ${
                      flip ? "lg:order-2 lg:col-start-8" : ""
                    }`}
                  >
                    <Image
                      src={offeringImages[i] ?? ""}
                      alt={offering.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`lg:col-span-6 ${
                      flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-mute-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Ico weight="light" className="size-6 text-bone" />
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-bone lg:text-3xl">
                      {offering.title}
                    </h3>
                    <p className="mt-3 max-w-[54ch] text-base leading-relaxed text-mute">
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
            <span className="eyebrow">Coverage</span>
            <Reveal
              as="h2"
              delay={60}
              className="mt-6 max-w-[16ch] font-display text-4xl font-semibold leading-none tracking-tight text-balance sm:text-5xl"
            >
              Close to where you operate.
            </Reveal>
            <Reveal delay={120} className="mt-6 max-w-[48ch] text-base leading-relaxed text-mute">
              We work out of Abu Dhabi and Dubai and support customers right across
              the Emirates with the parts and technical backup to keep your
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

      {/* Annual Maintenance Programmes (AMC) */}
      <section className="border-b border-line bg-surface">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {/* Intro cell — fills the first grid slot so the 5 cards complete two rows of three */}
            <div className="flex flex-col justify-center sm:col-span-2 lg:col-span-1">
              <span className="eyebrow">Annual maintenance programmes</span>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-balance text-bone lg:text-4xl">
                Maintenance, managed for the year ahead.
              </h2>
              <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-mute">
                {maintenanceProgramme.intro}
              </p>
            </div>

            {maintenanceProgramme.components.map((c, i) => (
              <Reveal
                key={c.title}
                delay={(i % 3) * 70}
                className="group flex flex-col overflow-hidden border border-line bg-surface"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={amcImages[i] ?? ""}
                    alt={c.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 lg:p-6">
                  <span className="font-mono text-[0.6rem] text-mute-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight text-bone">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Success stories */}
      <section className="bg-surface">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="Success stories"
            title="Practical solutions, measurable outcomes."
            description="A few examples of how the right equipment and support changed how our customers operate."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {successStories.map((story, i) => (
              <Reveal key={story.title} delay={(i % 3) * 80}>
                <article className="group flex h-full flex-col overflow-hidden border border-line bg-panel/30">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={storyImages[i] ?? ""}
                      alt={story.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
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
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
