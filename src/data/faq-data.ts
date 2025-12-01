// src/data/faq-data.ts
export type FAQCategory = 'technique' | 'artisanat' | 'commande';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

export const faqItems: FAQItem[] = [
  {
    id: 'f1',
    question: 'Comment la queue détecte-t-elle mes émotions ?',
    answer: 'Elle utilise des capteurs pour déterminer les émotions du corps.',
    category: 'technique',
  },
  {
    id: 'f2',
    question: 'Quelle est l\'autonomie de la batterie ?',
    answer: 'La batterie dure environ 8 heures en utilisation active.',
    category: 'technique',
  },
  {
    id: 'f3',
    question: 'Puis-je laver la fourrure ?',
    answer: 'Oui, la housse en fourrure est amovible et lavable.',
    category: 'artisanat',
  },
  {
    id: 'f4',
    question: 'Quels sont les délais de fabrication ?',
    answer: 'Consultez votre page "Atelier" pour une estimation.',
    category: 'commande',
  },
];