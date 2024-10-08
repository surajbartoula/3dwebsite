import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { easing } from 'maath'; // Ensure you have maath installed for easing
import { Model } from './Model';

const App = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 70 }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

      {/* Render the 3D model */}
      <Model />

      {/* Orbit Controls for interaction */}
      <OrbitControls />

      {/* Camera Rig for dynamic camera movement */}
      <CameraRig />
    </Canvas>
  );
};

// Camera Rig for pointer-based camera control
function CameraRig() {
  useFrame((state, delta) => {
    const { width, height } = state.viewport;

    // Scale down the x and y values for slower and more subtle movement
    const x = (state.pointer.x * width) / 15;  // Subtle movement
    const y = (state.pointer.y * height) / 15; // Subtle movement

    // Adjust camera position, keeping it centered around the galaxy
    easing.damp3(state.camera.position, [x, y, ], 0.1, delta); // z=5 for a closer view

    // Ensure the camera looks at the center of the galaxy or model
    state.camera.lookAt(0, 0, 0); // Look at the center (0, 0, 0)
  });

  return null;
}

export default App;