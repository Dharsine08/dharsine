import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import CareerProfile from "./components/sections/CareerProfile";
import Strengths from "./components/sections/Strengths";
import LanguagesDetails from "./components/sections/LanguagesDetails";
import Contact from "./components/sections/Contact";
import { navSections } from "./data/sections";
import { useActiveSection } from "./hooks/useActiveSection";

const sectionIds = navSections.map((s) => s.id);

function App() {
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Education />
        <CareerProfile />
        <Strengths />
        <LanguagesDetails />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
