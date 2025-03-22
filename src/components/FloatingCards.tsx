
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Fingerprint, ShieldCheck, Wifi } from 'lucide-react';
import { Hover3DCard } from './ui/hover-3d-card';

const FloatingCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const containerRect = container.getBoundingClientRect();
      
      const mouseX = (e.clientX - containerRect.left) / containerRect.width;
      const mouseY = (e.clientY - containerRect.top) / containerRect.height;
      
      setMousePosition({ x: mouseX, y: mouseY });
    };
    
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
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
          className="relative h-[400px] md:h-[450px] mx-auto perspective w-full max-w-4xl"
        >
          {/* Background Elements - Moving with mouse */}
          <motion.div 
            className="absolute inset-0 cyber-grid-bg opacity-20 rounded-xl"
            animate={{
              backgroundPosition: isHovering ? `${mousePosition.x * 50}px ${mousePosition.y * 50}px` : '0px 0px',
            }}
            transition={{ duration: 0.5 }}
          />
          
          <motion.div 
            className="absolute inset-0 bg-cyber-radial rounded-xl"
            animate={{
              backgroundPosition: isHovering ? `${mousePosition.x * 100 + 50}% ${mousePosition.y * 100 + 50}%` : '50% 50%',
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* 3D Container */}
          <div className="w-full h-full relative preserve-3d flex items-center justify-center">
            {/* Credit Cards */}
            {cards.map((card, index) => {
              // Calculate position offset based on mouse position
              const offsetX = isHovering ? (mousePosition.x - 0.5) * 50 * (1 - index * 0.2) : 0;
              const offsetY = isHovering ? (mousePosition.y - 0.5) * 30 * (1 - index * 0.2) : 0;
              const rotateX = isHovering ? (0.5 - mousePosition.y) * 10 : 0;
              const rotateY = isHovering ? (mousePosition.x - 0.5) * 10 : 0;
              
              return (
                <Hover3DCard 
                  key={index}
                  className="absolute w-[320px] h-[200px]"
                  intensity={0}
                  hover={false}
                  border
                  highlight
                >
                  <motion.div
                    className={`w-full h-full relative rounded-xl glassmorphism backface-hidden overflow-hidden shadow-lg
                              bg-gradient-to-br ${card.color} flex flex-col justify-between p-6`}
                    style={{ 
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'center center',
                    }}
                    initial={{ opacity: 0, y: 100, rotateX: 20 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    animate={{
                      x: offsetX,
                      y: offsetY,
                      rotateX,
                      rotateY,
                      z: 30 * index,
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      delay: card.delay,
                    }}
                  >
                    {/* Card Content */}
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-white font-medium text-lg">{card.name}</h3>
                        <p className="text-white/80 text-xs">{card.expires}</p>
                      </div>
                      <motion.div
                        animate={{
                          rotateY: [0, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Fingerprint className="text-white/80 h-8 w-8" />
                      </motion.div>
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
                      <motion.div 
                        className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded"
                        animate={{
                          boxShadow: ['0 0 5px rgba(255,255,255,0.3)', '0 0 15px rgba(255,255,255,0.5)', '0 0 5px rgba(255,255,255,0.3)']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/20 rounded"></div>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="absolute left-6 top-14 w-12 h-8 bg-white/10 backdrop-blur-sm rounded"
                      animate={{
                        opacity: [0.7, 0.9, 0.7]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/20 rounded"></div>
                    </motion.div>
                    
                    {/* Card Reflection/Glare - moves with mouse */}
                    <motion.div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.2) 0%, transparent 40%)`,
                        opacity: isHovering ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </Hover3DCard>
              );
            })}
            
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
                    Math.random() * 300 - 150 + (mousePosition.x - 0.5) * 50,
                    Math.random() * 300 - 150 + (mousePosition.x - 0.5) * 50,
                    Math.random() * 300 - 150 + (mousePosition.x - 0.5) * 50,
                  ],
                  y: [
                    Math.random() * 300 - 150 + (mousePosition.y - 0.5) * 50,
                    Math.random() * 300 - 150 + (mousePosition.y - 0.5) * 50,
                    Math.random() * 300 - 150 + (mousePosition.y - 0.5) * 50,
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
          <motion.button 
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-md px-6 py-3 font-medium transition-all mt-8 border border-white/10 relative overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(65, 234, 212, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">View All Supported Banks</span>
            <motion.div 
              className="absolute inset-0"
              initial={false}
              whileHover={{
                background: 'radial-gradient(circle at center, rgba(65, 234, 212, 0.15) 0%, transparent 70%)',
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FloatingCards;
