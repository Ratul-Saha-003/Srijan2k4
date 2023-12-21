/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 .\public\models\Machu Picchu - Temple of the sun.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Sun(props) {
  const { nodes, materials } = useGLTF('models/Machu Picchu - Temple of the sun.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} rotation={[-Math.PI/2, 0, 0]} />
      <pointLight position={[0, 250, 14]} intensity={8} color="white" />
    </group>
  )
}

useGLTF.preload('models/Machu Picchu - Temple of the sun.glb')