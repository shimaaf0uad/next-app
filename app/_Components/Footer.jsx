"use client";
import React from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white py-12 md:py-16 px-6 border-t border-yellow-900/20" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-right">
       
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-6">
             <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-b from-[#D4AF37] to-[#AA841D] rounded-2xl flex items-center justify-center shadow-lg rotate-3">
                <span className="text-black font-black text-xl md:text-2xl -rotate-3">الفهد</span>
             </div>
          </div>
          <h2 className="text-xl md:text-2xl font-black mb-3 text-[#D4AF37]">الفهد للديكورات</h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 max-w-xs">
            نحول خيالكم إلى واقع ملموس بأيدي خبراء متخصصين في المدينة المنورة.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300"><FaFacebookF size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300"><FaInstagram size={18} /></a>
            <a href="https://wa.me/966544569332" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300"><FaWhatsapp size={18} /></a>
          </div>
        </div>

        {/* 2. روابط سريعة - تنقلك للأقسام */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-[#D4AF37] pb-1">روابط سريعة</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">عن المؤسسة</a></li>
            <li><a href="#specialty-services" className="hover:text-[#D4AF37] transition-colors">خدماتنا</a></li>
            <li><a href="#projects" className="hover:text-[#D4AF37] transition-colors">أعمالنا</a></li>
          </ul>
        </div>

        {/* 3. تخصصاتنا - توصلك لقسم الخدمات */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-[#D4AF37] pb-1">تخصصاتنا</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#specialty-services" className="hover:text-[#D4AF37] transition-colors">تركيب بديل الخشب</a></li>
            <li><a href="#specialty-services" className="hover:text-[#D4AF37] transition-colors">تركيب باركيه فخم</a></li>
            <li><a href="#specialty-services" className="hover:text-[#D4AF37] transition-colors">شيبورد مودرن</a></li>
          </ul>
        </div>

        {/* 4. تواصل معنا - روابط فعالة (يرن ويبعت إيميل) */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-[#D4AF37] pb-1">تواصل معنا</h3>
          <div className="space-y-5">
            {/* رابط الاتصال: يفتح لوحة الاتصال فوراً */}
            <a href="tel:0544569332" className="flex items-center gap-3 text-gray-300 hover:text-[#D4AF37] transition-all group justify-center md:justify-start">
              <div className="p-2 rounded-full bg-yellow-900/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                <FaPhoneAlt size={14} />
              </div>
              <span className="font-bold">0544569332</span>
            </a>
            {/* رابط الإيميل: يفتح تطبيق البريد */}
            <a href="mailto:abwbdwhalbrq@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-[#D4AF37] transition-all group justify-center md:justify-start">
              <div className="p-2 rounded-full bg-yellow-900/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                <FaEnvelope size={14} />
              </div>
              <span className="text-xs break-all">abwbdwhalbrq@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-500">
        <p>Copyright © 2026 مؤسسة الفهد للديكور</p>
      </div>
    </footer>
  );
};

export default Footer;