import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const contacts = [
  { icon: <FiMail />, label: "Email", link: "mailto:your.email@example.com" },
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    link: "https://linkedin.com/in/yourprofile",
  },
  {
    icon: <FiGithub />,
    label: "GitHub",
    link: "https://github.com/yourusername",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Connect With Me</h2>
      <div className="flex justify-center gap-8">
        {contacts.map((c, idx) => (
          <a
            key={idx}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <span className="text-3xl">{c.icon}</span>
            <span>{c.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};
