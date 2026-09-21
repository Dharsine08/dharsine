import { ArrowUp, Link2, Mail } from "lucide-react";
import { navSections } from "../data/sections";
import { personal } from "../data/resume";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="display-heading text-lg text-charcoal">{personal.name}</p>
          <p className="text-xs text-ink-soft">MBA Finance &amp; Marketing | Financial Analysis | Business Analytics</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-5" aria-label="Footer navigation">
          {navSections.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="text-xs font-bold uppercase tracking-widest text-ink-soft transition-colors hover:text-terracotta"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta"
          >
            <Link2 size={15} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta"
          >
            <Mail size={15} />
          </a>
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-6xl text-center text-xs text-ink-soft sm:text-left">
        &copy; {year} {personal.name}. All rights reserved.
      </p>
    </footer>
  );
}
