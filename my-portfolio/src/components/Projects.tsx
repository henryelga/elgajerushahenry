"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Posture Pal",
    image: "public/projects/posturePal.png",
    desc: "Progressive Web App (PWA) that helps students and professionals maintain proper posture and improve overall health.",
    type: "Group Project",
    link: "https://github.com/Posture-Pal",
  },
  {
    title: "Picnet",
    image: "public/projects/picnet.png",
    desc: "Social media platform with authentication, CRUD features, and database integration.",
    type: "Pair Project",
    link: "https://github.com/henryelga/Picnet",
  },
  {
    title: "Smart Light System",
    image: "public/projects/smartLightSystem.png",
    desc: "IoT application that automates lighting controls with sensors and provides live monitoring via a web interface.",
    type: "Individual Project",
    link: "https://github.com/henryelga/SmartLightSystem",
  },
  {
    title: "BookBuzz",
    image: "public/projects/bookBuzz.png",
    desc: "Book review and blog platform with author lookup, search, and random quotes integration.",
    type: "Individual Project",
    link: "https://github.com/henryelga/bookBuzz",
  },
  {
    title: "Eco Wise (Start IT: Erasmus+)",
    image: "public/projects/ecoWise.png",
    desc: "Prototype app for sustainable smart homes, enabling users to control electronic devices and set energy-saving limits.",
    type: "Group Project",
    link: "https://www.linkedin.com/posts/elgajerushahenry_erasmus-startit-dkit-activity-7181616991676301313-uA0L?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvvhN8BbHboSPkSuZ5xq_gOtUo9AP3wICo",
  },
];

export const Projects = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    projectRefs.current.forEach((el, idx) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(idx);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#080807] text-[#D1D1C7] px-4 sm:px-8 md:px-16 py-16"
    >
      {/* Sticky Header */}
      <h2 className="sticky top-0 z-20 font-inconsolata font-bold text-[4rem] sm:text-[6rem] md:text-[8rem] uppercase leading-[1] bg-[#080807] pb-4">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-full">
        {/* LEFT: Sticky number */}
        <div className="md:col-span-1 md:block justify-center md:justify-start items-center hidden">
          <div className="sticky top-[8rem] md:top-[8rem] h-0">
            <div className="flex text-[6rem] sm:text-[8rem] md:text-[16rem] font-bold leading-none">
              <span>0</span>

              {/* Slot-machine animation */}
              <div className="relative w-[1ch] h-[1em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ y: "75%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-75%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                  >
                    {activeIndex + 1}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Projects */}
        <div className="md:col-span-3 space-y-[10vh]">
          {projects.map((p, idx) => (
            <div
              key={idx}
              ref={(el) => {
                projectRefs.current[idx] = el;
              }}
              className="group relative flex flex-col md:flex-col"
            >
              {/* Number for mobile stacked view */}
              <div className="md:hidden text-6xl font-bold text-[#D1D1C7] mb-4">
                0{idx + 1}
              </div>

              {/* Image wrapper */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75 object-contain sm:object-contain md:object-cover"
                />
                {/* Bubble cursor */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-24 h-24 rounded-full bg-[#080807]/70 flex items-center justify-center text-[#D1D1C7] text-sm font-semibold">
                    View
                  </div>
                </div>
              </a>

              {/* Project Title + Description */}
              <div className="mt-4 text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D1D1C7]">
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 italic">
                  {p.type}
                </p>
                <p className="mt-2 text-gray-400 text-sm sm:text-base">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
