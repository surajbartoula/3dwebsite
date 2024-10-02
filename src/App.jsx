import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';

const Box = ({ position }) => (
  <mesh position={position}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="orange" />
  </mesh>
);

const Scene = () => {
  const { camera, size } = useThree();

  useEffect(() => {
    // Update the camera aspect ratio to match the canvas size
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Sky sunPosition={[100, 20, 100]} turbidity={10} rayleigh={2} />
      <Box position={[0, 0, 0]} />
      <Box position={[1, 1, 1]} />
      <OrbitControls />
    </>
  );
};

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [10, 1, 5], fov: 25, near: 1, far: 20 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default App;