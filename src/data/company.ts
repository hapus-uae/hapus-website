import type { Location } from "@/lib/types";

// Single source of truth for company identity and contact details.
// HAPUS General Trading L.L.C – S.P.C — automotive & industrial solutions
// distributor, Abu Dhabi (HQ) and Dubai. Content sourced from the company
// narrative & content strategy document.

export const company = {
  name: "HAPUS",
  legalName: "HAPUS General Trading L.L.C – S.P.C",
  tagline: "More than a supplier. A strategic solutions partner.",
  foundedYear: 2020,
  region: "the UAE",
  /** Used for canonical URLs, OpenGraph and JSON-LD. */
  url: "https://hapusuae.com",
  description:
    "HAPUS connects global innovation with local industry supplying world-class automotive refinishing, workshop, compressed-air, power-tool, material-handling, industrial and cleaning solutions to businesses across the UAE, backed by technical expertise and trusted manufacturer partnerships.",
  shortDescription:
    "Automotive & industrial solutions across the UAE trusted brands, technical expertise, and long-term partnership since 2020.",
  philosophy: "Connecting global innovation with local industry.",
  email: "sales@hapusuae.com",
  infoEmail: "info@hapusuae.com",
  careersEmail: "info@hapusuae.com",
  serviceEmail: "sales@hapusuae.com",
  phoneDisplay: "+971 50 585 8231",
  phoneHref: "+971505858231",
  whatsappDisplay: "+971 50 585 8231",
  whatsappHref: "971505858231",
  hours: "Mon–Sat, 08:00–18:00",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
  ],
  // Honest, document-sourced figures (no fabricated volumes).
  stats: [
    { value: "2020", unit: "", label: "Established in Abu Dhabi" },
    { value: "13", unit: "+", label: "Global brands represented" },
    { value: "7", unit: "", label: "Core solution areas" },
    { value: "2", unit: "", label: "Offices in Abu Dhabi & Dubai" },
  ],
  founder: {
    name: "Mansoor Mohammed",
    role: "Founder & Managing Director",
    quote:
      "When HAPUS was established in 2020, the objective was never simply to build another trading company.",
    message: [
      "The vision was to create an organization capable of delivering genuine value to businesses by connecting them with world-class technologies, trusted global brands, and practical expertise that improve operational performance.",
      "Having spent years working closely with the automotive and industrial sectors across the UAE, I recognized a growing need for a partner that could offer more than products alone. Businesses required dependable advice, technical understanding, responsive support, and solutions tailored to their operational requirements. This belief became the foundation upon which HAPUS was built.",
      "Over the years, we have been privileged to earn the trust of workshops, service centers, industrial operators, and some of the UAE's most respected automotive organizations. Every milestone we have achieved has been made possible through the confidence our customers place in us, the dedication of our team, and the strength of our relationships with leading international manufacturers.",
      "As we continue to grow, our commitment remains unchanged. We will continue investing in knowledge, innovation, strategic partnerships, and customer success while remaining focused on the values that define our organization: trust, integrity, technical excellence, and long-term relationships.",
      "The future of industry belongs to organizations that embrace innovation, adapt to change, and continuously pursue higher standards. HAPUS is proud to be part of that journey, helping businesses across the region operate more efficiently, compete more effectively, and grow with confidence.",
      "Thank you for your trust and partnership.",
    ],
  },
  // Representative customers named in the company narrative.
  customers: [
    "Al-Futtaim Motors",
    "Al Tayer Motors",
    "Al Nabooda Automobiles",
    "Elite Cars Group",
    "Exotic Cars",
    "Independent Workshop Networks",
    "Fleet Operators Across the UAE",
  ],
};

export const locations: Location[] = [
  {
    name: "Abu Dhabi",
    role: "Head office",
    address: ["Musaffah Industrial Area", "Abu Dhabi", "United Arab Emirates"],
    phone: "+971 50 585 8231",
    email: "sales@hapusuae.com",
    hours: "Mon–Sat, 08:00–18:00",
    mapQuery: "Musaffah Industrial Area Abu Dhabi",
  },
  {
    name: "Dubai",
    role: "Branch office",
    address: ["Dubai", "United Arab Emirates"],
    phone: "+971 50 585 8231",
    email: "info@hapusuae.com",
    hours: "Mon–Sat, 08:00–18:00",
    mapQuery: "Dubai United Arab Emirates",
  },
];
