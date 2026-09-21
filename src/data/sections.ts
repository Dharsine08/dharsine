export interface NavSection {
  id: string;
  label: string;
}

export const navSections: NavSection[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];
