import { ArrowDown, Sparkle } from "lucide-react";
import Navbar from "../Navbar";
import { personal } from "../../data/resume";
import profilePhoto from "../../assets/photo/profile.jpg";

interface HeroProps {
  activeId: string;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero({ activeId }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-green pb-24">
      <Navbar activeId={activeId} variant="dark" />

      <div className="relative mx-auto max-w-6xl px-6 pt-6 sm:px-10">
        <div className="relative">
          <h1 className="section-heading select-none text-center text-[13vw] font-black uppercase leading-none text-cream sm:text-[9vw] lg:text-[7.5rem]">
            {personal.name.replace(".", "").split(" ")[0]}
          </h1>
          <p
            aria-hidden="true"
            className="section-heading pointer-events-none absolute inset-0 top-[0.85em] hidden select-none text-center text-[7.5rem] font-black uppercase leading-none text-transparent sm:block"
            style={{ WebkitTextStroke: "1px rgba(241,172,32,0.5)" }}
          >
            {personal.name.replace(".", "").split(" ")[0]}
          </p>
        </div>

        <div className="relative mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="relative w-full max-w-sm animate-fade-up">
            <Sparkle
              size={28}
              className="animate-sparkle absolute -left-6 -top-6 text-gold"
              fill="currentColor"
            />
            <div className="overflow-hidden rounded-lg bg-coral/40 shadow-card-lg">
              <img
                src={profilePhoto}
                alt={personal.name}
                className="aspect-[3/4] w-full object-cover mix-blend-multiply"
              />
            </div>
          </div>

          <div className="animate-fade-up flex max-w-xs flex-col gap-4 pb-4 text-sm leading-relaxed text-cream/85">
            <p>{personal.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {personal.focus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cream/25 px-3 py-1 text-xs font-semibold text-cream/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <button
          type="button"
          onClick={() => scrollToSection("about")}
          className="flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-full bg-gold text-center text-xs font-bold text-black shadow-card-lg transition-transform hover:-translate-y-1"
        >
          Scroll
          <span className="flex items-center gap-1">
            down <ArrowDown size={12} />
          </span>
        </button>
      </div>
    </section>
  );
}
