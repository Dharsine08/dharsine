/**
 * Single source of truth for all resume/portfolio content.
 *
 * IMPORTANT — PLACEHOLDER NOTICE:
 * A resume PDF was referenced when this site was requested, but only two
 * images (a design reference and a profile photo) were actually available
 * while building this project — no resume PDF text was accessible.
 * The `careerObjective` and `professionalSummary` strings below were
 * drafted from the brief supplied for this build (B.Com graduate, aspiring
 * MBA professional, planning/organising, communication/teamwork, etc).
 * Please replace them with the exact wording from your real resume before
 * publishing this site. Every other field (skills, strengths, contact
 * details, achievements) is taken verbatim from what was supplied.
 */

export const personal = {
  name: "Pius Ronaldo A.",
  firstName: "Pius Ronaldo",
  title: "B.Com Graduate | Aspiring MBA Professional",
  email: "a.piusronaldo@gmail.com",
  phone: "+91 9159454711",
  location: "India",
  intro:
    "I'm a B.Com graduate with a strong interest in business management and a clear goal of pursuing an MBA. I bring dependable planning and organising skills, a collaborative approach to teamwork, and a genuine willingness to learn — and I'm looking forward to building a career in business management.",
};

// TODO(resume): replace with the exact career objective from your resume PDF.
export const careerObjective =
  "To build a strong foundation in business management by applying my academic knowledge and personal strengths in a professional environment, while pursuing an MBA to further develop my planning, leadership, and decision-making abilities.";

// TODO(resume): replace with the exact professional summary from your resume PDF.
export const professionalSummary =
  "Motivated and detail-oriented B.Com graduate with a keen interest in business management, planning, and organisation. Known for clear communication, dependable teamwork, and a positive, adaptable attitude toward new challenges. Currently preparing to pursue an MBA to deepen my understanding of business strategy and management, with the goal of growing into a capable and responsible business management professional.";

export const education = [
  {
    degree: "Bachelor of Commerce (B.Com)",
    status: "Graduate",
    note: "Specific institution and year to be added.",
  },
];

export const languages = ["English", "Tamil"];

export const aboutHighlights = [
  { label: "B.Com Graduate" },
  { label: "Business Management Enthusiast" },
  { label: "Quick Learner" },
  { label: "Team Player" },
];

export const whatIBring = [
  {
    title: "Planning & Organisation",
    description:
      "Structured and methodical in approach, with a natural ability to plan tasks and keep things organised.",
  },
  {
    title: "Communication & Teamwork",
    description:
      "Comfortable working within a team, communicating clearly, and contributing to shared goals.",
  },
  {
    title: "Learning & Adaptability",
    description:
      "Genuinely enjoys learning new things and adapts quickly to new environments and challenges.",
  },
];

export const managementSkills = [
  "Planning",
  "Organising",
  "Leadership",
  "Teamwork",
  "Time Management",
  "Problem Solving",
  "Adaptability",
  "Communication",
];

export const digitalSkills = [
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft PowerPoint",
];

export const strengths = [
  "Quick Learner",
  "Self-Motivated",
  "Responsible",
  "Positive Attitude",
  "Critical Thinking",
  "Decision Making",
  "Team Collaboration",
];

export type PortfolioCategory =
  | "ALL"
  | "ACADEMIC"
  | "BUSINESS"
  | "PERSONAL DEVELOPMENT";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: Exclude<PortfolioCategory, "ALL">;
  isPlaceholder: boolean;
}

// Editable gallery — update this array with your real work whenever it's ready.
export const portfolioItems: PortfolioItem[] = [
  {
    id: "academic-presentation",
    title: "Academic Presentation",
    description:
      "Placeholder for a college presentation or seminar. Replace with your own project title, summary, and images.",
    category: "ACADEMIC",
    isPlaceholder: true,
  },
  {
    id: "business-case-study",
    title: "Business Case Study",
    description:
      "Placeholder for a business case study or analysis project. Replace with details of your actual work once available.",
    category: "BUSINESS",
    isPlaceholder: true,
  },
  {
    id: "management-learning-project",
    title: "Management Learning Project",
    description:
      "Placeholder for a management concept project or coursework. Add your own content, files, or write-up here.",
    category: "BUSINESS",
    isPlaceholder: true,
  },
  {
    id: "personal-development",
    title: "Personal Development",
    description:
      "Placeholder highlighting a personal growth initiative — a course, workshop, or self-led learning effort.",
    category: "PERSONAL DEVELOPMENT",
    isPlaceholder: true,
  },
];

export const achievements = [
  "Successfully completed Bachelor of Commerce.",
  "Participated in academic presentations and business-related activities.",
  "Actively involved in learning business and management concepts.",
];

export const interests = [
  "Business Management",
  "Marketing",
  "Learning New Skills",
  "Watching Movies & Series",
  "Listening to Music",
];
