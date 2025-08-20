export const EducationAwards = () => {
  const education = [
    {
      degree: "B.Sc. (Hons) Computing in Software Development",
      school: "Dundalk Institute of Technology, Ireland",
      details: "2022 - Present",
    },
    {
      degree: "High School",
      school: "MCC Campus Matric. Hr. Sec. School",
      details: "2020 - 2022",
    },
  ];

  const awards = [
    {
      title: "Generation Google Scholarship: Women in Computer Science",
      year: "Issued by Google · Sep 2024",
      desc: `Selected as one of only 11 recipients in Ireland for the prestigious Generation Google Scholarship, 
      recognizing academic excellence, passion for computer science, and commitment to diversity in tech. 
      This award includes financial support, access to exclusive Google workshops, and career mentorship opportunities.`,
    },
  ];

  return (
    <section
      id="education"
      className="min-h-[80vh] py-20 bg-[#080807] text-[#D1D1C7] px-16"
    >
      <h2 className="sticky top-2 z-30 font-inconsolata font-bold text-[6rem] md:text-[8rem] uppercase leading-[1] bg-[#080807] pb-[.5em] mb-[.8em]">
        Education & Honors
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-8xl mx-auto">
        {/* Education */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 border-b border-gray-600 pb-2">
            Education
          </h3>
          <ul className="space-y-8">
            {education.map((edu, idx) => (
              <li key={idx}>
                <h4 className="text-2xl font-bold">{edu.degree}</h4>
                <p className="text-lg text-gray-400">{edu.school}</p>
                <p className="mt-2">{edu.details}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 border-b border-gray-600 pb-2">
            Honors & Awards
          </h3>
          <ul className="space-y-8">
            {awards.map((award, idx) => (
              <li key={idx}>
                <h4 className="text-2xl font-bold">{award.title}</h4>
                <p className="text-lg text-gray-400">{award.year}</p>
                <p className="mt-2">{award.desc}</p>
              </li>
            ))}
          </ul>
          {/* Badge */}
          <div className="mt-12 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/elgajerushahenry/details/certifications/"
              target="_blank"
              className="flex items-center gap-2 bg-[#D1D1C7] text-[#080807] px-4 py-2 rounded-2xl font-semibold shadow h-[4em] transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-xl"
            >
              <span className="text-xl">🎓</span>
              <span>26+ Certificates ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
