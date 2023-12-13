import { ProjectChips } from "../../types/types";

const ProjectsChips = ({ name, bg }: ProjectChips) => {
  return (
    <div
      className={`m-1 rounded-md px-3 font-semibold ${bg} ${
        bg === "bg-javascript" ? "text-black" : "text-black"
      }`}
    >
      {name}
    </div>
  );
};

export default ProjectsChips;
