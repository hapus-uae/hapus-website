import type { Category } from "@/lib/types";

// The HAPUS solution catalogue. Categories mirror the company's seven product
// solution areas; products are REPRESENTATIVE of the equipment classes HAPUS
// supplies under each partner brand (no fixed model/SKU is implied — final
// configuration is confirmed on quotation). Products live inside their category
// and ONLY here — there are no per-product routes. Replace with real SKUs and
// images (/public/assets/products/<id>.jpg) when available.

export const categories: Category[] = [
  {
    slug: "automotive-refinishing",
    name: "Automotive Refinishing",
    index: "01",
    tagline: "Surface prep, painting, finishing and detailing.",
    description:
      "Premium technologies and systems designed to support professional surface preparation, painting, finishing and detailing operations — for bodyshops and dealership paint centres.",
    products: [
      {
        id: "rf-spray-iwata",
        name: "HVLP Spray Gun System",
        code: "HAP-RF-101",
        brand: "anest-iwata",
        summary: "Gravity-feed HVLP gun for basecoat and clear.",
        featured: true,
        detail:
          "High-transfer-efficiency spray application that lays down an even film with minimal overspray — the foundation of a manufacturer-level finish. Supplied with technical setup and operator guidance.",
        specs: [
          { label: "Type", value: "Gravity-feed HVLP" },
          { label: "Application", value: "Basecoat & clearcoat" },
          { label: "Nozzle range", value: "1.3–1.4 mm typical" },
          { label: "Support", value: "Setup & training" },
        ],
      },
      {
        id: "rf-spray-devilbiss",
        name: "Spray Finishing Gun",
        code: "HAP-RF-102",
        brand: "devilbiss",
        summary: "Refinishing gun for primer, base and clear.",
        specs: [
          { label: "Type", value: "Compliant / HVLP" },
          { label: "Application", value: "Bodyshop refinish" },
          { label: "Finish", value: "High-build to clear" },
        ],
      },
      {
        id: "rf-polisher-rupes",
        name: "Random Orbital Polisher",
        code: "HAP-RF-103",
        brand: "rupes",
        summary: "Dual-action polisher for defect correction.",
        specs: [
          { label: "Type", value: "Random orbital" },
          { label: "Application", value: "Cut, polish, finish" },
          { label: "Use", value: "Paint correction & detailing" },
        ],
      },
      {
        id: "rf-sanding-rupes",
        name: "Dust-Free Sanding System",
        code: "HAP-RF-104",
        brand: "rupes",
        summary: "Extraction-linked sanding for clean prep.",
        specs: [
          { label: "Type", value: "Orbital + extraction" },
          { label: "Benefit", value: "Cleaner, faster prep" },
          { label: "Application", value: "Surface preparation" },
        ],
      },
      {
        id: "rf-abrasives-3m",
        name: "Abrasives & Surface Prep System",
        code: "HAP-RF-105",
        brand: "3m",
        summary: "Abrasives, masking and prep consumables.",
        specs: [
          { label: "Range", value: "Abrasives & masking" },
          { label: "Application", value: "Prep to finish" },
          { label: "Standard", value: "Bodyshop grade" },
        ],
      },
    ],
  },
  {
    slug: "workshop-infrastructure",
    name: "Workshop Infrastructure",
    index: "02",
    tagline: "Lifting, alignment and service equipment.",
    description:
      "Comprehensive workshop equipment, lifting systems and service technologies designed to maximise productivity and efficiency — from the wheel bay to the full service floor.",
    products: [
      {
        id: "ws-aligner-hunter",
        name: "3D Wheel Alignment System",
        code: "HAP-WS-101",
        brand: "hunter",
        summary: "Imaging aligner for cars and light commercial.",
        featured: true,
        detail:
          "Camera-based alignment with stored OEM specifications and a printed before/after report — the difference between guessing at angles and proving them. Installed and calibrated by our team, with operator training.",
        specs: [
          { label: "Type", value: "3D imaging" },
          { label: "Application", value: "Cars & light commercial" },
          { label: "Output", value: "Printed report" },
          { label: "Support", value: "Install, calibration, training" },
        ],
      },
      {
        id: "ws-balancer-hunter",
        name: "Diagnostic Wheel Balancer",
        code: "HAP-WS-102",
        brand: "hunter",
        summary: "Balancer with runout and force diagnostics.",
        specs: [
          { label: "Type", value: "Diagnostic balancer" },
          { label: "Application", value: "Passenger & performance" },
          { label: "Function", value: "Balance & vibration check" },
        ],
      },
      {
        id: "ws-changer-hunter",
        name: "Tyre Changer",
        code: "HAP-WS-103",
        brand: "hunter",
        summary: "Changer for alloys and low-profile tyres.",
        specs: [
          { label: "Type", value: "Leverless / swing-arm" },
          { label: "Application", value: "Alloy & run-flat" },
          { label: "Care", value: "Rim-safe handling" },
        ],
      },
      {
        id: "ws-twopost-vsg",
        name: "Two-Post Vehicle Lift",
        code: "HAP-WS-104",
        brand: "vsg-group",
        summary: "Clearfloor two-post hoist for service work.",
        specs: [
          { label: "Type", value: "Two-post clearfloor" },
          { label: "Capacity", value: "From 4,000 kg" },
          { label: "Locks", value: "Automatic dual" },
        ],
      },
      {
        id: "ws-scissor-dura",
        name: "Scissor Lift",
        code: "HAP-WS-105",
        brand: "dura",
        summary: "Low-profile scissor for quick service.",
        specs: [
          { label: "Type", value: "Mid / full-rise scissor" },
          { label: "Application", value: "Service & tyre bays" },
          { label: "Install", value: "Surface or recessed" },
        ],
      },
      {
        id: "ws-fourpost-vsg",
        name: "Four-Post Alignment Lift",
        code: "HAP-WS-106",
        brand: "vsg-group",
        summary: "Drive-on four-post for alignment work.",
        specs: [
          { label: "Type", value: "Four-post drive-on" },
          { label: "Use", value: "Alignment & service" },
          { label: "Option", value: "Rolling jack beam" },
        ],
      },
    ],
  },
  {
    slug: "compressed-air",
    name: "Compressed Air",
    index: "03",
    tagline: "Compressors and air management.",
    description:
      "Reliable compressor systems and air management technologies engineered to support demanding industrial and automotive applications — sized, installed and maintained for the workload.",
    products: [
      {
        id: "air-screw-elgi",
        name: "Rotary Screw Compressor",
        code: "HAP-AIR-101",
        brand: "ats-elgi",
        summary: "Continuous-duty screw compressor.",
        featured: true,
        detail:
          "A screw compressor runs cool and steady where a piston would overheat under continuous demand. Sized to the plant's actual air consumption and supported with service and spares.",
        specs: [
          { label: "Type", value: "Rotary screw" },
          { label: "Power", value: "From 5.5 kW" },
          { label: "Pressure", value: "7–13 bar" },
          { label: "Duty", value: "Continuous" },
        ],
      },
      {
        id: "air-piston-kirloskar",
        name: "Reciprocating Piston Compressor",
        code: "HAP-AIR-102",
        brand: "kirloskar",
        summary: "Piston compressor for intermittent demand.",
        specs: [
          { label: "Type", value: "Reciprocating piston" },
          { label: "Application", value: "Workshop / intermittent" },
          { label: "Receiver", value: "Tank-mounted" },
        ],
      },
      {
        id: "air-dryer-elgi",
        name: "Refrigerated Air Dryer",
        code: "HAP-AIR-103",
        brand: "ats-elgi",
        summary: "Removes moisture for clean, dry air.",
        specs: [
          { label: "Type", value: "Refrigerated dryer" },
          { label: "Benefit", value: "Dry air to tools" },
          { label: "Add-on", value: "Filtration train" },
        ],
      },
      {
        id: "air-receiver-elgi",
        name: "Air Receiver & Distribution",
        code: "HAP-AIR-104",
        brand: "ats-elgi",
        summary: "Receivers and ring-main pipework.",
        specs: [
          { label: "Range", value: "Receivers & pipework" },
          { label: "Function", value: "Storage & distribution" },
          { label: "Install", value: "Designed to layout" },
        ],
      },
    ],
  },
  {
    slug: "professional-tools",
    name: "Professional Tools",
    index: "04",
    tagline: "Power tools, hand tools and workshop technology.",
    description:
      "High-performance power tools, hand tools and workshop technologies trusted by professionals worldwide — for automotive, maintenance and industrial use.",
    products: [
      {
        id: "pt-impact-milwaukee",
        name: "Cordless Impact Wrench",
        code: "HAP-PT-101",
        brand: "milwaukee",
        summary: "High-torque cordless impact for the bay.",
        featured: true,
        detail:
          "Brushless cordless tooling that delivers the torque of an air gun without the airline — built for the daily abuse of a working workshop, with a battery platform that spans the whole tool range.",
        specs: [
          { label: "Type", value: "Brushless cordless" },
          { label: "Application", value: "Wheel & chassis fastening" },
          { label: "Platform", value: "Shared battery system" },
        ],
      },
      {
        id: "pt-range-milwaukee",
        name: "Cordless Tool Range",
        code: "HAP-PT-102",
        brand: "milwaukee",
        summary: "Drills, drivers, grinders and lighting.",
        specs: [
          { label: "Range", value: "Drill · grinder · light" },
          { label: "Platform", value: "One battery system" },
          { label: "Use", value: "Workshop & site" },
        ],
      },
      {
        id: "pt-system-bosch",
        name: "Professional Power Tool System",
        code: "HAP-PT-103",
        brand: "bosch",
        summary: "Corded and cordless professional tools.",
        specs: [
          { label: "Range", value: "Corded & cordless" },
          { label: "Application", value: "Trade & industrial" },
          { label: "Grade", value: "Professional" },
        ],
      },
      {
        id: "pt-measure-bosch",
        name: "Measuring & Diagnostic Tools",
        code: "HAP-PT-104",
        brand: "bosch",
        summary: "Measuring, levelling and diagnostics.",
        specs: [
          { label: "Range", value: "Laser & measuring" },
          { label: "Application", value: "Layout & inspection" },
          { label: "Use", value: "Workshop & facility" },
        ],
      },
    ],
  },
  {
    slug: "material-handling",
    name: "Material Handling",
    index: "05",
    tagline: "Lifting, moving and handling equipment.",
    description:
      "Safe and efficient lifting, transportation and handling technologies that improve workplace productivity and operational performance across workshops, stores and industrial floors.",
    products: [
      {
        id: "mh-pallet-lifmex",
        name: "Hydraulic Pallet Truck",
        code: "HAP-MH-101",
        brand: "lifmex",
        summary: "Manual pallet truck for everyday handling.",
        featured: true,
        detail:
          "The workhorse of any store or workshop floor — moves loaded pallets safely with minimal effort. Supplied with the capacity and fork dimensions matched to your handling needs.",
        specs: [
          { label: "Type", value: "Hand pallet truck" },
          { label: "Capacity", value: "2,000–3,000 kg typical" },
          { label: "Use", value: "Store & workshop" },
        ],
      },
      {
        id: "mh-stacker-lifmex",
        name: "Electric Stacker",
        code: "HAP-MH-102",
        brand: "lifmex",
        summary: "Powered stacker for racking and lifting.",
        specs: [
          { label: "Type", value: "Electric stacker" },
          { label: "Application", value: "Racking & stacking" },
          { label: "Control", value: "Walk-behind" },
        ],
      },
      {
        id: "mh-crane-lifmex",
        name: "Workshop Crane / Engine Hoist",
        code: "HAP-MH-103",
        brand: "lifmex",
        summary: "Folding hydraulic crane for the bay.",
        specs: [
          { label: "Type", value: "Folding hydraulic crane" },
          { label: "Application", value: "Engine & component lifting" },
          { label: "Storage", value: "Foldable frame" },
        ],
      },
      {
        id: "mh-table-lifmex",
        name: "Scissor Lift Table",
        code: "HAP-MH-104",
        brand: "lifmex",
        summary: "Mobile lift table for ergonomic work.",
        specs: [
          { label: "Type", value: "Scissor lift table" },
          { label: "Benefit", value: "Ergonomic working height" },
          { label: "Mobility", value: "Castored" },
        ],
      },
    ],
  },
  {
    slug: "cleaning-maintenance",
    name: "Cleaning & Maintenance",
    index: "06",
    tagline: "Professional cleaning and facility care.",
    description:
      "Professional cleaning technologies and maintenance equipment that help organisations maintain high operational and safety standards — across workshops, facilities and industrial sites.",
    products: [
      {
        id: "cl-washer-karcher",
        name: "High-Pressure Washer",
        code: "HAP-CL-101",
        brand: "karcher",
        summary: "Cold/hot pressure washer for heavy soil.",
        featured: true,
        detail:
          "Professional-grade pressure cleaning that handles workshop grease, fleet washdown and site cleaning — built for continuous commercial use, not occasional domestic jobs.",
        specs: [
          { label: "Type", value: "Cold / hot pressure washer" },
          { label: "Application", value: "Workshop & fleet" },
          { label: "Grade", value: "Professional" },
        ],
      },
      {
        id: "cl-vacuum-karcher",
        name: "Industrial Wet & Dry Vacuum",
        code: "HAP-CL-102",
        brand: "karcher",
        summary: "Wet/dry vacuum for shop floor cleanup.",
        specs: [
          { label: "Type", value: "Wet & dry vacuum" },
          { label: "Application", value: "Workshop & industrial" },
          { label: "Filtration", value: "Multi-stage" },
        ],
      },
      {
        id: "cl-scrubber-karcher",
        name: "Floor Scrubber-Drier",
        code: "HAP-CL-103",
        brand: "karcher",
        summary: "Scrubber-drier for large hard floors.",
        specs: [
          { label: "Type", value: "Walk-behind scrubber-drier" },
          { label: "Application", value: "Showrooms & facilities" },
          { label: "Result", value: "Clean, dry floor in one pass" },
        ],
      },
      {
        id: "cl-steam-karcher",
        name: "Steam Cleaning System",
        code: "HAP-CL-104",
        brand: "karcher",
        summary: "Steam cleaning for detailing and hygiene.",
        specs: [
          { label: "Type", value: "Steam cleaner" },
          { label: "Application", value: "Detailing & sanitation" },
          { label: "Benefit", value: "Low water, no chemicals" },
        ],
      },
    ],
  },
  {
    slug: "industrial-equipment",
    name: "Industrial Equipment",
    index: "07",
    tagline: "Manufacturing, maintenance and engineering.",
    description:
      "Engineered products and technologies designed to support manufacturing, maintenance, engineering and industrial operations — extending HAPUS solutions beyond the automotive floor.",
    products: [
      {
        id: "in-tools-bosch",
        name: "Industrial Power Tools",
        code: "HAP-IN-101",
        brand: "bosch",
        summary: "Heavy-duty tools for production & maintenance.",
        featured: true,
        detail:
          "Durable power tooling specified for production lines and maintenance teams where uptime matters — backed by HAPUS technical support and the brands professionals already trust.",
        specs: [
          { label: "Range", value: "Cutting · drilling · grinding" },
          { label: "Application", value: "Production & maintenance" },
          { label: "Grade", value: "Industrial" },
        ],
      },
      {
        id: "in-air-elgi",
        name: "Plant Air System",
        code: "HAP-IN-102",
        brand: "ats-elgi",
        summary: "Compressed air for production facilities.",
        specs: [
          { label: "Scope", value: "Compressor to point-of-use" },
          { label: "Application", value: "Manufacturing plant" },
          { label: "Support", value: "Design & maintenance" },
        ],
      },
      {
        id: "in-lifting-lifmex",
        name: "Industrial Lifting Equipment",
        code: "HAP-IN-103",
        brand: "lifmex",
        summary: "Handling and lifting for the plant floor.",
        specs: [
          { label: "Range", value: "Stackers & lifters" },
          { label: "Application", value: "Plant & warehouse" },
          { label: "Safety", value: "Rated & maintained" },
        ],
      },
      {
        id: "in-infra-dura",
        name: "Workshop Benches & Storage",
        code: "HAP-IN-104",
        brand: "dura",
        summary: "Benches, cabinets and storage systems.",
        specs: [
          { label: "Range", value: "Benches & cabinets" },
          { label: "Application", value: "Workshop & plant" },
          { label: "Build", value: "Heavy-duty" },
        ],
      },
    ],
  },
];

export const categoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);

/** Flat list of products with their category, for cross-page lookups. */
export const allProducts = categories.flatMap((c) =>
  c.products.map((p) => ({ ...p, category: c.slug, categoryName: c.name }))
);
