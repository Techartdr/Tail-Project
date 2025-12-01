// src/app/recherche/page.tsx
import Link from 'next/link';
import './recherche.css';

export default function RecherchePage() {
  return (
    <div className="lab-wrapper">

      <header className="lab-header">
        <div className="lab-inner">
          <h1>Notre Laboratoire</h1>
          <p className="subtitle">
            Plus qu'un accessoire. Une extension de vous-même.
          </p>
        </div>
      </header>

      <section className="lab-section">
        <div className="lab-inner">
          <h2>La Vision : Au-delà de l'accessoire</h2>
          <p>
            Ce projet est né d'un postulat simple : et si nos cosplay et fursuit pouvaient
            refléter nos émotions ?<br />
            En tant qu'étudiant Creative Technologist à l'ESILV La Défense, 
            ma passion est de lier le monde numérique et l'expression humaine.
          <br></br>
            La "queue connectée" n'est pas un simple costume, 
            c'est un prototype de communication non-verbale augmentée.
          </p>
        </div>
      </section>

      <section className="lab-section">
        <div className="lab-inner">
          <h2>L'Approche : Science & Mécatronique</h2>
          <p>
          La crédibilité de ce projet repose sur une rigueur scientifique. Sous la supervision d'un docteur en apprentissage humain, nous ne cherchons pas simplement à imiter un mouvement, mais à traduire une intention.
          <br></br>
          Pour garantir une réactivité absolue, nous cherchons à développer une architecture 100% autonome. Des capteurs captent vos signaux physiologiques et les transmettent directement au microcontrôleur intégré.
          <br></br>
          Le traitement du signal s'effectue localement, en temps réel. Cette absence d'intermédiaire permet la privatisation données et une latence quasi-nulle : la queue réagit en temps réel, devenant une véritable extension naturelle de votre système nerveux.
          </p>
        </div>
      </section>

      <section className="lab-section">
        <div className="lab-inner">
          <h2>Le Futur : Une plateforme ouverte</h2>
          <p>
            Notre objectif est de créer une queue robotique qui réagit aux émotions, mais qui sait aussi communiquer avec l'extérieur.
            En s'inspirant de la communauté des protogènes, nous cherchons à rendre notre système compatible avec d'autres projets open source,
            facilitant les interactions entre différents créateurs.
            <br />
            C'est pourquoi le <Link href="/developers">Developer Hub</Link> est si important. Nous voulons que les créateurs, 
            les développeurs et les chercheurs puissent créer leurs propres interactions avec d'autres systèmes.
          </p>
        </div>
      </section>
    </div>
  );
}