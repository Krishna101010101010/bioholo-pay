
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Fingerprint, Hand, CreditCard, Bell, Menu, X, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8',
        isScrolled ? 'py-3 glassmorphism bg-opacity-80' : 'py-6'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 md:h-10 md:w-10">
            <div className="absolute inset-0 rounded-full bg-cyber-cyan bg-opacity-20 animate-pulse-glow"></div>
            <Fingerprint className="h-8 w-8 md:h-10 md:w-10 text-cyber-cyan absolute inset-0" strokeWidth={1.5} />
          </div>
          <span className="text-xl md:text-2xl font-bold animated-gradient-text">BioHolo<span className="text-cyber-cyan">Pay</span></span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
          <div className="flex items-center gap-3 ml-4">
            <button className="glassmorphism py-2 px-4 transition-all hover:scale-105 text-sm font-medium text-cyber-cyan border-cyber-cyan border-opacity-50">
              Sign In
            </button>
            <button className="bg-cyber-cyan text-cyber-black font-medium py-2 px-4 rounded-md transition-all hover:shadow-neon-cyan hover:scale-105 text-sm">
              Register Now
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cyber-cyan hover:text-cyber-cyan/80 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-cyber-black/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
          "md:hidden flex flex-col pt-20 px-8"
        )}
      >
        <nav className="flex flex-col gap-6 items-center">
          <NavLinks mobile />
          <div className="flex flex-col gap-4 w-full mt-6">
            <button className="glassmorphism py-3 px-4 transition-all active:scale-95 font-medium text-cyber-cyan border-cyber-cyan border-opacity-50 w-full">
              Sign In
            </button>
            <button className="bg-cyber-cyan text-cyber-black font-medium py-3 px-4 rounded-md transition-all active:scale-95 w-full">
              Register Now
            </button>
          </div>
        </nav>
      </div>
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
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "flex items-center gap-2 relative transition-all",
              mobile ? "text-lg py-3 w-full justify-center" : "",
              isActive 
                ? "text-cyber-cyan font-medium" 
                : "text-white/70 hover:text-white"
            )}
          >
            {mobile && <link.icon size={18} />}
            <span>{link.name}</span>
            {isActive && (
              <span 
                className={cn(
                  "absolute bg-cyber-cyan",
                  mobile 
                    ? "-bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-12"
                    : "-bottom-1 left-0 h-0.5 w-full"
                )}
              />
            )}
          </Link>
        );
      })}
    </>
  );
};

export default Navbar;
