"use client"

import * as React from 'react'
import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import * as THREE from 'three'

interface ComputerProps extends GroupProps {
  // Any additional props you want to pass can be added here
}

export default function Computer(props: ComputerProps) {
  const { nodes, materials } = useGLTF('/models/computer.glb')

  // Typecast the node to THREE.Mesh to access the geometry
  const mesh = nodes.retro_computer_setup_retro_computer_setup_Mat_0 as THREE.Mesh

  return (
    <group {...props} dispose={null}>
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
