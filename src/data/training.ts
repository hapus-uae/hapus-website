import type { TrainingProgram } from "@/lib/types";

// Product training & onboarding. HAPUS supports customers through go-live on new
// equipment with operator training on the lines it represents — delivered on the
// customer's site or at a HAPUS facility.
export const trainingPrograms: TrainingProgram[] = [
  {
    code: "TR-01",
    title: "Refinishing application",
    audience: "Painters, prep technicians",
    format: "On-site or HAPUS facility",
    duration: "Scheduled to need",
    outcomes: [
      "Set up and use HVLP spray equipment for a consistent finish",
      "Surface preparation and defect prevention",
      "Polishing and detailing to a manufacturer-level standard",
    ],
    certification: "Manufacturer-aligned operator guidance",
  },
  {
    code: "TR-02",
    title: "Wheel service & alignment",
    audience: "Workshop technicians",
    format: "On-site at the customer bay",
    duration: "Scheduled to need",
    outcomes: [
      "Operate alignment, balancing and tyre-service equipment correctly",
      "Read and act on alignment and vibration data",
      "Daily checks that keep equipment accurate",
    ],
    certification: "Hunter operator onboarding",
  },
  {
    code: "TR-03",
    title: "Compressed air operation & care",
    audience: "Maintenance & facility teams",
    format: "On-site",
    duration: "Scheduled to need",
    outcomes: [
      "Operate compressors and air treatment safely",
      "Routine maintenance that protects uptime",
      "Recognise and escalate faults early",
    ],
    certification: "Competency record",
  },
  {
    code: "TR-04",
    title: "Power tools & safety",
    audience: "Workshop & production staff",
    format: "On-site, short session",
    duration: "Half-day",
    outcomes: [
      "Correct, safe use of professional power tools",
      "Battery-platform handling and care",
      "Maintenance to extend tool life",
    ],
    certification: "Competency record",
  },
  {
    code: "TR-05",
    title: "Cleaning equipment operation",
    audience: "Facility & detailing teams",
    format: "On-site",
    duration: "Short session",
    outcomes: [
      "Operate pressure washers, scrubbers and vacuums effectively",
      "Safe handling and consumable management",
      "Routine care that keeps equipment reliable",
    ],
    certification: "Operator onboarding",
  },
];
