// src/app/configurateur/page.tsx
import { Suspense } from 'react';
import TailConfigurator from '@/components/TailConfigurator';
import Link from 'next/link';
import './configurateur.css';

export default function ConfigurateurlPage() {
  return (
    <div className="configurateur-page-wrapper">

      <header className="configurateur-header">
        <div className="container">
          <h1>Configurateur de Produit</h1>
          <p>Créez la queue de vos rêves. Les modifications sont visibles en temps réel.</p>
        </div>
      </header>
      
      <div className="configurateur-content container">
        <div className="configurateur-alert">
          <div className="alert-icon">⚠️</div>
          <div className="alert-content">
            <strong>PROTOTYPAGE EN COURS (ALPHA)</strong>
            <p>
              Ce configurateur utilise actuellement un <strong>modèle 3D de calibration</strong>. 
              Il sera remplacé par un modèle réaliste dès que le prototype physique sera pleinement fonctionnel.
            </p>
            <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
              La prise de rendez-vous sera ouverte exclusivement une fois les phases de développement et de tests terminées.
            </p>
          </div>
        </div>
        
        <Suspense fallback={<div style={{textAlign: 'center', padding: '2rem'}}>Chargement de l'atelier...</div>}>
           <TailConfigurator />
        </Suspense>
        
      </div>

    </div>
  );
}