import { useNavigate } from "react-router-dom";

const LanguageButton = () => {
  const nav = useNavigate();
  const location = window.location.pathname;

  // from location split strings whenever / appears, the lang will always be the second element in the array
  const lang = location.split("/")[1];

  const handleNav = () => {
    // Simulate some delay for language change
    const regex = /^(\/en\/?|\/es\/?)/;
    const replacedUrl = location.replace(regex, (match) => {
      return `/${match === "/en/" ? "es/" : "en/"}`;
    });

    nav(replacedUrl);
  };
  return (
    <button
      onClick={handleNav}
      className="m-2 max-w-fit self-end rounded-full bg-purple px-3 py-2 font-normal text-white transition-all dark:bg-darkButton dark:hover:bg-darkButton/70"
    >
      {lang === "en" ? "Change to Spanish" : "Cambiar A Inglés"}
    </button>
  );
};

export default LanguageButton;
