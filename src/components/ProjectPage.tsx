import { useNavigate, useParams } from "react-router-dom";

const ProjectPage = () => {
  const { lang, page } = useParams();
  console.log("🚀 ~ ProjectPage ~ page:", page);
  console.log("🚀 ~ ProjectPage ~ lang:", lang);

  const nav = useNavigate();

  const handleNav = () => {
    if (lang === "en") {
      nav(`/es/${page}`);
      console.log("es");
    } else {
      nav(`/en/${page}`);
      console.log("en");
    }
  };
  return (
    <div>
      {page}
      <button onClick={handleNav}>Change Language</button>
    </div>
  );
};

export default ProjectPage;
