import type { LucideIcon } from "lucide-react";
import { Coffee, Hotel, Droplet, Clock, Star } from "lucide-react";
import { projects, type Project } from "../../data/resume";

const projectIcons: Record<string, LucideIcon> = {
  "cafe-management-system": Coffee,
  "hotel-management-system": Hotel,
  "water-tracking-system": Droplet,
};

function ProjectCard({ project }: { project: Project }) {
  const Icon = projectIcons[project.id] ?? Coffee;

  if (project.featured) {
    return (
      <article className="col-span-full overflow-hidden rounded-2xl border border-line bg-bg-soft shadow-card-lg">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-5">
          <div className="flex items-center justify-center bg-gradient-to-br from-blue to-blue-deep p-10 sm:col-span-2">
            <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-white">
              <Icon size={44} />
            </span>
          </div>
          <div className="p-6 sm:col-span-3 sm:p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              <Star size={12} />
              Featured Project
            </span>
            <h3 className="mt-3 text-xl font-bold text-ink">{project.title}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-ink-soft">
              <Clock size={13} />
              {project.duration}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {project.description}
            </p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-bg shadow-card transition-transform hover:-translate-y-1 hover:shadow-card-lg">
      <div className="flex items-center justify-center bg-bg-soft py-8">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blue/10 text-blue">
          <Icon size={28} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-base font-bold text-ink">{project.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-ink-soft">
          <Clock size={13} />
          {project.duration}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
          {project.description}
        </p>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-bg-soft px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <span className="pill-heading">Projects</span>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featured && <ProjectCard project={featured} />}
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
