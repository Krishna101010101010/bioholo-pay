
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, CircleDollarSign, ArrowRight } from 'lucide-react';

const LiveTransaction = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      merchant: 'CyberCafe',
      amount: 15.99,
      status: 'completed',
      time: '2 mins ago',
      icon: '☕',
    },
    {
      id: '2',
      merchant: 'DigiMart',
      amount: 68.50,
      status: 'completed',
      time: '1 hour ago',
      icon: '🛒',
    },
    {
      id: '3',
      merchant: 'TechnoStore',
      amount: 129.95,
      status: 'pending',
      time: 'Just now',
      icon: '💻',
    },
  ]);
  
  // Simulate new transactions coming in
  useEffect(() => {
    const merchants = ['NeoFoods', 'VirtualSpace', 'FutureHealth', 'TechnoGadgets', 'MetaTransit'];
    const icons = ['🍔', '🎮', '💊', '📱', '🚗'];
    
    const interval = setInterval(() => {
      const newTransaction: Transaction = {
        id: Math.random().toString(36).substring(2, 9),
        merchant: merchants[Math.floor(Math.random() * merchants.length)],
        amount: Number((Math.random() * 100 + 5).toFixed(2)),
        status: Math.random() > 0.2 ? 'completed' : 'pending',
        time: 'Just now',
        icon: icons[Math.floor(Math.random() * icons.length)],
      };
      
      setTransactions(prev => [newTransaction, ...prev.slice(0, 2)]);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Transaction Verification</h2>
          <p className="text-white/60 max-w-lg mx-auto">
            Watch real-time biometric payment processing with military-grade security.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="relative cyber-panel p-8 overflow-hidden bg-opacity-50 min-h-[400px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Grid Background */}
            <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
            
            {/* Top Status Bar */}
            <div className="relative z-10 flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-cyber-cyan animate-pulse mr-2"></div>
                <span className="text-cyber-cyan text-sm font-medium">BIOMETRIC TRANSACTION MONITOR</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-white/60 mr-2" />
                  <span className="text-white/60 text-sm">Live updating</span>
                </div>
                <button className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded px-2 py-1 text-white/80">
                  Filter
                </button>
              </div>
            </div>
            
            {/* Transaction List */}
            <div className="relative z-10">
              {transactions.map((transaction, index) => (
                <motion.div
                  key={transaction.id}
                  className="mb-4 glassmorphism p-4 transition-all hover:shadow-neon-cyan"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-md bg-cyber-dark flex items-center justify-center text-lg mr-4">
                        {transaction.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{transaction.merchant}</h3>
                        <p className="text-xs text-white/60">{transaction.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <span className="font-medium">${transaction.amount.toFixed(2)}</span>
                      <div className="flex items-center mt-1">
                        {transaction.status === 'completed' ? (
                          <>
                            <CheckCircle2 className="h-3 w-3 text-cyber-cyan mr-1" />
                            <span className="text-xs text-cyber-cyan">Verified</span>
                          </>
                        ) : (
                          <>
                            <div className="h-3 w-3 rounded-full border border-white/60 mr-1 flex items-center justify-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse"></div>
                            </div>
                            <span className="text-xs text-white/60">Processing</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress bar for pending transactions */}
                  {transaction.status === 'pending' && (
                    <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-cyber-cyan"
                        initial={{ width: "10%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2 }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Bottom Stats */}
            <div className="relative z-10 mt-8 flex flex-wrap justify-between border-t border-white/10 pt-6">
              <div className="glassmorphism p-4 w-full md:w-[48%] mb-4 md:mb-0">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-cyber-dark flex items-center justify-center mr-4">
                    <CircleDollarSign className="h-5 w-5 text-cyber-cyan" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Total Daily Volume</p>
                    <p className="text-xl font-medium">$12,459.20</p>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism p-4 w-full md:w-[48%]">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-cyber-dark flex items-center justify-center mr-4">
                    <CheckCircle2 className="h-5 w-5 text-cyber-cyan" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Verification Success Rate</p>
                    <p className="text-xl font-medium">99.8%</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* See All Transactions Link */}
            <div className="relative z-10 mt-8 text-center">
              <a href="#" className="text-cyber-cyan hover:text-cyber-cyan/80 inline-flex items-center">
                See full transaction history
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
            
            {/* Scanlines Effect */}
            <div className="absolute inset-0 pointer-events-none z-20">
              <div className="h-full w-full opacity-5" style={{ 
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.5), rgba(255,255,255,0.5) 1px, transparent 1px, transparent 2px)'
              }}></div>
            </div>
            
            {/* Random Technical Elements */}
            <div className="absolute top-2 right-2 z-20 flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-cyber-cyan animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
            
            <div className="absolute bottom-2 left-2 z-20 text-[8px] font-mono text-white/40">
              SYS:OK • NET:ACTIVE • SEC:MAXIMUM
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

interface Transaction {
  id: string;
  merchant: string;
  amount: number;
  status: 'completed' | 'pending';
  time: string;
  icon: string;
}

export default LiveTransaction;
