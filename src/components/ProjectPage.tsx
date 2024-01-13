import { useNavigate, useParams } from "react-router-dom";

const ProjectPage = () => {
  const { lang, page } = useParams();

  const nav = useNavigate();

  const handleNav = () => {
    if (lang === "en") {
      nav(`/es/${page}`);
    } else {
      nav(`/en/${page}`);
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
