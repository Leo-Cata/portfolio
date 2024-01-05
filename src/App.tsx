import { Route, Routes } from "react-router-dom";
import MainPage from "./containers/MainPage";

function App() {
  return (
    <div className="my-10">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
