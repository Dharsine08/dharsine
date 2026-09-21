import type { LucideIcon } from "lucide-react";
import { Briefcase, ShieldCheck, Landmark, Target } from "lucide-react";
import { careerObjective, careerProfile } from "../../data/resume";

const icons: LucideIcon[] = [Briefcase, ShieldCheck, Landmark];

export default function CareerProfile() {
  return (
    <section id="qualifications" className="bg-black px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading text-4xl text-white sm:text-5xl">Career Profile</h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {careerProfile.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-charcoal p-5 shadow-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon size={20} />
                </span>
                <p className="text-sm font-semibold text-white">{item}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-blue/25 bg-blue/10 p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue text-white">
            <Target size={20} />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-blue">
              Career Objective
            </p>
            <p className="mt-1 leading-relaxed text-white/85">{careerObjective}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
