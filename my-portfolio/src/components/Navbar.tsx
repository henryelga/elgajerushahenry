import { useEffect, useState } from "react";

const sections = [
  "about",
  "experience",
  "education",
  "skills",
  "projects",
  "hobbies",
  "contact",
];

export const Navbar = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
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
    <nav className="fixed top-0 right-0 px-8 py-4 z-50">
      <div className="flex space-x-8">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`relative font-medium transition-colors ${
              active === id
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
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
