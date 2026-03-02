
// "use client"; 
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { CheckCircle, Paintbrush, Star, Hammer } from "lucide-react";

// export default function About() {
//   const [isClient, setIsClient] = useState(false);
//   useEffect(() => { setIsClient(true); }, []);

//   if (!isClient) return null;

//   return (
//     <section id="about" className="py-20 bg-[#0a0a0a] text-white overflow-hidden border-t border-[#D4AF37]/20 text-right" dir="rtl">
//       <div className="max-w-7xl mx-auto px-6 md:px-10">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
     
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }} 
//             whileInView={{ opacity: 1, x: 0 }} 
//             viewport={{ once: true }}
//             className="w-full lg:w-[40%] relative"
//           >
//              <div className="rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl aspect-square group"> 
//                 <img 
//                   // src="/img/imgeeo.jpg" 
//                   src="/img/image100.jpg"
//                   alt="ديكورات الفهد" 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
//                 />
//              </div>
//           </motion.div>
// <div className="w-full lg:w-[60%] space-y-12 text-right">
//   {/* العنوان الجديد: من نحن */}
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 1 }}
//   >
//     <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
//       <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d98c] to-[#AA841D]">
//         من نحن
//       </span>
//     </h2>

//     {/* */}
//     <div className="flex items-center justify-start gap-4 mb-10">
//       <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
//       <div className="w-2.5 h-2.5 rotate-45 border border-[#D4AF37]/40 bg-black shadow-[0_0_10px_rgba(212,175,55,0.3)]"></div>
//       <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
//     </div>
//   </motion.div>

//   {/* */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//     {[
//       { text: "خبراء في تركيب الباركية والخشب", icon: Hammer },
//       { text: "رواد الدهانات الملكية بالمنطقة", icon: Paintbrush },
//       { text: "نخبة من الفنيين المتخصصين", icon: Star },
//       { text: "نجمع بين الجودة والسعر التنافسي", icon: CheckCircle },
//     ].map((item, index) => {
//       const Icon = item.icon;
//       return (
//         <motion.div 
//           key={index}
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ delay: index * 0.1 }}
//           whileHover={{ 
//             y: -8,
//             boxShadow: "0px 15px 35px rgba(212, 175, 55, 0.1)",
//             borderColor: "rgba(212, 175, 55, 0.4)" 
//           }}
//           className="group flex items-center gap-5 p-5 rounded-[1.8rem] bg-[#0c0c0c] border border-white/5 transition-all duration-500 cursor-pointer"
//         >
//           <motion.div 
//             whileHover={{ rotate: 360, scale: 1.1 }}
//             className="p-4 rounded-2xl bg-[#D4AF37]/5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500"
//           >
//             <Icon size={24} />
//           </motion.div>

//           <span className="text-base md:text-lg font-bold text-gray-400 group-hover:text-white transition-colors duration-300">
//             {item.text}
//           </span>
//         </motion.div>
//       );
//     })}
//   </div>

  
//   {/*Button*/}
//   <div className="pt-6">
//     <motion.a 
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       href="tel:0544569332" 
//       className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#AA841D] text-black font-black py-4 px-14 rounded-2xl shadow-[0_10px_25px_rgba(212,175,55,0.3)] transition-all cursor-pointer"
//     >
//       تواصل معنا
//     </motion.a>
//   </div>
// </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client"; 
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Paintbrush, Star, Hammer, Sparkles } from "lucide-react";

export default function About() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  if (!isClient) return null;

  return (
    <section id="about" className="py-16 md:py-24 bg-[#0a0a0a] text-white overflow-hidden border-t border-[#D4AF37]/10 text-right" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* الترتيب: في الموبايل النص فوق، في الديسكتوب الصورة والوصف جنب بعض */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* الجانب الأيمن: الصورة بتأثير فخم */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="w-full lg:w-[45%] relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl aspect-[4/5] md:aspect-square group"> 
              <img 
                src="/img/image100.jpg"
                alt="ديكورات الفهد" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            {/* بطاقة إحصائية صغيرة لإضافة حركة */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="absolute -bottom-6 -right-6 md:right-0 bg-[#111] p-6 rounded-3xl border border-[#D4AF37]/20 shadow-2xl hidden md:block"
            >
              <p className="text-[#D4AF37] text-3xl font-black italic">3+</p>
              <p className="text-white text-xs font-bold">سنوات من الخبرة</p>
            </motion.div>
          </motion.div>

         
          <div className="w-full lg:w-[55%] space-y-10 text-right">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight italic">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d98c] to-[#AA841D]">
                  من نحن
                </span>
              </h2>

              <div className="flex items-center justify-start gap-4 mb-8">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
                <div className="w-2.5 h-2.5 rotate-45 border border-[#D4AF37]/40 bg-black shadow-[0_0_10px_rgba(212,175,55,0.3)]"></div>
                <div className="w-12 h-[1px] bg-[#D4AF37]/20"></div>
              </div>
              
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-10 max-w-2xl">
                في مؤسسة الفهد، نؤمن أن جدران منزلك هي اللوحة التي تعكس ذوقك الرفيع. نحن متخصصون في تقديم أرقى حلول الديكور والدهانات بالمدينة المنورة.
              </p>
            </motion.div>

            {/* شبكة المميزات المتجاوبة */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { text: "خبراء في تركيب الباركية والخشب", icon: Hammer },
                { text: "رواد الدهانات الملكية بالمنطقة", icon: Paintbrush },
                { text: "نخبة من الفنيين المتخصصين", icon: Star },
                { text: "نجمع بين الجودة والسعر التنافسي", icon: CheckCircle },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      y: -5,
                      borderColor: "rgba(212, 175, 55, 0.4)",
                      backgroundColor: "rgba(212, 175, 55, 0.02)"
                    }}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-[#0c0c0c] border border-white/5 transition-all duration-300"
                  >
                    <div className="p-3 rounded-xl bg-[#D4AF37]/5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                      <Icon size={20} />
                    </div>
                    <span className="text-sm md:text-[15px] font-bold text-gray-400 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* الزرار - CTA */}
            <div className="pt-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:0544569332" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#AA841D] text-black font-black py-4 px-10 rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.2)] transition-all cursor-pointer group"
              >
                تواصل معنا الآن
                <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}