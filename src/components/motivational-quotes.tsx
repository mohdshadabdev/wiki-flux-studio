import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Quote {
  text: string;
  author: string;
  image: string;
}

const quotes: Quote[] = [
  {
    text: "Open source is a development methodology; free software is a social movement.",
    author: "Richard Stallman",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop"
  },
  {
    text: "The best way to predict the future is to implement it.",
    author: "Alan Kay",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=200&fit=crop"
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop"
  },
  {
    text: "Open source is about sharing knowledge and building together.",
    author: "Linus Torvalds",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=200&fit=crop"
  },
  {
    text: "The power of open source is the power of the people.",
    author: "Philippe Kahn",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop"
  }
];

export const MotivationalQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    // Select a random quote when component mounts
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
    
    // Delay showing the quote by 8 seconds (after welcome popup)
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      
      // Start countdown after showing
      const countdown = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsVisible(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Auto hide after 5 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => {
        clearInterval(countdown);
        clearTimeout(hideTimer);
      };
    }, 8000);

    return () => clearTimeout(showTimer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!currentQuote) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-24 w-80 z-30"
        >
          <Card className="glass border border-white/20 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              {/* Image */}
              <div className="relative h-24 overflow-hidden">
                <img 
                  src={currentQuote.image} 
                  alt="Motivation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
                
                {/* Timer and Close Button */}
                <div className="absolute top-2 right-2 flex items-center gap-2">
                  <div className="bg-black/50 text-white text-xs px-2 py-1 rounded-full font-mono">
                    {timeLeft}s
                  </div>
                  <button
                    onClick={handleClose}
                    className="bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                  <motion.div
                    className="h-full bg-gradient-to-r from-white to-white/80"
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                </div>
              </div>

              {/* Quote Content */}
              <div className="p-4">
                <blockquote className="text-sm font-medium text-foreground mb-2 leading-relaxed">
                  "{currentQuote.text}"
                </blockquote>
                <cite className="text-xs text-muted-foreground font-semibold">
                  — {currentQuote.author}
                </cite>
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs text-primary font-medium">Open Source Inspiration</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};