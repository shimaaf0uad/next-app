"use client";
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // دالة الصعود السلس للأعلى
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ 
            scale: 1.1, 
            backgroundColor: '#D4AF37', 
            color: '#000',
            boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" 
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop} 
     className="fixed bottom-44 left-6 md:left-8 z-[100] bg-black/60 backdrop-blur-xl border border-[#D4AF37]/40 text-[#D4AF37] p-3 md:p-4 rounded-2xl shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 group"
          aria-label="Back to top"
        >
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;