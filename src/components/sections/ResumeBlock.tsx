import { Crown, GraduationCap } from "lucide-react";
import {
  education,
  leadershipExperience,
  leadershipTags,
  personal,
  professionalSkillTags,
  technicalSkillGroups,
} from "../../data/resume";

export default function ResumeBlock() {
  return (
    <section id="resume" className="bg-green px-6 py-20 text-cream sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="pill-heading bg-gold text-black">
          {personal.title}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left column: Education + Leadership */}
          <div>
            <h3 className="section-heading flex items-center gap-2 text-2xl text-gold">
              <GraduationCap size={22} />
              Education
            </h3>
            <ol className="relative mt-6 border-l-2 border-gold/30 pl-6">
              {education.map((item) => (
                <li key={item.degree} className="mb-6 last:mb-0">
                  <span className="absolute -left-[9px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-green bg-gold" />
                  <p className="text-xs font-bold uppercase tracking-wide text-gold-text">
                    {item.years}
                  </p>
                  <p className="mt-1 font-bold text-cream">{item.degree}</p>
                  <p className="text-sm text-cream/70">{item.institution}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl bg-gold p-6 text-black shadow-card-lg">
              <h3 className="section-heading flex items-center gap-2 text-xl">
                <Crown size={20} />
                Leadership Experience
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {leadershipExperience.map((role) => (
                  <li key={role} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                    {role}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {leadershipTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-black px-3 py-1 text-xs font-bold text-cream"
                  >
                    #{tag.replace(/\s+/g, "")}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Technical skills */}
          <div>
            <h3 className="section-heading text-2xl text-gold">Technical Skills</h3>

            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {technicalSkillGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-3 text-xs font-bold uppercase tracking-wide text-cream/50">
                    {group.label}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-cream/85">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mb-3 mt-8 text-xs font-bold uppercase tracking-wide text-cream/50">
              Professional Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {professionalSkillTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold text-cream"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
