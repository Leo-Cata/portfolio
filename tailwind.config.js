/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        react: "#83BED1",
        javascript: "#FCDC00",
        typescript: "#3178C6",
        tailwind: "#38BDF8",
        mui: "#007FFF",
        router: "#F44250",
        axios: "#9879EE",
        firebase: "#F38715",
        swiper: "#0080FF",
        framer: "#00A0FF",
        purple: "#43257e",
        lightBg: "#dedede",
        darkBg: "#1A1B27",
        darkCardsBg: "#23283D",
        darkButton: "#725B9A",
      },
    },
    keyframes: {
      gradientKeyframe: {
        "0%": { backgroundPosition: "0% 50%" },
        "100%": { backgroundPosition: "100% 50%" },
      },
      fadeInKeyframe: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
    animation: {
      gradient: "gradientKeyframe 6s linear infinite",
      fadeIn: "fadeInKeyframe 0.2s ease-in-out",
    },
  },
  plugins: [],
};
