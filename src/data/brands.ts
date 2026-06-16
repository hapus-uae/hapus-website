import type { Brand } from "@/lib/types";

// The internationally recognised manufacturers HAPUS represents, grouped by the
// partnership segments in the company portfolio. Drop a logo at
// /public/assets/brands/<slug>.svg to replace the wordmark tile.

export const brands: Brand[] = [
  // Automotive Refinishing & Surface Solutions
  {
    slug: "3m",
    name: "3M",
    segment: "Refinishing & Surface",
    blurb: "Abrasives, masking and surface preparation systems.",
  },
  {
    slug: "rupes",
    name: "Rupes",
    segment: "Refinishing & Surface",
    blurb: "Random-orbital polishing and dust-free sanding.",
  },
  {
    slug: "anest-iwata",
    name: "Anest Iwata",
    segment: "Refinishing & Surface",
    blurb: "Professional spray guns and paint application.",
  },
  {
    slug: "devilbiss",
    name: "DeVilbiss",
    segment: "Refinishing & Surface",
    blurb: "Spray finishing equipment for bodyshops.",
  },

  // Industrial Air & Compressor Technologies
  {
    slug: "ats-elgi",
    name: "ATS ELGi",
    segment: "Air & Compressors",
    blurb: "Rotary screw compressors and air systems.",
  },
  {
    slug: "kirloskar",
    name: "Kirloskar",
    segment: "Air & Compressors",
    blurb: "Reciprocating compressors and air-end technology.",
  },

  // Professional Power Tools & Equipment
  {
    slug: "milwaukee",
    name: "Milwaukee",
    segment: "Power Tools",
    blurb: "Cordless power tools and heavy-duty hand tools.",
  },
  {
    slug: "bosch",
    name: "Bosch",
    segment: "Power Tools",
    blurb: "Power tools, measuring and diagnostic equipment.",
  },

  // Cleaning & Maintenance Technologies
  {
    slug: "karcher",
    name: "Kärcher",
    segment: "Cleaning & Maintenance",
    blurb: "Pressure washers, vacuums and floor-care systems.",
  },

  // Material Handling & Lifting Solutions
  {
    slug: "lifmex",
    name: "Lifmex",
    segment: "Material Handling",
    blurb: "Pallet trucks, stackers and lifting equipment.",
  },

  // Workshop Infrastructure & Automotive Service Equipment
  {
    slug: "hunter",
    name: "Hunter",
    segment: "Workshop & Service",
    blurb: "Alignment, balancing and tyre-service systems.",
  },
  {
    slug: "vsg-group",
    name: "VSG Group",
    segment: "Workshop & Service",
    blurb: "Vehicle lifts and workshop service equipment.",
  },
  {
    slug: "dura",
    name: "Dura",
    segment: "Workshop & Service",
    blurb: "Lifting systems and workshop infrastructure.",
  },
];

export const brandBySlug = (slug: string): Brand | undefined =>
  brands.find((b) => b.slug === slug);
