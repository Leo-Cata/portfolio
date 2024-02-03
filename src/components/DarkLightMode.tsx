import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkLightMode = () => {
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

  if (theme === undefined) {
    return null;
  }

  return (
    <div>
      <button onClick={handleTheme} className="animate-ping m-4">
        {theme === "light" ? (
          <FaSun
            className="animate-fadeIn text-yellow-500 transition-all "
            size="2rem"
          />
        ) : (
          <FaMoon
            className="animate-fadeIn text-slate-500 transition-all"
            size="2rem"
          />
        )}
      </button>
    </div>
  );
};

export default DarkLightMode;
