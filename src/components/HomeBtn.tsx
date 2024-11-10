"use client"; // Indicating this component should only run on the client side

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react'; // Import the Home icon
import { HomeBtnProps } from '@/app/lib/definitions'; // Import the types

const HomeBtn: React.FC<HomeBtnProps> = ({ newTab = false, size = 24, className = "" }) => {
  const [isMounted, setIsMounted] = useState(false);

  // UseEffect hook ensures it is mounted only on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Don't render the button until after it mounts
  }

  return (
    <Link
      href="/"
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : ""}
      aria-label="Home"  // Added accessibility
      className={`fixed top-4 left-4 z-50 flex items-center gap-2 text-white hover:text-accent ${className}`}
    >
      <Home size={size} /> {/* Home icon */}
      <span>Home</span>
    </Link>
  );
};

export default HomeBtn;
