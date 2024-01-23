import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { page, lang } = useParams();

  return (
    <div className="flex h-screen justify-center dark:text-white">
      <h1 className="text-4xl font-semibold">
        {lang === "en" ? "Project: " : "Proyecto: "}
        {page}
      </h1>
    </div>
  );
};

export default ProjectPage;
