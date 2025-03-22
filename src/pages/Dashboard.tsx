
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Wallet, 
  CreditCard, 
  ReceiptText, 
  ArrowUpRight, 
  ArrowDownLeft, 
  User, 
  PieChart,
  Search,
  SlidersHorizontal,
  MoreHorizontal,
  Home
} from "lucide-react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Hover3DCard } from "@/components/ui/hover-3d-card";
import TransactionTable from "@/components/dashboard/TransactionTable";
import TransactionStats from "@/components/dashboard/TransactionStats";
import BiometricModal from "@/components/dashboard/BiometricModal";

const Dashboard = () => {
  const [showBiometricModal, setShowBiometricModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dashboardRef.current) return;
      
      const rect = dashboardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({
        x: (x / rect.width) * 2 - 1,
        y: (y / rect.height) * 2 - 1
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCompleteTransaction = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setShowBiometricModal(true);
  };

  const handleBiometricSuccess = () => {
    // Here you would typically update the transaction status via API
    setShowBiometricModal(false);
    // Show success toast or notification
  };

  return (
    <motion.div 
      ref={dashboardRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-10 px-4 max-w-7xl min-h-screen"
    >
      {/* Background Grid Effect */}
      <div 
        className="fixed inset-0 cyber-grid-bg opacity-10 z-0"
        style={{
          transform: `translateX(${mousePosition.x * -10}px) translateY(${mousePosition.y * -10}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      <div className="relative z-10 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1 animated-gradient-text">Merchant Dashboard</h1>
            <p className="text-white/60">Manage your transactions and account settings</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/">
              <Button variant="outline" size="sm" className="hover-glow">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Hover3DCard border highlight intensity={5} className="relative">
              <Button variant="outline" size="sm" className="glassmorphism border-cyber-cyan/20 hover:border-cyber-cyan/50">
                <User className="mr-2 h-4 w-4" />
                Account
              </Button>
            </Hover3DCard>
            
            <Hover3DCard border highlight intensity={5} className="relative">
              <Button variant="default" size="sm" className="bg-cyber-cyan text-cyber-black relative">
                <Wallet className="mr-2 h-4 w-4" />
                Balance: $4,250.65
                <motion.div 
                  className="absolute inset-0 bg-white rounded-md opacity-0"
                  animate={{ 
                    opacity: [0, 0.1, 0],
                    scale: [1, 1.05, 1] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              </Button>
            </Hover3DCard>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Hover3DCard className="w-full" intensity={8} border highlight>
            <TransactionStats />
          </Hover3DCard>
        </div>

        <Hover3DCard className="w-full" intensity={3} border>
          <div className="p-5 glassmorphism">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Transactions</h2>
              <div className="flex items-center gap-2">
                <div className="relative w-60">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search transactions..." className="pl-8 glassmorphism border-cyber-cyan/20 focus:border-cyber-cyan/50" />
                </div>
                <Button variant="outline" size="icon" className="glassmorphism border-cyber-cyan/20 hover:border-cyber-cyan/50">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="bg-cyber-dark/50 border border-cyber-cyan/20">
                <TabsTrigger value="all" className="data-[state=active]:bg-cyber-cyan/10 data-[state=active]:text-cyber-cyan">All</TabsTrigger>
                <TabsTrigger value="incoming" className="data-[state=active]:bg-cyber-cyan/10 data-[state=active]:text-cyber-cyan">Incoming</TabsTrigger>
                <TabsTrigger value="outgoing" className="data-[state=active]:bg-cyber-cyan/10 data-[state=active]:text-cyber-cyan">Outgoing</TabsTrigger>
                <TabsTrigger value="pending" className="data-[state=active]:bg-cyber-cyan/10 data-[state=active]:text-cyber-cyan">Pending</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <TransactionTable onCompleteTransaction={handleCompleteTransaction} />
              </TabsContent>
              <TabsContent value="incoming">
                <TransactionTable 
                  onCompleteTransaction={handleCompleteTransaction}
                  filter="incoming" 
                />
              </TabsContent>
              <TabsContent value="outgoing">
                <TransactionTable 
                  onCompleteTransaction={handleCompleteTransaction}
                  filter="outgoing" 
                />
              </TabsContent>
              <TabsContent value="pending">
                <TransactionTable 
                  onCompleteTransaction={handleCompleteTransaction}
                  filter="pending" 
                />
              </TabsContent>
            </Tabs>
          </div>
        </Hover3DCard>
      </div>
      
      {showBiometricModal && (
        <BiometricModal 
          transaction={selectedTransaction!}
          onClose={() => setShowBiometricModal(false)}
          onSuccess={handleBiometricSuccess}
        />
      )}
    </motion.div>
  );
};

export default Dashboard;
