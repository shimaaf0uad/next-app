
// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion"; 
// import { ArrowLeft, MapPin } from "lucide-react";

// const mainServices = [
//   {
//     title: "تركيب بديل الخشب",
//     location: "المدينة المنورة",
//     desc: "أضف دفئاً وأناقة لمساحتك مع ديكورات بديل الخشب للجدران، المصممة لتعكس الذوق الرفيع وتناسب الأنماط المودرن والكلاسيك.",
//     image: "/img/image5.jpg", 
//   },
//   {
//     title: "تركيب باركيه فخم",
//     location: "المدينة المنورة",
//     desc: "أرضيات خشبية أنيقة ومتينة يتم تركيبها باحترافية عالية على يد معلمين متخصصين لضمان مظهر راقي يدوم طويلاً.",
//     image: "/img/imad.jpg",
//   },
//   {
//     title: "تركيب شيبورد مودرن",
//     location: "المدينة المنورة",
//     desc: "نصمم لك أرقى ديكورات الشيبورد بتصاميم هندسية عصرية تجمع بين متانة الخشب ولمسات الإضاءة المخفية.",
//     image: "/img/image.jpg",
//   },
// ];

// export default function SpecialtyServices() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) return null;

//   // دالة لفتح الواتساب برسالة مخصصة
//   const contactWhatsApp = (serviceTitle) => {
//     const phone = "966544569332";
//     const message = `أهلاً مؤسسة الفهد، حابب أستفسر عن خدمة (${serviceTitle}) في المدينة المنورة.`;
//     window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
//   };

//   return (
//     <section id="specialty-services" className="py-24 bg-[#0a0a0a] text-white" dir="rtl">
//       <div className="container mx-auto px-6 max-w-7xl">


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
//         خدماتنا
//       </span>
//     </h2>

//     <div className="flex items-center justify-center gap-4">
//       <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
//       <div className="w-2 h-2 rotate-45 border border-[#D4AF37]/40 bg-black"></div>
//       <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
//     </div>

//     <p className="mt-6 text-gray-500 text-xs md:text-sm font-light max-w-xl mx-auto leading-relaxed italic">
//       نستعرض لكم فخر تنفيذنا في مشروعات الديكور بالمدينة المنورة
//     </p>
//   </motion.div>
//         </div>

//         {/* شبكة الكروت */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {mainServices.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               onClick={() => contactWhatsApp(service.title)}
//               className="group cursor-pointer flex flex-col items-center text-center relative"
//             >
//               {/* شارة المدينة المنورة */}
//               <div className="absolute top-5 right-5 z-20 bg-[#D4AF37] text-black text-[11px] font-black px-4 py-1.5 rounded-full shadow-xl flex items-center gap-1">
//                 <MapPin size={12} />
//                 {service.location}
//               </div>

//               {/* حاوية الصورة مع الزووم */}
//               <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/5 transition-all duration-700 group-hover:border-[#D4AF37]/30">
//                 <img 
//                   src={service.image} 
//                   alt={service.title}
//                   className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-all duration-500"></div>
//               </div>

//               {/* المحتوى النصي */}
//               <div className="mt-8 w-full px-4">
//                 <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm leading-relaxed font-light mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
//                   {service.desc}
//                   <span className="block mt-4 text-[#D4AF37] font-extrabold tracking-widest text-xs uppercase animate-pulse">
//                      اطلبه الآن في {service.location}
//                   </span>
//                 </p>

//                 {/* زر الحركة التفاعلي */}
//                 <div className="flex items-center justify-center gap-3 text-[#D4AF37] text-xs font-bold tracking-widest uppercase transition-all duration-500">
//                   <span className="border-b border-[#D4AF37]/0 group-hover:border-[#D4AF37] pb-1">احجز معاينة مجانية</span>
//                   <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// // }
// "use client";
// import React from "react";
// import Navbar from "../_Components/Navbar";
// import { motion } from "framer-motion";
// import { MapPin } from "lucide-react"; 

