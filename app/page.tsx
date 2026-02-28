"use client";
import Hero from "./_Components/Hero";
import About from "./_Components/About";
import Services from "./_Components/Services";
import SpecialtyServices from "./_Components/SpecialtyServices"; 
import Testimonials from "./_Components/Testimonials";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Hero />
      <About />
      <Services /> 
      <SpecialtyServices />
      <Testimonials/>
    </main>
  );
}