// src/data/showroom-data.ts

export interface ShowroomPreset {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  config: {
    baseColor: string;
    tipColor: string;
    length: number;
    thickness: number;
    curve: number;
    materialType: 'tech' | 'matt' | 'metallic';
    hasLEDs: boolean;
    ledColor: string;
  };
}

export const showroomPresets: ShowroomPreset[] = [
  {
    id: 'design-001',
    name: 'Le Classique "Neige"',
    imageUrl: '/showroom/preset-snow.jpg', 
    description: 'Un design épuré et minimaliste, parfait pour une première approche. Finition mate pour un rendu doux.',
    config: {
      baseColor: '#ffffff',
      tipColor: '#808080',
      length: 1.0,
      thickness: 1.0,
      curve: 0.0,
      materialType: 'matt',
      hasLEDs: false,
      ledColor: '#ffffff' // Non utilisé car hasLEDs est false
    },
  },
  {
    id: 'design-002',
    name: 'Protocole "Volcan"',
    imageUrl: '/showroom/preset-volcano.jpg',
    description: 'Un design audacieux aux couleurs magmatiques. Finition métallique et noyau LED actif.',
    config: {
      baseColor: '#222222',
      tipColor: '#ff4500',
      length: 1.2,
      thickness: 1.1,
      curve: 0.5,
      materialType: 'metallic',
      hasLEDs: true,
      ledColor: '#ff4500'
    },
  },
];