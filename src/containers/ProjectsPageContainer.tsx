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

    //scrolls to top because for some reason it loads with the buttons hidden
    document.documentElement.scrollTo({ top: 0, behavior: "instant" });
  }, [lang, page]);

  return (
    <div className="mx-1 min-h-screen">
      {pageData && (
        <ProjectPage
          title={pageData.title}
          objective={pageData.objective}
          features={pageData.features}
          challenges={pageData.challenges}
          stack={pageData.stack}
          img={pageData.img}
          links={pageData.links}
        />
      )}
    </div>
  );
};

export default ProjectsPageContainer;
