import { useNavigate, useParams } from "react-router-dom";

const LanguageButton = () => {
  const lang = useParams().lang;
  const nav = useNavigate();

  const location = window.location.pathname;
  console.log("🚀 ~ LanguageButton ~ location:", location);

  const handleNav = () => {
    // regex to find /en or /es at the beginning of the string
    const regex = /\/(es|en)(\/|$)/;
    const replacedUrl = location.replace(regex, (match) => {
      return `/${match === "/en/" ? "es/" : "en/"}`;
    });

    console.log("🚀 ~ replacedUrl ~ replacedUrl:", replacedUrl);

    nav(replacedUrl);
    window.location.reload();
  };
  return (
    <button
      onClick={handleNav}
      className="m-2 self-end rounded-full bg-purple px-3 py-2 font-normal text-white transition-colors dark:bg-darkButton dark:hover:bg-darkButton/70"
    >
      {lang === "en" ? "Change to Spanish" : "Cambiar A Inglés"}
    </button>
  );
};

export default LanguageButton;
