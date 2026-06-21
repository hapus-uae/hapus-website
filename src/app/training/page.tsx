import type { Metadata } from "next";
import Image from "next/image";
import { Check, Certificate } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  trainingPrograms,
  consultancyServices,
  trainingCertificates,
} from "@/data/training";

// A fitting (reused) image for each training program, by order.
const programImages = [
  "/assets/categories/workshop-infrastructure.jpg", // vehicle lift safety
  "/assets/categories/compressed-air.jpg", // air compressor
  "/assets/industries/automotive.jpg", // wheel alignment & tyre
  "/assets/why/expertise.jpg", // preventive maintenance
  "/assets/categories/cleaning-maintenance.jpg", // industrial cleaning
  "/assets/categories/industrial-equipment.jpg", // EV workshop safety
];

export const metadata: Metadata = {
  title: "Training & Technical Development",
  description:
    "Practical, hands-on training and technical development from HAPUS — vehicle lift safety, air compressor, wheel alignment, preventive maintenance, industrial cleaning and EV workshop safety — plus technical consultancy. Delivered on your site or at a HAPUS facility.",
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training & Technical Development"
        title="Empowering people. Improving performance."
        lead="The effectiveness of any equipment depends not only on the technology itself, but on the knowledge and competence of the people operating and maintaining it. Our hands-on training helps your teams work safer, smarter and more efficiently reducing operational risk and unplanned downtime."
        image="/assets/industries/training.jpg"
      />

      <section className="bg-surface">
        <Container className="py-16 lg:py-24">
          <ul className="border-t border-line">
            {trainingPrograms.map((program, i) => (
              <Reveal
                key={program.code}
                as="li"
                delay={(i % 2) * 70}
                className="border-b border-line py-10 lg:py-12"
              >
                <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
                  {/* Image — alternates side per row */}
                  <div
                    className={`relative aspect-4/3 overflow-hidden border border-line lg:col-span-4 ${
                      i % 2 === 1 ? "lg:order-2 lg:col-start-9" : ""
                    }`}
                  >
                    <Image
                      src={programImages[i] ?? ""}
                      alt={program.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="font-mono text-[0.65rem] tracking-[0.2em] text-mute-2">
                      {program.code}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-bone lg:text-3xl">
                      {program.title}
                    </h2>
                    {program.audience ? (
                      <p className="mt-4 text-sm leading-relaxed text-mute">
                        <span className="label mr-2">Audience</span>
                        {program.audience.join(" · ")}
                      </p>
                    ) : null}
                    <p className="label mb-3 mt-6">Coverage</p>
                    <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {program.coverage.map((c) => (
                        <li
                          key={c}
                          className="flex gap-3 text-sm leading-relaxed text-mute"
                        >
                          <Check
                            weight="bold"
                            className="mt-0.5 size-4 shrink-0 text-bone"
                          />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Premium Services — Technical Consultancy */}
      <section className="on-wine">
        <Container className="py-16 lg:py-24">
          <SectionHeading
            eyebrow="Premium services"
            title="Technical consultancy"
            description="Advisory engagements that help you assess equipment, plan maintenance and grow capacity beyond the training room."
          />

          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {consultancyServices.map((service, i) => (
              <Reveal
                key={service}
                as="li"
                delay={(i % 3) * 60}
                className="bg-ink p-8"
              >
                <span className="font-mono text-[0.65rem] tracking-[0.2em] text-mute-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-base leading-relaxed text-bone">{service}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Certificate of Participation */}
      <section className="bg-surface">
        <Container className="py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Certificate of participation"
                title="Recognised on completion."
              />
              <Reveal delay={100}>
                <p className="mt-6 mb-6 text-base leading-relaxed text-mute">
                  Participants completing selected training programs may receive:
                </p>
                <ul className="border-t border-line">
                  {trainingCertificates.map((cert) => (
                    <li
                      key={cert}
                      className="flex items-center gap-4 border-b border-line py-5"
                    >
                      <Certificate
                        weight="light"
                        className="size-6 shrink-0 text-bone"
                      />
                      <span className="text-base text-bone">{cert}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={140} className="lg:col-span-5 lg:col-start-8">
              <div className="relative h-full min-h-72 overflow-hidden border border-line">
                <Image
                  src="/assets/why/partnerships.jpg"
                  alt="Recognising completed training"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

    </>
  );
}
