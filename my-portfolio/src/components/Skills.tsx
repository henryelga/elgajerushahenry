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
    <section id="skills" className="min-h-screen py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="max-w-5xl mx-auto space-y-8">
        {Object.entries(skills).map(([category, skillList], idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillList.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
