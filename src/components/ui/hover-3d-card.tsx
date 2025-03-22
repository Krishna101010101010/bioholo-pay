
import { useState, useRef, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Hover3DCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  border?: boolean;
  hover?: boolean;
  shadow?: boolean;
  highlight?: boolean;
}

export const Hover3DCard = ({
  children,
  className,
  intensity = 10,
  border = false,
  hover = true,
  shadow = false,
  highlight = false,
}: Hover3DCardProps) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hover) return;
    
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const centerX = width / 2;
    const centerY = height / 2;
    
    const rotateX = (y - centerY) / (height / 2) * intensity;
    const rotateY = (centerX - x) / (width / 2) * intensity;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative perspective",
        border && "rounded-xl",
        shadow && "shadow-lg",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.5,
      }}
    >
      {children}
      
      {border && (
        <motion.div
          className="absolute inset-0 rounded-xl border border-cyber-cyan/30"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(-1px)",
          }}
          animate={{
            opacity: isHovering ? 1 : 0.3,
            boxShadow: isHovering ? "0 0 15px 2px rgba(65, 234, 212, 0.2)" : "none",
          }}
        />
      )}
      
      {highlight && isHovering && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-cyber-cyan"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.02,
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(0px)",
          }}
        />
      )}
    </motion.div>
  );
};
