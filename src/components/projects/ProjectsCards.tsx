import { Projects } from "../../types/types";
import ProjectsChips from "./ProjectsChips";

const ProjectsCards = ({ description, img, title, chips, links }: Projects) => {
  console.log("🚀 ~ ProjectsCards ~ links:", links);
  return (
    <div className=" flex justify-center">
      <div className="max-w-xs rounded-md border border-red-500">
        <img src={img} alt={`${title} image`} />
        <div className="flex w-fit flex-wrap">
          {chips.map((chip) => (
            <ProjectsChips name={chip.name} bg={chip.bg} key={chip.name} />
          ))}
        </div>

        {/* description */}
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="[&_span]:font-semibold [&_span]:underline"
        ></p>

        <div className="flex space-x-4">
          {links.map((link) => (
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              <h4>{link.name}</h4>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
