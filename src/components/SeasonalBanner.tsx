import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Moon } from 'lucide-react';

export const SeasonalBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-primary-light text-white relative z-[60]"
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-3 text-sm md:text-base">
          <Moon size={16} className="text-accent fill-accent" />
          <p>
            <span className="font-bold text-accent">Ramadhan Special:</span> Open for Takeaway <span className="font-bold">4:00 PM - 7:30 PM</span>
          </p>
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close banner"
          >
            <X size={16} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
