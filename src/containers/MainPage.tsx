import Hero from "../components/Hero";
import ProjectsCardsContainer from "./ProjectsCardsContainer";

const MainPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProjectsCardsContainer />
    </div>
  );
};

export default MainPage;
