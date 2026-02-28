"use client";"use client";
import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      
      {/* زرار الواتساب الأخضر */}
      <a 
        href="https://wa.me/966544569332" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* زرار الاتصال الأزرق */}
      <a 
        href="tel:0544569332" 
        className="bg-[#007bff] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <FaPhoneAlt size={24} />
      </a>
      
    </div>
  );
};

export default FloatingActions;