
import { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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
      id="faq" 
      ref={sectionRef}
      className="relative py-24 bg-background/50 opacity-0 transform translate-y-10 transition-all duration-1000"
      style={{ opacity: 0, transform: 'translateY(20px)' }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Get answers to the most common questions about our trading bots and services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass-card-dark p-8 rounded-2xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-white/10">
              <AccordionTrigger className="text-white hover:text-blue-300 text-left">
                How do your trading bots work?
              </AccordionTrigger>
              <AccordionContent className="text-blue-200">
                Our trading bots utilize advanced algorithms to analyze market conditions on the Solana blockchain. They can automatically execute trades based on predefined parameters, technical indicators, and market trends. Each bot is designed for specific strategies like sniping new token launches, arbitraging price differences, or following successful traders.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-white/10">
              <AccordionTrigger className="text-white hover:text-blue-300 text-left">
                Are your bots safe to use?
              </AccordionTrigger>
              <AccordionContent className="text-blue-200">
                Yes, security is our top priority. Our bots operate using secure API connections, never requiring your private keys. We implement multiple security measures including encrypted communications, regular security audits, and spending limits. Additionally, all our code is regularly audited by security professionals.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-white/10">
              <AccordionTrigger className="text-white hover:text-blue-300 text-left">
                What kind of returns can I expect?
              </AccordionTrigger>
              <AccordionContent className="text-blue-200">
                Trading returns vary based on market conditions, your trading settings, and risk tolerance. While some users report significant profits, especially during favorable market conditions, trading always involves risk. We recommend starting with smaller amounts and adjusting your strategy based on performance. Past performance is not indicative of future results.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b border-white/10">
              <AccordionTrigger className="text-white hover:text-blue-300 text-left">
                Do I need technical knowledge to use the bots?
              </AccordionTrigger>
              <AccordionContent className="text-blue-200">
                Our bots are designed to be user-friendly with intuitive interfaces. While basic crypto knowledge is helpful, you don't need programming skills or deep technical expertise. We provide comprehensive documentation, setup guides, and customer support to help you get started. More advanced users can access additional customization options.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-b border-white/10">
              <AccordionTrigger className="text-white hover:text-blue-300 text-left">
                How much capital do I need to start?
              </AccordionTrigger>
              <AccordionContent className="text-blue-200">
                You can start with as little as 0.1 SOL plus subscription fees. However, for optimal performance, we recommend at least 1-5 SOL depending on your chosen strategy. Our Flashloan Arbitrage bot is an exception, as it leverages flashloans requiring minimal initial capital beyond gas fees.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border-b border-white/10">
              <AccordionTrigger className="text-white hover:text-blue-300 text-left">
                What kind of customer support do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-blue-200">
                We provide comprehensive support through multiple channels including email, live chat, and our community Discord server. Standard subscribers receive 24-48 hour response times, while premium and enterprise clients enjoy priority support with faster response times and dedicated support channels.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border-b border-white/10">
              <AccordionTrigger className="text-white hover:text-blue-300 text-left">
                Can I cancel my subscription anytime?
              </AccordionTrigger>
              <AccordionContent className="text-blue-200">
                Yes, you can cancel your subscription at any time. We operate on a monthly billing cycle with no long-term contracts required. When you cancel, you'll retain access to the bots until the end of your current billing period without any additional charges or hidden fees.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
