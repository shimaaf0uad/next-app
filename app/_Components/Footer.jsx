
"use client";
import React from 'react';
import Image from 'next/image';
import { Phone, Mail, Facebook, Music, MessageCircle, ArrowUpLeft } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#080808] text-gray-400 py-16 px-6 lg:px-20 border-t border-white/5" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-right">
          
          {/*logo ,dec*/}
          <div className="flex flex-col items-start space-y-6">
            <div 
              className="relative w-20 h-20 md:w-24 md:h-24 cursor-pointer hover:scale-105 transition-transform" 
              // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onClick={() => typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Image 
                src="/logo.jpeg" 
                alt="لوجو الفهد" 
                width={120} 
                height={120} 
                className="object-contain rounded-xl"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-[#D4AF37] font-black text-2xl tracking-tight">الفهد للديكور</h4>
              <p className="text-base leading-relaxed text-gray-500 max-w-xs"> {/* كبرنا الوصف هنا */}
                نحول خيالكم إلى واقع ملموس بأيدي خبراء متخصصين في أرقى ديكورات المدينة المنورة.
              </p>
            </div>
          </div>

          {/* 2. روابط سريعة */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-lg relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-[#D4AF37]">
              روابط سريعة
            </h4>
            <div className="flex flex-col gap-5"> {/* زودنا الـ gap للوضوح */}
              <button onClick={() => scrollToSection('about')} className="text-right hover:text-[#D4AF37] transition-all text-base font-medium flex items-center gap-2 group">
                <ArrowUpLeft size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                من نحن
              </button>
              <button onClick={() => scrollToSection('specialty-services')} className="text-right hover:text-[#D4AF37] transition-all text-base font-medium flex items-center gap-2 group">
                <ArrowUpLeft size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                خدماتنا
              </button>
              <button onClick={() => scrollToSection('works')} className="text-right hover:text-[#D4AF37] transition-all text-base font-medium flex items-center gap-2 group">
                <ArrowUpLeft size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                أعمالنا
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-right hover:text-[#D4AF37] transition-all text-base font-medium flex items-center gap-2 group">
                <ArrowUpLeft size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                اتصل بنا
              </button>
            </div>
          </div>

          {/* 3. تخصصاتنا */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-lg relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-[#D4AF37]">
              تخصصاتنا
            </h4>
            <div className="flex flex-col gap-5 text-base font-normal"> {/* كبرنا الخط هنا */}
              <p className="hover:text-[#D4AF37] transition cursor-default">تركيب بديل الخشب</p>
              <p className="hover:text-[#D4AF37] transition cursor-default">تركيب باركيه فخم</p>
              <p className="hover:text-[#D4AF37] transition cursor-default">شيبورد مودرن</p>
              <p className="hover:text-[#D4AF37] transition cursor-default">دهانات داخلية</p>
            </div>
          </div>

          {/* 4. تواصل معنا */}
        
          <div className="space-y-8 flex flex-col items-end" >
            <h4 className="ml-8 text-white font-bold text-lg relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-[#D4AF37]">
              تواصل مباشر
            </h4>
            <div className="flex flex-col gap-6">
              <a href="tel:+966544569332" className="flex items-center justify-end gap-4 hover:text-[#D4AF37] transition group">
                <span className="text-base font-bold tracking-wider">01145511112</span> {/* الخط هنا بقى أوضح */}
                <div className="p-3 rounded-xl bg-white/5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <Phone size={20} />
                </div>
              </a>
              <a href="mailto:abwbdwhalbry@gmail.com" className="flex items-center justify-end gap-4 hover:text-[#D4AF37] transition group">
                <span className="text-sm md:text-base font-medium">abwbdwhalbry@gmail.com</span>
                <div className="p-3 rounded-xl bg-white/5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm md:text-base"> {/* كبرنا حقوق الملكية */}
          <div className="flex items-center gap-8">
            <Facebook size={22} className="hover:text-[#D4AF37] cursor-pointer transition-colors" />
            <Music size={22} className="hover:text-[#D4AF37] cursor-pointer transition-colors" />
            <MessageCircle size={22} className="hover:text-[#D4AF37] cursor-pointer transition-colors" />
          </div>
          <div className="text-gray-600 font-medium text-center md:text-right">
            Copyright © 2026 <span className="text-[#D4AF37]">مؤسسة الفهد للديكور</span>. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;