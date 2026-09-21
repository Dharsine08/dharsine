/**
 * Single source of truth for all resume/portfolio content.
 *
 * All fields below are taken directly from Pius Ronaldo A.'s actual
 * resume PDF. Nothing has been invented — the resume did not list an
 * institution name, graduation year, or academic scores, so those are
 * simply not shown rather than guessed. Date of birth and nationality
 * are present in the resume but intentionally left off this
 * public-facing site.
 */

export const personal = {
  name: "Pius Ronaldo A.",
  firstName: "Pius Ronaldo",
  title: "B.Com Graduate | Aspiring MBA Professional",
  email: "a.piusronaldo@gmail.com",
  phone: "+91 9159454711",
  location: "India",
  intro:
    "I am a motivated and enthusiastic B.Com graduate with strong planning and organising skills. I am passionate about learning new concepts, solving problems, and working collaboratively. I aspire to build a successful career in business management by contributing effectively to organisational growth while continuously improving my professional and personal skills.",
};

export const careerObjective =
  "To obtain a challenging position in a reputed organisation where I can utilise my planning, organising, and communication skills while continuously learning and contributing towards the success of the organisation.";

export const professionalSummary = [
  "Motivated and dedicated B.Com graduate.",
  "Strong planning and organising abilities.",
  "Excellent willingness to learn and adapt.",
  "Good communication and interpersonal skills.",
  "Able to work independently and as a team member.",
  "Passionate about business management and professional development.",
];

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
  "Positive Attitude",
  "Self-Motivated",
  "Responsible",
  "Hardworking",
  "Leadership Mindset",
  "Decision Making",
  "Critical Thinking",
  "Team Collaboration",
];

// From the resume's "Personal Attributes" list — shown alongside strengths.
export const personalAttributes = [
  "Honest and Dedicated",
  "Positive Mindset",
  "Professional Behaviour",
  "Strong Work Ethics",
  "Good Team Player",
  "Goal-Oriented",
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
