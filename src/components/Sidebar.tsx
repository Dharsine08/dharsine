import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navSections } from "../data/sections";
import { personal } from "../data/resume";
import profilePhoto from "../assets/photo/profile.jpg";

interface SidebarProps {
  activeId: string;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Sidebar({ activeId }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile top bar */}
      <header className="fixed top-0 inset-x-0 z-40 flex items-center justify-between bg-gold px-4 py-3 md:hidden">
        <span className="font-heading font-extrabold tracking-tight text-ink">
          {personal.name.toUpperCase()}
        </span>
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-gold transition-transform active:scale-95"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <nav
          className="fixed top-[52px] inset-x-0 z-30 bg-gold px-4 pb-4 shadow-card-lg md:hidden animate-fade-up"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navSections.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(id)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left font-medium transition-colors ${
                    activeId === id
                      ? "bg-ink text-gold"
                      : "text-ink/80 hover:bg-ink/10"
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Desktop fixed sidebar */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 z-40 w-[220px] flex-col items-center bg-gold py-8">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="group flex flex-col items-center gap-3 px-4 text-center"
          aria-label="Go to home section"
        >
          <span className="h-24 w-24 overflow-hidden rounded-full border-4 border-ink/90 shadow-card">
            <img
              src={profilePhoto}
              alt={personal.name}
              className="photo-mono h-full w-full object-cover"
            />
          </span>
          <span className="font-heading text-base font-extrabold uppercase tracking-wide text-ink">
            {personal.name}
          </span>
        </button>

        <nav className="mt-10 flex w-full flex-1 flex-col gap-1 px-4" aria-label="Primary navigation">
          {navSections.map(({ id, label, icon: Icon }) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleNavClick(id)}
                aria-current={isActive ? "true" : undefined}
                className={`relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-ink text-gold shadow-card"
                    : "text-ink/75 hover:bg-ink/10 hover:text-ink"
                }`}
              >
                <Icon size={18} strokeWidth={2.25} />
                {label}
              </button>
            );
          })}
        </nav>

        <p className="px-4 text-center text-[11px] font-medium uppercase tracking-wider text-ink/70">
          Aspiring MBA Professional
        </p>
      </aside>
    </>
  );
}
