'use client'

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function DistortSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { mouse } = useThree()

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.08
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.05 + mouse.x * 0.15
  })

  return (
    <Sphere ref={meshRef} args={[1.6, 128, 128]} position={[1.5, 0, 0]}>
      <MeshDistortMaterial
        color="#b8c8b4"
        distort={0.35}
        speed={1.5}
        roughness={0.1}
        metalness={0.05}
        transparent
        opacity={0.6}
      />
    </Sphere>
  )
}

export function HeroMesh() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      aria-hidden="true"
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={0.8} />
      <DistortSphere />
    </Canvas>
  )
}
