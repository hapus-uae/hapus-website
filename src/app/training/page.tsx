import type { Metadata } from "next";
import { Check, Certificate } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  trainingPrograms,
  consultancyServices,
  trainingCertificates,
} from "@/data/training";

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
                <div className="grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <span className="font-mono text-[0.65rem] tracking-[0.2em] text-mute-2">
                      {program.code}
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-bone">
                      {program.title}
                    </h2>
                    {program.audience ? (
                      <div className="mt-6">
                        <p className="label mb-3">Target audience</p>
                        <ul className="space-y-1.5">
                          {program.audience.map((a) => (
                            <li key={a} className="text-sm text-mute">
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <div className="lg:col-span-7 lg:col-start-6">
                    <p className="label mb-4">Coverage</p>
                    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
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
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Certificate of participation"
                title="Recognised on completion."
              />
            </div>
            <Reveal
              delay={120}
              className="lg:col-span-7 lg:col-start-6"
            >
              <p className="mb-6 text-base leading-relaxed text-mute">
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
        </Container>
      </section>

      <CTABand
        eyebrow="Register interest"
        title="Book a course or build a custom one."
        body="Tell us the team, the equipment and how many people. We will schedule a session on your site or at a HAPUS facility."
        href="/contact?category=training"
        cta="Enquire about training"
      />
    </>
  );
}
