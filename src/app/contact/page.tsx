import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, EnvelopeSimple, WhatsappLogo, Clock } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocationCard } from "@/components/cards/LocationCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { company, locations } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote or arrange support. Call, email or send the form — the HAPUS team replies within one business day. Offices in Abu Dhabi and Dubai.",
};

export default function ContactPage() {
  const channels = [
    { icon: Phone, label: "Mobile", value: company.phoneDisplay, href: `tel:${company.phoneHref}` },
    { icon: Phone, label: "Landline", value: company.landlineDisplay, href: `tel:${company.landlineHref}` },
    {
      icon: WhatsappLogo,
      label: "WhatsApp",
      value: company.whatsappDisplay,
      href: `https://wa.me/${company.whatsappHref}`,
    },
    { icon: EnvelopeSimple, label: "Sales", value: company.email, href: `mailto:${company.email}` },
    { icon: EnvelopeSimple, label: "Enquiries", value: company.infoEmail, href: `mailto:${company.infoEmail}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        index="✉"
        title="Let's build better business together."
        lead="Whether it's automotive solutions, industrial equipment, compressed air, professional tools or a strategic partnership — our team is ready to help. Every project begins with a conversation."
      />

      {/* Form + channels */}
      <section className="border-b border-line bg-surface">
        <Container className="py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Channels */}
            <div className="lg:col-span-4">
              <span className="label">Direct lines</span>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center gap-4 py-4"
                    >
                      <c.icon weight="light" className="size-5 text-mute transition-colors group-hover:text-bone" />
                      <span>
                        <span className="block font-mono text-[0.6rem] uppercase tracking-[0.16em] text-mute-2">
                          {c.label}
                        </span>
                        <span className="block text-sm text-bone">{c.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-4 py-4">
                  <Clock weight="light" className="size-5 text-mute" />
                  <span>
                    <span className="block font-mono text-[0.6rem] uppercase tracking-[0.16em] text-mute-2">
                      Hours
                    </span>
                    <span className="block text-sm text-bone">{company.hours}</span>
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <span className="label">Follow</span>
                <div className="mt-4 flex gap-4">
                  {company.social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mute transition-colors hover:text-bone"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal>
                <Suspense fallback={<FormSkeleton />}>
                  <ContactForm />
                </Suspense>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Branches */}
      <section className="bg-surface">
        <Container className="py-20 lg:py-28">
          <SectionHeading eyebrow="Branches" index="01" title="Come and see the equipment." />
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

function FormSkeleton() {
  return (
    <div className="flex flex-col gap-6" aria-hidden>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative h-12 overflow-hidden border border-line bg-panel/40 shimmer" />
        <div className="relative h-12 overflow-hidden border border-line bg-panel/40 shimmer" />
      </div>
      <div className="relative h-32 overflow-hidden border border-line bg-panel/40 shimmer" />
    </div>
  );
}
