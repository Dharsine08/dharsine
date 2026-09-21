import { FileStack, Table, LayoutGrid, Briefcase } from "lucide-react";
import { useFadeIn } from "../../hooks/useFadeIn";
import { services } from "../../data/resume";

const accents = [
  { icon: FileStack, color: "#4F9DDE" },
  { icon: Table, color: "#3FB68C" },
  { icon: LayoutGrid, color: "#E0637A" },
  { icon: Briefcase, color: "#FFB81C" },
];

export default function Services() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section id="services" className="bg-bg-soft px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <div className="mb-4 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-text sm:text-4xl">
            What I Can <span className="text-yellow">Contribute</span>
          </h2>
          <span className="mt-3 block h-1 w-16 rounded-full bg-yellow" />
          <p className="mt-5 text-text-soft">
            Areas I'm confident in and interested in contributing to as I begin
            my professional career.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const { icon: Icon, color } = accents[i % accents.length];
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-line bg-bg p-7 shadow-card transition-transform hover:-translate-y-1.5"
                style={{ borderTopWidth: "3px", borderTopColor: color }}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${color}22`, color }}
                >
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-text">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-soft">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
