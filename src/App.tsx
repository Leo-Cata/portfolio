import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./containers/MainPage";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <div className="mb-10">
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
