import { Download, GraduationCap, Languages, Target } from "lucide-react";
import {
  careerObjective,
  digitalSkills,
  education,
  languages,
  managementSkills,
  professionalSummary,
  strengths,
} from "../../data/resume";

export default function Resume() {
  return (
    <section id="resume" className="bg-paper px-6 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">
              My Background
            </p>
            <h2 className="section-heading mt-2 text-3xl text-ink sm:text-4xl">
              Resume
            </h2>
          </div>
          <a
            href="/resume/Pius_Ronaldo_A_Resume.pdf"
            download
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink shadow-card transition-transform hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        {/* Education timeline */}
        <div className="mb-14">
          <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-ink">
            <GraduationCap size={20} className="text-gold-dark" />
            Education
          </h3>
          <ol className="relative border-l-2 border-gold/60 pl-6">
            {education.map((item) => (
              <li key={item.degree} className="mb-6 last:mb-0">
                <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-paper bg-gold" />
                <p className="font-bold text-ink">{item.degree}</p>
                <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
                  {item.status}
                </p>
                <p className="mt-1 text-sm text-ink-soft">{item.note}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-paper-muted p-8 shadow-card">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-ink">
              <Target size={20} className="text-gold-dark" />
              Career Objective
            </h3>
            <p className="leading-relaxed text-ink-soft">{careerObjective}</p>
          </div>
          <div className="rounded-3xl border border-line bg-paper-muted p-8 shadow-card">
            <h3 className="mb-3 text-lg font-bold text-ink">
              Professional Summary
            </h3>
            <p className="leading-relaxed text-ink-soft">
              {professionalSummary}
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-ink">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[...managementSkills, ...digitalSkills].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line bg-paper px-4 py-1.5 text-sm font-semibold text-ink-soft"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-ink">Strengths</h3>
            <div className="flex flex-wrap gap-2">
              {strengths.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-ink px-4 py-1.5 text-sm font-semibold text-gold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-ink">
              <Languages size={20} className="text-gold-dark" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border-2 border-gold px-4 py-1.5 text-sm font-bold text-ink"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 rounded-xl border border-dashed border-line bg-paper-muted px-5 py-3 text-xs leading-relaxed text-ink-soft">
          <strong className="text-ink">Note:</strong> the Download Resume
          button links to{" "}
          <code className="rounded bg-paper px-1.5 py-0.5">
            /public/resume/Pius_Ronaldo_A_Resume.pdf
          </code>
          . Place your actual resume PDF at that path (see project README)
          for the button to serve a real file.
        </p>
      </div>
    </section>
  );
}