// const projectsData = [
//   {
//     id: 1,
//     title: "درج باركيه - إضاءة ذكية",
//     description: "تلبيس درج داخلي بخشب الباركيه الفاخر مع تركيب إضاءة ليد مخفية تحت الدرجات للأمان والفخامة.",
//     image: "/img/immmmg.jpeg",
//     location: "المدينة المنورة"
//   },
//   {
//     id: 2,
//     title: "تركيب شيبورد مودرن",
//     description: "تصميم وتنفيذ ألواح شيبورد جدارية بخلفيات مضيئة، تعطي اتساعاً وجمالاً للمجالس والصالات.",
//     image: "/img/image.jpg",
//     location: "المدينة المنورة"
//   },
//   {
//     id: 3,
//     title: "بديل الرخام - لمسة ملكية",
//     description: "تكسية جدران بألواح بديل الرخام الفاخرة التي تحاكي جمال الرخام الطبيعي بعروق متصلة، حلول عصرية تجمع بين الفخامة المطلقة وسهولة الصيانة.",
//     image: "/img/image4.jpg",
//     location: "المدينة المنورة"
//   },
//   {
//     id: 4,
//     title: "باركيه أرضيات ملكي",
//     description: "أرضيات خشبية ألمانية مقاومة للخدش، تم تركيبها بدقة متناهية لتناسب غرف النوم والصالات.",
//     image: "/img/imagef.jpg",
//     location: "المدينة المنورة"
//   },
//   {
//     id: 8,
//     title: "أسقف مودرن",
//     description: "تنفيذ أسقف جبس بورد بنظام الإضاءة الخطية المبتكرة، مع تنسيق دهانات داخلية ناعمة تبرز اتساع وجمال الغرفة.",
//     // image: "/img/image 55.jpg",
//     image: "/img/image33.jpeg",
//     location: "المدينة المنورة"
//   },
//   {
//     id: 10,
//     title: "بديل الخشب ",
//     description: "تركيب ألواح بديل الخشب بتصاميم ضلع عمودية، حلول عصرية مقاومة للرطوبة تمنح جدرانك فخامة الخشب الطبيعي مع توزيع إضاءة احترافي.",
//     image: "/img/imgeeo.jpg",
//     location: "المدينة المنورة"
//   }
// ];

// export default function ProjectsPage() {
//   return (
//     <main id="specialty-services"   className="bg-black min-h-screen">
//       <Navbar />
//       <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto" dir="rtl">
    
//     <div className="mb-24 pt-20 text-center relative px-4"> 
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 1 }}
//     className="relative z-10"
//   >
   
//     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
//       <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d98c] to-[#AA841D]">
//    خدماتنا
//       </span>
//     </h2>
//     <div className="flex items-center justify-center gap-4">
//       <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
//       <div className="w-2 h-2 rotate-45 border border-[#D4AF37]/40 bg-black"></div>
//       <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
//     </div>
//   </motion.div>
//         </div>


//         {/* شبكة المشاريع */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectsData.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="group bg-[#0f0f0f] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-[#daa700]/30 transition-all duration-500 relative"
//             >
//               {/* تاج الموقع (المدينة المنورة) */}
//               <div className="absolute top-5 right-5 z-20 bg-[#daa700] text-black text-[11px] font-black px-4 py-1.5 rounded-full shadow-xl flex items-center gap-1">
//                 <MapPin size={12} />
//                 {project.location}
//               </div>

//               {/* الصورة */}
//               <div className="h-64 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
//                 />
//               </div>

//               {/* المحتوى */}
//               <div className="p-8 text-right">
//                 <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-[#daa700] transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
//                   {project.description}
//                 </p>
//                 <a
//                   href="https://wa.me/966544569332"
//                   className="block w-full py-4 bg-[#daa700] text-black font-black rounded-2xl text-center text-sm hover:bg-white transition-all transform active:scale-95"
//                 >
//                   اطلب الخدمة الآن
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
     
//     </main>
//   );
// }
"use client";
import React, { useRef } from "react";
import Navbar from "../_Components/Navbar";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react"; 

