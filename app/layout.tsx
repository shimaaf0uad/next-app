import "./globals.css";
import Navbar from "./_Components/Navbar";
import Footer from "./_Components/Footer"; 
import FloatingActions from "./_Components/FloatingActions"; 
import ScrollToTop from "./_Components/ScrollToTop";
export const metadata = {
  title: "عالم الدهانات | ألوان فخمة لمنزلك",
  description: "مؤسسة الفهد للديكور والدهانات بالمدينة المنورة",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased flex flex-col min-h-screen bg-slate-50">

        <main className="flex-grow">
          {children}
          <Navbar/>
        </main>

        
        <ScrollToTop/>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}