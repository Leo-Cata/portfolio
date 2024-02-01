import Hero from "../components/Hero";
import Projects from "../components/projects_cards/Projects";

const MainPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Projects />
    </div>
  );
};

export default MainPage;
