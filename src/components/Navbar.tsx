import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navSections } from "../data/sections";
import { personal } from "../data/resume";

interface NavbarProps {
  activeId: string;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar({ activeId }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="text-sm font-bold tracking-wide text-charcoal"
        >
          {personal.name}
        </button>

        <nav className="hidden items-center gap-8 sm:flex" aria-label="Primary navigation">
          {navSections.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id)}
              aria-current={activeId === id ? "true" : undefined}
              className={`relative text-xs font-bold uppercase tracking-widest transition-colors ${
                activeId === id ? "text-charcoal" : "text-ink-soft hover:text-charcoal"
              }`}
            >
              {label}
              {activeId === id && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-terracotta" />
              )}
            </button>
          ))}
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-charcoal sm:hidden"
        >
          {mobileOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="animate-fade-up border-t border-line bg-cream px-6 pb-5 sm:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1 pt-3">
            {navSections.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(id)}
                  className={`flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm font-bold uppercase tracking-widest ${
                    activeId === id ? "bg-white text-charcoal" : "text-ink-soft hover:text-charcoal"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
