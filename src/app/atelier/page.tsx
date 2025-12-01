// src/app/atelier/page.tsx
import Link from 'next/link';

export default function AtelierLookupPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Page de test de l'Atelier</h1>
      <p>Ceci est une page temporaire pour tester les liens vers les commandes fictives.</p>
      <ul>
        <li>
          <Link href="/atelier/order-123">Voir Commande #order-123</Link> 
          (3 étapes complétées, 1 en cours)
        </li>
        <li>
          <Link href="/atelier/order-456">Voir Commande #order-456</Link> 
          (4 étapes complétées, 1 en cours)
        </li>
        <li>
          <Link href="/atelier/commande-inexistante">Tester une commande non trouvée (404)</Link>
        </li>
      </ul>
    </div>
  );
}