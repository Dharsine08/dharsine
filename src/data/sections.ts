export interface NavSection {
  id: string;
  label: string;
}

export const navSections: NavSection[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];
