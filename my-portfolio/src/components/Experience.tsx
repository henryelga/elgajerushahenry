import { useRef } from "react";

const experiences = [
  {
    role: "RG & AML Agent",
    company: "QuinnBet · Part-time",
    location: "Ireland - Remote",
    period: "Sept 2025 - Present",
  },
  {
    role: "Software Developer",
    company: "ABB · Internship",
    location: "Dundalk, Ireland - On-site",
    period: "Jan 2025 - Sep 2025",
  },
  {
    role: "Information Technology Helpdesk Administrator",
    company: "BoyleSports · Part-time",
    location: "Dundalk, Ireland - On-site",
    period: "May 2023 - Jan 2025",
  },
  {
    role: "GDSC Core Team Member (Developer/Designer)",
    company: "Google Developer Student Clubs",
    period: "Sep 2023 - Sep 2024",
  },
  {
    role: "Product Developer Intern",
    company: "iMorph Innovation Center · Internship",
    location: "Chennai, India - Remote",
    period: "Jun 2021 - Aug 2021",
  },
];

// Helper function to calculate duration
const getDuration = (period: string) => {
  const [start, end] = period.split(" - ");
  if (!start || !end) return "";

  const startDate = new Date(start);
  const endDate = end.toLowerCase() === "present" ? new Date() : new Date(end);

  // Add 1 to include the starting month
  const diffMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;

  if (diffMonths < 12) return `(${diffMonths} mo${diffMonths > 1 ? "s" : ""})`;

  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  return `(${years} yr${years > 1 ? "s" : ""}${months ? ` ${months} mo` : ""})`;
};

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null); // ref for the section

  return (
    <section
      ref={containerRef} // attach ref here
      id="experience"
      className="min-h-[80vh] relative bg-[#080807] text-[#D1D1C7] rounded-t-[2rem] px-16 py-16"
    >
      <h2 className="sticky top-2 z-30 font-inconsolata font-bold text-[6rem] md:text-[8rem] uppercase leading-[1] bg-[#080807] pb-[.5em]">
        Experience
      </h2>

      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className={`bg-[#080807] grid grid-cols-4 gap-8 border-t border-gray-700 mb-8 px-8 pt-3 pb-3`}
        >
          <div className="col-span-1 py-1">
            <span className="block text-[2.5rem] font-semibold text-[#E8E8E3]">
              {exp.period}
            </span>
            <span className="block text-xl text-gray-400 mt-1">
              {getDuration(exp.period)}
            </span>
          </div>

          <div className="col-span-3 px-12">
            <h3 className="text-[3rem] font-bold" style={{ marginBottom: 0 }}>
              {exp.role}
            </h3>
            <p className="text-xl text-gray-400">{exp.company}</p>
            <p className="text-md text-gray-500">{exp.location}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
