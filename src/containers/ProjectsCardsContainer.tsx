import ProjectsCards from "../components/projects_cards/ProjectsCards";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProjectsDataType } from "../types/types";

const ProjectsCardsContainer = () => {
  const lang = useParams().lang;

  const [projectsData, setProjectsData] = useState<ProjectsDataType[] | null>(
    null,
  );

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await fetch(`/data/${lang}/projects.json`);
        setProjectsData(await data.json());
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, [lang]);

  return (
    <section id="projects">
      {projectsData && (
        <>
          <h2 className="my-12 text-center text-3xl font-semibold dark:text-white lg:text-5xl">
            {projectsData[0].headerTitle}
          </h2>
          <div className="flex flex-wrap justify-center space-y-40 ">
            {projectsData.map((project, index) => (
              <div
                className={`flex flex-col items-center rounded-md bg-white shadow-2xl transition-colors duration-500 dark:bg-darkCardsBg dark:text-white
          xl:flex-row ${
            index % 2 ? "xl:flex-row-reverse" : ""
          } border-2 border-purple dark:border-darkButton`}
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
        </>
      )}
    </section>
  );
};

export default ProjectsCardsContainer;
