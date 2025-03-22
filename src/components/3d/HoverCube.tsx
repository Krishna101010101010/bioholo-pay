
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HoverCubeProps {
  size?: number;
  delay?: number;
  color?: string;
  followCursor?: boolean;
  offset?: { x: number; y: number };
}

const HoverCube = ({ 
  size = 40, 
  delay = 0, 
  color = '#41EAD4',
  followCursor = true,
  offset = { x: 0, y: 0 }
}: HoverCubeProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cubeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (followCursor) {
        setMousePos({ 
          x: e.clientX + offset.x, 
          y: e.clientY + offset.y 
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [followCursor, offset]);
  
  return (
    <motion.div
      className="fixed pointer-events-none z-50 perspective"
      style={{ 
        x: mousePos.x - size / 2, 
        y: mousePos.y - size / 2,
        width: size, 
        height: size,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 0.8, 
        scale: 1,
        transition: {
          delay,
          duration: 0.3,
        }
      }}
    >
      <motion.div
        ref={cubeRef}
        className="w-full h-full preserve-3d"
        animate={{ 
          rotateX: [0, 360], 
          rotateY: [0, 360], 
          rotateZ: [0, 360] 
        }}
        transition={{ 
          duration: 10, 
          ease: "linear", 
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        {/* Cube Faces */}
        {[...Array(6)].map((_, index) => {
          const animations = {
            0: { transform: `translateZ(${size / 2}px)` },                        // front
            1: { transform: `rotateY(180deg) translateZ(${size / 2}px)` },        // back
            2: { transform: `rotateY(90deg) translateZ(${size / 2}px)` },         // right
            3: { transform: `rotateY(-90deg) translateZ(${size / 2}px)` },        // left
            4: { transform: `rotateX(90deg) translateZ(${size / 2}px)` },         // top
            5: { transform: `rotateX(-90deg) translateZ(${size / 2}px)` }         // bottom
          };
          
          return (
            <div
              key={index}
              className="absolute inset-0 border border-cyber-cyan bg-cyber-black bg-opacity-30 backdrop-blur-sm"
              style={{
                ...animations[index as keyof typeof animations],
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                boxShadow: `0 0 10px ${color}30`,
              }}
            >
              <div 
                className="absolute inset-0 flex items-center justify-center text-xs font-mono"
                style={{ color }}
              >
                {index + 1}
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default HoverCube;
