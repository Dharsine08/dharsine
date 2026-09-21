import { useFadeIn } from "../../hooks/useFadeIn";
import { aboutMe, careerInterests, personal } from "../../data/resume";
import profilePhoto from "../../assets/photo/profile.jpg";

export default function WhoIAm() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section id="about" className="bg-white px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-sm shadow-card-lg">
              <img
                src={profilePhoto}
                alt={personal.name}
                className="photo-mono aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-terracotta">
              {personal.title}
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-ink-soft">
              About Me
            </p>
            <h2 className="display-heading break-words text-4xl leading-[0.9] text-charcoal sm:text-6xl">
              Who <span className="serif-heading">I Am</span>
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-charcoal/85">{aboutMe}</p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {careerInterests.map((item) => (
                <div key={item.title} className="border-l-2 border-terracotta pl-3">
                  <p className="text-sm font-bold text-charcoal">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
