import TornEdge from "../TornEdge";
import { personal } from "../../data/resume";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="grid-pattern relative overflow-hidden bg-white px-6 pb-20 pt-28 sm:px-10 sm:pt-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="animate-fade-up mb-4 inline-flex -rotate-3 items-center gap-1.5 rounded-full border-2 border-ink/80 bg-white px-4 py-1.5 font-heading text-sm font-bold text-ink shadow-card">
            {personal.portfolioYear}
          </span>

          <h1 className="section-heading animate-fade-up text-6xl leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl">
            {personal.name}
          </h1>

          <p className="animate-fade-up mt-5 text-base font-semibold uppercase tracking-wide text-ink-soft sm:text-lg">
            {personal.title}
          </p>

          <p className="animate-fade-up mt-4 max-w-xl text-sm italic leading-relaxed text-ink-soft sm:text-base">
            &ldquo;{personal.tagline}&rdquo;
          </p>

          <div className="animate-fade-up mt-6 flex flex-wrap justify-center gap-2">
            {personal.focus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink/15 px-3.5 py-1.5 text-xs font-semibold text-ink-soft"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <TornEdge color="#242428" />
    </section>
  );
}
