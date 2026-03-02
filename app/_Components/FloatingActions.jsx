// "use client";"use client";
// import React from 'react';
// import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

// const FloatingActions = () => {
//   return (
//     <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      
//       {/* زرار الواتساب الأخضر */}
//       <a 
//         href="https://wa.me/966544569332" 
//         target="_blank" 
//         rel="noopener noreferrer"
//         className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
//       >
//         <FaWhatsapp size={28} />
//       </a>

//       {/* زرار الاتصال الأزرق */}
//       <a 
//         href="tel:0544569332" 
//         className="bg-[#007bff] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
//       >
//         <FaPhoneAlt size={24} />
//       </a>
      
//     </div>
//   );
// };

// export default FloatingActions;
"use client";
import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 left-6 z-[999] flex flex-col gap-3 md:gap-4">
      
      {/* 1. زرار الواتساب - أنيمشن نبض خفيف */}
      <motion.a 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/966544569332" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.3)] flex items-center justify-center relative group"
      >
        <FaWhatsapp size={26} className="md:w-[28px] md:h-[28px]" />
        
        {/* تأثير النبض لجذب الانتباه بشكل سمبل */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
      </motion.a>

      {/* 2. زرار الاتصال - تصميم متناسق */}
      <motion.a 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        href="tel:0544569332" 
        className="bg-[#007bff] text-white p-3.5 md:p-4 rounded-full shadow-[0_10px_25px_rgba(0,123,255,0.3)] flex items-center justify-center group"
      >
        <FaPhoneAlt size={22} className="md:w-[24px] md:h-[24px]" />
      </motion.a>
      
    </div>
  );
};

export default FloatingActions;