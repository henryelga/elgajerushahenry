const projects = [
  {
    title: "Picnet",
    desc: "Social media platform with user authentication, CRUD features, and database management.",
    link: "https://github.com/henryelga/Picnet",
  },
  {
    title: "BookBuzz",
    desc: "Book review & blog platform with author lookup, search, and random quotes integration.",
    link: "https://github.com/henryelga/bookBuzz",
  },
  {
    title: "Start IT: Erasmus+ Project",
    desc: "EU project app prototype focused on sustainability and green environment solutions.",
    link: "#", // no GitHub link provided
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gray-100 text-gray-900"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {projects.map((p, idx) => (
          <a
            key={idx}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p>{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};
