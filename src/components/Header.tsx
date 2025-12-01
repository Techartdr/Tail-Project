// src/components/Header.tsx
import Link from 'next/link';
import './Header.css';

export default function Header() {
  return (
    <header className="main-header">
      <nav className="main-nav container">
        
        <Link href="/" className="nav-logo">
          Project Tail
        </Link>

        <ul className="nav-links">
          <li>
            <Link href="/how-it-works">Comment ça marche ?</Link>
          </li>
          <li>
            <Link href="/simulateur">Simulateur</Link>
          </li>
          <li>
            <Link href="/showroom">Showroom</Link>
          </li>
        </ul>

        <Link href="/configurateur" className="cta-button">
          Configurer
        </Link>
        
      </nav>
    </header>
  );
}