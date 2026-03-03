"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Gem, BadgeCheck, Users, Timer, Zap, ShieldCheck, Sparkle } from "lucide-react";

const reasons = [
  {
    title: "مواد ذات جودة عالية",
    desc: "نستخدم أرقى أنواع الأخشاب والدهانات العالمية لضمان نتائج تدوم طويلاً وتعكس معايير الفخامة.",
    icon: <Gem size={32} />
  },
  {
    title: "خدمات معتمدة",
    desc: "نلتزم بكافة المعايير المهنية المعتمدة، مما يمنح مشاريعنا المصداقية والموثوقية الكاملة.",
    icon: <BadgeCheck size={32} />
  },
  {
    title: "خبراء محترفون",
    desc: "نخبة من أمهر الفنيين والخبراء في عالم الباركية والدهانات لضمان تنفيذ هندسي دقيق.",
    icon: <Users size={32} />
  },
  {
    title: "التزام تام بالوقت",
    desc: "نحن في الفهد نقدر وقتكم، لذا نلتزم بتسليم المشاريع في المواعيد المحددة دون أي تأخير.",
    icon: <Timer size={32} />
  },
  {
    title: "استجابة فورية",
    desc: "فريقنا جاهز للرد على استفساراتكم وتقديم الحلول الفنية الفورية التي تناسب احتياجات مساحتكم.",
    icon: <Zap size={32} />
  },
  {
    title: "ضمان الفهد الشامل",
    desc: "نقدم ضماناً حقيقياً لمدة عام كامل على كافة أعمالنا، لأننا نثق فيما نقدمه من إبداع.",
    icon: <ShieldCheck size={32} />
  }
];

const ReasonCard = ({ item, index }) => {
  const cardRef = useRef(null);
  

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const relativeX = (mouseX / width) - 0.5;
    const relativeY = (mouseY / height) - 0.5;
    
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d", // تفعيل تأثير الـ 3D
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      className="group p-8 rounded-3xl bg-[#111111] border border-white/5 cursor-default relative overflow-hidden transition-all duration-300 hover:border-[#daa700]/30 hover:shadow-[0_15px_40px_-15px_rgba(218,167,0,0.2)]"
    >
      {/* Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#daa700]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* */}
      <div className="absolute top-6 left-6 text-[#daa700]/10 group-hover:text-[#daa700]/30 transition-colors duration-500">
        <Sparkle size={40} />
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10"> {/* رفع المحتوى عشان يظهر الـ 3D */}
        
        {/* أنيمشن لفة الأيقونة الذهبية */}
        <div className="text-[#D4AF37] mb-7 transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[360deg]">
          {item.icon}
        </div>
        
        {/* أنيمشن العنوان */}
        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors duration-500 tracking-tight">
          {item.title}
        </h3>
        
        {/* أنيمشن الوصف */}
        <p className="text-gray-400 text-base leading-relaxed font-light group-hover:text-white transition-colors duration-500">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#0a0a0a] text-white overflow-hidden border-t border-yellow-700/10 text-right" dir="rtl">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* - Responsive Title */}
        <div className="mb-20 text-center relative"> 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight italic">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d98c] to-[#AA841D]">
                لماذا اخترتنا
              </span>
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
              <div className="w-2 h-2 rotate-45 border border-[#D4AF37]/40 bg-black"></div>
              <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
            </div>
          </motion.div>
        </div>

        {/* - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <ReasonCard key={index} item={item} index={index} /> // استخدام الـ Component المخصص
          ))}
        </div>   
      </div>
    </section>
  );
}

