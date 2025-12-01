// src/components/TailConfigurator.tsx
'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Grid, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useSearchParams } from 'next/navigation';
import './TailConfigurator.css';

interface TailConfig {
    baseColor: string;
    tipColor: string;
    length: number;
    thickness: number;
    curve: number;
    materialType: 'tech' | 'matt' | 'metallic';
    hasLEDs: boolean; 
    ledColor: string;
}

function ConfigurableTailModel({ config }: { config: TailConfig }) {
    const segmentsCount = 10;
    const segments = Array.from({ length: segmentsCount });
    const stackStep = config.length * 0.8; 
    const totalStackLength = (segmentsCount - 1) * stackStep; 

    return (
        <group rotation={[0, 0, -Math.PI / 2]} scale={[0.6, 0.6, 0.6]}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                {segments.map((_, i) => {
                    const progress = i / segments.length; 
                    const color = new THREE.Color(config.baseColor).lerp(new THREE.Color(config.tipColor), progress);
                    const size = (1 - progress * 0.6) * config.thickness;
                    const y = (i * stackStep) - (totalStackLength / 2);
                    const x = Math.sin(progress * Math.PI) * config.curve; 
                    const z = Math.sin(progress * Math.PI * 0.5) * (config.curve * 0.5); 

                    return (
                        <mesh key={i} position={[x, y, z]} rotation={[config.curve * 0.1, 0, 0]}>
                            <cylinderGeometry args={[size * 0.9, size, config.length * 0.85, 16]} />
                            <meshStandardMaterial 
                                color={color}
                                roughness={config.materialType === 'matt' ? 0.9 : 0.2}
                                metalness={config.materialType === 'metallic' ? 0.8 : 0.1}
                                emissive={config.hasLEDs ? config.ledColor : '#000000'}
                                emissiveIntensity={config.hasLEDs ? 0.1 : 0}
                            />
                            {config.hasLEDs && (
                                <mesh position={[0, -(config.length * 0.4), 0]} scale={[1.05, 0.1, 1.05]}>
                                    <cylinderGeometry args={[size, size, 0.2, 16]} />
                                    <meshBasicMaterial color={config.ledColor} />
                                </mesh>
                            )}
                        </mesh>
                    );
                })}
            </Float>
        </group>
    );
}

