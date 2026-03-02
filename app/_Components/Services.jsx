
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link"; // ضفنا اللينك للربط
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay } from "swiper/modules"; // ضفنا Autoplay لحركة أنعم
import Lightbox from "yet-another-react-lightbox";
import { ArrowLeft, Maximize2 } from "lucide-react"; 
import "yet-another-react-lightbox/styles.css";
import "swiper/css";
import "swiper/css/navigation";

const galleryImages = [
  { src: "/img/image.jpg" }, { src: "/img/image2.jpg" }, { src: "/img/image3.jpg" },
  { src: "/img/image4.jpg" }, { src: "/img/image5.jpg" }, { src: "/img/image6.jpeg" },
  { src: "/img/image10.jpeg" }, { src: "/img/image8.jpeg" }, { src: "/img/image9.jpeg" },
  { src: "/img/image13.jpeg" }, { src: "/img/image43.jpeg" }, { src: "/img/imag211.jpeg" }, 
  { src: "/img/image21.jpeg" }, { src: "/img/image7.jpeg" }, { src: "/img/imageo.jpeg" }, 
  { src: "/img/image33.jpeg" }, { src: "/img/image41.jpeg" }, { src: "/img/imagee.jpeg" },
  { src: "/img/imagel.jpeg" }
];

export default function LuxuryGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="works" className="py-20 bg-[#0a0a0a] overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* رأس السكشن - Responsive Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d98c] to-[#AA841D]">
                أعمالنا
              </span>
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-[#D4AF37]/30"></div>
              <div className="w-2 h-2 rotate-45 border border-[#D4AF37]/40 bg-black"></div>
              <div className="w-10 h-[1px] bg-[#D4AF37]/30"></div>
            </div>

            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto italic leading-relaxed">
              نستعرض لكم فخر تنفيذنا في مشروعات الديكور والدهانات بالمدينة المنورة
            </p>
          </motion.div>
        </div>

        {/* السلايدر - Optimized Swiper */}
        <div className="relative px-2 md:px-0 [&_.swiper-button-next]:!text-[#D4AF37] [&_.swiper-button-prev]:!text-[#D4AF37] [&_.swiper-button-next]:after:!text-2xl [&_.swiper-button-prev]:after:!text-2xl">
          <Swiper
            modules={[Navigation, FreeMode, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2} // للموبايل: صورة وجزء من التانية للتشويق
            freeMode={true}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{ 
              640: { slidesPerView: 2.2 }, 
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 3.8 } 
            }}
            className="pb-10"
          >
            {galleryImages.map((item, i) => (
              <SwiperSlide key={i}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden cursor-pointer group border border-white/5"
                  onClick={() => { setIndex(i); setOpen(true); }}
                >
                  <img 
                    src={item.src} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt="مشروع الفهد للديكور" 
                    loading="lazy" // تحسين الأداء
                  />
                  {/* تأثير عند الهوفر يظهر أيقونة التكبير */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-4 bg-[#D4AF37] rounded-full text-black transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* زرار "مشاهدة الكل" - الرابط الذكي */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-3 px-10 py-4 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-500 font-bold group"
          >
            استكشف المعرض الكامل
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>

     
      <Lightbox 
        open={open} 
        close={() => setOpen(false)} 
        slides={galleryImages} 
        index={index} 
      />
    </section>
  );
}