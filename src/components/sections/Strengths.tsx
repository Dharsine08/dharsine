import type { LucideIcon } from "lucide-react";
import { Clock3, Waves, Users, Compass } from "lucide-react";
import { strengths } from "../../data/resume";

const icons: LucideIcon[] = [Clock3, Waves, Users, Compass];

export default function Strengths() {
  return (
    <section id="strengths" className="bg-charcoal px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading text-4xl text-white sm:text-5xl">My Strengths</h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.title}
                className="flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-black p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue/20 text-blue">
                  <Icon size={20} />
                </span>
                <p className="section-heading text-base font-bold text-white">{item.title}</p>
                <p className="text-sm leading-relaxed text-white/65">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
