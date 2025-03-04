
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Clock, ArrowUpRight, DollarSign } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Only add the class if it's not already added
          if (!entry.target.classList.contains('animate-fade-in')) {
            entry.target.classList.add('animate-fade-in');
          }
          entry.target.style.opacity = '1';
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
  
  // Sample data for the chart
  const performanceData = [
    { date: 'Jan', profit: 5.2 },
    { date: 'Feb', profit: 7.8 },
    { date: 'Mar', profit: 6.3 },
    { date: 'Apr', profit: 8.4 },
    { date: 'May', profit: 10.2 },
    { date: 'Jun', profit: 9.7 },
    { date: 'Jul', profit: 12.1 },
    { date: 'Aug', profit: 14.3 },
  ];
  
  const stats = [
    { 
      label: "Total Profit",
      value: "$143,782.94",
      change: "+12.45%",
      icon: <DollarSign className="w-5 h-5" />,
      isPositive: true,
    },
    {
      label: "Transactions",
      value: "12,432",
      change: "+8.32%",
      icon: <TrendingUp className="w-5 h-5" />,
      isPositive: true,
    },
    {
      label: "Avg. Response Time",
      value: "127ms",
      change: "-23.67%",
      icon: <Clock className="w-5 h-5" />,
      isPositive: true,
    },
    {
      label: "Success Rate",
      value: "99.97%",
      change: "+0.6%",
      icon: <ArrowUpRight className="w-5 h-5" />,
      isPositive: true,
    },
  ];
  
  // Sample transaction data
  const transactions = [
    { 
      id: '89e3fa7c',
      route: 'SOL → USDC → RAY → SOL',
      timestamp: '19 min ago',
      profit: '+0.0412 SOL',
      value: '$2.89',
      status: 'Completed',
    },
    { 
      id: '34d19e2f',
      route: 'USDC → mSOL → USDC',
      timestamp: '32 min ago',
      profit: '+1.24 USDC',
      value: '$1.24',
      status: 'Completed',
    },
    { 
      id: 'a7c01e94',
      route: 'RAY → USDC → SOL → RAY',
      timestamp: '54 min ago',
      profit: '+0.52 RAY',
      value: '$0.78',
      status: 'Completed',
    },
    { 
      id: '6b91df35',
      route: 'SOL → BONK → SOL',
      timestamp: '1 hour ago',
      profit: '+0.0098 SOL',
      value: '$0.69',
      status: 'Completed',
    },
    { 
      id: '20af1e89',
      route: 'USDC → JTO → USDC',
      timestamp: '1 hour ago',
      profit: '+0.87 USDC',
      value: '$0.87',
      status: 'Completed',
    },
  ];
  
  return (
    <section 
      id="statistics" 
      ref={sectionRef}
      className="relative py-20 px-6 md:px-10 transition-opacity duration-700"
      style={{ opacity: 0 }}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-background/80 mb-4">
            <span className="text-xs md:text-sm font-medium text-muted-foreground">Proven Performance</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Bot Performance <span className="text-primary">Statistics</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our bot consistently delivers exceptional results. Track its performance with comprehensive metrics and real-time data.
          </p>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 shadow-md transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${100 * index}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-muted-foreground">{stat.label}</div>
                <div className="w-10 h-10 rounded-full bg-primary/50 flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-2xl font-display font-bold mb-1 text-gray-900">{stat.value}</div>
              
              <div className={`flex items-center text-sm ${stat.isPositive ? 'text-green-600' : 'text-red-500'}`}>
                <span>{stat.change}</span>
                <span className="text-xs ml-1">from last month</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Chart and recent transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart */}
          <div className={`lg:col-span-2 bg-white rounded-xl p-6 shadow-md transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <h3 className="font-display font-semibold text-lg mb-6 text-gray-900">Profit Growth</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={performanceData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" />
                  <YAxis unit="%" />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Monthly Profit']}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      backgroundColor: 'white' 
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="profit" 
                    stroke="#4f46e5" 
                    fillOpacity={1} 
                    fill="url(#colorProfit)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Recent transactions */}
          <div className={`transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '500ms' }}>
            <div className="bg-white rounded-xl p-6 shadow-md h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-lg text-gray-900">Recent Transactions</h3>
                <button className="text-primary text-sm font-medium flex items-center">
                  View all <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
              
              <div className="space-y-4">
                {transactions.map((tx, index) => (
                  <div key={index} className="flex items-center pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <TrendingUp size={18} className="text-primary" />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm text-gray-900">{tx.route}</p>
                          <p className="text-xs text-muted-foreground">{tx.timestamp}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600">{tx.profit}</p>
                          <p className="text-xs text-muted-foreground">{tx.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
