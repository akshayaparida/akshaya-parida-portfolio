// src/app/data.tsx
import { Home, Info, Code, Github, Linkedin, FileText, Twitter } from "lucide-react"; // Import icons directly

// Projects Data
export const projectsData = [
  {
    id: 1,
    name: "EcoTracker",
    description: "Track your carbon footprint",
    date: "2022-08-15",
    demoLink: "https://ecotracker.example.com",
  },
  {
    id: 2,
    name: "ArtGallery Online",
    description: "Digital art showcase platform",
    date: "2022-06-20",
    demoLink: "https://artgalleryonline.example.com",
  },
  {
    id: 3,
    name: "BudgetPlanner",
    description: "Plan and track expenses",
    date: "2022-09-10",
    demoLink: "https://budgetplanner.example.com",
  },
  {
    id: 4,
    name: "HealthBeat",
    description: "Monitor heart rate zones",
    date: "2022-05-30",
    demoLink: "https://healthbeat.example.com",
  },
  {
    id: 5,
    name: "RecipeFinder",
    description: "Discover new recipes",
    date: "2022-07-12",
    demoLink: "https://recipefinder.example.com",
  },
  {
    id: 6,
    name: "JourneyLogger",
    description: "Log your travels",
    date: "2022-10-01",
    demoLink: "https://journeylogger.example.com",
  },
  {
    id: 7,
    name: "StudyBuddy",
    description: "Collaborative learning platform",
    date: "2022-04-18",
    demoLink: "https://studybuddy.example.com",
  },
  {
    id: 8,
    name: "TechTalk",
    description: "Tech news aggregator",
    date: "2022-11-05",
    demoLink: "https://techtalk.example.com",
  },
  {
    id: 9,
    name: "FitTrack",
    description: "Fitness and workout tracker",
    date: "2022-03-22",
    demoLink: "https://fittrack.example.com",
  },
  {
    id: 10,
    name: "MindfulMoments",
    description: "Meditation and mindfulness app",
    date: "2022-02-14",
    demoLink: "https://mindfulmoments.example.com",
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
