import ProjectsCards from "./ProjectsCards";
import { projects } from "../../constants/constants";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="my-12 text-center text-6xl font-semibold">Projects</h2>
      <div className="mx-1 flex flex-wrap justify-center space-y-40 lg:mx-0">
        {projects.map((project, index) => (
          <div
            className={`flex flex-col items-center lg:mx-4
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
    </section>
  );
};

export default Projects;
