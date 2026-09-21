import { ArrowRight } from "lucide-react";
import { personal } from "../../data/resume";
import profilePhoto from "../../assets/photo/profile.jpg";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream px-6 pb-16 pt-28 sm:px-10 sm:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-1 text-xs font-bold uppercase tracking-widest text-ink-soft sm:flex-row sm:items-start sm:justify-between">
          <span className="min-w-0">{personal.labels.join(" • ")}</span>
          <span className="hidden sm:inline">Available for Opportunities</span>
        </div>

        <div className="relative mt-6">
          <h1 className="display-heading animate-fade-up select-none text-center text-[15vw] text-charcoal sm:text-[13vw] lg:text-[9rem]">
            Portfolio
          </h1>

          <div className="animate-fade-up pointer-events-none absolute inset-x-0 bottom-0 mx-auto flex justify-center">
            <img
              src={profilePhoto}
              alt={personal.name}
              className="photo-mono h-[36vw] max-h-72 w-auto object-contain sm:h-[24vw] lg:h-64"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 60% 78% at 50% 40%, black 55%, transparent 96%)",
                maskImage:
                  "radial-gradient(ellipse 60% 78% at 50% 40%, black 55%, transparent 96%)",
              }}
            />
          </div>
        </div>

        <div className="animate-fade-up mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-terracotta">
              Hello, I'm
            </p>
            <h2 className="display-heading mt-1 text-3xl text-charcoal sm:text-4xl">
              {personal.name}
            </h2>
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-ink-soft">
              MBA Finance &amp; Marketing
            </p>
            <p className="mt-3 max-w-sm text-sm italic text-ink-soft">
              &ldquo;{personal.tagline}&rdquo;
            </p>
          </div>

          <div className="sm:text-right">
            <p className="max-w-sm text-sm leading-relaxed text-charcoal sm:ml-auto">
              {personal.intro}
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("portfolio")}
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-bold text-cream transition-transform hover:-translate-y-0.5"
            >
              Explore My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
