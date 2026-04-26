import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

function Cube() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial
        color="#00d9ff"
        emissive="#00d9ff"
        emissiveIntensity={0.3}
        wireframe={false}
      />
    </mesh>
  );
}

export default function AnimatedCube() {
  return (
    <Canvas
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '0.65rem',
      }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.5} color="#00d9ff" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff006e" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#00d9ff" />
      <Cube />
    </Canvas>
  );
}
