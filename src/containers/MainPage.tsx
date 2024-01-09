import { useNavigate, useParams } from "react-router-dom";
import Hero from "../components/Hero";
import Projects from "../components/projects/Projects";

const MainPage = () => {
  const lang = useParams();
  console.log("🚀 ~ MainPage ~ lang:", lang);
  const nav = useNavigate();

  const handleNav = () => {
    if (lang.lang === "en") {
      nav("/es");
      console.log("es");
    } else {
      nav("/en");
      console.log("en");
    }
  };
  return (
    <>
      <button onClick={handleNav}>Change Language</button>
      <Hero />
      <Projects />
    </>
  );
};

export default MainPage;
