const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal site built with React & Tailwind.",
  },
  {
    title: "E-commerce App",
    desc: "Full-stack app with payments integration.",
  },
  { title: "AI Chatbot", desc: "Custom chatbot using NLP models." },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
