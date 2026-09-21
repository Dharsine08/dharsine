import {
  Home,
  User,
  FileText,
  Sparkles,
  Briefcase,
  Trophy,
  Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavSection {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const navSections: NavSection[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About Me", icon: User },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "portfolio", label: "Portfolio", icon: Briefcase },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "contact", label: "Contact", icon: Mail },
];
