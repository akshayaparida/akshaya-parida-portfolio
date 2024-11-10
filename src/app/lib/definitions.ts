// src/app/lib/definitions.ts

import { ReactNode } from "react";
import { LucideProps } from "lucide-react"; 

// Define the type for the props of SubPagesLayout component
export interface SubPagesLayoutProps {
  children: ReactNode;  // The children prop, which can be any valid React element
}

// Define the type for a single project
export interface Project {
  id: number;
  name: string;
  description: string;
  date: string;
  demoLink: string;
  githubRepo: string;
}

// Define the type for the props of ProjectList component
export interface ProjectListProps {
  projects: Project[]; // Array of projects
}

// Define the type for the props of HomeBtn component
export interface HomeBtnProps {
  newTab?: boolean;
  size?: number;
  className?: string; 
}

// Define the type for a navigation button item
export interface NavButton {
  label: string;
  link: string;
  icon: React.ComponentType<LucideProps>; // Component type for Lucide icons
  newTab?: boolean;
}

// Define the type for the props of a button list component
export interface ButtonListProps {
  buttons: NavButton[];
}


interface FormData {
  name: string;
  email: string;
  message: string;
}

