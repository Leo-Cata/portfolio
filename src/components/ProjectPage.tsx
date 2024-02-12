import { useNavigate, useParams } from "react-router-dom";
import { ProjectsPageInfo } from "../types/types";
import { FaArrowLeft } from "react-icons/fa";
import ProjectsLinks from "./projects_cards/ProjectsLinks";
import { RxExternalLink } from "react-icons/rx";

const ProjectPage = ({
  title,
  objective,
  features,
  challenges,
  stack_icons,
  img,
  links,
}: ProjectsPageInfo) => {
  const titleClasses = "text-xl font-semibold pt-4";

  const lang = useParams().lang;
  const nav = useNavigate();

  const handleMainPageNav = () => {
    nav(`/${lang}/`);
  };

  return (
    <div className="flex flex-col items-center ">
      {/* button to go back to the main page */}

      <button
        className="m-4 flex items-center self-start hover:underline dark:text-white"
        onClick={handleMainPageNav}
      >
        <FaArrowLeft className="mr-2 mt-1" />
        {lang === "en" ? "Go Back" : "Regresar"}
      </button>

      {/* text card */}
      <div className="space-y-4 rounded-xl border-2 border-purple bg-white shadow-xl dark:border-darkButton dark:bg-darkCardsBg dark:text-white lg:w-5/6">
        {/* title */}
        <div>
          <h1 className="pb-4 pt-2 text-center text-3xl   font-semibold lg:text-5xl 2xl:text-7xl">
            <a
              href={links[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-blue-400 hover:underline "
            >
              {title}
              <RxExternalLink size="2rem" className="l-2" />
            </a>
          </h1>

          {/* image */}
          <img src={`../${img}`} alt="" />
        </div>

        {/* wrapper for the padding */}
        <div className="px-4">
          {/* stack icons */}
          {stack_icons.length && (
            <div className={`grid grid-cols-4 text-center lg:grid-cols-8`}>
              {stack_icons.map((stack) => (
                <div key={stack.icon} className="flex flex-col pb-2">
                  <img
                    src={stack.icon}
                    alt=""
                    className="mx-auto h-10 w-10 object-contain lg:h-14 lg:w-14"
                  />
                  <p className="text-base">{stack.name}</p>
                </div>
              ))}
            </div>
          )}

          {/* texts */}
          <div className=" pb-4">
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

            {/* links */}
            <div className="pt-4">
              <ProjectsLinks links={links} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
