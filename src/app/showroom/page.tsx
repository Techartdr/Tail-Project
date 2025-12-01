// src/app/showroom/page.tsx
import Link from 'next/link';
import { showroomPresets } from '@/data/showroom-data';
import './showroom.css';

export default function ShowroomPage() {
  return (
    <div className="showroom-page-wrapper">
      
      <header className="showroom-header">
        <div className="container">
          <h1>Showroom Interactif</h1>
          <p>Trouvez l'inspiration. Cliquez sur un design pour le personnaliser.</p>
        </div>
      </header>

      <div className="showroom-container container">
        <div className="showroom-grid">
          {showroomPresets.map((preset) => (
            <div key={preset.id} className="preset-card">
              
              <div className="preset-card-image-wrapper">
                <img 
                  src={preset.imageUrl || "https://via.placeholder.com/400x250"} 
                  alt={preset.name} 
                  className="preset-card-image" 
                />
                {preset.config.hasLEDs && (
                  <div className="image-badge" style={{backgroundColor: preset.config.ledColor}}>
                    LED ACTIF
                  </div>
                )}
              </div>
              
              <div className="preset-card-content">
                <div className="preset-header-row">
                   <h3>{preset.name}</h3>
                </div>

                <div className="preset-tags">
                  <span className="tag">{preset.config.materialType}</span>
                  <span className="tag">L: {preset.config.length}m</span>
                </div>

                <p>{preset.description}</p>
                
                <Link 
                  href={`/configurateur?baseColor=${encodeURIComponent(preset.config.baseColor)}&tipColor=${encodeURIComponent(preset.config.tipColor)}&length=${preset.config.length}&thickness=${preset.config.thickness}&curve=${preset.config.curve}&materialType=${preset.config.materialType}&hasLEDs=${preset.config.hasLEDs}&ledColor=${encodeURIComponent(preset.config.ledColor)}`}
                  className="cta-button"
                >
                  Personnaliser ce design
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}