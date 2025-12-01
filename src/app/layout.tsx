// src/app/layout.tsx
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParallaxOverlay from '@/components/ParallaxOverlay';

export const metadata = {
  title: 'Project Tail - La queue connectée',
  description: 'Exprimez vos émotions en temps réel.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <ParallaxOverlay />
        
        <Header />
        
        <main>
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}