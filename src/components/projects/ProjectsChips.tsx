import { ProjectChips } from "../../types/types";

const ProjectsChips = ({ name, bg }: ProjectChips) => {
  return (
    <div
      className={`m-1 rounded-md px-3 py-0.5 ${bg} text-md w-fit font-semibold  text-black`}
    >
      {name}
    </div>
  );
};

export default ProjectsChips;
