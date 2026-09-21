import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import WhoIAm from "./components/sections/WhoIAm";
import SkillsTable from "./components/sections/SkillsTable";
import Education from "./components/sections/Education";
import AcademicProject from "./components/sections/AcademicProject";
import CareerInterests from "./components/sections/CareerInterests";
import ApproachJourney from "./components/sections/ApproachJourney";
import Contact from "./components/sections/Contact";
import { navSections } from "./data/sections";
import { useActiveSection } from "./hooks/useActiveSection";

const sectionIds = navSections.map((s) => s.id);

function App() {
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <WhoIAm />
        <SkillsTable />
        <Education />
        <AcademicProject />
        <CareerInterests />
        <ApproachJourney />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
