import { Download } from "lucide-react";
import { personal } from "../../data/resume";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-36 items-center bg-gradient-to-r from-blue to-blue-deep px-6 py-10 pt-20 sm:px-10 lg:pt-10"
    >
      <div className="mx-auto w-full max-w-4xl animate-fade-up text-white">
        <h1 className="section-heading text-3xl uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {personal.name}
        </h1>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/85 sm:text-base">
          {personal.title}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
          {personal.intro}
        </p>
        <a
          href="/resume/Dharsine_S_Resume.pdf"
          download
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-blue transition-transform hover:-translate-y-0.5"
        >
          <Download size={16} />
          Download Resume
        </a>
      </div>
    </section>
  );
}
