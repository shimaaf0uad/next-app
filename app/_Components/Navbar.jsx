
"use client";
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return; 

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['about', 'specialty-services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      if (pathname === '/') {
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
              setActiveSection(`/#${section}`);
            }
          }
        });
        if (window.scrollY < 300) setActiveSection('/');
      } else {
        setActiveSection(pathname);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, mounted]);

  const navLinks = [
    { name: 'الرئيسية', hash: '/' },
    { name: 'حولنا', hash: '/#about' },
    { name: 'خدماتنا', hash: '/#specialty-services' }, 
    { name: 'مشاريعنا', hash: '/projects' },
    { name: 'اتصل بنا', hash: '/#contact' },
  ];


  if (!mounted) return null;

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled || isOpen ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-2xl py-2 border-b border-[#D4AF37]/20' : 'bg-transparent py-5'
    }`} dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex-shrink-0 z-[110]">
          <Link href="/">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/30 bg-black flex items-center justify-center transition-transform duration-500 hover:scale-105">
             <img src="/logo.jpeg" alt="لوجو" priority="true" className="w-full h-full object-contain" /> 
              {/* <img src="/logo.jpeg" alt="لوجو الفهد" className="w-full h-full object-contain" /> */}
            </div>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-x-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item) => {
            const isActive = activeSection === item.hash;
            return (
              <Link 
                key={item.name} 
                href={item.hash}
                className={`text-lg font-bold transition-all relative group tracking-wide ${
                  isActive ? 'text-[#D4AF37]' : 'text-white/90 hover:text-[#D4AF37]'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 right-0 h-0.5 bg-[#D4AF37] transition-all duration-500 rounded-full ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="z-[110] lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 hover:text-[#D4AF37] transition-colors">
            {isOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
          </button>
        </div>

        <div className="hidden lg:block w-24"></div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0a0a0a] transition-all duration-500 lg:hidden ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } z-[105] flex flex-col items-center justify-center gap-10`}>
        {navLinks.map((item) => (
          <Link 
            key={item.name} 
            href={item.hash}
            onClick={() => setIsOpen(false)}
            className={`text-3xl font-black transition-all relative group ${
              activeSection === item.hash ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
            }`}
          >
            {item.name}
            <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-[#D4AF37] transition-all ${
              activeSection === item.hash ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;