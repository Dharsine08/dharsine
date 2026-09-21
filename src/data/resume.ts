/**
 * Single source of truth for all resume/portfolio content.
 *
 * All fields below are taken directly from Balaji's actual resume PDF.
 * Nothing has been invented: no institution name, graduation year,
 * academic scores, work experience, or contact details (email, phone,
 * LinkedIn, location) were included in the resume, so those are left
 * as explicit, clearly-labelled placeholders rather than guessed. Date
 * of birth is intentionally omitted from this public-facing site, per
 * the brief's own recommendation.
 */

export const personal = {
  name: "Balaji",
  title: "Computer Science Graduate | Aspiring IT Professional",
  qualification: "B.Sc. Computer Science",
  focus: ["Computer Applications", "IT Support", "Business Software", "Digital Skills"],
  intro:
    "Motivated and responsible B.Sc. Computer Science graduate with an interest in computer applications, office tools, and teamwork. Familiar with MS Office, MS Excel, and Tally Prime, with good communication, problem-solving, and time-management abilities. Eager to learn new skills and contribute positively in a professional environment.",
};

// TODO(contact): none of these were provided in the resume — replace
// with real details before publishing. isPlaceholder flags drive the
// "Add yours" badges and disable the mailto/tel/LinkedIn links until set.
export const contact = {
  email: "your.email@example.com",
  emailIsPlaceholder: true,
  phone: "+91 00000 00000",
  phoneIsPlaceholder: true,
  linkedin: "linkedin.com/in/your-profile",
  linkedinIsPlaceholder: true,
  location: "Your City, India",
  locationIsPlaceholder: true,
};

export const skillCategories = [
  {
    category: "Office & Productivity",
    skills: ["MS Office", "MS Excel"],
  },
  {
    category: "Business Software",
    skills: ["Tally Prime"],
  },
  {
    category: "Computer Skills",
    skills: ["Basic Computer Skills"],
  },
  {
    category: "Professional Skills",
    skills: ["Communication", "Teamwork", "Problem Solving", "Time Management"],
  },
];

export const services = [
  {
    title: "Office & Documentation Support",
    description: "Preparing and organising documents using MS Office tools.",
  },
  {
    title: "Spreadsheet & Excel Tasks",
    description: "Working with data, calculations, and records in MS Excel.",
  },
  {
    title: "Basic Computer Applications",
    description: "Comfortable navigating everyday computer applications and systems.",
  },
  {
    title: "Business Software Support",
    description: "Familiarity with Tally Prime for basic business software tasks.",
  },
];

export const education = {
  degree: "B.Sc. Computer Science",
  status: "Completed",
};

export const strengths = [
  "Quick Learner",
  "Adaptability",
  "Positive Attitude",
  "Responsibility",
  "Teamwork",
  "Self-Motivation",
  "Problem-Solving Mindset",
];
