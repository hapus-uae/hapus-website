import type { ServiceOffering } from "@/lib/types";

// HAPUS support model — more than supply. `icon` resolves to a Phosphor icon in
// the Service page.
export const serviceOfferings: ServiceOffering[] = [
  {
    title: "Technical consultation & specification",
    description:
      "We start by understanding your operation, then specify the right equipment and layout for it solutions that fit the job rather than a catalogue line.",
    icon: "Headset",
  },
  {
    title: "Installation & commissioning",
    description:
      "Delivery, installation and commissioning of workshop and industrial equipment, set up to the manufacturer's standard and handed over ready to work.",
    icon: "Wrench",
  },
  {
    title: "Calibration & certification",
    description:
      "Calibration for alignment, inspection and measuring equipment, with the documentation your operation and audits require.",
    icon: "Gauge",
  },
  {
    title: "Genuine spare parts & consumables",
    description:
      "Parts and consumables for the brands we represent kept moving so equipment stays productive and downtime stays short.",
    icon: "Gear",
  },
  {
    title: "Maintenance & after-sales",
    description:
      "Ongoing maintenance and responsive after-sales support that protects the value of the equipment over its working life.",
    icon: "ClipboardText",
  },
  {
    title: "Operator support",
    description:
      "Product expertise and operator guidance from people who know the equipment support that extends well beyond the point of sale.",
    icon: "Truck",
  },
];

export const serviceCommitments = [
  { value: "360°", unit: "", label: "Specify · supply · install · support" },
  { value: "13", unit: "+", label: "Manufacturer partnerships" },
  { value: "UAE", unit: "", label: "Coverage across the Emirates" },
];

// Document-sourced case studies for the Service page.
export const successStories = [
  {
    title: "Workshop infrastructure enhancement",
    challenge:
      "A growing automotive service facility needed improved efficiency, more reliable equipment and scalable infrastructure to meet rising demand.",
    solution:
      "HAPUS supplied and supported workshop equipment, compressed-air systems, professional tools and operational technologies from internationally recognised manufacturers.",
    outcome:
      "Improved workflow efficiency, enhanced equipment reliability and a stronger operational foundation for future growth.",
  },
  {
    title: "Compressed air system solutions",
    challenge:
      "Industrial customers required reliable compressed air for continuous operations while minimising maintenance and downtime.",
    solution:
      "HAPUS delivered compressor technologies and supporting infrastructure tailored to the operation's requirements and long-term performance.",
    outcome:
      "Improved reliability, optimised performance and greater confidence in day-to-day production.",
  },
  {
    title: "Automotive refinishing solutions",
    challenge:
      "Body and paint facilities needed premium products capable of supporting manufacturer-level finishing standards.",
    solution:
      "Through partnerships with globally recognised brands, HAPUS supplied professional refinishing technologies and technical guidance.",
    outcome:
      "Enhanced finish quality, improved consistency and greater confidence in meeting customer satisfaction targets.",
  },
];
