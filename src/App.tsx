import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./containers/MainPage";
import ThemeChanger from "./components/ThemeChanger";
import LanguageButton from "./components/LanguageButton";
import ProjectsPageContainer from "./containers/ProjectsPageContainer";

function App() {
  return (
    <div className="bg-lightBg px-1 pb-10 transition-all duration-500 dark:bg-[#1A1B27] lg:px-4">
      <div className="flex justify-between">
        <ThemeChanger />
        <LanguageButton />
      </div>
      <Routes>
        {/* when there is no param, automatically nav to /en */}
        <Route path="/" element={<Navigate to="/en/" replace />} />
        <Route path="/:lang/" element={<MainPage />} />

        <Route path="/:lang/:page" element={<ProjectsPageContainer />} />
      </Routes>
    </div>
  );
}

export default App;
