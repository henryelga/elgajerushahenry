"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "../data/projects";

/**
 * Projects Section
 *
 * Showcases projects with images, title, type, and description.
 * Includes sticky animated index for desktop; images adapt to screen size for mobile.
 */
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
      className="relative min-h-screen bg-[#080807] text-[#D1D1C7] px-4 sm:px-8 lg:px-16 py-16"
    >
      {/* Sticky Header */}
      <h2 className="sticky top-0 z-20 font-inconsolata font-bold text-[4rem] sm:text-[6rem] lg:text-[8rem] uppercase leading-[1] bg-[#080807] pb-4">
        Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-full">
        {/* LEFT: Sticky number */}
        <div className="lg:col-span-1 lg:block justify-center lg:justify-start items-center hidden">
          <div className="sticky top-[8rem] lg:top-[8rem] h-0">
            <div className="flex text-[6rem] sm:text-[8rem] lg:text-[16rem] font-bold leading-none">
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
        <div className="lg:col-span-3 space-y-[10vh]">
          {PROJECTS.map((p, idx) => (
            <div
              key={idx}
              ref={(el) => {
                projectRefs.current[idx] = el;
              }}
              className="group relative flex flex-col lg:flex-col"
            >
              {/* Number for mobile stacked view */}
              <div className="lg:hidden text-6xl font-bold text-[#D1D1C7] mb-4">
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
                  className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75 object-contain sm:object-contain lg:object-cover"
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
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#D1D1C7]">
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
