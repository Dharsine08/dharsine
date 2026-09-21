import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navSections } from "../data/sections";

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
    <header className="fixed top-0 inset-x-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-10">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="section-heading text-base font-bold tracking-tight text-ink"
        >
          Jerin<span className="text-blue">.</span>
        </button>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navSections.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id)}
              aria-current={activeId === id ? "true" : undefined}
              className={`relative text-sm font-semibold transition-colors ${
                activeId === id ? "text-ink" : "text-ink-soft hover:text-ink"
              }`}
            >
              {label}
              {activeId === id && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gold" />
              )}
            </button>
          ))}
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink lg:hidden"
        >
          {mobileOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="animate-fade-up border-t border-black/5 bg-white px-6 pb-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1 pt-3">
            {navSections.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(id)}
                  className={`flex w-full items-center rounded-lg px-3 py-2.5 text-left font-semibold ${
                    activeId === id ? "bg-grey text-ink" : "text-ink-soft hover:text-ink"
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
