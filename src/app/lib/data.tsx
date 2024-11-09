/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/





// src/app/data.tsx
import { Home, Info, Code, Github, Linkedin, FileText, Twitter } from "lucide-react"; // Import icons directly

// Projects Data
export const projectsData = [
  {
    id: 1,
    name: "StudentPortal",
    description: "Class information",
    date: "2024-11-09",
    demoLink: "https://student-portal-two-green.vercel.app/",
    githubRepo:"https://github.com/akshayaparida/student-portal"
  },
  {
    id: 2,
    name: "AkshayaParida Portfolio",
    description: "Portfolio",
    date: "2024-11-09",
    demoLink: "https://akshayaparida.vercel.app/",
    githubRepo:"https://github.com/akshayaparida/akshaya-parida-portfolio"
  },
  
   
];

// Navigation Buttons Data
export const BtnList = [
  { label: "Home", link: "/", icon: Home, newTab: false },
  { label: "About", link: "/about", icon: Info, newTab: false },
  { label: "Projects", link: "/projects", icon: Code, newTab: false },
  { label: "Contact", link: "/contact", icon: FileText, newTab: false },
  {
    label: "Github",
    link: "https://github.com/akshayaparida",
    icon: Github, 
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/akshaya-parida-aa152a26a/",
    icon: Linkedin, 
    newTab: true,
  },
  {
    label: "X",
    link: "https://x.com/akshaya_parida_",
    icon: Twitter, 
    newTab: true,
  },
  {
    label: "Resume",
    link: "https://docs.google.com/document/d/1B3nDJ4Ik5YWcENXKppTnG5vzOHInmyTSDk9CE-n78vg/edit?tab=t.0",
    icon: FileText, 
    newTab: true,
  },
];
