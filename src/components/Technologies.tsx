import {
  SiTypescript,
  SiTailwindcss,
  // SiVite,
  // SiReactrouter,
  // SiGit,
  // SiGithub,
  SiHtml5,
  SiCss3,
  // SiFirebase,
  // SiAxios,
  SiReact,
  SiJavascript,
} from "react-icons/si";

// main technologies

const mainTechs = [
  {
    name: "HTML5",
    icon: (
      <SiHtml5
        size="150px"
        className="transition-colors hover:text-[#e34c26]"
      />
    ),
  },
  {
    name: "CSS3",
    icon: (
      <SiCss3 size="150px" className="transition-colors hover:text-[#264de4]" />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <SiJavascript
        size="150px"
        className="transition-colors hover:text-[#f0db4f]"
      />
    ),
  },
  {
    name: "Typescript",
    icon: (
      <SiTypescript
        size="150px"
        className="transition-colors hover:text-[#3178C6]"
      />
    ),
  },
  {
    name: "React",
    icon: (
      <SiReact
        size="150px"
        className="transition-colors hover:text-[#1B5A73]"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <SiTailwindcss
        size="150px"
        className="transition-colors hover:text-[#38BDF8]"
      />
    ),
  },
];

// libraries and whatnot
const Technologies = () => {
  return (
    <div className="flex items-center justify-center">
      {/* grid */}
      <div className="grid max-w-fit grid-cols-3 gap-4 text-gray-600">
        {mainTechs.map((tech) => (
          <div
            className={`flex w-fit flex-col items-center justify-center border border-red-500 font-semibold`}
          >
            {tech.icon}
            <h3 className="text-lg text-black">{tech.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
