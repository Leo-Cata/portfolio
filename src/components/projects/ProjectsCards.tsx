import { Projects } from "../../types/types";
import ProjectsChips from "./ProjectsChips";
import { RxExternalLink } from "react-icons/rx";
import DOMPurify from "dompurify";

const ProjectsCards = ({ description, img, title, chips, links }: Projects) => {
  const sanitizedDescription = DOMPurify.sanitize(description);
  return (
    <>
      <img
        src={img}
        alt={title + " landing page image"}
        className="h-fit w-full self-start rounded-lg lg:max-w-[50%]"
      />
      <div className="mx-4 h-full w-full lg:max-w-[50%]">
        <h3 className="font-roboto text-2xl lg:text-3xl">
          <a
            href={links[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:underline [&_svg]:hover:text-blue-400"
          >
            {title}
            <RxExternalLink size="16px" className="mx-2" />
          </a>
        </h3>
        {/* chips */}
        <div className="my-2 flex flex-wrap">
          {chips.map((chip) => (
            <ProjectsChips
              name={chip.name}
              bg={chip.bg}
              key={chip.name + chip.bg}
            />
          ))}
        </div>

        {/* description */}
        <p
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          className="font-montserrat [&_span]:font-semibold"
        />
        {links.map((link) => (
          <a
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg underline hover:text-blue-700"
          >
            {link.name} <RxExternalLink className="mx-1" size="13px" />
          </a>
        ))}
      </div>
    </>
  );
};

export default ProjectsCards;
