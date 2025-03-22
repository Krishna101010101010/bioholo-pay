
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HoloCursorProps {
  size?: number;
  color?: string;
  trailLength?: number;
  trailOpacity?: number;
}

const HoloCursor = ({ 
  size = 20,
  color = '#41EAD4',
  trailLength = 5,
  trailOpacity = 0.3
}: HoloCursorProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePos(newPos);
      
      setTrail(prevTrail => {
        const newTrail = [...prevTrail, { ...newPos, id: Date.now() }];
        if (newTrail.length > trailLength) {
          return newTrail.slice(newTrail.length - trailLength);
        }
        return newTrail;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [trailLength]);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Cursor Trail */}
      {trail.map((point, i) => {
        const opacity = trailOpacity * (i / trail.length);
        const scale = 1 - (i / trail.length) * 0.5;
        
        return (
          <motion.div
            key={point.id}
            className="absolute rounded-full backdrop-blur-sm"
            style={{
              x: point.x - size / 2,
              y: point.y - size / 2,
              width: size,
              height: size,
              backgroundColor: `${color}10`,
              border: `1px solid ${color}40`,
              opacity,
              scale,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity, scale }}
            transition={{ duration: 0.2 }}
          />
        );
      })}
      
      {/* Main Cursor */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: mousePos.x - size / 2,
          y: mousePos.y - size / 2,
          width: size,
          height: size,
        }}
        animate={{
          x: mousePos.x - size / 2,
          y: mousePos.y - size / 2,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        <motion.div 
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: `${color}20`, border: `1px solid ${color}` }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute rounded-full"
          style={{
            width: size * 0.3,
            height: size * 0.3,
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            backgroundColor: color,
          }}
        />
      </motion.div>
    </div>
  );
};

export default HoloCursor;
