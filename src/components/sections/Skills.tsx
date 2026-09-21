import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  TrendingUp,
  Users,
  SearchCheck,
  MessageSquare,
  HeartHandshake,
  Presentation,
  PuzzleIcon,
  Clock,
} from "lucide-react";
import { skillCategories } from "../../data/resume";

const skillIcons: Record<string, LucideIcon> = {
  "Digital Marketing": Megaphone,
  "Marketing Fundamentals": TrendingUp,
  "Consumer Behaviour": Users,
  "Market Research": SearchCheck,
  "Business Communication": MessageSquare,
  "Customer Relationship Management": HeartHandshake,
  "Presentation Skills": Presentation,
  Teamwork: Users,
  "Problem Solving": PuzzleIcon,
  "Time Management": Clock,
};

export default function Skills() {
  return (
    <section id="skills" className="bg-bg-soft px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
            My Skills
          </p>
          <h2 className="section-heading mt-2 text-3xl text-text sm:text-4xl">
            Core Skills
          </h2>
          <p className="mt-3 text-text-soft">
            Skills shown as descriptive strengths rather than arbitrary
            proficiency percentages.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {skillCategories.map((group) => (
            <div key={group.category}>
              <h3 className="mb-6 text-lg font-bold text-text">{group.category}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {group.skills.map((skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <div
                      key={skill}
                      className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-bg-card px-4 py-6 text-center shadow-card transition-all hover:-translate-y-1 hover:border-green/50"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-dim text-green">
                        {Icon ? <Icon size={22} /> : null}
                      </span>
                      <span className="text-sm font-bold text-text">{skill}</span>
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
