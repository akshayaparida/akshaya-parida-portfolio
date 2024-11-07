// src/components/ClientComputer.tsx
"use client"; // Mark this as a Client Component
import dynamic from "next/dynamic";

// Dynamically import the Computer component and disable SSR
const Computer = dynamic(() => import("./models/Computer"), {
  ssr: false,  // Disable SSR for the component
});

export default Computer;
