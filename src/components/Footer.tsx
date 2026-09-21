import { ArrowUp } from "lucide-react";
import { personal } from "../data/resume";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-soft px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-heading text-base font-extrabold text-ink">{personal.name}</p>
          <p className="text-xs text-ink-soft">{personal.title}</p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-xs text-ink-soft">
            &copy; {year} {personal.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-blue hover:text-blue"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