export default function TailConfigurator() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState<'style' | 'geo'>('style');

    const getSafeColor = (paramName: string, defaultColor: string) => {
        const val = searchParams.get(paramName);
        if (!val) return defaultColor;
        return val.startsWith('#') ? val : `#${val}`;
    };

    const getSafeBool = (paramName: string, defaultValue: boolean) => {
        const val = searchParams.get(paramName);
        if (val === 'true') return true;
        if (val === 'false') return false;
        return defaultValue;
    };

    const [config, setConfig] = useState<TailConfig>({
        baseColor: getSafeColor('baseColor', '#3a2e28'),
        tipColor: getSafeColor('tipColor', '#d97706'),
        ledColor: getSafeColor('ledColor', '#00e0c6'),
        
        length: parseFloat(searchParams.get('length') || '1.0'),
        thickness: parseFloat(searchParams.get('thickness') || '1.0'),
        curve: parseFloat(searchParams.get('curve') || '0.0'),
        
        materialType: (searchParams.get('materialType') as 'tech' | 'matt' | 'metallic') || 'tech',
        
        hasLEDs: getSafeBool('hasLEDs', true),
    });

    const update = (key: keyof TailConfig, value: any) => {
        setConfig(prev => ({ ...prev, [key]: value }));
    };

    const price = Math.round(
        150 + 
        (config.length * 40) + 
        (config.thickness * 20) + 
        (config.materialType === 'metallic' ? 50 : 0) +
        (config.hasLEDs ? 30 : 0)
    );

    return (
        <div className="configurator-container">
            <div className="canvas-wrapper">
                <div className="interaction-hint">
                    <span>🖱️</span> Tourner • Zoomer • Déplacer
                </div>
                <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
                    <ambientLight intensity={0.6} />
                    <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} />
                    <pointLight position={[-5, -5, 5]} color={config.hasLEDs ? config.ledColor : '#ffffff'} intensity={0.8} />
                    <Environment preset="city" />
                    <Grid position={[0, -2, 0]} args={[10, 10]} cellColor="#6b5d55" sectionColor="#d97706" fadeDistance={20} />
                    <ConfigurableTailModel config={config} />
                    <OrbitControls minDistance={5} maxDistance={20} />
                </Canvas>
            </div>
            
            <div className="controls">
                
                <div className="controls-header">
                    <h2>Atelier</h2>
                </div>

                <div className="tabs-nav">
                    <button 
                        className={`tab-btn ${activeTab === 'style' ? 'active' : ''}`}
                        onClick={() => setActiveTab('style')}
                    >
                        Palette & Finition
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'geo' ? 'active' : ''}`}
                        onClick={() => setActiveTab('geo')}
                    >
                        Géométrie
                    </button>
                </div>

                <div className="controls-content">
                    
                    {activeTab === 'style' && (
                        <div className="tab-pane">
                            <div className="color-picker-grid">
                                <div className="control-group">
                                    <label>Base</label>
                                    <input type="color" value={config.baseColor} onChange={(e) => update('baseColor', e.target.value)} className="large-color-input" />
                                </div>
                                <div className="control-group">
                                    <label>Pointe</label>
                                    <input type="color" value={config.tipColor} onChange={(e) => update('tipColor', e.target.value)} className="large-color-input" />
                                </div>
                            </div>
                            
                            <div className="control-group">
                                <label>Matériau</label>
                                <div className="style-buttons">
                                    {['tech', 'matt', 'metallic'].map((type) => (
                                        <button 
                                            key={type}
                                            className={`style-btn ${config.materialType === type ? 'active' : ''}`}
                                            onClick={() => update('materialType', type)}
                                        >
                                            {type.toUpperCase()}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="control-group">
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'}}>
                                    <label style={{marginBottom: 0}}>Système LED (+30€)</label>
                                    <input 
                                        type="checkbox" 
                                        checked={config.hasLEDs} 
                                        onChange={(e) => update('hasLEDs', e.target.checked)}
                                        style={{width: '20px', height: '20px', cursor: 'pointer', accentColor: '#C67C1E'}}
                                    />
                                </div>
                                
                                {config.hasLEDs && (
                                    <input 
                                        type="color" 
                                        value={config.ledColor} 
                                        onChange={(e) => update('ledColor', e.target.value)}
                                        className="large-color-input full-width"
                                    />
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'geo' && (
                        <div className="tab-pane">
                            <div className="slider-group">
                                <label>LONGUEUR : {config.length.toFixed(1)}m</label>
                                <input type="range" min="0.5" max="2.0" step="0.1" value={config.length} onChange={(e) => update('length', parseFloat(e.target.value))} />
                            </div>

                            <div className="slider-group">
                                <label>VOLUME : {config.thickness.toFixed(1)}x</label>
                                <input type="range" min="0.5" max="1.5" step="0.1" value={config.thickness} onChange={(e) => update('thickness', parseFloat(e.target.value))} />
                            </div>

                            <div className="slider-group">
                                <label>COURBURE : {config.curve.toFixed(1)}</label>
                                <input type="range" min="-2.0" max="2.0" step="0.1" value={config.curve} onChange={(e) => update('curve', parseFloat(e.target.value))} />
                            </div>
                        </div>
                    )}
                </div>

                <div className="controls-footer">
                    <div className="price-display">
                        {price} €
                    </div>
                    
                    <button 
                        className="cta-button appointment-button" 
                        style={{width: '100%'}}
                        disabled={true}
                        title="La prise de rendez-vous sera disponible après la phase Alpha"
                    >
                        PRENDRE RENDEZ-VOUS (BIENTÔT)
                    </button>
                </div>
            </div>
        </div>
    );
}