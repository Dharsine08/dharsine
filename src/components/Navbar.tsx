import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="font-heading text-lg font-extrabold tracking-tight text-text"
        >
          FRANKLIN<span className="text-green">.</span>
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navSections.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id)}
              aria-current={activeId === id ? "true" : undefined}
              className={`relative text-sm font-semibold transition-colors ${
                activeId === id ? "text-text" : "text-text-soft hover:text-text"
              }`}
            >
              {label}
              {activeId === id && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-green" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="hidden items-center gap-1.5 rounded-full bg-yellow px-5 py-2.5 text-sm font-bold text-bg transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Contact Me
            <ArrowUpRight size={15} />
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-text md:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="animate-fade-up border-t border-line/70 bg-bg px-6 pb-5 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1 pt-3">
            {navSections.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(id)}
                  className={`flex w-full items-center rounded-lg px-3 py-2.5 text-left font-semibold transition-colors ${
                    activeId === id ? "bg-bg-soft text-green" : "text-text-soft hover:text-text"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                type="button"
                onClick={() => handleNavClick("contact")}
                className="flex w-full items-center justify-center gap-1.5 rounded-full bg-yellow px-5 py-2.5 text-sm font-bold text-bg"
              >
                Contact Me
                <ArrowUpRight size={15} />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
