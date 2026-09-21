import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Languages as LanguagesIcon,
  Crown,
  Code2,
  Users,
  Menu,
  X,
} from "lucide-react";
import { navSections } from "../data/sections";
import {
  languages,
  leadershipExperience,
  personal,
  professionalSkills,
  technicalSkills,
} from "../data/resume";
import profilePhoto from "../assets/photo/profile.jpg";

interface SidebarProps {
  activeId: string;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function SidebarNav({
  activeId,
  onNavigate,
}: {
  activeId: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <nav className="flex flex-wrap gap-2" aria-label="Primary navigation">
      {navSections.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => onNavigate(id)}
          aria-current={activeId === id ? "true" : undefined}
          className={`rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
            activeId === id
              ? "bg-blue text-white"
              : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}

function SidebarBody() {
  return (
    <>
      <div className="mb-8">
        <span className="pill-heading border-blue-accent text-blue-accent">
          My Contact
        </span>
        <div className="mt-4 flex flex-col gap-3">
          <a
            href={`tel:${personal.phone}`}
            className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-accent">
              <Phone size={14} />
            </span>
            {personal.phone}
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-accent">
              <Mail size={14} />
            </span>
            <span className="break-all">{personal.email}</span>
          </a>
          <div className="flex items-center gap-3 text-sm text-white/80">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-accent">
              <MapPin size={14} />
            </span>
            {personal.location}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <span className="pill-heading border-blue-accent text-blue-accent">
          Skills
        </span>
        <div className="mt-4">
          <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white/50">
            <Code2 size={13} />
            Technical
          </p>
          <ul className="flex flex-col gap-1.5">
            {technicalSkills.map((skill) => (
              <li key={skill} className="flex items-center gap-2 text-sm text-white/80">
                <span className="h-1 w-1 shrink-0 rounded-full bg-blue-accent" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white/50">
            <Users size={13} />
            Professional
          </p>
          <ul className="flex flex-col gap-1.5">
            {professionalSkills.map((skill) => (
              <li key={skill} className="flex items-center gap-2 text-sm text-white/80">
                <span className="h-1 w-1 shrink-0 rounded-full bg-blue-accent" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <span className="pill-heading border-blue-accent text-blue-accent">
          Languages
        </span>
        <ul className="mt-4 flex flex-col gap-2">
          {languages.map((lang) => (
            <li key={lang} className="flex items-center gap-3 text-sm text-white/80">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-accent">
                <LanguagesIcon size={14} />
              </span>
              {lang}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <span className="pill-heading border-blue-accent text-blue-accent">
          Leadership Experience
        </span>
        <ul className="mt-4 flex flex-col gap-2">
          {leadershipExperience.map((role) => (
            <li key={role} className="flex items-center gap-3 text-sm text-white/80">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-accent">
                <Crown size={14} />
              </span>
              {role}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default function Sidebar({ activeId }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile compact top bar */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between border-b border-white/10 bg-sidebar px-4 py-3 lg:hidden">
        <div className="flex items-center gap-3">
          <img
            src={profilePhoto}
            alt={personal.name}
            className="h-9 w-9 rounded-full border-2 border-blue-accent object-cover"
          />
          <span className="font-heading text-sm font-bold text-white">
            {personal.name}
          </span>
        </div>
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white"
        >
          {mobileOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </header>

      {mobileOpen && (
        <div className="animate-fade-up fixed inset-x-0 top-[57px] z-40 max-h-[calc(100vh-57px)] overflow-y-auto bg-sidebar px-5 pb-8 pt-5 lg:hidden">
          <div className="mb-6">
            <SidebarNav activeId={activeId} onNavigate={handleNavigate} />
          </div>
          <SidebarBody />
        </div>
      )}

      {/* Desktop sidebar (part of normal flow, sticky within its own column) */}
      <aside className="relative hidden shrink-0 bg-sidebar lg:flex lg:w-[32%] lg:max-w-[420px] lg:flex-col">
        <div className="relative h-36 shrink-0 bg-gradient-to-r from-blue to-blue-deep">
          <img
            src={profilePhoto}
            alt={personal.name}
            className="absolute left-1/2 top-24 h-28 w-28 -translate-x-1/2 rounded-full border-4 border-sidebar object-cover shadow-card-lg"
          />
        </div>

        <div className="flex flex-1 flex-col px-8 pb-10 pt-16">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-lg font-bold text-white">
              {personal.name}
            </h2>
            <p className="mt-1 text-xs font-semibold text-white/50">{personal.title}</p>
          </div>

          <div className="mb-8">
            <SidebarNav activeId={activeId} onNavigate={handleNavigate} />
          </div>

          <SidebarBody />
        </div>
      </aside>
    </>
  );
}
