"use client"; 

import React, { useState, useEffect } from "react";
import { MapPin, Clock } from "lucide-react";

const Header: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      // Format date as dd/mm/yyyy
      setCurrentDate(now.toLocaleDateString("en-GB")); // en-GB locale for dd/mm/yyyy format
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    // Set initial date and time immediately
    const now = new Date();
    setCurrentDate(now.toLocaleDateString("en-GB"));
    setCurrentTime(now.toLocaleTimeString());

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full text-center text-white z-10 mt-[2rem]">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono animate-fadeInFloat">
        Hey, I&apos;m Akshaya Parida
      </h1>
      <h2 className="mt-2 text-2xl sm:text-3xl lg:text-3xl font-thin">Fullstack Developer</h2>
      <p className="mt-4 text-xs lg:text-xl flex justify-center gap-8 opacity-55">
        <span className="flex items-center gap-2">
          <MapPin size={20} />
          <span>brahmapur,Odisha,India</span>
        </span>
        <span className="flex items-center gap-2">
          <Clock size={20} />
          {/* Use monospace font and fixed width for time */}
          <span className="font-mono" style={{ minWidth: "120px", textAlign: "center" }}>
            {currentDate} | {currentTime || "Loading..."}
          </span>
        </span>
      </p>
    </header>
  );
};

export default Header;
