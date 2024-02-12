import {
  SiTailwindcss,
  SiReactrouter,
  SiAxios,
  SiMui,
  SiReact,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiGit,
  SiSass,
  SiFirebase,
  SiBootstrap,
} from "react-icons/si";
import { useParams } from "react-router-dom";
import { TechIcons } from "../types/types";

// classes for the icons
const icon_classes = "dark:text-white  text-4xl rounded-md text-black/60";

const techs: TechIcons[] = [
  {
    icon: <SiReact className={icon_classes} />,
    name: "React",
  },

  {
    icon: <SiJavascript className={icon_classes} />,
    name: "JavaScript",
  },

  {
    icon: <SiTypescript className={icon_classes} />,
    name: "TypeScript",
  },

  {
    icon: <SiCss3 className={icon_classes} />,
    name: "CSS3",
  },

  {
    icon: <SiTailwindcss className={icon_classes} />,
    name: "Tailwind CSS",
  },

  {
    icon: <SiSass className={icon_classes} />,
    name: "Sass",
  },
  {
    icon: <SiBootstrap className={icon_classes} />,
    name: "Bootstrap",
  },

  {
    icon: <SiGit className={icon_classes} />,
    name: "Git",
  },

  {
    icon: <SiGithub className={icon_classes} />,
    name: "GitHub",
  },
  {
    icon: <SiReactrouter className={icon_classes} />,
    name: "React-Router-DOM",
  },

  {
    icon: <SiMui className={icon_classes} />,
    name: "Material-UI",
  },

  {
    icon: <SiAxios className={icon_classes} />,
    name: "Axios",
  },

  {
    icon: <SiFirebase className={icon_classes} />,
    name: "Firebase",
  },
];

const Techs = () => {
  const lang = useParams().lang;

  return (
    <div className="mt-12 ">
      <h4 className="pb-12 text-center text-3xl font-semibold dark:text-white lg:text-5xl">
        {lang === "en" ? "Technologies" : "Tecnologías"}
      </h4>
      <div className=" grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lang &&
          techs.map((tech) => (
            <div
              className="flex rounded-md border-2 border-purple bg-white py-4  pl-2 pr-1 shadow-xl dark:border-darkButton  dark:bg-darkCardsBg"
              key={tech.name}
            >
              {tech.icon}
              <h3 className="self-center px-4 text-lg dark:text-white">
                {tech.name}
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Techs;
