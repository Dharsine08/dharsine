/**
 * Single source of truth for all resume/portfolio content.
 *
 * All fields below come directly from the detailed brief supplied for
 * this build. Nothing has been invented: no dashboard screenshot was
 * provided, so the project preview is explicitly labelled "Dashboard
 * Preview" with illustrative sample data, never presented as real
 * project results. No skill proficiency percentages are shown beyond
 * the three tools with stated levels (Excel, Power BI, Tableau).
 */

export const personal = {
  name: "Akash M.",
  firstName: "Akash",
  title: "MBA Finance & Marketing | Financial Analysis | Business Analytics & Dashboarding",
  tagline: "Transforming financial data into meaningful insights for smarter business decisions.",
  intro:
    "MBA Finance & Marketing candidate with an interest in financial analysis, business analytics, and data-driven decision-making.",
  labels: ["Finance", "Business Analytics", "Data Visualization"],
  location: "Thanjavur, Tamil Nadu, India",
  email: "akash190728@gmail.com",
  phone: "+91 7603873542",
  linkedinUrl: "https://www.linkedin.com/in/akash-m-994990344",
  linkedinLabel: "linkedin.com/in/akash-m-994990344",
};

export const aboutMe =
  "MBA Finance & Marketing candidate with a strong foundation in Financial Analysis, Business Analytics, and Data Visualization. Skilled in Excel, Power BI, and financial reporting, with hands-on experience in dashboard development, profitability analysis, and KPI-driven performance tracking. Strong analytical and problem-solving abilities, with an interest in transforming complex data into actionable insights that support strategic decision-making, operational efficiency, and business growth.";

export const featuredProject = {
  number: "01",
  title: "Financial & Sales Analytics Dashboard",
  category: "Financial Analysis / Business Analytics",
  tools: "Microsoft Excel & Power BI",
  type: "Individual Academic Project",
  highlights: [
    "Built an interactive dashboard to monitor revenue, cost, profit, and sales performance.",
    "Performed city-wise profitability analysis across multiple regions.",
    "Created KPI cards, trend analysis charts, and management reporting dashboards.",
    "Generated business insights to support data-driven decision-making.",
    "Improved reporting efficiency through automation and dashboard visualization.",
  ],
  hasRealLink: false,
};

export const skillCategories = [
  {
    category: "Financial Analysis & Reporting",
    skills: [
      "Financial Statement Analysis",
      "Ratio Analysis",
      "Variance Analysis",
      "Basic Financial Modelling",
      "Budgeting & Forecasting Fundamentals",
      "FP&A Support",
    ],
  },
  {
    category: "Business & Data Analytics",
    skills: [
      "Dashboard Development",
      "KPI Tracking & Management Reporting",
      "Revenue & Profitability Analysis",
      "Sales Analytics",
      "Trend Analysis",
    ],
  },
  {
    category: "Domain Knowledge",
    skills: [
      "ESG & Sustainability Reporting",
      "Investment Banking Fundamentals",
      "Corporate Finance Concepts",
      "Business Communication",
    ],
  },
];

export interface Tool {
  name: string;
  level: string;
  // Segments filled out of 3 — a qualitative visual cue tied to the
  // stated level (Intermediate/Basics/Familiar), not a measured percentage.
  segments: number;
}

export const tools: Tool[] = [
  { name: "MS Excel", level: "Intermediate", segments: 2 },
  { name: "Power BI", level: "Intermediate", segments: 2 },
  { name: "Tableau", level: "Basics", segments: 1 },
  { name: "SPSS", level: "Familiar", segments: 1 },
];

export interface EducationItem {
  degree: string;
  detail: string;
  institution: string;
  status: string;
  current?: boolean;
}

export const education: EducationItem[] = [
  {
    degree: "Master of Business Administration (MBA)",
    detail: "Specialisation: Finance & Marketing",
    institution: "Gnanam School of Business, Thanjavur",
    status: "Currently Pursuing — Expected Completion 2027",
    current: true,
  },
  {
    degree: "Bachelor of Commerce (B.Com. CA)",
    detail: "",
    institution: "Periyar Maniammai University, Thanjavur",
    status: "2026",
  },
  {
    degree: "Class XII",
    detail: "",
    institution: "Don Bosco Matric Hr. Sec. School, Thanjavur",
    status: "2023",
  },
];

export interface Certification {
  number: string;
  title: string;
  provider: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    number: "01",
    title: "Deloitte Data Analytics Virtual Experience",
    provider: "Forage",
    description:
      "Applied data analysis, data visualization, and business reporting techniques in a simulated consulting environment.",
  },
  {
    number: "02",
    title: "Citi Investment Banking Virtual Experience",
    provider: "Forage",
    description:
      "Gained exposure to financial modelling, valuation concepts, and investment banking operations.",
  },
  {
    number: "03",
    title: "Tata ESG Virtual Internship",
    provider: "Forage",
    description:
      "Developed knowledge of ESG metrics, sustainability reporting, and responsible investment practices.",
  },
  {
    number: "04",
    title: "Financial Accounting Fundamentals",
    provider: "Coursera",
    description:
      "Built a foundation in financial statements, accounting principles, and cash flow analysis.",
  },
  {
    number: "05",
    title: "Introduction to Finance, Accounting, Modelling & Valuation",
    provider: "Udemy",
    description:
      "Acquired knowledge of DCF valuation, financial modelling, and Excel-based financial analysis.",
  },
  {
    number: "06",
    title: "Additional Learning",
    provider: "Digital Marketing, Introducing AI, Explore Basic AI, Microsoft with Copilot",
    description:
      "Learned digital marketing fundamentals and explored how AI tools can support content creation, data analysis, marketing strategies, and workplace productivity.",
  },
];

export const careerInterests = [
  {
    title: "Financial Analysis",
    description: "Financial information, profitability analysis, and business performance.",
  },
  {
    title: "Business Analytics",
    description: "KPI tracking, dashboards, trend analysis, and data-driven decision-making.",
  },
  {
    title: "Financial Technology",
    description: "The intersection of finance, technology, and business innovation.",
  },
];

export const strengths = [
  "Analytical and problem-solving abilities",
  "Financial reporting and dashboard development",
  "Data visualization and KPI tracking",
  "Interest in data-driven strategic decision-making",
  "Continuous professional development",
];

export const bringStatement =
  "Turning complex data into clear insights that support better business decisions.";
