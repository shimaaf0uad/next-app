
"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { MapPin } from "lucide-react";

const ServiceCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-[#111111] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#daa700]/30 transition-all duration-500 relative p-4 pb-8"
    >
      
      <div className="absolute top-4 right-4 z-20 bg-[#daa700] text-black text-[10px] px-3 py-1 rounded-md font-bold flex items-center gap-1 shadow-lg opacity-90">
        <MapPin size={10} />
        {project.location}
      </div>

   
      <div className="h-52 md:h-64 overflow-hidden relative rounded-2xl mb-6 bg-[#1a1a1a]">
   
        <div className="absolute inset-0 z-10 pointer-events-none 
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent 
          before:-translate-x-full group-hover:before:translate-x-full before:transition-transform before:duration-1000">
        </div>

        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-70 
            group-hover:opacity-100 
            group-hover:scale-110 
            group-hover:brightness-110 
            group-hover:contrast-110 
            transition-all duration-700 ease-out" 
        />
        
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
      </div>

      <div className="text-right px-4">
       
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors leading-tight">
          {project.title}
        </h3>

     
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 min-h-[3rem] line-clamp-2 opacity-90">
          {project.description}
        </p>
     
        <div className="flex flex-col items-center gap-4 pt-6 border-t border-white/10">
          <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.15em] opacity-70 uppercase italic">
            اطلبه الآن في المدينة المنورة
          </p>
          
          <a 
            href="#contact" 
            className="group/btn flex items-center gap-3 text-[#D4AF37] hover:text-white transition-all duration-300"
          >
            <span className="text-base md:text-lg font-black border-b-2 border-transparent group-hover/btn:border-[#D4AF37] pb-1">
              احجز معاينة مجانية
            </span>
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="transform transition-transform duration-300 group-hover/btn:-translate-x-2"
            >
              <path 
                d="M19 12H5M5 12L12 19M5 12L12 5" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function SpecialtyServices({ projectsData }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section id="specialty-services" className="bg-black py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
     
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 italic tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d98c] to-[#AA841D]">
                خدماتنا
              </span>
            </h2>
            <div className="flex items-center justify-center gap-4 opacity-50">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
              <div className="w-3 h-3 rotate-45 border-2 border-[#D4AF37] bg-black animate-pulse"></div>
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
            </div>
          </motion.div>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData?.map((project, index) => (
            <ServiceCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}