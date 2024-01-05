import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./containers/MainPage";

function App() {
  return (
    <div className="mb-10">
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
