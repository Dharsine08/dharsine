import { ArrowUp } from "lucide-react";
import { navSections } from "../data/sections";
import { personal } from "../data/resume";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="section-heading text-lg font-bold text-white">
            {personal.name}
          </p>
          <p className="text-sm text-white/50">{personal.title}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-5" aria-label="Footer navigation">
          {navSections.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="text-sm font-semibold text-white/60 transition-colors hover:text-gold"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {year} {personal.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-gold hover:text-gold"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
