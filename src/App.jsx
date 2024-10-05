import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const App = () => {
  return (
    <Canvas shadows camera={{ position: [0, 1, 5], fov: 50 }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

      {/* A simple ground plane */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
		color="#632420"
		blur={[300, 30]}
		resolution={2048}
		mixBlur={1}
		mixStrength={180}
		roughness={1}
		depthScale={1.2}
		minDepthThreshold={0.4}
		maxDepthThreshold={1.4}
		metalness={0.8}
		/>
      </mesh>

      {/* A cube for testing */}
      <mesh castShadow position={[0, 1, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* OrbitControls to move the camera */}
      <OrbitControls />
    </Canvas>
  );
};

export default App;