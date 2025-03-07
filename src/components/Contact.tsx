
import { useState, useRef, useEffect } from 'react';
import { Mail, MessageSquare, Github, Send } from 'lucide-react';
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // const response = await fetch("http://localhost:5000/sendEmail", {
      //   method: "POST",
      //   headers: {"Content-Type": "application/json"},
      //   body: JSON.stringify({ name, email, message}),
      // });
      // if (response.ok) {
      //   toast.success("Message sent successfully!");
      //   setName('');
      //   setEmail('');
      //   setMessage('');
      //   setIsSubmitting(false);
      // } else {
      //   toast.error("Failed to send message. Please try again.");
      // }
      const serviceId = 'service_oborch8';
      const templateId = 'template_fl5bf6i';
      const userId = 'If78ZXoGzM-Lr6t3K';
      if (name && email && message) {
        const templateParams = {
          from_name: name,
          from_email: email,
          message: message,
        };
        await emailjs.send(serviceId, templateId, templateParams, userId);
        toast.success("Message sent successfully!");
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error("Please fill in all fields.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
    setIsSubmitting(false);
  };
  
  const contactMethods = [
    {
      name: 'Email',
      value: 'bitbanana717@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:bitbanana717@gmail.com',
    },
    {
      name: 'Telegram',
      value: '@bitfancy',
      icon: <MessageSquare className="w-5 h-5" />,
      href: 'https://t.me/bitfancy',
    },
    {
      name: 'Discord',
      value: 'bitbanana717',
      icon: <MessageSquare className="w-5 h-5" />,
      href: 'https://discord.gg/7rw3HFYb',
    },
    {
      name: 'GitHub',
      value: 'github.com/bitfancy',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/bitfancy',
    },
  ];
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-20 px-6 md:px-10 transition-opacity duration-700"
      style={{ opacity: 0 }}
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
            <form onSubmit={handleSubmit} className="space-y-6 text-gray-900">
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
                  <div className="mr-4 w-10 h-10 rounded-full bg-primary/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-gray-900">{method.name}</h4>
                    <p className="text-muted-foreground text-sm text-gray-500">{method.value}</p>
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
