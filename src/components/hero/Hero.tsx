
import { useState, useEffect, useRef } from 'react';
import HeroContent from './HeroContent';
import ScanningHand from './ScanningHand';

const Hero = () => {
  const [isScanning, setIsScanning] = useState(false);
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
  
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center pt-16 pb-20 px-4 overflow-hidden">
      {/* Hero Background Elements */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
      <div className="absolute inset-0 bg-cyber-radial"></div>
      
      {/* Content Wrapper */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10">
        {/* Left Column - Text Content */}
        <HeroContent />
        
        {/* Right Column - 3D Hand Model */}
        <ScanningHand isScanning={isScanning} />
      </div>
    </div>
  );
};

export default Hero;
