export interface ProjectChips {
  bg: string;
  name: string;
}

//types for the array of projects
export interface ProjectsDataType {
  img: string;
  chips: Chips[];
  title: string;
  description: string;
  links: ProjectsLinksType[];
}

export interface ProjectsLinksType {
  name: string;
  link: string;
}

interface Chips {
  name: string;
  bg: string;
}
