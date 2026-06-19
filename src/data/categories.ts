import type { Category } from "@/lib/types";

// The HAPUS solution catalogue, authored from the company's product solutions
// document. Each category groups the equipment CLASSES HAPUS supplies (no fixed
// model/SKU is implied — final configuration is confirmed on quotation). There
// are no per-item pages: a category page lists its groups and the equipment
// classes under each. Drop a hero image at /public/assets/categories/<slug>.jpg.

export const categories: Category[] = [
  {
    slug: "automotive-refinishing",
    name: "Automotive Refinishing",
    index: "01",
    image: "/assets/categories/automotive-refinishing.jpg",
    tagline: "Surface prep, painting, finishing and detailing.",
    description:
      "Premium technologies and systems designed to support professional surface preparation, painting, finishing and detailing operations — for bodyshops and dealership paint centres.",
    brands: ["3m", "rupes", "anest-iwata", "devilbiss"],
    groups: [
      {
        name: "Surface Preparation",
        items: [
          "Sanding Systems",
          "Abrasives",
          "Polishing Systems",
          "Surface Conditioning Products",
        ],
      },
      {
        name: "Spray Painting Systems",
        items: [
          "Spray Guns",
          "Paint Pressure Pots",
          "Airbrush Systems",
          "Paint Mixing Equipment",
        ],
      },
      {
        name: "Paint Shop Solutions",
        items: [
          "Paint Booths",
          "Drying Systems",
          "Infrared Dryers",
          "Dust Extraction Systems",
        ],
      },
      {
        name: "Detailing & Finishing",
        items: [
          "Polishing Machines",
          "Compounds",
          "Pads",
          "Surface Protection Products",
        ],
      },
    ],
  },
  {
    slug: "workshop-infrastructure",
    name: "Workshop Infrastructure",
    index: "02",
    image: "/assets/categories/workshop-infrastructure.jpg",
    tagline: "Lifting, tyre, alignment and EV service equipment.",
    description:
      "Comprehensive workshop equipment, lifting systems and service technologies designed to maximise productivity and efficiency — from the wheel bay to the full service floor.",
    brands: ["hunter", "vsg-group", "dura"],
    groups: [
      {
        name: "Vehicle Lifting Systems",
        items: [
          "Two Post Lifts",
          "Four Post Lifts",
          "Scissor Lifts",
          "Alignment Lifts",
          "Heavy Duty Lifts",
          "Motorcycle Lifts",
          "In-Ground Lifts",
        ],
      },
      {
        name: "Tyre Service Equipment",
        items: [
          "Tyre Changers",
          "Wheel Balancers",
          "Nitrogen Inflation Systems",
          "Tyre Repair Equipment",
        ],
      },
      {
        name: "Wheel Alignment Systems",
        items: [
          "3D Wheel Aligners",
          "Alignment Accessories",
          "Calibration Equipment",
        ],
      },
      {
        name: "EV Workshop Equipment",
        items: [
          "EV Battery Lifts",
          "Insulated Tool Trolleys",
          "EV Safety Equipment",
          "Hybrid Vehicle Service Tools",
        ],
      },
    ],
  },
  {
    slug: "compressed-air",
    name: "Compressed Air",
    index: "03",
    image: "/assets/categories/compressed-air.jpg",
    tagline: "Compressors, air treatment, distribution and tools.",
    description:
      "Reliable compressor systems and air management technologies engineered to support demanding industrial and automotive applications — sized, installed and maintained for the workload.",
    brands: ["ats-elgi", "kirloskar"],
    groups: [
      {
        name: "Air Compressors",
        items: [
          "Screw Compressors",
          "Piston Compressors",
          "Oil-Free Compressors",
        ],
      },
      {
        name: "Air Treatment",
        items: ["Air Dryers", "Air Filters", "Moisture Separators"],
      },
      {
        name: "Air Distribution Systems",
        items: ["Aluminium Piping Systems", "Hose Reels", "Air Accessories"],
      },
      {
        name: "Air Tools",
        items: [
          "Impact Wrenches",
          "Ratchet Wrenches",
          "Die Grinders",
          "Air Sanders",
        ],
      },
    ],
  },
  {
    slug: "professional-tools",
    name: "Professional Tools & Equipment",
    index: "04",
    image: "/assets/categories/professional-tools.jpg",
    tagline: "Power, hand, diagnostic and specialty tools.",
    description:
      "High-performance power tools, hand tools and workshop technologies trusted by professionals worldwide — for automotive, maintenance and industrial use.",
    brands: ["milwaukee", "bosch"],
    groups: [
      {
        name: "Power Tools",
        items: ["Drills", "Impact Wrenches", "Grinders", "Sanders", "Polishers"],
      },
      {
        name: "Hand Tools",
        items: [
          "Socket Sets",
          "Torque Wrenches",
          "Screwdrivers",
          "Pliers",
          "Specialty Tools",
        ],
      },
      {
        name: "Diagnostic Tools",
        items: [
          "Electrical Testers",
          "Insulation Testers",
          "Battery Test Equipment",
        ],
      },
      {
        name: "Workshop Specialty Tools",
        items: [
          "Engine Service Tools",
          "Brake Service Tools",
          "Suspension Tools",
          "Body Shop Tools",
        ],
      },
    ],
  },
  {
    slug: "cleaning-maintenance",
    name: "Cleaning & Maintenance",
    index: "05",
    image: "/assets/categories/cleaning-maintenance.jpg",
    tagline: "Pressure cleaning, vacuums and floor care.",
    description:
      "Professional cleaning technologies and maintenance equipment that help organisations maintain high operational and safety standards — across workshops, facilities and industrial sites.",
    brands: ["karcher"],
    groups: [
      {
        name: "High Pressure Cleaning",
        items: ["Cold Water Pressure Washers", "Hot Water Pressure Washers"],
      },
      {
        name: "Industrial Vacuum Systems",
        items: [
          "Wet & Dry Vacuum Cleaners",
          "Dust Extraction Systems",
          "Central Vacuum Systems",
        ],
      },
      {
        name: "Floor Care Equipment",
        items: ["Scrubber Dryers", "Sweepers", "Floor Polishers"],
      },
      {
        name: "Automotive Cleaning Systems",
        items: ["Steam Cleaners", "Detailing Equipment", "Vehicle Wash Systems"],
      },
    ],
  },
  {
    slug: "material-handling",
    name: "Material Handling",
    index: "06",
    image: "/assets/categories/material-handling.jpg",
    tagline: "Warehouse, drum and workshop handling.",
    description:
      "Safe and efficient lifting, transportation and handling technologies that improve workplace productivity and operational performance across workshops, stores and industrial floors.",
    brands: ["lifmex"],
    groups: [
      {
        name: "Warehouse Equipment",
        items: ["Hand Pallet Trucks", "Electric Pallet Trucks", "Stackers"],
      },
      {
        name: "Drum Handling Equipment",
        items: ["Drum Trolleys", "Drum Lifters", "Drum Rotators"],
      },
      {
        name: "Workshop Handling Equipment",
        items: ["Hydraulic Tables", "Workshop Cranes", "Engine Hoists"],
      },
    ],
  },
  {
    slug: "lubrication-fluid",
    name: "Lubrication & Fluid Management",
    index: "07",
    image: "/assets/categories/lubrication-fluid.jpg",
    tagline: "Oil, grease and fluid transfer systems.",
    description:
      "Equipment for clean, accurate handling of oils, greases and workshop fluids — from dispensing and drainage through to coolant, DEF and fuel transfer.",
    groups: [
      {
        name: "Oil Management",
        items: ["Oil Drainers", "Oil Dispensers", "Oil Pumps"],
      },
      {
        name: "Greasing Systems",
        items: ["Grease Pumps", "Grease Dispensers", "Grease Handling Equipment"],
      },
      {
        name: "Fluid Transfer Systems",
        items: [
          "DEF Equipment",
          "Coolant Service Equipment",
          "Fuel Transfer Equipment",
        ],
      },
    ],
  },
  {
    slug: "welding-fabrication",
    name: "Welding & Fabrication",
    index: "08",
    image: "/assets/categories/welding-fabrication.jpg",
    tagline: "Welding, cutting and metal fabrication.",
    description:
      "Welding and fabrication equipment for workshop and industrial metalwork — MIG, TIG and plasma cutting through to bench grinding and cutting machines.",
    groups: [
      {
        name: "Welding Equipment",
        items: ["MIG Welders", "TIG Welders", "Plasma Cutters"],
      },
      {
        name: "Fabrication Equipment",
        items: [
          "Metal Cutting Machines",
          "Bench Grinders",
          "Workshop Fabrication Tools",
        ],
      },
    ],
  },
  {
    slug: "industrial-equipment",
    name: "Industrial Equipment",
    index: "09",
    image: "/assets/categories/industrial-equipment.jpg",
    tagline: "Machinery, engineering and maintenance equipment.",
    description:
      "Engineered products and technologies designed to support manufacturing, maintenance, engineering and industrial operations — extending HAPUS solutions beyond the automotive floor.",
    groups: [
      {
        name: "Workshop Machinery",
        items: ["Hydraulic Presses", "Shop Equipment", "Service Machinery"],
      },
      {
        name: "Engineering Equipment",
        items: ["Industrial Machinery", "Production Support Equipment"],
      },
      {
        name: "Maintenance Equipment",
        items: ["Industrial Service Tools", "Safety Equipment"],
      },
    ],
  },
];

export const categoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);

/** Total equipment classes across all groups in a category. */
export const categoryItemCount = (category: Category): number =>
  category.groups.reduce((n, g) => n + g.items.length, 0);
