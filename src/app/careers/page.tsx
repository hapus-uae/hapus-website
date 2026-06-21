import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CareersForm } from "@/components/forms/CareersForm";
import { jobs } from "@/data/jobs";

const culture = [
  ["Real responsibility early", "You'll work directly with customers and equipment, not from behind a desk."],
  ["We invest in skill", "Manufacturer and product training on the brands we represent we grow our own expertise."],
  ["Partnership, inside and out", "We treat our team the way we treat customers: as long-term relationships."],
];

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join HAPUS sales engineers, technical support, product specialists and operations roles across Abu Dhabi and Dubai.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career with a growing partner."
        lead="HAPUS grows through the dedication of its team. We hire people who would rather solve the problem than file it and we invest in them for the long term."
        image="/assets/why/partnerships.jpg"
      />

      {/* Culture */}
      <section className="border-b border-line bg-surface">
        <Container className="py-16 lg:py-20">
          <div className="grid grid-cols-1 border-t border-line md:grid-cols-3">
            {culture.map(([title, body], i) => (
              <Reveal
                key={title}
                delay={i * 80}
                className={`border-b border-line py-8 md:border-b-0 md:py-2 ${
                  i < culture.length - 1 ? "md:border-r md:pr-8" : "md:pl-8"
                } ${i > 0 ? "md:pl-8" : "md:pr-8"}`}
              >
                <span className="font-mono text-[0.6rem] text-mute-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-bone">
                  {title}
                </h3>
                <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-mute">
                  {body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Open positions */}
      <section className="on-wine border-b border-line bg-ink">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="Open positions"
            title={
              jobs.length === 0
                ? "No open positions right now."
                : `${jobs.length} roles open right now.`
            }
            description="We're not actively hiring at the moment — but we keep good people in mind. Send a speculative application below and we'll be in touch when the right role opens."
          />

          {jobs.length === 0 ? (
            <Reveal className="mt-12 border border-line bg-ink/40 p-8 lg:p-10">
              <p className="max-w-[52ch] text-base leading-relaxed text-mute">
                There are no vacancies advertised currently. HAPUS grows
                steadily, so roles in sales, technical support, product and
                operations open from time to time across Abu Dhabi and Dubai. If
                that sounds like you, introduce yourself —
                <Link
                  href="#apply"
                  className="text-bone underline-offset-4 transition-colors hover:underline"
                >
                  {" "}
                  send your CV
                </Link>
                .
              </p>
            </Reveal>
          ) : (
          <ul className="mt-14 border-t border-line">
            {jobs.map((job, i) => (
              <Reveal
                key={job.id}
                as="li"
                delay={(i % 2) * 60}
                className="border-b border-line py-8 lg:py-10"
              >
                <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-bone">
                      {job.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-mute-2">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3" />
                        {job.location}
                      </span>
                      <span>{job.type}</span>
                      <span>{job.department}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <p className="text-sm leading-relaxed text-mute">{job.summary}</p>
                    <ul className="mt-4 space-y-1.5">
                      {job.responsibilities.map((r) => (
                        <li key={r} className="flex gap-2.5 text-sm text-mute-2">
                          <span className="mt-2 size-1 shrink-0 bg-mute-2" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-2 lg:col-start-11 lg:text-right">
                    <Link
                      href={`/careers?role=${job.id}#apply`}
                      className="group inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-bone"
                    >
                      Apply
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
          )}
        </Container>
      </section>

      {/* Application form */}
      <section id="apply" className="scroll-mt-24 bg-surface">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Apply" title="Send it through." />
              <p className="mt-6 max-w-[40ch] text-sm leading-relaxed text-mute">
                Fill in your details, attach a CV and pick the role. We read every
                application and reply to those that fit.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Suspense fallback={<FormSkeleton />}>
                <CareersForm />
              </Suspense>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function FormSkeleton() {
  return (
    <div className="flex flex-col gap-6" aria-hidden>
      {[0, 1, 2, 3].map((r) => (
        <div key={r} className="relative h-12 overflow-hidden border border-line bg-panel/40 shimmer" />
      ))}
    </div>
  );
}