const projectsData = [
  {
    id: 1,
    title: "درج باركيه - إضاءة ذكية",
    description: "تلبيس درج داخلي بخشب الباركيه الفاخر مع تركيب إضاءة ليد مخفية تحت الدرجات للأمان والفخامة.",
    image: "/img/immmmg.jpeg",
    location: "المدينة المنورة"
  },
  {
    id: 2,
    title: "تركيب شيبورد مودرن",
    description: "تصميم وتنفيذ ألواح شيبورد جدارية بخلفيات مضيئة، تعطي اتساعاً وجمالاً للمجالس والصالات.",
    image: "/img/image.jpg",
    location: "المدينة المنورة"
  },
  {
    id: 3,
    title: "بديل الرخام - لمسة ملكية",
    description: "تكسية جدران بألواح بديل الرخام الفاخرة التي تحاكي جمال الرخام الطبيعي بعروق متصلة، حلول عصرية تجمع بين الفخامة المطلقة وسهولة الصيانة.",
    image: "/img/image4.jpg",
    location: "المدينة المنورة"
  },
  {
    id: 4,
    title: "باركيه أرضيات ملكي",
    description: "أرضيات خشبية ألمانية مقاومة للخدش، تم تركيبها بدقة متناهية لتناسب غرف النوم والصالات.",
    image: "/img/imagef.jpg",
    location: "المدينة المنورة"
  },
  {
    id: 8,
    title: "أسقف مودرن",
    description: "تنفيذ أسقف جبس بورد بنظام الإضاءة الخطية المبتكرة، مع تنسيق دهانات داخلية ناعمة تبرز اتساع وجمال الغرفة.",
    image: "/img/image33.jpeg",
    location: "المدينة المنورة"
  },
  {
    id: 10,
    title: "بديل الخشب ",
    description: "تركيب ألواح بديل الخشب بتصاميم ضلع عمودية، حلول عصرية مقاومة للرطوبة تمنح جدرانك فخامة الخشب الطبيعي مع توزيع إضاءة احترافي.",
    image: "/img/imgeeo.jpg",
    location: "المدينة المنورة"
  }
];

// كارت الخدمة بتأثير 3D متطور
const ServiceCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-[#0f0f0f] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-[#daa700]/40 transition-all duration-500 relative shadow-2xl"
    >
      {/* تاج المدينة المنورة */}
      <div className="absolute top-5 right-5 z-20 bg-[#daa700] text-black text-[10px] md:text-[11px] font-black px-4 py-1.5 rounded-full shadow-xl flex items-center gap-1">
        <MapPin size={12} />
        {project.location}
      </div>

      {/* الصورة مع تأثير الزووم */}
      <div className="h-60 md:h-72 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-1000 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent opacity-60"></div>
      </div>

      {/* المحتوى المرفوع 3D */}
      <div style={{ transform: "translateZ(40px)" }} className="p-8 text-right">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-3 group-hover:text-[#daa700] transition-colors flex items-center gap-2 justify-end">
          {project.title}
          <Sparkles size={18} className="text-[#daa700] opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 h-12 line-clamp-2 group-hover:text-gray-300 transition-colors">
          {project.description}
        </p>
        
        <a
          href="https://wa.me/966544569332"
          target="_blank"
          className="block w-full py-4 bg-[#daa700] text-black font-black rounded-2xl text-center text-sm hover:bg-white hover:scale-[1.02] transition-all shadow-lg shadow-[#daa700]/10"
        >
          اطلب الخدمة الآن
        </a>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  return (
    <main id="specialty-services" className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      
      <div className="pt-32 md:pt-48 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" dir="rtl">
        
        {/* العنوان المتجاوب */}
        <div className="mb-16 md:mb-24 text-center"> 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tight italic">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d98c] to-[#AA841D]">
                خدماتنا
              </span>
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
              <div className="w-2 h-2 rotate-45 border border-[#D4AF37]/40 bg-black"></div>
              <div className="w-8 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
            </div>
          </motion.div>
        </div>

        {/* شبكة الخدمات المتجاوبة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectsData.map((project, index) => (
            <ServiceCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}