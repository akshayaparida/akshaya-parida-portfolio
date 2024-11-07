"use client"

import React, { useRef } from 'react'
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

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.x = 0.50 + Math.sin(state.clock.elapsedTime) * 0.50
    }
  })

  // Typecast the node to THREE.Mesh to access the geometry
  const mesh = nodes.retro_computer_setup_retro_computer_setup_Mat_0 as THREE.Mesh

  return (
    <group
      {...props}
      ref={modelRef}
      position={[0, -0.5, 0]}
      scale={[0.05, 0.05, 0.05]}
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
