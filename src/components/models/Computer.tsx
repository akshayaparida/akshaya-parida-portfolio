"use client"

import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

interface ComputerProps extends GroupProps {
  // Any additional props you want to pass can be added here
}

export default function Computer(props: ComputerProps) {
  const modelRef = useRef<THREE.Group>(null)

  const { nodes, materials } = useGLTF('/models/computer.glb')

  const [scale, setScale] = useState<[number, number, number]>([0.05, 0.05, 0.05]) // Corrected type

  // Adjust scale based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScale([0.03, 0.03, 0.03]) // Scale down for mobile devices
      } else {
        setScale([0.05, 0.05, 0.05]) // Default scale for larger screens
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Initial scale adjustment

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.x = 0.50 + Math.sin(state.clock.elapsedTime) * 0.70
    }
  })

  // Typecast the node to THREE.Mesh to access the geometry
  const mesh = nodes.retro_computer_setup_retro_computer_setup_Mat_0 as THREE.Mesh

  return (
    <group
      {...props}
      ref={modelRef}
      position={[0, -0.5, 0]}
      scale={scale} // Use dynamic scale here
      rotation={[0.20, 0, 0]}
      dispose={null}
    >
      <mesh
        name="retro_computer_setup_retro_computer_setup_Mat_0"
        castShadow
        receiveShadow
        geometry={mesh.geometry}
        material={materials.retro_computer_setup_Mat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/computer.glb')
