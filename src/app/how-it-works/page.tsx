// src/app/how-it-works/page.tsx
import ScrollExperience from '@/components/ScrollExperience';
import Link from 'next/link';
import './how-it-works.css'; 

export default function HowItWorksPage() {
  return (
    <main className="how-it-works-wrapper">
      
      <div className="how-it-works-header">
        <div className="container">
          <h1>Comment ça marche ?</h1>
          <p className="subtitle">
            Défilez pour découvrir la technologie permettant le fonctionnement de la queue connectée.
          </p>
        </div>
      </div>

      <ScrollExperience />

      <div className="how-it-works-footer">
        <div className="container">
          <h2>Prêt à essayer ?</h2>
          <p>Configurez et personnalisez la vôtre selon vos envies !</p>
          <Link href="/configurateur" className="cta-button">
            Lancer le configurateur
          </Link>
        </div>
      </div>

    </main>
  );
}