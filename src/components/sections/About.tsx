import { Mail, Phone } from "lucide-react";
import { aboutMe, personal } from "../../data/resume";
import profilePhoto from "../../assets/photo/profile.jpg";

export default function About() {
  return (
    <section id="about" className="bg-charcoal px-6 pb-20 pt-4 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: profile card */}
          <div className="animate-fade-up flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-xs -rotate-2 rounded-sm border-8 border-white bg-white shadow-card-lg">
              <img
                src={profilePhoto}
                alt={personal.name}
                className="aspect-[4/5] w-full object-cover"
              />
              <p className="section-heading px-2 pb-3 pt-2 text-center text-lg font-bold text-ink">
                {personal.name}
              </p>
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-gold">
              {personal.title}
            </p>
          </div>

          {/* Right: About + contact */}
          <div className="animate-fade-up">
            <h2 className="section-heading text-4xl text-white sm:text-5xl">
              Hello, I'm {personal.firstName}!
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-white/75">{aboutMe}</p>

            <div className="mt-8">
              <p className="section-heading mb-4 text-xl text-white">Contact</p>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${personal.phone}`}
                  className="flex w-fit items-center gap-3 text-sm text-white/85 transition-colors hover:text-gold"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-blue">
                    <Phone size={15} />
                  </span>
                  {personal.phone}
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex w-fit items-center gap-3 text-sm text-white/85 transition-colors hover:text-gold"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-blue">
                    <Mail size={15} />
                  </span>
                  {personal.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
