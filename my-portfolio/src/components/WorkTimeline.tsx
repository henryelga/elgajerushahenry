const experiences = [
  {
    role: "AML & Responsible Gambling Analyst",
    company: "QuinnBet",
    period: "2025 - Present",
    description:
      "Part-time night shift role ensuring compliance with AML and RG regulations, analyzing transactions and player behavior.",
  },
  {
    role: "IT Helpdesk Administrator",
    company: "Previous Company",
    period: "2022 - 2023",
    description:
      "Provided technical support, resolved hardware/software issues, and managed user accounts in an enterprise environment.",
  },
  {
    role: "Software Developer (Intern)",
    company: "Startup",
    period: "2021",
    description:
      "Developed web applications with React and Node.js, collaborated with a small team on feature implementation.",
  },
];

export const WorkTimeline = () => {
  return (
    <section id="experience" className="py-20 bg-white text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">Work Experience</h2>

      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-4 border-blue-600">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-10 ml-6">
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 border border-white"></div>

              {/* Card */}
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold">
                  {exp.role} –{" "}
                  <span className="text-blue-600">{exp.company}</span>
                </h3>
                <span className="block text-sm text-gray-500 mb-2">
                  {exp.period}
                </span>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
