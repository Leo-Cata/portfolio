import { useNavigate, useParams } from "react-router-dom";
import { ProjectsPageInfo } from "../types/types";
import { FaArrowLeft } from "react-icons/fa";

const ProjectPage = ({
  title,
  objective,
  features,
  challenges,
  stack,
}: ProjectsPageInfo) => {
  const titleClasses = "text-xl font-semibold underline ";

  const lang = useParams().lang;
  const nav = useNavigate();

  const handleMainPageNav = () => {
    nav(`/${lang}`);
  };

  return (
    <>
      {/* button to go back to the main page */}
      <button
        className="ml-4 flex items-center hover:underline dark:text-white"
        onClick={handleMainPageNav}
      >
        <FaArrowLeft className="mr-2 mt-1" />
        {lang === "en" ? "Go Back" : "Regresar"}
      </button>
      <div className="flex flex-col items-center space-y-16 dark:text-white">
        <h1 className="text-7xl font-semibold underline">{title}</h1>
        <div className="w-1/2">
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
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
