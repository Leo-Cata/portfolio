import { RxExternalLink } from "react-icons/rx";
import { Link, useParams } from "react-router-dom";
import { URLFormatter } from "../../utils/URLFormatter";

const ProjectsTitle = ({ title, link }: { title: string; link: string }) => {
  const lang = useParams().lang;

  const url = URLFormatter(title);
  return (
    <h3 className="mt-2 flex justify-between font-roboto text-2xl lg:mt-0 lg:text-3xl">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:underline [&_svg]:hover:text-blue-600"
      >
        {title}
        <RxExternalLink size="16px" className="mx-2" />
      </a>
      <Link to={`/${lang}/${url}`}>Read More</Link>
    </h3>
  );
};

export default ProjectsTitle;
