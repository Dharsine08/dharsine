import { ArrowRight, Download } from "lucide-react";
import { personal } from "../../data/resume";
import profilePhoto from "../../assets/photo/profile.jpg";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-paper px-6 pt-20 md:px-16 md:pt-8"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="animate-fade-up">
          <p className="mb-3 text-lg font-semibold text-ink-soft md:text-xl">
            HI THERE!
          </p>
          <h1 className="section-heading text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            I'M <span className="text-gold-dark">{personal.firstName}</span>
          </h1>
          <p className="mt-4 inline-block rounded-full bg-gold-soft px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-ink">
            {personal.title}
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft md:text-lg">
            {personal.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="group flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5 hover:shadow-card"
            >
              About Me
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("resume")}
              className="flex items-center gap-2 rounded-full border-2 border-ink bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5 hover:bg-ink hover:text-gold"
            >
              <Download size={16} />
              View My Resume
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up md:max-w-md">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gold-soft md:-inset-6" />
          <div className="overflow-hidden rounded-3xl border-4 border-ink/5 bg-paper-muted shadow-card-lg">
            <img
              src={profilePhoto}
              alt={`${personal.name} profile photo`}
              className="photo-mono aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 rounded-2xl bg-ink px-5 py-3 text-white shadow-card sm:-right-6">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gold">
              Focused on
            </p>
            <p className="text-sm font-bold">Business Management</p>
          </div>
        </div>
      </div>
    </section>
  );
}
