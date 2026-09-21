import type { LucideIcon } from "lucide-react";
import {
  Languages as LanguagesIcon,
  Trophy,
  Medal,
  Tent,
  Volleyball,
  Cpu,
  PartyPopper,
  Users2,
} from "lucide-react";
import { achievements, languages } from "../../data/resume";

const achievementIcons: LucideIcon[] = [Trophy, Medal, Tent, Volleyball, Cpu, PartyPopper, Users2];

export default function LanguagesAchievements() {
  return (
    <section id="achievements" className="bg-cream-soft px-6 py-20 sm:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h3 className="section-heading text-3xl text-ink">Language</h3>
          <div className="mt-6 flex flex-wrap gap-8">
            {languages.map((lang) => (
              <div key={lang} className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green/10 text-green">
                  <LanguagesIcon size={18} />
                </span>
                <span className="section-heading text-lg font-bold text-ink">{lang}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="section-heading text-3xl text-ink">Achievements</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {achievements.map((item, i) => {
              const Icon = achievementIcons[i % achievementIcons.length];
              return (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-line bg-cream p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                    <Icon size={15} />
                  </span>
                  <p className="text-sm font-medium leading-snug text-ink-soft">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
