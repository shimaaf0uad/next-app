// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion"; 
// import { ArrowLeft } from "lucide-react";

// // const mainServices = [
// //   {
// //     title: "تركيب بديل الخشب",
// //     desc: "أضف دفئاً وأناقة لمساحتك مع ديكورات بديل الخشب للجدران، المصممة لتعكس الذوق الرفيع وتناسب الأنماط المودرن والكلاسيك بالمدينة المنورة.",
// //     image: "/img/image5.jpg", 
// //   },
// //   {
// //     title: "تركيب باركيه  ",
// //     desc: "أرضيات خشبية أنيقة ومتينة يتم تركيبها باحترافية عالية على يد معلمين متخصصين لضمان مظهر راقي يدوم طويلاً. بالمدينه المنوره",
// //     image: "/img/imad.jpg",
// //   },
// //   {
// //     title: "تركيب شيبورد مودرن",
// //     desc: "نصمم لك أرقى ديكورات الشيبورد بتصاميم هندسية عصرية تجمع بين متانة الخشب ولمسات الإضاءة المخفية، لتمنح منزلك طابعاً فريداً. بالمدينه المنوره",
// //     image: "/img/image.jpg",
// //   },
// const mainServices = [
//   {
//     title: "تركيب بديل الخشب",
//     location: "المدينة المنورة", // فصلنا الكلمة هنا
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

//   return (
//     <section id="specialty-services" className="py-24 bg-[#0a0a0a] text-white" dir="rtl">
//       <div className="container mx-auto px-6 max-w-7xl">
//        <div className="mb-24 text-center relative px-4">

//   <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.02] text-8xl md:text-[12rem] font-black uppercase tracking-[0.3em] select-none invisible md:visible">
//     SERVICES
//   </span>

//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 1 }}
//     className="relative z-10"
//   >
//     <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
//       خدمات <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d98c] to-[#AA841D]">الفهد الملكية</span>
//     </h2>
    
//     {/* خطوط التزيين الذهبية */}
//     <div className="flex items-center justify-center gap-4">
//       <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
//       <div className="w-3 h-3 rotate-45 border border-[#D4AF37] bg-black shadow-[0_0_10px_#D4AF37]"></div>
//       <div className="w-16 h-[1.5px] bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
//     </div>

//     <p className="mt-8 text-gray-400 text-sm md:text-base font-light tracking-widest max-w-2xl mx-auto leading-relaxed">
//       نقدم لكم باقة من أرقى حلول الديكور العصري بتنفيذ هندسي دقيق في المدينة المنورة
//     </p>
//   </motion.div>
//    </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {mainServices.map((service, index) => (
//             // <motion.div
//             //   key={index}
//             //   initial={{ opacity: 0, y: 30 }}
//             //   whileInView={{ opacity: 1, y: 0 }}
//             //   viewport={{ once: true }}
//             //   transition={{ duration: 0.8, delay: index * 0.1 }}
//             //   className="group cursor-pointer flex flex-col items-center text-center"
//             // >
//             //   <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/5 transition-all duration-700 group-hover:border-[#D4AF37]/30">
//             //     <img 
//             //       src={service.image} 
//             //       alt={service.title}
//             //       className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
//             //     />
//             //     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-all duration-500"></div>
//             //   </div>

//             //   {/* <div className="mt-8 w-full px-4">
//             //     <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
//             //       {service.title}
//             //     </h3>
//             //     <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-2 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
//             //       {service.desc}
//             //     </p>
                
//             //     <div className="flex items-center justify-center gap-3 text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
//             //       <span className="border-b border-[#D4AF37]/0 group-hover:border-[#D4AF37] pb-1">اكتشف الخدمة</span>
//             //       <ArrowLeft size={16} />
//             //     </div>
//             //   </div> */}
//             // </motion.div>
//             {/* كود الكارت اللي بتلفي عليه */}
// <motion.div className="group relative ...">
  
//   {/* شارة "المدينة المنورة" فوق الصورة علطول */}
//   <div className="absolute top-5 right-5 z-20 bg-[#D4AF37] text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
//     {service.location}
//   </div>

