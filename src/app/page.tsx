// src/app/page.tsx
import Link from 'next/link';
import TailHero3D from '@/components/TailHero3D';
import './homepage.css';

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <h1>Exprimez-vous !</h1>
        <p className="subtitle">
          Découvrez votre future queue connectée,
          <br></br>
          capable de réagir instantanément à vos émotions.
          <br></br>
          L'atout ultime pour vous, votre cosplay et votre fursuit !
        </p>
        
        <div className="hero-visual">
          <TailHero3D />
        </div>

        <div className="hero-actions">
          <Link href="/how-it-works" className="cta-button">
            Découvrir le concept
          </Link>
          <Link href="/configurateur" className="secondary-link">
            Aller au configurateur
          </Link>
        </div>
      </section>

      <section className="home-section">
        <h2>La technologie derrière cette innovation !</h2>
        <p className="description">
          Découvrez comment nous traduisons vos émotions en mouvement.
        </p>
        <Link href="/how-it-works" className="cta-button">
          Voir l'explication interactive
        </Link>
      </section>

      <section className="home-section">
        <h2>Testez-le, maintenant !</h2>
        <p className="description">
          Utilisez notre simulateur 3D pour mieux comprendre cette technologie.
        </p>
        <Link href="/simulateur" className="cta-button">
          Lancer le Simulateur
        </Link>
      </section>

      <section className="home-section">
        <h2>Une approche scientifique !</h2>
        <p className="description">
          Conçu en collaboration avec des chercheurs en apprentissage humain pour garantir une expressivité naturelle.
        </p>
        <Link href="/recherche" className="cta-button">
          Découvrir notre laboratoire
        </Link>
      </section>
    </>
  );
}