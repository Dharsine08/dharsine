/**
 * Single source of truth for all resume/portfolio content.
 *
 * PLACEHOLDER NOTICE:
 * A resume PDF was referenced when this site was requested, but only two
 * images (a design reference and a profile photo) were actually available
 * while building this project — no resume PDF text was accessible, and no
 * email, phone, or LinkedIn URL was supplied anywhere in the brief. Per
 * the "never fabricate contact details" instruction, `personal.email`,
 * `personal.phone`, and `personal.linkedin` below are explicit,
 * clearly-labelled placeholders — replace them with your real details
 * before publishing. The `whyWorkWithMe` paragraph was drafted from the
 * bullet points supplied in the brief; everything else (education,
 * certification, skills, strengths, project details) is taken directly
 * from what was supplied.
 */

export const personal = {
  name: "Franklin S.",
  firstName: "Franklin",
  title: "MBA Student | B.Com Graduate | Digital Marketing",
  // TODO(resume): replace with your real email — not supplied in the brief.
  email: "your.email@example.com",
  emailIsPlaceholder: true,
  // TODO(resume): replace with your real phone number — not supplied in the brief.
  phone: "+91 XXXXX XXXXX",
  phoneIsPlaceholder: true,
  // TODO(resume): add your real LinkedIn profile URL, if you have one.
  linkedin: "",
  intro:
    "I'm a motivated MBA student and B.Com graduate with a completed Digital Marketing course. I'm interested in marketing, business development, consumer behaviour, and digital business, with a strong willingness to learn and contribute in a professional environment.",
};

// TODO(resume): polish further once you can compare against your resume's exact wording.
export const whyWorkWithMe =
  "I'm a motivated MBA student building on a completed B.Com degree and a Digital Marketing course, with a genuine interest in how businesses understand and serve their customers. My academic work has given me practical exposure to consumer behaviour, market research, and digital platforms, and I bring that curiosity — along with clear communication, teamwork, and a strong willingness to learn — to every new challenge. I haven't held a professional role yet, but I'm eager to apply what I've learned and keep growing in a business or marketing environment.";

export const highlightCards = [
  {
    title: "Digital Marketing",
    description:
      "Knowledge of digital marketing concepts, online marketing strategies, and digital platforms.",
  },
  {
    title: "Consumer Behaviour",
    description:
      "Academic exposure to consumer preferences, satisfaction, and customer expectations.",
  },
  {
    title: "Business Management",
    description:
      "Interest in management concepts, business development, and professional growth.",
  },
  {
    title: "Communication & Teamwork",
    description:
      "Strong communication skills and a collaborative, team-oriented approach to work.",
  },
];

export const education = [
  {
    degree: "MBA",
    institution: "Gnanam School of Business",
    status: "Currently Pursuing",
  },
  {
    degree: "B.Com",
    institution: "St. Joseph's College",
    status: "Completed",
  },
];

export const certification = {
  title: "Digital Marketing Course",
  status: "Completed",
  description:
    "Knowledge of digital marketing concepts, online marketing strategies, and digital platforms.",
};

export const careerFocus = ["Marketing", "Business Management", "Digital Marketing"];

export const personalStrengthsShort = [
  "Quick learner and adaptable",
  "Positive and professional attitude",
  "Good communication and teamwork",
  "Responsible and self-motivated",
  "Willingness to learn new skills",
];

export const whatIBring = [
  {
    title: "Quick Learner",
    description: "Picks up new concepts and tools quickly and applies them with confidence.",
  },
  {
    title: "Adaptability",
    description: "Comfortable adjusting to new environments, tasks, and expectations.",
  },
  {
    title: "Positive Attitude",
    description: "Approaches challenges with optimism and a professional mindset.",
  },
  {
    title: "Communication",
    description: "Communicates clearly and effectively across different situations.",
  },
  {
    title: "Teamwork",
    description: "Collaborates well with others toward shared goals.",
  },
  {
    title: "Responsibility",
    description: "Reliable and accountable in completing tasks.",
  },
  {
    title: "Self-Motivation",
    description: "Driven to improve and perform without needing constant supervision.",
  },
  {
    title: "Willingness to Learn",
    description: "Genuinely enjoys learning new skills and expanding my knowledge.",
  },
];

export const skillCategories = [
  {
    category: "Marketing",
    skills: ["Digital Marketing", "Marketing Fundamentals", "Consumer Behaviour", "Market Research"],
  },
  {
    category: "Business",
    skills: ["Business Communication", "Customer Relationship Management", "Presentation Skills"],
  },
  {
    category: "Personal Effectiveness",
    skills: ["Teamwork", "Problem Solving", "Time Management"],
  },
];

export const featuredProject = {
  title: "Consumer Satisfaction on Online Food Ordering Applications",
  category: "Academic Project | Consumer Behaviour | Market Research",
  overview:
    "An academic project studying consumer preferences and experiences related to online food ordering applications.",
  researchFocus:
    "Examined the factors influencing customer satisfaction and expectations when using online food ordering platforms.",
  keyAreasStudied: [
    "Consumer preferences in online food ordering",
    "Factors influencing customer satisfaction",
    "Customer expectations from digital food platforms",
    "Collection and analysis of consumer opinions and service experiences",
  ],
  learningOutcomes:
    "Developed a practical understanding of consumer behaviour, digital services, and online business platforms.",
  hasViewableDocument: false,
};

export type PortfolioCategory = "All" | "Academic" | "Marketing" | "Business";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: Exclude<PortfolioCategory, "All">;
  isPlaceholder: boolean;
}

// Editable gallery — update this array with real work as it's ready.
export const portfolioItems: PortfolioItem[] = [
  {
    id: "academic-presentations",
    title: "Academic Presentations",
    description:
      "Placeholder for college seminars or presentations. Replace with your own project title, summary, and files.",
    category: "Academic",
    isPlaceholder: true,
  },
  {
    id: "digital-marketing-projects",
    title: "Digital Marketing Projects",
    description:
      "Placeholder for a digital marketing campaign, plan, or coursework project you complete.",
    category: "Marketing",
    isPlaceholder: true,
  },
  {
    id: "business-case-studies",
    title: "Business Case Studies",
    description:
      "Placeholder for a business case study or management analysis project.",
    category: "Business",
    isPlaceholder: true,
  },
  {
    id: "marketing-research",
    title: "Marketing Research",
    description:
      "Placeholder for a market research study, survey, or consumer analysis project.",
    category: "Marketing",
    isPlaceholder: true,
  },
];
