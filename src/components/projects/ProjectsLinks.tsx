import { RxExternalLink } from "react-icons/rx";
import { ProjectsLinksType } from "../../types/types";

const ProjectsLinks = ({ links }: { links: ProjectsLinksType[] }) => {
  return (
    <div className="mt-2">
      {links.map((link) => (
        <a
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center text-lg underline hover:text-blue-600"
          key={link.link}
        >
          {link.name}
          <RxExternalLink className="mx-1" size="13px" />
        </a>
      ))}
    </div>
  );
};

export default ProjectsLinks;
