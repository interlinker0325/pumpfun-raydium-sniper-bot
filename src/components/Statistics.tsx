import { useEffect, useRef, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
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
      id="statistics" 
      ref={sectionRef}
      className="relative py-24 bg-background/50 opacity-0 transform translate-y-10 transition-all duration-1000"
      style={{ opacity: 0, transform: 'translateY(20px)' }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Bot Performance Metrics
          </span>
        </h2>
        
        <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-12">
          Track the performance of our trading bots with real-time statistics. See how our bots are maximizing profits and minimizing risks.
        </p>
        
        {/* Sample Data - Replace with actual bot performance data */}
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={[
              { name: 'Raydium Sniper', profit: 2400, loss: 300 },
              { name: 'Arbitrage Bot', profit: 1398, loss: 2210 },
              { name: 'Copy Trading Bot', profit: 9800, loss: 2290 },
              { name: 'Volume Bot', profit: 3908, loss: 2000 },
              { name: 'PunuFun Sniper', profit: 4800, loss: 2181 },
              { name: 'Flashloan Bot', profit: 3800, loss: 2500 },
            ]}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#475569"/>
            <XAxis dataKey="name" stroke="#CBD5E0"/>
            <YAxis stroke="#CBD5E0"/>
            <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: 'none' }} itemStyle={{ color: '#94A3B8' }}/>
            <Legend />
            <Bar dataKey="profit" stackId="a" fill="#3B82F6" />
            <Bar dataKey="loss" stackId="a" fill="#EF4444" />
          </BarChart>
        </ResponsiveContainer>
        
        <div className="mt-12">
          <p className="text-sm text-blue-300">
            <span className="font-bold text-blue-400">Disclaimer:</span> Past performance is not indicative of future results. 
            Trading bots involve risk, and you can lose money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
