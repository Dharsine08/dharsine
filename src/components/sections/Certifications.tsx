import { useFadeIn } from "../../hooks/useFadeIn";
import { certifications } from "../../data/resume";

export default function Certifications() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-white px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-ink-soft">
          Continuous Learning
        </p>
        <h2 className="display-heading break-words text-4xl text-charcoal sm:text-6xl">
          Certifications &amp; <span className="serif-heading">Learning</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.number}
              className="flex flex-col gap-2 rounded-2xl border border-line bg-cream p-6 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="display-heading text-3xl text-terracotta/40">{cert.number}</span>
              <p className="display-heading -mt-2 text-base leading-tight text-charcoal">
                {cert.title}
              </p>
              <p className="text-xs font-bold uppercase tracking-wide text-terracotta">
                {cert.provider}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
