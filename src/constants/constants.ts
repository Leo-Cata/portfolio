import { Projects } from "../types/types";

export const projects: Projects[] = [
  {
    img: "./dialect.png",
    chips: [
      { name: "<React/>", bg: "bg-react" },
      { name: "<JavaScript/>", bg: "bg-javascript" },
      { name: "<TailwindCSS/>", bg: "bg-tailwind" },
    ],
    title: "Dialect Landing Page",
    description: `Landing page of a fictional language learning site, designed based on a <span>Figma</span> web design.<br/>
    I started this project after completing a bootcamp and doing some tutorial projects. It was my way of diving into independent projects, specifically to get better at <span>CSS</span>, using only <span>TailwindCSS</span>, <span>JavaScript</span>, and <span>React</span> to create this landing page.<br/>
    The website features a <span>fully responsive</span> design, utilizes the <span>useState</span> and <span>useContext</span> hooks to manage language synchronization within the dropdown menu. Additionally, it includes a <span>carousel</span> that displays 1 to 3 cards based on the viewport width.`,
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
      { name: "<Framer Motion/>", bg: "bg-framer" },
    ],
    title: "Network Agency Landing Page",
    description: `Landing page of a fictional network agency, designed based on a <span>Figma</span> web design. <br/>
    With this project, I instead used <span>TypeScript</span> to gain a basic understanding of its fundamental, utilizing for different arrays which are mapped.<br/>
    <span>Framer Motion</span> was used for different animations, <span>TailwindCSS</span> for the styles, and <span>React</span> along with some <span>Hooks</span>.
    This is a <span>fully responsive</span> website, containing a <span>carousel</span>, an <span>accordion</span> style faq section and a mobile menu animated.
    `,
    links: [
      { name: "Link", link: "https://networkagency-leomat.netlify.app/" },
      { name: "GitHub", link: "https://github.com/Leo-Cata/Network-Agency" },
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
      { name: "<Axios/>", bg: "bg-axios" },
    ],
    title: "Phone Specs Hub",
    description: `Moving into something more complex, this web app integrates a cellphones database <span>API</span>.<br/>
    For this project, I decided to learn <span>MUI</span> and it's vast library of pre-made components, focusing more on the logic and <span>TypeScrip</span>, rather than the design.<br/>
    The data is fetched using <span>Axios</span>, <span>React-Router-Dom</span> is being used for SPA navigation, and minor styling using <span>TailwindCSS</span>.<br/>
    In this fully responsive app, the user can find out the latest released phones, search the phone brands or a general search in the database. When navigation to a phone page, the phone specifications are displayed in accordions, giving the user technical information about the phone.
    `,
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
      { name: "<Swiper.js/>", bg: "bg-swiper" },
    ],
    title: "Backlogged",
    description: `
    This <span>React</span> and <span>TypeScript</span> web app integrates a video game database <span>API</span> via <span>Axios</span>, utilizing <span>MUI</span>'s components library and <span>TailwindCSS</span> for minor styling. <span>React-Router-Dom</span> handles navigation and state passing between pages. Each game page features a slider using <span>Swiper.js</span>. <br/>
    Logged-in users can save games, reflected by a 'save' icon that remains consistent across the app. These saved games are stored in a <span>Firebase</span> database, alongside card data fetched from the RAWG API. Users can view their backlog on their private profile and manage it, either deleting individual games, the entire collection of games or their entire profiles from the database.

    `,
    links: [
      { name: "Link", link: "https://backlogged.netlify.app/" },
      { name: "GitHub", link: "https://github.com/Leo-Cata/rawg-app" },
    ],
  },
];
