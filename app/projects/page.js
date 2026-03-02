// "use client";
// import React from "react";
// import Navbar from "../_Components/Navbar"; 
// import { motion } from "framer-motion";
// import { MapPin, ExternalLink } from "lucide-react";

// const projectsList = [
//   { id: 1, title: "مجلس ملكي - رخام", image: "/img/image6.jpeg", size: "md:col-span-2 md:row-span-2" },
//   { id: 2, title: "باركيه أرضيات ملكي", image: "/img/image42.jpeg", size: "md:col-span-1 md:row-span-1" },
//   { id: 3, title: "دهانات داخلية", image: "/img/image10.jpeg", size: "md:col-span-1 md:row-span-1" },
//   { id: 4, title: "تنسيق إضاءة سقف", image: "/img/image8.jpeg", size: "md:col-span-1 md:row-span-2" },
//   { id: 5, title: "درج مودرن", image: "/img/immmmg.jpeg", size: "md:col-span-1 md:row-span-1" },
//   { id: 7, title: "دهانات ممرات فندقية", image: "/img/image13.jpeg", size: "md:col-span-2 md:row-span-1" },
//   { id: 9, title: "تكسية درج باركيه", image: "/img/imagel.jpeg", size: "md:col-span-1 md:row-span-1" },
// ];

// export default function ProjectsPage() {
//   return (
//     <main className="bg-[#050505] min-h-screen" dir="rtl">
//       <Navbar />
//       <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
//         {/* سكشن العنوان بنفس روح لماذا نحن */}
//         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-24">
//           <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d98c] to-[#AA841D]">مشاريعنا</span>
//           </h1>
//           <div className="flex items-center justify-center gap-4">
//             <div className="w-12 h-[1px] bg-[#D4AF37]/50"></div>
//             <div className="w-2 h-2 rotate-45 border border-[#D4AF37]/40 bg-black"></div>
//             <div className="w-12 h-[1px] bg-[#D4AF37]/50"></div>
//           </div>
//         </motion.div>

//         {/* شبكة المشاريع */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
//           {projectsList.map((item, index) => (
//             <motion.div key={item.id} transition={{ delay: index * 0.1 }} className={`${item.size} group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#111]`}>
//               <img src={item.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80" alt={item.title} />
//               <div className="absolute inset-0 bg-gradient-to-t from-black flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all">
//                 <div className="flex items-center gap-2 text-[#daa700] mb-2"><MapPin size={14} /><span>المدينة المنورة</span></div>
//                 <h3 className="text-white text-2xl font-black">{item.title}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";
import React from "react";
import Navbar from "../_Components/Navbar"; 
import { motion } from "framer-motion";
import { MapPin, Maximize2 } from "lucide-react";

const projectsList = [
  { id: 1, title: "مجلس ملكي - رخام", image: "/img/image6.jpeg", size: "lg:col-span-2 lg:row-span-2 md:col-span-2" },
  { id: 2, title: "باركيه أرضيات ملكي", image: "/img/image42.jpeg", size: "lg:col-span-1 lg:row-span-1 md:col-span-1" },
  { id: 3, title: "دهانات داخلية", image: "/img/image10.jpeg", size: "lg:col-span-1 lg:row-span-1 md:col-span-1" },
  { id: 4, title: "تنسيق إضاءة سقف", image: "/img/image8.jpeg", size: "lg:col-span-1 lg:row-span-2 md:col-span-1" },
  { id: 5, title: "درج مودرن", image: "/img/immmmg.jpeg", size: "lg:col-span-1 lg:row-span-1 md:col-span-1" },
  { id: 7, title: "دهانات ممرات فندقية", image: "/img/image13.jpeg", size: "lg:col-span-2 lg:row-span-1 md:col-span-2" },
  { id: 9, title: "تكسية درج باركيه", image: "/img/imagel.jpeg", size: "lg:col-span-1 lg:row-span-1 md:col-span-1" },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#050505] min-h-screen overflow-x-hidden" dir="rtl">
      <Navbar />
      
      {/* 1. Header Section - Responsive Spacing */}
      <div className="pt-32 md:pt-48 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight italic">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d98c] to-[#AA841D]">
              مشاريعنا
            </span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#D4AF37]/50"></div>
            <div className="w-2.5 h-2.5 rotate-45 border border-[#D4AF37]/40 bg-black"></div>
            <div className="w-12 h-[1px] bg-[#D4AF37]/50"></div>
          </div>
          <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto italic font-light leading-relaxed">
            فخر أعمالنا في تصميم وتنفيذ الديكورات العصرية بالمدينة المنورة.
          </p>
        </motion.div>

        {/* 2. Bento Grid - Responsive System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 auto-rows-[250px] md:auto-rows-[350px]">
          {projectsList.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${item.size} group relative overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-[#111] shadow-2xl transition-all duration-500`}
            >
              {/* Image Overlay - Zoom Effect */}
              <img 
                src={item.image} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-70 group-hover:opacity-90" 
                alt={item.title} 
                loading="lazy"
              />
              
              {/* Floating Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center gap-2 text-[#daa700] mb-3 text-xs md:text-sm font-bold">
                  <MapPin size={14} />
                  <span>المدينة المنورة</span>
                </div>
                <h3 className="text-white text-xl md:text-3xl font-black mb-4">{item.title}</h3>
                <div className="flex items-center gap-3 text-gray-400 text-xs md:text-sm">
                  <Maximize2 size={16} className="text-[#daa700]" />
                  <span>عرض التفاصيل</span>
                </div>
              </div>

              {/* Light border on top */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-[#daa700]/20 rounded-[2rem] md:rounded-[3rem] transition-colors duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}