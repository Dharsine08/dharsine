import { Award, GraduationCap, Presentation } from "lucide-react";
import { achievements } from "../../data/resume";

const icons = [GraduationCap, Presentation, Award];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-paper-muted px-6 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">
            Milestones
          </p>
          <h2 className="section-heading mt-2 text-3xl text-ink sm:text-4xl">
            Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item}
                className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-paper p-6 shadow-card transition-transform hover:-translate-y-1 hover:shadow-card-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-gold">
                  <Icon size={22} />
                </span>
                <p className="text-sm font-semibold leading-relaxed text-ink">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
