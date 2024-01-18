import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./containers/MainPage";
import ProjectPage from "./components/ProjectPage";
import { useEffect, useState } from "react";

function App() {
  // gets saved theme
  const savedTheme = localStorage.getItem("theme");

  // the checks if the user prefers dark theme
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  // if the user has a set theme, save that, else check if user prefers dark or light
  const initialTheme = savedTheme || (prefersDarkMode ? "dark" : "light");

  // sets theme to initial theme
  const [theme, setTheme] = useState<string | undefined>(initialTheme);

  // on mount, if the initialTheme is dark, adds the class to the html tag
  useEffect(() => {
    if (initialTheme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    }
  }, [initialTheme]);

  // when theme changes, adds/removes theme from html tag
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else if (theme === "light") {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="mb-10 dark:bg-slate-900">
      <button onClick={handleTheme}>Dark/Light Mode</button>
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
