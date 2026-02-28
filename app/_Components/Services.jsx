
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


import "swiper/css";
import "swiper/css/navigation";

const galleryImages = [
  { src: "/img/image.jpg" },
  { src: "/img/image2.jpg" },
  { src: "/img/image3.jpg" },
  { src: "/img/image4.jpg" },
  { src: "/img/image5.jpg" },
{ src: "/img/image6.jpeg" },
{ src: "/img/image10.jpeg" },
{ src: "/img/image8.jpeg" },
{ src: "/img/image9.jpeg" },
 { src: "/img/immmmg.jpeg" },
 { src: "/img/image 12.jpeg" },
  { src: "/img/image13.jpeg" },
  { src: "/img/image43.jpeg" },
   { src: "/img/imag211.jpeg" },
  { src: "/img/image21.jpeg" },
   { src: "/img/image7.jpeg" },
  { src: "/img/imageo.jpeg" },
   { src: "/img/image33.jpeg" },
    { src: "/img/image41.jpeg" },
     { src: "/img/imagee.jpeg" },
 
 
 
 

];

export default function LuxuryGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="services"  className="py-16 bg-[#0a0a0a]" dir="rtl">
   
<div className="container mx-auto px-4 mb-10 text-center">
  <motion.h2 
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-2xl md:text-3xl font-bold tracking-wide text-white"
  >
    معرض <span className="text-[#D4AF37]">أعمالنا الاحترافية</span>
  </motion.h2>
  
  <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-3 rounded-full opacity-80"></div>
</div>
      <div className="px-4 [&_.swiper-button-next]:!text-[#D4AF37] [&_.swiper-button-prev]:!text-[#D4AF37]">
        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={15}
          slidesPerView={1.2}
          freeMode={true}
          navigation={true}
          breakpoints={{ 640: { slidesPerView: 2.2 }, 1024: { slidesPerView: 3.5 } }}
        >
          {galleryImages.map((item, i) => (
            <SwiperSlide key={i}>
              <div 
                className="relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden cursor-zoom-in group"
                onClick={() => { setIndex(i); setOpen(true); }} // هنا السحر اللي بيفتح الصورة
              >
                <img 
                  src={item.src} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryImages}
        index={index}
      />
    </section>
 );
  
<section className="py-16 bg-[#0a0a0a]" dir="rtl">
  <div className="container mx-auto px-4 max-w-7xl">
    
    {/* عنوان فرعي بسيط */}
    <div className="mb-12 text-right border-r-2 border-[#D4AF37] pr-4">
      <h3 className="text-xl text-white font-light tracking-widest uppercase">
        تخصصات <span className="text-[#D4AF37] font-bold">الفهد</span>
      </h3>
    </div>

    {/* شبكة الـ 4 كروت */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {mainServices.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-[#111111] p-6 rounded-xl border border-white/5 hover:border-[#D4AF37]/20 transition-all group"
        >
          {/* أيقونة بسيطة أو رقم الخدمة */}
          <div className="text-[#D4AF37] text-xs font-mono mb-4 opacity-50">0{index + 1}</div>
          
          <h4 className="text-[#D4AF37] text-lg font-bold mb-3 group-hover:text-white transition-colors">
            {service.title}
          </h4>
          
          <p className="text-gray-500 text-xs leading-relaxed font-light">
            {service.desc}
          </p>
          
          {/* سهم صغير شيك */}
          <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowLeft size={14} className="text-[#D4AF37]" />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  
}