
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CyberpunkBackground from '@/components/CyberpunkBackground';
import { 
  Fingerprint, 
  Scan, 
  CreditCard, 
  ShoppingCart, 
  Check, 
  ShieldCheck, 
  Lock, 
  Server, 
  ChevronRight,
  CircleCheck,
  ChevronDown
} from 'lucide-react';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
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
              <span className="text-cyber-cyan text-sm font-medium">How It Works</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Experience The <span className="animated-gradient-text">Future</span> of <br />
              Biometric Payments
            </motion.h1>
            
            <motion.p 
              className="text-white/70 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover how BioHoloPay's revolutionary technology transforms the way you make payments with just a scan of your finger or palm.
            </motion.p>
          </div>
          
          {/* Payment Process - Animated Demo */}
          <div className="mb-24">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-white/60 max-w-lg mx-auto">
                See how BioHoloPay transforms the payment experience in just a few simple steps
              </p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-cyber-cyan/30 transform md:-translate-x-1/2 hidden md:block"></div>
                
                {/* Steps */}
                {[
                  {
                    title: "Registration",
                    description: "Set up your BioHoloPay account and scan your biometric data securely.",
                    icon: Fingerprint,
                    animationSrc: "/fingerprint-scan.mp4",
                    delay: 0.1,
                  },
                  {
                    title: "Link Your Payment Methods",
                    description: "Connect your existing cards and bank accounts to your biometric profile.",
                    icon: CreditCard,
                    animationSrc: "/link-cards.mp4",
                    delay: 0.2,
                  },
                  {
                    title: "Shop Anywhere",
                    description: "Visit any merchant with a BioHoloPay terminal, online or in-store.",
                    icon: ShoppingCart,
                    animationSrc: "/shop-anywhere.mp4",
                    delay: 0.3,
                  },
                  {
                    title: "Authenticate With Your Body",
                    description: "Place your finger or palm on the scanner to verify your identity.",
                    icon: Scan,
                    animationSrc: "/biometric-auth.mp4",
                    delay: 0.4,
                  },
                  {
                    title: "Payment Complete",
                    description: "Transaction is processed instantly and receipt is delivered digitally.",
                    icon: Check,
                    animationSrc: "/payment-complete.mp4",
                    delay: 0.5,
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} mb-20 md:mb-32`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: step.delay }}
                  >
                    {/* Content */}
                    <div className="md:w-5/12">
                      <div className="glassmorphism p-6 mb-6 md:mb-0">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-10 rounded-full bg-cyber-dark flex items-center justify-center">
                            <step.icon className="h-5 w-5 text-cyber-cyan" />
                          </div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-white/70">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Center Number */}
                    <div className="absolute top-0 left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-cyber-dark border-2 border-cyber-cyan flex items-center justify-center z-10">
                      <span className="text-cyber-cyan font-bold">{index + 1}</span>
                    </div>
                    
                    {/* Animation Placeholder */}
                    <div className="md:w-5/12 h-48 md:h-auto glassmorphism overflow-hidden">
                      <div className="w-full h-full bg-cyber-dark flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="animate-pulse mb-4">
                            <step.icon className="h-10 w-10 text-cyber-cyan mx-auto" />
                          </div>
                          <p className="text-white/60 text-sm">Animation Placeholder</p>
                          <p className="text-cyber-cyan text-xs mt-2">Step {index + 1}: {step.title}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Technology Tabs */}
          <div className="mb-24">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology</h2>
              <p className="text-white/60 max-w-lg mx-auto">
                Explore the cutting-edge innovations powering our biometric payment system
              </p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto">
              {/* Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {["Fingerprint Recognition", "Palm Vein Scanner", "Facial Verification", "Security Layers"].map((tab, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-md transition-all ${activeTab === index ? 'bg-cyber-cyan text-cyber-black font-medium' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <div className="cyber-panel p-8 relative overflow-hidden">
                <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
                
                <motion.div 
                  key={activeTab}
                  className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Left Column - Visualization */}
                  <div className="h-64 md:h-auto glassmorphism p-4 flex items-center justify-center">
                    <div className="text-center">
                      {[
                        <Fingerprint key={0} className="h-20 w-20 text-cyber-cyan mx-auto animate-pulse" />,
                        <Scan key={1} className="h-20 w-20 text-cyber-cyan mx-auto animate-pulse" />,
                        <Scan key={2} className="h-20 w-20 text-cyber-cyan mx-auto animate-pulse" />,
                        <ShieldCheck key={3} className="h-20 w-20 text-cyber-cyan mx-auto animate-pulse" />,
                      ][activeTab]}
                      <p className="text-white/60 mt-4">Technology Visualization</p>
                    </div>
                  </div>
                  
                  {/* Right Column - Info */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {["Fingerprint Recognition", "Palm Vein Scanner", "Facial Verification", "Security Layers"][activeTab]}
                    </h3>
                    
                    <p className="text-white/70 mb-6">
                      {[
                        "Our advanced fingerprint recognition technology captures unique ridge patterns with sub-millimeter precision, ensuring your identity can't be replicated.",
                        "The palm vein scanner uses near-infrared light to map the unique pattern of blood vessels beneath your skin, creating an unhackable biometric signature.",
                        "Optional facial verification adds an extra layer of security by analyzing 30,000+ points on your face with depth sensing to prevent spoofing attempts.",
                        "Multiple layers of security, from device-level encryption to quantum-resistant algorithms, protect your biometric and financial data at every step.",
                      ][activeTab]}
                    </p>
                    
                    <ul className="space-y-3">
                      {[
                        [
                          "3D ultrasonic sensors capture depth and detail",
                          "Pattern matching with 99.998% accuracy",
                          "Live detection prevents fake fingerprint attacks",
                        ],
                        [
                          "Works even with dirty or damaged skin",
                          "Blood vessel patterns are internal and impossible to forge",
                          "Contactless scanning for improved hygiene",
                        ],
                        [
                          "Works in various lighting conditions",
                          "Identifies users even with masks, glasses, or makeup",
                          "Combines with other biometrics for multi-factor authentication",
                        ],
                        [
                          "End-to-end encryption from device to server",
                          "Biometric data never leaves your device",
                          "Real-time fraud detection with AI monitoring",
                        ],
                      ][activeTab].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CircleCheck className="h-5 w-5 text-cyber-cyan flex-shrink-0 mt-0.5" />
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Security Section */}
          <div className="mb-24">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Security & Privacy</h2>
              <p className="text-white/60 max-w-lg mx-auto">
                We prioritize the protection of your biometric data and financial information
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Zero Knowledge Architecture",
                    description: "Your biometric templates are encrypted and stored only on your device. We never see or store your actual fingerprints or palm scans.",
                    icon: Lock,
                    delay: 0.1,
                  },
                  {
                    title: "Military-Grade Encryption",
                    description: "AES-256 bit encryption with quantum-resistant algorithms ensures your data remains secure even against future threats.",
                    icon: ShieldCheck,
                    delay: 0.2,
                  },
                  {
                    title: "Real-time Transaction Monitoring",
                    description: "AI-powered systems analyze transaction patterns to detect and prevent fraudulent access attempts in real-time.",
                    icon: Scan,
                    delay: 0.3,
                  },
                  {
                    title: "Decentralized Storage",
                    description: "Financial data is fragmented and stored across multiple secure locations with no single point of vulnerability.",
                    icon: Server,
                    delay: 0.4,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="glassmorphism p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-cyber-dark flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-cyber-cyan" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-white/70">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* FAQs */}
          <div className="mb-24">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-white/60 max-w-lg mx-auto">
                Get answers to the most common questions about BioHoloPay
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "Is my biometric data safe with BioHoloPay?",
                  answer: "Yes, your biometric data never leaves your device. We use a template-based system that converts your unique features into encrypted mathematical representations that cannot be reverse-engineered back into your actual biometric data.",
                },
                {
                  question: "What happens if my fingerprint or palm changes?",
                  answer: "Our system accounts for minor changes over time, such as small cuts or abrasions. For significant changes, you can update your biometric profile through the app. The system maintains multiple reference points to ensure you're never locked out.",
                },
                {
                  question: "Can someone force me to make a payment?",
                  answer: "BioHoloPay includes anti-coercion features. You can set up a 'duress code' or alternative finger/palm that will appear to process the payment but will actually lock your account and alert authorities.",
                },
                {
                  question: "What if the merchant doesn't have a BioHoloPay terminal?",
                  answer: "You can still use BioHoloPay at merchants without specialized terminals through our app, which generates temporary virtual cards or QR codes compatible with standard payment systems.",
                },
                {
                  question: "How does BioHoloPay make money if the service is free?",
                  answer: "We charge merchants a small processing fee that's lower than traditional card networks. We never sell your data or use it for advertising. Our business model is based on providing secure, efficient payment processing.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    className={`w-full text-left p-6 glassmorphism flex justify-between items-center transition-all ${activeAccordion === index ? 'shadow-neon-cyan' : ''}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-cyber-cyan transition-transform ${activeAccordion === index ? 'transform rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 bg-white/5 border-t border-white/10">
                      <p className="text-white/70">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
              Ready to Experience the Future of Payments?
            </h2>
            <p className="text-white/70 mb-6">
              Join the thousands of users who've already made the switch to biometric payments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-cyber-cyan hover:bg-opacity-90 text-cyber-black rounded-md px-8 py-3 font-medium transition-all hover:shadow-neon-cyan flex items-center justify-center gap-2">
                Create Your Account <ChevronRight className="h-4 w-4" />
              </button>
              <button className="border border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-sm text-white rounded-md px-8 py-3 font-medium transition-all hover:bg-white/10">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
