
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Code, Zap } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (event: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = event;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) / 60;
      const moveY = (y - centerY) / 60;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const depth = parseFloat(el.getAttribute('data-depth') || '0');
        const translateX = moveX * depth;
        const translateY = moveY * depth;
        
        (el as HTMLElement).style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={heroRef}
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 pt-24 pb-12 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-60 parallax" data-depth="-2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-70 parallax" data-depth="-3"></div>
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 parallax" data-depth="-1"></div>
      </div>
      
      {/* 3D-like elements */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 parallax" data-depth="3">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center rotate-12 animate-float">
          <Code size={32} className="text-primary" />
        </div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/3 transform translate-x-1/2 parallax" data-depth="4">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center -rotate-12 animate-float" style={{ animationDelay: '1s' }}>
          <Zap size={32} className="text-accent" />
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-5xl text-center">
        <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm">
          <span className="text-xs md:text-sm font-medium text-muted-foreground">Revolutionizing DeFi on Solana</span>
        </div>
        
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-foreground">Solana Flashloan</span>
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Arbitrage Bot</span>
        </h1>
        
        <p 
          className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Leverage the power of flashloans to execute risk-free arbitrage opportunities across Solana DEXs, maximizing your profit with millisecond precision.
        </p>
        
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="px-8 py-4 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group">
            Start Trading
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          
          <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-foreground border border-border rounded-full font-medium hover:bg-white transition-all flex items-center justify-center">
            View Documentation
          </button>
        </div>
      </div>
      
      {/* Bottom 3D display for the bot */}
      <div 
        className={`relative z-10 mt-14 sm:mt-20 w-full max-w-4xl aspect-[16/9] rounded-xl transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="relative w-full h-full overflow-hidden rounded-xl bg-gradient-to-br from-black/80 to-black/90 shadow-2xl">
          <div className="absolute inset-0.5 rounded-[10px] bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
            <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
              {/* Terminal-like interface */}
              <div className="w-[95%] h-[90%] bg-black rounded-lg p-4 text-left overflow-hidden">
                <div className="flex gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="text-green-400 font-mono text-xs md:text-sm space-y-2 overflow-hidden">
                  <p><span className="text-blue-400">$</span> Initializing Solana Flashloan Bot...</p>
                  <p><span className="text-blue-400">$</span> Connecting to Solana mainnet-beta...</p>
                  <p><span className="text-blue-400">$</span> <span className="text-yellow-300">SUCCESS:</span> Connected to Solana network</p>
                  <p><span className="text-blue-400">$</span> Scanning DEXs for arbitrage opportunities...</p>
                  <p className="flex items-center"><span className="text-blue-400">$</span> <span className="animate-pulse">■</span> Analyzing price differences...</p>
                  <div className="h-4"></div>
                  <p><span className="text-blue-400">$</span> <span className="text-yellow-300">OPPORTUNITY FOUND:</span></p>
                  <p><span className="text-blue-400">$</span> Route: SOL → USDC → RAY → SOL</p>
                  <p><span className="text-blue-400">$</span> DEXs: Orca → Raydium</p>
                  <p><span className="text-blue-400">$</span> Estimated profit: +0.0245 SOL</p>
                  <p><span className="text-blue-400">$</span> Executing flashloan transaction...</p>
                  <p className="flex items-center space-x-2">
                    <span className="text-blue-400">$</span>
                    <span className="inline-block animate-spin">⟳</span>
                    <span>Transaction in progress...</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements around the display */}
        <div className="absolute -left-6 -bottom-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center rotate-12 parallax" data-depth="2">
          <span className="text-primary font-bold text-xl">S</span>
        </div>
        <div className="absolute -right-4 -top-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center -rotate-12 parallax" data-depth="2">
          <span className="text-accent font-bold text-xl">F</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
