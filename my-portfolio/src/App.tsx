import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Timeline } from "./components/Timeline";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
