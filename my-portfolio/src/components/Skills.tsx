const skills = ["React", "TypeScript", "Node.js", "TailwindCSS", "SQL"];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-gray-800 rounded-lg shadow hover:bg-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
