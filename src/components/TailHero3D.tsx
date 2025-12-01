// src/components/TailHero3D.tsx
'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

interface SegmentProps {
  index: number;
  totalSegments: number;
  children?: React.ReactNode;
}

function TailSegment({ index, totalSegments, children }: SegmentProps) {
  const jointRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!jointRef.current) return;

    const { mouse, clock } = state;
    const t = clock.getElapsedTime();

    const waveSpeed = 1.0;
    const waveLag = 0.5;
    const inertia = 0.04; 
    
    const mouseInfluence = 0.15; 

    const verticalLimit = 0.4; 
    const clampedMouseY = THREE.MathUtils.clamp(mouse.y, -verticalLimit, verticalLimit);

    const damping = 1 - (index / totalSegments) * 0.5;
    
    let targetRotationZ = (index === 0 ? -clampedMouseY * mouseInfluence : 0);
    targetRotationZ += Math.sin(t * waveSpeed - index * waveLag) * (0.1 * damping);

    let targetRotationY = (index === 0 ? mouse.x * mouseInfluence * 0.5 : 0);
    targetRotationY += Math.cos(t * waveSpeed * 0.8 - index * waveLag) * (0.08 * damping);

    jointRef.current.rotation.z = THREE.MathUtils.lerp(jointRef.current.rotation.z, targetRotationZ, inertia);
    jointRef.current.rotation.y = THREE.MathUtils.lerp(jointRef.current.rotation.y, targetRotationY, inertia);
  });

  const color = index % 2 === 0 ? '#0e7490' : '#c2410c';
  const scale = 1 - (index / totalSegments) * 0.5;

  return (
    <group ref={jointRef} position={[index === 0 ? 0 : 1.1, 0, 0]}>
      <mesh position={[0.5, 0, 0]} scale={[scale, scale, scale * 0.6]}>
        <boxGeometry args={[1.0, 0.4, 0.7]} /> 
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
        {index > 0 && (
             <mesh position={[-0.5, 0, 0]} rotation={[0,0,Math.PI/2]}>
                 <cylinderGeometry args={[0.15, 0.15, 0.4, 8]} />
                 <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
             </mesh>
        )}
      </mesh>
      {children}
    </group>
  );
}

function buildTailChain(count: number, currentIndex = 0): React.ReactNode {
  if (currentIndex >= count) return null;
  return (
    <TailSegment key={currentIndex} index={currentIndex} totalSegments={count}>
      {buildTailChain(count, currentIndex + 1)}
    </TailSegment>
  );
}

function Scene() {
  const segmentCount = 8;

  return (
    <group position={[-4, 0, 0]} rotation={[0, 0, -0.1]}>
      {buildTailChain(segmentCount)}
    </group>
  );
}

export default function TailHero3D() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={['transparent']} />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-5, -5, -5]} color="#c2410c" intensity={1} />
        
        <Environment preset="city" />
        <Scene />
      </Canvas>
    </div>
  );
}