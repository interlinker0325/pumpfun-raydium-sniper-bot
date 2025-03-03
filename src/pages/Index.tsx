
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Guide from '@/components/Guide';
import Statistics from '@/components/Statistics';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Add a smooth scroll behavior globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full star-field"></div>
      <div className="absolute top-0 left-0 w-full h-full star-field-small"></div>
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Guide />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
