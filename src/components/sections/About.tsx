import { Mail, MapPin, Phone, Search } from "lucide-react";
import Navbar from "../Navbar";
import { aboutMe, languages, personal } from "../../data/resume";
import profilePhoto from "../../assets/photo/profile.jpg";

interface AboutProps {
  activeId: string;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function About({ activeId }: AboutProps) {
  return (
    <section id="about" className="bg-cream">
      <Navbar activeId={activeId} variant="light" />

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-6 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="animate-fade-up">
            <h2 className="section-heading text-5xl leading-[1.05] text-ink sm:text-6xl">
              Hello,
              <br />
              I'm {personal.firstName}!
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink-soft">{aboutMe}</p>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="mt-8 flex w-fit items-center gap-3 rounded-full bg-coral px-6 py-3.5 text-sm font-bold text-white shadow-card transition-transform hover:-translate-y-0.5"
            >
              <Search size={16} />
              Get in touch
            </button>
          </div>

          <div className="relative mx-auto mb-20 w-full max-w-xs animate-fade-up sm:mb-16 sm:max-w-sm">
            <div className="absolute -inset-x-6 top-8 bottom-8 -z-10 rounded-lg bg-green" />
            <div className="overflow-hidden rounded-lg shadow-card-lg">
              <img
                src={profilePhoto}
                alt={personal.name}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>

            {languages[0] && (
              <span className="absolute -right-4 top-10 rounded-full bg-gold px-4 py-2 text-xs font-bold text-black shadow-card sm:right-[-2rem]">
                {languages[0]}
              </span>
            )}

            <div className="absolute -bottom-8 left-1/2 w-[calc(100%+2rem)] -translate-x-1/2 rounded-xl bg-black p-5 text-white shadow-card-lg sm:w-[110%]">
              <p className="section-heading mb-3 text-lg font-bold">Contact</p>
              <div className="flex flex-col gap-2 text-xs text-white/80">
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className="flex items-center gap-2 hover:text-white">
                  <MapPin size={13} className="text-gold" />
                  {personal.location}
                </a>
                <a href={`mailto:${personal.email}`} className="flex items-center gap-2 hover:text-white">
                  <Mail size={13} className="text-gold" />
                  <span className="break-all">{personal.email}</span>
                </a>
                <a href={`tel:${personal.phone}`} className="flex items-center gap-2 hover:text-white">
                  <Phone size={13} className="text-gold" />
                  {personal.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
