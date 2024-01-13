import { useNavigate, useParams } from "react-router-dom";
import Hero from "../components/Hero";
import Projects from "../components/projects/Projects";

const MainPage = () => {
  const lang = useParams();

  const nav = useNavigate();

  const handleNav = () => {
    if (lang.lang === "en") {
      nav("/es");
    } else {
      nav("/en");
    }
  };
  return (
    <>
      <Hero />
      <button onClick={handleNav}>Change Language</button>
      <Projects />
    </>
  );
};

export default MainPage;
