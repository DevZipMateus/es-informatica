
import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

// Componente interno para as partículas
function Particles({ count, color, size }: { count: number; color: string; size: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Gera posições aleatórias para as partículas em uma esfera
  const particles = useMemo(() => {
    const p = new Float32Array(count * 3);
    const radius = 5; // O raio da esfera onde as partículas irão aparecer
    for (let i = 0; i < count; i++) {
      // Distribui as partículas numa forma esférica
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 
      p[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      p[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      p[i * 3 + 2] = radius * Math.cos(theta);
    }
    return p;
  }, [count]);

  // Hook para animar os pontos a cada frame
  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta / 15; // Velocidade da rotação
      pointsRef.current.rotation.x += delta / 20;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation={true} // Partículas distantes parecem menores
        depthWrite={false} // Melhora o blending de transparência
        blending={THREE.AdditiveBlending} // Faz as partículas brilharem ao se sobreporem
      />
    </Points>
  );
}

// Componente principal do Background
export default function ShimmeringBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Partículas Vermelhas */}
        <Particles count={2000} color="#ff0000" size={0.015} />
        
        {/* Partículas Cinzas */}
        <Particles count={2000} color="#808080" size={0.01} />
      </Canvas>
    </div>
  );
}
