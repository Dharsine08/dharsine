import { GraduationCap } from "lucide-react";
import { useFadeIn } from "../../hooks/useFadeIn";
import { education } from "../../data/resume";

export default function Education() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section id="education" className="bg-black px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <h2 className="display-heading text-5xl text-cream sm:text-7xl">Education</h2>

        <div className="mt-12 flex flex-col gap-6">
          {education.map((item) => (
            <div
              key={item.degree}
              className={`flex flex-col gap-4 rounded-2xl border p-7 sm:flex-row sm:items-center sm:justify-between ${
                item.current
                  ? "border-green bg-green/15 shadow-card-lg"
                  : "border-line bg-charcoal"
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                    item.current ? "bg-green text-cream" : "bg-white/5 text-grey"
                  }`}
                >
                  <GraduationCap size={22} />
                </span>
                <div>
                  <p
                    className={`display-heading ${
                      item.current ? "text-2xl sm:text-3xl" : "text-xl"
                    } text-cream`}
                  >
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-grey">{item.institution}</p>
                </div>
              </div>
              <span
                className={`w-fit shrink-0 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide ${
                  item.current ? "bg-green text-cream" : "bg-white/10 text-grey"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
