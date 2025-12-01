// src/app/faq/page.tsx
import InteractiveFAQ from '@/components/InteractiveFAQ';
import './faq.css'; 

export default function FAQPage() {
  return (
    <div className="faq-page-wrapper">
      
      <header className="faq-header">
        <div className="header-inner container">
          <h1>Base de Connaissances</h1>
          <p>Trouvez les réponses à vos questions techniques et pratiques.</p>
        </div>
      </header>
      
      <div className="faq-container container">
        <div className="faq-content-wrapper">
          <InteractiveFAQ />
        </div>
      </div>
      
    </div>
  );
}