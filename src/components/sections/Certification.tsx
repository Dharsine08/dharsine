import { BadgeCheck, Briefcase } from "lucide-react";
import { certifications, internship } from "../../data/resume";

export default function Certification() {
  return (
    <section id="certification" className="bg-bg-soft px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <span className="pill-heading">Certification</span>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col items-start gap-3 rounded-2xl border border-line bg-bg p-5 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue/10 text-blue">
                <BadgeCheck size={20} />
              </span>
              <p className="text-sm font-bold text-ink">{cert.title}</p>
              <p className="text-xs text-ink-soft">{cert.provider}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-blue/20 bg-bg p-6 shadow-card">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue text-white">
            <Briefcase size={20} />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-blue">
              Internship
            </p>
            <p className="mt-1 text-sm font-bold text-ink">{internship.company}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">
              {internship.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
