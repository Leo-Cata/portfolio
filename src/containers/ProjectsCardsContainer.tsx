import ProjectsCards from "../components/projects_cards/ProjectsCards";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProjectsDataType } from "../types/types";
import { FaGithub } from "react-icons/fa";

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

      <div className=" mt-12 flex flex-col items-center justify-center lg:flex-row">
        {/* title */}
        <h3 className="flex text-center text-xl font-semibold dark:text-white lg:text-3xl">
          {lang === "en" ? "Check more in" : "Más proyectos en"}
        </h3>

        {/* link button */}
        <a
          href="https://github.com/Leo-Cata?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="m-2 flex items-center space-x-1 rounded-full bg-purple px-4 py-2 text-white transition-all hover:bg-purple/70 dark:bg-darkButton dark:hover:bg-darkButton/70"
        >
          <FaGithub size="24px" />
          <p className=" h-fit text-center font-roboto sm:text-xl md:text-2xl ">
            {lang === "en" ? "My GitHub repo" : "Mi repo de GitHub"}
          </p>
        </a>
      </div>
    </section>
  );
};

export default ProjectsCardsContainer;
