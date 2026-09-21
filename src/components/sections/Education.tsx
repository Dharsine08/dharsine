import { GraduationCap } from "lucide-react";
import { education } from "../../data/resume";

export default function Education() {
  return (
    <section id="education" className="bg-charcoal px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading text-4xl text-white sm:text-5xl">Education</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {education.map((item) => (
            <div
              key={item.degree}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black p-6 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue/20 text-blue">
                <GraduationCap size={20} />
              </span>
              <p className="section-heading text-lg font-bold text-white">{item.degree}</p>
              <p
                className={`text-sm ${
                  item.institution === "Institution not specified"
                    ? "italic text-white/40"
                    : "text-white/65"
                }`}
              >
                {item.institution}
              </p>
              <span className="mt-auto w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
