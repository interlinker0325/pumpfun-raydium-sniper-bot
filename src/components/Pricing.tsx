
import { useEffect, useRef, useState } from 'react';

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            (sectionRef.current as HTMLElement).style.opacity = '1';
            (sectionRef.current as HTMLElement).style.transform = 'translateY(0)';
          }
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      id="pricing" 
      ref={sectionRef}
      className="relative py-24 bg-background opacity-0 transform translate-y-10 transition-all duration-1000"
      style={{ opacity: 0, transform: 'translateY(20px)' }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Premium Trading Bots
          </span>
        </h2>
        
        <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-12">
          Choose from our suite of advanced trading bots designed to maximize your trading potential on the Solana blockchain.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Raydium Sniper Bot */}
          <div className="glass-card-dark p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl shadow-md space-glow mb-5">
              <h3 className="text-xl font-bold text-white">Raydium Sniper Bot</h3>
            </div>
            <div className="flex-grow">
              <ul className="text-left space-y-3 mb-6 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Lightning-fast token deployment detection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Customizable slippage & gas settings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Automatic sell features with profit targets</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Anti-MEV protection technology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Optimized for Raydium DEX ecosystem</span>
                </li>
              </ul>
              <p className="text-sm text-blue-300 mb-6">
                Our flagship bot that scans Raydium for new token listings and executes trades within milliseconds of deployment.
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-4">
                2.5 <span className="text-blue-400">SOL</span>
                <span className="text-sm font-normal block mt-1">per month</span>
              </p>
              <button className="w-full py-3 px-6 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition-colors duration-200 space-glow">
                Get Started
              </button>
            </div>
          </div>
          
          {/* Arbitrage Suite */}
          <div className="glass-card-dark p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 rounded-xl shadow-md space-glow mb-5">
              <h3 className="text-xl font-bold text-white">Arbitrage Suite</h3>
            </div>
            <div className="flex-grow">
              <ul className="text-left space-y-3 mb-6 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Cross-DEX price discrepancy monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Auto-execution of price arbitrage opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Customizable profit thresholds</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Risk management parameters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Supports Jupiter, Raydium, and Orca</span>
                </li>
              </ul>
              <p className="text-sm text-blue-300 mb-6">
                Scans multiple DEXs simultaneously to identify and capitalize on price differences across the Solana ecosystem.
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-4">
                3.5 <span className="text-blue-400">SOL</span>
                <span className="text-sm font-normal block mt-1">per month</span>
              </p>
              <button className="w-full py-3 px-6 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition-colors duration-200 space-glow">
                Get Started
              </button>
            </div>
          </div>
          
          {/* Copy Trading Bot */}
          <div className="glass-card-dark p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full">
            <div className="bg-gradient-to-r from-blue-400 to-cyan-500 p-4 rounded-xl shadow-md space-glow mb-5">
              <h3 className="text-xl font-bold text-white">Copy Trading Bot</h3>
            </div>
            <div className="flex-grow">
              <ul className="text-left space-y-3 mb-6 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Follow top-performing wallets in real-time</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Customizable copy parameters and thresholds</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Position sizing based on your risk profile</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Performance analytics and reports</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Delay settings to avoid front-running issues</span>
                </li>
              </ul>
              <p className="text-sm text-blue-300 mb-6">
                Automatically mirrors the trading activity of whale wallets and successful traders across the Solana network.
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-4">
                5.0 <span className="text-blue-400">SOL</span>
                <span className="text-sm font-normal block mt-1">per month</span>
              </p>
              <button className="w-full py-3 px-6 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition-colors duration-200 space-glow">
                Get Started
              </button>
            </div>
          </div>
          
          {/* PunuFun Sniper */}
          <div className="glass-card-dark p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full">
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-4 rounded-xl shadow-md space-glow mb-5">
              <h3 className="text-xl font-bold text-white">PunuFun Sniper</h3>
            </div>
            <div className="flex-grow">
              <ul className="text-left space-y-3 mb-6 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Specialized for the PunuFun ecosystem</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Meme coin deployment detection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Volume and liquidity monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Auto sell with customizable take-profit targets</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Token security scanning features</span>
                </li>
              </ul>
              <p className="text-sm text-blue-300 mb-6">
                Purpose-built for PunuFun meme coin traders looking to capitalize on the volatile meme coin market.
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-4">
                2.8 <span className="text-blue-400">SOL</span>
                <span className="text-sm font-normal block mt-1">per month</span>
              </p>
              <button className="w-full py-3 px-6 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition-colors duration-200 space-glow">
                Get Started
              </button>
            </div>
          </div>
          
          {/* Volume Bot */}
          <div className="glass-card-dark p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full">
            <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 rounded-xl shadow-md space-glow mb-5">
              <h3 className="text-xl font-bold text-white">Volume Trading Bot</h3>
            </div>
            <div className="flex-grow">
              <ul className="text-left space-y-3 mb-6 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Volume spike detection algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Social sentiment integration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Momentum-based entry and exit strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Advanced technical indicators</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>24/7 automated trading</span>
                </li>
              </ul>
              <p className="text-sm text-blue-300 mb-6">
                Identifies and trades tokens experiencing abnormal volume increases, often preceding significant price movements.
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-4">
                3.2 <span className="text-blue-400">SOL</span>
                <span className="text-sm font-normal block mt-1">per month</span>
              </p>
              <button className="w-full py-3 px-6 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition-colors duration-200 space-glow">
                Get Started
              </button>
            </div>
          </div>
          
          {/* Flashloan Bot */}
          <div className="glass-card-dark p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full">
            <div className="bg-gradient-to-r from-red-500 to-pink-600 p-4 rounded-xl shadow-md space-glow mb-5">
              <h3 className="text-xl font-bold text-white">Flashloan Arbitrage</h3>
            </div>
            <div className="flex-grow">
              <ul className="text-left space-y-3 mb-6 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>No initial capital required</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Automated flashloan execution</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Multi-step arbitrage pathfinding</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>MEV protection integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-400">✓</span>
                  <span>Gas optimization algorithms</span>
                </li>
              </ul>
              <p className="text-sm text-blue-300 mb-6">
                Advanced bot that leverages flashloans to execute risk-free arbitrage trades across multiple platforms simultaneously.
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-4">
                8.0 <span className="text-blue-400">SOL</span>
                <span className="text-sm font-normal block mt-1">per month</span>
              </p>
              <button className="w-full py-3 px-6 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition-colors duration-200 space-glow">
                Get Started
              </button>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-8 md:p-10 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Enterprise Package</h3>
          <p className="text-lg text-blue-200 mb-6">
            Access to all bots with custom configurations, priority support, and strategy consultations.
          </p>
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 md:gap-8">
            <p className="text-3xl md:text-4xl font-bold text-white">
              20.0 <span className="text-blue-400">SOL</span>
              <span className="text-sm font-normal block">per month</span>
            </p>
            <button className="py-3 px-8 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition-colors duration-200 space-glow">
              Contact for Enterprise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
