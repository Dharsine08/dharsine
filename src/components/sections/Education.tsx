import { GraduationCap } from "lucide-react";
import { education, personal } from "../../data/resume";

export default function Education() {
  return (
    <section id="education" className="bg-bg px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <span className="pill-heading">Education</span>

        <div className="mt-8 rounded-2xl border border-blue/20 bg-bg-soft px-6 py-5">
          <p className="text-sm font-bold uppercase tracking-wide text-blue">
            {personal.title}
          </p>
        </div>

        <ol className="relative mt-8 border-l-2 border-blue/25 pl-6">
          {education.map((item) => (
            <li key={item.degree} className="mb-8 last:mb-0">
              <span className="absolute -left-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-bg bg-blue" />
              <div className="rounded-2xl border border-line bg-bg-soft p-5 shadow-card">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                    <GraduationCap size={17} />
                  </span>
                  <div>
                    <p className="font-bold text-ink">{item.degree}</p>
                    <p className="text-sm text-ink-soft">{item.institution}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wide text-blue-accent">
                      {item.years}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
