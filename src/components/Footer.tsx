
import { Link } from 'react-router-dom';
import { Fingerprint, Github, Twitter, Linkedin, Shield, Lock, CreditCard, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-10"></div>
      
      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-cyber-radial opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-full bg-cyber-cyan bg-opacity-20"></div>
                <Fingerprint className="h-8 w-8 text-cyber-cyan absolute inset-0" strokeWidth={1.5} />
              </div>
              <span className="text-xl font-bold text-white">BioHolo<span className="text-cyber-cyan">Pay</span></span>
            </Link>
            
            <p className="text-white/60 mb-6 max-w-md">
              Next-generation biometric payment system using advanced fingerprint and palm vein authentication technology for secure, instant transactions.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-cyber-cyan transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-cyber-cyan transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-cyber-cyan transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Careers', 'Blog', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-cyber-cyan transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-medium text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'Help Center', 'FAQ', 'System Status'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-cyber-cyan transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-medium text-white mb-4">Stay Updated</h3>
            <p className="text-white/60 mb-4">Subscribe to our newsletter</p>
            
            <form className="mb-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="w-full bg-white/5 border border-white/20 rounded-md py-2 pl-3 pr-10 text-white/80 focus:outline-none focus:ring-1 focus:ring-cyber-cyan focus:border-cyber-cyan"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-cyber-cyan">
                  <Send size={16} />
                </button>
              </div>
            </form>
            
            <p className="text-white/40 text-xs">
              Your information is secure. We don't share your data with third parties.
            </p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2023 BioHoloPay. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-white/60 hover:text-cyber-cyan text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-cyber-cyan text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-cyber-cyan text-sm transition-colors">Cookies</a>
          </div>
        </div>
        
        {/* Security Badges */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-cyber-cyan" />
            <span className="text-white/60 text-xs">ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-cyber-cyan" />
            <span className="text-white/60 text-xs">Bank-Level Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-cyber-cyan" />
            <span className="text-white/60 text-xs">PCI DSS Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
