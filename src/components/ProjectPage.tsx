import { useNavigate, useParams } from "react-router-dom";
import { ProjectsPageInfo } from "../types/types";
import { FaArrowLeft } from "react-icons/fa";
import ProjectsLinks from "./projects_cards/ProjectsLinks";

const ProjectPage = ({
  title,
  objective,
  features,
  challenges,
  stack,
  img,
  links,
}: ProjectsPageInfo) => {
  console.log("🚀 ~ links:", links);
  const titleClasses = "text-xl font-semibold underline ";

  const lang = useParams().lang;
  const nav = useNavigate();

  const handleMainPageNav = () => {
    nav(`/${lang}/`);
  };
  return (
    <div className="flex flex-col items-center">
      {/* button to go back to the main page */}

      <button
        className="m-4 flex items-center self-start hover:underline dark:text-white"
        onClick={handleMainPageNav}
      >
        <FaArrowLeft className="mr-2 mt-1" />
        {lang === "en" ? "Go Back" : "Regresar"}
      </button>

      {/* text card */}
      <div className="space-y-4 rounded-xl bg-white shadow-xl dark:bg-darkCardsBg dark:text-white lg:w-5/6 ">
        {/* title */}
        <div>
          <a href={links[0].link} target="_blank" rel="noopener noreferrer">
            <h1 className="pb-4 pt-2 text-center text-5xl font-semibold 2xl:text-7xl">
              {title}
            </h1>
          </a>

          {/* image */}
          <img src={`../${img}`} alt="" />
        </div>

        {/* texts */}
        <div className="p-4">
          {/* objectives */}
          <h2 className={titleClasses}>
            {lang === "en" ? "Objectives" : "Objetivos"}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: objective }} />

          {/* features */}
          <h2 className={titleClasses}>Features</h2>
          <p dangerouslySetInnerHTML={{ __html: features }} />

          {/* challenges */}
          <h2 className={titleClasses}>
            {lang === "en" ? "Challenges" : "Desafios"}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: challenges }} />
          {/* stack */}
          <h2 className={titleClasses}>Stack</h2>
          <p dangerouslySetInnerHTML={{ __html: stack }} />

          {/* links */}
          <ProjectsLinks links={links} />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
