import Link from "next/link";
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { FooterRFQForm } from "@/components/forms/FooterRFQForm";
import { company } from "@/data/company";
import { mainNav } from "@/data/nav";

const contacts = [
  {
    icon: MapPin,
    label: "Abu Dhabi office",
    value: company.phoneDisplay,
    href: `tel:${company.phoneHref}`,
  },
  {
    icon: Phone,
    label: "Dubai office",
    value: company.landlineDisplay,
    href: `tel:${company.landlineHref}`,
  },
  {
    icon: EnvelopeSimple,
    label: "Sales",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: "Chat with us",
    href: `https://wa.me/${company.whatsappHref}`,
  },
];

export function Footer() {
  const year = 2026; // brochure site — fixed copyright year, no client runtime cost

  return (
    <footer className="on-wine border-t border-line bg-[linear-gradient(140deg,#171A1C_0%,#4d1729_34%,#571930_58%,#7e2541_82%,#a33146_100%)]">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* CTA */}
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl font-bold leading-[0.98] tracking-tight text-balance text-white sm:text-5xl">
              The sale is only the beginning.
            </h2>
            <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-mute">
              Equipment can be purchased anywhere the real value comes from the
              support that follows. From installation and commissioning to
              operator training and technical assistance, HAPUS remains your
              partner long after delivery.
            </p>
          </div>

          {/* Get in touch */}
          <div className="lg:col-span-3">
            <p className="label mb-6">Get in touch</p>
            <ul className="space-y-5">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-4"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-pink transition-colors group-hover:border-pink/50">
                      <c.icon weight="regular" className="size-4.5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-mute-2">
                        {c.label}
                      </span>
                      <span className="text-sm text-bone transition-colors group-hover:text-pink">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RFQ form */}
          <div className="lg:col-span-5">
            <p className="label mb-6">Send us your requirement</p>
            <FooterRFQForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-display text-2xl font-bold uppercase tracking-[0.12em] text-bone">
            {company.name}
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mute transition-colors hover:text-bone"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-mute-2">
            © {year} {company.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {company.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-mute transition-colors hover:text-bone"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
