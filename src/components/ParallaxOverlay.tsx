// src/components/ParallaxOverlay.tsx
'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ParallaxOverlay() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const x = useTransform(smoothX, [0, 1], [-15, 15]);
  const y = useTransform(smoothY, [0, 1], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth);
      mouseY.set(e.clientY / innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
        backgroundImage: "url('/textures/paper-texture-seamless-text.png')",
      }}
      className="parallax-layer"
    />
  );
}