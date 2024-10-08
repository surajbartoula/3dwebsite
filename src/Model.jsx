import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/portfolio/need_some_space.glb')
  return (
    <group {...props} dispose={null}>
      <points
        geometry={nodes.Object_2.geometry}
        material={materials['Scene_-_Root']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.023}
      />
    </group>
  )
}

useGLTF.preload('/portfolio/need_some_space.glb')
