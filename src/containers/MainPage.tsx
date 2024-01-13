import { useNavigate, useParams } from "react-router-dom";
import Hero from "../components/Hero";
import Projects from "../components/projects/Projects";

const MainPage = () => {
  const lang = useParams().lang;

  const nav = useNavigate();

  const handleNav = () => {
    if (lang === "en") {
      nav("/es");
      window.location.reload();
    } else {
      nav("/en");
      window.location.reload();
    }
  };
  return (
    <div className="flex flex-col">
      <button
        onClick={handleNav}
        className="bg-purple m-2 self-end rounded-full px-3 py-2 font-normal text-white"
      >
        {lang === "en" ? "Change to Spanish" : "Cambiar A Inglés"}
      </button>

      <Hero />
      <Projects />
    </div>
  );
};

export default MainPage;
