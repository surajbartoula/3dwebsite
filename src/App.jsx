import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1} />;
};

const App = () => {
  return (
    <Canvas shadows camera={{ position: [2, 9, 30], fov: 50 }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

      {/* Ground plane */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
          color="#632420"
          roughness={1}
          metalness={0.8}
        />
      </mesh>

      {/* 3D Model */}
      <Model url="/portfolio/computers_1-transformed.glb" />

      {/* Camera Controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default App;