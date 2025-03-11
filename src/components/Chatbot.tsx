
import { useState, useRef, useEffect } from 'react';
import { Bot, MessageSquare, X, Send, ChevronDown } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

// Predefined Q&A for the chatbot
const predefinedQA: Record<string, string> = {
  "hi": "Hello! How can I help you with SolFlashBot trading solutions today?",
  "hello": "Hi there! How can I assist you with our trading bots?",
  "pricing": "Our bots range from 0.5 SOL to 2.0 SOL per month, depending on the features. The Enterprise package gives access to all bots for 4.5 SOL per month. Check our Pricing section for more details.",
  "how does it work": "Our bots use advanced algorithms to monitor the Solana blockchain and execute trades based on your settings. Each bot has a specific strategy like sniping new tokens, arbitraging price differences, or copying successful traders.",
  "contact": "You can reach our team through the Contact form on our website, via email at support@solflashbot.com, or join our Telegram/Discord communities.",
  "raydium sniper": "The Raydium Sniper Bot monitors Raydium for new token listings and executes trades within milliseconds. It includes features like customizable slippage settings and automatic profit-taking.",
  "arbitrage bot": "Our Arbitrage Suite monitors price differences across multiple Solana DEXs (like Jupiter, Raydium, and Orca) and automatically executes trades to profit from these differences.",
  "copy trading": "The Copy Trading Bot allows you to automatically mirror the trading activity of whale wallets and successful traders on Solana with customizable parameters and risk management.",
  "punufun": "The PunuFun Sniper is specialized for the PunuFun ecosystem, particularly for meme coins. It includes token security scanning and automated trading features.",
  "volume bot": "The Volume Trading Bot detects abnormal trading volume increases and executes trades based on volume spikes, which often precede significant price movements.",
  "flashloan": "The Flashloan Arbitrage bot leverages flashloans to execute risk-free arbitrage trades across multiple platforms simultaneously with no initial capital requirement.",
  "refund": "We offer a 3-day money-back guarantee if you're not satisfied with our services. Please contact our support team to process your refund.",
  "security": "Security is our top priority. Our bots operate using secure API connections without requiring your private keys. We implement encryption, regular security audits, and spending limits.",
  "start": "To get started, purchase the bot subscription that matches your trading strategy, download our software, connect your wallet via API, configure your settings, and start automated trading."
};

// More specific responses for questions about each bot
const botInfo: Record<string, string> = {
  "raydium": "The Raydium Sniper Bot monitors Raydium for new token listings and executes trades within milliseconds. It includes features like customizable slippage settings and automatic profit-taking. Price: 0.5 SOL per month.",
  "arbitrage": "Our Arbitrage Suite monitors price differences across multiple Solana DEXs (like Jupiter, Raydium, and Orca) and automatically executes trades to profit from these differences. Price: 0.8 SOL per month.",
  "copy": "The Copy Trading Bot allows you to automatically mirror the trading activity of whale wallets and successful traders on Solana with customizable parameters and risk management. Price: 1.2 SOL per month.",
  "punufun": "The PunuFun Sniper is specialized for the PunuFun ecosystem, particularly for meme coins. It includes token security scanning and automated trading features. Price: 0.6 SOL per month.",
  "volume": "The Volume Trading Bot detects abnormal trading volume increases and executes trades based on volume spikes, which often precede significant price movements. Price: 0.75 SOL per month.",
  "flash": "The Flashloan Arbitrage bot leverages flashloans to execute risk-free arbitrage trades across multiple platforms simultaneously with no initial capital requirement. Price: 2.0 SOL per month.",
  "enterprise": "The Enterprise Package gives you access to all bots with custom configurations, priority support, and strategy consultations for 4.5 SOL per month."
};

const commonQuestions = [
  "How does it work?",
  "Pricing information",
  "Security measures",
  "Getting started",
  "Contact support"
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your SolFlashBot assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-open the chat after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newUserMessage]);
    setInputText('');

    // Process the message to find a response
    setTimeout(() => {
      const response = findResponse(inputText.toLowerCase());
      
      const newBotMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, newBotMessage]);
    }, 500);
  };

  const findResponse = (text: string): string => {
    // Check if the message directly matches any predefined questions
    for (const [key, value] of Object.entries(predefinedQA)) {
      if (text.includes(key)) {
        return value;
      }
    }

    // Check for bot specific information
    for (const [key, value] of Object.entries(botInfo)) {
      if (text.includes(key)) {
        return value;
      }
    }

    // If no match found, provide a generic response
    return "I'm not sure I understand that question. For assistance, please try asking about our bots, pricing, security, or how to get started. You can also contact our support team for more specific help.";
  };

  const handleQuestionClick = (question: string) => {
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: question,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newUserMessage]);
    
    // Process the message to find a response
    setTimeout(() => {
      let response = "";
      
      switch(question) {
        case "How does it work?":
          response = predefinedQA["how does it work"];
          break;
        case "Pricing information":
          response = predefinedQA["pricing"];
          break;
        case "Security measures":
          response = predefinedQA["security"];
          break;
        case "Getting started":
          response = predefinedQA["start"];
          break;
        case "Contact support":
          response = predefinedQA["contact"];
          break;
        default:
          response = "I don't have specific information about that topic. Please contact our support team for more assistance.";
      }
      
      const newBotMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, newBotMessage]);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    } else {
      if (isMinimized) {
        setIsMinimized(false);
      } else {
        setIsMinimized(true);
      }
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    toast({
      title: "Chat closed",
      description: "You can reopen it anytime by clicking the chat icon.",
      duration: 3000,
    });
  };

  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 z-50 space-glow"
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 w-80 md:w-96 bg-background border border-border rounded-2xl shadow-xl z-50 transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-[500px] max-h-[80vh]'
      }`}
    >
      {/* Chat Header */}
      <div 
        className="flex items-center justify-between p-4 border-b border-white/10 cursor-pointer"
        onClick={toggleChat}
      >
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center space-glow">
            <Bot size={18} />
          </div>
          <div>
            <h3 className="font-medium text-white">SolFlashBot Assistant</h3>
            <p className="text-xs text-blue-300">Online</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button onClick={(e) => {
            e.stopPropagation();
            setIsMinimized(!isMinimized);
          }}>
            <ChevronDown size={20} className={`text-white/70 transition-transform ${isMinimized ? 'rotate-180' : ''}`} />
          </button>
          <button onClick={(e) => {
            e.stopPropagation();
            closeChat();
          }}>
            <X size={20} className="text-white/70" />
          </button>
        </div>
      </div>
      
      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto h-[calc(100%-130px)]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-primary text-white rounded-tr-none'
                      : 'bg-black/20 text-blue-100 rounded-tl-none border border-white/5'
                  }`}
                >
                  <p>{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />

            {/* Suggested Questions */}
            {messages.length < 3 && (
              <div className="mt-4">
                <p className="text-sm text-blue-300 mb-2">Common questions:</p>
                <div className="flex flex-wrap gap-2">
                  {commonQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(question)}
                      className="text-xs bg-black/20 hover:bg-black/40 text-blue-200 rounded-full px-3 py-1 border border-white/5 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 bg-black/20 border border-white/10 rounded-full px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                disabled={!inputText.trim()}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Chatbot;
