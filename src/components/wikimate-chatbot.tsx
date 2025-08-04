import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const faqData = {
  "what is road to wiki": "Road to Wiki is a cohort-based program that promotes open source contributions, wiki editing, and technical growth. It's designed to help students become active contributors to Wikimedia projects while developing valuable technical skills.",
  "how to join road to wiki": "You can join by filling out our application form. We look for passionate students interested in open knowledge, technology, and community building. Applications are reviewed based on motivation and commitment to learning.",
  "what is wikimedia foundation": "Wikimedia Foundation is a non-profit organization that operates Wikipedia and other free knowledge projects. It supports the creation and distribution of free educational content and operates one of the world's largest websites.",
  "benefits of road to wiki": "Benefits include: Technical skill development, Open source contribution experience, Community networking, Mentorship opportunities, Certificate of completion, and potential internship opportunities with Wikimedia and tech companies.",
  "selection process": "The selection process includes: Application review, Technical assessment (optional), Interview round, and final selection based on passion for open knowledge and commitment to the program.",
  "wiki club tech": "Wiki Club Tech at United University is a student-led organization focused on promoting open knowledge, technology education, and collaborative innovation. We organize workshops, hackathons, and contribute to Wikimedia projects."
};

const sampleQuestions = [
  "What is Road to Wiki?",
  "How to join Road to Wiki?",
  "What is Wikimedia Foundation?",
  "Benefits of Road to Wiki?",
  "Selection process?",
  "About Wiki Club Tech?"
];

export const WikimateChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Namaste! 🙏 I am Wikimate, your AI assistant for Wiki Club Tech. I can help you with questions about Road to Wiki, Wikimedia Foundation, and our club activities. How can I assist you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    const matchedKey = Object.keys(faqData).find(key => 
      lowerQuestion.includes(key) || key.includes(lowerQuestion)
    );
    
    if (matchedKey) {
      return faqData[matchedKey as keyof typeof faqData];
    }
    
    return "I'm still learning! 🤖 This bot is under deployment and more features are coming soon. For now, try asking about Road to Wiki, Wikimedia Foundation, benefits, selection process, or Wiki Club Tech. You can also reach out to our team directly!";
  };

  const handleSendMessage = (messageText?: string) => {
    const textToSend = messageText || inputText.trim();
    if (!textToSend) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findAnswer(textToSend),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuestionClick = (question: string) => {
    // Auto-send the question without typing in input
    handleSendMessage(question);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-16 h-16 shadow-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 border border-white/20"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] z-40"
          >
            <Card className="h-full glass border border-white/20 shadow-xl">
              <CardContent className="p-0 h-full flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-white/10 bg-gradient-to-r from-primary/20 to-secondary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold gradient-text">Wikimate</h3>
                      <p className="text-xs text-muted-foreground">AI Assistant • Under Deployment</p>
                    </div>
                  </div>
                </div>

                {/* Sample Questions */}
                <div className="p-3 border-b border-white/10 bg-gradient-to-r from-primary/5 to-secondary/5">
                  <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-1">
                    {sampleQuestions.slice(0, 3).map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuestionClick(question)}
                        className="text-xs px-2 py-1 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start gap-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.isUser 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-gradient-to-r from-primary to-secondary text-white'
                        }`}>
                          {message.isUser ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                        </div>
                        <div className={`p-3 rounded-lg ${
                          message.isUser 
                            ? 'bg-primary text-primary-foreground ml-2' 
                            : 'bg-secondary/20 mr-2'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                        <div className="bg-secondary/20 p-3 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <Input
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Ask me anything..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1 bg-background/50 border-white/20"
                    />
                    <Button 
                      onClick={() => handleSendMessage()}
                      size="sm"
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};