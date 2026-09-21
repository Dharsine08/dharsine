/**
 * Single source of truth for all resume/portfolio content.
 *
 * All fields below come directly from the brief supplied for this build.
 * Nothing has been invented — no LinkedIn URL, resume PDF, project link,
 * work experience, or academic scores were supplied, so those are
 * intentionally omitted or clearly labelled rather than guessed.
 */

export const personal = {
  name: "Nithish R.",
  firstName: "Nithish",
  title: "MBA Student | Aspiring Financial Analyst",
  interests: ["Financial Analysis", "Finance & Business", "FinTech"],
  email: "nithishnithish6659@gmail.com",
  phone: "8248124036",
  linkedin: "Nithish R.",
  linkedinUrl: "",
};

// TODO(resume): polish further once you can compare against your resume's exact wording.
export const aboutMe =
  "Motivated MBA student with a Bachelor of Business Administration background and a strong interest in financial analysis, business, and financial technology. Seeking opportunities to develop practical finance skills, apply analytical thinking, and contribute effectively in a professional environment.";

export interface Skill {
  title: string;
  description: string;
}

export const skills: Skill[] = [
  {
    title: "Tally Prime",
    description: "Familiarity with accounting and financial-management software.",
  },
  {
    title: "Financial Analysis",
    description: "Interest in analysing financial information and understanding business performance.",
  },
  {
    title: "Teamwork",
    description: "Collaboration, communication, and contribution within a team.",
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
  current?: boolean;
}

export const education: EducationItem[] = [
  {
    degree: "Master of Business Administration (MBA)",
    institution: "Gnanam School of Business",
    status: "Currently Pursuing",
    current: true,
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Kurinji College of Arts and Science",
    status: "Completed",
  },
];

export const academicProject = {
  title: "FinTech Project",
  category: "Finance / Financial Technology",
  description: "Completed an academic project related to FinTech.",
  note: "Further project details can be added when available.",
  hasRealLink: false,
};

export const careerInterests = [
  {
    title: "Financial Analysis",
    description: "Finance-focused analytical learning.",
  },
  {
    title: "Finance & Business",
    description: "Business performance and decision-making.",
  },
  {
    title: "FinTech",
    description: "Technology-driven financial innovation.",
  },
];

export const strengths = [
  "Teamwork",
  "Willingness to learn",
  "Interest in finance",
  "Professional development",
];

export const professionalJourney =
  "No formal work experience yet. Currently building professional readiness through MBA studies, academic learning, teamwork, and finance-focused project work.";
