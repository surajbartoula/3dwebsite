import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Welcome(props) {
  const { nodes, materials } = useGLTF('/3dwebsite/welcome_sign.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/3dwebsite/welcome_sign.glb')