// src/app/developers/page.tsx

import Link from 'next/link';
import './developers.css';

export default function DevelopersPage() {
  return (
    <div className="dev-hub-container container">
      
      <header className="dev-hub-header">
        <h1>Centre de développement</h1>
        <p className="subtitle">
          Nous travaillons pour rendre compatible votre tail avec d'autres projets !
        </p>
        
        <div className="header-actions">
          <Link href="#api-reference" className="cta-button">
            Documentation API
          </Link>
          <span className="secondary-link disabled">SDK (Bientôt)</span>
        </div>
      </header>

      <div className="dev-alert">
        <div className="alert-icon">⚠️</div>
        <div className="alert-content">
          <strong>EN DÉVELOPPEMENT</strong>
          <p>
            L'API présentée ci-dessous est en cours de construction active. 
            Les endpoints ne sont pas encore utilisables en production et sont susceptibles de changer.
          </p>
        </div>
      </div>

      <section className="dev-section">
        <h2>Démarrage rapide</h2>
        <p>
          Votre queue peut intéragir avec d'autres projets. Par exemple, avec les visières protogen !
          <br></br>
          L'API vous permet d'envoyer des commandes de mouvement directes ou de simuler des états émotionnels.
        </p>
      </section>

      <section id="api-reference" className="dev-section">
        <h2>Référence de l'API</h2>
        
        {/* Endpoint 1 */}
        <div className="api-block">
          <div className="api-endpoint">
            <span className="method post">POST</span>
            <span className="path">/api/v1/tail/emotion</span>
          </div>
          <p>Déclenche un mouvement basé sur un état émotionnel.</p>
          
          <div className="code-window">
            <div className="code-header">app.js</div>
            <pre><code>
{`// Exemple avec fetch (JavaScript)
await fetch('https://api.project-tail.com/api/v1/tail/emotion', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer VOTRE_CLE_API'
  },
  body: JSON.stringify({ emotion: 'joy', intensity: 0.8 })
});`}
            </code></pre>
          </div>
        </div>

        {/* Endpoint 2 */}
        <div className="api-block">
          <div className="api-endpoint">
            <span className="method post">POST</span>
            <span className="path">/api/v1/tail/move</span>
          </div>
          <p>Envoie une commande de mouvement direct.</p>
          
          <div className="code-window">
            <div className="code-header">terminal</div>
            <pre><code>
{`# Exemple avec cURL
curl -X POST 'https://api.project-tail.com/api/v1/tail/move' \\
     -H 'Authorization: Bearer VOTRE_CLE_API' \\
     -d '{ "animation": "wag_fast", "duration_ms": 5000 }'`}
            </code></pre>
          </div>
        </div>
        
        {/* Endpoint 3 */}
        <div className="api-block">
          <div className="api-endpoint">
            <span className="method get">GET</span>
            <span className="path">/api/v1/tail/status</span>
          </div>
          <p>Vérifie l'état de la connexion et le niveau de batterie.</p>
          
          <div className="code-window">
            <div className="code-header">script.py</div>
            <pre><code>
{`# Exemple avec Python
import requests
headers = {'Authorization': 'Bearer VOTRE_CLE_API'}
response = requests.get(
    'https://api.project-tail.com/api/v1/tail/status', 
    headers=headers
)
print(response.json())
# { "status": "connected", "battery_level": 87 }`}
            </code></pre>
          </div>
        </div>
      </section>
    </div>
  );
}

/*<section id="compatibility" className="dev-section">
        <h2>Compatibilité Système</h2>
        <p>
          L'application compagnon principale sera disponible pour 
          votre **Samsung (Android)**. L'API est universelle et testable sur la plupart des systèmes, y compris **Arch Linux**.
        </p>
        <ul className="compatibility-list">
          <li className="wip">Android (Application native & API)</li>
          <li className="wip">Windows (via Bluetooth LE)</li>
          <li className="wip">macOS (via Bluetooth LE)</li>
          <li className="wip">Linux (via Bluetooth LE)</li>
          <li className="wip">iOS (SDK natif en développement)</li>
        </ul>
      </section>*/