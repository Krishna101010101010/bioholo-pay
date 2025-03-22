
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface InfoCardProps {
  position: 'left' | 'right';
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const InfoCard = ({ position, icon, title, description, delay = 0.5 }: InfoCardProps) => {
  const isRight = position === 'right';
  
  return (
    <motion.div
      className={`absolute ${isRight ? '-right-4 top-1/4' : '-left-4 bottom-1/4'} bg-cyber-black/50 backdrop-blur-md border border-cyber-cyan/30 rounded p-3 text-xs max-w-[180px]`}
      initial={{ opacity: 0, x: isRight ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <div className="flex items-start gap-2">
        <div className="h-4 w-4 text-cyber-cyan mt-0.5 flex-shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-white/90 font-medium">{title}</p>
          <p className="text-white/60 text-xxs">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoCard;
