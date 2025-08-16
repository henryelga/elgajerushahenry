interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2023",
    role: "Software Developer",
    company: "XYZ Corp",
    description: "Worked on frontend web apps using React and TypeScript.",
  },
  {
    year: "2022",
    role: "IT Helpdesk Administrator",
    company: "ABC Ltd",
    description: "Managed IT support tickets and maintained internal systems.",
  },
];

export const Timeline = () => {
  return (
    <section className="py-20 px-10">
      <h2 className="text-3xl font-bold mb-10">Experience Timeline</h2>
      <div className="space-y-6">
        {timelineData.map((item, idx) => (
          <div key={idx} className="flex items-start space-x-6">
            <div className="font-mono text-xl">{item.year}</div>
            <div>
              <h3 className="font-semibold">
                {item.role} - {item.company}
              </h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
