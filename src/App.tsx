
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import HoloCursor from "./components/3d/HoloCursor";
import HoverCube from "./components/3d/HoverCube";
import Index from "./pages/Index";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Security from "./pages/Security";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/security" element={<Security />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [is3DCursorEnabled, setIs3DCursorEnabled] = useState(true);
  const [showHelp, setShowHelp] = useState(true);
  
  useEffect(() => {
    // Hide help after 5 seconds
    const timer = setTimeout(() => {
      setShowHelp(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Toggle 3D cursor with 'C' key
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'c' || e.key === 'C') {
        setIs3DCursorEnabled(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {/* Holographic Cursor */}
        {is3DCursorEnabled && <HoloCursor />}
        
        {/* Floating 3D Elements */}
        {is3DCursorEnabled && (
          <>
            <HoverCube size={25} offset={{ x: 30, y: 30 }} />
            <HoverCube size={15} delay={0.1} color="#B537F2" offset={{ x: -30, y: -30 }} />
          </>
        )}
        
        {/* Help tooltip */}
        {showHelp && (
          <motion.div 
            className="fixed bottom-5 left-5 bg-cyber-black/80 backdrop-blur-md p-3 rounded-lg border border-cyber-cyan/30 text-sm text-white/80 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            Press 'C' to toggle 3D cursor effects
          </motion.div>
        )}
        
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
