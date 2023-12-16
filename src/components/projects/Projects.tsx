import ProjectsCards from "./ProjectsCards";
import { projects } from "../../constants/constants";

const Projects = () => {
  console.log(projects);

  return (
    <div className="">
      <h2 className="my-12 text-center text-6xl font-semibold">Projects</h2>
      <div className="flex flex-wrap justify-center space-y-20">
        {projects.map((project, index) => (
          <div
            className={`m-2 flex flex-col  items-center border lg:mx-4
lg:flex-row ${index % 2 ? "lg:flex-row-reverse" : ""}`}
            key={project.title}
          >
            <ProjectsCards
              key={project.title}
              description={project.description}
              title={project.title}
              img={project.img}
              chips={project.chips}
              links={project.links}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
