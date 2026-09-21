import { Download, Mail } from "lucide-react";
import { useFadeIn } from "../../hooks/useFadeIn";
import { personal } from "../../data/resume";
import profilePhoto from "../../assets/photo/profile.jpg";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function About() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section id="about" className="bg-bg-soft px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-sm lg:mx-0">
            <div className="rounded-lg border-4 border-yellow p-2">
              <img
                src={profilePhoto}
                alt={personal.name}
                className="aspect-[4/5] w-full rounded object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-text sm:text-4xl">
              About <span className="text-yellow">Me</span>
            </h2>
            <span className="mt-3 block h-1 w-16 rounded-full bg-yellow" />
            <p className="mt-6 leading-relaxed text-text-soft">{personal.intro}</p>
            <p className="mt-4 leading-relaxed text-text-soft">
              A {personal.qualification} graduate with a genuine interest in
              technology, office tools, and business software — and a strong
              willingness to keep learning and growing professionally.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-2 rounded-lg bg-yellow px-6 py-3 text-sm font-bold uppercase tracking-wide text-bg transition-transform hover:-translate-y-0.5"
              >
                <Mail size={15} />
                Contact Me
              </button>
              <a
                href="/resume/Balaji_Resume.pdf"
                download
                className="flex items-center gap-2 rounded-lg border-2 border-yellow px-6 py-3 text-sm font-bold uppercase tracking-wide text-yellow transition-colors hover:bg-yellow hover:text-bg"
              >
                <Download size={15} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
