 "use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const videos = [
    "/videos/video1.mp4", 
    "/videos/video 2.mp4", 
    "/videos/video 3.mp4",
    "/videos/video4.mp4",
    "/videos/video5.mp4"
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
    setIsVideoLoaded(false);
  };

  if (!isClient) return null;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black" dir="rtl">
      
      {/* 1. نظام الفيديوهات المتجاوب */}
      <div className="absolute inset-0 z-0">
        <video
          key={videos[currentVideo]} 
          autoPlay 
          muted 
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          onEnded={handleVideoEnd}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>
        
        {/* تدرج لوني فخم عشان النص يظهر بوضوح */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10"></div>
      </div>

      {/* 2. المحتوى النصي المتجاوب */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        
        {/* العنوان: صغرناه للموبايل وكبرناه للديسكتوب */}
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B]">
            الفهد للديكور
          </span>
        </motion.h1>
        
        {/* الوصف: مسافات وخطوط مريحة للعين */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="text-gray-300 text-base sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          نصنع من مساحاتكم لوحات فنية تجسد الفخامة. متخصصون في أرقى ديكورات بديل الخشب، الباركيه، والشيبورد المودرن <span className="text-[#D4AF37] font-bold">بالمدينة المنورة</span>.
        </motion.p>
        
        {/* الأزرار: ترتيب عمودي في الموبايل وأفقي في الديسكتوب */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
        >
          <a 
            href="#works"
            className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black px-10 py-4 rounded-full font-black text-lg md:text-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all active:scale-95"
          >
            اكتشف أعمالنا
          </a>
        
          <a 
            href="https://wa.me/966544569332?text=أهلاً مؤسسة الفهد، حابب أطلب استشارة مجانية بخصوص ديكور منزلي"
            target="_blank"
            className="w-full sm:w-auto border-2 border-[#D4AF37] text-[#D4AF37] backdrop-blur-md px-10 py-4 rounded-full font-black text-lg md:text-xl hover:bg-[#D4AF37] hover:text-black transition-all active:scale-95"
          >
            استشارة مجانية
          </a>
        </motion.div>
      </div>
      
      {/* 3. لمسة سمبل: سهم ينزل لتحت يشجع على السكرول */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-[#D4AF37]/50 hidden md:block"
      >
        <div className="w-1 h-12 border-l border-[#D4AF37]/30"></div>
      </motion.div>

    </section>
  );
}
 //  "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Hero() {
//   const [isClient, setIsClient] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState(0);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);

//   const videos = [
//     "/videos/video1.mp4", 
//     "/videos/video 2.mp4", 
//     "/videos/video 3.mp4",
//     "/videos/video4.mp4",
//     "/videos/video5.mp4"
//   ];

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

  
//   const handleVideoEnd = () => {
//     setCurrentVideo((prev) => (prev + 1) % videos.length);
//     setIsVideoLoaded(false);
//   };

//   if (!isClient) return null;

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
    
//       <div className="absolute inset-0 z-0">
//         <video
//           key={videos[currentVideo]} 
//           autoPlay 
//           muted 
//           playsInline
//           onLoadedData={() => setIsVideoLoaded(true)}
//           onEnded={handleVideoEnd}
//           className={`w-full h-full object-cover transition-opacity duration-1000 ${
//             isVideoLoaded ? 'opacity-50' : 'opacity-0'
//           }`}
//         >
//           <source src={videos[currentVideo]} type="video/mp4" />
//         </video>
        
    
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-10"></div>
//       </div>

      
//       <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-10">
//         <motion.h1 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl md:text-8xl font-black mb-6 leading-[1.2]"
//         >
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B]">
//             الفهد للديكور
//           </span>
//         </motion.h1>
        
//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="text-gray-200 text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed"
//         >
//           نصنع من مساحاتكم لوحات فنية تجسد الفخامة. متخصصون في أرقى ديكورات بديل الخشب، الباركيه، والشيبورد المودرن <span className="text-[#D4AF37] font-bold">بالمدينة المنورة</span>.
//         </motion.p>
        
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.8 }}
//           className="flex flex-wrap gap-6 justify-center"
//         >
//           <a 
//               href="#works"
//             className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black px-10 py-4 rounded-full font-black text-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all active:scale-95"
//           >
//             اكتشف أعمالنا
//           </a>
        
//           <a 
//             href="https://wa.me/966544569332?text=أهلاً مؤسسة الفهد، حابب أطلب استشارة مجانية بخصوص ديكور منزلي"
//             target="_blank"
//             className="border-2 border-[#D4AF37] text-[#D4AF37] backdrop-blur-md px-10 py-4 rounded-full font-black text-xl hover:bg-[#D4AF37] hover:text-black transition-all active:scale-95"
//           >
//             استشارة مجانية
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );

// }