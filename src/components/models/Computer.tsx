"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"; 

// Define the types for props
interface ModelProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
}

export default function Model(props: ModelProps) {
  const modelRef = useRef<THREE.Group | null>(null); // Initialize the modelRef with THREE.Group type
  const { nodes, materials } = useGLTF('/models/computer.glb'); // Load GLTF model

  useFrame((state: any) => {
    if (modelRef.current) {
      modelRef.current.position.y =
        -1 + Math.sin(state.clock.elapsedTime) * 0.2; // Animate the y position
    }
  });

  // Type assertion for the specific node
  const computerMesh = nodes.retro_computer_setup_retro_computer_setup_Mat_0 as THREE.Mesh;

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[0, -1.5, 0]}
      scale={[0.06, 0.06, 0.06]}
      rotation={[0.25, 0, 0]}
    >
      <mesh
        name="retro_computer_setup"
        castShadow
        receiveShadow
        geometry={computerMesh.geometry} // Access geometry from the Mesh
        material={materials.retro_computer_setup_Mat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/computer.glb'); // Preload model for better performance
