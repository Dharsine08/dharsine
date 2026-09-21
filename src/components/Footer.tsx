import { ArrowUp, Link2, Mail } from "lucide-react";
import { navSections } from "../data/sections";
import { contact, personal } from "../data/resume";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-lg font-extrabold text-text">{personal.name}</p>
          <p className="text-xs text-text-soft">{personal.title}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-5" aria-label="Footer navigation">
          {navSections.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="text-xs font-bold uppercase tracking-widest text-text-soft transition-colors hover:text-yellow"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span
            aria-hidden={contact.linkedinIsPlaceholder}
            title={contact.linkedinIsPlaceholder ? "Add a real LinkedIn URL to enable" : "LinkedIn"}
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-line text-text-soft ${
              contact.linkedinIsPlaceholder ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            <Link2 size={15} />
          </span>
          <span
            aria-hidden={contact.emailIsPlaceholder}
            title={contact.emailIsPlaceholder ? "Add a real email to enable" : "Email"}
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-line text-text-soft ${
              contact.emailIsPlaceholder ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            <Mail size={15} />
          </span>
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-text-soft transition-colors hover:border-yellow hover:text-yellow"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-6xl text-center text-xs text-text-soft sm:text-left">
        &copy; {year} {personal.name}. All Rights Reserved.
      </p>
    </footer>
  );
}
