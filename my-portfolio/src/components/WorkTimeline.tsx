const experiences = [
  {
    role: "RG & AML Agent",
    company: "QuinnBet · Part-time",
    location: "Ireland - Remote",
    period: "Sept 2025 - Present",
    description: "",
  },
  {
    role: "Software Developer",
    company: "ABB · Internship",
    location: "Dundalk, Ireland - On-site",
    period: "Jan 2025 - Sep 2025",
    description: `- Contributed to the development and migration of QMS software to a web-based platform, ensuring cross-device compatibility (desktop and tablet).
- Gained full-stack development experience, collaborating on both client-side and server-side tasks to improve tool stability, usability, and performance.
- Raised and reviewed pull requests, ensuring code quality and consistency across the development team.
- Participated in code reviews with teammates, providing feedback on best practices, identifying potential issues, and ensuring high-quality, maintainable code
- Worked on the Scanner Diagnostic Tool (SDT), implementing improvements in API structure, reconnection logic, and UI responsiveness.
- Involved in testing and bug identification, prioritizing high-severity issues to improve tool functionality.
- Helped develop and test features across multiple Platform Engineering Tools, including NP SWS, PCT, and Platform Debug Tool, focusing on system stability and usability.
- Demonstrated proactive problem-solving by handling blockers independently and improving time/task management in a fast-paced environment.
- Took initiative on high-priority tasks, fixing bugs, and improved system reliability and performance.
- Collaborated effectively in team meetings and contributed to sprint planning, task prioritization, and team discussions.`,
  },
  {
    role: "Information Technology Helpdesk Administrator",
    company: "BoyleSports · Part-time",
    location: "Dundalk, Ireland - On-site",
    period: "May 2023 - Jan 2025",
    description: `- Provided first-line support for all hardware, software, and network issues.
- Troubleshooted problems to determine severity, and priority and follow through to resolution.
- Created and maintained knowledge base and problem resolution documentation as required.
- Responsible for working with third-party service providers to ensure end-to-end support is 
maintained as required.
- Escalated IT issues to the Development, Network, or Systems teams where necessary
- Supported queries on websites and main betting platform applications
- Responsible for support of peripheral devices such as printers, biometrics, etc.
- Experience with Office 365 applications, Citrix, Active Directory, Avaya phone systems, Microsoft 
Windows
- Responsible for support of on-site and remote users across multiple locations.
- Responsible for EPOS/Screens support across Retail estate of over 350 sites across the UK and Ireland.
- Responsible for completing new starter and leaver requests within SLA.`,
  },
  {
    role: "GDSC Core Team Member (Developer/Designer)",
    company: "Google Developer Student Clubs",
    period: "Sep 2023 - Sep 2024",
    description: `- Collaborated with a team of students to organize and facilitate GDSC events, workshops, and hackathons.
- Created presentations and posters to promote GDSC events and engage the community.
- Contributed to GDSC community growth through active participation in meetings, discussions, fostering collaborations`,
  },
  {
    role: "Product Developer Intern",
    company: "iMorph Innovation Center · Internship",
    location: "Chennai, India - Remote",
    period: "Jun 2021 - Aug 2021",
    description: `- Learned and used Python, JavaScript for developing the product prototypes
- Worked with front end frameworks like Svelte (a React like JavaScript framework) and Python notebooks (Jupyter)
- Developed TA-Svelte-App ( A simple Twitter Assistant frontend using Svelte )
- Developed a Google Chrome Extension to scan a page and display a set of keywords using an internal API
- Developed a dashboard using Voila and Jupyter notebooks
- Developed a Covid-19-Dashboard (dashboard created using ipynb widgets)
- Maintained a read log and a learn log during the development process`,
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

export const WorkTimeline = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 bg-[#1a1a1a] text-white/90"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Work Experience</h2>

      <div className="max-w-5xl mx-auto">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex items-start mb-12">
            {/* Left side - Year & Duration */}
            <div className="w-1/4 text-right pr-6 flex flex-col justify-start mt-2 relative">
              <span className="text-lg font-semibold text-gray-400">
                {exp.period}
              </span>
              <span className="text-xs text-gray-500 mt-1">
                {getDuration(exp.period)}
              </span>

              {/* Timeline line with dots */}
              <div className="absolute top-0 right-0 h-full flex flex-col items-center">
                <div className="w-1 bg-gray-600 flex-1"></div>
                <span className="w-3 h-3 bg-blue-500 rounded-full mt-0.5 mb-0.5"></span>
                <div className="w-1 bg-gray-600 flex-1"></div>
              </div>
            </div>

            {/* Right side - Details */}
            <div className="w-3/4 pl-6">
              <div className="bg-[#222222] p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-med text-gray-400 mt-1">{exp.company}</p>
                <p className="text-xs text-gray-500 mt-0.5">{exp.location}</p>

                {/* Description as bullet points */}
                {exp.description && (
                  <ul className="mt-3 text-gray-300 space-y-1">
                    {exp.description.split("\n- ").map((point, i) => {
                      if (!point.trim()) return null;
                      return (
                        <li
                          key={i}
                          className="before:content-['-'] before:mr-2 before:text-blue-500"
                        >
                          {point.replace(/^- /, "")}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
