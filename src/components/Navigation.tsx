
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { VscRobot } from "react-icons/vsc";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="container max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center space-glow">
              <VscRobot size={30}/>
            </div>
            <span className="font-display font-medium text-lg text-white">SolTrader</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => navigateToSection('hero')}
              className="nav-link text-white/80 hover:text-white"
            >
              Home
            </button>
            <button
              onClick={() => navigateToSection('guide')}
              className="nav-link text-white/80 hover:text-white"
            >
              Guide
            </button>
            <button
              onClick={() => navigateToSection('statistics')}
              className="nav-link text-white/80 hover:text-white"
            >
              Statistics
            </button>
            <button
              onClick={() => navigateToSection('pricing')}
              className="nav-link text-white/80 hover:text-white"
            >
              Pricing
            </button>
            <button
              onClick={() => navigateToSection('faq')}
              className="nav-link text-white/80 hover:text-white"
            >
              FAQ
            </button>
            <button
              onClick={() => navigateToSection('contact')}
              className="nav-link text-white/80 hover:text-white"
            >
              Contact
            </button>
          </div>
          
          <div className="hidden md:block">
            <a
              href='https://t.me/quang0325'
              className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-md space-glow"
            >
              Get Started
            </a>
          </div>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg border-b border-white/10">
          <div className="container max-w-7xl mx-auto py-4 px-6 flex flex-col space-y-4">
            <button
              onClick={() => navigateToSection('hero')}
              className="text-white/80 py-2 hover:text-white transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => navigateToSection('guide')}
              className="text-white/80 py-2 hover:text-white transition-colors text-left"
            >
              Guide
            </button>
            <button
              onClick={() => navigateToSection('statistics')}
              className="text-white/80 py-2 hover:text-white transition-colors text-left"
            >
              Statistics
            </button>
            <button
              onClick={() => navigateToSection('pricing')}
              className="text-white/80 py-2 hover:text-white transition-colors text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => navigateToSection('faq')}
              className="text-white/80 py-2 hover:text-white transition-colors text-left"
            >
              FAQ
            </button>
            <button
              onClick={() => navigateToSection('contact')}
              className="text-white/80 py-2 hover:text-white transition-colors text-left"
            >
              Contact
            </button>
            <a
              href='https://t.me/quang0325'
              className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors my-2 space-glow"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
