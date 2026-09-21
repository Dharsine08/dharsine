import { useFadeIn } from "../../hooks/useFadeIn";
import { careerInterests } from "../../data/resume";

export default function CareerInterests() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-black px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <h2 className="display-heading text-4xl leading-none text-cream sm:text-6xl">
          Where I'm Headed
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {careerInterests.map((item, i) => (
            <div
              key={item.title}
              className="group flex flex-col justify-between gap-16 rounded-2xl border border-line bg-charcoal p-7 transition-colors hover:border-green"
            >
              <span className="display-heading text-5xl text-green-muted/40">
                0{i + 1}
              </span>
              <div>
                <h3 className="display-heading text-2xl text-cream">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
