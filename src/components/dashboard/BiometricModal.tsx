
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fingerprint, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScanningHand from "../hero/ScanningHand";

interface BiometricModalProps {
  transaction: Transaction;
  onClose: () => void;
  onSuccess: () => void;
}

const BiometricModal = ({ transaction, onClose, onSuccess }: BiometricModalProps) => {
  const [scanning, setScanning] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  useEffect(() => {
    if (scanning) {
      // Simulate biometric verification
      const timer = setTimeout(() => {
        setScanning(false);
        setSuccess(true);
        // After success animation, call onSuccess
        setTimeout(() => {
          onSuccess();
        }, 1500);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [scanning, onSuccess]);

  const startScan = () => {
    setScanning(true);
  };

  const handleCancel = () => {
    if (scanning) {
      setScanning(false);
      setFailure(true);
      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-md cyber-panel p-6"
        >
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-2">Biometric Authentication</h3>
            <p className="text-muted-foreground mb-6">
              Complete transaction #{transaction.id.slice(0, 8)} for ${transaction.amount.toFixed(2)}
            </p>
            
            <div className="w-full h-64 mb-6 relative">
              {success ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <div className="rounded-full bg-green-500/20 p-4 mb-4">
                      <Check className="h-16 w-16 text-green-500" />
                    </div>
                  </motion.div>
                  <p className="text-green-500 font-semibold text-lg">Authentication Successful</p>
                  <p className="text-muted-foreground">Transaction completed</p>
                </motion.div>
              ) : failure ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <div className="rounded-full bg-red-500/20 p-4 mb-4">
                      <X className="h-16 w-16 text-red-500" />
                    </div>
                  </motion.div>
                  <p className="text-red-500 font-semibold text-lg">Authentication Cancelled</p>
                  <p className="text-muted-foreground">Transaction not completed</p>
                </motion.div>
              ) : (
                <ScanningHand isScanning={scanning} />
              )}
            </div>
            
            {!success && !failure && (
              <div className="flex gap-4 w-full">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 bg-primary text-white hover:bg-primary/90 flex items-center justify-center gap-2"
                  onClick={startScan}
                  disabled={scanning}
                >
                  {scanning ? (
                    "Scanning..."
                  ) : (
                    <>
                      <Fingerprint className="h-4 w-4" />
                      Authenticate
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BiometricModal;
