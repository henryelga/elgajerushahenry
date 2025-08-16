import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Hobbies } from "./components/Hobbies";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { WorkTimeline } from "./components/WorkTimeline";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WorkTimeline />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
    </>
  );
}

export default App;
