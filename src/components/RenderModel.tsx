"use client";
import { Canvas } from "@react-three/fiber";
import {  Environment } from "@react-three/drei";
import clsx from "clsx";
import React, { Suspense } from "react";

// Define the component's props
interface RenderModelProps {
  className?: string;
  children?: React.ReactNode;  
}

const RenderModel: React.FC<RenderModelProps> = ({ className, children }) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={true}  // Enable shadows for a more realistic effect
      dpr={[1, 2]}  // Device pixel ratio for better resolution
    >
    
      
    <Suspense fallback={null}>{children}</Suspense>
    
      {/* Environment preset for better background */}
      <Environment preset="forest" />
      
    
    </Canvas>
  );
};

export default RenderModel;
