import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hobbies } from "./components/Hobbies";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { EducationAwards } from "./components/EducationAwards";

function App() {
  return (
    <main className="bg-[#080807] text-white">
      <Navbar />
      <About />
      <Experience />
      <EducationAwards />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
    </main>
  );
}

export default App;
