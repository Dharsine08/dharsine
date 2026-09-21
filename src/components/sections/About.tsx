import { Megaphone, Users, Briefcase, MessageCircle, Download } from "lucide-react";
import { highlightCards, whyWorkWithMe } from "../../data/resume";

const icons = [Megaphone, Users, Briefcase, MessageCircle];

export default function About() {
  return (
    <section id="about" className="bg-bg-soft px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3">
            {highlightCards.map((card, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={card.title}
                  className="group rounded-2xl border border-line bg-bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-green/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-dim text-green">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-bold text-text">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-soft">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
              My Profile
            </p>
            <h2 className="section-heading mt-2 text-3xl text-text sm:text-4xl">
              Why Work With Me?
            </h2>
            <p className="mt-5 leading-relaxed text-text-soft">{whyWorkWithMe}</p>

            <a
              href="/resume/Franklin_S_Resume.pdf"
              download
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3 text-sm font-bold text-bg transition-transform hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
