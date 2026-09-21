import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Sheet,
  Calculator,
  Monitor,
  MessageSquare,
  Users,
  Puzzle,
  Clock,
} from "lucide-react";
import { useFadeIn } from "../../hooks/useFadeIn";
import { skillCategories } from "../../data/resume";

const skillIcons: Record<string, LucideIcon> = {
  "MS Office": FileText,
  "MS Excel": Sheet,
  "Tally Prime": Calculator,
  "Basic Computer Skills": Monitor,
  Communication: MessageSquare,
  Teamwork: Users,
  "Problem Solving": Puzzle,
  "Time Management": Clock,
};

const descriptions: Record<string, string> = {
  "MS Office": "Familiar with Word, Excel, and everyday office document tools.",
  "MS Excel": "Comfortable working with spreadsheets, data, and calculations.",
  "Tally Prime": "Familiarity with Tally Prime for basic business software tasks.",
  "Basic Computer Skills": "Confident navigating computers and everyday applications.",
  Communication: "Clear and effective communication in a professional setting.",
  Teamwork: "Collaborates well with others toward shared goals.",
  "Problem Solving": "A practical, problem-solving approach to challenges.",
  "Time Management": "Manages time and priorities responsibly.",
};

export default function Skills() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section id="skills" className="bg-bg px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-text sm:text-4xl">
            Skills &amp; <span className="text-yellow">Expertise</span>
          </h2>
          <span className="mt-3 block h-1 w-16 rounded-full bg-yellow" />
        </div>

        <div className="flex flex-col gap-12">
          {skillCategories.map((group) => (
            <div key={group.category}>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-yellow">
                {group.category}
              </h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.skills.map((skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <div
                      key={skill}
                      className="flex flex-col gap-3 rounded-xl border border-line bg-bg-soft p-5 shadow-card transition-transform hover:-translate-y-1"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-dim text-yellow">
                        {Icon ? <Icon size={20} /> : null}
                      </span>
                      <p className="font-bold text-text">{skill}</p>
                      <p className="text-sm leading-relaxed text-text-soft">
                        {descriptions[skill]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
