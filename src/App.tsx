import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import ResumeBlock from "./components/sections/ResumeBlock";
import Projects from "./components/sections/Projects";
import Certification from "./components/sections/Certification";
import Strengths from "./components/sections/Strengths";
import LanguagesAchievements from "./components/sections/LanguagesAchievements";
import Contact from "./components/sections/Contact";
import { navSections } from "./data/sections";
import { useActiveSection } from "./hooks/useActiveSection";

const sectionIds = navSections.map((s) => s.id);

function App() {
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-cream">
      <main>
        <Hero activeId={activeId} />
        <About activeId={activeId} />
        <ResumeBlock />
        <Projects />
        <Certification />
        <Strengths />
        <LanguagesAchievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
