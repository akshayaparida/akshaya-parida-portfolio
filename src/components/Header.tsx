"use client"; 

import React, { useState, useEffect } from "react";
import { MapPin, Clock } from "lucide-react";

interface HeaderProps {
  currentDate: string;
}

const Header: React.FC<HeaderProps> = ({ currentDate }) => {
  const [currentTime, setCurrentTime] = useState<string | null>(null); 
  const [isClient, setIsClient] = useState(false); 

  // Update current time every second
  useEffect(() => {
    setIsClient(true); 
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Set initial time immediately
    setCurrentTime(new Date().toLocaleTimeString());

    return () => clearInterval(timer);
  }, []); // Empty dependency array to run only once when the component mounts

  if (!isClient) {
    return null; // Render nothing on the server side, to avoid hydration issues
  }

  return (
    <header className="w-full text-center text-white z-10 mt-[2rem]">
      <h1 className="text-4xl font-bold font-mono animate-fadeInFloat">
        Hey, I&apos;m Akshaya Parida
      </h1>
      <h2 className="mt-2 text-3xl font-thin">Frontend Developer</h2>
      <p className="mt-4 text-xl flex justify-center gap-8   opacity-55 ">
        <span className="flex items-center gap-2">
          <MapPin size={20} />
          <span>Bangalore, India</span>
        </span>
        <span className="flex items-center gap-2">
          <Clock size={20} />
          <span>{currentDate} | {currentTime || "Loading..."}</span>
        </span>
      </p>
    </header>
  );
};

export default Header;
