"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Picnet",
    image: "",
    desc: "Social media platform with user authentication, CRUD features, and database management.",
    link: "https://github.com/henryelga/Picnet",
  },
  {
    title: "BookBuzz",
    image: "",
    desc: "Book review & blog platform with author lookup, search, and random quotes integration.",
    link: "https://github.com/henryelga/bookBuzz",
  },
  {
    title: "Start IT: Erasmus+ Project",
    image: "",
    desc: "EU project app prototype focused on sustainability and green environment solutions.",
    link: "#", // no GitHub link provided
  },
  {
    title: "Another Project",
    image: "",
    desc: "EU project app prototype focused on sustainability and green environment solutions.",
    link: "#", // no GitHub link provided
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
      className="relative min-h-screen bg-[#080807] text-[#D1D1C7] px-16"
    >
      {/* Sticky Header */}
      <h2 className="sticky top-0 z-50 font-inconsolata font-bold text-[6rem] md:text-[8rem] uppercase leading-[1] bg-[#080807] pb-4">
        Projects
      </h2>

      <div className="grid grid-cols-4 gap-8 max-w-full">
        {/* LEFT: Sticky number */}
        <div className="col-span-1">
          <div className="sticky top-[8rem] h-0">
            <div className="flex text-[16rem] font-bold leading-none">
              <span>0</span>

              {/* Slot-machine style animation */}
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
        <div className="col-span-3 space-y-[10vh]">
          {projects.map((p, idx) => (
            <div
              key={idx}
              ref={(el) => {
                projectRefs.current[idx] = el;
              }}
              className="h-[70vh] flex items-center justify-center bg-[#D1D1C7] text-[#080807] rounded-2xl shadow-lg overflow-hidden relative"
            >
              <img
                src={p.image}
                alt={p.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-8 left-8 text-2xl font-semibold">
                {p.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
