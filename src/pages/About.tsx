
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CyberpunkBackground from '@/components/CyberpunkBackground';
import { Shield, Fingerprint, HandMetal, Scan, Server, Globe, User, Users, Award } from 'lucide-react';

const About = () => {
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
              <span className="text-cyber-cyan text-sm font-medium">About BioHoloPay</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Pioneering The Future Of <br />
              <span className="animated-gradient-text">Biometric Payments</span>
            </motion.h1>
            
            <motion.p 
              className="text-white/70 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              BioHoloPay is leading the revolution in how people make payments, replacing traditional methods with secure biometric authentication.
            </motion.p>
          </div>
          
          {/* Our Mission */}
          <div className="max-w-4xl mx-auto mb-24">
            <motion.div 
              className="cyber-panel p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-white/70 text-lg mb-6">
                  Our mission is to create a world where your identity is your payment method - eliminating the need for physical cards, cash, or remembering passwords.
                </p>
                <p className="text-white/70 text-lg">
                  We're combining cutting-edge biometric technology, military-grade encryption, and an intuitive user experience to redefine the concept of secure payments.
                </p>
                
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: Shield, title: "Security", description: "Bank-level encryption with biometric verification" },
                    { icon: Globe, title: "Accessibility", description: "Available everywhere, for everyone" },
                    { icon: Users, title: "Community", description: "Building a network of forward-thinking users" },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-cyber-dark flex items-center justify-center mb-4">
                        <item.icon className="h-6 w-6 text-cyber-cyan" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Evolution Timeline */}
          <div className="mb-24">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Payment Evolution</h2>
              <p className="text-white/60 max-w-lg mx-auto">
                From barter to biometrics - the journey of payment methods through history
              </p>
            </motion.div>
            
            <div className="relative max-w-5xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-cyber-cyan/30"></div>
              
              {/* Timeline Items */}
              {[
                {
                  year: "Pre-1900s",
                  title: "Physical Currency",
                  description: "Coins and paper money dominated transactions for centuries.",
                  icon: "💰",
                },
                {
                  year: "1950s",
                  title: "Credit Cards",
                  description: "The introduction of plastic payment cards revolutionized retail.",
                  icon: "💳",
                },
                {
                  year: "2000s",
                  title: "Digital Payments",
                  description: "Online banking and digital wallets changed how we transfer money.",
                  icon: "💻",
                },
                {
                  year: "2010s",
                  title: "Mobile Payments",
                  description: "Smartphones became payment devices with NFC and QR codes.",
                  icon: "📱",
                },
                {
                  year: "Today",
                  title: "Biometric Authentication",
                  description: "Your body becomes your payment method with fingerprint and palm scanning.",
                  icon: "👆",
                },
                {
                  year: "Future",
                  title: "BioHoloPay",
                  description: "Advanced biometrics with holographic interfaces and quantum security.",
                  icon: "✨",
                },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`relative z-10 flex ${index % 2 === 0 ? 'justify-end md:flex-row-reverse' : ''} mb-12 md:mb-24`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Content */}
                  <div className="md:w-5/12">
                    <div className="glassmorphism p-6">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <div className="text-cyber-cyan text-sm mb-3">{item.year}</div>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyber-cyan"></div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-24">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-white/60 max-w-lg mx-auto">
                Meet the visionaries behind the future of biometric payments
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Dr. Alexis Chen",
                  role: "Founder & CEO",
                  bio: "Former MIT researcher specializing in biometric authentication systems.",
                  delay: 0.1,
                },
                {
                  name: "Marcus Washington",
                  role: "CTO",
                  bio: "Pioneered quantum encryption protocols for financial technology.",
                  delay: 0.2,
                },
                {
                  name: "Sophia Nakamura",
                  role: "Head of Security",
                  bio: "Cybersecurity expert with background in military defense systems.",
                  delay: 0.3,
                },
                {
                  name: "David Park",
                  role: "Chief Product Officer",
                  bio: "Designed award-winning user interfaces for financial applications.",
                  delay: 0.4,
                },
                {
                  name: "Elena Rodriguez",
                  role: "VP of Partnerships",
                  bio: "Established strategic relationships with major financial institutions worldwide.",
                  delay: 0.5,
                },
                {
                  name: "Julian Kim",
                  role: "Head of Research",
                  bio: "Leading innovation in next-generation biometric recognition algorithms.",
                  delay: 0.6,
                },
              ].map((person, index) => (
                <motion.div
                  key={index}
                  className="glassmorphism p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: person.delay }}
                >
                  <div className="mb-4 w-16 h-16 bg-cyber-dark rounded-full mx-auto flex items-center justify-center">
                    <User className="h-8 w-8 text-cyber-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-center">{person.name}</h3>
                  <div className="text-cyber-cyan text-sm mb-3 text-center">{person.role}</div>
                  <p className="text-white/70 text-center">{person.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Technology Section */}
          <div className="mb-24">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology</h2>
                <p className="text-white/60 max-w-lg mx-auto">
                  Explore the cutting-edge innovations powering our biometric payment system
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Fingerprint Recognition",
                    description: "Advanced 3D depth mapping technology captures unique ridge patterns with sub-millimeter precision.",
                    icon: Fingerprint,
                    color: "from-cyber-cyan to-cyber-blue",
                    delay: 0.1,
                  },
                  {
                    title: "Palm Vein Authentication",
                    description: "Near-infrared scanning detects the unique pattern of blood vessels beneath your skin for unhackable identity verification.",
                    icon: HandMetal,
                    color: "from-cyber-purple to-cyber-pink",
                    delay: 0.2,
                  },
                  {
                    title: "Neural Processing",
                    description: "Our AI neural network processes biometric data locally on your device for maximum security and privacy.",
                    icon: Scan,
                    color: "from-cyber-blue to-cyber-purple",
                    delay: 0.3,
                  },
                  {
                    title: "Quantum-Safe Security",
                    description: "Future-proof encryption resistant to quantum computing attacks protects your biometric and financial data.",
                    icon: Server,
                    color: "from-cyber-cyan to-cyber-dark",
                    delay: 0.4,
                  },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="cyber-panel p-6 h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: tech.delay }}
                  >
                    <div className={`h-2 w-16 mb-6 rounded bg-gradient-to-r ${tech.color}`}></div>
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-full bg-cyber-dark flex items-center justify-center flex-shrink-0">
                        <tech.icon className="h-6 w-6 text-cyber-cyan" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                        <p className="text-white/70">{tech.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Awards & Recognition */}
          <div className="mb-20">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
              <p className="text-white/60 max-w-lg mx-auto">
                Our innovations in payment technology have been recognized globally
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { award: "FinTech Innovation Award", year: "2023" },
                { award: "Best Security Solution", year: "2022" },
                { award: "Future of Banking Award", year: "2023" },
                { award: "Tech Disruptor of the Year", year: "2022" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glassmorphism p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4 mx-auto">
                    <Award className="h-10 w-10 text-cyber-cyan mx-auto" />
                  </div>
                  <h3 className="text-sm font-medium mb-1">{item.award}</h3>
                  <div className="text-cyber-cyan text-xs">{item.year}</div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <motion.div 
            className="text-center mb-20 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 animated-gradient-text">
              Join Us in Revolutionizing Payments
            </h2>
            <p className="text-white/70 mb-6">
              Be part of the future where your identity is your wallet. No cards, no passwords, just you.
            </p>
            <button className="bg-cyber-cyan hover:bg-opacity-90 text-cyber-black rounded-md px-8 py-3 font-medium transition-all hover:shadow-neon-cyan">
              Get Started Today
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
