import type { Job } from "@/lib/types";

// Open positions. Apply routes to the Careers form (or careers email).
export const jobs: Job[] = [
  {
    id: "sales-engineer-auh",
    title: "Sales Engineer",
    location: "Abu Dhabi",
    type: "Full-time",
    department: "Sales",
    summary:
      "Own a territory across the automotive and industrial sectors — specify solutions for workshops, dealerships, fleets and industrial customers.",
    responsibilities: [
      "Survey customer operations and recommend the right equipment and brands",
      "Prepare quotations and manage orders through to handover",
      "Build long-term accounts across multiple industries",
      "Bring an automotive aftermarket or capital-equipment sales background",
    ],
  },
  {
    id: "technical-support-engineer-auh",
    title: "Technical Support Engineer",
    location: "Abu Dhabi",
    type: "Full-time",
    department: "Service",
    summary:
      "Install, commission and support workshop and industrial equipment across customer sites in the UAE.",
    responsibilities: [
      "Commission compressors, lifts, alignment and refinishing equipment",
      "Diagnose and resolve mechanical, electrical and pneumatic faults",
      "Deliver operator onboarding and keep service records",
      "Hold a UAE driving licence and a relevant technical background",
    ],
  },
  {
    id: "product-specialist-refinishing-dxb",
    title: "Product Specialist — Refinishing",
    location: "Dubai",
    type: "Full-time",
    department: "Product",
    summary:
      "Be the expert on our refinishing and surface-solution brands, supporting customers from specification to application.",
    responsibilities: [
      "Advise bodyshops and paint centres on products and process",
      "Run product demonstrations and application support",
      "Work closely with sales to grow the refinishing portfolio",
      "Bring hands-on refinishing or bodyshop experience",
    ],
  },
  {
    id: "parts-logistics-coordinator-auh",
    title: "Spare Parts & Logistics Coordinator",
    location: "Abu Dhabi",
    type: "Full-time",
    department: "Operations",
    summary:
      "Keep parts and equipment moving — stock control, despatch and supplier coordination for the brands we carry.",
    responsibilities: [
      "Manage inbound and outbound stock movements",
      "Maintain minimum stock for fast-moving lines",
      "Coordinate freight with overseas principals",
      "Work confidently with inventory systems and spreadsheets",
    ],
  },
];
