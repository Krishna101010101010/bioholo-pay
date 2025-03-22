
import { motion } from 'framer-motion';
import { ArrowRight, Fingerprint, Shield, Lock } from 'lucide-react';

const HeroContent = () => {
  return (
    <motion.div 
      className="flex-1 text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="inline-block bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-full px-4 py-1 mb-6">
        <span className="text-cyber-cyan text-sm font-medium flex items-center">
          <span className="w-2 h-2 rounded-full bg-cyber-cyan mr-2 animate-pulse"></span>
          Next Generation Biometric Payment
        </span>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-tighter">
        <span className="block">Revolutionary</span>
        <span className="animated-gradient-text">Biometric Authentication</span>
        <span className="block">Payment System</span>
      </h1>
      
      <p className="text-lg text-white/70 mb-8 max-w-xl">
        Secure, fast, and convenient payments using advanced fingerprint and palm vein recognition technology. No cards, no passwords, just you.
      </p>
      
      <div className="flex flex-wrap gap-4">
        <button className="bg-cyber-cyan hover:bg-opacity-90 text-cyber-black rounded-md px-6 py-3 font-medium flex items-center gap-2 group transition-all hover:shadow-neon-cyan">
          Get Started Free
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
        <button className="border border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-sm text-white rounded-md px-6 py-3 font-medium transition-all hover:bg-white/10">
          Watch Demo
        </button>
      </div>
      
      <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
        {[
          { icon: Fingerprint, text: "Fingerprint ID", delay: 0.5 },
          { icon: Shield, text: "Military-grade Encryption", delay: 0.6 },
          { icon: Lock, text: "Palm Vein Verification", delay: 0.7 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item.delay }}
          >
            <div className="w-10 h-10 mb-2 rounded-full bg-cyber-dark flex items-center justify-center">
              <item.icon className="w-5 h-5 text-cyber-cyan" />
            </div>
            <span className="text-sm text-white/80">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroContent;
