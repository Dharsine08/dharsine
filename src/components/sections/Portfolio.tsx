import { useMemo, useState } from "react";
import { ArrowUpRight, FileStack } from "lucide-react";
import { portfolioItems, type PortfolioCategory } from "../../data/resume";

const filters: PortfolioCategory[] = ["All", "Academic", "Marketing", "Business"];

export default function Portfolio() {
  const [active, setActive] = useState<PortfolioCategory>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === active),
    [active],
  );

  return (
    <section id="portfolio" className="bg-bg-soft px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
            My Work
          </p>
          <h2 className="section-heading mt-2 text-3xl text-text sm:text-4xl">
            Portfolio
          </h2>
          <p className="mt-3 text-text-soft">
            An academic and business portfolio in progress. These are
            editable sample placeholders — update the{" "}
            <code className="rounded bg-bg-card px-1.5 py-0.5">portfolioItems</code>{" "}
            array in <code className="rounded bg-bg-card px-1.5 py-0.5">src/data/resume.ts</code>{" "}
            with real projects as they're ready.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                active === filter
                  ? "bg-green text-bg"
                  : "border border-line bg-bg-card text-text-soft hover:border-green/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-bg-card shadow-card transition-all hover:-translate-y-1 hover:border-green/50"
            >
              <div className="relative flex aspect-[4/3] items-center justify-center bg-bg-soft">
                <FileStack size={40} className="text-text-soft/40" />
                {item.isPlaceholder && (
                  <span className="absolute right-3 top-3 rounded-full bg-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-bg">
                    Placeholder
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-2 text-[11px] font-bold uppercase tracking-wide text-green">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-text">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-soft">
                  {item.description}
                </p>
                <button
                  type="button"
                  disabled={item.isPlaceholder}
                  className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-text disabled:cursor-not-allowed disabled:text-text-soft/40"
                  title={
                    item.isPlaceholder
                      ? "Add your project to enable this link"
                      : undefined
                  }
                >
                  View Project
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
