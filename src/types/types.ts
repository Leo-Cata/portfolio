import { ReactElement } from "react";

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
  stack_icons: StackIcons[];
  img: string;
  links: ProjectsLinksType[];
}

// for the png icons in /projectPage
interface StackIcons {
  name: string;
  icon: string;
}

//for the icons in the landing page
export interface TechIcons {
  icon: ReactElement;
  name: string;
}
