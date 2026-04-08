import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const GoldenBlob = () => {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={sphereRef} scale={2.2}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          color="#d4af37"          // Classic Gold color
          emissive="#2a2000"       // Slight golden emissive for depth
          envMapIntensity={2.5}    // High reflection intensity
          clearcoat={1}            // Glassy finish over the metal
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.4}            // Amount of distortion (waviness)
          speed={2}                // Speed of the morphing animation
        />
      </mesh>
    </Float>
  );
};

export const FluidBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none bg-[#0a0a0c]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        {/* Environment mapping for premium reflections on the golden blob */}
        <Environment preset="city" />
        
        {/* Soft, mysterious lighting configuration */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffd700" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#aa5500" />
        
        {/* The morphing golden wave bubble */}
        <GoldenBlob />

      </Canvas>
      
      {/* Radial vignette overlay to blend edges nicely into the dark background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0c_70%)] opacity-80 mix-blend-multiply pointer-events-none"></div>
    </div>
  );
};
