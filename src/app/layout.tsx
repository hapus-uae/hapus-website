import type { Metadata } from "next";
import { Archivo, Geist, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { SitePopups } from "@/components/marketing/SitePopups";
import { company, locations } from "@/data/company";

// Display face — Archivo: an industrial grotesque with character (no Inter).
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

// Body + technical-label faces, self-hosted via next/font (no external package).
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

// Technical-label face — IBM Plex Mono: refined, engineered, great at small
// uppercase tracked sizes (eyebrows, codes, spec keys).
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.legalName} — Automotive & industrial solutions, UAE`,
    template: `%s — ${company.name}`,
  },
  description: company.description,
  keywords: [
    "automotive solutions",
    "industrial equipment",
    "workshop equipment",
    "compressed air systems",
    "automotive refinishing",
    "power tools",
    "material handling",
    "Abu Dhabi",
    "Dubai",
    "UAE",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    siteName: company.name,
    title: `${company.legalName} — Automotive & industrial solutions, UAE`,
    description: company.shortDescription,
    locale: "en_AE",
    url: company.url,
  },
  twitter: {
    card: "summary_large_image",
    title: company.legalName,
    description: company.shortDescription,
  },
  robots: { index: true, follow: true },
};

// LocalBusiness structured data for SEO / rich results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: company.legalName,
  alternateName: company.name,
  description: company.description,
  url: company.url,
  email: company.email,
  telephone: [company.phoneDisplay, company.landlineDisplay],
  foundingDate: String(company.foundedYear),
  founder: { "@type": "Person", name: company.founder.name },
  areaServed: "United Arab Emirates",
  openingHours: "Mo-Sa 08:00-18:00",
  address: locations.map((loc) => ({
    "@type": "PostalAddress",
    name: loc.name,
    streetAddress: loc.address[0],
    addressLocality: loc.name,
    addressCountry: "AE",
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${geistSans.variable} ${plexMono.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Sentinel the header observes to know when the page has scrolled. */}
        <div id="top-sentinel" aria-hidden className="absolute top-0 h-px w-px" />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-white"
        >
          Skip to content
        </a>
        <div className="grain" aria-hidden />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingContact />
        <SitePopups />
      </body>
    </html>
  );
}
