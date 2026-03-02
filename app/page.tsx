"use client";
import Navbar from "./_Components/Navbar";
import Hero from "./_Components/Hero";
import About from "./_Components/About";
import FeaturesSection from "./_Components/FeaturesSection";
import SpecialtyService from "./_Components/SpecialtyServices";
import Services from "./_Components/Services";
import Testimonials from "./_Components/Testimonials";
import Contact from "./_Components/Contact";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About/>
      <FeaturesSection/>
      <SpecialtyService/>
      <Services /> 
      <Testimonials />
      <Contact/>
      
    </main>
  );
}
