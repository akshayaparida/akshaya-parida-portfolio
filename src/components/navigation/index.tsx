"use client";

import React, { useRef, useEffect } from "react";
import { BtnList } from "@/app/lib/data";
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
        // Limit swing for mobile devices
        const amplitude = window.innerWidth < 768 ? 10 : 25; // Less swing on mobile
        const maxSwing = window.innerWidth < 768 ? 10 : 25; // Ensure swing stays within screen bounds
        const swingValue = Math.sin(elapsed / 800) * amplitude;

        // Prevent the nav from going outside of the screen (on mobile)
        const clampedSwing = Math.min(Math.max(swingValue, -maxSwing), maxSwing);
        navRef.current.style.transform = `translateX(${clampedSwing}px)`;
      }

      frameId = requestAnimationFrame(swing);
    };

    frameId = requestAnimationFrame(swing);

    return () => cancelAnimationFrame(frameId); // Clean up the animation frame
  }, []);

  return (
    <nav ref={navRef} className="w-full py-2 mb-[4rem] max-sm:mb-[7rem] overflow-x-hidden">
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-6">
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
