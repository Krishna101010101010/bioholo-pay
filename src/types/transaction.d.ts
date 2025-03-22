
type TransactionType = "incoming" | "outgoing";
type TransactionStatus = "completed" | "pending" | "failed";

interface Transaction {
  id: string;
  date: string;
  customer: string;
  type: TransactionType;
  amount: number;
  status: TransactionStatus;
}
