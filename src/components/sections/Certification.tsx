import { BadgeCheck, Briefcase } from "lucide-react";
import { certifications, internship } from "../../data/resume";

export default function Certification() {
  return (
    <section className="bg-cream-soft px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <span className="pill-heading">Certification</span>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col items-start gap-3 rounded-2xl border border-line bg-cream p-5 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral/10 text-coral">
                <BadgeCheck size={20} />
              </span>
              <p className="section-heading text-sm font-bold text-ink">{cert.title}</p>
              <p className="text-xs text-ink-soft">{cert.provider}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-4 rounded-2xl bg-green p-6 text-cream shadow-card">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-black">
            <Briefcase size={20} />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-gold-text">
              Internship
            </p>
            <p className="mt-1 text-sm font-bold text-cream">{internship.company}</p>
            <p className="mt-1 text-sm leading-relaxed text-cream/75">
              {internship.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
