import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Resume from "./components/sections/Resume";
import Skills from "./components/sections/Skills";
import FeaturedProject from "./components/sections/FeaturedProject";
import Portfolio from "./components/sections/Portfolio";
import Certification from "./components/sections/Certification";
import WhatIBring from "./components/sections/WhatIBring";
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
        <Resume />
        <Skills />
        <FeaturedProject />
        <Portfolio />
        <Certification />
        <WhatIBring />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
