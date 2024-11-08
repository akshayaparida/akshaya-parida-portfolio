// src/components/navigation/index.tsx
"use client";

import React, { useRef, useEffect } from "react";
import { BtnList } from "@/src/app/data"; 
import NavButton from "./NavButton"; 

const Navigation = () => {
  const navRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    let frameId: number;
    let start: number | null = null;

    // Swing animation function using sine wave
    const swing = (time: number) => {
      if (!start) start = time;
      const elapsed = time - start;

      if (navRef.current) {
        navRef.current.style.transform = `translateX(${Math.sin(elapsed / 800) * 25}px)`;
      }
      frameId = requestAnimationFrame(swing);
    };

    frameId = requestAnimationFrame(swing);
    return () => cancelAnimationFrame(frameId); 
  }, []);

  return (
    <nav ref={navRef} className="w-full py-2 mb-[4rem] shadow-lg">
      <div className="flex items-center justify-center gap-6">
        {BtnList.map((btn, index) => (
          <NavButton
            key={index}
            label={btn.label}
            link={btn.link}
            icon={btn.icon} 
            newTab={btn.newTab}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
