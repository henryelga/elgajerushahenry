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
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="min-h-screen relative bg-[#080807] text-[#D1D1C7] rounded-t-[2rem] px-4 sm:px-8 md:px-16 py-16"
    >
      <h2 className="sticky top-2 z-30 font-inconsolata font-bold text-[4rem] sm:text-[6rem] md:text-[8rem] uppercase leading-[1] bg-[#080807] pb-[.5em]">
        Experience
      </h2>

      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="bg-[#080807] grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8 border-t border-gray-700 mb-8 px-4 sm:px-8 pt-3 pb-3"
        >
          {/* Desktop: Period */}
          <div className="sm:col-span-1 py-1 hidden sm:block">
            <span className="block text-[2.5rem] font-semibold text-[#E8E8E3]">
              {exp.period}
            </span>
            <span className="block text-xl text-gray-400 mt-1">
              {getDuration(exp.period)}
            </span>
          </div>

          {/* Role & Company */}
          <div className="sm:col-span-3 sm:px-12">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1">
              {exp.role}
            </h3>
            <p className="text-lg sm:text-xl text-gray-400">{exp.company}</p>
            {exp.location && (
              <p className="text-base sm:text-md text-gray-500">
                {exp.location}
              </p>
            )}

            {/* Mobile: Period & Duration under role */}
            <div className="block sm:hidden mt-2">
              <span className="block text-base font-semibold text-[#E8E8E3]">
                {exp.period}
              </span>
              <span className="block text-sm text-gray-400">
                {getDuration(exp.period)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
