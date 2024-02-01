import { ProjectsLinksType } from "../../types/types";
import { BiWorld, BiLogoGithub } from "react-icons/bi";

const ProjectsLinks = ({ links }: { links: ProjectsLinksType[] }) => {
  return (
    <div className="mt-2 flex justify-center space-x-5">
      {links.map((link) => (
        <a
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="dark:bg-darkButton dark:hover:bg-darkButton/80 flex w-fit  items-center rounded-full bg-[#43257e] px-4 py-0.5 text-center text-lg text-white transition-all hover:bg-[#43257e]/70"
          key={link.link}
        >
          {link.name === "GitHub" ? (
            <BiLogoGithub className="mr-1" size="20px" />
          ) : (
            <BiWorld className="mr-1" size="20px" />
          )}
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default ProjectsLinks;
