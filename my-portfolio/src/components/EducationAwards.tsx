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
      className="min-h-[80vh] md:py-20 bg-[#080807] text-[#D1D1C7] px-4 sm:px-8 md:px-16 py-16"
    >
      <h2 className="sticky top-2 z-30 font-inconsolata font-bold text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] uppercase leading-[1] bg-[#080807] pb-4 mb-6 md:mb-8">
        Education & Honors
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:gap-16 max-w-8xl mx-auto">
        {/* Education */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 border-b border-gray-600 pb-2">
            Education
          </h3>
          <ul className="space-y-6 sm:space-y-8">
            {education.map((edu, idx) => (
              <li key={idx}>
                <h4 className="text-xl sm:text-2xl font-bold">{edu.degree}</h4>
                <p className="text-base sm:text-lg text-gray-400">
                  {edu.school}
                </p>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base">
                  {edu.details}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 border-b border-gray-600 pb-2">
            Honors & Awards
          </h3>
          <ul className="space-y-6 sm:space-y-8">
            {awards.map((award, idx) => (
              <li key={idx}>
                <h4 className="text-xl sm:text-2xl font-bold">
                  <a
                    href="https://www.dkit.ie/news/2024/software-development-student-selected-as-recipient-of-generation-google-scholarship-women"
                    target="_blank"
                    className="hover:text-[#716A63] transition-colors duration-300"
                  >
                    {award.title}{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </h4>
                <p className="text-sm sm:text-base text-gray-400">
                  {award.year}
                </p>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base">
                  {award.desc}
                </p>
              </li>
            ))}
          </ul>

          {/* Certificates */}
          <p className="text-2xl sm:text-3xl font-semibold border-b border-gray-600 pt-6 sm:pt-8 -mb-6 sm:-mb-8">
            Certificates
          </p>
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="https://www.linkedin.com/in/elgajerushahenry/details/certifications/"
              target="_blank"
              className="flex items-center gap-2 bg-[#D1D1C7] text-[#080807] px-4 py-3 sm:py-4 rounded-2xl font-semibold shadow transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-xl"
            >
              <span className="text-xl">🎓</span>
              <span className="text-sm sm:text-base">
                26+ Certificates{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
