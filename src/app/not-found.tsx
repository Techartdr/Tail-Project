// src/app/not-found.tsx
import Link from 'next/link';
import './not-found.css'; // Nouveau CSS

export default function NotFound() {
    return (
        <div className="container error-container">
            <div className="error-card">
                <h1 className="error-code">404</h1>
                <h2 className="error-title">Plan introuvable</h2>
                <p className="error-message">
                    Il semblerait que cette page ait été arrachée du carnet.
                </p>
                <Link href="/" className="cta-button">
                    Retourner à l'atelier
                </Link>
            </div>
        </div>
    );
}