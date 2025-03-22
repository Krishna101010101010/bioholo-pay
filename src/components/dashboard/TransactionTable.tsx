
import { useState } from "react";
import { ArrowUpRight, ArrowDownLeft, MoreHorizontal, Check, Clock, X } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { mockTransactions } from "@/lib/mock-data";

interface TransactionTableProps {
  filter?: "incoming" | "outgoing" | "pending";
  onCompleteTransaction: (transaction: Transaction) => void;
}

const TransactionTable = ({ filter, onCompleteTransaction }: TransactionTableProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);
  
  // Filter transactions based on the selected tab
  const filteredTransactions = filter 
    ? transactions.filter(t => {
        if (filter === "incoming") return t.type === "incoming";
        if (filter === "outgoing") return t.type === "outgoing";
        if (filter === "pending") return t.status === "pending";
        return true;
      })
    : transactions;

  const getStatusStyle = (status: string) => {
    switch(status) {
      case "completed":
        return "bg-green-500/10 text-green-500";
      case "pending":
        return "bg-yellow-500/10 text-yellow-500";
      case "failed":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "completed":
        return <Check className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "failed":
        return <X className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-md border cyber-panel">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTransactions.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                No transactions found
              </TableCell>
            </TableRow>
          ) : (
            filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-mono">{transaction.id.slice(0, 8)}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    {transaction.customer.slice(0, 1)}
                  </div>
                  <div>{transaction.customer}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {transaction.type === "incoming" ? (
                      <>
                        <ArrowDownLeft className="h-4 w-4 text-green-500" />
                        <span>Incoming</span>
                      </>
                    ) : (
                      <>
                        <ArrowUpRight className="h-4 w-4 text-blue-500" />
                        <span>Outgoing</span>
                      </>
                    )}
                  </div>
                </TableCell>
                <TableCell className={transaction.type === "incoming" ? "text-green-500" : ""}>
                  ${transaction.amount.toFixed(2)}
                </TableCell>
                <TableCell>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full w-fit ${getStatusStyle(transaction.status)}`}>
                    {getStatusIcon(transaction.status)}
                    <span className="capitalize">{transaction.status}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {transaction.status === "pending" ? (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onCompleteTransaction(transaction)}
                    >
                      Complete
                    </Button>
                  ) : (
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionTable;
