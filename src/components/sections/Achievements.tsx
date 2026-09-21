import type { LucideIcon } from "lucide-react";
import { Trophy, Medal, Tent, Volleyball, Cpu, PartyPopper, Users2 } from "lucide-react";
import { achievements } from "../../data/resume";

const icons: LucideIcon[] = [Trophy, Medal, Tent, Volleyball, Cpu, PartyPopper, Users2];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-bg px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <span className="pill-heading">Achievements</span>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {achievements.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-line bg-bg-soft p-5 shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue text-white">
                  <Icon size={18} />
                </span>
                <p className="text-sm font-semibold leading-relaxed text-ink">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
