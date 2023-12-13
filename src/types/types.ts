export interface ProjectChips {
  bg: string;
  name: string;
}

//types for the array of projects
export interface Projects {
  img: string;
  chips: Chips[];
  title: string;
  description: string;
  links: ProjectsLinks[];
}

interface ProjectsLinks {
  name: string;
  link: string;
}

interface Chips {
  name: string;
  bg: string;
}
