import { Compass } from "lucide-react";
import { useFadeIn } from "../../hooks/useFadeIn";
import { professionalJourney, strengths } from "../../data/resume";

export default function ApproachJourney() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-charcoal px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="display-heading text-4xl text-cream sm:text-5xl">My Approach</h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {strengths.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-grey"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="display-heading text-4xl text-cream sm:text-5xl">
              Professional Journey
            </h2>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-line bg-black p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green/20 text-green-muted">
                <Compass size={18} />
              </span>
              <p className="text-sm leading-relaxed text-grey">{professionalJourney}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
