import { useParams } from "react-router-dom";
import ProjectPage from "../components/ProjectPage";
import { useEffect, useState } from "react";
import { ProjectsPageInfo } from "../types/types";

const ProjectsPageContainer = () => {
  const { lang, page } = useParams();
  const [pageData, setPageData] = useState<ProjectsPageInfo | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const data = await fetch(`../data/${lang}/projects_data/${page}.json`);
        setPageData(await data.json());
      } catch (error) {
        console.log(error);
      }
    };
    fetchPageData();
  }, [lang, page]);

  return (
    <div className="min-h-screen">
      {pageData && (
        <ProjectPage
          title={page}
          objective={pageData.objective}
          features={pageData.features}
          challenges={pageData.challenges}
          stack={pageData.stack}
        />
      )}
    </div>
  );
};

export default ProjectsPageContainer;
