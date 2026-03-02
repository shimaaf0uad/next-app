
// "use client";
// import { motion } from "framer-motion";
// import { Star, Quote } from "lucide-react";

// const realReviews = [
//   {
//     name: "م. خالد السلمي",
//     role: "حي العزيزية",
//     content: "مؤسسة الفهد نفذتلي تركيب بديل خشب وشيبورد مودرن. دقة في المواعيد وتشطيب احترافي.",
//     stars: 5,
//     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "سارة الجعيد",
//     role: "مكتب هندسي",
//     content: "ركبنا باركيه ألماني في المكتب بالكامل. المعلمين متخصصين وخلصوا الشغل في وقت قياسي.",
//     stars: 5,
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "أبو أحمد الحربي",
//     role: "ديوانية ملكي",
//     content: "أفضل تعامل في المدينة المنورة. ركبوا ديكور جداري فخم جداً والتزام تام بالتفاصيل.",
//     stars: 5,
//     avatar: "https://randomuser.me/api/portraits/men/65.jpg",
//   },
//   {
//     name: "م. نورة المحمد",
//     role: "شقة مودرن",
//     content: "تصميم وتنفيذ بديل الرخام طلع أحلى من الصور بكتير. ذوق عالي وتنفيذ متقن جداً.",
//     stars: 5,
//     avatar: "https://randomuser.me/api/portraits/women/68.jpg",
//   },
//   {
//     name: "عبد العزيز الجهني",
//     role: "محل تجاري",
//     content: "تعامل سريع واحترافي. الأرضيات الباركيه شكلها فخم جداً وبتتحمل الحركة.",
//     stars: 5,
//     avatar: "https://randomuser.me/api/portraits/men/78.jpg",
//   },
//   {
//     name: "ليلى الرشيدي",
//     role: "تجديد فيلا",
//     content: "بشكر فريق الفهد على الجهد المبذول في تجديد الديكورات. ذوق واحترافية.",
//     stars: 5,
//     avatar: "https://randomuser.me/api/portraits/women/85.jpg",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-16 bg-[#050505]" dir="rtl">
//       <div className="container mx-auto px-6 max-w-6xl">
        
       
//         <div className="mb-24 text-center relative px-4">
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 1 }}
//     className="relative z-10"
//   >
   
//     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
//       <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d98c] to-[#AA841D]">
//         اراء العملاء
//       </span>
//     </h2>
   
//     <div className="flex items-center justify-center gap-4">
//       <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
//       <div className="w-2 h-2 rotate-45 border border-[#D4AF37]/40 bg-black"></div>
//       <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
//     </div>
//     </motion.div>
//         </div>
//         {/* شبكة الكروت */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {realReviews.map((review, index) => (
//             <motion.div
//               key={index}
//               // أنيميشن النزول من فوق لتحت عند التحميل
//               initial={{ opacity: 0, y: -50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ 
//                 delay: index * 0.1, 
//                 duration: 0.6, 
//                 type: "spring", 
//                 stiffness: 100 
//               }}
//               // أنيميشن الهفر (Hover)
//               whileHover={{ 
//                 y: -8,
//                 boxShadow: "0px 10px 30px rgba(212, 175, 55, 0.1)",
//                 borderColor: "rgba(212, 175, 55, 0.3)"
//               }}
//               // أنيميشن الضغط (Click)
//               whileTap={{ scale: 0.96 }}
//               className="bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl cursor-pointer transition-colors duration-300"
//             >
//               <div className="flex justify-between items-start mb-4">
//                 <div className="flex gap-0.5">
//                   {[...Array(review.stars)].map((_, i) => (
//                     <Star key={i} size={12} className="fill-[#D4AF37] text-[#D4AF37]" />
//                   ))}
//                 </div>
//                 <Quote size={20} className="text-[#D4AF37] opacity-20" />
//               </div>

//               <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
//                 "{review.content}"
//               </p>

//               <div className="flex items-center gap-3 pt-4 border-t border-white/5">
//                 <img 
//                     src={review.avatar} 
//                     className="w-10 h-10 rounded-full border border-[#D4AF37]/20 object-cover"
//                     alt={review.name}
//                 />
//                 <div>
//                   <h4 className="text-sm font-bold text-white">{review.name}</h4>
//                   <span className="text-[10px] text-[#D4AF37] opacity-70">{review.role}</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const realReviews = [
  {
    name: "م. خالد السلمي",
    role: "حي العزيزية",
    content: "مؤسسة الفهد نفذتلي تركيب بديل خشب وشيبورد مودرن. دقة في المواعيد وتشطيب احترافي.",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "سارة الجعيد",
    role: "مكتب هندسي",
    content: "ركبنا باركيه ألماني في المكتب بالكامل. المعلمين متخصصين وخلصوا الشغل في وقت قياسي.",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "أبو أحمد الحربي",
    role: "ديوانية ملكي",
    content: "أفضل تعامل في المدينة المنورة. ركبوا ديكور جداري فخم جداً والتزام تام بالتفاصيل.",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "م. نورة المحمد",
    role: "شقة مودرن",
    content: "تصميم وتنفيذ بديل الرخام طلع أحلى من الصور بكتير. ذوق عالي وتنفيذ متقن جداً.",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "عبد العزيز الجهني",
    role: "محل تجاري",
    content: "تعامل سريع واحترافي. الأرضيات الباركيه شكلها فخم جداً وبتتحمل الحركة.",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    name: "ليلى الرشيدي",
    role: "تجديد فيلا",
    content: "بشكر فريق الفهد على الجهد المبذول في تجديد الديكورات. ذوق واحترافية.",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/85.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#050505]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* العنوان المتجاوب */}
        <div className="mb-16 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight italic">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d98c] to-[#AA841D]">
                آراء عملائنا
              </span>
            </h2>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
              <div className="w-2 h-2 rotate-45 border border-[#D4AF37]/40 bg-black shadow-[0_0_10px_rgba(212,175,55,0.3)]"></div>
              <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
            </div>
          </motion.div>
        </div>

        {/* شبكة الكروت المتجاوبة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {realReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5, 
                ease: "easeOut" 
              }}
              whileHover={{ 
                y: -10,
                borderColor: "rgba(212, 175, 55, 0.4)",
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)"
              }}
              className="bg-[#0c0c0c] border border-white/5 p-6 md:p-8 rounded-[2rem] cursor-default transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote size={24} className="text-[#D4AF37] opacity-20 transform -scale-x-100" />
                </div>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-light italic">
                  "{review.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="relative">
                  <img 
                    src={review.avatar} 
                    className="w-12 h-12 rounded-full border-2 border-[#D4AF37]/20 object-cover"
                    alt={review.name}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-[#D4AF37] rounded-full p-1 border-2 border-[#0c0c0c]">
                     <Star size={8} className="fill-black text-black" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">{review.name}</h4>
                  <span className="text-xs text-[#D4AF37] opacity-70 font-medium tracking-wide">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}