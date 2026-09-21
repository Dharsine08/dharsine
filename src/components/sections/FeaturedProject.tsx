import { ShoppingBag, Search, Users2, Lightbulb, Lock } from "lucide-react";
import { featuredProject } from "../../data/resume";

export default function FeaturedProject() {
  return (
    <section className="bg-bg px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
            Featured Work
          </p>
          <h2 className="section-heading mt-2 text-3xl text-text sm:text-4xl">
            Academic Project
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 overflow-hidden rounded-3xl border border-line bg-bg-card shadow-card-lg lg:grid-cols-5">
          <div className="relative flex items-center justify-center bg-gradient-to-br from-green-dim to-bg-soft p-10 lg:col-span-2">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-green/30 bg-bg-card shadow-card">
              <ShoppingBag size={56} className="text-green" />
            </div>
          </div>

          <div className="p-8 lg:col-span-3 lg:p-10">
            <span className="text-xs font-bold uppercase tracking-wide text-green">
              {featuredProject.category}
            </span>
            <h3 className="section-heading mt-2 text-2xl text-text sm:text-3xl">
              {featuredProject.title}
            </h3>

            <div className="mt-6 flex flex-col gap-6">
              <div>
                <h4 className="mb-1.5 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-text-soft">
                  <Search size={15} className="text-green" />
                  Project Overview
                </h4>
                <p className="text-sm leading-relaxed text-text-soft">
                  {featuredProject.overview}
                </p>
              </div>

              <div>
                <h4 className="mb-1.5 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-text-soft">
                  <Users2 size={15} className="text-green" />
                  Research Focus
                </h4>
                <p className="text-sm leading-relaxed text-text-soft">
                  {featuredProject.researchFocus}
                </p>
              </div>

              <div>
                <h4 className="mb-1.5 text-sm font-bold uppercase tracking-wide text-text-soft">
                  Key Areas Studied
                </h4>
                <ul className="flex flex-col gap-1.5">
                  {featuredProject.keyAreasStudied.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-1.5 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-text-soft">
                  <Lightbulb size={15} className="text-green" />
                  Learning Outcomes
                </h4>
                <p className="text-sm leading-relaxed text-text-soft">
                  {featuredProject.learningOutcomes}
                </p>
              </div>
            </div>

            <button
              type="button"
              disabled={!featuredProject.hasViewableDocument}
              title="Add the project document to enable this button"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3 text-sm font-bold text-bg transition-transform enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-line disabled:text-text-soft"
            >
              <Lock size={15} />
              View Project — Add Document to Enable
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
