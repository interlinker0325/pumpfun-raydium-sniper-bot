
import { useEffect, useRef, useState } from 'react';
import { Check, Bot, ArrowRight, Rocket, Zap, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FaBullseye } from 'react-icons/fa';

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

  const tiers = [
    {
      name: "Raydium Sniper Pro",
      price: "0.5 SOL",
      description: "Advanced sniper bot for Raydium DEX with millisecond precision",
      icon: <FaBullseye size={24} className="text-primary" />,
      features: [
        "Auto-detect new token listings",
        "Custom slippage settings",
        "Anti-rug protection",
        "Telegram notifications",
        "Priority gas bidding",
        "Multi-wallet support"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Arbitrage Suite",
      price: "1.2 SOL",
      description: "Complete arbitrage solution with flashloans across all Solana DEXs",
      icon: <Rocket size={24} className="text-white" />,
      features: [
        "Automated flashloan execution",
        "Cross-DEX arbitrage scanning",
        "Risk assessment algorithms",
        "Profit optimization engine",
        "Custom trading routes",
        "24/7 automated execution",
        "Performance analytics dashboard"
      ],
      popular: true,
      color: "from-accent to-purple-700"
    },
    {
      name: "Copy Trading System",
      price: "0.8 SOL",
      description: "Mirror trades from successful wallets with customizable parameters",
      icon: <Scale size={24} className="text-primary" />,
      features: [
        "Track any Solana wallet",
        "Customizable delay settings",
        "Position sizing automation",
        "Multiple wallet tracking",
        "Trade filtering options",
        "Real-time performance metrics"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    }
  ];

  const expandedBots = [
    {
      name: "PunuFun Sniper Bot",
      description: "Specialized bot for sniping tokens on PunuFun with advanced settings for maximizing profits on newly listed tokens.",
      features: [
        "Ultra-fast transaction execution",
        "Custom buy/sell triggers",
        "Token validation checks",
        "Auto profit-taking",
        "MEV protection strategies"
      ]
    },
    {
      name: "Volume Trading Bot",
      description: "Intelligent bot that creates organic-looking volume patterns to help boost token visibility and liquidity.",
      features: [
        "Customizable volume patterns",
        "Random interval trading",
        "Multiple wallet coordination",
        "Minimal price impact algorithms",
        "Configurable trading hours"
      ]
    },
    {
      name: "Flashloan Arbitrage Bot",
      description: "Our flagship product that leverages Solana's fast transactions to execute risk-free arbitrage across DEXs using flashloans.",
      features: [
        "Zero capital requirement with flashloans",
        "Multi-hop arbitrage paths",
        "Real-time price monitoring",
        "Profit threshold customization",
        "Advanced slippage handling",
        "Transaction failure protection"
      ]
    }
  ];

  return (
    <div 
      id="pricing" 
      ref={sectionRef}
      className="relative py-24 bg-background/50 opacity-0 transform translate-y-10 transition-all duration-1000"
      style={{ opacity: 0, transform: 'translateY(20px)' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Trading Bots Ecosystem
            </span>
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Discover our suite of advanced trading bots, each designed to capture specific opportunities in the Solana ecosystem. 
            From sniping new tokens to executing complex arbitrage strategies.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={cn(
                "relative rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2",
                tier.popular ? "md:scale-105 z-10" : ""
              )}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent to-purple-600 text-white text-sm font-medium py-1.5 text-center">
                  Most Popular
                </div>
              )}
              <div className="glass-card-dark h-full flex flex-col border border-white/10">
                <div className={cn(
                  "p-6 bg-gradient-to-br",
                  tier.color
                )}>
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-black/30 flex items-center justify-center">
                      {tier.icon}
                    </div>
                    <div className="text-right">
                      <span className="block text-sm text-white/80">Starting at</span>
                      <span className="text-2xl font-bold text-white">{tier.price}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-white/80 text-sm">{tier.description}</p>
                </div>
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={18} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-blue-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <a 
                    href="https://t.me/bitfancy" 
                    className={cn(
                      "block w-full py-3 px-4 rounded-lg text-center text-sm font-medium transition-colors",
                      tier.popular 
                        ? "bg-accent hover:bg-accent/90 text-white space-glow" 
                        : "bg-black/30 hover:bg-black/50 text-white border border-white/10"
                    )}
                  >
                    Get Access
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Expanded Bot Descriptions */}
        <div className="space-y-12 max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold font-display mb-8 text-center">
            <span className="text-foreground">Specialized Trading Solutions</span>
          </h3>
          
          {expandedBots.map((bot, index) => (
            <div key={index} className="glass-card-dark p-6 md:p-8 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
              
              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="md:w-1/3">
                  <h4 className="text-xl font-bold text-white mb-2">{bot.name}</h4>
                  <p className="text-blue-200 text-sm mb-4">{bot.description}</p>
                  <a 
                    href="https://t.me/bitfancy" 
                    className="inline-flex items-center text-primary hover:text-primary/90 text-sm font-medium group"
                  >
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bot.features.map((feature, i) => (
                    <div key={i} className="flex items-start bg-black/20 rounded-lg p-4">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <Check size={14} className="text-primary" />
                      </div>
                      <span className="text-sm text-blue-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-white/5 space-glow">
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ready to automate your Solana trading?
              </span>
            </h3>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              Get access to our complete suite of trading bots and stay ahead of the market with cutting-edge automation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/bitfancy" 
                className="px-8 py-4 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group space-glow"
              >
                <Bot size={18} />
                Get Your Bot
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-black/30 backdrop-blur-sm text-foreground border border-white/10 rounded-full font-medium hover:bg-black/50 transition-all flex items-center justify-center"
              >
                <Zap size={18} className="mr-2" />
                Custom Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
