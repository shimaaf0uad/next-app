"use client";
import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Hero from "./_Components/Hero";
import About from "./_Components/About";
import FeaturesSection from "./_Components/FeaturesSection";
import Services from "./_Components/Services";
import Testimonials from "./_Components/Testimonials";
import Contact from "./_Components/Contact";

const projectsData = [
  { id: 1, title: "تركيب شيبورد مودرن", description: "تصميم وتنفيذ ألواح شيبورد جدارية بخلفيات مضيئة.", image: "/img/image.jpg", location: "المدينة المنورة" },
  { id: 2, title: "تركيب باركيه فخم", description: "أرضيات خشبية ألمانية مقاومة للخدش تم تركيبها بدقة.", image: "/img/immmmg.jpeg", location: "المدينة المنورة" },
  { id: 3, title: "بديل الرخام - لمسة ملكية", description: "تكسية جدران بألواح بديل الرخام الفاخرة بعروق متصلة.", image: "/img/image4.jpg", location: "المدينة المنورة" }
];

//  Hydration Error
const Navbar = dynamic(() => import('./_Components/Navbar'), { ssr: false });
const SpecialtyService = dynamic(() => import('./_Components/SpecialtyServices'), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="bg-black min-h-screen" />;
  }

  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturesSection />
      <SpecialtyService projectsData={projectsData} />
      <Services /> 
      <Testimonials />
      <Contact />
    </main>
  );
}