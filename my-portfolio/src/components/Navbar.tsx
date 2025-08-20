import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "hobbies", label: "Hobbies" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById("experience");
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        setIsMobile(rect.top <= 80); // when experience comes into view
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isMobile && (
        <nav className="fixed top-0 right-0 px-8 py-4 z-50 text-[#171717]">
          <div className="flex space-x-8">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`relative font-medium transition-colors`}
              >
                {s.label}
                {s.id === "about" && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#393632] rounded"></span>
                )}
              </a>
            ))}
          </div>
        </nav>
      )}

      {/* Hamburger button (after experience section) */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(true)}
          className="fixed top-8 right-8 z-50 p-3 rounded-full bg-[#D1D1C7] text-[#080807] shadow-lg"
        >
          <Menu size={24} className="cursor-pointer" />
        </button>
      )}

      {/* Overlay Menu */}
      {/* Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-between backdrop-blur-lg bg-black/50 px-8 py-16"
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 text-white"
            >
              <X
                size={"3em"}
                className="p-3 rounded-full bg-[#D1D1C7] text-[#080807] shadow-lg cursor-pointer"
              />
              {/* Decorative bubbles */}
              <span className="absolute -top-[14em] -right-[15em] w-[38em] h-[38em] bg-[#716A63] rounded-full opacity-50"></span>
              <span className="absolute top-[3em] -right-[15em] w-[30em] h-[30em] bg-[#393632] rounded-full opacity-30"></span>
            </button>

            {/* Menu items */}
            <ul className="flex flex-col pt-[1%] gap-3 items-center text-5xl md:text-7xl uppercase font-bold text-[#D1D1C7]">
              {sections.map((s) => (
                <li key={s.id} className="group">
                  <a
                    href={`#${s.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="relative inline-block transition-colors duration-300 hover:text-[#716A63]"
                  >
                    {s.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#716A63] transition-all duration-300 ease-out group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Email (pushed to bottom by flex-col + justify-between) */}
            <div className="flex flex-col items-center gap-2 group mt-[2%]">
              <h4 className="text-lg md:text-xl font-bold uppercase text-gray-400">
                Email Address
              </h4>
              <div className="relative h-[1.5em] overflow-hidden">
                <a
                  href="mailto:elgajerushahenry@gmail.com"
                  className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2"
                >
                  <span className="text-base md:text-lg">
                    elgajerushahenry@gmail.com
                  </span>
                  <span className="text-base md:text-lg">
                    elgajerushahenry@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
