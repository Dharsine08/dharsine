import { Info, TrendingUp } from "lucide-react";
import { useFadeIn } from "../../hooks/useFadeIn";
import { academicProject } from "../../data/resume";

export default function AcademicProject() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section id="portfolio" className="bg-charcoal px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-grey">
          Academic Project
        </p>
        <h2 className="display-heading text-5xl text-cream sm:text-7xl">Selected Work</h2>

        <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-2xl border border-line shadow-card-lg lg:grid-cols-5">
          <div className="flex items-center justify-center bg-green p-12 lg:col-span-2">
            <span className="flex h-28 w-28 items-center justify-center rounded-full bg-cream/15 text-cream">
              <TrendingUp size={52} />
            </span>
          </div>
          <div className="bg-black p-8 lg:col-span-3 lg:p-12">
            <span className="text-xs font-bold uppercase tracking-wide text-green-muted">
              {academicProject.category}
            </span>
            <h3 className="display-heading mt-2 text-4xl text-cream sm:text-5xl">
              {academicProject.title}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-grey">
              {academicProject.description}
            </p>
            <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-line bg-charcoal/60 px-4 py-3 text-xs leading-relaxed text-grey">
              <Info size={15} className="mt-0.5 shrink-0 text-green-muted" />
              {academicProject.note}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
