import type { LucideIcon } from "lucide-react";
import { MessageSquare, Users, Waves, Puzzle, Crown, GitBranch, HandshakeIcon, Sparkles } from "lucide-react";
import { strengths } from "../../data/resume";

const icons: LucideIcon[] = [MessageSquare, Users, Waves, Puzzle, Crown, GitBranch, HandshakeIcon, Sparkles];

export default function Strengths() {
  return (
    <section className="bg-cream px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <span className="pill-heading">My Strengths</span>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {strengths.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item}
                className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-cream px-4 py-6 text-center shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green/10 text-green">
                  <Icon size={20} />
                </span>
                <span className="section-heading text-sm font-bold text-ink">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
