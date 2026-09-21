import Sidebar from "./components/Sidebar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Resume from "./components/sections/Resume";
import Skills from "./components/sections/Skills";
import Portfolio from "./components/sections/Portfolio";
import Achievements from "./components/sections/Achievements";
import Interests from "./components/sections/Interests";
import Contact from "./components/sections/Contact";
import { navSections } from "./data/sections";
import { useActiveSection } from "./hooks/useActiveSection";

const sectionIds = navSections.map((s) => s.id);

function App() {
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-paper">
      <Sidebar activeId={activeId} />
      <main className="pt-14 md:pt-0 md:ml-[220px]">
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Portfolio />
        <Achievements />
        <Interests />
        <Contact />
      </main>
    </div>
  );
}

export default App;
