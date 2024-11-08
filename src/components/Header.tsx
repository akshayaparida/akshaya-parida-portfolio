// src/components/Header.tsx
import React from "react";
import clsx from "clsx";

const Header = () => {
  return (
    <header className="w-full text-center text-white z-10 mt-[2rem]">
      <h1
        className={clsx(
          "text-5xl font-bold font-texturina animate-fadeInFloat"
        )}
      >
        Akshaya Parida
      </h1>
    </header>
  );
};

export default Header;
