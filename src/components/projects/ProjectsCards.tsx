import { Projects } from "../../types/types";
import ProjectsChips from "./ProjectsChips";
import DOMPurify from "dompurify";
import ProjectsLinks from "./ProjectsLinks";
import ProjectsTitle from "./ProjectsTitle";

const ProjectsCards = ({ description, img, title, chips, links }: Projects) => {
  const sanitizedDescription = DOMPurify.sanitize(description);
  return (
    <>
      {/* image */}
      <img
        src={img}
        alt={title + " landing page image"}
        className="h-fit w-full self-start rounded-lg lg:max-w-[50%]"
      />

      {/* text content */}
      <div className="mx-4 flex h-full w-full flex-grow flex-col lg:max-w-[50%]">
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
