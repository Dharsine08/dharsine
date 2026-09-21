import type { LucideIcon } from "lucide-react";
import {
  CalendarClock,
  FolderKanban,
  Crown,
  Users,
  Clock,
  PuzzleIcon,
  Waves,
  MessageSquare,
  FileType,
  Sheet,
  Presentation,
  Rocket,
  Heart,
  ShieldCheck,
  Smile,
  BrainCircuit,
  GitBranch,
  HandshakeIcon,
} from "lucide-react";
import { digitalSkills, managementSkills, strengths } from "../../data/resume";

const managementIcons: Record<string, LucideIcon> = {
  Planning: CalendarClock,
  Organising: FolderKanban,
  Leadership: Crown,
  Teamwork: Users,
  "Time Management": Clock,
  "Problem Solving": PuzzleIcon,
  Adaptability: Waves,
  Communication: MessageSquare,
};

const digitalIcons: Record<string, LucideIcon> = {
  "Microsoft Word": FileType,
  "Microsoft Excel": Sheet,
  "Microsoft PowerPoint": Presentation,
};

const strengthIcons: Record<string, LucideIcon> = {
  "Quick Learner": Rocket,
  "Self-Motivated": Heart,
  Responsible: ShieldCheck,
  "Positive Attitude": Smile,
  "Critical Thinking": BrainCircuit,
  "Decision Making": GitBranch,
  "Team Collaboration": HandshakeIcon,
};

function SkillGrid({
  items,
  icons,
}: {
  items: string[];
  icons: Record<string, LucideIcon>;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => {
        const Icon = icons[item];
        return (
          <div
            key={item}
            className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-6 text-center shadow-card transition-transform hover:-translate-y-1 hover:shadow-card-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-ink">
              {Icon ? <Icon size={22} /> : null}
            </span>
            <span className="text-sm font-bold text-ink">{item}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-paper-muted px-6 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">
            Capabilities
          </p>
          <h2 className="section-heading mt-2 text-3xl text-ink sm:text-4xl">
            Skills
          </h2>
          <p className="mt-3 text-ink-soft">
            A snapshot of my personal, management, and digital skills — shown
            here as descriptive strengths rather than arbitrary percentages.
          </p>
        </div>

        <div className="mb-14">
          <h3 className="mb-6 text-lg font-bold text-ink">
            Personal &amp; Management Skills
          </h3>
          <SkillGrid items={managementSkills} icons={managementIcons} />
        </div>

        <div className="mb-14">
          <h3 className="mb-6 text-lg font-bold text-ink">Digital Skills</h3>
          <SkillGrid items={digitalSkills} icons={digitalIcons} />
        </div>

        <div>
          <h3 className="mb-6 text-lg font-bold text-ink">
            Personal Strengths
          </h3>
          <SkillGrid items={strengths} icons={strengthIcons} />
        </div>
      </div>
    </section>
  );
}
