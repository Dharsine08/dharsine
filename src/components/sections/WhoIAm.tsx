import { useFadeIn } from "../../hooks/useFadeIn";
import { aboutMe, personal } from "../../data/resume";
import profilePhoto from "../../assets/photo/profile.png";

export default function WhoIAm() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section id="about" className="bg-green px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-cream/70">
          About Me
        </p>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="display-heading text-[16vw] leading-[0.85] text-cream sm:text-8xl lg:text-9xl">
              Who I Am
            </h2>
          </div>
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-sm bg-black/10 shadow-card-lg">
              <img
                src={profilePhoto}
                alt={personal.name}
                className="photo-mono aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg">
          {aboutMe}
        </p>
      </div>
    </section>
  );
}
