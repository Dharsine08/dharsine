import { useState } from "react";
import { Menu, X, ArrowRight, Sparkle } from "lucide-react";
import { navSections } from "../data/sections";
import { personal } from "../data/resume";

interface NavbarProps {
  activeId: string;
  variant: "dark" | "light";
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar({ activeId, variant }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = variant === "dark";

  const textColor = isDark ? "text-cream" : "text-ink";
  const mutedColor = isDark ? "text-cream/70" : "text-ink-soft";

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <div className="relative z-30 px-6 py-5 sm:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`flex items-center gap-2 font-heading text-base font-bold ${textColor}`}
        >
          <Sparkle size={16} className="text-gold" fill="currentColor" />
          {personal.name}
        </button>

        <nav className="hidden items-center gap-7 sm:flex" aria-label="Primary navigation">
          {navSections.slice(0, -1).map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id)}
              aria-current={activeId === id ? "true" : undefined}
              className={`text-sm font-semibold transition-colors ${
                activeId === id ? textColor : mutedColor
              } ${isDark ? "hover:text-cream" : "hover:text-ink"}`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="hidden items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-black transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Get in touch!
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border ${
              isDark ? "border-cream/30 text-cream" : "border-ink/20 text-ink"
            } sm:hidden`}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className={`animate-fade-up mt-4 flex flex-col gap-1 rounded-2xl p-4 sm:hidden ${
            isDark ? "bg-black/30" : "bg-black/5"
          }`}
          aria-label="Mobile navigation"
        >
          {navSections.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id)}
              className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-left font-semibold ${textColor}`}
            >
              {label}
              <ArrowRight size={15} />
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
