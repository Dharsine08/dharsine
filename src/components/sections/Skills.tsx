import { useFadeIn } from "../../hooks/useFadeIn";
import { skillCategories, tools } from "../../data/resume";

export default function Skills() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-white px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-ink-soft">
          What I Know
        </p>
        <h2 className="display-heading break-words text-4xl text-charcoal sm:text-6xl">
          Skills &amp; <span className="serif-heading">Expertise</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {skillCategories.map((group) => (
            <div key={group.category}>
              <h3 className="border-b border-line pb-3 text-sm font-bold uppercase tracking-wide text-terracotta">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-charcoal/85">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-charcoal/40" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="border-b border-line pb-3 text-sm font-bold uppercase tracking-wide text-terracotta">
            Tools &amp; Technology
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <div key={tool.name}>
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-bold text-charcoal">{tool.name}</p>
                  <p className="text-xs text-ink-soft">{tool.level}</p>
                </div>
                <div className="mt-2 flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className={`h-1.5 flex-1 rounded-full ${
                        i < tool.segments ? "bg-terracotta" : "bg-grey"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
