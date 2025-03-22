
import { Wallet, ArrowUpRight, ArrowDownLeft, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TransactionStats = () => {
  return (
    <>
      <Card className="cyber-panel">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
          <Wallet className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$4,250.65</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      
      <Card className="cyber-panel">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Income</CardTitle>
          <ArrowDownLeft className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$6,420.80</div>
          <p className="text-xs text-muted-foreground">
            +8.2% from last month
          </p>
        </CardContent>
      </Card>
      
      <Card className="cyber-panel">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Expenses</CardTitle>
          <ArrowUpRight className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$2,170.15</div>
          <p className="text-xs text-muted-foreground">
            -4.5% from last month
          </p>
        </CardContent>
      </Card>
      
      <Card className="cyber-panel">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Pending</CardTitle>
          <Clock className="h-4 w-4 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$890.40</div>
          <p className="text-xs text-muted-foreground">
            8 transactions waiting
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default TransactionStats;
