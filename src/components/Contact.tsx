
import { useEffect, useRef, useState } from 'react';
import { Send, Mail, Github } from 'lucide-react';
import { FaTelegram, FaDiscord } from 'react-icons/fa';

const Contact = () => {
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
      id="contact" 
      ref={sectionRef}
      className="relative py-24 bg-background/80 opacity-0 transform translate-y-10 transition-all duration-1000"
      style={{ opacity: 0, transform: 'translateY(20px)' }}
    >
      {/* Contact Form Section */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Have questions or need assistance? Reach out to us through the contact form or connect with us on social media.
          </p>
        </div>
        
        {/* Contact Form */}
        <div className="max-w-4xl mx-auto glass-card-dark p-8 rounded-2xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-blue-300 text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-md text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-blue-300 text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-md text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Your Email" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-blue-300 text-sm font-medium mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-md text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Your Message"></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button type="submit" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-md space-glow flex items-center justify-center mx-auto">
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </div>
          </form>
        </div>
        
        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="mailto:bitbanana717@gmail.com" className="text-blue-300 hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://github.com/interlinker0325" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://t.me/quang0325" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-400 transition-colors">
              <FaTelegram size={24} />
            </a>
            <a href="https://discord.com/users/super_0325" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-400 transition-colors">
              <FaDiscord size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
