import { ProjectsDataType } from "../../types/types";
import ProjectsChips from "./ProjectsChips";
import DOMPurify from "dompurify";
import ProjectsLinks from "./ProjectsLinks";
import ProjectsTitle from "./ProjectsTitle";

const ProjectsCards = ({
  description,
  img,
  title,
  chips,
  links,
}: ProjectsDataType) => {
  const sanitizedDescription = DOMPurify.sanitize(description);

  return (
    <>
      {/* image */}
      <a
        href={links[0].link}
        target="_blank"
        rel="noopener noreferrer"
        className="h-fit w-full self-start px-0 xl:max-w-[50%] xl:self-center xl:px-1 2xl:px-0"
      >
        <img
          src={img}
          alt={title + " landing page image"}
          className="rounded-md"
        />
      </a>

      {/* text content */}
      <div className=" flex h-full w-full flex-grow flex-col px-4 py-2 xl:max-w-[50%]">
        {/* title */}
        <ProjectsTitle title={title} link={links[0].link} />
        {/* chips */}
        <ProjectsChips chips={chips} />
        {/* description and links*/}
        <div className="flex h-full flex-grow flex-col justify-between">
          <div>
            {/* sanitized description */}
            <p
              dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
              className="font-montserrat [&_span]:font-semibold"
            />
          </div>

          {/* github and host link */}
          <ProjectsLinks links={links} />
        </div>
      </div>
    </>
  );
};

export default ProjectsCards;
