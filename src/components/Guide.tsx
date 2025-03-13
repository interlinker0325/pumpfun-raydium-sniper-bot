
import { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const Guide = () => {
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
      id="guide" 
      ref={sectionRef}
      className="relative py-24 bg-background/80 opacity-0 transform translate-y-10 transition-all duration-1000"
      style={{ opacity: 0, transform: 'translateY(20px)' }}
    >
      {/* Guide Section */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Mastering Solana Trading Bots
          </span>
        </h2>
        
        <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-12">
          Unlock the potential of Solana's high-speed blockchain with our comprehensive guide to automated trading. 
          Learn how to leverage our bots to execute profitable trades and maximize your returns.
        </p>
        
        {/* Step-by-step Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="glass-card-dark p-6 rounded-2xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4 mx-auto">
              <CheckCircle2 size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Choose Your Bot</h3>
            <p className="text-blue-200">
              Select from our range of specialized trading bots designed for different strategies and market conditions.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="glass-card-dark p-6 rounded-2xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4 mx-auto">
              <CheckCircle2 size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Set Your Parameters</h3>
            <p className="text-blue-200">
              Customize your bot's settings to match your risk tolerance, trading goals, and preferred timeframes.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="glass-card-dark p-6 rounded-2xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4 mx-auto">
              <CheckCircle2 size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Configure Your Bot</h3>
            <p className="text-blue-200">
              Set up your Solana trading bot with custom parameters for optimal trading performance across different markets.
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="glass-card-dark p-6 rounded-2xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4 mx-auto">
              <CheckCircle2 size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Execute Automated Trades</h3>
            <p className="text-blue-200">
              Let your bot work 24/7, executing trades based on your strategy while you focus on other activities.
            </p>
          </div>
          
          {/* Step 5 */}
          <div className="glass-card-dark p-6 rounded-2xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4 mx-auto">
              <CheckCircle2 size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Track Performance</h3>
            <p className="text-blue-200">
              Monitor your bot's performance through our intuitive dashboard and make adjustments as needed.
            </p>
          </div>
          
          {/* Step 6 */}
          <div className="glass-card-dark p-6 rounded-2xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4 mx-auto">
              <CheckCircle2 size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Optimize & Scale</h3>
            <p className="text-blue-200">
              Continuously refine your strategies based on performance data and scale your operations as you grow.
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12">
          <a 
            href="https://t.me/quang0325" 
            className="px-8 py-4 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 space-glow"
          >
            Start Your Trading Journey
          </a>
        </div>
      </div>
    </div>
  );
};

export default Guide;
