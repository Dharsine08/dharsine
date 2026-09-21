import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Certification from "./components/sections/Certification";
import Achievements from "./components/sections/Achievements";
import Strengths from "./components/sections/Strengths";
import Contact from "./components/sections/Contact";
import { navSections } from "./data/sections";
import { useActiveSection } from "./hooks/useActiveSection";

const sectionIds = navSections.map((s) => s.id);

function App() {
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="flex min-h-screen flex-col bg-bg lg:flex-row">
      <Sidebar activeId={activeId} />
      <div className="flex min-w-0 flex-1 flex-col">
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Education />
          <Certification />
          <Achievements />
          <Strengths />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
