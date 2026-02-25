"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Orb() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const { mouse } = state;

    mesh.current.rotation.y = mouse.x * 0.8;
    mesh.current.rotation.x = mouse.y * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.2, 2]} />
        <meshStandardMaterial
          wireframe
          color="#5227FF"
          emissive="#5227FF"
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
}

export default function FuturisticOrb() {
  return (
    <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Orb />
      </Canvas>
    </div>
  );
}
