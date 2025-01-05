'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import { motion } from 'framer-motion-3d'
import { suspend } from 'suspend-react'

function Duck() {
  const duck = useGLTF('/assets/3d/duck.glb')
  
  return (
    <motion.group
      animate={{
        y: [0, 0.5, 0],
        rotateY: [0, Math.PI * 2],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      scale={2}
    >
      <primitive object={duck.scene} />
    </motion.group>
  )
}

export function FloatingDuck() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Duck />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

