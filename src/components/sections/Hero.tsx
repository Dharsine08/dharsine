import { ArrowRight } from "lucide-react";
import { personal } from "../../data/resume";
import profilePhoto from "../../assets/photo/profile.jpg";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section id="home" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center bg-bg px-6 pb-16 pt-28 sm:px-10 lg:pt-24">
        <div className="animate-fade-up mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto lg:mr-0 lg:pr-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-text-soft">
            Hello, I'm
          </p>
          <h1 className="mt-2 text-5xl font-extrabold leading-[1.05] text-yellow sm:text-6xl">
            {personal.name}
          </h1>
          <p className="mt-4 text-lg font-semibold text-text sm:text-xl">{personal.title}</p>
          <p className="mt-5 leading-relaxed text-text-soft">{personal.intro}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("skills")}
              className="rounded-lg border-2 border-yellow px-6 py-3 text-sm font-bold uppercase tracking-wide text-yellow transition-colors hover:bg-yellow hover:text-bg"
            >
              View My Skills
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-2 rounded-lg bg-yellow px-6 py-3 text-sm font-bold uppercase tracking-wide text-bg transition-transform hover:-translate-y-0.5"
            >
              Contact Me
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative order-first flex items-end justify-center overflow-hidden bg-yellow lg:order-none">
        <img
          src={profilePhoto}
          alt={personal.name}
          className="h-[60vw] max-h-[420px] w-auto object-cover object-top sm:h-[45vw] lg:h-full lg:max-h-none lg:w-full"
        />
      </div>
    </section>
  );
}
