import { ArrowUp } from "lucide-react";
import { personal } from "../data/resume";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black px-6 py-8 text-cream/70 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="section-heading text-base font-bold text-cream">{personal.name}</p>
          <p className="text-xs">{personal.title}</p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-xs">
            &copy; {year} {personal.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
