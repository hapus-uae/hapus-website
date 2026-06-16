import type { Metadata } from "next";
import { Check, Certificate } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { trainingPrograms } from "@/data/training";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Product training and operator onboarding from HAPUS — refinishing, wheel service, compressed air, power tools and cleaning equipment, delivered on your site or at a HAPUS facility.",
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        index="T"
        title="Good equipment, in trained hands."
        lead="Product training and operator onboarding for the lines we supply — delivered on your floor or at a HAPUS facility, so your team gets the full value of the equipment from day one."
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
                    <dl className="mt-6 space-y-2.5 text-sm">
                      {[
                        ["For", program.audience],
                        ["Format", program.format],
                        ["Duration", program.duration],
                      ].map(([k, v]) => (
                        <div key={k} className="flex gap-3">
                          <dt className="w-20 shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-mute-2">
                            {k}
                          </dt>
                          <dd className="text-mute">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="lg:col-span-5 lg:col-start-6">
                    <p className="label mb-4">What you will leave able to do</p>
                    <ul className="space-y-3">
                      {program.outcomes.map((o) => (
                        <li key={o} className="flex gap-3 text-sm leading-relaxed text-mute">
                          <Check weight="bold" className="mt-0.5 size-4 shrink-0 text-bone" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-2 lg:col-start-11">
                    <div className="flex items-start gap-2 border border-line p-4">
                      <Certificate weight="light" className="size-5 shrink-0 text-bone" />
                      <span className="text-xs leading-snug text-mute">
                        {program.certification}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand
        eyebrow="Register interest"
        title="Book a course or build a custom one."
        body="Tell us the team, the equipment and how many people. We will schedule a session — on your site or at a HAPUS facility."
        href="/contact?category=training"
        cta="Enquire about training"
      />
    </>
  );
}
