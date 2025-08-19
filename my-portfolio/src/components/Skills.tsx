const skills = {
  Languages: [
    "C#",
    "TypeScript",
    "JavaScript",
    "Java",
    "C++",
    "Python",
    "PHP",
    "HTML",
    "CSS",
    "SCSS",
    "SQL",
    "MySQL",
  ],
  "Frameworks & Libraries": [
    ".NET Framework",
    "ASP.NET",
    "ASP.NET MVC",
    "React.js",
    "React Native",
    "Svelte",
    "GatsbyJS",
    "Flask",
    "Laravel",
    "Bootstrap",
    "XAMPP",
  ],
  "Tools & Platforms": [
    "Git",
    "GitHub",
    "GitHub Copilot",
    "Visual Studio Code",
    "Visual Studio",
    "Docker",
    "Azure DevOps Services",
    "Figma",
    "Canva",
  ],
  "Testing & Quality": [
    "NUnit",
    "Jest",
    "Playwright",
    "Test Planning",
    "Debugging",
    "Fixing Bugs",
    "Code Review",
  ],
  "Software Development Practices": [
    "API Development",
    "Web Applications",
    "Software Prototyping",
    "Developer Documentation",
    "Project Understanding",
    "Technical Requirements",
    "Product Requirements",
  ],
  "Soft Skills": [
    "Problem Solving",
    "Creative Problem Solving",
    "Teamwork",
    "Communication",
    "Time Management",
    "Attention to Detail",
    "Fast Learner",
  ],
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#080807] text-[#D1D1C7] px-16 pt-16 pb-32"
    >
      {/* Heading */}
      <h2 className="sticky top-0 z-30 font-inconsolata font-bold text-[6rem] md:text-[8rem] uppercase leading-[1] bg-[#080807] pb-4">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16 max-w-7xl mx-auto">
        {Object.entries(skills).map(([category, skillList], idx) => (
          <div key={idx} className="flex flex-col space-y-4">
            {/* Category title */}
            <h3 className="text-xl md:text-2xl font-bold border-b border-gray-700 pb-2">
              {category}
            </h3>

            {/* Skills listed vertically */}
            <ul>
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
