import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

/**
 * Contact data.
 *
 * Each object contains an `icon` (React component), `label` for display,
 * and `link` which is the URL or mailto link. Used in the Contact section
 * and Navbar overlay menu for external links and email.
 */
export const CONTACTS = [
  {
    icon: <FiMail />,
    label: "Email",
    link: "mailto:elgajerushahenry@gmail.com",
  },
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/elgajerushahenry/",
  },
  {
    icon: <FiGithub />,
    label: "GitHub",
    link: "https://github.com/henryelga",
  },
];
