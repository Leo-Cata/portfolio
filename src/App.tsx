import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./containers/MainPage";
import ProjectPage from "./components/ProjectPage";
function App() {
  return (
    <div className="bg-lightBg pb-10 transition-all duration-500 dark:bg-[#1A1B27]">
      <Routes>
        {/* when there is no param, automatically nav to /en */}
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang" element={<MainPage />} />

        <Route path="/:lang/:page" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
