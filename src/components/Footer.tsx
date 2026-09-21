import { ArrowUp } from "lucide-react";
import { navSections } from "../data/sections";
import { personal } from "../data/resume";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-black px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="display-heading text-lg text-cream">{personal.name}</p>
          <p className="text-xs text-grey">{personal.title}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-5" aria-label="Footer navigation">
          {navSections.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="text-xs font-bold uppercase tracking-widest text-grey transition-colors hover:text-cream"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <p className="text-xs text-grey">
            &copy; {year} {personal.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-grey transition-colors hover:border-green hover:text-cream"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
