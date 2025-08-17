import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hobbies } from "./components/Hobbies";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { WorkTimeline } from "./components/WorkTimeline";

function App() {
  return (
    <main className="bg-[#080807] text-white">
      <Navbar />
      <About />
      <WorkTimeline />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
    </main>
  );
}

export default App;
