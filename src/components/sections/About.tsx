import { aboutMe, personal } from "../../data/resume";

export default function About() {
  return (
    <section id="about" className="bg-bg px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <span className="pill-heading">About Me</span>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">{aboutMe}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {personal.focus.map((item) => (
            <span
              key={item}
              className="rounded-full bg-bg-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-blue"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
