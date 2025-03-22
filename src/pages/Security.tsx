
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CyberpunkBackground from '@/components/CyberpunkBackground';
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  BrainCircuit, 
  Fingerprint, 
  KeyRound, 
  BarChart4, 
  UserCheck,
  User,
  ChevronDown
} from 'lucide-react';

const Security = () => {
  const [activeSection, setActiveSection] = useState('encryption');
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  
  const securityLayers = [
    { id: 'encryption', icon: Lock, label: 'Encryption' },
    { id: 'biometrics', icon: Fingerprint, label: 'Biometrics' },
    { id: 'infrastructure', icon: Server, label: 'Infrastructure' },
    { id: 'ai', icon: BrainCircuit, label: 'AI Protection' },
  ];
  
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
              <span className="text-cyber-cyan text-sm font-medium">Security Center</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Fort Knox-Level <br />
              <span className="animated-gradient-text">Security Protection</span>
            </motion.h1>
            
            <motion.p 
              className="text-white/70 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              BioHoloPay integrates military-grade encryption with advanced biometric verification to create the most secure payment system ever developed.
            </motion.p>
          </div>
          
          {/* Security Vault Visualization */}
          <div className="mb-24">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                className="cyber-panel p-8 relative overflow-hidden h-[500px] flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
                
                {/* Vault Door */}
                <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 perspective preserve-3d mb-8">
                  <motion.div 
                    className="w-full h-full relative border-8 border-cyber-dark rounded-md overflow-hidden"
                    animate={{ 
                      rotateY: isVaultOpen ? 70 : 0,
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Vault Door Front */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark to-black flex flex-col items-center justify-center">
                      <div className="h-20 w-20 rounded-full border-4 border-cyber-cyan/50 flex items-center justify-center mb-4">
                        <Lock className="h-10 w-10 text-cyber-cyan" />
                      </div>
                      <div className="text-cyber-cyan font-mono text-lg">BIOMETRICS VAULT</div>
                      
                      {/* Vault Details */}
                      <div className="absolute top-4 left-4 flex flex-col items-start">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="h-2 w-2 rounded-full bg-cyber-cyan animate-pulse"></div>
                          <span className="text-xs text-cyber-cyan">SECURE</span>
                        </div>
                        <div className="text-xs text-white/50 font-mono">ID:7734-8AB2</div>
                      </div>
                      
                      {/* Vault Bolts */}
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i} 
                          className="absolute right-2 w-4 h-6 bg-cyber-cyan/30 rounded-sm"
                          style={{ top: `${25 + i * 25}%` }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Vault Door Inside */}
                    <div className="absolute inset-0 bg-cyber-dark backface-hidden" style={{ transform: 'rotateY(180deg)' }}></div>
                  </motion.div>
                  
                  {/* Vault Contents (visible when open) */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ 
                      opacity: isVaultOpen ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out',
                      transitionDelay: isVaultOpen ? '0.5s' : '0s'
                    }}
                  >
                    <div className="grid grid-cols-2 gap-4 w-full h-full p-6">
                      {['DNA', 'VOICE', 'FACE', 'PALM'].map((data, index) => (
                        <div 
                          key={index} 
                          className="bg-cyber-dark/50 backdrop-blur-sm border border-cyber-cyan/20 rounded flex items-center justify-center"
                        >
                          <span className="text-cyber-cyan text-sm font-mono">{data}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Open/Close Button */}
                <button 
                  className={`relative z-10 px-6 py-3 rounded-md transition-all ${
                    isVaultOpen 
                      ? 'bg-white/10 text-white border border-white/20' 
                      : 'bg-cyber-cyan text-cyber-black'
                  }`}
                  onClick={() => setIsVaultOpen(!isVaultOpen)}
                >
                  {isVaultOpen ? 'Close Vault' : 'Open Secure Vault'}
                </button>
                
                <div className="absolute bottom-4 left-4 text-xs text-white/40 font-mono">
                  {isVaultOpen ? 'SECURITY BREACH WARNING: Display Mode Only' : 'SYSTEM SECURE'}
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Security Layers */}
          <div className="mb-24">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Multi-Layered Security</h2>
              <p className="text-white/60 max-w-lg mx-auto">
                Our defense-in-depth approach ensures your biometric and financial data remains protected at all times
              </p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto">
              {/* Security Layer Tabs */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {securityLayers.map((layer) => (
                  <button
                    key={layer.id}
                    className={`flex items-center gap-2 px-5 py-3 rounded-md transition-all ${
                      activeSection === layer.id 
                        ? 'bg-cyber-cyan text-cyber-black shadow-neon-cyan' 
                        : 'bg-white/5 hover:bg-white/10 text-white/70'
                    }`}
                    onClick={() => setActiveSection(layer.id)}
                  >
                    <layer.icon className="h-5 w-5" />
                    <span>{layer.label}</span>
                  </button>
                ))}
              </div>
              
              {/* Content for Each Section */}
              <motion.div 
                key={activeSection}
                className="cyber-panel p-8 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
                
                <div className="relative z-10">
                  {{
                    'encryption': (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Lock className="h-6 w-6 text-cyber-cyan" />
                            Quantum-Safe Encryption
                          </h3>
                          <p className="text-white/70 mb-6">
                            BioHoloPay employs post-quantum cryptographic algorithms that are resistant to attacks from both classical and quantum computers, ensuring your data remains secure even as computing technology advances.
                          </p>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-cyber-dark flex items-center justify-center mt-0.5">
                                <KeyRound className="h-3 w-3 text-cyber-cyan" />
                              </div>
                              <div>
                                <h4 className="font-medium">AES-256 Encryption</h4>
                                <p className="text-sm text-white/60">Military-grade encryption for all stored data</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-cyber-dark flex items-center justify-center mt-0.5">
                                <KeyRound className="h-3 w-3 text-cyber-cyan" />
                              </div>
                              <div>
                                <h4 className="font-medium">ECDH Key Exchange</h4>
                                <p className="text-sm text-white/60">Secure channel establishment with perfect forward secrecy</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-cyber-dark flex items-center justify-center mt-0.5">
                                <KeyRound className="h-3 w-3 text-cyber-cyan" />
                              </div>
                              <div>
                                <h4 className="font-medium">Homomorphic Encryption</h4>
                                <p className="text-sm text-white/60">Perform operations on encrypted data without decryption</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="cyber-panel p-6 h-full flex flex-col justify-center items-center">
                          {/* Encryption Visualization */}
                          <div className="w-full max-w-xs">
                            <div className="mb-8 relative">
                              <div className="glassmorphism p-3 text-center mb-3">
                                <span className="text-sm text-white/70">Your Biometric Data</span>
                              </div>
                              
                              <motion.div
                                className="h-1 bg-cyber-cyan"
                                animate={{ 
                                  x: [0, 100, 0],
                                  opacity: [0.2, 1, 0.2],
                                }}
                                transition={{ 
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                              
                              <div className="p-4 relative">
                                {/* Animated Binary Data */}
                                <div className="font-mono text-xs text-cyber-cyan/60 flex flex-wrap">
                                  {[...Array(8)].map((_, i) => (
                                    <motion.span
                                      key={i}
                                      className="mr-1"
                                      animate={{
                                        opacity: [0.4, 1, 0.4],
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                      }}
                                    >
                                      {Math.round(Math.random()) === 1 ? '1' : '0'}
                                    </motion.span>
                                  ))}
                                </div>
                              </div>
                              
                              <motion.div
                                className="h-1 bg-cyber-cyan"
                                animate={{ 
                                  x: [0, 100, 0],
                                  opacity: [0.2, 1, 0.2],
                                }}
                                transition={{ 
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "linear",
                                  delay: 1.5,
                                }}
                              />
                              
                              <div className="glassmorphism p-3 text-center mt-3">
                                <span className="text-sm text-white/70">Encrypted Output</span>
                              </div>
                            </div>
                            
                            <div className="text-center">
                              <p className="text-white/60 text-sm">
                                Your data is encrypted on-device before any transmission
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                    'biometrics': (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Fingerprint className="h-6 w-6 text-cyber-cyan" />
                            Biometric Verification
                          </h3>
                          <p className="text-white/70 mb-6">
                            Our multi-modal biometric system combines different physiological markers to create an unhackable identity verification system with anti-spoofing technology.
                          </p>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-cyber-dark flex items-center justify-center mt-0.5">
                                <UserCheck className="h-3 w-3 text-cyber-cyan" />
                              </div>
                              <div>
                                <h4 className="font-medium">Liveness Detection</h4>
                                <p className="text-sm text-white/60">Ensures biometric samples come from a living person, not replicas</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-cyber-dark flex items-center justify-center mt-0.5">
                                <UserCheck className="h-3 w-3 text-cyber-cyan" />
                              </div>
                              <div>
                                <h4 className="font-medium">Template Protection</h4>
                                <p className="text-sm text-white/60">Biometric data stored as non-reversible mathematical models</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-cyber-dark flex items-center justify-center mt-0.5">
                                <UserCheck className="h-3 w-3 text-cyber-cyan" />
                              </div>
                              <div>
                                <h4 className="font-medium">Multi-factor Fusion</h4>
                                <p className="text-sm text-white/60">Combines multiple biometrics for unprecedented security</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="cyber-panel p-6 h-full flex flex-col justify-center items-center">
                          {/* Biometrics Visualization */}
                          <div className="relative w-48 h-48 md:w-64 md:h-64">
                            {/* Hand Scan Visual */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg viewBox="0 0 512 512" className="w-full h-full text-cyber-cyan/50">
                                <path 
                                  d="M408 64c-13.3 0-24 10.7-24 24v10.3c-18.9-9.5-40.7-14.3-64-14.3C259.9 84 205 125.3 183 173.3c-9.7-6.4-20.7-9.7-32-9.3C120.7 165.3 96 191.3 96 224v96c0 8.8 7.2 16 16 16s16-7.2 16-16V224c0-14.7 10.7-26.3 24-25c6.7 .7 12.8 4.2 17.3 9.5c-6 34.8-7.6 71.5-3.7 109.6C169.6 347 180.3 368 192 368c13.3 0 24-14.3 24-32c0-21-13.5-33.9-16.6-36.9l0 0c-3.9-3.8-6.1-9-6.1-14.5c0-11.3 9.1-20.4 20.4-20.4c5.3 0 10.4 2.1 14.2 5.8l0 0C231.5 273.1 244 286 264 286c13.3 0 24-10.7 24-24s-10.7-24-24-24c-.9 0-1.8 0-2.7 .1C276.9 184.9 319.1 148 368 148c26.5 0 48 21.5 48 48v88v88c0 21-10.8 39.6-29 50.4c-30.4 18-59 40.4-82.9 65.6c-3.5 3.7-8.5 5.8-13.7 5.8L181.7 494c-10.1-.4-20.8-5.5-23.7-15.9c-.1-.2-.1-.4-.2-.6c-3-10.5-14.1-16.6-24.9-13.7s-16.7 14-13.8 24.8c5.2 18.6 22.8 33.1 42.4 33.4l107.9 .2c14.7 0 28.9-5.7 39.5-17.1c26-27.1 56.8-51 89.5-70.3c13.7-8.1 32.5-21.4 44-46.9c.5-1.1 .9-2.2 1.3-3.3c3.5-9.5 5.3-19.6 5.3-30.2V224 148 88c0-13.3-10.7-24-24-24zM256 390c-13.3 0-24 10.7-24 24s10.7 24 24 24h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H256z"
                                  fill="transparent"
                                  stroke="currentColor"
                                  strokeWidth="1"
                                />
                              </svg>
                              
                              {/* Scanning Effect */}
                              <div className="absolute inset-0 overflow-hidden">
                                <motion.div 
                                  className="absolute top-0 left-0 w-full h-1 bg-cyber-cyan"
                                  animate={{ 
                                    y: [0, 200, 0],
                                    opacity: [0.3, 1, 0.3],
                                  }}
                                  transition={{ 
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                  style={{ boxShadow: '0 0 15px 2px rgba(65, 234, 212, 0.5)' }}
                                />
                              </div>
                              
                              {/* Reference Points */}
                              {[...Array(12)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-1.5 h-1.5 rounded-full bg-cyber-cyan/70"
                                  style={{
                                    left: `${30 + Math.random() * 40}%`,
                                    top: `${30 + Math.random() * 40}%`,
                                  }}
                                  animate={{
                                    opacity: [0.3, 1, 0.3],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                  }}
                                />
                              ))}
                            </div>
                            
                            {/* Verification Status */}
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-cyber-cyan text-xs font-mono bg-cyber-black/60 px-3 py-1 rounded-md border border-cyber-cyan/30 flex items-center gap-2 w-40 justify-center">
                              <span className="block w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
                              <span>Verifying identity</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                    'infrastructure': (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Server className="h-6 w-6 text-cyber-cyan" />
                            Secure Infrastructure
                          </h3>
                          <p className="text-white/70 mb-6">
                            Our infrastructure is built with a zero-trust architecture, distributed across multiple geographical locations with no single point of failure.
                          </p>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-cyber-dark flex items-center justify-center mt-0.5">
                                <Server className="h-3 w-3 text-cyber-cyan" />
                              </div>
                              <div>
                                <h4 className="font-medium">Air-Gapped Networks</h4>
                                <p className="text-sm text-white/60">Critical systems are physically isolated from unsecured networks</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-cyber-dark flex items-center justify-center mt-0.5">
                                <Server className="h-3 w-3 text-cyber-cyan" />
                              </div>
                              <div>
                                <h4 className="font-medium">Database Sharding</h4>
                                <p className="text-sm text-white/60">Data is partitioned across multiple servers for enhanced security</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-cyber-dark flex items-center justify-center mt-0.5">
                                <Server className="h-3 w-3 text-cyber-cyan" />
                              </div>
                              <div>
                                <h4 className="font-medium">24/7 SOC Monitoring</h4>
                                <p className="text-sm text-white/60">Security Operations Center with real-time threat monitoring</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="cyber-panel p-6 h-full flex flex-col justify-center items-center">
                          {/* Infrastructure Visualization */}
                          <div className="relative w-full h-48 cyber-grid-bg rounded overflow-hidden">
                            {/* Server Nodes */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="grid grid-cols-3 gap-4">
                                {[...Array(9)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className="w-8 h-8 bg-cyber-dark border border-cyber-cyan/20 rounded flex items-center justify-center"
                                    animate={{
                                      boxShadow: ['0 0 0px rgba(65, 234, 212, 0)', '0 0 8px rgba(65, 234, 212, 0.5)', '0 0 0px rgba(65, 234, 212, 0)'],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: i * 0.3,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    <div className="w-2 h-2 rounded-full bg-cyber-cyan"></div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                              {[...Array(12)].map((_, i) => {
                                const x1 = 20 + Math.random() * 60;
                                const y1 = 20 + Math.random() * 60;
                                const x2 = 20 + Math.random() * 60;
                                const y2 = 20 + Math.random() * 60;
                                
                                return (
                                  <motion.line
                                    key={i}
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke="rgba(65, 234, 212, 0.3)"
                                    strokeWidth="0.3"
                                    animate={{
                                      stroke: ['rgba(65, 234, 212, 0.1)', 'rgba(65, 234, 212, 0.5)', 'rgba(65, 234, 212, 0.1)'],
                                    }}
                                    transition={{
                                      duration: 3,
                                      repeat: Infinity,
                                      delay: i * 0.2,
                                    }}
                                  />
                                );
                              })}
                            </svg>
                          </div>
                          
                          <div className="text-center mt-4">
                            <p className="text-white/60 text-sm">
                              Distributed architecture with no single point of failure
                            </p>
                          </div>
                        </div>
                      </div>
                    ),
                    'ai': (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <BrainCircuit className="h-6 w-6 text-cyber-cyan" />
                            AI-Powered Protection
                          </h3>
                          <p className="text-white/70 mb-6">
                            Our neural networks analyze transaction patterns in real-time to detect anomalies and prevent fraud before it happens, adapting to new threats as they emerge.
                          </p>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-cyber-dark flex items-center justify-center mt-0.5">
                                <BrainCircuit className="h-3 w-3 text-cyber-cyan" />
                              </div>
                              <div>
                                <h4 className="font-medium">Behavioral Biometrics</h4>
                                <p className="text-sm text-white/60">Analyzes unique interaction patterns for continuous authentication</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-cyber-dark flex items-center justify-center mt-0.5">
                                <BrainCircuit className="h-3 w-3 text-cyber-cyan" />
                              </div>
                              <div>
                                <h4 className="font-medium">Anomaly Detection</h4>
                                <p className="text-sm text-white/60">Identifies unusual patterns that may indicate fraud attempts</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-cyber-dark flex items-center justify-center mt-0.5">
                                <BrainCircuit className="h-3 w-3 text-cyber-cyan" />
                              </div>
                              <div>
                                <h4 className="font-medium">Adaptive Learning</h4>
                                <p className="text-sm text-white/60">Systems evolve to counter emerging threats and attack vectors</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="cyber-panel p-6 h-full flex flex-col justify-center items-center">
                          {/* AI Visualization */}
                          <div className="relative w-full">
                            {/* Transaction Activity Chart */}
                            <div className="mb-6">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-xs text-white/60">Transaction Activity</span>
                                <span className="text-xs text-cyber-cyan">Real-time Analysis</span>
                              </div>
                              
                              <div className="h-20 bg-cyber-dark/50 border border-cyber-dark rounded-md overflow-hidden relative">
                                <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
                                  <motion.path
                                    d="M0,15 Q10,10 20,18 T40,15 T60,12 T80,20 T100,15"
                                    fill="none"
                                    stroke="rgba(65, 234, 212, 0.5)"
                                    strokeWidth="1"
                                    animate={{
                                      d: [
                                        "M0,15 Q10,10 20,18 T40,15 T60,12 T80,20 T100,15",
                                        "M0,15 Q10,15 20,10 T40,18 T60,15 T80,12 T100,15",
                                        "M0,15 Q10,18 20,15 T40,10 T60,18 T80,15 T100,15",
                                      ],
                                    }}
                                    transition={{
                                      duration: 8,
                                      repeat: Infinity,
                                      ease: "linear",
                                    }}
                                  />
                                  
                                  {/* Anomaly Point */}
                                  <motion.circle
                                    cx="75"
                                    cy="12"
                                    r="1.5"
                                    fill="rgba(255, 100, 100, 0.8)"
                                    animate={{
                                      r: [1.5, 3, 1.5],
                                      opacity: [0.8, 1, 0.8],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 5,
                                    }}
                                  />
                                </svg>
                                
                                {/* Anomaly Detection */}
                                <motion.div
                                  className="absolute top-0 right-0 bg-red-500/20 backdrop-blur-sm border border-red-500/30 p-1 text-[8px] rounded"
                                  initial={{ opacity: 0 }}
                                  animate={{
                                    opacity: [0, 1, 1, 0],
                                  }}
                                  transition={{
                                    duration: 4,
                                    times: [0, 0.1, 0.9, 1],
                                    repeat: Infinity,
                                    delay: 5,
                                  }}
                                >
                                  ANOMALY DETECTED
                                </motion.div>
                              </div>
                            </div>
                            
                            {/* AI Status Indicators */}
                            <div className="flex flex-wrap gap-2">
                              {['Behavior Analysis', 'Pattern Recognition', 'Threat Detection', 'Identity Verification'].map((status, i) => (
                                <div key={i} className="text-[9px] bg-cyber-dark/50 border border-cyber-cyan/20 rounded px-2 py-1 flex items-center">
                                  <motion.div
                                    className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mr-1"
                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                    transition={{ 
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: i * 0.5,
                                    }}
                                  />
                                  <span className="text-white/80">{status}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                  }[activeSection]}
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Security Standards & Compliance */}
          <div className="mb-24">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Standards & Compliance</h2>
              <p className="text-white/60 max-w-lg mx-auto">
                We adhere to the highest security standards and certifications
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: "ISO 27001", description: "Information Security Management" },
                { label: "PCI DSS Level 1", description: "Payment Card Industry Standard" },
                { label: "GDPR Compliant", description: "European Data Protection" },
                { label: "SOC 2 Type II", description: "Service Organization Control" },
              ].map((certification, index) => (
                <motion.div
                  key={index}
                  className="glassmorphism p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <ShieldCheck className="h-8 w-8 text-cyber-cyan" />
                  </div>
                  <h3 className="text-white font-medium mb-1">{certification.label}</h3>
                  <p className="text-white/60 text-xs">{certification.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Security Statistics */}
          <div className="mb-24">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                className="cyber-panel p-8 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <BarChart4 className="h-6 w-6 text-cyber-cyan" />
                    Security Performance
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { label: "Fraud Prevention Rate", value: "99.997%", icon: ShieldCheck },
                      { label: "System Uptime", value: "99.999%", icon: Server },
                      { label: "Biometric Accuracy", value: "99.98%", icon: Fingerprint },
                    ].map((stat, index) => (
                      <div 
                        key={index} 
                        className="glassmorphism p-6 text-center"
                      >
                        <div className="mb-4">
                          <stat.icon className="h-8 w-8 text-cyber-cyan mx-auto" />
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-white/60 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <h4 className="font-medium mb-4">System Security Status</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { label: "Intrusion Detection", status: "Active", color: "cyber-cyan" },
                        { label: "Threat Intelligence", status: "Updated", color: "cyber-cyan" },
                        { label: "Encryption Protocols", status: "Strong", color: "cyber-cyan" },
                        { label: "Vulnerability Tests", status: "Passed", color: "cyber-cyan" },
                      ].map((item, index) => (
                        <div 
                          key={index} 
                          className="flex justify-between items-center bg-cyber-dark/30 p-3 rounded"
                        >
                          <span className="text-white/70">{item.label}</span>
                          <span className={`text-${item.color} text-sm flex items-center gap-1`}>
                            <span className={`inline-block w-2 h-2 rounded-full bg-${item.color}`}></span>
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
              Experience Uncompromised Security
            </h2>
            <p className="text-white/70 mb-6">
              Join thousands of users who trust BioHoloPay with their biometric and financial security.
            </p>
            <button className="bg-cyber-cyan hover:bg-opacity-90 text-cyber-black rounded-md px-8 py-3 font-medium transition-all hover:shadow-neon-cyan">
              Secure Your Account Today
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Security;
