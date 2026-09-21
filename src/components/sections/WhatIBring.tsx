import type { LucideIcon } from "lucide-react";
import {
  Rocket,
  Waves,
  Smile,
  MessageCircle,
  Users,
  ShieldCheck,
  Flame,
  BookOpenCheck,
} from "lucide-react";
import { whatIBring } from "../../data/resume";

const icons: LucideIcon[] = [Rocket, Waves, Smile, MessageCircle, Users, ShieldCheck, Flame, BookOpenCheck];

export default function WhatIBring() {
  return (
    <section className="bg-bg-soft px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
            Personal Strengths
          </p>
          <h2 className="section-heading mt-2 text-3xl text-text sm:text-4xl">
            What I Bring
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {whatIBring.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.title}
                className="flex flex-col items-start gap-3 rounded-2xl border border-line bg-bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:border-green/50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-dim text-green">
                  <Icon size={18} />
                </span>
                <h3 className="text-sm font-bold text-text">{item.title}</h3>
                <p className="text-xs leading-relaxed text-text-soft">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
