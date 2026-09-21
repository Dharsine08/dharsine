import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Services from "./components/sections/Services";
import EducationStrengths from "./components/sections/EducationStrengths";
import Contact from "./components/sections/Contact";
import { navSections } from "./data/sections";
import { useActiveSection } from "./hooks/useActiveSection";

const sectionIds = navSections.map((s) => s.id);

function App() {
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-bg">
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <EducationStrengths />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
