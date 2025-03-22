
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroContent from './HeroContent';
import ScanningHand from './ScanningHand';
import { Hover3DCard } from '../ui/hover-3d-card';

const Hero = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
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
  
  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({
        x: (x / rect.width) * 2 - 1,
        y: (y / rect.height) * 2 - 1
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Generate random floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 1,
    opacity: Math.random() * 0.5 + 0.2,
    speed: Math.random() * 50 + 30
  }));
  
  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center pt-16 pb-20 px-4 overflow-hidden"
    >
      {/* Dynamically moving background with mouse parallax */}
      <div
        className="absolute inset-0 cyber-grid-bg opacity-30"
        style={{
          transform: `translateX(${mousePosition.x * -15}px) translateY(${mousePosition.y * -15}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />
      
      <div
        className="absolute inset-0 bg-cyber-radial"
        style={{
          backgroundPosition: `${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%`,
          transition: 'background-position 0.2s ease-out'
        }}
      />
      
      {/* Floating particles with parallax effect */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyber-cyan/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity
          }}
          animate={{
            x: [
              mousePosition.x * -(particle.size * 2),
              mousePosition.x * -(particle.size * 2 + 10),
              mousePosition.x * -(particle.size * 2),
            ],
            y: [
              mousePosition.y * -(particle.size * 2),
              mousePosition.y * -(particle.size * 2 + 10),
              mousePosition.y * -(particle.size * 2),
            ],
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity + 0.2, particle.opacity]
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Digital scan lines effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="absolute w-full h-px bg-cyber-cyan/10"
            style={{
              top: `${(index / 20) * 100}%`,
              opacity: index % 3 === 0 ? 0.2 : 0.05,
              animation: `scanning ${5 + index % 5}s linear infinite`
            }}
          />
        ))}
      </div>
      
      {/* Content Wrapper */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10">
        {/* Left Column - Text Content */}
        <Hover3DCard 
          className="flex-1" 
          intensity={3} 
          border={false}
        >
          <HeroContent />
        </Hover3DCard>
        
        {/* Right Column - 3D Hand Model */}
        <Hover3DCard 
          className="flex-1" 
          intensity={3}
          border={false}
        >
          <ScanningHand isScanning={isScanning} />
        </Hover3DCard>
      </div>
    </div>
  );
};

export default Hero;
