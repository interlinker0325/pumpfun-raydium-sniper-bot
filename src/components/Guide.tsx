
import { useState, useEffect, useRef } from 'react';
import { Code, Repeat, ChevronsRight, Coins, LineChart, Database, ShieldCheck, Rocket } from 'lucide-react';

const Guide = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Steps data
  const steps = [
    {
      title: "How Flashloan Arbitrage Works",
      description: "Flashloans allow you to borrow assets without collateral, as long as you repay them in the same transaction. This enables risk-free arbitrage across different exchanges.",
      icon: <Repeat className="w-8 h-8 text-primary" />,
    },
    {
      title: "Price Monitoring",
      description: "Our bot continuously monitors prices across multiple Solana DEXs in real-time, identifying price discrepancies that can be exploited for profit.",
      icon: <LineChart className="w-8 h-8 text-primary" />,
    },
    {
      title: "Flashloan Execution",
      description: "When a profitable opportunity is detected, the bot borrows funds via flashloan, executes trades across exchanges, and repays the loan with profit in a single atomic transaction.",
      icon: <ChevronsRight className="w-8 h-8 text-primary" />,
    },
    {
      title: "Risk Management",
      description: "Advanced algorithms calculate gas costs, slippage, and market impact to ensure each transaction is profitable before execution, minimizing risk.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    }
  ];
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation classes when the section is visible
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [steps.length]);
  
  return (
    <section 
      id="guide" 
      ref={sectionRef}
      className="relative py-20 px-6 md:px-10 opacity-0"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left side: Steps */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-background/80">
              <span className="text-xs md:text-sm font-medium text-muted-foreground">Step-by-Step Guide</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              How Our Solana Flashloan <br/>
              <span className="text-primary">Arbitrage Bot Works</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10">
              Understand the technology behind our platform and how we leverage flashloans to generate risk-free profits through arbitrage opportunities on Solana.
            </p>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex gap-5 p-5 rounded-xl transition-all duration-500 cursor-pointer ${
                    activeStep === index 
                      ? 'bg-white shadow-lg scale-[1.02]' 
                      : 'bg-secondary/50 hover:bg-white/50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div 
                    className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                      activeStep === index 
                        ? 'bg-primary/10' 
                        : 'bg-primary/5'
                    }`}
                  >
                    {step.icon}
                  </div>
                  
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side: Visual diagram */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-lg">
              {/* Interactive diagram */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-border opacity-20"></div>
              
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border-4 border-dashed border-border opacity-40"></div>
              
              {/* Center icon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center z-10">
                <Code size={32} className="text-primary" />
              </div>
              
              {/* Surrounding icons */}
              <div className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${activeStep === 0 ? 'scale-110' : 'scale-100'}`}>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <Repeat size={24} className="text-primary" />
                </div>
              </div>
              
              <div className={`absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${activeStep === 1 ? 'scale-110' : 'scale-100'}`}>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <LineChart size={24} className="text-primary" />
                </div>
              </div>
              
              <div className={`absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 transition-all duration-700 ${activeStep === 2 ? 'scale-110' : 'scale-100'}`}>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <Coins size={24} className="text-primary" />
                </div>
              </div>
              
              <div className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${activeStep === 3 ? 'scale-110' : 'scale-100'}`}>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <ShieldCheck size={24} className="text-primary" />
                </div>
              </div>
              
              {/* Connection lines with animated dots */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                <path 
                  d="M100,100 L100,20" 
                  stroke="#e2e8f0" 
                  strokeWidth="2" 
                  strokeDasharray="5,5" 
                  fill="none"
                />
                <circle 
                  cx="100" 
                  cy="60" 
                  r="3" 
                  fill="#3b82f6" 
                  className={`transition-opacity duration-300 ${activeStep === 0 ? 'opacity-100' : 'opacity-0'}`}
                >
                  <animate attributeName="cy" from="100" to="20" dur="1.5s" repeatCount="indefinite" />
                </circle>
                
                <path 
                  d="M100,100 L180,100" 
                  stroke="#e2e8f0" 
                  strokeWidth="2" 
                  strokeDasharray="5,5" 
                  fill="none"
                />
                <circle 
                  cx="140" 
                  cy="100" 
                  r="3" 
                  fill="#3b82f6"
                  className={`transition-opacity duration-300 ${activeStep === 1 ? 'opacity-100' : 'opacity-0'}`}
                >
                  <animate attributeName="cx" from="100" to="180" dur="1.5s" repeatCount="indefinite" />
                </circle>
                
                <path 
                  d="M100,100 L100,180" 
                  stroke="#e2e8f0" 
                  strokeWidth="2" 
                  strokeDasharray="5,5" 
                  fill="none"
                />
                <circle 
                  cx="100" 
                  cy="140" 
                  r="3" 
                  fill="#3b82f6"
                  className={`transition-opacity duration-300 ${activeStep === 2 ? 'opacity-100' : 'opacity-0'}`}
                >
                  <animate attributeName="cy" from="100" to="180" dur="1.5s" repeatCount="indefinite" />
                </circle>
                
                <path 
                  d="M100,100 L20,100" 
                  stroke="#e2e8f0" 
                  strokeWidth="2" 
                  strokeDasharray="5,5" 
                  fill="none"
                />
                <circle 
                  cx="60" 
                  cy="100" 
                  r="3" 
                  fill="#3b82f6"
                  className={`transition-opacity duration-300 ${activeStep === 3 ? 'opacity-100' : 'opacity-0'}`}
                >
                  <animate attributeName="cx" from="100" to="20" dur="1.5s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            
            {/* Key features below the diagram */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-12 w-full max-w-lg">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Multi-DEX Support</h3>
                <p className="text-muted-foreground text-sm">Connect to all major Solana DEXs for maximum opportunity capture</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Risk-Free Trading</h3>
                <p className="text-muted-foreground text-sm">No capital at risk with complete transaction rollback if unprofitable</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <LineChart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Real-time Analytics</h3>
                <p className="text-muted-foreground text-sm">Live monitoring of your performance and market opportunities</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Auto-scaling</h3>
                <p className="text-muted-foreground text-sm">Dynamically adjust parameters based on market conditions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
