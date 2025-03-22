
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, ShieldCheck, Wifi } from 'lucide-react';

const FloatingCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const cards = container.querySelectorAll('.card-3d');
      const containerRect = container.getBoundingClientRect();
      
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;
      
      const rotateX = (containerRect.height / 2 - mouseY) / 30;
      const rotateY = (mouseX - containerRect.width / 2) / 30;
      
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const depth = parseFloat(cardElement.dataset.depth || '1');
        cardElement.style.transform = `
          translateZ(${depth * 50}px) 
          rotateX(${rotateX * depth}deg) 
          rotateY(${rotateY * depth}deg)
        `;
      });
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const cards = [
    {
      name: "Quantum Bank",
      number: "**** **** **** 4291",
      expires: "09/28",
      logo: "/visa.svg",
      color: "from-cyber-purple to-cyber-blue",
      depth: 1.3,
      delay: 0.2,
    },
    {
      name: "Neo Finance",
      number: "**** **** **** 7835",
      expires: "12/27",
      logo: "/mastercard.svg",
      color: "from-cyber-cyan to-cyber-blue",
      depth: 1,
      delay: 0.3,
    },
    {
      name: "Future Credit",
      number: "**** **** **** 1658",
      expires: "04/29",
      logo: "/amex.svg", 
      color: "from-cyber-pink to-cyber-purple",
      depth: 0.7,
      delay: 0.4,
    },
  ];
  
  return (
    <div className="w-full py-20 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compatible With All Your Cards</h2>
          <p className="text-white/60 max-w-lg mx-auto">
            Link your existing cards and bank accounts to your biometric profile for seamless authentication.
          </p>
        </motion.div>
        
        <div 
          ref={containerRef}
          className="relative h-[400px] md:h-[450px] mx-auto perspective w-full max-w-4xl flex justify-center"
        >
          {/* 3D Container */}
          <div className="w-full h-full relative preserve-3d flex items-center justify-center">
            
            {/* Background Elements */}
            <div className="absolute inset-0 cyber-grid-bg opacity-20 rounded-xl"></div>
            <div className="absolute inset-0 bg-cyber-radial rounded-xl"></div>
            
            {/* Credit Cards */}
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className={`card-3d absolute w-[320px] h-[200px] rounded-xl glassmorphism backface-hidden overflow-hidden shadow-lg
                          bg-gradient-to-br ${card.color} flex flex-col justify-between p-6`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center',
                }}
                data-depth={card.depth}
                initial={{ opacity: 0, y: 100, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: card.delay,
                  duration: 0.8, 
                  type: 'spring',
                  stiffness: 100
                }}
              >
                {/* Card Content */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-medium text-lg">{card.name}</h3>
                    <p className="text-white/80 text-xs">{card.expires}</p>
                  </div>
                  <Fingerprint className="text-white/80 h-8 w-8" />
                </div>
                
                <div>
                  <div className="flex gap-3 items-center mb-2">
                    <div className="w-8 h-5 bg-white/20 rounded flex items-center justify-center">
                      <Wifi className="h-3 w-3 text-white" />
                    </div>
                    <div className="w-8 h-5 bg-white/20 rounded flex items-center justify-center">
                      <ShieldCheck className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <p className="text-white font-medium tracking-wider">{card.number}</p>
                </div>
                
                {/* Chip and Reflections */}
                <div className="absolute right-6 bottom-6 w-10 h-10 flex items-center justify-center">
                  <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/20 rounded"></div>
                  </div>
                </div>
                
                <div className="absolute left-6 top-14 w-12 h-8 bg-white/10 backdrop-blur-sm rounded">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/20 rounded"></div>
                </div>
                
                {/* Card Reflection/Glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 pointer-events-none"></div>
              </motion.div>
            ))}
            
            {/* Animated Particles/Effects */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-cyber-cyan/30 backdrop-blur-sm"
                style={{
                  width: Math.random() * 10 + 5 + 'px',
                  height: Math.random() * 10 + 5 + 'px',
                }}
                animate={{
                  x: [
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                  ],
                  y: [
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                    Math.random() * 300 - 150,
                  ],
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-white/60 max-w-lg mx-auto">
            Biometric authentication works with all major banks and financial institutions.
            Your data stays secure with our advanced encryption.
          </p>
          <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-md px-6 py-3 font-medium transition-all mt-8 border border-white/10">
            View All Supported Banks
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FloatingCards;
