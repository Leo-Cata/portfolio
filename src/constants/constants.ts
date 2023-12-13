import { Projects } from "../types/types";

export const projects: Projects[] = [
  {
    img: "./dialect.png",
    chips: [
      { name: "<React/>", bg: "bg-react" },
      { name: "<JavaScript/>", bg: "bg-javascript" },
      { name: "<TailwindCSS/>", bg: "bg-tailwind" },
    ],
    title: "Dialect",
    description: `First solo project after finishing the bootcamp and following tutorials, consisting on translating a Figma web design of a landing page into a code using <span/>React</span/> and <span/>TailwindCSS</span/> as the main styling tool, adapting the design to be <span/>fully responsive</span/>.`,
    links: [
      { name: "Link", link: "https://dialect-leomat.netlify.app/" },
      { name: "GitHub", link: "https://github.com/Leo-Cata/Dialect-Project" },
    ],
  },
  {
    img: "network.png",
    chips: [
      { name: "<React/>", bg: "bg-react" },
      { name: "<TypeScript/>", bg: "bg-typescript" },
      { name: "<TailwindCSS/>", bg: "bg-tailwind" },
    ],
    title: "Network Agency",
    description:
      "Following the same theme as my first project, the focus of this project was to keep learning and practising React, CSS using TailwindCSS for the styles and TypeScript to create a fully responsive landing page with additional minor interactivity.",
    links: [
      { name: "Link", link: "https://dialect-leomat.netlify.app/" },
      { name: "GitHub", link: "https://github.com/Leo-Cata/Dialect-Project" },
    ],
  },
  {
    img: "./psh.png",
    chips: [
      { name: "<React/>", bg: "bg-react" },
      { name: "<TypeScript/>", bg: "bg-typescript" },
      { name: "<Mui/>", bg: "bg-mui" },
      { name: "<TailwindCSS/>", bg: "bg-tailwind" },
      { name: "<React-Router-Dom/>", bg: "bg-router" },
      { name: "<Axios//>", bg: "bg-axios" },
    ],
    title: "Phone Specs Hub",
    description:
      "Now focusing more on logic and TypeScript, this project integrates an API of a database of phone specs, which is being fetched and handle with Axios, consisting of a home page with the latest releases and top phones by interest and fans.\nBrands page with all of the available brands and finally, page for each phone in which contains technical information and some screenshots. \nSingle page application style of navigation with React-Router-Dom, components using Mui and TailwindCSS for editing and overriding styles.",
    links: [
      { name: "Link", link: "https://phonespecshub.netlify.app/" },
      { name: "GitHub", link: "https://github.com/Leo-Cata/phone-specs-hub" },
    ],
  },
  {
    img: "./backlogged.png",
    chips: [
      { name: "<React/>", bg: "bg-react" },
      { name: "<TypeScript/>", bg: "bg-typescript" },
      { name: "<Mui/>", bg: "bg-mui" },
      { name: "<TailwindCSS/>", bg: "bg-tailwind" },
      { name: "<React-Router-Dom/>", bg: "bg-router" },
      { name: "<Axios/>", bg: "bg-axios" },
      { name: "<Firebase/>", bg: "bg-firebase" },
    ],
    title: "Backlogged",
    description:
      "This fully responsive app allows users to explore games based on decades, genres, platforms, Metacritic scores, and more. Users can access short descriptions, learn about genres, tags, release dates, view game screenshots, and more. Additionally, the site integrates Google authentication and Firestore, enabling users to add games to a backlog for later play, with the list accessible in their private profile.",
    links: [
      { name: "Link", link: "https://backlogged.netlify.app/" },
      { name: "GitHub", link: "https://github.com/Leo-Cata/rawg-app" },
    ],
  },
];
