import type { LucideIcon } from "lucide-react";
import { Calculator, LineChart, Users } from "lucide-react";
import { useFadeIn } from "../../hooks/useFadeIn";
import { skills } from "../../data/resume";

const icons: LucideIcon[] = [Calculator, LineChart, Users];

export default function SkillsTable() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-charcoal px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <h2 className="display-heading text-4xl leading-none text-cream sm:text-6xl">
          What I Bring
          <br />
          To The Table
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={skill.title}
                className="group flex flex-col justify-between gap-8 rounded-2xl bg-green p-7 shadow-card transition-transform hover:-translate-y-1.5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/15 text-cream">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="display-heading text-2xl text-cream">{skill.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/80">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
