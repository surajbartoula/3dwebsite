import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath'; // Ensure you have maath installed for easing

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
	  <CameraRig />
    </Canvas>
  );
};

function CameraRig() {
  useFrame((state, delta) => {
    const { width, height } = state.viewport;
    const x = (state.pointer.x * width) / 3;
    const y = (state.pointer.y * height) / 2;

    // Adjust the camera position smoothly
    easing.damp3(state.camera.position, [-1 + x, 5 + y, 30], 0.5, delta);
    
    // Make sure the camera is looking at the center of the scene
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default App;