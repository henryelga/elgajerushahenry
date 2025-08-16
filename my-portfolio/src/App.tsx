import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { WorkTimeline } from "./components/WorkTimeline";

function App() {
  return (
    <>
      <Hero />
      <About />
      <WorkTimeline />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
