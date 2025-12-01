// src/app/journal/page.tsx
import Link from 'next/link';
import { journalPosts } from '@/data/journal-data';
import './journal.css';

export default function JournalPage() {
  return (
    <div className="journal-page-wrapper">
      
      <header className="journal-header">
        <div className="container">
          <h1>Journal de Création</h1>
          <p>Les coulisses du développement, des défis techniques aux succès.</p>
        </div>
      </header>

      <div className="container journal-content">
        <ul className="post-list">
          {journalPosts.map(post => (
            <li key={post.slug} className="post-list-item">
              
              <div className="post-list-item-content">
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                </div>
                
                <h2>{post.title}</h2>
                
                <p className="post-summary">{post.summary}</p>
                
                <Link href={`/journal/${post.slug}`} className="read-more-link">
                  Lire la suite →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}