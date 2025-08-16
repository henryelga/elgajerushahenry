import { useEffect, useState } from "react";

const sections = [
  "about",
  "experience",
  "skills",
  "projects",
  "hobbies",
  "contact",
];

export const Navbar = () => {
  const [active, setActive] = useState("about");

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // add offset for header height
      for (const id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
      <div className="max-w-5xl mx-auto flex justify-center space-x-8 py-4">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`relative text-gray-700 font-medium transition-colors ${
              active === id ? "text-blue-600" : "hover:text-blue-600"
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
            {active === id && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 rounded"></span>
            )}
          </a>
        ))}
      </div>
    </nav>
  );
};
