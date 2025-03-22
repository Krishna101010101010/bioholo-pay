
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CyberpunkBackground from '@/components/CyberpunkBackground';
import { 
  Send, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  User, 
  Bot,
  X,
  Sparkles
} from 'lucide-react';

const Contact = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { type: 'bot', content: 'Hello! I\'m the BioHoloPay AI assistant. How can I help you today?' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulating form submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message
    setChatMessages(prev => [...prev, { type: 'user', content: inputMessage }]);
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const responses = [
        "I can help you set up your biometric profile. Would you like to learn more about that?",
        "BioHoloPay supports all major banks and financial institutions. Is there a specific one you're interested in?",
        "Our security system uses advanced encryption and biometric verification. Your data is safe with us.",
        "You can contact our support team 24/7 through this chat or by calling our hotline.",
        "Would you like me to connect you with a human representative?",
      ];
      
      setChatMessages(prev => [
        ...prev, 
        { type: 'bot', content: responses[Math.floor(Math.random() * responses.length)] }
      ]);
    }, 1000);
    
    setInputMessage('');
  };
  
  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <CyberpunkBackground />
      <Navbar />
      
      <div className="pt-28 pb-20">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-full px-4 py-1 mb-6"
            >
              <span className="text-cyber-cyan text-sm font-medium">Contact Us</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Get In Touch With <br />
              <span className="animated-gradient-text">Our Team</span>
            </motion.h1>
            
            <motion.p 
              className="text-white/70 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Have questions about BioHoloPay? Our team is here to help you with any inquiries about our biometric payment system.
            </motion.p>
          </div>
          
          {/* Contact Options */}
          <div className="max-w-5xl mx-auto mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "(888) 123-4567",
                  subtext: "24/7 Support Line",
                  delay: 0.1,
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "support@bioholopay.com",
                  subtext: "We reply within 24 hours",
                  delay: 0.2,
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "101 Tech Avenue, San Francisco, CA",
                  subtext: "Mon-Fri, 9AM-6PM",
                  delay: 0.3,
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="cyber-panel p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: contact.delay }}
                >
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-cyber-dark mb-4">
                    <contact.icon className="h-6 w-6 text-cyber-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                  <p className="text-white/80 mb-2">{contact.content}</p>
                  <p className="text-white/50 text-sm">{contact.subtext}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Contact Form Section */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="cyber-panel p-0 overflow-hidden bg-opacity-70">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Column - Form */}
                <motion.div
                  className="p-8 relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Send A Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-white/70 mb-2 text-sm">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white/70 mb-2 text-sm">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-white/70 mb-2 text-sm">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white/70 mb-2 text-sm">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:border-transparent"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="bg-cyber-cyan hover:bg-opacity-90 text-cyber-black rounded-md px-6 py-3 font-medium transition-all hover:shadow-neon-cyan flex items-center gap-2"
                    >
                      Send Message
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </motion.div>
                
                {/* Right Column - Live Chat Demo */}
                <motion.div
                  className="relative overflow-hidden"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
                  
                  <div className="relative h-full p-8 flex flex-col">
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                      <MessageSquare className="h-6 w-6 text-cyber-cyan" />
                      Live Chat Demo
                    </h2>
                    
                    <div className="flex-1 glassmorphism p-6 flex flex-col">
                      <div className="flex-1 overflow-y-auto mb-4 chatarea">
                        {chatMessages.map((msg, index) => (
                          <div
                            key={index}
                            className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className={`flex gap-2 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                              <div className={`h-8 w-8 rounded-full bg-cyber-dark flex items-center justify-center flex-shrink-0`}>
                                {msg.type === 'user' ? (
                                  <User className="h-4 w-4 text-white" />
                                ) : (
                                  <Bot className="h-4 w-4 text-cyber-cyan" />
                                )}
                              </div>
                              <div className={`py-2 px-3 rounded-lg ${
                                msg.type === 'user' 
                                  ? 'bg-cyber-cyan text-cyber-black'
                                  : 'glassmorphism text-white'
                              }`}>
                                {msg.content}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <form onSubmit={handleChatSubmit} className="flex gap-2">
                        <input
                          type="text"
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          className="flex-1 bg-white/5 border border-white/20 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:border-transparent"
                          placeholder="Type a message..."
                        />
                        <button 
                          type="submit" 
                          className="bg-cyber-cyan hover:bg-opacity-90 text-cyber-black rounded-md px-4 flex items-center justify-center"
                        >
                          <Send className="h-4 w-4" />
                        </button>
                      </form>
                    </div>
                    
                    <div className="mt-4 text-white/60 text-sm">
                      Try our AI assistant to get quick answers to your questions.
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-24">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-white/60 max-w-lg mx-auto">
                Quick answers to common questions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "How can I become a BioHoloPay merchant?",
                  answer: "Contact our business development team through the form above or email partners@bioholopay.com for merchant onboarding information.",
                },
                {
                  question: "Where can I find BioHoloPay payment terminals?",
                  answer: "Our terminal locations are available in the BioHoloPay app. We're rapidly expanding to new locations every week.",
                },
                {
                  question: "How do I reset my biometric profile?",
                  answer: "You can reset your biometric profile through the app settings or by contacting our support team for assistance.",
                },
                {
                  question: "Is there a limit on transaction amounts?",
                  answer: "Default limits are in place for security, but these can be adjusted based on your verification level and account history.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="glassmorphism p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="max-w-5xl mx-auto mb-24">
            <motion.div 
              className="cyber-panel overflow-hidden h-80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
              
              <div className="relative h-full w-full flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4">
                    <MapPin className="h-10 w-10 text-cyber-cyan mx-auto animate-pulse" />
                  </div>
                  <p className="text-white/70">Interactive Map Placeholder</p>
                  <p className="text-white/50 text-sm mt-2">BioHoloPay HQ: San Francisco, CA</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* CTA */}
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 animated-gradient-text">
              Ready To Experience The Future Of Payments?
            </h2>
            <p className="text-white/70 mb-6">
              Join thousands of satisfied users who've already made the switch to biometric payments.
            </p>
            <button className="bg-cyber-cyan hover:bg-opacity-90 text-cyber-black rounded-md px-8 py-3 font-medium transition-all hover:shadow-neon-cyan flex items-center justify-center gap-2 mx-auto">
              Get Started Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {chatOpen ? (
          <motion.div
            className="glassmorphism w-80 h-96 rounded-lg overflow-hidden flex flex-col"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Chat Header */}
            <div className="bg-cyber-dark p-3 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-cyber-black flex items-center justify-center">
                  <Bot className="h-4 w-4 text-cyber-cyan" />
                </div>
                <div>
                  <p className="text-sm font-medium">AI Assistant</p>
                  <p className="text-xs text-white/50">Online</p>
                </div>
              </div>
              <button 
                className="text-white/70 hover:text-white"
                onClick={() => setChatOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-cyber-black/50">
              {/* Bot welcome message */}
              <div className="flex gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-cyber-dark flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-cyber-cyan" />
                </div>
                <div className="glassmorphism py-2 px-3 rounded-lg">
                  <p className="text-sm">Hi there! I'm the BioHoloPay assistant. How can I help you today?</p>
                </div>
              </div>
              
              {/* Suggested questions */}
              <div className="mb-4">
                <p className="text-xs text-white/50 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {["How does it work?", "Is it secure?", "Pricing plans"].map((q, i) => (
                    <button 
                      key={i}
                      className="bg-cyber-dark/50 border border-white/10 text-xs py-1 px-2 rounded-full text-white/70 hover:text-white hover:border-white/20"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* User message placeholder */}
              <div className="flex justify-end mb-4">
                <div className="flex gap-2 flex-row-reverse">
                  <div className="h-8 w-8 rounded-full bg-cyber-dark flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-cyber-cyan py-2 px-3 rounded-lg text-cyber-black">
                    <p className="text-sm">I'd like to learn more about biometric authentication.</p>
                  </div>
                </div>
              </div>
              
              {/* Bot response placeholder */}
              <div className="flex gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-cyber-dark flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-cyber-cyan" />
                </div>
                <div className="glassmorphism py-2 px-3 rounded-lg">
                  <p className="text-sm">
                    BioHoloPay uses advanced fingerprint and palm vein scanning for secure authentication. Would you like to know more about how it works?
                  </p>
                </div>
              </div>
            </div>
            
            {/* Chat Input */}
            <div className="p-3 border-t border-white/10 bg-cyber-black/70">
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 bg-white/5 border border-white/20 rounded-md py-2 px-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyber-cyan focus:border-transparent"
                  placeholder="Type a message..."
                />
                <button className="bg-cyber-cyan hover:bg-opacity-90 text-cyber-black rounded-md px-3 flex items-center justify-center">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            className="glassmorphism h-14 w-14 rounded-full flex items-center justify-center shadow-neon-cyan group"
            onClick={() => setChatOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyber-cyan animate-pulse"></span>
            <MessageSquare className="h-6 w-6 text-cyber-cyan group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

interface ChatMessage {
  type: 'user' | 'bot';
  content: string;
}

export default Contact;
