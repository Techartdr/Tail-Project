// src/data/journal-data.ts
export interface JournalPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

export const journalPosts: JournalPost[] = [
  {
    slug: 'debut-du-projet',
    title: 'Pourquoi une queue ?',
    date: '10 novembre 2025',
    summary: 'Retour sur le début du projet. Explications sur le but de ce journal !',
    content: `
L'idée a commencé comme un simple défi technique : pourrions-nous créer un accessoire qui ne soit pas juste "porté", mais "vécu" ? En tant qu'étudiant en Creative Technology, le lien entre le code et l'émotion me fascine.

Le premier défi n'était pas le code, mais la mécanique.
Comment permettre à la queue d'avoir un mouvement fluide ?

Ce journal servira à documenter ces défis, les différentes itérations, ainsi que les solutions trouvées pour répondre aux différents problèmes.
    `
  },
  //Ajout futurs articles
];

export async function getPostBySlug(slug: string): Promise<JournalPost | null> {
  const post = journalPosts.find(p => p.slug === slug);
  return post || null;
}