//   <div className="relative aspect-[4/5] ...">
//     {/* الصورة هنا */}
//   </div>

//   <div className="mt-8 px-2 text-center">
//     <h3 className="text-xl font-bold mb-3">{service.title}</h3>
    
//     {/* النص مع إبراز المدينة المنورة بلون ذهبي */}
//     <p className="text-gray-400 text-sm leading-relaxed mb-6">
//       {service.desc} 
//       <span className="block mt-2 text-[#D4AF37] font-bold">خدماتنا في {service.location}</span>
//     </p>
//   </div>
// </motion.div>
//           ))
//         </div>
//       </div>
//     </section>
//   );


// }



"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import { ArrowLeft, MapPin } from "lucide-react";

const mainServices = [
  {
    title: "تركيب بديل الخشب",
    location: "المدينة المنورة",
    desc: "أضف دفئاً وأناقة لمساحتك مع ديكورات بديل الخشب للجدران، المصممة لتعكس الذوق الرفيع وتناسب الأنماط المودرن والكلاسيك.",
    image: "/img/image5.jpg", 
  },
  {
    title: "تركيب باركيه فخم",
    location: "المدينة المنورة",
    desc: "أرضيات خشبية أنيقة ومتينة يتم تركيبها باحترافية عالية على يد معلمين متخصصين لضمان مظهر راقي يدوم طويلاً.",
    image: "/img/imad.jpg",
  },
  {
    title: "تركيب شيبورد مودرن",
    location: "المدينة المنورة",
    desc: "نصمم لك أرقى ديكورات الشيبورد بتصاميم هندسية عصرية تجمع بين متانة الخشب ولمسات الإضاءة المخفية.",
    image: "/img/image.jpg",
  },
];

export default function SpecialtyServices() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // دالة لفتح الواتساب برسالة مخصصة
  const contactWhatsApp = (serviceTitle) => {
    const phone = "966544569332";
    const message = `أهلاً مؤسسة الفهد، حابب أستفسر عن خدمة (${serviceTitle}) في المدينة المنورة.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="specialty-services" className="py-24 bg-[#0a0a0a] text-white" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* العنوان الملكي مع الوترمارك */}
        <div className="mb-24 text-center relative px-4">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              خدمات <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d98c] to-[#AA841D]">الفهد الملكية</span>
            </h2>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
              <div className="w-3 h-3 rotate-45 border border-[#D4AF37] bg-black shadow-[0_0_10px_#D4AF37]"></div>
              <div className="w-16 h-[1.5px] bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
            </div>

            <p className="mt-8 text-gray-400 text-sm md:text-base font-light tracking-widest max-w-2xl mx-auto leading-relaxed">
              نقدم لكم باقة من أرقى حلول الديكور العصري بتنفيذ هندسي دقيق في المدينة المنورة
            </p>
          </motion.div>
        </div>

        {/* شبكة الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => contactWhatsApp(service.title)}
              className="group cursor-pointer flex flex-col items-center text-center relative"
            >
              {/* شارة المدينة المنورة */}
              <div className="absolute top-5 right-5 z-20 bg-[#D4AF37] text-black text-[11px] font-black px-4 py-1.5 rounded-full shadow-xl flex items-center gap-1">
                <MapPin size={12} />
                {service.location}
              </div>

              {/* حاوية الصورة مع الزووم */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/5 transition-all duration-700 group-hover:border-[#D4AF37]/30">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-all duration-500"></div>
              </div>

              {/* المحتوى النصي */}
              <div className="mt-8 w-full px-4">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.desc}
                  <span className="block mt-4 text-[#D4AF37] font-extrabold tracking-widest text-xs uppercase animate-pulse">
                     اطلبه الآن في {service.location}
                  </span>
                </p>
                
                {/* زر الحركة التفاعلي */}
                <div className="flex items-center justify-center gap-3 text-[#D4AF37] text-xs font-bold tracking-widest uppercase transition-all duration-500">
                  <span className="border-b border-[#D4AF37]/0 group-hover:border-[#D4AF37] pb-1">احجز معاينة مجانية</span>
                  <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}