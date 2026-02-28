
// "use client";
// import React, { useState, useEffect } from 'react';
// import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'الرئيسية', hash: '/' },
//     { name: 'حولنا', hash: '#about' },
//     { name: 'مشاريعنا', hash: '/projects' },
//     { name: 'خدماتنا', hash: '#services' },
//     { name: 'اتصل بنا', hash: '#contact' },
//   ];

//   return (
//     <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
//       // غيرنا اللون للأبيض الشفاف في البداية، وللأسود الصريح عند الاسكرول
//       isScrolled || isOpen ? 'bg-[#0a0a0a] shadow-2xl py-2 border-b border-yellow-600/20' : 'bg-transparent py-5'
//     }`} dir="rtl">
//       <div className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center">
        
//         {/* 1. Logo */}
//         <div className="flex-shrink-0 z-[110]">
//           <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-lg border border-yellow-600/30">
//             <img 
//               src="/logo.jpeg" 
//               alt="لوجو الفهد" 
//               className="w-full h-full object-cover bg-black" 
//             />
//           </div>
//         </div>

//         {/* 2. Links */}
//         <div className="hidden lg:flex items-center gap-x-10 flex-grow justify-center">
//           {navLinks.map((item) => (
//             <Link 
//               key={item.name} 
//               href={item.hash}
//               className="text-lg font-bold transition-all hover:text-[#D4AF37] relative group text-white"
//             >
//               {item.name}
          
//               <span className="absolute -bottom-2 right-0 w-0 h-0.5 bg-gradient-to-l from-[#D4AF37] to-transparent transition-all group-hover:w-full rounded-full"></span>
//             </Link>
//           ))}
//         </div>

    
       
//       </div>

//       {/* 4. Mobile Menu (Menu الموبايل) */}
//       <div className={`fixed inset-0 bg-black transition-all duration-500 lg:hidden ${
//         isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
//       } z-[105] flex flex-col items-center justify-center gap-8`}>
//         {navLinks.map((item) => (
//           <Link 
//             key={item.name} 
//             href={item.hash}
//             onClick={() => setIsOpen(false)}
//             className="text-2xl font-black text-white hover:text-[#D4AF37] transition-all relative group"
//           >
//             {item.name}
//             <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#D4AF37] transition-all group-hover:w-full"></span>
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
"use client";
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', hash: '/' },
    { name: 'حولنا', hash: '#about' },
    { name: 'مشاريعنا', hash: '/projects' },
    { name: 'خدماتنا', hash: '#specialty-services' },
    { name: 'اتصل بنا', hash: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled || isOpen ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-2xl py-2 border-b border-yellow-600/20' : 'bg-transparent py-5'
    }`} dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* 1. Logo - كبّرنا الحجم هنا */}
        <div className="flex-shrink-0 z-[110]">
          <Link href="/">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-2xl border border-yellow-600/30 bg-black flex items-center justify-center transition-transform duration-500 hover:scale-105">
              <img 
                src="/logo.jpeg" 
                alt="لوجو الفهد" 
                className="w-full h-full object-contain" 
              />
            </div>
          </Link>
        </div>

        {/* 2. Desktop Links - القوائم في النص بالظبط */}
        <div className="hidden lg:flex items-center gap-x-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.hash}
              className="text-lg font-bold transition-all hover:text-[#D4AF37] relative group text-white/90 tracking-wide"
            >
              {item.name}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </div>

        {/* 3. Mobile Toggle - يظهر جهة اليسار */}
        <div className="z-[110] lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:text-[#D4AF37] transition-colors"
          >
            {isOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
          </button>
        </div>

        {/* مساحة وهمية لوزن الـ Flex في الديسكتوب فقط */}
        <div className="hidden lg:block w-24"></div>

      </div>

      {/* 4. Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0a0a0a] transition-all duration-500 lg:hidden ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } z-[105] flex flex-col items-center justify-center gap-10`}>
        {navLinks.map((item) => (
          <Link 
            key={item.name} 
            href={item.hash}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-black text-white hover:text-[#D4AF37] transition-all relative group"
          >
            {item.name}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#D4AF37] transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
