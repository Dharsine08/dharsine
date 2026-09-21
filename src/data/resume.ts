/**
 * Single source of truth for all resume/portfolio content.
 *
 * All fields below come directly from the brief supplied for this build.
 * Nothing has been invented — where the brief didn't specify something
 * (an institution for the B.A. or CA Foundation, graduation dates,
 * academic scores, a resume PDF, social profile URLs), it is
 * intentionally left out or clearly marked rather than guessed.
 */

export const personal = {
  name: "Jerin J.",
  firstName: "Jerin",
  title: "MBA Candidate | Defence & Strategic Studies Graduate",
  tagline: "Driven by discipline. Focused on growth. Inspired by strategic thinking.",
  focus: ["Business Management", "Strategic Studies", "Leadership", "Professional Development"],
  email: "jerin72001@gmail.com",
  phone: "6380617138",
  dob: "09 July 2001",
  nationality: "Indian",
  portfolioYear: "2026",
};

export const aboutMe =
  "Motivated and adaptable MBA student with a background in Defence and Strategic Studies and CA Foundation-level learning. Seeking an opportunity to apply management knowledge, analytical thinking, punctuality, and a positive learning attitude in a professional organization.";

export const careerObjective =
  "Seeking an opportunity to apply management knowledge, analytical thinking, punctuality, and a positive learning attitude in a professional organization.";

export const careerProfile = [
  "MBA Candidate",
  "Defence & Strategic Studies Graduate",
  "CA Foundation — Foundation Level Completed",
];

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
}

export const education: EducationItem[] = [
  {
    degree: "MBA",
    institution: "Gnanam School of Business",
    status: "Currently Pursuing",
  },
  {
    degree: "B.A. Defence & Strategic Studies",
    institution: "Institution not specified",
    status: "Completed",
  },
  {
    degree: "CA Foundation",
    institution: "Institution not specified",
    status: "Foundation Level Completed",
  },
];

export const strengths = [
  {
    title: "Punctual & Disciplined",
    description: "A punctual and disciplined approach to responsibilities.",
  },
  {
    title: "Adaptable",
    description: "Adaptable and willing to learn new skills and processes.",
  },
  {
    title: "Team Player",
    description: "Positive attitude and ability to work well in a team.",
  },
  {
    title: "Strategic Interest",
    description: "Strong interest in management, business, and strategic studies.",
  },
];

export const languages = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
];
