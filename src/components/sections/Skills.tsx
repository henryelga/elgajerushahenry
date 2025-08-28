import { useState } from "react";
import { SKILLS } from "../data/skills";

/**
 * Skills Section
 *
 * Categorizes technical and other skills with an interactive hover scroll effect.
 * On mobile, each category can be expanded/collapsed like a dropdown.
 */
export const Skills = () => {
  // Track open/closed state for each category
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    {}
  );

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#080807] text-[#D1D1C7] px-4 sm:px-8 md:px-16 py-16"
    >
      {/* Heading */}
      <h2 className="sticky top-0 z-30 font-inconsolata font-bold text-[6rem] md:text-[8rem] uppercase leading-[1] bg-[#080807] pb-4">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16 max-w-7xl mx-auto">
        {Object.entries(SKILLS).map(([category, skillList], idx) => (
          <div key={idx} className="flex flex-col space-y-1">
            {/* Category title */}
            <h3
              className="text-xl md:text-2xl font-bold border-b border-gray-700 cursor-pointer md:cursor-auto flex justify-between items-center"
              onClick={() => toggleCategory(category)}
            >
              {category}
              {/* Show toggle arrow only on mobile */}
              <span className="md:hidden">
                {openCategories[category] ? "▲" : "▼"}
              </span>
            </h3>

            {/* Skills list */}
            <ul
              className={`overflow-hidden transition-all duration-500 ease-in-out
                ${!openCategories[category] && "max-h-0 md:max-h-none"} 
              `}
            >
              {skillList.map((skill, i) => (
                <li
                  key={i}
                  className="relative h-[2rem] overflow-hidden px-3 py-1 text-md group"
                >
                  <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2 cursor-default">
                    <div>{skill}</div>
                    <div>{skill}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
