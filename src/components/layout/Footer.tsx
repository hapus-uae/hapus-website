import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { company, locations } from "@/data/company";
import { mainNav, footerProductLinks } from "@/data/nav";

export function Footer() {
  const year = 2026; // brochure site — fixed copyright year, no client runtime cost

  return (
    <footer className="on-wine border-t border-line bg-ink">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Identity */}
          <div className="lg:col-span-4">
            <p className="font-display text-3xl font-bold uppercase tracking-[0.12em] text-bone">
              {company.name}
            </p>
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-mute">
              {company.shortDescription}
            </p>
            <div className="mt-6 flex flex-col gap-1">
              <a
                href={`tel:${company.phoneHref}`}
                className="font-mono text-sm text-bone transition-colors hover:text-mute"
              >
                {company.phoneDisplay}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="font-mono text-sm text-mute transition-colors hover:text-bone"
              >
                {company.email}
              </a>
            </div>
          </div>

          {/* Site links */}
          <div className="lg:col-span-2">
            <p className="label mb-5">Company</p>
            <ul className="space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-mute transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <p className="label mb-5">Products</p>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {footerProductLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-mute transition-colors hover:text-bone"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div className="lg:col-span-3">
            <p className="label mb-5">Branches</p>
            <ul className="space-y-4">
              {locations.map((loc) => (
                <li key={loc.name}>
                  <p className="text-sm font-medium text-bone">{loc.name}</p>
                  <p className="text-xs leading-relaxed text-mute-2">
                    {loc.address.join(", ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
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
