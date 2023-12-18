import { RxExternalLink } from "react-icons/rx";

const ProjectsTitle = ({ title, link }: { title: string; link: string }) => {
  return (
    <h3 className="mt-2 font-roboto text-2xl lg:mt-0 lg:text-3xl">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:underline [&_svg]:hover:text-blue-600"
      >
        {title}
        <RxExternalLink size="16px" className="mx-2" />
      </a>
    </h3>
  );
};

export default ProjectsTitle;
