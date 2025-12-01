// src/app/configurateur/page.tsx
import TailConfigurator from '@/components/TailConfigurator';
import Link from 'next/link';
import './configurateur.css';

export default function ConfigurateurlPage() {
  return (
    <div className="configurateur-page-wrapper">

      <header className="configurateur-header">
        <div className="container">
          <h1>Configurateur de Produit</h1>
          <p>Créez la queue de vos rêves. Vos idées serviront de base pour personnaliser votre queue par la suite.</p>
        </div>
      </header>
      
      <div className="configurateur-content container">
        
        <div className="configurateur-alert">
          <div className="alert-icon">⚠️</div>
          <div className="alert-content">
            <strong>PROTOTYPAGE EN COURS</strong>
            <p>
              Ce configurateur utilise actuellement un modèle 3D de test. 
              Il sera remplacé par le modèle réaliste dès que le prototype physique sera pleinement fonctionnel.
            </p>
            <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
              La prise de rendez-vous sera ouverte exclusivement une fois les phases de développement et de tests terminées.
              Le prix indiqué sert actuellement de test, il n'est pas indicatif et n'est pas contractuel.
            </p>
          </div>
        </div>

        <TailConfigurator />
      </div>

    </div>
  );
}