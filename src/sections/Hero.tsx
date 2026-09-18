import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import { Suspense } from 'react'

const Hero3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#D4AF37" />
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Text
            position={[0, 0, 0]}
            fontSize={1.5}
            fontWeight={700}
            color="#D4AF37"
            anchorX={'center' as any}
            anchorY={'center' as any}
          >
            THOREX
          </Text>
        </Float>
        <Float speed={3} rotationIntensity={1} floatIntensity={1} position={[3, -1, 0]}>
          <mesh>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={0.3} />
          </mesh>
        </Float>
        <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.8} position={[-3, 1, 0]}>
          <mesh>
            <torusGeometry args={[0.4, 0.1, 16, 32]} />
            <meshStandardMaterial color="#F0D060" emissive="#F0D060" emissiveIntensity={0.2} />
          </mesh>
        </Float>
        <Float speed={3.5} rotationIntensity={0.6} floatIntensity={0.6} position={[2, 2, -1]}>
          <mesh>
            <icosahedronGeometry args={[0.3, 0]} />
            <meshStandardMaterial color="#D4AF37" wireframe emissive="#D4AF37" emissiveIntensity={0.4} />
          </mesh>
        </Float>
      </Suspense>
    </Canvas>
  )
}

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background grid-bg">
      <div className="absolute inset-0 opacity-30">
        <Hero3D />
      </div>

      <div className="noise" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            ✨ Available for new projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-white">Crafting</span>{' '}
          <span className="gold-gradient">Digital</span>{' '}
          <span className="text-white">Experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          I'm THOREX STACK, a web developer & designer creating immersive,
          performant digital experiences with cutting-edge technologies
          and thoughtful design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold px-8 py-3 rounded-lg flex items-center gap-2"
          >
            View My Work
            <ArrowDown size={20} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold-outline px-8 py-3 rounded-lg flex items-center gap-2"
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 flex items-center gap-2 transition-colors"
          >
            <Download size={20} />
            Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-500 text-sm">
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}