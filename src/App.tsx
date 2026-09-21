import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import WhoIAm from "./components/sections/WhoIAm";
import SelectedProjects from "./components/sections/SelectedProjects";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import InterestsBring from "./components/sections/InterestsBring";
import Contact from "./components/sections/Contact";
import { navSections } from "./data/sections";
import { useActiveSection } from "./hooks/useActiveSection";

const sectionIds = navSections.map((s) => s.id);

function App() {
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <WhoIAm />
        <SelectedProjects />
        <Skills />
        <Education />
        <Certifications />
        <InterestsBring />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
