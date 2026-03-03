"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#050505] border-t border-white/5" dir="rtl">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
     
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-[#daa700] text-xs tracking-[0.4em] uppercase mb-4 font-bold">تواصل معنا</h2>
          <p className="text-white text-xl md:text-3xl font-light italic leading-relaxed">
            نحن هنا لنسمع أفكارك ونحولها لواقع.
          </p>
        </motion.div>

       
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24">
          
          
          <motion.a 
            whileHover={{ y: -5 }}
            href="https://wa.me/01145511112"
            target="_blank"
            className="flex items-center gap-4 group w-full md:w-auto justify-center md:justify-start"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#25D366] transition-all duration-300">
              <MessageCircle size={18} className="text-gray-400 group-hover:text-[#25D366]" />
            </div>
            <span className="text-gray-400 group-hover:text-white text-sm font-medium transition-colors">واتساب</span>
          </motion.a>

        
          <motion.a 
            whileHover={{ y: -5 }}
            href="tel:01145511112"
            className="flex items-center gap-4 group w-full md:w-auto justify-center md:justify-start"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#daa700] transition-all duration-300">
              <Phone size={18} className="text-gray-400 group-hover:text-[#daa700]" />
            </div>
            <span className="text-gray-400 group-hover:text-white text-sm font-medium transition-colors">اتصال هاتفي</span>
          </motion.a>

         
          <div className="flex items-center gap-4 group cursor-default w-full md:w-auto justify-center md:justify-start">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center">
              <MapPin size={18} className="text-gray-400" />
            </div>
            <span className="text-gray-400 text-sm font-medium">المدينة المنورة</span>
          </div>

        </div>

      </div>
    </section>
  );
}