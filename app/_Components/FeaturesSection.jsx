"use client";
import { motion } from "framer-motion";
import { Gem, BadgeCheck, Users, Timer, Zap, ShieldCheck } from "lucide-react";
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
    icon: <ShieldCheck size={32} /> // هنا التغيير
  }
];
export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-[#0a0a0a] text-white overflow-hidden border-t border-yellow-700/10 text-right" dir="rtl">
  <div className="container mx-auto px-6 max-w-7xl">
    
    {/* العنوان الرئيسي المبسط */}
    <div className="text-center mb-12">
      <motion.h2 
        initial={{ opacity: 0, y: 15 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold tracking-tight" // صغرنا الخط وخليناه أرفع شوية (Bold مش Extrabold)
      >
        لماذا تختار <span className="text-[#D4AF37]">الفهد للديكور؟</span>
      </motion.h2>
      <div className="w-16 h-0.5 bg-[#D4AF37]/50 mx-auto mt-4"></div> {/* خط أنحف وأبسط */}
    </div>

    {/* شبكة الأسباب */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {reasons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            ease: "easeOut" 
          }}
          whileHover={{ 
            y: -8,
            boxShadow: "0 10px 30px -15px rgba(212, 175, 55, 0.2)", 
            borderColor: "rgba(212, 175, 55, 0.3)"
          }}
          className="group p-7 rounded-xl bg-[#111111] border border-white/5 transition-all duration-300 shadow-lg cursor-default"
        >
          <div className="text-[#D4AF37] mb-5 group-hover:scale-105 transition-transform duration-300">
            {item.icon}
          </div>
          
          <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#D4AF37] transition-colors">
            {item.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed font-light">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}