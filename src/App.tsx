import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./containers/MainPage";

function App() {
  return (
    <div className="my-10">
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
