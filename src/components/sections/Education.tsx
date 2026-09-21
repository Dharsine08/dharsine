import { GraduationCap } from "lucide-react";
import { useFadeIn } from "../../hooks/useFadeIn";
import { education } from "../../data/resume";

export default function Education() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-cream px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-ink-soft">
          Academic Background
        </p>
        <h2 className="display-heading break-words text-4xl text-charcoal sm:text-6xl">Education</h2>

        <div className="mt-10 flex flex-col gap-5">
          {education.map((item) => (
            <div
              key={item.degree}
              className={`flex flex-col gap-3 rounded-2xl border p-6 sm:flex-row sm:items-center sm:justify-between ${
                item.current
                  ? "border-terracotta bg-white shadow-card-lg"
                  : "border-line bg-white/60"
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                    item.current ? "bg-terracotta text-cream" : "bg-grey text-ink-soft"
                  }`}
                >
                  <GraduationCap size={20} />
                </span>
                <div>
                  <p
                    className={`display-heading ${
                      item.current ? "text-xl sm:text-2xl" : "text-lg"
                    } text-charcoal`}
                  >
                    {item.degree}
                  </p>
                  {item.detail && (
                    <p className="mt-0.5 text-sm font-semibold text-terracotta">{item.detail}</p>
                  )}
                  <p className="mt-1 text-sm text-ink-soft">{item.institution}</p>
                </div>
              </div>
              <span
                className={`w-fit shrink-0 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide ${
                  item.current ? "bg-terracotta text-cream" : "bg-grey text-ink-soft"
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
