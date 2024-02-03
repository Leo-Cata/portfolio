export interface ProjectChips {
  bg: string;
  name: string;
}

//types for the array of projects
export interface ProjectsDataType {
  headerTitle?: string;
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

//introduction text
export interface IntroductionText {
  introduction: string;
}

// projects info type
export interface ProjectsPageInfo {
  title?: string;
  objective: string;
  features: string;
  challenges: string;
  stack: string;
  img: string;
  links: ProjectsLinksType[];
}
