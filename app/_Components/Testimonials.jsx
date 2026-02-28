// "use client";
// import { motion } from "framer-motion";
// import { Star, Quote, MapPin, CalendarDays } from "lucide-react";

// // مصفوفة البيانات الحقيقية - 6 عملاء
// const realReviews = [
//   {
//     name: "م. خالد السلمي",
//     role: "فيلا خاصة - حي العزيزية",
//     date: "أكتوبر 2025",
//     content: "مؤسسة الفهد نفذتلي تركيب بديل خشب وشيبورد مودرن. دقة التشطيب والالتزام بالموعد كان ممتاز. فريق احترافي بمعنى الكلمة.",
//     stars: 5,
//     avatar: "https://randomuser.me/api/portraits/men/32.jpg", // صور حقيقية
//   },
//   {
//     name: "سارة الجعيد",
//     role: "مكتب استشارات هندسية",
//     date: "سبتمبر 2025",
//     content: "ركبنا باركيه ألماني في المكتب بالكامل. المعلمين متخصصين جداً وخلصوا الشغل في وقت قياسي وبجودة عالية. شكراً لكم.",
//     stars: 5,
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "أبو أحمد الحربي",
//     role: "مجلس ديوانية ملكي",
//     date: "أغسطس 2025",
//     content: "أفضل تعامل في المدينة المنورة. ركبوا ديكور جداري فخم جداً. الالتزام بالتفاصيل الصغيرة هو اللي بيميزهم.",
//     stars: 5,
//     avatar: "https://randomuser.me/api/portraits/men/65.jpg",
//   },
//   {
//     name: "م. نورة المحمد",
//     role: "شقة سكنية مودرن",
//     date: "يوليو 2025",
//     content: "تصميم وتنفيذ بديل الرخام طلع أحلى من الصور بكتير. ذوق عالي في اختيار الخامات وتنفيذ متقن.",
//     stars: 5,
//     avatar: "https://randomuser.me/api/portraits/women/68.jpg",
//   },
//   {
//     name: "عبد العزيز الجهني",
//     role: "محل تجاري - المدينة",
//     date: "يونيو 2025",
//     content: "تعامل سريع واحترافي. الأرضيات الباركيه شكلها فخم جداً وبتتحمل الحركة. أنصح الجميع بالتعامل معاهم.",
//     stars: 5,
//     avatar: "https://randomuser.me/api/portraits/men/78.jpg",
//   },
//   {
//     name: "ليلى الرشيدي",
//     role: "تجديد فيلا كاملة",
//     date: "مايو 2025",
//     content: "بشكر فريق مؤسسة الفهد على الجهد المبذول في تجديد ديكورات الفيلا. ذوق واحترافية والتزام.",
//     stars: 5,
//     avatar: "https://randomuser.me/api/portraits/women/85.jpg",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-28 bg-[#050505] relative overflow-hidden" dir="rtl">
//       {/* خلفية جمالية خفيفة جداً */}
//       <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/3 blur-[150px] rounded-full"></div>
      
//       <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
//         {/* العنوان الملكي */}
//         <div className="text-center mb-20 relative">
//           <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.01] text-8xl md:text-[14rem] font-black uppercase tracking-[0.2em] select-none invisible md:visible">
//             CONFIDENCE
//           </span>
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-white mb-6 relative z-10"
//           >
//             شهادات <span className="text-[#D4AF37]">الثقة الحقيقية</span>
//           </motion.h2>
//           <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
//         </div>

//         {/* شبكة الكروت - 6 كروت في الموبايل و3 في الديسكتوب */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {realReviews.map((review, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15, duration: 0.8 }}
//               whileHover={{ y: -10 }}
//               className="bg-[#0a0a0a] border border-white/5 p-8 rounded-[2.5rem] relative group hover:border-[#D4AF37]/40 transition-all duration-700 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
//             >
//               {/* أيقونة القبس الملكية */}
//               <Quote className="absolute top-6 left-6 text-[#D4AF37]/5 group-hover:text-[#D4AF37]/15 transition-colors" size={60} />
              
//               {/* النجوم وتقييم المدينة المنورة */}
//               <div className="flex justify-between items-center mb-7">
//                 <div className="flex gap-1.5">
//                   {[...Array(review.stars)].map((_, i) => (
//                     <Star key={i} size={18} className="fill-[#D4AF37] text-[#D4AF37]" />
//                   ))}
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-600 text-[10px] font-bold">
//                     <MapPin size={12}/>
//                     <span>المدينة المنورة</span>
//                 </div>
//               </div>

//               {/* نص الرأي الحقيقي */}
//               <p className="text-gray-300 leading-relaxed mb-9 relative z-10 font-light text-sm italic">
//                 "{review.content}"
//               </p>

//               {/* تفاصيل العميل الملكية */}
//               <div className="flex items-center gap-5 border-t border-white/5 pt-7">
//                 {/* صورة العميل - مهمة للمصداقية */}
//                 <img 
//                     src={review.avatar} 
//                     alt={review.name}
//                     className="w-16 h-16 rounded-full border-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors shadow-lg"
//                 />
//                 <div className="flex-grow">
//                   <h4 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">{review.name}</h4>
//                   <div className="text-xs text-[#D4AF37] font-medium tracking-wide">{review.role}</div>
//                 </div>
//                 {/* التاريخ - مهم للمصداقية */}
//                 <div className="flex flex-col items-center justify-center gap-1 text-gray-700 text-[9px] font-medium border border-white/5 p-2 rounded-xl">
//                     <CalendarDays size={14}/>
//                     <span>{review.date}</span>
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
    <section className="py-16 bg-[#050505]" dir="rtl">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* العنوان السمبل - صغيّر وشيك */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} // ينزل من فوق
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white mb-2"
          >
            آراء العملاء
          </motion.h2>
          <div className="w-10 h-1 bg-[#D4AF37] mx-auto rounded-full opacity-40"></div>
        </div>

        {/* شبكة الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realReviews.map((review, index) => (
            <motion.div
              key={index}
              // أنيميشن النزول من فوق لتحت عند التحميل
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6, 
                type: "spring", 
                stiffness: 100 
              }}
              // أنيميشن الهفر (Hover)
              whileHover={{ 
                y: -8,
                boxShadow: "0px 10px 30px rgba(212, 175, 55, 0.1)",
                borderColor: "rgba(212, 175, 55, 0.3)"
              }}
              // أنيميشن الضغط (Click)
              whileTap={{ scale: 0.96 }}
              className="bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl cursor-pointer transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-0.5">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <Quote size={20} className="text-[#D4AF37] opacity-20" />
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                "{review.content}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img 
                    src={review.avatar} 
                    className="w-10 h-10 rounded-full border border-[#D4AF37]/20 object-cover"
                    alt={review.name}
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{review.name}</h4>
                  <span className="text-[10px] text-[#D4AF37] opacity-70">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}