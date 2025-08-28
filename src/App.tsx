import "@fortawesome/fontawesome-free/css/all.min.css";

import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hobbies } from "./components/sections/Hobbies";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { EducationAwards } from "./components/sections/EducationAwards";

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
