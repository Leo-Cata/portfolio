import { ProjectChips } from "../../types/types";

const ProjectsChips = ({ chips }: { chips: ProjectChips[] }) => {
  return (
    <div className=" my-2 flex flex-wrap">
      {chips.map((chip) => (
        <div
          className={`m-0.5 rounded-md px-3 py-0.5 ${chip.bg} text-md w-fit font-semibold  text-black hover:cursor-default`}
          key={chip.name + chip.bg}
        >
          {chip.name}
        </div>
      ))}
    </div>
  );
};

export default ProjectsChips;
