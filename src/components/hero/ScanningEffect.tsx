
import { useState, useEffect, useRef } from 'react';

interface ScanningEffectProps {
  isScanning: boolean;
}

const ScanningEffect = ({ isScanning }: ScanningEffectProps) => {
  if (!isScanning) return null;
  
  return (
    <div className="absolute inset-0 overflow-hidden rounded-full">
      {/* Scanning Line */}
      <div 
        className="absolute top-0 left-0 w-full h-1 bg-cyber-cyan opacity-80 animate-scanning" 
        style={{ boxShadow: '0 0 10px 5px rgba(65, 234, 212, 0.3)' }}
      ></div>
      
      {/* Scan Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 rounded-full bg-cyber-cyan"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `pulse-glow ${Math.random() * 2 + 1}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScanningEffect;
