import { useFadeIn } from "../../hooks/useFadeIn";
import { bringStatement, careerInterests, strengths } from "../../data/resume";

export default function InterestsBring() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-charcoal px-6 py-20 text-cream sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-cream/50">
          Where My Focus Lies
        </p>
        <h2 className="display-heading break-words text-4xl text-cream sm:text-6xl">Areas of Interest</h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {careerInterests.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl border border-cream/10 bg-cream/5 p-6 transition-colors hover:border-terracotta/50"
            >
              <span className="display-heading break-words text-4xl text-terracotta/50">0{i + 1}</span>
              <h3 className="display-heading mt-3 text-xl text-cream">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-cream/10 pt-14 text-center">
          <p className="serif-heading text-2xl leading-snug text-cream sm:text-3xl">
            &ldquo;{bringStatement}&rdquo;
          </p>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
            {strengths.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cream/15 px-4 py-2 text-xs font-semibold text-cream/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
