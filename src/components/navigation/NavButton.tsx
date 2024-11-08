// src/components/navigation/NavButton.tsx
import React from "react";
import { LucideIcon } from "lucide-react";

interface NavButtonProps {
  label: string;
  link: string;
  icon: LucideIcon; 
  newTab: boolean;
  size?: number; 
}

const NavButton = ({ label, link, icon: Icon, newTab, size = 24 }: NavButtonProps) => {
  return (
    <a
      href={link}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : ""}
      className="flex items-center gap-2 text-white hover:text-accent"
    >
      <Icon size={size} /> {/* Pass size here */}
      <span>{label}</span>
    </a>
  );
};

export default NavButton;
