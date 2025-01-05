'use client'

import { Canvas } from '@react-three/fiber'
import { Text3D, OrbitControls, Environment } from '@react-three/drei'
import { motion } from 'framer-motion-3d'
import { useState, useEffect } from 'react'

function AnimatedText() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.group
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Text3D
        font="/fonts/Inter_Bold.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {"Learn in 3D"}
        <meshStandardMaterial 
          color="#4f46e5"
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </motion.group>
  )
}

export function AnimatedText3D() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedText />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

