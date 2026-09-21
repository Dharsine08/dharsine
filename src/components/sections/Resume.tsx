import { GraduationCap, Target, Sparkles } from "lucide-react";
import { careerFocus, education, personalStrengthsShort } from "../../data/resume";

export default function Resume() {
  return (
    <section id="resume" className="bg-bg px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
            My Background
          </p>
          <h2 className="section-heading mt-2 text-3xl text-text sm:text-4xl">
            Resume
          </h2>
        </div>

        {/* Education timeline */}
        <div className="mb-14">
          <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-text">
            <GraduationCap size={20} className="text-green" />
            Education
          </h3>
          <ol className="relative border-l-2 border-green/40 pl-6">
            {education.map((item) => (
              <li key={item.degree} className="mb-8 last:mb-0">
                <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-bg bg-green" />
                <div className="rounded-2xl border border-line bg-bg-card p-5 shadow-card">
                  <p className="font-bold text-text">{item.degree}</p>
                  <p className="text-sm text-text-soft">{item.institution}</p>
                  <span
                    className={`mt-2 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
                      item.status === "Completed"
                        ? "bg-green-dim text-green"
                        : "bg-yellow/15 text-yellow"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-bg-card p-6 shadow-card">
            <h3 className="mb-3 flex items-center gap-2 font-bold text-text">
              <Target size={19} className="text-green" />
              Career Focus
            </h3>
            <div className="flex flex-wrap gap-2">
              {careerFocus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line px-3.5 py-1.5 text-xs font-semibold text-text-soft"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-bg-card p-6 shadow-card">
            <h3 className="mb-3 flex items-center gap-2 font-bold text-text">
              <Sparkles size={19} className="text-green" />
              Personal Strengths
            </h3>
            <ul className="flex flex-col gap-2">
              {personalStrengthsShort.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 rounded-xl border border-dashed border-line bg-bg-card px-5 py-3 text-xs leading-relaxed text-text-soft">
          <strong className="text-text">Note:</strong> the Download Resume
          button links to{" "}
          <code className="rounded bg-bg px-1.5 py-0.5">
            /public/resume/Franklin_S_Resume.pdf
          </code>
          . Place your actual resume PDF at that path for the button to
          serve a real file.
        </p>
      </div>
    </section>
  );
}
