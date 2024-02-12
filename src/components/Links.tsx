import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
const links = [
  {
    href: "https://www.linkedin.com/in/leonel-cata/",
    icon: <FaLinkedin size="24px" />,
    text: "LinkedIn",
  },
  {
    href: "https://github.com/Leo-Cata",
    icon: <FaGithub size="24px" />,
    text: "GitHub",
  },
  {
    href: "mailto:contact@leocata.com.ar",
    icon: <FiAtSign size="24px" />,
    text: "Email",
  },
];

const Links = () => {
  return (
    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {links.map((link) => (
        <div key={link.text}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 rounded-full bg-purple px-4 py-2 text-white transition-all hover:bg-purple/70 dark:bg-darkButton dark:hover:bg-darkButton/70"
          >
            {link.icon}
            <p className=" h-fit text-center font-roboto sm:text-xl md:text-2xl ">
              {link.text}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Links;
