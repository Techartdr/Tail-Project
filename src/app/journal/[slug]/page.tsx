// src/app/journal/[slug]/page.tsx
import Link from 'next/link';
import { getPostBySlug } from '@/data/journal-data';
import { notFound } from 'next/navigation';
import '../journal.css';

export default async function JournalPostPage({ params }: { params: { slug: string } }) {
  
  const { slug } = await params; 
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound(); 
  }

  return (
    <div className="post-article-wrapper">
      
      <div className="post-top-section">
        <div className="container">
          <nav className="post-nav">
            <Link href="/journal" className="back-link">
              ← Retour au journal
            </Link>
          </nav>

          <header className="post-header">
            <h1>{post.title}</h1>
            <span className="post-date-badge">Dossier du {post.date}</span>
            <p className="post-intro">{post.summary}</p>
          </header>
        </div>
      </div>

      <div className="post-content-container container">
        <article className="post-content">
          {post.content}
        </article>
      </div>
      
    </div>
  );
}