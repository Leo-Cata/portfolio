import ProjectsCards from "./ProjectsCards";
import { projects } from "../../constants/constants";
const Projects = () => {
  console.log(projects);

  return (
    <div className="">
      <h2 className="text-center text-6xl font-semibold">Projects</h2>
      <div className="flex items-center justify-center">
        {projects.map((project) => (
          <ProjectsCards
            key={project.title}
            description={project.description}
            title={project.title}
            img={project.img}
            chips={project.chips}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
