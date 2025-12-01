// src/components/InteractiveFAQ.tsx
'use client';
import { useState, useMemo } from 'react';
import { faqItems, FAQItem, FAQCategory } from '@/data/faq-data';
import Fuse from 'fuse.js';
import { useDebounce } from '@/hooks/useDebounce';
import HighlightMatch from './HighlightMatch';

const fuseOptions = {
  keys: ['question', 'answer'],
  threshold: 0.4, 
  includeMatches: true, 
};

export default function InteractiveFAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<FAQCategory | 'all'>('all');

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredItems = useMemo(() => {
    const categoryItems = faqItems.filter(item => 
      activeCategory === 'all' || item.category === activeCategory
    );

    if (!debouncedSearchTerm.trim()) {
      return categoryItems;
    }

    const fuse = new Fuse(categoryItems, fuseOptions);
    
    return fuse.search(debouncedSearchTerm).map(result => result.item);

  }, [debouncedSearchTerm, activeCategory]);

  const categories: { id: FAQCategory | 'all', name: string }[] = [
    { id: 'all', name: 'Toutes' },
    { id: 'technique', name: 'Technique' },
    { id: 'artisanat', name: 'Artisanat' },
    { id: 'commande', name: 'Commandes' },
  ];

  return (
    <div>
      <div className="faq-controls">
        <input
          type="text"
          placeholder="Rechercher (ex: 'batterie', 'lavage')..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {categories.map(cat => (
          <button
            key={cat.id}
            className={activeCategory === cat.id ? 'active' : ''}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="faq-list">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div key={item.id} className="faq-item">
              <span className="faq-category">{item.category}</span>
              <h3>
                <HighlightMatch 
                  text={item.question} 
                  highlight={debouncedSearchTerm} 
                />
              </h3>
              <p>
                <HighlightMatch 
                  text={item.answer} 
                  highlight={debouncedSearchTerm} 
                />
              </p>
            </div>
          ))
        ) : (
          <p>Aucun résultat trouvé pour "{debouncedSearchTerm}".</p>
        )}
      </div>
    </div>
  );
}