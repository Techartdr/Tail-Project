// src/components/ScrollExperience.tsx
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    title: "1. Analyse des émotions",
    description: "Différents capteurs sont utilisés pour détecter votre état émotionnel.",
    icon: "🧪",
    label: "Capteurs"
  },
  {
    title: "2. Transmission des données",
    description: "L'émotion détectée (ex: 'Joie', 'Concentration') est envoyée instantanément à la queue,",
    icon: "⚡️",
    label: "Signal"
  },
  {
    title: "3. Noyau mécatronique",
    description: "Le microcontrôleur interne interprète le signal et active les micro-servomoteurs selon un algorithme de mouvement prédéfini.",
    icon: "⚙️",
    label: "Traitement"
  },
  {
    title: "4. Mouvement expressif",
    description: "La queue exécute un mouvement fluide et naturel, traduisant votre émotion en temps réel.",
    icon: "🐾",
    label: "Action"
  }
];

export default function ScrollExperience() {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
  
  const opacity4 = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);

  const scaleAnim = useTransform(scrollYProgress, [0.45, 0.55], [0.8, 1]);
  const rotateAnim = useTransform(scrollYProgress, [0.7, 1], [-10, 0]);

  return (
    <div ref={scrollRef} className="scroll-experience-container">
      
      <div className="sticky-visuals">
        <div className="visual-wrapper">
          
          {/* Visuel 1 */}
          <motion.div style={{ opacity: opacity1 }} className="visual-placeholder">
            <span>{steps[0].icon}</span>
            <p>{steps[0].label}</p>
          </motion.div>

          {/* Visuel 2 */}
          <motion.div style={{ opacity: opacity2 }} className="visual-placeholder">
            <span>{steps[1].icon}</span>
            <p>{steps[1].label}</p>
          </motion.div>
          
          {/* Visuel 3 */}
          <motion.div style={{ opacity: opacity3, scale: scaleAnim }} className="visual-placeholder">
            <span>{steps[2].icon}</span>
            <p>{steps[2].label}</p>
          </motion.div>

          {/* Visuel 4 */}
          <motion.div style={{ opacity: opacity4, rotate: rotateAnim }} className="visual-placeholder">
            <span>{steps[3].icon}</span>
            <p>{steps[3].label}</p>
          </motion.div>

        </div>
      </div>

      <div className="scrolling-text">
        {steps.map((step, index) => (
          <section key={index} className="step">
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
}