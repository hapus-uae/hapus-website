import type { TrainingProgram } from "@/lib/types";

// Training & Technical Development — authored from the client's programme
// document. HAPUS delivers practical, hands-on training to help workshop
// personnel, technicians, supervisors and maintenance teams improve
// operational efficiency, workplace safety, equipment reliability and
// technical competency — on the customer's site or at a HAPUS facility.
export const trainingPrograms: TrainingProgram[] = [
  {
    code: "TR-01",
    title: "Vehicle Lift Safety & Operation",
    coverage: [
      "Two post lift safety",
      "Four post lift safety",
      "Scissor lift safety",
      "Vehicle positioning",
      "Safe lifting procedures",
      "Daily operator inspection",
      "Common fault recognition",
      "Preventive maintenance awareness",
      "Workshop safety compliance",
    ],
    audience: ["Workshop technicians", "Service advisors", "Workshop supervisors"],
    outcomes: [
      "Operate two-post, four-post and scissor lifts safely and correctly",
      "Position vehicles and follow safe lifting procedures",
      "Carry out daily operator inspections and recognise common faults",
      "Apply workshop safety compliance in everyday operation",
    ],
  },
  {
    code: "TR-02",
    title: "Air Compressor Operation & Maintenance",
    coverage: [
      "Compressor fundamentals",
      "Daily inspection procedures",
      "Air dryer maintenance",
      "Filter maintenance",
      "Compressor safety",
      "Air leakage management",
      "Energy efficiency best practices",
      "Early fault detection",
      "Preventive maintenance awareness",
    ],
    audience: ["Maintenance teams", "Facility technicians", "Workshop managers"],
    outcomes: [
      "Understand compressor fundamentals and daily inspection routines",
      "Maintain air dryers and filters to keep air quality reliable",
      "Identify air leakage and apply energy-efficiency best practices",
      "Detect early faults and follow preventive maintenance",
    ],
  },
  {
    code: "TR-03",
    title: "Wheel Alignment & Tyre Equipment",
    coverage: [
      "Wheel alignment principles",
      "Equipment calibration awareness",
      "Wheel clamp handling",
      "Alignment accuracy",
      "Tyre changer operation",
      "Daily equipment checks",
      "Common operating errors",
    ],
    audience: ["Alignment technicians", "Tyre service personnel", "Workshop supervisors"],
    outcomes: [
      "Apply wheel alignment principles and maintain alignment accuracy",
      "Operate tyre changers and handle wheel clamps safely",
      "Perform daily equipment checks with calibration awareness",
      "Recognise and avoid common operating errors",
    ],
  },
  {
    code: "TR-04",
    title: "Workshop Equipment Preventive Maintenance",
    coverage: [
      "Equipment inspection techniques",
      "Lubrication best practices",
      "Safety device verification",
      "Electrical visual inspection",
      "Mechanical wear identification",
      "Maintenance documentation",
      "Equipment life extension strategies",
    ],
    audience: ["Workshop managers", "Maintenance teams", "Service technicians"],
    outcomes: [
      "Perform equipment inspection and lubrication best practices",
      "Verify safety devices and carry out electrical visual checks",
      "Identify mechanical wear and document maintenance",
      "Apply strategies that extend equipment life",
    ],
  },
  {
    code: "TR-05",
    title: "Industrial Cleaning Equipment",
    coverage: [
      "Industrial vacuum operation",
      "High pressure cleaning equipment",
      "Safe handling procedures",
      "Preventive maintenance",
      "Troubleshooting basics",
    ],
    audience: ["Industrial cleaning operators", "Facility maintenance teams", "Workshop technicians"],
    outcomes: [
      "Operate industrial vacuums and high-pressure cleaning equipment safely",
      "Apply safe handling procedures and preventive maintenance",
      "Carry out basic troubleshooting on cleaning equipment",
    ],
  },
  {
    code: "TR-06",
    title: "EV Workshop Safety Awareness",
    coverage: [
      "EV workshop safety",
      "High voltage awareness",
      "Insulated tools",
      "EV battery handling equipment",
      "Safe working practices",
      "Workshop risk assessment",
    ],
    audience: ["EV technicians", "Workshop supervisors", "Service managers", "Safety officers"],
    outcomes: [
      "Apply EV workshop safety and high-voltage awareness",
      "Use insulated tools and EV battery handling equipment correctly",
      "Follow safe working practices and conduct workshop risk assessment",
    ],
  },
];

// Premium Services — Technical Consultancy. Advisory engagements that sit
// alongside the training catalogue.
export const consultancyServices: string[] = [
  "Equipment condition assessment",
  "Workshop productivity evaluation",
  "Maintenance planning",
  "Preventive maintenance program development",
  "Equipment lifecycle evaluation",
  "Workshop expansion consultation",
];

// Certificate of Participation — issued for selected programs on completion.
export const trainingCertificates: string[] = [
  "Training Attendance Certificate",
  "Equipment Awareness Certificate",
  "Workshop Safety Awareness Certificate",
];
