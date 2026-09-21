export interface NavSection {
  id: string;
  label: string;
}

export const navSections: NavSection[] = [
  { id: "about", label: "About me" },
  { id: "resume", label: "Resume" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];
