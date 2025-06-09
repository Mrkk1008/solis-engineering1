'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useState } from 'react';
import { Environment, Float, PresentationControls, Trail, useTrail, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function EnergyFlow({ position }: { position: [number, number, number] }) {
  const lineRef = useRef<THREE.Mesh>(null);
  const [trail] = useTrail({
    length: 10,
    decay: 0.5,
    local: false,
  });

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <Trail {...trail}>
      <mesh ref={lineRef} position={position}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#F59E0B" transparent opacity={0.8} />
      </mesh>
    </Trail>
  );
}

function Panel({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  const [hovered, setHovered] = useState(false);
  const panelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (panelRef.current) {
      panelRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + rotation[0];
    }
  });

  const glowMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#F59E0B',
    transparent: true,
    opacity: 0.2,
    blending: THREE.AdditiveBlending,
  }), []);

  return (
    <group
      ref={panelRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      {/* Panel Frame */}
      <mesh rotation={rotation}>
        <boxGeometry args={[2, 0.1, 1.2]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Solar Cells */}
      <mesh position={[0, 0.06, 0]} rotation={rotation}>
        <boxGeometry args={[1.9, 0.05, 1.1]} />
        <meshPhysicalMaterial
          color="#000033"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Glass Cover */}
      <mesh position={[0, 0.08, 0]} rotation={rotation}>
        <boxGeometry args={[1.9, 0.02, 1.1]} />
        <meshPhysicalMaterial
          color="#3366ff"
          metalness={0.9}
          roughness={0.1}
          transmission={0.9}
          thickness={0.5}
          opacity={0.5}
          transparent
        />
      </mesh>

      {/* Glow Effect when hovered */}
      {hovered && (
        <mesh position={[0, 0.1, 0]} rotation={rotation}>
          <boxGeometry args={[2, 0.1, 1.2]} />
          <primitive object={glowMaterial} />
        </mesh>
      )}

      {/* Energy Flow */}
      {hovered && (
        <>
          <EnergyFlow position={[0.5, 0.2, 0.3]} />
          <EnergyFlow position={[-0.5, 0.2, -0.3]} />
        </>
      )}
    </group>
  );
}

function PowerStation() {
  const stationRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (stationRef.current) {
      stationRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group
      ref={stationRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Base */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[1, 1.2, 0.5, 8]} />
        <meshStandardMaterial
          color="#334155"
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>

      {/* Core */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 1, 16]} />
        <MeshDistortMaterial
          color="#F59E0B"
          speed={2}
          distort={0.3}
          radius={1}
        />
      </mesh>

      {/* Energy Ring */}
      <mesh position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.8, 0.1, 16, 32]} />
        <meshBasicMaterial
          color="#F59E0B"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Floating Energy Particles */}
      {hovered && Array.from({ length: 5 }).map((_, i) => (
        <EnergyFlow
          key={i}
          position={[
            Math.cos((i / 5) * Math.PI * 2) * 0.8,
            -1,
            Math.sin((i / 5) * Math.PI * 2) * 0.8
          ]}
        />
      ))}
    </group>
  );
}

export function SolarSystem() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [-6, 4, 8], fov: 45 }}>
        <color attach="background" args={['#000']} />
        <Environment preset="night" />
        
        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap
        >
          <Float rotationIntensity={0.2}>
            {/* Solar Panel Array */}
            <Panel position={[-2, 0, -2]} rotation={[0.3, 0.5, 0]} />
            <Panel position={[0, 0, -1]} rotation={[0.3, 0, 0]} />
            <Panel position={[2, 0, -2]} rotation={[0.3, -0.5, 0]} />
            <Panel position={[-2, 0, 0]} rotation={[0.3, 0.3, 0]} />
            <Panel position={[2, 0, 0]} rotation={[0.3, -0.3, 0]} />
            <Panel position={[-1, 0, 2]} rotation={[0.3, 0.2, 0]} />
            <Panel position={[1, 0, 2]} rotation={[0.3, -0.2, 0]} />

            {/* Power Station */}
            <PowerStation />
          </Float>
        </PresentationControls>

        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <spotLight
          position={[5, 8, 2]}
          angle={0.5}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-5, 5, -2]} intensity={0.5} color="#F59E0B" />
      </Canvas>
    </div>
  );
} 