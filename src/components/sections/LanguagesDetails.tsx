import { Languages as LanguagesIcon, Calendar, Flag } from "lucide-react";
import { languages, personal } from "../../data/resume";

export default function LanguagesDetails() {
  return (
    <section id="languages" className="bg-black px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="section-heading text-4xl text-white sm:text-5xl">Languages</h2>
            <div className="mt-8 flex flex-wrap gap-6">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-charcoal px-5 py-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue/20 text-blue">
                    <LanguagesIcon size={17} />
                  </span>
                  <div>
                    <p className="section-heading font-bold text-white">{lang.name}</p>
                    <p className="text-xs uppercase tracking-wide text-white/50">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-wide text-white/40">
              Personal Details
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <div className="flex items-center gap-2.5">
                <Calendar size={15} className="text-white/40" />
                {personal.dob}
              </div>
              <div className="flex items-center gap-2.5">
                <Flag size={15} className="text-white/40" />
                {personal.nationality}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
