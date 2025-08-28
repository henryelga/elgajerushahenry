import { CONTACTS } from "../data/contacts";

/**
 * Contact section component.
 *
 * Displays a "Connect With Me" heading and a set of contact links
 * (email, LinkedIn, GitHub) using the `CONTACTS` constant. Each link
 * shows an icon and a label, opens in a new tab, and has hover effects.
 */
export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[30vh] py-20 bg-[#080807] text-[#D1D1C7]"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Connect With Me</h2>
      <div className="flex justify-center gap-8">
        {CONTACTS.map((c, idx) => (
          <a
            key={idx}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:text-[#716A63] transition-colors"
          >
            <span className="text-3xl">{c.icon}</span>
            <span>{c.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};
