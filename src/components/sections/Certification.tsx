import { Award } from "lucide-react";
import { certification } from "../../data/resume";

export default function Certification() {
  return (
    <section className="bg-bg px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-line bg-bg-card p-8 shadow-card-lg sm:flex-row sm:items-center sm:p-10">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-dim text-green">
            <Award size={30} />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-heading text-xl font-bold text-text">
                {certification.title}
              </h3>
              <span className="rounded-full bg-green-dim px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-green">
                {certification.status}
              </span>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-soft">
              {certification.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
