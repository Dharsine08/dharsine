import { ArrowRight, Briefcase } from "lucide-react";
import { personal } from "../../data/resume";
import profilePhoto from "../../assets/photo/profile.jpg";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const floatingLabels = [
  { text: "MBA", position: "-left-4 top-8 sm:-left-8" },
  { text: "Marketing", position: "-right-2 top-4 sm:-right-6" },
  { text: "Digital", position: "-left-6 bottom-24 sm:-left-10" },
  { text: "Business", position: "-right-4 bottom-20 sm:-right-8" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-bg px-6 pt-28 pb-16 md:px-10 md:pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div className="animate-fade-up">
          <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-green">
            <span className="h-px w-6 bg-green" />
            Introducing
          </p>
          <h1 className="section-heading text-4xl leading-[1.08] text-text sm:text-5xl lg:text-6xl">
            Hello,
            <br />
            I'm <span className="text-green">{personal.firstName}</span>
          </h1>
          <p className="mt-4 text-base font-semibold text-text-soft sm:text-lg">
            {personal.title}
          </p>
          <p className="mt-5 max-w-lg leading-relaxed text-text-soft">
            {personal.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-yellow px-6 py-3 text-sm font-bold text-bg transition-transform hover:-translate-y-0.5 hover:shadow-card"
            >
              Contact Me
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("portfolio")}
              className="group flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-bold text-text transition-colors hover:border-green hover:text-green"
            >
              Explore My Portfolio
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs animate-fade-up sm:max-w-sm">
          <div className="glow-ring relative mx-auto aspect-square w-full rounded-full bg-gradient-to-br from-green/30 to-green/5 p-3">
            <div className="h-full w-full overflow-hidden rounded-full border-4 border-bg-soft bg-bg-card shadow-card-lg">
              <img
                src={profilePhoto}
                alt={`${personal.name} profile photo`}
                className="h-full w-full object-cover"
              />
            </div>

            {floatingLabels.map((label, i) => (
              <span
                key={label.text}
                className={`animate-float absolute ${label.position} flex items-center gap-1.5 rounded-full border border-line bg-bg-card px-3.5 py-2 text-xs font-bold text-text shadow-card`}
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <Briefcase size={12} className="text-green" />
                {label.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
