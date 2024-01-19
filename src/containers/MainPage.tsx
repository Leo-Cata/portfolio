import DarkLightMode from "../components/DarkLightMode";
import Hero from "../components/Hero";
import LanguageButton from "../components/LanguageButton";
import Projects from "../components/projects/Projects";

const MainPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <DarkLightMode />
        <LanguageButton />
      </div>
      <Hero />
      <Projects />
    </div>
  );
};

export default MainPage;
