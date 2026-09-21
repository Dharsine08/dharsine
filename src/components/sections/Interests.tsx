import {
  Briefcase,
  Megaphone,
  BookOpenCheck,
  Clapperboard,
  Music,
} from "lucide-react";
import { interests } from "../../data/resume";

const icons = [Briefcase, Megaphone, BookOpenCheck, Clapperboard, Music];

export default function Interests() {
  return (
    <section id="interests" className="bg-paper px-6 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">
            Beyond Work
          </p>
          <h2 className="section-heading mt-2 text-3xl text-ink sm:text-4xl">
            Interests
          </h2>
        </div>

        <div className="flex flex-wrap gap-5">
          {interests.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-line bg-paper-muted px-6 py-4 shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-ink">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-bold text-ink">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
