/**
 * Single source of truth for all resume/portfolio content.
 *
 * All fields below come directly from the brief supplied for this build
 * (personal details, education, projects, certifications, internship,
 * skills, leadership experience, and achievements). Nothing has been
 * invented — where the brief didn't specify something (e.g. an MBA
 * institution or graduation date, project technology stacks, project
 * links, hobbies/interests, language proficiency levels, a LinkedIn or
 * other social URL), it is intentionally left out rather than guessed.
 */

export const personal = {
  name: "Dharsine S.",
  firstName: "Dharsine",
  title: "MBA Student | Business & Marketing Enthusiast",
  focus: ["Business Management", "Marketing", "Technology", "Entrepreneurship"],
  email: "skdharshu08@gmail.com",
  phone: "9944027750",
  location: "Rahman Nagar, MC Road, Thanjavur",
  intro:
    "Motivated MBA student with a B.Tech IT background, strong communication, teamwork, adaptability, and problem-solving skills. Interested in management, entrepreneurship, and strategic decision-making, with a passion for learning and creating meaningful business impact.",
  tagline:
    "I approach problems in a structured, practical way and enjoy turning what I learn into meaningful business impact.",
};

export const aboutMe =
  "Motivated MBA student with strong communication, teamwork, adaptability, and problem-solving skills. Interested in management, entrepreneurship, and strategic decision-making, with a passion for learning and creating meaningful business impact.";

export interface EducationItem {
  degree: string;
  institution: string;
  years: string;
}

export const education: EducationItem[] = [
  {
    degree: "B.Tech Information Technology",
    institution: "Sri Krishna College of Technology, Coimbatore",
    years: "2021 – 2025",
  },
  {
    degree: "Higher Secondary Certificate (HSLC)",
    institution: "Yagappa Matriculation Higher Secondary School, Thanjavur",
    years: "2019 – 2020",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Monfort Anglo Indian Higher Secondary School, Yercaud",
    years: "2017 – 2018",
  },
];

export const leadershipExperience = [
  "Department President",
  "Class Representative",
  "Sports House Captain",
  "Event Coordinator",
  "Project Lead",
];

export const leadershipTags = ["Leadership", "Decision Making", "Conflict Resolution", "Adaptability"];

export const technicalSkillGroups = [
  {
    label: "Design & Frontend",
    skills: ["HTML and CSS", "React JS", "Frontend Development", "Web Designing", "Poster Designing"],
  },
  {
    label: "Backend & Cloud",
    skills: ["Java and C++", "Backend Development", "AWS", "SQL"],
  },
];

export const professionalSkills = [
  "Observation",
  "Decision Making",
  "Communication",
  "Creativity",
  "Conflict Resolution",
  "Leadership",
  "Adaptability",
];

export const professionalSkillTags = ["Observation", "Communication", "Creativity"];

export const languages = ["Tamil", "English"];

export interface Project {
  id: string;
  title: string;
  duration: string;
  description: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "cafe-management-system",
    title: "Cafe Management System",
    duration: "2 Months",
    description:
      "Streamlined order processing, inventory management, and cafe operations.",
  },
  {
    id: "hotel-management-system",
    title: "Hotel Management System",
    duration: "1 Month",
    description:
      "Integrated room reservations, guest services, and food ordering.",
  },
  {
    id: "water-tracking-system",
    title: "Water Tracking System",
    duration: "3 Months",
    description:
      "Developed a frontend and backend system for real-time water monitoring and automated alerts.",
    featured: true,
  },
];

export const certifications = [
  {
    title: "AWS Course",
    provider: "GUVI, associated with IIT Madras",
  },
  {
    title: "Introduction to Cyber Security",
    provider: "Cisco",
  },
  {
    title: "Product Management Interview Preparation",
    provider: "GUVI, associated with IIT Madras",
  },
];

export const internship = {
  company: "NUCLE FAB",
  note: "Completed an internship at NUCLE FAB during the 5th semester.",
};

export const achievements = [
  "Participation in Smart India Hackathon.",
  "Second position in Anna University.",
  "Participation in NSS camp.",
  "Women Basketball Tournament.",
  "Best performance in Backend Development during course.",
  "Participation in College Culturals.",
  "Participated in technical and academic events, demonstrating teamwork and problem-solving skills.",
];

export const strengths = [
  "Communication",
  "Teamwork",
  "Adaptability",
  "Problem Solving",
  "Leadership",
  "Decision Making",
  "Conflict Resolution",
  "Creativity",
];
