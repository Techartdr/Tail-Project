// src/components/Footer.tsx
import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container footer-content">
        
        <div className="footer-signature">
          Conçu par <strong>Arthur Deroo</strong> © {currentYear}
        </div>

        <nav className="footer-links">
          <Link href="/journal">
            Journal
          </Link>
          <Link href="/developers">
            Développeurs
          </Link>
          <Link href="/faq">
            FAQ
          </Link>
          <Link href="/terms">
            Conditions & Transparence
          </Link>
        </nav>
        
      </div>
    </footer>
  );
}