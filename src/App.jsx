import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { easing } from 'maath'; // Ensure you have maath installed for easing
import { Welcome } from './welcome';


const App = () => {
	return (
	  <Router>
		<Canvas shadows camera={{ position: [0, 5, 10], fov: 40 }}>
		  {/* Lights */}
		  <ambientLight intensity={1} />
		  <directionalLight
			position={[10, 10, 5]}
			intensity={1.5}
			castShadow
			shadow-mapSize-width={1024}
			shadow-mapSize-height={1024}
		  />
		  
		  {/* Orbit Controls */}
		  <OrbitControls />
  
		  {/* Loaded GLB Object */}
		  <Welcome />
  
		  {/* Ground Plane for Shadows */}
		  <mesh
			rotation={[-Math.PI / 2, 0, 0]}
			position={[0, -1, 0]}
			receiveShadow
		  >
			<planeGeometry args={[100, 100]} />
			<shadowMaterial transparent opacity={0.5} />
		  </mesh>
  
		  {/* Camera Rig */}
			<CameraRig />
		</Canvas>
	  </Router>
	);
  };

// Camera Rig for pointer-based camera control
function CameraRig() {
  useFrame((state, delta) => {
    const { width, height } = state.viewport;

    // Scale down the x and y values for slower and more subtle movement
    const x = -(state.pointer.x * width) / 15;  // Subtle movement
    const y = -(state.pointer.y * height) / 15; // Subtle movement

    // Adjust camera position, keeping it centered around the galaxy
    easing.damp3(state.camera.position, [x, y, 10], 0.1, delta); // z=5 for a closer view

    // Ensure the camera looks at the center of the galaxy or model
    state.camera.lookAt(0, 0, 0); // Look at the center (0, 0, 0)
  });

  return null;
}

export default App;