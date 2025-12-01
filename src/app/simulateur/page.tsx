import TailSimulator from '@/components/TailSimulator'; 
import './simulateur.css';

export default function SimulateurPage() {
  return (
    <div className="simulateur-page-wrapper">
      
      <header className="simulateur-header">
        <div className="container">
          <h1>Simulateur d'Émotions</h1>
          <p>Testez différents mouvements de la queue.</p>
        </div>
      </header>
      
      <div className="simulateur-content container">
        
        <div className="simulateur-alert">
          <div className="alert-icon">🛠️</div>
          <div className="alert-content">
            <strong>VISUALISATION PROVISOIRE </strong>
            <p>
              Ce simulateur utilise actuellement un cube de test. Le modèle 3D final de la queue sera intégré dès que le prototype physique aura atteint un stade de fidélité suffisant.
            </p>
          </div>
        </div>

        <TailSimulator />
      </div>
      
    </div>
  );
}