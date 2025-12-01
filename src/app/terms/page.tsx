// src/app/terms/page.tsx
import Link from 'next/link';
import './terms.css';

export default function TermsPage() {
  return (
    <div className="terms-container container">

      <header className="terms-header">
        <h1>Conditions & Transparence</h1>
        <p>Notre engagement envers vous.</p>
      </header>

      <div className="terms-alert">
        <div className="alert-icon">🚧</div>
        <div className="alert-content">
          <strong>PROJET EN COURS DE DÉVELOPPEMENT</strong>
          <p>
            Veuillez noter que le projet <em>Tail Connectée</em> est actuellement en phase de prototypage. 
            Les conditions ci-dessous sont des ébauches non contractuelles et sont susceptibles 
            d'évoluer avant la commercialisation finale.
          </p>
        </div>
      </div>

      <section className="terms-section">
        <div className="terms-legal">
          <h3>1. Garantie Matérielle (Hardware)</h3>
          <p>
            Votre queue connectée est garantie contre tout défaut de fabrication 
            matérielle (servomoteurs, micro-contrôleur, structure imprimée 3D) 
            pour une période d'un (1) an à compter de la date de réception.
          </p>
          <p>
            Cette garantie inclut la réparation ou le remplacement des pièces défectueuses. 
            Elle ne couvre pas l'usure normale de la fourrure synthétique, ni les dommages 
            causés par une utilisation non conforme (immersion dans l'eau, chocs violents, 
            poids excessif appliqué sur la structure).
          </p>
        </div>
        <aside className="terms-human">
          <h4>En bref :</h4>
          <p>
            Si le moteur lâche ou qu'une pièce casse sans raison : on répare gratuitement.
            Si vous tombez dans une piscine avec : on ne peut rien faire.
          </p>
        </aside>
      </section>

      <section className="terms-section">
        <div className="terms-legal">
          <h3>2. Logiciel & Open Source</h3>
          <p>
            Une partie du firmware de la queue est basé sur une architecture ouverte. 
            L'achat vous octroie une licence d'utilisation à vie. 
            Nous encourageons la modification et l'amélioration du code via notre <Link href="/developers"> Developer Hub</Link>.
          </p>
          <p>
            Cependant, toute modification du firmware officiel (overclocking des moteurs, 
            modification des limites de sécurité) se fait aux risques de l'utilisateur 
            et peut entraîner l'annulation de la garantie matérielle si elle cause une panne.
          </p>
        </div>
        <aside className="terms-human">
          <h4>En bref :</h4>
          <p>
            Le code est à vous. Vous pouvez le bidouiller ("Hacker") autant que vous voulez.
            Mais si votre code fait fondre les moteurs, la garantie saute.
          </p>
        </aside>
      </section>

      <section className="terms-section">
        <div className="terms-legal">
          <h3>3. Données & Vie Privée</h3>
          <p>
            L'analyse des émotions (données biométriques) est effectuée exclusivement en local par le processeur 
            embarqué dans la queue.
          </p>
          <p>
            Aucune donnée biométrique brute (rythme cardiaque, ton de la voix) n'est 
            enregistrée, stockée ou transmise à des serveurs tiers.
          </p>
        </div>
        <aside className="terms-human">
          <h4>En bref :</h4>
          <p>
            Ce qui se passe dans votre queue reste dans votre queue. 
            Nous n'analysons ni ne stockons ce que vous ressentez en dehors de l'écosystème.
          </p>
        </aside>
      </section>

      <section className="terms-section">
        <div className="terms-legal">
          <h3>4. Sécurité & Usage</h3>
          <p>
            Ce dispositif est un accessoire de costume animatronique comportant des pièces mobiles puissantes.
            Il est impératif de ne pas s'asseoir directement sur le mécanisme et de laisser 
            un espace libre autour de vous lors de l'activation des modes expressifs.
            Le mécanisme dispose d'un arrêt d'urgence automatique en cas de résistance anormale.
          </p>
        </div>
        <aside className="terms-human">
          <h4>En bref :</h4>
          <p>
            Ne vous asseyez pas dessus ! C'est un robot, pas un coussin. 
            Attention à ne pas balayer les verres sur la table basse.
          </p>
        </aside>
      </section>

    </div>
  );
}