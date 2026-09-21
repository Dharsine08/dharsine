import {
  GraduationCap,
  TrendingUp,
  Zap,
  Users,
  ClipboardList,
  MessageCircle,
  Lightbulb,
} from "lucide-react";
import { aboutHighlights, personal, whatIBring } from "../../data/resume";

const highlightIcons = [GraduationCap, TrendingUp, Zap, Users];
const bringIcons = [ClipboardList, MessageCircle, Lightbulb];

export default function About() {
  return (
    <section id="about" className="bg-paper-muted px-6 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">
            Get To Know Me
          </p>
          <h2 className="section-heading mt-2 text-3xl text-ink sm:text-4xl">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-lg font-semibold text-ink">
              I'm {personal.name}, {personal.title.replace(" | ", " and ")}.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              {personal.intro} I enjoy planning things carefully, working
              well within a team, and staying open to new ideas — qualities
              I hope to sharpen further through an MBA and a career in
              business management.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {aboutHighlights.map((item, i) => {
                const Icon = highlightIcons[i % highlightIcons.length];
                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-paper px-3 py-5 text-center shadow-card"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-soft text-ink">
                      <Icon size={18} />
                    </span>
                    <span className="text-xs font-bold leading-snug text-ink">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-ink p-8 text-white shadow-card-lg">
              <h3 className="section-heading text-lg text-gold">
                What I Bring
              </h3>
              <div className="mt-6 flex flex-col gap-5">
                {whatIBring.map((item, i) => {
                  const Icon = bringIcons[i % bringIcons.length];
                  return (
                    <div key={item.title} className="flex gap-4">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold text-ink">
                        <Icon size={16} />
                      </span>
                      <div>
                        <p className="font-bold">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-white/70">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
