import { Mail, Phone } from "lucide-react";
import { personal } from "../../data/resume";
import profilePhoto from "../../assets/photo/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-charcoal px-6 pb-16 pt-28 sm:px-10 sm:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start justify-between text-xs font-bold uppercase tracking-widest text-grey">
          <span>01</span>
          <span className="hidden sm:inline">@nithish.r</span>
        </div>

        <div className="relative mt-6">
          <h1 className="display-heading animate-fade-up select-none text-center text-[15vw] text-cream sm:text-[13vw] lg:text-[9rem]">
            Portfolio
          </h1>

          <div className="animate-fade-up pointer-events-none absolute inset-x-0 bottom-0 mx-auto flex justify-center">
            <img
              src={profilePhoto}
              alt={personal.name}
              className="photo-mono h-[38vw] max-h-80 w-auto object-contain sm:h-[26vw] lg:h-72"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 62% 78% at 50% 42%, black 55%, transparent 96%)",
                maskImage:
                  "radial-gradient(ellipse 62% 78% at 50% 42%, black 55%, transparent 96%)",
              }}
            />
          </div>
        </div>

        <div className="animate-fade-up mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="display-heading text-2xl text-cream sm:text-3xl">{personal.name}</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-grey">
              {personal.title}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-grey sm:items-end">
            <a
              href={`tel:${personal.phone}`}
              className="flex items-center gap-2 transition-colors hover:text-cream sm:flex-row-reverse"
            >
              <Phone size={13} />
              {personal.phone}
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 transition-colors hover:text-cream sm:flex-row-reverse"
            >
              <Mail size={13} />
              {personal.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
