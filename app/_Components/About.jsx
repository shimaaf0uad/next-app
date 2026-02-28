
"use client"; 
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Paintbrush, Star, Hammer } from "lucide-react";

export default function About() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  if (!isClient) return null;

  return (
    <section id="about" className="py-20 bg-[#0a0a0a] text-white overflow-hidden border-t border-[#D4AF37]/20 text-right" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
     
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="w-full lg:w-[40%] relative"
          >
             <div className="rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl aspect-square group"> 
                <img 
                  src="/img/imgeeo.jpg" 
                  alt="ديكورات الفهد" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
             </div>
          </motion.div>

          
          <div className="w-full lg:w-[60%] space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              مؤسسة <span className="text-[#D4AF37]">الفهد للديكور</span>
            </h2>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { text: "تركيب باركية وخشب طبيعي", icon: Hammer },
                { text: "دهانات داخلية وخارجية ملكية", icon: Paintbrush },
                { text: "فريق فني خبير ومتخصص", icon: Star },
                { text: "أسعار تنافسية وجودة عالمية", icon: CheckCircle },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0px 10px 30px rgba(212, 175, 55, 0.2)",
                      borderColor: "#D4AF37" 
                    }}
                    className="group flex items-center gap-5 p-6 rounded-[2rem] bg-[#111111] border border-white/10 transition-all duration-500 cursor-pointer"
                  >
                    {/* motion icon*/}
                    <motion.div 
                      variants={{
                        hover: { rotate: 360, scale: 1.1 }
                      }}
                      whileHover="hover"
                      className="p-4 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500"
                    >
                      <Icon size={28} />
                    </motion.div>

                    <span className="text-lg font-bold text-gray-400 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-4">
              <a href="tel:0544569332" className="inline-block bg-[#D4AF37] text-black font-black py-4 px-12 rounded-2xl hover:scale-105 transition-all">
                تواصل معنا الآن
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}