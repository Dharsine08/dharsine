import type { LucideIcon } from "lucide-react";
import { GraduationCap, Rocket, Waves, Smile, ShieldCheck, Users, Flame, Puzzle } from "lucide-react";
import { useFadeIn } from "../../hooks/useFadeIn";
import { education, strengths } from "../../data/resume";

const strengthIcons: LucideIcon[] = [Rocket, Waves, Smile, ShieldCheck, Users, Flame, Puzzle];

export default function EducationStrengths() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-bg px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <div className="mb-4 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-text sm:text-4xl">Education</h2>
          <span className="mt-3 block h-1 w-16 rounded-full bg-yellow" />
        </div>
        <div className="flex items-center gap-4 rounded-2xl border-2 border-yellow bg-bg-soft p-6 shadow-card-lg sm:max-w-md">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow text-bg">
            <GraduationCap size={22} />
          </span>
          <div>
            <p className="font-bold text-text">{education.degree}</p>
            <span className="mt-1 inline-block rounded-full bg-yellow-dim px-3 py-1 text-xs font-bold uppercase tracking-wide text-yellow">
              {education.status}
            </span>
          </div>
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-text sm:text-4xl">
            Personal <span className="text-yellow">Strengths</span>
          </h2>
          <span className="mt-3 block h-1 w-16 rounded-full bg-yellow" />
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {strengths.map((item, i) => {
            const Icon = strengthIcons[i % strengthIcons.length];
            return (
              <div
                key={item}
                className="flex flex-col items-center gap-2 rounded-xl border border-line bg-bg-soft px-4 py-6 text-center shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-dim text-yellow">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-semibold text-text">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
