
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FloatingCards from '@/components/FloatingCards';
import LiveTransaction from '@/components/LiveTransaction';
import Footer from '@/components/Footer';
import CyberpunkBackground from '@/components/CyberpunkBackground';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const FeatureSection = () => (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-10"></div>
      <div className="absolute inset-0 bg-cyber-radial"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionary Payment Features</h2>
          <p className="text-white/60 max-w-lg mx-auto">
            Experience the future of transactions with cutting-edge biometric security and seamless integration.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Fingerprint Authentication",
              description: "Ultra-secure fingerprint recognition with liveness detection and anti-spoofing technology.",
              icon: "👆",
              color: "from-cyber-cyan to-cyber-blue",
              delay: 0.2,
            },
            {
              title: "Palm Vein Scanning",
              description: "Advanced infrared palm vein pattern recognition for unhackable identity verification.",
              icon: "✋",
              color: "from-cyber-purple to-cyber-cyan",
              delay: 0.3,
            },
            {
              title: "Multi-Bank Support",
              description: "Connect and manage all your bank accounts and cards through a single biometric profile.",
              icon: "🏦",
              color: "from-cyber-blue to-cyber-dark",
              delay: 0.4,
            },
            {
              title: "Real-time Fraud Detection",
              description: "AI-powered fraud monitoring system that detects and prevents unauthorized access attempts.",
              icon: "🛡️",
              color: "from-cyber-purple to-cyber-pink",
              delay: 0.5,
            },
            {
              title: "Quantum Encryption",
              description: "Next-generation encryption that protects your data against both conventional and quantum threats.",
              icon: "🔒",
              color: "from-cyber-blue to-cyber-purple",
              delay: 0.6,
            },
            {
              title: "Global Acceptance",
              description: "Use your biometric payment profile at millions of locations worldwide with instant conversion.",
              icon: "🌎",
              color: "from-cyber-cyan to-cyber-dark",
              delay: 0.7,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="glassmorphism hover:shadow-neon-cyan transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <div className="h-2 w-full bg-gradient-to-r rounded-t ${feature.color}"></div>
              <div className="p-6">
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
  
  const StatsSection = () => (
    <section className="py-20 px-4 relative overflow-hidden bg-cyber-dark bg-opacity-30">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Transactions / Day", value: "2.4M+", delay: 0.1 },
            { label: "Security Rating", value: "99.998%", delay: 0.2 },
            { label: "Partner Banks", value: "350+", delay: 0.3 },
            { label: "Countries Supported", value: "42", delay: 0.4 },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 glassmorphism"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-cyber-cyan">{stat.value}</div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
  
  const CtaSection = () => (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-dark to-cyber-black opacity-80"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight animated-gradient-text">
            The Future of Payment Is Here
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of forward-thinking individuals and businesses embracing the next evolution in financial technology.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-cyber-cyan hover:bg-opacity-90 text-cyber-black rounded-md px-8 py-4 font-medium transition-all hover:shadow-neon-cyan">
              Create Free Account
            </button>
            <button className="border border-cyber-cyan/30 hover:border-cyber-cyan/60 bg-cyber-cyan/5 backdrop-blur-sm text-cyber-cyan rounded-md px-8 py-4 font-medium transition-all">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
  
  const ScrollIndicator = () => (
    <motion.div 
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.5 }}
    >
      <p className="text-white/60 text-sm mb-2">Scroll to explore</p>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDownCircle className="text-cyber-cyan w-6 h-6" />
      </motion.div>
    </motion.div>
  );
  
  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <AnimatePresence>
        {isLoading ? (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative flex flex-col items-center">
              <div className="relative h-20 w-20">
                <div className="absolute inset-0 rounded-full bg-cyber-cyan bg-opacity-20 animate-pulse-glow"></div>
                <svg 
                  viewBox="0 0 24 24" 
                  className="h-20 w-20 text-cyber-cyan absolute inset-0"
                  strokeWidth={1}
                >
                  <motion.path 
                    d="M6 9v2h12V9c0-3.314-2.686-6-6-6S6 5.686 6 9z"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  <motion.path 
                    d="M3 11h18a1 1 0 0 1 1 1v.5s0 2.5-2 3c-1.5.4-2 0-3.5.5-1 .3-1.5 1-4 1-2 0-3-.5-4.5-1S5 14.8 4 14.5c-1.8-.6-2-3-2-3V12a1 1 0 0 1 1-1z"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                  />
                  <motion.path 
                    d="M12 16.5V20m4-3.5L17 18m-10-1.5L6 18"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                  />
                </svg>
              </div>
              <motion.div
                className="mt-6 text-xl font-bold animated-gradient-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                BioHoloPay
              </motion.div>
              <motion.div
                className="mt-2 text-white/50 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Loading secure environment...
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      
      <CyberpunkBackground />
      
      <Navbar />
      
      <Hero />
      <ScrollIndicator />
      
      <FloatingCards />
      
      <FeatureSection />
      
      <StatsSection />
      
      <LiveTransaction />
      
      <CtaSection />
      
      <Footer />
    </div>
  );
};

export default Index;
