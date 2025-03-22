
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Shield, Lock, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isScanning, setIsScanning] = useState(false);
  const scanTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const startScan = () => {
    if (scanTimeoutRef.current) {
      clearTimeout(scanTimeoutRef.current);
    }
    
    setIsScanning(true);
    
    scanTimeoutRef.current = setTimeout(() => {
      setIsScanning(false);
    }, 3000);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      startScan();
    }, 6000);
    
    // Initial scan
    startScan();
    
    return () => {
      clearInterval(interval);
      if (scanTimeoutRef.current) {
        clearTimeout(scanTimeoutRef.current);
      }
    };
  }, []);
  
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center pt-16 pb-20 px-4 overflow-hidden">
      {/* Hero Background Elements */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
      <div className="absolute inset-0 bg-cyber-radial"></div>
      
      {/* Content Wrapper */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10">
        {/* Left Column - Text Content */}
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
        
        {/* Right Column - 3D Hand Model */}
        <motion.div 
          className="flex-1 flex justify-center items-center relative perspective"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full max-w-md aspect-square perspective preserve-3d">
            {/* 3D Hand Model Container */}
            <motion.div 
              className="w-full h-full relative preserve-3d"
              animate={{ 
                rotateY: [0, 10, 0, -10, 0],
                rotateX: [0, 5, 0, -5, 0],
              }}
              transition={{ 
                duration: 20, 
                ease: "easeInOut",
                repeat: Infinity
              }}
            >
              {/* Hand Scan Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`relative w-64 h-64 md:w-80 md:h-80 ${isScanning ? 'animate-pulse-glow' : ''}`}>
                  {/* Base Hand Outline */}
                  <svg viewBox="0 0 512 512" className="absolute inset-0 w-full h-full text-cyber-cyan">
                    <path 
                      d="M408 64c-13.3 0-24 10.7-24 24v10.3c-18.9-9.5-40.7-14.3-64-14.3C259.9 84 205 125.3 183 173.3c-9.7-6.4-20.7-9.7-32-9.3C120.7 165.3 96 191.3 96 224v96c0 8.8 7.2 16 16 16s16-7.2 16-16V224c0-14.7 10.7-26.3 24-25c6.7 .7 12.8 4.2 17.3 9.5c-6 34.8-7.6 71.5-3.7 109.6C169.6 347 180.3 368 192 368c13.3 0 24-14.3 24-32c0-21-13.5-33.9-16.6-36.9l0 0c-3.9-3.8-6.1-9-6.1-14.5c0-11.3 9.1-20.4 20.4-20.4c5.3 0 10.4 2.1 14.2 5.8l0 0C231.5 273.1 244 286 264 286c13.3 0 24-10.7 24-24s-10.7-24-24-24c-.9 0-1.8 0-2.7 .1C276.9 184.9 319.1 148 368 148c26.5 0 48 21.5 48 48v88v88c0 21-10.8 39.6-29 50.4c-30.4 18-59 40.4-82.9 65.6c-3.5 3.7-8.5 5.8-13.7 5.8L181.7 494c-10.1-.4-20.8-5.5-23.7-15.9c-.1-.2-.1-.4-.2-.6c-3-10.5-14.1-16.6-24.9-13.7s-16.7 14-13.8 24.8c5.2 18.6 22.8 33.1 42.4 33.4l107.9 .2c14.7 0 28.9-5.7 39.5-17.1c26-27.1 56.8-51 89.5-70.3c13.7-8.1 32.5-21.4 44-46.9c.5-1.1 .9-2.2 1.3-3.3c3.5-9.5 5.3-19.6 5.3-30.2V224 148 88c0-13.3-10.7-24-24-24zM256 390c-13.3 0-24 10.7-24 24s10.7 24 24 24h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H256z"
                      fill="currentColor"
                      fillOpacity="0.1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeOpacity="0.6"
                    />
                  </svg>
                  
                  {/* Animated Circuit Paths */}
                  <svg 
                    viewBox="0 0 512 512" 
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      filter: isScanning ? 'drop-shadow(0 0 8px #41EAD4)' : 'none',
                      transition: 'filter 0.5s ease-in-out' 
                    }}
                  >
                    <path 
                      d="M180 274v-46m20 106c20-25 30-60 31-106m20 106c20-25 30-60 31-106m20 106c20-25 30-60 31-106m-177 0h200M200 274v-46m40 0v46m40 0v-46m40 0v46"
                      stroke="#41EAD4"
                      strokeWidth="1.5"
                      strokeOpacity={isScanning ? "0.8" : "0.4"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      style={{ 
                        transition: 'stroke-opacity 0.5s ease-in-out',
                        strokeDasharray: "90",
                        strokeDashoffset: isScanning ? "0" : "180",
                        transition: "stroke-dashoffset 2s ease-in-out"
                      }}
                    />
                    <path 
                      d="M170 300c50-10 130-10 180 0M250 300v50m0 20v20"
                      stroke="#41EAD4"
                      strokeWidth="1.5"
                      strokeOpacity={isScanning ? "0.8" : "0.4"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      style={{ 
                        transition: 'stroke-opacity 0.5s ease-in-out',
                        strokeDasharray: "90",
                        strokeDashoffset: isScanning ? "0" : "180",
                        transition: "stroke-dashoffset 2s ease-in-out"
                      }}
                    />
                  </svg>
                  
                  {/* Scanning Effect */}
                  {isScanning && (
                    <div className="absolute inset-0 overflow-hidden rounded-full">
                      {/* Scanning Line */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-cyber-cyan opacity-80 animate-scanning" style={{ boxShadow: '0 0 10px 5px rgba(65, 234, 212, 0.3)' }}></div>
                      
                      {/* Scan Particles */}
                      <div className="absolute inset-0">
                        {[...Array(20)].map((_, index) => (
                          <div 
                            key={index}
                            className="absolute w-1 h-1 rounded-full bg-cyber-cyan"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              opacity: Math.random() * 0.8 + 0.2,
                              animation: `pulse-glow ${Math.random() * 2 + 1}s infinite`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Success State */}
                  {isScanning && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-cyber-cyan text-sm font-mono bg-cyber-black/60 px-3 py-1 rounded-md border border-cyber-cyan/30 flex items-center gap-2">
                      <span className="block w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
                      <span>Scanning biometrics...</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Holographic Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                {/* Concentric Circles */}
                {[1, 0.8, 0.6].map((scale, index) => (
                  <div 
                    key={index}
                    className="absolute top-1/2 left-1/2 rounded-full border border-cyber-cyan/20 -translate-x-1/2 -translate-y-1/2"
                    style={{ 
                      width: `${scale * 100}%`, 
                      height: `${scale * 100}%`,
                      opacity: isScanning ? 0.4 : 0.2,
                      animation: isScanning ? `pulse-glow ${3 + index * 0.5}s infinite` : 'none'
                    }}
                  />
                ))}
                
                {/* Random Floating Elements */}
                {isScanning && [...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="absolute bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-md px-2 py-1 text-[10px] text-cyber-cyan/80 font-mono"
                    style={{
                      top: `${15 + Math.random() * 70}%`,
                      left: `${15 + Math.random() * 70}%`,
                      transform: `translateY(${Math.sin(Date.now() / 1000 + index) * 10}px)`,
                      opacity: 0.6 + Math.random() * 0.4,
                    }}
                  >
                    ID:{Math.floor(Math.random() * 100000)}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Floating Info Elements */}
          {isScanning && (
            <motion.div
              className="absolute -right-4 top-1/4 bg-cyber-black/50 backdrop-blur-md border border-cyber-cyan/30 rounded p-3 text-xs max-w-[180px]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <div className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-cyber-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium">Secure Authentication</p>
                  <p className="text-white/60 text-xxs">256-bit encryption with biometric validation</p>
                </div>
              </div>
            </motion.div>
          )}
          
          {isScanning && (
            <motion.div
              className="absolute -left-4 bottom-1/4 bg-cyber-black/50 backdrop-blur-md border border-cyber-cyan/30 rounded p-3 text-xs max-w-[180px]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.3 }}
            >
              <div className="flex items-start gap-2">
                <Lock className="h-4 w-4 text-cyber-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium">Anti-Spoofing</p>
                  <p className="text-white/60 text-xxs">AI-powered liveness detection</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
