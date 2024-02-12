import Hero from "../components/Hero";
import Techs from "../components/Techs";
import ProjectsCardsContainer from "./ProjectsCardsContainer";

const MainPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Techs />
      <ProjectsCardsContainer />
    </div>
  );
};

export default MainPage;
