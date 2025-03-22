
import { useState } from "react";
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
  MoreHorizontal
} from "lucide-react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import TransactionTable from "@/components/dashboard/TransactionTable";
import TransactionStats from "@/components/dashboard/TransactionStats";
import BiometricModal from "@/components/dashboard/BiometricModal";

const Dashboard = () => {
  const [showBiometricModal, setShowBiometricModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-6 max-w-7xl"
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Merchant Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <User className="mr-2 h-4 w-4" />
              Account
            </Button>
            <Button variant="default" size="sm">
              <Wallet className="mr-2 h-4 w-4" />
              Balance: $4,250.65
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <TransactionStats />
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
          <div className="flex items-center gap-2">
            <div className="relative w-60">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search transactions..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="incoming">Incoming</TabsTrigger>
            <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
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
