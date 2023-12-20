/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      },
    },
    keyframes: {
      gradientKeyframe: {
        "0%": { backgroundPosition: "0% 50%" },
        "100%": { backgroundPosition: "100% 50%" },
      },
    },
    animation: {
      gradient: "gradientKeyframe 6s linear infinite",
    },
  },
  plugins: [],
};
