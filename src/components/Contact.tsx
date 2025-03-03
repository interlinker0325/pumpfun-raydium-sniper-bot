
import { useState, useRef, useEffect } from 'react';
import { Mail, MessageSquare, Github, Send } from 'lucide-react';
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  const contactMethods = [
    {
      name: 'Email',
      value: 'contact@solanaflash.com',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:contact@solanaflash.com',
    },
    {
      name: 'Telegram',
      value: '@solanaflash',
      icon: <MessageSquare className="w-5 h-5" />,
      href: 'https://t.me/solanaflash',
    },
    {
      name: 'Discord',
      value: 'solanaflash',
      icon: <MessageSquare className="w-5 h-5" />,
      href: 'https://discord.gg/solanaflash',
    },
    {
      name: 'GitHub',
      value: 'github.com/solanaflash',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/solanaflash',
    },
  ];
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-20 px-6 md:px-10 opacity-0"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-background/80 mb-4">
            <span className="text-xs md:text-sm font-medium text-muted-foreground">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Contact <span className="text-primary">Us</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our Solana Flashloan Arbitrage Bot? We're here to help. Reach out through any of our channels below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact methods */}
          <div className="space-y-8">
            <h3 className="text-xl font-display font-semibold mb-6">Connect With Us</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className="mr-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{method.name}</h4>
                    <p className="text-muted-foreground text-sm">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
              <h4 className="font-medium text-lg mb-2">Available Trading Hours</h4>
              <p className="text-muted-foreground mb-4">Our bot trades 24/7, but our support team is available during:</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM UTC</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM UTC</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
