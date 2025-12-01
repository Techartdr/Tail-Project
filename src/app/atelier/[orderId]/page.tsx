// src/app/atelier/[orderId]/page.tsx
import { getOrderDetails } from '@/data/atelier-data'; 
import Link from 'next/link';
import { notFound } from 'next/navigation';
import './atelier.css'; 

export default async function AtelierPage({ params }: { params: { orderId: string } }) {
  
  const { orderId } = await params;
  const order = await getOrderDetails(orderId);

  if (!order) {
    notFound();
  }

  return (
    <div className="atelier-page-wrapper">
      
      <header className="atelier-header">
        <div className="container">
          <h1>Atelier : Commande #{order.id}</h1>
          <p>Bonjour {order.customerName}, voici l'avancement de votre {order.productName}.</p>
          <p className="atelier-estimate">
            Date d'estimation de fin : <strong>{order.estimatedCompletion}</strong>
          </p>
        </div>
      </header>

      <div className="atelier-content container">
        <h2>Timeline de production</h2>
        <div className="timeline-wrapper">
          <ol className="timeline">
            {order.steps.map(step => (
              <li key={step.id} className={`timeline-step status-${step.status}`}>
                <div className="step-content">
                  <span className="step-name">{step.name}</span>
                  <p className="step-description">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}