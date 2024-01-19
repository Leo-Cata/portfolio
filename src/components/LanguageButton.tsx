import { useNavigate, useParams } from "react-router-dom";

const LanguageButton = () => {
  const lang = useParams().lang;

  const nav = useNavigate();

  const handleNav = () => {
    if (lang === "en") {
      nav("/es");
      window.location.reload();
    } else {
      nav("/en");
      window.location.reload();
    }
  };
  return (
    <button
      onClick={handleNav}
      className="dark:bg-darkButton dark:hover:bg-darkButton/70 m-2 self-end rounded-full bg-purple px-3 py-2 font-normal text-white transition-colors"
    >
      {lang === "en" ? "Change to Spanish" : "Cambiar A Inglés"}
    </button>
  );
};

export default LanguageButton;
