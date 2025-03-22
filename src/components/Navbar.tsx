
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fingerprint, Hand, CreditCard, Bell, Menu, X, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!navRef.current) return;
      const rect = navRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <header 
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8',
        isScrolled ? 'py-3 glassmorphism bg-opacity-80' : 'py-6'
      )}
      style={{
        background: isScrolled ? 
          `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(65, 234, 212, 0.1), transparent 250px)` : 
          'transparent'
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8 md:h-10 md:w-10 perspective">
            <motion.div 
              className="preserve-3d"
              animate={{ 
                rotateY: [0, 15, 0, -15, 0], 
                rotateX: [0, 10, 0, -10, 0] 
              }}
              transition={{ 
                duration: 8, 
                ease: "easeInOut", 
                repeat: Infinity 
              }}
            >
              <div className="absolute inset-0 rounded-full bg-cyber-cyan bg-opacity-20 animate-pulse-glow"></div>
              <Fingerprint className="h-8 w-8 md:h-10 md:w-10 text-cyber-cyan absolute inset-0" strokeWidth={1.5} />
            </motion.div>
          </div>
          <span className="text-xl md:text-2xl font-bold animated-gradient-text">
            BioHolo<span className="text-cyber-cyan">Pay</span>
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
          <div className="flex items-center gap-3 ml-4">
            <motion.button 
              className="glassmorphism py-2 px-4 transition-all text-sm font-medium text-cyber-cyan border-cyber-cyan border-opacity-50 overflow-hidden relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Sign In</span>
              <motion.div 
                className="absolute inset-0 bg-cyber-cyan opacity-0 group-hover:opacity-10 transition-opacity"
                initial={false}
                style={{
                  background: `radial-gradient(circle at center, rgba(65, 234, 212, 0.8) 0%, transparent 70%)`,
                }}
              />
            </motion.button>
            <motion.button 
              className="bg-cyber-cyan text-cyber-black font-medium py-2 px-4 rounded-md transition-all relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(65, 234, 212, 0.7)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Register Now</span>
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20"
                initial={false}
                style={{
                  background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, transparent 70%)`,
                }}
              />
            </motion.button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-cyber-cyan hover:text-cyber-cyan/80 transition"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className={cn(
          "fixed inset-0 bg-cyber-black/95 backdrop-blur-xl z-40 flex flex-col pt-20 px-8",
          "md:hidden"
        )}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <nav className="flex flex-col gap-6 items-center">
          <NavLinks mobile />
          <div className="flex flex-col gap-4 w-full mt-6">
            <motion.button 
              className="glassmorphism py-3 px-4 transition-all font-medium text-cyber-cyan border-cyber-cyan border-opacity-50 w-full"
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
            <motion.button 
              className="bg-cyber-cyan text-cyber-black font-medium py-3 px-4 rounded-md transition-all w-full"
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>
          </div>
        </nav>
      </motion.div>
    </header>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const location = useLocation();
  const pathname = location.pathname;
  
  const links = [
    { name: 'Home', path: '/', icon: Fingerprint },
    { name: 'About', path: '/about', icon: Bell },
    { name: 'How It Works', path: '/how-it-works', icon: Hand },
    { name: 'Security', path: '/security', icon: CreditCard },
    { name: 'Contact', path: '/contact', icon: Bell },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  ];
  
  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.path;
        return (
          <motion.div
            key={link.path}
            whileHover={{ scale: mobile ? 1 : 1.05 }}
          >
            <Link
              to={link.path}
              className={cn(
                "flex items-center gap-2 relative transition-all group",
                mobile ? "text-lg py-3 w-full justify-center" : "",
                isActive 
                  ? "text-cyber-cyan font-medium" 
                  : "text-white/70 hover:text-white"
              )}
            >
              {mobile && <link.icon size={18} />}
              <span>{link.name}</span>
              {isActive ? (
                <motion.span 
                  className={cn(
                    "absolute bg-cyber-cyan",
                    mobile 
                      ? "-bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-12"
                      : "-bottom-1 left-0 h-0.5 w-full"
                  )}
                  layoutId="navbar-active-indicator"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              ) : (
                <span 
                  className={cn(
                    "absolute bg-cyber-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity",
                    mobile 
                      ? "-bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-12"
                      : "-bottom-1 left-0 h-0.5 w-full"
                  )}
                />
              )}
            </Link>
          </motion.div>
        );
      })}
    </>
  );
};

export default Navbar;
