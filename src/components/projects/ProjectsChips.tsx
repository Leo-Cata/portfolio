import { ProjectChips } from "../../types/types";

const ProjectsChips = ({ chips }: { chips: ProjectChips[] }) => {
  return (
    <div className=" my-2 flex flex-wrap items-center">
      {chips.map((chip) => (
        <div
          className={`text-md m-0.5 w-fit rounded-lg  px-3 py-0.5 ${chip.bg} font-semibold  text-black/50 hover:cursor-default`}
          key={chip.name + chip.bg}
        >
          {chip.name}
        </div>
      ))}
    </div>
  );
};

export default ProjectsChips;
