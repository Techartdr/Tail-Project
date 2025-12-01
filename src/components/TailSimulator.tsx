// src/components/TailSimulator.tsx
'use client'; 

import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Grid } from '@react-three/drei';
import * as THREE from 'three';
import './TailSimulator.css';

interface TailModelProps {
  emotion: string;
  wireframe: boolean;
  speed: number;
}

function TailModel({ emotion, wireframe, speed }: TailModelProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime();
        
        let rotationSpeed = 1;
        let scaleIntensity = 0;
        let scaleFrequency = 1;

        switch (emotion) {
            case 'joy': 
                rotationSpeed = 3; 
                scaleIntensity = 0.15;
                scaleFrequency = 6;
                break;
            case 'alert': 
                rotationSpeed = 8;
                scaleIntensity = 0.05;
                scaleFrequency = 20;
                break;
            case 'focus': 
                rotationSpeed = 0.5;
                scaleIntensity = 0.02;
                scaleFrequency = 1;
                break;
            default: // 'calm'
                rotationSpeed = 1;
                scaleIntensity = 0.08;
                scaleFrequency = 2;
                break;
        }

        meshRef.current.rotation.y += 0.002 * rotationSpeed * speed;
        meshRef.current.rotation.z += 0.001 * rotationSpeed * speed;

        const s = 1 + Math.sin(t * scaleFrequency * speed) * scaleIntensity;
        meshRef.current.scale.set(s, s, s);
    });

    const color = 
        emotion === 'joy' ? '#00e0c6' : 
        emotion === 'alert' ? '#d97706' : 
        emotion === 'focus' ? '#ffffff' : '#6b5d55';

    return (
        <mesh ref={meshRef} position={[0, 0.5, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial 
                color={color} 
                wireframe={wireframe}
                roughness={0.3}
                metalness={0.6}
            />
        </mesh>
    );
}

export default function TailSimulator() {
    const [emotion, setEmotion] = useState('calm');
    const [speed, setSpeed] = useState(1.0);
    const [wireframe, setWireframe] = useState(false);
    const [showGrid, setShowGrid] = useState(true);

    const emotions = [
      { id: 'calm', name: 'Calme' },
      { id: 'joy', name: 'Joie' },
      { id: 'focus', name: 'Concentration' },
      { id: 'alert', name: 'Alerte' },
    ];

    return (
        <div className="simulator-container">
            
            <div className="controls">
                
                <div className="controls-group">
                    <h3>Émotion</h3>
                    <div className="controls-buttons-wrapper">
                        {emotions.map(item => (
                            <button
                                key={item.id}
                                onClick={() => setEmotion(item.id)}
                                className={`control-button ${emotion === item.id ? 'active' : ''}`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="controls-group">
                    <h3>Paramètres</h3>
                    <div className="options-wrapper">
                        <div className="option-row">
                            <label>Vitesse Moteur : {speed.toFixed(1)}x</label>
                            <input 
                                type="range" 
                                min="0.1" max="3.0" step="0.1" 
                                value={speed}
                                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                            />
                        </div>
                        
                        <div className="option-row">
                            <label>Mode Debug (Structure)</label>
                            <input 
                                type="checkbox" 
                                checked={wireframe}
                                onChange={(e) => setWireframe(e.target.checked)}
                            />
                        </div>

                        <div className="option-row">
                            <label>Grille de Calibration</label>
                            <input 
                                type="checkbox" 
                                checked={showGrid}
                                onChange={(e) => setShowGrid(e.target.checked)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="canvas-wrapper">
                <div className="interaction-hint">
                    <span>🖱️</span> Tourner • Zoomer • Déplacer
                </div>

                <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />
                    
                    <Environment preset="city" />
                    
                    {showGrid && (
                        <Grid 
                            position={[0, 0, 0]} 
                            args={[10, 10]} 
                            cellColor="#6b5d55" 
                            sectionColor="#d97706" 
                            fadeDistance={20} 
                        />
                    )}
                    
                    <TailModel emotion={emotion} wireframe={wireframe} speed={speed} />

                    <OrbitControls 
                        enablePan={true} 
                        enableZoom={true} 
                        enableRotate={true}
                        minDistance={2}
                        maxDistance={10}
                    />
                </Canvas>
            </div>
            
            <div className="status-display">
                STATUS : <strong>{emotion.toUpperCase()}</strong> | RPM : <strong>{Math.round(speed * 100)}%</strong>
            </div>
        </div>
    );
}